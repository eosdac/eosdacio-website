#!/bin/bash
LNG=$(cat ../../_config.yml | grep "languages:")

OUT="${LNG/languages: [\"/}"
OUT="${OUT/\"]/}"
OUT="${OUT//\", \"/ }"

for lang in $OUT; do
  echo $lang;
  ./check.sh $lang ../../_i18n > ../../translation_status/$lang.txt
done;
