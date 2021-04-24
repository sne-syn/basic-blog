Computers can communicate with each other as humans do. They can talk and listen, participate in a dialogue or broadcast the information. The computers can send the data carefully, making sure that at the other end, the message was fully received. Or they can be in a rush, trying to send as much data as possible and give an overview of it to the receiver without delay.
To better understand computer networking, we have to know the components involved in the communication process.
Cables. In the '60s, commercial computers were widely used in research labs and big companies. However, the data exchange between machines and their users was quite old-fashioned: with punched cards or magnetic tapes. People had to personally carry data from one place to another on a floppy disk or other removable medium.

With cables, it became easy to connect different devices and send the data through them. The most popular types of wires to create computer networks nowadays are copper and fibre cables.
Copper cables are the most common form of networking cables. They consist of paired copper wires covered with rubber or plastic. They send binary data (1s and 0s) by changing the voltage (modulation) between two ranges: 2v and above represents 1, 0.8v or fewer converts to 0. Voltages between 0.8v and 2v are considered noise.  (add a picture with modulation visualisation)
Fibre optical cables contain optical fibres made of glass and present binary data by pulses of light (light-on represents 1, light-off converts to 0). They are also a better choice in environments with lots of electrical interference. Fibre cables have lower latency - the time it takes for a message to be transmitted - than copper cables and can send data to a long distance. However, they are pretty expensive and fragile.
(add a picture with cables)
Transmission Mode. 
In computer communication, we always have a sender and a receiver, and the transmission between them can be in either simplex, duplex, or half-duplex mode depending on the direction of information exchange:
Simplex - the interaction between the sender and receiver performed only in one direction, like a baby monitor. 
Duplex - the communication is possible in both directions simultaneously, like the one we have during a phone call. 
Half-duplex - both devices can send or receive data in both directions but not at the same time, like speaking through a walkie-talkie.
(add a picture with modes)
Devices and addresses
With cable, we can connect one computer with another, and it will create a point-to-point connection. But how to connect several devices in one network and share data among them?
To make multiple connections possible, we have to link several devices into one network and label them to ensure that the data has both: an address for the machine that sent the transmission and the one the message was intended for. Local Area Network(LAN) is a technique to create a relatively small network of close-by machines. LAN is a collection of related devices located in one physical place, such as a building, office, or home. One of the most famous communication protocols for LANs widely used today is the Ethernet, created in the early 70s. Ethernet uses a Media Access Control (MAC) address to point a sender and a receiver of transmitted data in LANs, mentioning them in the Ethernet frames header. MAC addresses are unique for every computer and assigned by the device manufacturer.
To connect several devices with unique MAC addresses into LAN, we have to use a network device. 
One of the most basic and straightforward devices is a Hub. A hub allows a connection to lots of computers and transmits data through cables. It doesn't know how to read the headers of shared data and sends it to every device in a network. Then every device will check the frame's header and ignore the data if it isn't a receiver. This approach creates a lot of noise in the network and causes data collisions if several computers simultaneously transmit data. The protocol, called Carrier Sense Multiple Access with Collision Detection (CSMA/CD), knows how to deal with collisions. The idea behind the protocol is that only one computer is allowed to transmit data while others are waiting silently for some period, calculated by an exponential backoff algorithm, before re-transmitting data.

But what if we want to connect a lot of devices and not wait for the moment of silence? For more extensive networks, switches will be a better choice.
A switch is a smart network device that contains information about the MAC addresses of the connected devices as a list. In contrast to the hub, it reviews the packets of data and directs them to the destination without collisions.

Both a hub and a switch allow computers to communicate over short distances in a single network segment. To effectively transmit data to longer distances, more complex approaches were required.

In the 1960s, the World had already used two popular switching techniques: circuit switching for telephone networks and message switching for mail delivery. The third switching technique - packet switching - was designed as an effective way to transmit data through the Internet. The Internet interconnects a bunch of smaller networks in the most significant network allowing global communication to happen. This network has multiple flexibles paths to transmit data and is very effective if any part of the connection is broken. But let's discuss switching techniques in more detail.

Switching Techniques

Circuit switching is a technique that directly connects the sender and the receiver in an unbroken path. It provides a dedicated communication channel and requires a dedicated line for every connection, which is very expensive. This circuit switching network was used for telephone communication and is currently used by the Pentagon's major military networks.

Message switching. There is no dedicated path required between two communicating devices - lots of points are connected into the extensive network. That allows reaching the destination through several possible stops - hops. The message switching technique is effectively used by mail delivery.

Packet switching is similar to message switching with one exception: big messages are chopped up into small pieces - packets - to prevent the network from clogging up with a big data set. Packets move from one hop to another until they reach the destination. Routers - the third type of networking devices - navigate them using IP (Intenet Protocols) addresses specified in their headers and supports communication between LAN and the Internet or LAN and WAN (Wide Area Network). Routers are generally located at gateways that join two networks so the devices on one network can communicate with the devices on another.

Packet switching can use a datagram or a virtual-circuit approach.
The virtual-circuit approach creates many packets. The first packet has a header with information about its sender, receiver, content type, and reserve road to other packets. Subsequent packets will follow the same path as the first packet, and they will be received in order at the destination point. The issue with virtual circuits is that resources and extra information can't change their direction simultaneously.

