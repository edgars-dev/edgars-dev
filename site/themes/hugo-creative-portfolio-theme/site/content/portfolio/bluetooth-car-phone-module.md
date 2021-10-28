---
title: Bluetooth car phone module
draft: false
date: 2019-05-25T19:25:00.000Z
tags:
  - car
  - bluetooth
  - audio
image: /uploads/img_6866.jpeg
weight: 1
---
![](/uploads/img_6866.jpeg)

My car had an integrated phone module that works together with radio, speakers and has its own speaker and microphone. Problem was that it it is a bit outdated, because only way how to use it to put a SIM card in it. <!--more-->It is not very convenient. So I wanted to leave everything as original as possible just to "replace" sim card feature with bluetooth so that it connects to mobile phone and everything else is the same.



![](/uploads/img_6867.jpeg)

 I redesigned the motherboard for phone module. It still has access to CAN bus, still can play sounds on speaker that is built in seat, can use microphone that is in rear view mirror but it also have possibility to connect to mobile phone using bluetooth and also I replaced antenna connecor with precisely same size (was lucky to find one) 8-pin connector where it could be connected to radio so that it could be used to play music from mobile phone as well.

![](/uploads/yagt2768.jpeg)

Initial tests.

![](/uploads/img_6865.jpeg)

Assembled with cable that connects phone module with radio.

![](/uploads/img_8372.jpeg)

This is replacement board for SIM card acceptor. Matchbox for size comparison. I wanted to make some sense for the hole where SIM card was supposed to go. So I replaced it with my PCB that has micro SD card holder and card reader IC, so that phone module could play music from SD card as well.

![](/uploads/img_6862.jpeg)

Different view from assembled module.

**Things still to do:**

* Test and reduce noise in audio channel
* Write firmware