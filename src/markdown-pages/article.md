Computers can communicate with each other as humans do. They can talk and listen, participate in a dialogue or broadcast the information. The computers can send the data carefully, ensuring that the message is fully received at the other end. Or they can be in a rush, trying to send as much information as possible and give an overview of it to the receiver without delay.
To better understand computer networking, we have to know the components involved in the communication process.
Cables. In the '60s, commercial computers were widely used in research labs and big companies. However, the data exchange between machines and their users was quite old-fashioned: with punched cards or magnetic tapes. People had to personally carry data from one place to another on a removable medium.

With cables, it became easier to connect different devices and send the data through them. The most popular types of wires to create computer networks nowadays are copper and fibre cables.
Copper cables are the most common form of networking cables. They consist of paired copper wires covered with rubber or plastic. They send binary data (1s and 0s) by changing the voltage (modulation) between two ranges: 2v and above represents "1", 0.8v or fewer converts to "0". Voltages between 0.8v and 2v are considered noise.  (add a picture with modulation visualisation)
Fibre optical cables contain optical fibres made of glass and present binary data by pulses of light (light-on represents "1", light-off converts to "0"). They are also a better choice in environments with lots of electrical interference. Fibre cables have lower latency - the time it takes to transmit a message - than copper cables and can send data to long distances. However, they are pretty expensive and fragile.
(add a picture with cables)
Transmission Mode. 
In computer communication, we always have a sender and a receiver, and the transmission between them can be in either simplex, duplex, or half-duplex mode depending on the direction of information exchange:
Simplex - the sender and receiver interaction performed only in one direction, like a baby monitor. 
Duplex - the communication is possible in both directions simultaneously, like the one we have during a phone call. 
Half-duplex - both devices can send or receive data in both directions but not simultaneously, like speaking through a walkie-talkie.
(add a picture with modes)
Devices and addresses
With cable, we can connect one computer with another, and it will create a point-to-point connection. But how to connect several devices in one network and share data among them?
To make multiple connections possible, we have to link several devices into one network and label them to ensure that the data has an address for the machine that sent the message and the one the message was intended for. Local Area Network(LAN) is a technique to create a relatively small network of close-by machines. LAN is a collection of linked devices stationed in one physical location, such as a building, office, or home. One of the most famous communication protocols for LANs widely used today is the Ethernet, created in the early 70s. Ethernet uses a Media Access Control (MAC) address to point a sender and a receiver of transmitted data in LANs, mentioning them in the Ethernet frames header. MAC addresses are unique for every computer and assigned by the device manufacturer.
To connect several devices with unique MAC addresses into LAN, we have to use a network device. 
One of the most basic and straightforward devices is a Hub. A hub allows a connection to lots of computers and transmits data through cables. It doesn't know how to read the headers of shared data and sends it to every device in a network. Then every device will check the frame's header and accept the data or ignore it if it isn't a receiver. This approach creates a lot of noise in the network and causes data collisions if several computers simultaneously transmit data. The protocol, called Carrier Sense Multiple Access with Collision Detection (CSMA/CD), knows how to deal with collisions. The idea behind the protocol is that only one computer is allowed to transmit data while others are waiting silently for some period, calculated by an exponential backoff algorithm, before trying to re-transmit data.

But what if we want to connect many devices and not wait for the moment of silence? For more extensive networks, switches will be a better choice.
A switch is a smart network device containing information about the connected devices' MAC addresses as a list. In contrast to the hub, it reviews data packets and directs them to the destination without collisions.

Both a hub and a switch allow computers to communicate over short distances in a single network segment. To effectively transmit data to longer distances, more complex approaches were required.

In the 60s, the world had already used two popular switching techniques: circuit switching for telephone networks and message switching for mail delivery. The third switching technique - packet switching - was designed as an effective way to transmit data through the Internet. The Internet interconnects a bunch of smaller networks in the most significant network allowing global communication to happen. This network has multiple flexible paths to transmit data and is very effective if any connection part is broken. But let's discuss switching techniques in more detail.

