# Template

In this template I want to have a ready to start coding a SPA with the required configuration and without the unnecessary boilerplate.

## Motivation

A while ago my company decided to implement storybook keep track of developed components. While doing so, the developer responsible "got it to work" by following different tutorials and copy pasting things. When the time came to fix some problems and to do some improvements, it was impossible to fix anything without breaking something else, because we didn't know what was doing what.

Although I don't need to know everything that is underneeth my solution, I want to know which pieces are used where and why.

## TODO List

1.  React
2.  Typescript
    1. Understand keys I use in TSConfig.
3.  Webpack
    1.  @aliases
    2.  Bigger libs in isolated webpack bundle
    3.  Cache for js bundles in PRD
    4.  Minified css with cache
    5.  Source maps
4.  Sass (I used .less in my professional work so I decided to try the most popular pre processor, sass)
    1.  Typings for styles
5.  Linter for javascript, typescript and scss files.
    1. ESLint + Stylelint
6.  Fonts set up
7.  SVGs set up
8.  Webpack dev server + Hot reload

### Optimizations TODO list:

1. Removing sourceMap generation for libs
2. [Pollyfills, loaded only for browsers that need them.](https://medium.com/hackernoon/polyfills-everything-you-ever-wanted-to-know-or-maybe-a-bit-less-7c8de164e423)
3. Prettier combined with ESLint
4. VSCode recommended settings file
