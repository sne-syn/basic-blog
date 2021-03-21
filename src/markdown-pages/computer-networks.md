---
title: "Computer Networks"
date: "2021-03-19"
---

# Computer Networks

The Internet is one of the most important inventions of the XX century! It allows us to chat with friends, visit art galleries from home, receive online education, and vote. The ability to exchange information around the Globe forever changed the world.

**Latency** - The time it takes for a message to transfer.

In the '60s scientific commercials computers were already widely used in research labs and big companies. However, the data exchange between machines and their users was quite old-fashioned:  with punched cards, representing the data by absence or presence of holes in predefined positions, or with magnetic tapes, usually located in the vault. And there were some physical resources like printers or storage drives. It would be more practical to share them among several computers. 

From this practical needs was born an idea of **LAN** (Local Area Networks) - a relatively small network of close-by computers (2 machines or university campus with thousands of computers). One of the most famous LANs and widely used until today was the Ethernet (early '70s), created by Xerox PARC, - series of computers connected to a single, common ethernet cable. Whan a computer 'A' wants to share data with a computer 'B', it sends data as an electrical signal through the cable, pointing MAC address of its communicator. All the computers, included in this network, will see the signal but may ignore it if they are not mentioned in the transmitted data's header sent over the network.

ex. Message for MAC address F => Computer with MAC address F received the message \/

**MAC** - unique Media Access Control address => MAC address
Now MAC address is used for both Ethernet and Wi-Fi

This approach was called **CSMA** - **Carrier** (stands for any medium that carries data - copper wire, air for radio waves, etc.) **Sense Multiple Access**. It has its limit - **Bandwidth** (пропускная способность). That's why it was important to develop a way to avoid collisions when several computers tried to 'talk' at the same time (| | => * <= | |). An effective decision was to program computers to wait for 1s + X ms (random) before trying to re-transmit data if the line will be still occupied to wait for 2s / 4 / 8 / 16 ... more. This approach with an exponentially growing time was called **Exponential Backoff**.

For bigger networks was created another model with a smaller number of computer devices (one Collision Domain) communicated in one **Broadcast Domain** and connected with other groups by using a Network Switch, which won't allow transmitting data to the other group until it's necessary. 

- Hub - every connected device ends up in the the same Collision Domain.
- Switch - every single connected computer device creates OneCollision Domain
- Router - every single connected computer device creates OneCollision Domain + more fancier features

The Internet interconnects a bunch of smaller networks in the biggest network allowing global communication to happen. This big network has multiple flexibles paths to tranmit data and is very effective if any part of the connection is broken. 

Routing with Message Switching - a bunch of points connected with each other into the big web, allowing to reach the destination through several possible stops - **hop count** (number of stops) stored with the message. In order not to clog up the network messages are chopped up into small pieces (packets) and may travel independently to their destination (IP - Internet Protocol = destination address) using differents hop stops and routes. Network routers aimed to balance the load across every route they care about to ensure delivery - congestion control.
**Packet Switching**.

This cooperative work was called - **the Internet Control Message Protocol** (ICMP) and **the Border Gateway Protocol** (BGP).

Get info from CS Harvard about IP address (0 - 250)The ancestor of the modern Internet was the ARPNET, created by a US agency, funded by the Advanced Research Projects Agency, and used to connect US research labs and even London lab by satellite link. Since then networks were able to connect not dozens but billions of computer devices around the Globe.

**Internet of things**

**Switching types**

- circuit switching - two network nodes establish a dedicated communication channel (used by military, banks, large companies). Channel is used by full capacity. Fast and reliable connection. less flexible, expensive, easy to break. reserve the whole bandwidth in advance.
- message switching - the message has no limits, may clog up a route. Text type.
- package switching - binary type

HTTP - is a set of conventions which dictate how client (web browser) talks to a web server. 

418 - I'm a Teapot(April's Fool joke 1998)

test out request 

ex.  **curl -I http://anadea.info**

IP - Internet Protocol - is a unique address

ports ("well-known ports")

- :25 mail
- :22 ssh (secure shell)
- :80 http
- :443 https
