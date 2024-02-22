#! /usr/bin/env sh

# Example deploy in Github Pages

set -e

# Install pnpm with corepack

corepack enable pnpm@latest

pnpm run build

cd dist


# Setup with Git

git init
git checkout -b main
git add -A
git commit -m "Deployment application with github-pages"


# git push -f git@github.com:lab-land/dashboard.git main:gh-pages

cd .