The datagram approach allows to chop a message into many small packets and send them through different routes to reach its destination. All parcels are free to use any available path. Every packet contains all the information about its content, receiver, and sender in a header. Those packets have to conform to a standard called IP (Internet Protocol). Every set of numbers in IP address allows packets to find their way to this unique address and works very similar to a postal address. The datagram approach has proved to be effective for the Internet.

Internet protocol
On a LAN, computers can communicate with each other using physical MAC addresses. However, every computer device has its unique MAC address, which doesn't reveal its location on the planet. How can routers effectively route data if they don't know where the receiver is located?

Routers navigate data using an IP address from the Internet Protocol to label a sender and a recipient in a header.  Internet Protocol is responsible for addressing, delivering and routing your requests. IP address works as a label on each connected device that uses the Internet Protocol for communication. It can be static or dynamic and allows a router to identify the referenced computer location wherever it is.

Wherefrom the device usually gets its IP address? From the Internet Provider. Even though the Internet doesn't belong to everyone and is free, many Internet Provider Companies allow their users to use their cables, local servers, and routers for a monthly payment to make Internet usage easy and pleasant. The IPC install its routers in users building, connecting  LANs to a WANs and then to the Internet backbone. Internet Provider labels LANs with unique addresses. An IP address can be changed easily: by switching off and on the router or by the Internet provider, so we don't have to memorise it.
https://whatismyipaddress.com/ip-basics
IPv4 address defines an IP address as a 32-bit number formed of four numbers between 0 and 255 separated by four periods. For example, 172.16.254.1. IPv6 address uses 128 bits. For example, 2001:0db8::0001:0000. 
Today, these two versions of the Internet Protocol are in simultaneous use. 

When a post service or a delivery company sends a packet, they validate an address. And may ask for clarification from a sender if the destination format doesn't follow their rules. But they don't care about a receiver name at this point. And even if the package is damaged and the delivery operators can see it just by looking at it, they will still procedure the transportation process. Their responsibilities are fixed.

A similar approach is used by IP protocol. Until the IP address is valid and available - the packet will be delivered from one network to another. That's all it cares. But how the Operation System of the computer receiver knows what application is supposed to receive the data? Why don't our emails appear on our Skype app, for example? Because other high-level protocols handle the transportation responsibilities. User Datagram Protocol (UDP) or Transmission Control Protocol (TCP) takes the delivery to the right application, checks the data's integrity, discards it if it was compromised, and reassembles packets in the proper sequence making up the message. Let's overview where the necessary data sits and what are the differences between those protocols.

The receiving computer device gets a datagram packet with the source and destination IP addresses and some additional information required for routers to handle the delivery successfully.  Inside the data-payload sits another UDP or TCP header.

It contains a port number of the application it was aimed for. The receiving system knows where the data has to be delivered based on the port number. The data package always includes two port numbers: the sender's and the recipient's.

Let's agree that with the right IP address and correct routing, our data packets will reach their destination anywhere on the planet. But how the computer knows what application has to open this packet: email, browser, or Skype? That's why every datagram contains the Port number of the application it was aimed for. For example, a packet for a web page will have a port number:80 or:443. An email application will open a packet with a port number:25, Skype -:3478. 

They will receive this port number from UPD or TCP/IP Protocols Headers.

UDP HEADER - inside of the UDP header sits some useful extra information:
Port - to give the data to the proper application, which the Operating System will read. 
Checksum - which represents the message/data that has been sent. Allows checking if the data was received without errors or got corrupted in transit.
Unfortunately, UDP doesn't offer any mechanisms to fix the data or request a new copy. Also, a sending computer shoots the UDP packet off but has no confirmation if it ever gets to its destination successfully. These properties sound pretty catastrophic, but some applications are ok with this because UDP is also really simple and fast.

When it's critically important to receive all packets of the message, TCP protocol comes to rescue us. Which, like UDP, cares inside the IP packet special information about the port, checksum, and some fancier features.
TCP HEADER contains a sequential number (allows a receiving computer to put the packets into the correct order). TCP requires that once a computer has correctly received a packet that it sends back an acknowledgement or ACK, so the sender will know that he can transmit the next packet. If there is no ACK or the receiver didn't receive some packet - the sender will re-transmit the missing one. Received more than expected - no problem, it will recover the message with sequence numbers and dismiss duplicates. We tried to explain the procedure sequentially, but in real life, TCP may send tons of packets simultaneously and receive lots of ACK.
So TCP can handle out-of-order packet delivery, dropped packets, re-transmit packets and control its transmission rate according to available bandwidth (throttle). But it doubles the number of messages on the network that provoke delays, which may be crucial for some applications.

HTTP for Web
When your computer wants to connect to a website, you need two things: an IP address and a port number. But remembering a long sequence of numbers in IP addresses is a challenge. It's much easier to use websites or application names to navigate them. So the Internet has a special service that maps these domain names to addresses. It's like a phone book for websites. It's called DNS - Domain Name System. It receives a computer device request, consults its huge registry, and responds with an IP address if one exists. Then your browser sends a request over TCP/IP to this address, asking for the website's data.
Headers
Status Codes

