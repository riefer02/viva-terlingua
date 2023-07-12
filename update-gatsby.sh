#!/bin/bash

packages=(
  "gatsby-plugin-env-variables"
  "gatsby-plugin-image"
  "gatsby-plugin-manifest"
  "gatsby-plugin-postcss"
  "gatsby-plugin-react-helmet"
  "gatsby-plugin-resolve-src"
  "gatsby-plugin-sass"
  "gatsby-plugin-sharp"
  "gatsby-source-filesystem"
  "gatsby-source-strapi"
  "gatsby-transformer-remark"
  "gatsby-transformer-sharp"
)

for package in "${packages[@]}"
do
  current_version=$(npm list $package | grep $package | awk -F@ '{print $2}')
  latest_version=$(npm show $package version)
  
  if [[ $current_version != $latest_version ]]; then
    echo "Upgrading $package from $current_version to $latest_version"
    npm install $package@latest --force
  else
    echo "$package is already up to date"
  fi
done
