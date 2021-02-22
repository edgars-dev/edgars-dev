---
title: Vehicle CAN bus
date: 2017-06-05T17:29:00.000Z
tags:
  - car
  - canbus
image: /img/can.jpg
weight: 1
---
![](/img/can.jpg)

I was interested to play around with CAN bus. First it was interesting to just scan those messages and do something when specific message is *heard*. Then I wanted try to control devices in can bus also.

<!--more-->

Last weekend I set myself a goal. I wanted to show custom message in DIM panel's LCD display.

Started to think which modules are showing messages and the easiest seemed phone module. I tried to remove it and see what messages does it send, but turned out it was waiting for some CAN bus messages and without them it was not very *talkative*. But at least I found out the address and I could place it back and scan all the messages that it is sending. So I figured out that there is a message to turn on/off the display and then there are multiple messages to show all the text on display because it does not fit in a single CAN message.

After figuring this out I then removed the phone module again and connected Arduino with CAN module, created a script that emulates phone module and shows my own text.