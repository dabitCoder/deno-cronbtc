![image](https://drive.google.com/uc?export=view&id=1W9Ehbg4hy5i2Zu10aZc471i63tkRTGtX)

# Deno cronBTC

Cron job to get current BTC price.

## Why Deno

I found quite annoying to configure Node to work with Typescript. Babel configuration, dependencies, scripts to run the project... All these requirements are a way to waste time in really simple things that should not take more than two minutes.

Deno solves all these problems. 
* Typescript support out of the box. 
* Forget about Babel, scripts and all that stuff. Deno handles it for you. 
* No node_modules. You want a dependency? Import it from denoland and you are good to go. 

The only caveat I found of with Deno is testing. I think the default config Deno provides lacks some of the functionality that some libraries/frameworks provide in Node (such as mocha or jest). There are some modules built to help with that, but I did not found the one to stick with.

## Stack
* Deno
* Typescript
* Deno CRON dependency
* DotEnv dependency