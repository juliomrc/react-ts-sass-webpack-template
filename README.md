# react-typescript-webpack-sass-template

## Motivation

Although I don't need to know everything that is underneeth my solution, I want to know which pieces are used where and why. To achieve that, there is no better way than assembling this whole template myself.

## Features

1.  React + Typescript
2.  Webpack
    1.  @aliases
    2.  Source maps
    3.  SVGs
    4.  Bundling optimization:
        1. Bigger libs in isolated webpack bundle
        2. PRD bundle caching
3.  Webpack dev server + Hot reload
4.  Sass
    1.  Typings for styles
5.  Linters + Formatter
    1. ESLint + Stylelint + Prettier

## TODO list:

1. Fonts set up
3. Removing sourceMap generation for libs
4. [Pollyfills, loaded only for browsers that need them.](https://medium.com/hackernoon/polyfills-everything-you-ever-wanted-to-know-or-maybe-a-bit-less-7c8de164e423)
5. Prettier combined with ESLint

### React + Typescript

I believe typescript isn't just usefull. It is essencial.
Typings not only prevent unintentionally breaking an application but also help speed up development with tools like intellisence and [typedoc](https://typedoc.org/guides/doccomments/).

### Webpack

### Webpack dev server + Hot reload

Not having to build the whole solution after every change is now a standart in every solution, so there isn't much to elaborate here.
To help speed up development even more, eslint-loader is only enabled for PRD.

For instance, when developing a first draft for some component, I don't want to have to define types for everything because I know I am still changing them all the time. It is nice that my editor keeps telling me it is wrong and I can't forget about it, but it isn't nice that my application won't build and let me see this first draft in the browser.

### Sass

A css preprocessor is usefull and helps keeping the codebase organized.

Less would surely be enough for mostly every functionality, but I used it professionaly and decided to try sass. Plus, as pointed out in this [article](https://css-tricks.com/sass-vs-less/) written by someone with appaerently a much better preprocessor understanding than me, sass is more popular and overall better.

Typings for css also provide a huge safety line when working with shared styles.

### Linters + Formatter

Regarding linters, TSLint is being deprecated in favor of ESLint and I am not aware of any real direct competition to Styleling, so these were obvious choices.

Regarding a formatter, I only used VSCode default formatter professionaly. However, Prettier is pretty popular, has plenty of support and is easy to integrade with ESLint, which saves plenty of development time (automation is wondrful).
