#!/bin/bash
LNG=$(cat _config.yml | grep "languages:")

OUT="${LNG/languages: [\"/}"
OUT="${OUT/\"]/}"
OUT="${OUT//\", \"/ }"
OUT="${OUT/en /}"

for lang in $OUT; do
  echo $lang;
  scripts/translation-status/check.sh $lang _i18n > translation_status/$lang.txt
done;
