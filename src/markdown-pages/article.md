Computers can communicate with each other as humans do. They can talk and listen, participate in a dialog or a polylog, and broadcast the information. The computers can send the data carefully, making sure that at the other end, the message was fully received. Or they can be in a rush, trying to send as much data as possible and give an overview of it to the receiver without delay.

To better understand computer networking, we have to know the components involved in the communication process. 

Cables
In the '60s, commercial computers were widely used in research labs and big companies. However, the data exchange between machines and their users was quite old-fashioned: with punched cards, representing the data by absence or presence of holes in predefined positions, or with magnetic tapes, usually located in the vault. Also, there was no way to share external devices like printers or storage drives. 

With cables, people were able to connect different devices and send the data through them. They are still widely used today in offices and data centers. The most popular types of wires to create computer networks nowadays are copper and fibre cables.

Copper cables are the most common form of networking cables. They are made of pairs of copper wires covered with rubber or plastic (protects from electrocution) and are cheaper than fiber cables. They send binary data (1s and 0s) by changing the voltage (modulation) between two ranges: 2v and above represents 1, 0.8v or fewer converts to 0. Voltages between 0.8v and 2.0v are considered noise.

Fibre optical cables contain optical fibers made of glass and present binary data by pulses of light (light-on represents 1, light-off converts to 0). They are also a better choice in environments with lots of electrical interference because electrical interference can affect data sent through copper wires. Fiber cables have lower latency* than copper cables and can send data to a long distance, but they are much more expensive and fragile.

*Latency - The time it takes for a message to be transmitted.

Transmission Mode
The transmission mode is the way of transferring data between two devices. 
Simplex - the communication between the sender and receiver performed only in one direction like baby-monitor.
Duplex - the communication is possible in both directions simultaneously, like during a phone call.
Half-duplex -  both devices can send or receive data in both directions but not at the same time like talking through a walkie-talkie.
Devices and addresses
Using cable, we can connect one computer with another - point-to-point connection. But how to connect several devices in one network and share data among them?

To make multiple connections possible, we have to connect several devices into one network and label them to ensure that the data has both an address for the machine that sent the transmission and the one the message was intended for. To create a relatively small network of close-by machines were developed a Local Area Network (LAN). LAN is a collection of devices connected in one physical location, such as a building, office, or home. One of the most famous LANs widely used today is the Ethernet, created by Xerox PARC in the early 70s. In contrast, a Wide Area Network (WAN) covers large geographic areas. Ethernet uses a Media Access Control address to point a sender and a receiver of transmitted data in LANs, mentioning them into Ethernet frames header. MAC addresses are unique for every computer device and assigned by the device manufacturer.

To connect several devices with unique MAC addresses into LAN, we need to choose a network device. There are three main types of them.

One of the most basic and straightforward devices is a Hub. A hub allows connection to lots of computers and transmits data through cables. It doesn't know how to read the headers of shared data and sends it to every device in a network. Then every device will check the frame's header and ignore it if it wasn't mentioned there as a receiver. It creates a lot of noise in the network and causes data collisions if several computers try to transmit data simultaneously. Collisions are resolved using Carrier (stands for any medium that carries data - copper wire, air for radio waves, etc.) Sense Multiple Access with Collision Detection - CSMA/CD. This approach allows only one computer to transmit data while others are waiting silently for a random time before re-transmitting data.

But what if we want to connect 10 or 100 devices and not wait for the moment of silence, which is a waste of valuable time? For more extensive networks, Network Switches will be a better choice. A switch is a smart network device and contains information about the MAC addresses of the connected devices. In contrast to the hub, it reviews the packets of data and directs them to the destination without collisions. 

A router is a piece of network hardware that allows communication between your LAN and the Internet. A bunch of LANs connected into the big network allows reaching the destination through several possible stops - hop count (number of stops) stored with the message. In order not to clog up the network, messages are chopped up into small pieces (packets). They may travel independently to their destination using different hop stops and routes. Network routers aimed to balance the load across every route they care about to ensure delivery - congestion control.

The Internet interconnects a bunch of smaller networks in the biggest network allowing global communication to happen. This big network has multiple flexible paths to transmit data and is very effective if any part of the connection is broken.

