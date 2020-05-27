# react-typescript-webpack-sass-template

## Motivation

Although I don't need to know everything that is underneeth my solution, I want to know which pieces are used where and why. To achieve that, there is no better way than assembling this whole template myself.

## Features

1.  [React + Typescript](#react--typescript)
2.  [Webpack](#webpack)
    1.  @aliases
    2.  Source maps
        1. Only for development and not for libs
    3.  Inline SVGs
    4.  Pollyfills
    5.  Favicon for dev and PRD
    6.  Bundling optimization:
        1. Bigger libs in isolated webpack bundle
        2. PRD bundle caching
        3. Pollyfills loaded only when necessary
3.  [Webpack dev server + Hot reload](#webpack-dev-server--hot-reload)
    1. Skipping some loaders for development build
    2. Support for SPA routing
4.  [Sass](#sass)
    1.  Typings for styles
5.  [Linters + Formatter](#linters--formatter)
    1. Stylelint
    2. Prettier integrated with ESLint

## TODO List:

-   README.md

---

## React + Typescript

I believe typescript isn't just usefull. It is essencial.
Typings not only prevent unintentionally breaking an application but also help speed up development with tools like intellisence and [typedoc](https://typedoc.org/guides/doccomments/).

---

## Webpack

Webpack's documentation is quite huge and sometimes it is hard to find exactly which key or parameter is missing in order to achieve something. However, it is immensly popular and powerful so it is the way to go.

Plugins and loaders are isolated in their own methods. In case we want to create a separate webpack build for part of this solution in the future, probably we still want to use the same loaders for the same types of files, so isolating these configurations might be helpfull.

Regarding code bundling, there are a few optimizations I wanted done out of the box:

**Bundle separation and caching**

Out of the box, webpack does a pretty good job here.
Bundles are generated using `[contentHash]` for PRD and there is a single entry point with a loader.
Common dependencies are isolated in their own bundle to avoid downloading the same thing twice.
For this application, I am including all node modules in the vendors bundle, but as an application grows, it makes sense to split these into smaller bundles, grouped by _changing frequency_. If we update one package, we do´t want the user to download all our other big dependencies again.

**Polyffils**

Pollyfills are necessary for _some_ users but just unncessesary bilerplate for **most**.
Perfect solution? [This](https://medium.com/hackernoon/polyfills-everything-you-ever-wanted-to-know-or-maybe-a-bit-less-7c8de164e423) puts it out in an easy to read and yet understandle way. [Webpack-polyfill-injector](https://www.npmjs.com/package/webpack-polyfill-injector) does exactly what we want.
We should just take into consideration that due to the validation script done on page load, our entry point bundle will also change if we add and or remove some polyfill.

I included what will most likely be used in my application. Adjust to your own needs.

---

## Webpack dev server + Hot reload

Not having to build your whole application after every change, no matter how small it is, is now a standart in every solution, so there isn't much to elaborate here.

**Skipping some loaders for development build**

To help speed up development even more, eslint-loader and styleLintPlugin are only enabled for PRD build.

When developing a first draft for some component, I don't want to have to define types for everything because I know I am still changing them all the time. It is nice that my editor keeps telling me it is wrong and I can't forget about it, but it isn't nice that my application won't build and let me see this first draft in the browser.

---

## Sass

A css preprocessor is usefull and helps keeping the codebase organized.
Regarding the Less vs Sass battle, Less would surely be enough for mostly every functionality. However, as pointed out in this [article](https://css-tricks.com/sass-vs-less/) written by someone with appaerently a much better preprocessor understanding than me, sass is more popular and overall better.

**Typings for styles**

.d.ts files are also created for .scss files.
Typings for css not only help speed up devolopment but also provide a huge safety line when working with shared styles.

---

## Linters + Formatter

Regarding linters, TSLint is being deprecated in favor of ESLint and I am not aware of any real direct competition to Styleling, so these were obvious choices.
Regarding a formatter, I only used VSCode default formatter professionaly. However, Prettier is pretty popular, has plenty of support and is easy to integrade with ESLint, which saves plenty of development time (automation is wondrful).

Prettier is integrated with esLint so that auto formatting a file will never collide with esLint rules. Also, when formatting a file, auto fixable problems should be automatically formatted.
