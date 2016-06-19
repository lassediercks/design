#!/bin/bash

#* go to gh-pages branch
git co gh-pages

#* get new changes from local master
git rebase master

#* push to gh-pages
git push origin gh-pages

#* go back to master
git co master