Switching Techniques

Circuit switching is a technique that directly connects the sender and the receiver in an unbroken path. It provides a dedicated communication channel and requires a dedicated line for every connection, which is quite expensive. This circuit switching network was used for telephone communication and is currently used by the Pentagon's major military networks.

Message switching. There is no dedicated path required between two communicating devices - lots of points are connected into the extensive network. That allows reaching the destination through several possible stops - hops. The message switching technique is effectively used by mail delivery.

Packet switching is similar to message switching with one exception: big messages are chopped up into small pieces - packets - to prevent the network from clogging up with a big data set. Packets move from one hop to another until they reach their destination. Routers - the third type of networking device - navigate them using IP (Intenet Protocols) addresses specified in their headers and supports communication between LAN and WAN (Wide Area Network) and then WAN and the Internet backbone. Routers are generally located at gateways that join two networks so the devices on one network can communicate with another.

Packet switching can use a datagram or a virtual-circuit approach.
The virtual-circuit approach creates many packets. The first packet has a header with information about its sender, receiver, content type, and reserve road to other packets. Subsequent packets will follow the same path as the first packet, and they will be received in order at the destination point. The issue with virtual circuits is that resources and extra information can't change the direction simultaneously.

The datagram approach allows to chop a message into many small packets and send them through different routes to reach the destination. All parcels are free to use any available path. Every packet contains all the information about its content, receiver, and sender in a header. Those packets have to conform to a standard called IP (Internet Protocol). Every set of numbers in the IP address allows packets to find their way to this unique address and works very similar to a postal address. The datagram approach has proved to be effective for the Internet.
(add mind Map image)
However, how can routers effectively transmit data if they don't know where the receiver is located?

Internet protocol
Internet Protocol is responsible for addressing, routing and delivering requests. Routers navigate data using an IP address from the IP header to label a sender and a recipient. The IP address works as a label on each connected to the Internet device. It can be static or dynamic and allows a router to identify the referenced computer location wherever it is.

And where does the LAN usually get its IP address from? From the Internet Provider. Even though the Internet doesn't belong to anyone and is free, many Internet Service Providers (ISP) allow customers to use their cables, local servers, and routers for a monthly payment to make Internet usage easy and pleasant. The ISP installs routers in users' buildings, connecting LANs to WANs and the Internet backbone.
Internet Provider labels LANs with unique addresses - IP address. Unlike a MAC address, an IP address can be changed easily: by switching off and on the router or by the Internet provider, there is no need to memorise it.

IPv4 address defines an IP address as a 32-bit number of four numbers between 0 and 255 separated by four periods. For example, 172.16.254.1. 

IPv6 address uses 128 bits. For example, 2001:0db8::0001:0000. 
Today, these two versions of the IP addresses are in simultaneous use. 

Transporting protocols

When a post service or a delivery company sends a parcel, they validate an address. And might ask for clarification from a sender if the destination format doesn't follow the rules. But they don't care about a receiver name at this point. And even if the packaging is damaged and the delivery operators can see it just by looking at it, they will still proceed with the transportation process. Their responsibilities are fixed.

A similar approach is used by IP protocol. Until the IP address is valid - the packet will be delivered from one network to another. And the protocol won't bother to check the quality of data or which program will receive it. But how does the Operation System of the computer know what application is supposed to open the data? Why don't our emails appear in our Skype application? And how do the applications handle errors or compromised data? More advanced protocols supervise transportation responsibilities and take the delivery to the right application, check the data's integrity, discard it if it was compromised, and reassemble packets in the proper sequence making up the message. Let's overview where the necessary data sits and what are the transporting protocols.

The receiving computer device gets a datagram packet with the source and destination IP addresses and additional information required for routers to handle the delivery.

(add image)
Inside the IP payload, the information for an advanced protocol is located. One of the most straightforward transportation protocols is User Datagram Protocol or UDP. UDP has its own header that provides all the necessary information about the port number and a checksum.

