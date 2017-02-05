#!/bin/bash

rm -rf build
npm run build
cp CNAME build/CNAME
git add build
git commit -m "Added new build"
git push origin master
git subtree push --prefix build origin gh-pages
