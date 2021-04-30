---
title: "Computer Networks."
date: "2021-03-20"
---
Computers can communicate with each other as humans do. They can talk and listen, participate in a dialog or a polylog, and broadcast the information. They can send the data carefully, making sure that at the other end, the message was fully received. Or they can be in a rush, trying to send as much data as possible and give an overview of it to the receiver ASAP.

And to really understand networking, we have to know the components involved in the communication process. There are several models explaining how the network is structured and works. But in this article, we are going to discuss a 5-layer TCP/IP model.

* Physical Layer<br>
* Data-link Layer<br>
* Networking Layer<br>
* Transport Layer<br>
* Application Layer<br>

Every layer of this model stays on its predecessor's shoulders. You cant climb on its top if there is some error below. So this structure allows IT-specialists to isolate the problem and fix it without messing with neighboring layers.

I propose that we imagine ourselves setting up the computer networking in our house. By default we have several computers and one printer. 
We will start with a Physical Layer. First step will be to create a Local Area Network (LAN) - a relatively small network of close-by computer devices (all our computers, printer). We can connect one computer to a printer by cable. Lets see what type of cable we can use:

- copper - cat5, cat5e, cat6 - sends 0s and 1s by chanching voltage impulses. 
- fiber - lights

Then we have to find an appropriate plug-in in our computer. And use it in order to set up a connection. Okay, now our computer and printer are connected. But others computers aren't able to send their requests to the printer. And computers can't communicate with each other. In order to connect all our devices in the same LAN we are going to use Hub. This device allows us to connect all the devices into a one LAN and now we are able to send data throuth our copper cables to everyone. What if we want to print a picture on printer but not to share it with everyone? Well every device has unique MAC address, even our printer. So we will send our picture and we will mention a printer's MAC address, so others computer devices will know that the data isn't for them and will ignore a message. Great.

**Latency** - The time it takes for a message to transfer.

In the '60s, scientific commercials computers were already widely used in research labs and big companies. However, the data exchange between machines and their users was quite old-fashioned:  with punched cards, representing the data by absence or presence of holes in predefined positions, or with magnetic tapes, usually located in the vault. Also, there was no way to share physical resources like printers or storage drives. 

From this practical needs was born an idea of **LAN** (Local Area Networks) - a relatively small network of close-by computers (2 machines or university campus with thousands of computers). One of the most famous LANs and widely used until today was the Ethernet (early '70s), created by Xerox PARC - series of computers connected to a single, common ethernet cable. When a computer 'A' wants to share data with a computer 'B', it sends data as an electrical signal through the cable, pointing MAC address of its communicator. All the computers included in this network will see the signal but may ignore it if they are not mentioned in the transmitted data's header sent over the network.

ex. Message for MAC address F => Computer with MAC address F received the message \/


**MAC** - unique Media Access Control address => MAC address
Now MAC address is used for both Ethernet and Wi-Fi

This approach was called **CSMA** - **Carrier** (stands for any medium that carries data - copper wire, air for radio waves, etc.) **Sense Multiple Access**. It has its limit - **Bandwidth** (пропускная способность). That's why it was important to develop a way to avoid collisions when several computers tried to 'talk' at the same time (| | => * <= | |). Several people are trying to talk at the same time (a great problem of our team's zoom-calls). An effective decision was to program computers to wait for 1s + X ms (random) before re-transmitting data if another device will still occupy the line to wait for 2s / 4 / 8 / 16, etc. more. This approach with an exponentially growing time was called **Exponential Backoff**.

For bigger networks was created another model with a smaller number of computer devices (one Collision Domain) communicated in one **Broadcast Domain** and connected with other groups by using a Network Switch, which won't allow transmitting data to the other group until it's necessary. 

- Hub - every connected device ends up in the same Collision Domain.
- Switch - every single connected computer device creates OneCollision Domain
- Router - every single connected computer device creates OneCollision Domain + fancier features

The Internet interconnects a bunch of smaller networks in the biggest network allowing global communication to happen. This big network has multiple flexibles paths to transmit data and is very effective if any part of the connection is broken. 

Routing with Message Switching - a bunch of points connected into the big network allows reaching the destination through several possible stops - **hop count** (number of stops) stored with the message. In order not to clog up the network, messages are chopped up into small pieces (packets) and may travel independently to their destination (IP - Internet protocol = destination address) using differents hop stops and routes. Network routers aimed to balance the load across every route they care about to ensure delivery - congestion control.

**Packet Switching** - an approach to chop up data into **small packets** and pass these along flexibles routes with spare capacity.
It results to be so efficient and fault-tolerant, so the whole Internet is based on this approach.

The modern Internet's ancestor was the ARPNET, created by a US agency, funded by the Advanced Research Projects Agency, and used to connect US research labs and even London lab by satellite link. Since then, networks were able to connect not dozens but billions of computer devices around the Globe.

** Internet of things**

**Switching types**

- circuit switching - two network nodes establish a dedicated communication channel (used by military, banks, large companies). Channel is used by full capacity. Fast and reliable connection. Less flexible, expensive, easy to break. Reserve the whole bandwidth in advance.
- message switching - the message has no limits, may clog up a route. Text type.
- package switching - binary type

HTTP - is a set of conventions that dictate how a client (web browser) talks to a web server. 

418 - I'm a Teapot(April's Fool joke 1998)