A port number specifies applications so that an arriving packet can be easily forwarded to the right program.
For example, a packet for a web page will have a port number:80 for HTTP connection or:443 - for HTTPS. An email application will open a packet with a port number :25, Skype - :3478.

(well-known ports image)

The checksum allows the system to detect and discard the erroneous packet. The sender calculates a short checksum value, representing the data that is being sent. Let's imagine that we want to receive a package with this sequence of numbers: 3, 6, 4, 7. Before transmitting this message, the sender summed all the numbers and wrote "checksum: 20" in the UDP header. We receive and open the packet and see their numbers 3, 6, 4. Their sum is only 13, which is different from the packet's checksum information. If the sums are not equal, we will reject the packet.

Unfortunately, UDP doesn't offer any mechanism to fix the data or request a new copy. Also, a sending computer shoots the UDP packet off but has no confirmation if it ever gets to its destination. These properties sound unreliable, but some applications comply with this because UDP is also straightforward and fast. For example, Skype has to process chunks of data as quickly as possible to avoid delays in Skype calls. And if one of the packets is damaged or lost, it will just freeze the video or audio until it receives the next intact piece of data.

When it's critically important to receive all pieces of the data, the Transmission Control Protocol (TCP) comes to the rescue. As well as UDP, it carries a port number and checksum in the header. But besides that, it has a fancier feature that makes the TCP highly reliable. 

Before starting data transmission, TCP requires sending a synchronise packet (SYN) to the computer device that requested data. An SYN/ACK (acknowledgement) will be sent back to a sender if the SYN is received. Ultimately, if the original computer receives the SYN/ACK, a final ACK is sent. This process is known as the three-way TCP handshake.

If there is no ACK or the receiver didn't get a packet - the sender will re-transmit the missing piece. I described the procedure sequentially, but in real life, TCP may send tons of packets simultaneously and receive lots of ACK during the same session.

So TCP can handle out-of-order packet delivery, dropped packets, re-transmit packets and control its transmission rate according to available bandwidth. But it doubles the number of messages on the network that provoke delays, which may be crucial for some applications (online games, video calls, audio and video streamings).

That was an overview of how the data travels from one computer to another. And now, we are going to discuss how a user interacts with data, sends it and retrieves it.

DNS

Computers communicate using numbers, but people find it tough to remember long sequences of numbers. Domain Name System helps to solve this dilemma. DNS is a huge distributed analogue of a phone book where every domain name is paired with its IP address. Unlike the phone book, the DNS isn't organised in alphabetic order and doesn't store all records in one place. To quickly find the correct recording in the system, DNS starts resolving a web page name from its end while communicating with many DNS servers. Let's recreate the DNS lookup process in greater detail.

If a computer device is connected to the Internet - the ISP has already assigned the closest DNS server. The browser receives a web page name 'support.google.com', for example, from the user input. Then the application runs a library procedure called the resolver and passes the name as a parameter. The resolver transmits the name to a local DNS server assigned by ISP, which starts its lookup. The chances are that it doesn't have an IP address for 'support.google.com' in its records, and there is no cached information about its server location, so it will begin querying the root name server. By default, it has a list of the closest top-level domains servers. 

Step 1. The local DNS finds a 'com '-server address and requests the IP address for 'support.google'.
Step 2. Perhaps, 'com'-server doesn't know where 'support.google' is located, but it has an address for 'google' server.
Step 3. The local DNS receives an IP address for 'google' server and sends a query there, asking for the 'support'-subdomain address.
Step 4. The 'google'-server responds with an IP address for 'support.google.com'. The local DNS gives it to a resolver, which then returns it to the browser.
Step 5. The browser sends a request to the IP address provided by DNS, makes a TCP connection and receives a response with a web page.

You can find an IP address for any domain listed in DNS by running this command in the Terminal application.

host -t a [host-name]

(add an image with a terminal screenshot)

World Wide Web

