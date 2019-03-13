#!/bin/bash
LANG=$1
DIR=${2:-_i18n} #set dir to ./_i18n/ by default

if [ "$LANG" == "" ]; then
  echo "Use this script like this:";
  echo "  $0 <LANG (e.g. ko)> [i18n-DIR (e.g. _i18n)]";
  exit 1;
fi;

echo "Last update: $(date --iso-8601=seconds)";
echo "Checking translation for '$LANG' in path: $DIR";
echo "";

for file in $DIR/en.yml $(find $DIR/en -type f -not -path "*/en/_posts/*"); do
  translated_file=$(echo "${file/_i18n\/en/_i18n\/$LANG}");
  if [ ! -f $translated_file ]; then
    echo "TODO:      $translated_file";
    continue;
  fi;
  #time=$(stat -c "%y" $file);
  #translated_time=$(stat -c "%y" $translated_file);
  #timestamp=$(stat -c "%Y" $file);
  #translated_timestamp=$(stat -c "%Y" $translated_file);
  time=$(git log -1 --date=iso --format="%ad" -- $file);
  translated_time=$(git log -1 --date=iso --format="%ad" -- $translated_file);
  timestamp=$(git log -1 --date=unix --format="%ad" -- $file);
  translated_timestamp=$(git log -1 --date=unix --format="%ad" -- $translated_file);
  #compare content of english and translated file
  md5=$(cat $file | md5sum);
  md5_translated=$(cat $translated_file | md5sum);

  if [ "$md5" == "$md5_translated" ]; then
    echo "DUPLICATE: $translated_file";
    echo "  delete this file, it will automatically fallback to english";
    #rm $translated_file; #use at your own risk
  elif [ $translated_timestamp -lt $timestamp ]; then
    echo "UPDATE:    $translated_file";
    echo "  english was modified at     $time";
    echo "  translation last updated at $translated_time";
  fi;
done;
