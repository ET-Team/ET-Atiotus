#!/bin/bash
PACK_NAME=ET-Atiotus
MAJOR_VERSION=0
MINOR_VERSION=1
ITERATION_VERSION=0

fileName="$PACK_NAME-$MAJOR_VERSION.$MINOR_VERSION.$ITERATION_VERSION-dev.zip"

cd $PACK_NAME/

mv minecraft src

zip -r $fileName src

zip -m $fileName manifest.json

cd ..

mv ./$PACK_NAME/$fileName artifacts/