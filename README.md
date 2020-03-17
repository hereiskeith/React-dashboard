# 2019 Q4 Frontend Entry Submission

## Summary

This is not an exhaustive examination of your skill-set, rather we are trying to ensure a basic understanding of the subject matter. You are tasked with creating a simple faux dashboard with a sign in, and a single overview page.

There are no tricks here, nor are we looking to see if you'll cover every edge case. You are also not expected to replicate our design perfectly, so if you're using a framework that can estimate the design enough that's good enough; closer is better, but not necessary. You must use [React.js], and [Highcharts] for the charts. For everything else you may use any library/framework you like. Keep in mind, we will reward using [Sass], and the use of grid layout frameworks, themes, and generally things that enforce consistency, and modularity.

We expect this test to take anywhere from 4 to 10 hours of your focused time (assuming you already have all the tooling installed on your machine etc...)

### Running instructions

Setup your environment, and project so that we may be able to do the following to test it:

* `yarn` or `npm install` installs all dependencies
* `yarn start` or `npm run start` starts the server
* We should be able to access the app through `http://localhost:3000/`

Make sure you take a look at the submission instructions at the bottom after you've completed the test.

## Test App Specs

Below you will find two links showcasing the design of this faux dashboard, since we're also testing your ability to create responsive web apps.

*(you'll need to enter this password to view the designs: `19Q4FEtest`)*

* [Desktop Design]
* [Mobile Design]

Try to get your app to be as similar to the design as possible but

Data for this faux dashboard can be anything you like, we recommend you use an open API like https://www.mercadobitcoin.net/api/BTC/trades

You can use others like the ones listed here https://github.com/public-apis/public-apis#cryptocurrency


### 1. Login Pages

We should be able to create a user through registration, and be able to sign-in with that user. The user/password doesn't need to persist through a refresh. So storing it in memory is fine.

I should be able to also submit my email to the `forgot email` process no need to actually send an email.

### 2. Overview Page

We should be able to toggle the visibility of the lines on the all charts by clicking on the legend. Resizing the window should reflow the dashboard components so they remain legible.

### 3. About Me Page

On this page you can leave your information so that we may be able to reach you.

---------

## What we're looking for

You'll be rewarded for:

* clean, structured code
* concise, and readable code
* clean architecture
* clean folder structure
* using the latest ES syntax (>= stage 3)
* using linters, and having consistent patterns
* jsdoc, typescript definitions
* using [React.js]
* using [Highcharts]
* using [Sass]


## Submission instructions

We recommend you fork this repo, and extend access to our CTO `"Amin El-Naggar <amin@alfangroup.com>"` as a member in your repo (ensure we have role with enough permissions to view the project). We recommend that you don't make your repo public.


[Highcharts]:https://www.highcharts.com/
[React.js]:https://reactjs.org/
[Sass]:https://sass-lang.com/

[Desktop Design]:https://xd.adobe.com/view/59305f66-594e-4060-6288-b389f355cd55-2f01/
[Mobile Design]:https://xd.adobe.com/view/46131536-50de-40c1-6887-aa5fa8578f9a-3022/