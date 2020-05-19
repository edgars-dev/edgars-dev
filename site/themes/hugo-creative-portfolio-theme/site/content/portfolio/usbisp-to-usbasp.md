---
title: USBISP to USBASP
showonlyimage: false
draft: false
date: 2020-05-19T07:37:37.385Z
weight: 0
---
Why this is a link? Changed from admin panel. I needed USBASP programmer and recently I bought this [USBISP](https://www.ebay.com/itm/262136733478) by inattention.
Turns out it can be easy modified to work as USBASP. Just by changing firmware.
<!--more-->
I found tutorial on how to do it, borrowed a working USBASP from a friend and was almost sure it shouldn't take longer than 10 mins to do the trick. But there were some difficulties.

So, let's begin. You gonna need a working USBASP programmer.

* First grab firmware files from this site
* Then you have to find out which mcu is used on your newly bought programmer. MEGA8, MEGA48 or MEGA88. Change makefile accordingly

```
MMEGA88              MEGA48               MEGA8 TARGET=atmega88      TARGET=atmega48      TARGET=atmega8HFUSE=0xdd           HFUSE=0xdd           HFUSE=0xc9LFUSE=0xff           LFUSE=0xff           LFUSE=0xef
```

* Also you gonna need to modify source code. In file main.c find this

  ```
  int main(void) {  
    uchar i, j;  
    /* no pullups on USB and ISP pins */
      PORTD = 0;
      PORTB = 0;
      /* all outputs except PD2 = INT0 */
      DDRD = ~(1 << 2);
  ```
  and replace last line so that it looks like this

```
int main(void) {
  uchar i, j;
  /* no pullups on USB and ISP pins */
  PORTD = 0;
  PORTB = 0;
  /* all PDx input */
  /* MK-USBISP v3.0 */
  DDRD = 0x00;
```

* Every variable with PROGMEM at the beginning has to be constant - with "const" before it otherwise it won't compile with newer versions of avrdude. These variables are in files usbdrv.h and usbdrv.c
* Make .hex file by typing "make main.hex" in Linux bash terminal. Before that - open source files folder with "cd" command.
* Now you have to short self programming contacts on USBISP device you want to modify. There is a writing on PCB silkscreen at the bottom "<- UP ->". Soldering iron helps a lot.
* Connect working USBASP programmers 10 pin header to USBISP programmers header one on one.
* Plug in USBASP in your PC and paste this line in bash

`sudo avrdude -p m88 -c usbasp -U flash:w:main.hex:i`

change "m88" accordingly mcu to "m8" or "m48" if needed. Press Enter, wait for firmware to be burned, after that, unplug devices, remove programming jumper wire from newly programmed USBISP which is now USBASP and try it out!

Git with modified source files and .hex file for MEGA88 here: [USBISP-USBASP](https://github.com/edgars-dev/USBISP-USBASP)

References:
http://club.dx.com/reviews/151604/565379
http://www.sciencetronics.com/greenphotons/?p=938

**Update:**

After I did all the firmware changes I also had to make some hardware changes.
The problem was that after this newly made USBASP is connected to computer, it enumerates itself, everything ok. After another device is connected to this device's programming port (for example Arduino MEGA), which is not powered by anything else, then for a shot moment USBASP kinda loses power. It is still listed in device list in Linux bash after command "lsusb", but it doesn't work anymore until it's unplugged and plugged back.
I fixed this by soldering two tantal capacitors on power line. See pictures below.

![](/img/portfolio/file_001.jpeg)
![](/img/portfolio/file_000-1.jpeg)
