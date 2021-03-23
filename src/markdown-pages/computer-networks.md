# Computer Networks

The Internet is one of the most important inventions of the XX century! It allows us to chat with friends, visit art galleries from home, receive online education, and vote. The ability to exchange information around the Globe forever changed the world.

**Latency** - The time it takes for a message to transfer.

In the '60s scientific commercials computers were already widely used in research labs and big companies. However, the data exchange between machines and their users was quite old-fashioned:  with punched cards, representing the data by absence or presence of holes in predefined positions, or with magnetic tapes, usually located in the vault. Also, there was no way to share some physical resources like printers or storage drives. 

From this practical needs was born an idea of **LAN** (Local Area Networks) - a relatively small network of close-by computers (2 machines or university campus with thousands of computers). One of the most famous LANs and widely used until today was the Ethernet (early '70s), created by Xerox PARC, - series of computers connected to a single, common ethernet cable. When a computer 'A' wants to share data with a computer 'B', it sends data as an electrical signal through the cable, pointing MAC address of its communicator. All the computers, included in this network, will see the signal but may ignore it if they are not mentioned in the transmitted data's header sent over the network.

ex. Message for MAC address F => Computer with MAC address F received the message \/

**MAC** - unique Media Access Control address => MAC address
Now MAC address is used for both Ethernet and Wi-Fi

This approach was called **CSMA** - **Carrier** (stands for any medium that carries data - copper wire, air for radio waves, etc.) **Sense Multiple Access**. It has its limit - **Bandwidth** (пропускная способность). That's why it was important to develop a way to avoid collisions when several computers tried to 'talk' at the same time (| | => * <= | |). Several people trying to talk at the same time (a great problem of our team's zoom-calls). An effective decision was to program computers to wait for 1s + X ms (random) before trying to re-transmit data if the line will be still occupied to wait for 2s / 4 / 8 / 16 ... more. This approach with an exponentially growing time was called **Exponential Backoff**.

For bigger networks was created another model with a smaller number of computer devices (one Collision Domain) communicated in one **Broadcast Domain** and connected with other groups by using a Network Switch, which won't allow transmitting data to the other group until it's necessary. 

- Hub - every connected device ends up in the same Collision Domain.
- Switch - every single connected computer device creates OneCollision Domain
- Router - every single connected computer device creates OneCollision Domain + fancier features

The Internet interconnects a bunch of smaller networks in the biggest network allowing global communication to happen. This big network has multiple flexibles paths to transmit data and is very effective if any part of the connection is broken. 

Routing with Message Switching - a bunch of points connected into the big web, allowing to reach the destination through several possible stops - **hop count** (number of stops) stored with the message. In order not to clog up the network messages are chopped up into small pieces (packets) and may travel independently to their destination (IP - Internet Protocol = destination address) using differents hop stops and routes. Network routers aimed to balance the load across every route they care about to ensure delivery - congestion control.

**Packet Switching** - an approach to chop up data into **small packets** and pass these along flexibles routes with spare capacity.
It results to be so efficient and fault-tolerant so the whole Internet is based on this approach.

The ancestor of the modern Internet was the ARPNET, created by a US agency, funded by the Advanced Research Projects Agency, and used to connect US research labs and even London lab by satellite link. Since then networks were able to connect not dozens but billions of computer devices around the Globe.

**Internet of things**

**Switching types**

- circuit switching - two network nodes establish a dedicated communication channel (used by military, banks, large companies). Channel is used by full capacity. Fast and reliable connection. less flexible, expensive, easy to break. reserve the whole bandwidth in advance.
- message switching - the message has no limits, may clog up a route. Text type.
- package switching - binary type

HTTP - is a set of conventions that dictate how a client (web browser) talks to a web server. 

418 - I'm a Teapot(April's Fool joke 1998)

test out request 

ex.  **curl -I http://anadea.info**

IP - Internet Protocol - is a unique address

ports ("well-known ports")

- :25 mail
- :22 ssh (secure shell)
- :80 http
- :443 https


_____

The first connection on our way to the Internet is LAN, which may include every device connected to a wi-fi router. This router then connects to the WAN (**Wide Area Network**) run by contracted Internet Service Provider (companies like Vodafone, Moviestar, etc.). WAN may include the whole neighborhood and then that network will connect to an even bigger WAN for a whole city, for example. After several more hops, the network will be ultimate to the backbone of the internet - a gigantic router with super high-bandwidth connections running between them.
 
See the route data with the traceroute command on the Terminal.

The Internet is a huge distributed network that sends data as little packets. If your data is big enough - it'll be broken up into many small packets. Those packets have to conform to a standard called IP (Internet Protocol). Every set of numbers in IP address allows packets to find their way to this unique address and works very similar to a postal address. 

But IP cares only about the destination and appropriate packet size. This information is added into packets IP Header - unique for every data fragment.

[ |IP HEADER| |DATA PAYLOAD| ]
   <---- PACKET ---->

This means that packets find their way to the computer, but don't know which application from this device needs this data: Youtube or Email.
For this reason, were developed more advanced protocols, but all of them based on IP.

**UDP** - **User Datagram Protocol**. One of the simplest and commonly used.

{ |UDP HEADER| |DATA| }
   <-- DATAPAYLOAD  -->

UDP HEADER - inside of the UDP header sits some useful extra information:

**port** - to give the data to the right application (Skype = 3478) which will be read by the Operating System.
**checksum** - which represents the message/data that is being sent. Allows checking if the data was received without errors.
