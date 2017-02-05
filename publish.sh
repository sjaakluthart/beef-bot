#!/bin/bash

rm -rf docs
rm -rf build
npm run build
mv build docs
cp CNAME docs/CNAME
git add docs
git commit -m "Published build"
git push origin master