test out request 

ex.  **curl -I http://anadea.info**

IP - Internet Protocol - is a unique address.

ports ("well-known ports")

- :25 mail
- :22 ssh (secure shell)
- :80 http
- :443 https


_____

The first connection on our way to the Internet is LAN, which may include every device connected to a Wi-Fi router. This router connects to the WAN (**Wide Area Network**) run by contracted Internet Service Provider (companies like Vodafone, Moviestar, etc.). WAN may include the whole neighborhood, and then that network will connect to an even bigger WAN for an entire city, for example. After several more hops, the network will be ultimate to the Internet's backbone - a gigantic router with super high-bandwidth connections running between them.
 
See the route data with the traceroute command on the Terminal.

The Internet is a huge distributed network that sends data as little packets. If your data is big enough - it'll be broken up into many small packets. Those packets have to conform to a standard called IP (Internet Protocol). Every set of numbers in IP address allows packets to find their way to this unique address and works very similar to a postal address. 

But IP cares only about the destination and appropriate packet size. This information is stored in IP Header - unique for every data fragment.

[ |IP HEADER| |DATA PAYLOAD| ]
   <---- PACKET ---->

This protocol ensures that packets find their way to the computer but don't know which application from this device needs this data: Youtube or Email.
For this reason, were developed more advanced protocols, but all of them based on IP.

**UDP** - **User Datagram Protocol**. One of the simplest and commonly used.

{ |UDP HEADER| |DATA| }
   <-- DATAPAYLOAD  -->

UDP HEADER - inside of the UDP header sits some useful extra information:

**port** - to give the data to the proper application (Skype = 3478), which the Operating System will read.
**checksum** - which represents the message/data that is being sent. Allows checking if the data was received without errors or got corrupted in transit.

Unfortunately, UDP doesn't offer any mechanisms to fix the data or request a new copy - receiving programs ate alerted to the corruption but typically just discard the packet. Also, UDP provides no mechanisms to know if packets are getting through - a sending computer shoots the UDP packet off but has no confirmation it ever gets to its destination successfully. These properties sound pretty catastrophic, but some applications are ok with this because UDP is also really simple and fast. (Skype - glitchy video because not all packets have found their way to your computer, games). But this approach doesn't work for many other types of data transmission. 
(email).

When it's really, critically important to receive all packets of the message, TCP protocol comes to rescue us. Which, like UDP, cares inside the IP packet special information about the port, checksum, and some fancier features.

TCP HEADER = sequential numbers (allows a receiving computer to put the packets into the correct order). TCP requires that once a computer has correctly received a packet that it sends back an acknowledgment or ACK, so the sender will know that he can transmit the next packet. If there is no ACK or the receiver didn't receive some packet - the sender will just re-transmit the missing packet. Received more than expected - no problem, it will recover the message with sequence numbers and dismiss duplicates. We tried to explain the procedure sequentially, but in real life, TCP may send tons of packets simultaneously and receive lots of ACK. 

So TCP can handle out-of-order packet delivery, dropped packets, re-transmit packets and control its transmission rate according to available bandwidth (throttle). But it doubles the number of messages on the network that provoke delays, which may be crucial for some applications.

When your computer wants to connect to a website, you need two things: an IP address and a port number.  But remembering a long sequence of numbers in IP addresses is a challenge. It's much easier to use websites or application names to navigate them. So the Internet has a special service that maps these domain names to addresses. It's like a phone book for websites. It's called **DNS** - **Domain Name System**. It receives a computer device request, consults its huge registry, and responds with an IP address if one exists. Then your browser sends a request over TCP/IP  to this address, asking for the website's data. 

In order to find IP addresses easier, were implemented a tree data structure.

DOMAIN STRUCTURE

TOP
LEVEL             .org .gov .net .com, etc.
DOMAIN            ^
<br>
SECOND       wikipedia.org          
LEVEL
DOMAIN
<br>
Sub Domain of parent - es.wikipedia.org


This data is distributed across many DNS servers, which are authorities for different parts of the tree.

PHYSICAL LAYER - cable, fiber, radio signals
MAC addresses, collision detection, exponential backoff and low-level protocols - DATA LINK LAYER

NETWORK LAYER - switching, routing technologies 
TRANSPORT LAYER - UDP, TCP (responsible for point to pint data transfer between computers), errors detection, recovering when possible

SESSION LAYER - open a connection, pass information back and forth, and then close the connection when finished. DNS lookup, website request

=> LAYERS OF THE OSI MODEL (OPEN SYSTEM INTERCONNECTION)

PRESENTATION LAYER
APPLICATION LAYER

PHYCISAL

CABLES 
- copper (electrical - voltage change) cat5, cat5e, cat6
- fiber (glass wires - light)

WIRELES -> radio waves
- satelite - antennas
- wi-fi
 
 Application layer
 
 mail
 www
 multimedia
 
 mail - protocols SMTP - ASCII, MIME types to transmit different types of data, base64
 
 www - collection of web pages connected with links. using browser as an user agent. manipulating different protocols in a web browser. as ftp, mailto (triggering a mail user agent), files from local file system, etc. 

cat5e, cat 5 difference

cat5 cables had crosstalks. Crosstalk - when an electrical pulse on one wire is accidentally detected on another wire. So the receiving isn't able to understand data, causing network error

cashing queries for dns


https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/
CORS 
