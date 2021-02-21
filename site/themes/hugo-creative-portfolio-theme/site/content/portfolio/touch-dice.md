---
title: Touch Dice
draft: false
date: 2012-07-08T16:34:00.000Z
tags:
  - for fun
image: /img/img_0246.jpg
weight: 1
---
![Dice](/img/img_0246.jpg "Dice")

This is one of my first finished projects. At the time when I was studying at College I wanted to build something so that it is finished, because back then usually I lost interest to finish the project once I found out how to do it. 
<!--more-->
So I decided to make something simple but till the point that I can say that it is finished and show it to somebody else who is not related to electronics engineering and still would understand it.

###### Hardware:

* PIC12F629 microcontroller
* TTP-223 for touch sensing

###### Features:

It can detect touch, it has seven LED's for displaying current dice number and it has beeper for making clicking noises because there was still one of six microcontroller GPIO pins left unused so I decided to use it as a sound output.

###### Algorithm:

I don't have the code for this anymore, but the workflow is simple - mcu is sleeping until the interrupt is occurred by touch sensor pulling up the mcu's interrupt pin. It wakes up, shows last number by doing a "wake up dimming animation" and waits for another touch. Then, if it is released immidiately, it calculates a pseudo random number and does a "slow down rolling animation" until it stops and shows the actual number. But if the hand is still kept on the dice then it is doing rolling animation until released, then slows down and shows the actual number from the time when it was released so this way no pseudo random calculation is done and the result is kinda more natural. Then, if no touches occur in a reasonable time, it goes back to sleep, consuming few microamps.

See video below

{{< youtube QA8NKDWICgs >}}