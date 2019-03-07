#!/bin/bash
find ./en -name '*.md' | while read line; do
	ls -d */ | while read directory; do
    if [ "$line" -nt "./$directory/${line:4}" ]
    then
    	echo "$line is newer than ./$directory${line:5}"
    fi
    done
done