We are getting close to the World Wide Web (WWW) - an architectural framework for accessing and navigating through linked web pages. This particular part of the computer network system - www - is often wrongly called 'the Internet' even if it just runs on top of the Internet, the same as any other application. (Rewrite this sentence). Through the Internet, just using the

From the users' point of view, the Web consists of Web pages looking like documents with some content that can include references to other pages. Those references are called hyperlinks. They are usually highlighted and clickable and allow the user to jump up to another page if needed. The popularity of the Web is based on the fact that it is easy for beginners to use because of its rich graphical interface and amount of linked resources that form a huge web of related information. Text containing hyperlinks is called hypertext and can be retrieved and rendered by a browser. 

For pages to direct the user to a related hypertext, each hyperlink needs a unique address inside it. On the Web, addressing is specified by Uniform Resource Locator (an URL).

URLs consist of three parts:
The protocol (also known as a scheme)
The machine's domain name for DNS lookup
And a path indicating a unique directory with the page information

For example, https://en.wikiquote.org/wiki/Main_Page.

When the user clicks on a hyperlink, the browser asks a DNS for the IP address of the domain specified in the URL and then establishes a TCP connection with the appropriate server machine. The next step is to ask for a specific page. In our example is 'Main_Page' located in the 'wiki' directory. The browser uses an HTTP protocol (Hypertext Transfer Protocol) with a GET command in the header to retrieve data. The server replies with hypertext sent as plain text in ASCII or UTF-16 format. 

In order to control and troubleshoot possible problems with browser-server communication, status codes are added to the server response. All status codes must have three digits and are divided into five groups by the first digit.

1xx informational response – the request was received, continuing process
2xx successful – the request was successfully received, understood, and accepted
3xx redirection – further action needs to be taken to complete the request
4xx client error – the request contains the wrong syntax or cannot be fulfilled
5xx server error – the server failed to fulfil a valid request


The Web is standardised and improved by W3C - Wide Web Consortium, aiming to increase interoperability between websites.

FTP
HTTP

URL - URI 

WWW
Client-side

server-side

Cashing mechanism,
reading from disk is a bottleneck - slow process
multi-threaded frontend-server communication with cashed data.
Post requests shouldn't be cached - they won't reach a server and won't make changes.

Cookies
What are they? Pros and cons.

The cookie is a small, named string in a text format assigned/associated to a browser by the server.

Why were they created?
They were created because web developers didn't have an appropriate approach to distinguish one user from another. Not a computer device - because they can use an IP address or a Mac address for this purpose. But the user can share this device with other users. 

So the server, after receiving a request from the user's browser, sends a request plus a small string of 4 kb maximum to this browser and marks it. This string is usually saved on the client's hard disk and is sent to the server with every subsequent request. So the server will collect the information about this specific user and can adapt the responses for him.

Why are they potentially dangerous?

What makes them safe to use?
Why do we need it?

But there is still a way to steal the information?
What are they usually used for?
Man-in-the-middle.
The problem is resolved by HTTPS protocol - secured, encrypted.

WHAT FIELDS CAN WE FIND?

Fields in cookie string:
domain| path| content| expires| secure

How to delete them?
send with an expiration time in a past

Use cases:
They are used to contain 
user's preferences, 
shopping cart list by adding items code. So when the client clicks on PROCEED TO CHECKOUT - the server receives a complete list of items. 
Count unique site's visitors.

-----

on client's hard disk
4kb max
20from one domain
delete cookie - send with an expiration time in a past
nonpersistent-persistent cookies
fields: 
domain| path| content| expires| secure

the Secure field can be set to indicate that the browser may only return the cookie to a server using a secure transport, SSL/TLS

They are used to contain 
user's preferences, 
shopping cart list by adding items code. So when the client clicks on PROCEED TO CHECKOUT - the server receives a complete list of items. 
Count unique site's visitors.

Third-part cookies - is a cookie from a different site than the main page that is being fetched. Blocking these cookies helps to prevent tracking across Web sites.

