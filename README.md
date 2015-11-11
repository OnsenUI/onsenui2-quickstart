# Onsen UI 2.0 beta Quickstart

This repository will get you up and running quickly with the Onsen UI 2.0 beta.

## Prerequisites

To run the samples, you need to have the following programs installed:

* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

## Running

The repository is designed to help you get started with Onsen UI 2.0 instantly. Just type the following commands in a terminal:

```bash
git clone https://github.com/OnsenUI/onsen2-quickstart.git
cd onsen2-quickstart/
npm install
gulp serve
```

This will install the required libraries and start a web server. The URL will be displayed in the terminal so you can go ahead and open that URL in a browser.

## Running as a Cordova app

The quickstart repository is packaged as a quickstart app, so you can actually deploy it to your phone as a hybrid app. Before you do this, please make sure you have installed Cordova:

```bash
[sudo] npm install -g cordova
```

Once Cordova is installed, you also need to add a platform to deploy to. To add the `android` platform type the following:

```bash
cordova platform add android
```

This requires you to set up an Android development environment. Check out the [Cordova Platform Guides](https://cordova.apache.org/docs/en/5.1.1/guide/platforms/index.html) to learn how to do that.

When everything is set up, you can plug in your Android device using USB and deploy the app:

```bash
cordova run android
```

If you want to deploy to an iOS device the prodecure is almost the same. Keep in mind that in order to deploy to an iOS device you need a Mac computer with XCode installed.

## Bug reports and issues

Onsen UI 2.0 is still in beta. We want to make it as good as possible before releasing the stable version. If you find any bugs or if you have any suggestions on how to improve it, please [open an issue](https://github.com/OnsenUI/OnsenUI/issues/new) on GitHub.
