#!/bin/bash

npm run build
mv build docs
git add docs
git commit -m "Published build"
git push origin master
