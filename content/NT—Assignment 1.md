# Assignment 1

## Theoretical Part



##### IPv4 Protocol

The fourth, and the most widely used, version of the Internet Protocol (which provides a standard set of rules for communicating over the internet). The identification of hosts in IPv4 is based on 32-bit IP addresses, consisting of four octets, e.g. 111.222.333.444. Data is being transmitted as standard datagrams (or packets—consisting of a header and payload). Using IPv4 is possible irrespective of the technology linking plugged-in devices - telephone network, cable, radio telephone network etc. IPv4 is described in IETF publication RFC 791 (September 1981), replacing an earlier definition (RFC 760, January 1980). There is also available a newer version - IPv6, which uses 128-bit addresses.  In the model TCP/IP the IPv4 protocol is in a layer of the Internet, for which the network layer corresponds in the OSI Model.

##### ISO/OSI Model

OSI (Open Systems Interconnection) is reference model for how applications can communicate over a network. A reference model is a conceptual framework for understanding relationships. The purpose of the OSI reference model is mainly to guide vendors and developers, so that the digital communication products and software programs they create can interoperate. The fundamental assumption of the model is division of network systems into 7 layers cooperating in a closely determined way. For the Internet there was formulated simplified TCP/IP model which has only 4 layers.

![ISO/OSI Model](http://nhprice.com/wp-content/uploads/2013/03/1-Tutorial-OSI-7-layer-model.jpg)

​                                                  													     *http://nhprice.com/*

##### IP packet parameters

IP packets consist of the header, which contains the information necessary to deliver it to the recipient, and the payload, which is the data being delivered.

##### ICMP protocol

A protocol described in RFC 792 of the network layer of the OSI model, used in the diagnostics of the network and routing. It is mainly used in the inspection of transmission in the network. It is used by network devices, including routers, to send error messages and operational information indicating, for example, that a requested service is not available or that a host or router could not be reached. Also, ping and traceroute make use of this protocol.

##### Parameters of an IP address

- Address ID
- Address State
- Broadcast Address Format
- CGA Modifier
- Customer ID
- Customer Name
- EUI-64
- Gateway IP Address
- Hold Up Time
- IGP Inhibit
- Interface ID
- Interface Name
- IP Address
- IP Address Preferred
- IPv4 Primary
- Operational Address
- Populate Host Routes
- Prefix Length
- Remote IP Address
- Routing Instance ID
- Routing Instance Name
- Service ID
- Service Name
- Site ID
- Site Name
- System IP
- Track SRRP Instance

##### Network subnets

Subnetworking is a logical subdivision of an IP network. The practice of dividing a network into two or more networks is called **subnetting**. Devices which are in one (shared) subnet are characterized by an identical initial fragment of the binary record of the IP address in which the length appoints value of the subnet mask. This results in the logical division of an IP address into two fields, a *network number* or *routing prefix* and the *rest field* or *host identifier*. The *rest field* is an identifier for a specific host or network interface.

##### Network classes

Every IP address is a 32-bit number, consisting of four octets (8-bit numbers). It is easier to understand TCP/IP addressing adopting the concept that every addressing is closely associated with functions and duties of the given computer. Every computer in the  TCP/IP network has a unique, 32-bit IP address identifying not only the computer, but also a network to which it belongs. IP address consists of three basic components:

- bits determining the class of the address,
- part identifying the local area network (LAN)
- part identifying the specific computer online

The class of address defines which bits are used for the network ID and which bits are used for the host ID. It also defines the possible number of networks and the number of hosts per network.

- *Class A* addresses are assigned to networks with a very large number of hosts. 

  The remaining 24 bits (the last three octets) represent the host ID. This allows for 126 networks and 16,777,214 hosts per network.  (0.0.0.0—127.255.255.255, mask: 255.0.0.0 or /8)

- *Class B* addresses are assigned to medium-sized to large-sized networks.

   The two high-order bits in a class B address are always set to binary 1 0. The next 14 bits (completing the first two octets) complete the network ID. The remaining 16 bits (last two octets) represent the host ID. This allows for 16,384 networks and 65,534 hosts per network. (128.0.0.0—191.255.255.255, mask: 255.255.0.0 or /16)

- *Class C* addresses are used for small networks. 

	The three high-order bits in a class C address are always set to binary 1 1 0. The next 21 bits (completing the first three octets) complete the network ID. The remaining 8 bits (last octet) represent the host ID. This allows for 2,097,152 networks and 254 hosts per network. (192.0.0.0—223.255.255.255, mask: 255.255.255.0 or /24)

- *Class D* addresses are reserved for IP multicast addresses.

	The four high-order bits in a class D address are always set to binary 1 1 1 0. The remaining bits are for the address that interested hosts recognize. Microsoft supports class D addresses for applications to multicast data to multicast-capable hosts on an internetwork. (224.0.0.0—239.255.255.255)

- *Class E* is an experimental address that is reserved for future use. 

	The E class is experimental and reserved for IETF. (240.0.0.0—255.255.255.255)

In local area networks addresses of the class A, B or C are being used.

##### Network mask

An IP address has two components, the network address and the host address. A subnet mask separates the IP address into the network and host addresses. Subnetting further divides the host part of an IP address into a subnet and host address if additional subnetwork is needed. A Subnet mask is a 32-bit number that masks an IP address, and divides the IP address into network address and host address. Subnet Mask is made by setting network bits to all "1"s and setting host bits to all "0"s. Within a given network, two host addresses are reserved for special purpose, and cannot be assigned to hosts. The "0" address is assigned a network address and "255" is assigned to a broadcast address, and they cannot be assigned to hosts.

The address mask has the same length as the IP address and consists of the bit sequence for values 1 after which a sequence of zeroes is taking place - for IPv4 the mask has 32 bits, for IPv6 has 128 bits. In case of IPv4 it is usually given in the form of four 8-bits numbers, which are usually  written decimally and separated with dots (for example 255,255,255,224). The value of the mask must be given to all routers and computers in a given subnet. As a result of comparing the address mask (e.g. 255.255.255. 0) with the specific IP address (e.g. 192.180. 5.22) the router is informed about, which part of the address is identifying the subnet (in this case 192,180. 5), and which a device assigned to this IP address (. 22).

##### Routing table

A routing table is a set of rules, often viewed in table format, that is used to determine where data packets traveling over an Internet Protocol (IP) network will be directed. All IP-enabled devices, including routers and switches, use routing tables.

Routing consists of searching in the board for appropriate information regarding the destination of the package, i.e. the route a given package is supposed to travel, in order to reach one's destination. Every entry of the route must contain two pieces of information:

*destination address* — it is an address of the network, with which the router is interfacing; sometimes he can happen, that the device knows a few routes of the approach to the given network 

*indicator to the destination* — information about whether the router is directly connected to to the destination network, or address of other router which knows, where to send the package (so-called next-hop router).

##### Default gateway

Default gateway is the node in a computer network using the Internet Protocol Suite that serves as the forwarding host (router) to other networks when no other route specification matches the destination IP address of a packet.

In the TCP/IP network the default gateway is the router to which computers are supposed to send to the local network area packages provided they should not be directed to the local network area or to other known routers. In the typical configuration of the TCP/IP local network all computers are using one default gate which provides them the connection with other subnets or with the Internet.

##### Lookup 

Every machine that is on a TCP/IP network ( a local network, or the Internet ) has a unique Internet Protocol (IP) address.

IP-Lookup helps you to find information about your current IP address or any other IP address. It supports both IPv4 and IPv6 addresses.

##### Broadcast

Broadcast is data transmission mode consisting in sending by one port (data channel) the packages which should be received by all remaining ports connected to the given network. In practice, the scope of the broadcast is limited to a broadcast domain. Broadcasting a message is in contrast to unicast addressing in which a host sends datagrams to another single host identified by a unique IP address. Broadcasting is largely confined to local area network (LAN) technologies, most notably Ethernet and token ring, where the performance impact of broadcasting is not as large as it would be in a wide area network. Both Ethernet and IPv4 use an all-ones broadcast address to indicate a broadcast packet.

##### Subnet address

The parts of the IP address, for which in a mask there are bits equal to 1, belong to the subnet address, and all remaining bits refer to the address of the device in this subnet. After executing the bitwise product (AND function) of the mask and the IP address, an IP address  of the entire subnet, for which specified device with this IP address belongs is obtained.

##### Private network address

Each IP node requires an IP address that is globally unique to the IP internetwork. In the case of the Internet, each IP node on a network connected to the Internet requires an IP address that is globally unique to the Internet. As the Internet grew, organizations connecting to the Internet required a public address for each node on their intranets.

IP addresses are being assigned to suppliers of the Internet (Eng. Service Internet Provider - ISP), for governmental organisations, academic institutions, research organisations and other big legal bodies which are using devices directly connected to the worldwide network Internet. Network administrators subject to these individuals possess IP addresses themselves from the scope allotted to them. All remaining Internet users are using mediation of the Internet suppliers. 

Certain IP addresses have been reserved for internal use. Anyone can use them without approval from any RIR, but they do not have access to the public internet. Connection to the internet can only be done via NAT or a proxy server. 

- 10.0.0.0 to 10.255.255.255	— 10.0.0.0/8 (255.0.0.0)
- 172.16.0.0 to 172.31.255.255 — 172.16.0.0/12 (255.240.0.0)
- 192.168.0.0 to 192.168.255.255 — 192.168.0.0/16 (255.255.0.0)

##### Network address translation

NAT (Network Address Translation) is a method of remapping one IP address space into another by modifying network address information in IP header of packets while they are in transit across a traffic routing device. The technique was originally used as a shortcut to avoid the need to readdress every host when a network was moved. It has become a popular and essential tool in conserving global address space in the face of IPv4 address exhaustion. One Internet-routable IP address of a NAT gateway can be used for an entire private network.

IP masquerading is a technique that hides an entire IP address space, usually consisting of private IP addresses, behind a single IP address in another, usually public address space. The address that has to be hidden is changed into a single (public) IP address as "new" source address of the outgoing IP packet so it appears as originating not from the hidden host but from the routing device itself. Because of the popularity of this technique to conserve IPv4 address space, the term NAT has become virtually synonymous with IP masquerading.

##### RIPE

RIPE Network Coordination Centre is an independent and non-profit organization supporting the network infrastructure Internet. It's headquarter is located in Amsterdam. RIPE NCC acts,among others, the role of Regional Internet Register (Eng. RIR) by storing and allocating such data as IPv4 addresses and IPv6 and numbers AS.

##### ICANN

ICANN a non-profit organization responsible for coordinating the maintenance and procedures of several databases related to the namespaces of the Internet, ensuring the network's stable and secure operation. ICANN's primary principles of operation have been described as helping preserve the operational stability of the Internet; to promote competition; to achieve broad representation of the global Internet community; and to develop policies appropriate to its mission through bottom-up, consensus-based processes

##### Physical layer solutions

In the seven-layer OSI model of computer networking, the physical layer or layer 1 is the first and lowest layer. This layer may be implemented by a PHY chip.

The major functions and services performed by the physical layer are:

- Bit-by-bit or symbol-by-symbol delivery
- Providing a standardized interface to physical transmission media, including
- Mechanical specification of electrical connectors and cables, for example maximum cable length
- Electrical specification of transmission line signal level and impedance
- Radio interface, including electromagnetic spectrum frequency allocation and specification of signal strength, analog bandwidth, etc.
- Specifications for IR over optical fiber or a wireless IR communication link
- Modulation
- Line coding
- Bit synchronization in synchronous serial communication
- Start-stop signalling and flow control in asynchronous serial communication
- Circuit switching
- Multiplexing
- Establishment and termination of circuit switched connections
- Carrier sense and collision detection utilized by some level 2 multiple access protocols
- Equalization filtering, training sequences, pulse shaping and other signal processing of physical signals
- Forward error correction for example bitwise convolutional coding
- Bit-interleaving and other channel coding


## Practical Part

*ping*—sends ICMP packets

*traceroute*—a Linux version of tracert; analyses the route of IP packets

*mtr*—a Linux alternative for pathping; both send echo request via ICMP and analyze the results, thus they combine the functionalities of ping and traceroute

*whois*—queries databases that store information about registered owners of Internet resources

##### Finding a computer in LAN

```bash
🞂 sudo nmap -sn 192.168.1.4/24

Starting Nmap 7.60 ( https://nmap.org ) at 2018-02-28 23:15 CET
Nmap scan report for HPCB2134.home (192.168.1.1)
Host is up (0.17s latency).
MAC Address: DC:4A:3E:CB:21:34 (Hewlett Packard)
Nmap scan report for Windows-Phone.home (192.168.1.6)
Host is up (0.14s latency).
MAC Address: 9C:6C:15:CD:89:48 (Microsoft)
Nmap scan report for netiaspot.home (192.168.1.254)
Host is up (0.0041s latency).
MAC Address: 00:12:2A:83:89:B1 (VTech Telecommunications)
Nmap scan report for peppy.home (192.168.1.4)
Host is up.
Nmap done: 256 IP addresses (4 hosts up) scanned in 7.34 seconds
```

ping

```bash
🞂 ping 192.168.1.1 --count=10 --route
PING 192.168.1.1 (192.168.1.1): 56 data bytes
64 bytes from 192.168.1.1: icmp_seq=0 ttl=255 time=5.466 ms
RR: 	peppy.home (192.168.1.4)
	peppy.home (192.168.1.4)
64 bytes from 192.168.1.1: icmp_seq=1 ttl=255 time=51.732 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=2 ttl=255 time=49.983 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=3 ttl=255 time=5.621 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=4 ttl=255 time=48.630 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=5 ttl=255 time=47.481 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=6 ttl=255 time=4.675 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=7 ttl=255 time=44.808 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=8 ttl=255 time=44.403 ms	 (same route)
64 bytes from 192.168.1.1: icmp_seq=9 ttl=255 time=5.518 ms	 (same route)
--- 192.168.1.1 ping statistics ---
10 packets transmitted, 10 packets received, 0% packet loss
round-trip min/avg/max/stddev = 4.675/30.832/51.732/20.931 ms
```

mtr

```bash
🞂 mtr 192.168.1.1 --report --report-cycles 10
Start: 2018-02-28T23:19:21+0100
HOST: peppy                       Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- HPCB2134.home              0.0%    10   43.0  48.1  20.0  66.1  13.3
```

traceroute

```bash
🞂 traceroute 192.168.1.1 --resolve-hostnames
traceroute to 192.168.1.1 (192.168.1.1), 64 hops max
  1   192.168.1.1 (HPCB2134.home)  51.198ms  16.059ms  8.587ms 
```

whois

```bash
🞂 whois 192.168.1.1
#
# ARIN WHOIS data and services are subject to the Terms of Use
# available at: https://www.arin.net/whois_tou.html
#
# If you see inaccuracies in the results, please report at
# https://www.arin.net/public/whoisinaccuracy/index.xhtml
#


#
# The following results may also be obtained via:
# https://whois.arin.net/rest/nets;q=192.168.1.1?showDetails=true&showARIN=false&showNonArinTopLevelNet=false&ext=netref2
#

NetRange:       192.168.0.0 - 192.168.255.255
CIDR:           192.168.0.0/16
NetName:        PRIVATE-ADDRESS-CBLK-RFC1918-IANA-RESERVED
NetHandle:      NET-192-168-0-0-1
Parent:         NET192 (NET-192-0-0-0-0)
NetType:        IANA Special Use
OriginAS:       
Organization:   Internet Assigned Numbers Authority (IANA)
RegDate:        1994-03-15
Updated:        2013-08-30
Comment:        These addresses are in use by many millions of independently operated networks, which might be as small as a single computer connected to a home gateway, and are automatically configured in hundreds of millions of devices.  They are only intended for use within a private context  and traffic that needs to cross the Internet will need to use a different, unique address.
Comment:        
Comment:        These addresses can be used by anyone without any need to coordinate with IANA or an Internet registry.  The traffic from these addresses does not come from ICANN or IANA.  We are not the source of activity you may see on logs or in e-mail records.  Please refer to http://www.iana.org/abuse/answers
Comment:        
Comment:        These addresses were assigned by the IETF, the organization that develops Internet protocols, in the Best Current Practice document, RFC 1918 which can be found at:
Comment:        http://datatracker.ietf.org/doc/rfc1918
Ref:            https://whois.arin.net/rest/net/NET-192-168-0-0-1


OrgName:        Internet Assigned Numbers Authority
OrgId:          IANA
Address:        12025 Waterfront Drive
Address:        Suite 300
City:           Los Angeles
StateProv:      CA
PostalCode:     90292
Country:        US
RegDate:        
Updated:        2012-08-31
Ref:            https://whois.arin.net/rest/org/IANA


OrgTechHandle: IANA-IP-ARIN
OrgTechName:   ICANN
OrgTechPhone:  +1-310-301-5820 
OrgTechEmail:  abuse@iana.org
OrgTechRef:    https://whois.arin.net/rest/poc/IANA-IP-ARIN

OrgAbuseHandle: IANA-IP-ARIN
OrgAbuseName:   ICANN
OrgAbusePhone:  +1-310-301-5820 
OrgAbuseEmail:  abuse@iana.org
OrgAbuseRef:    https://whois.arin.net/rest/poc/IANA-IP-ARIN


#
# ARIN WHOIS data and services are subject to the Terms of Use
# available at: https://www.arin.net/whois_tou.html
#
# If you see inaccuracies in the results, please report at
# https://www.arin.net/public/whoisinaccuracy/index.xhtml
#
```


##### studife.it.p.lodz.pl

ping

```bash
🞂 ping studife.it.p.lodz.pl --count=10 --route
PING studife.it.p.lodz.pl (212.51.220.81): 56 data bytes
--- studife.it.p.lodz.pl ping statistics ---
10 packets transmitted, 0 packets received, 100% packet loss

🞂 ping studife.it.p.lodz.pl --count=10
PING studife.it.p.lodz.pl (212.51.220.81): 56 data bytes
--- studife.it.p.lodz.pl ping statistics ---
10 packets transmitted, 0 packets received, 100% packet loss
```

mtr

```bash
🞂 mtr studife.it.p.lodz.pl --report --report-cycles 10
Start: 2018-02-28T22:39:45+0100
HOST: peppy                       Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- netiaspot.home             0.0%    10    2.1   3.0   1.9   7.5   1.7
  2.|-- 195.114.190.184            0.0%    10    7.2   9.8   6.8  30.9   7.4
  3.|-- warsc001rt06.inetia.pl     0.0%    10   21.0  14.8  10.9  21.0   3.4
  4.|-- 83.238.249.64              0.0%    10   15.5  12.6   9.7  15.9   2.3
  5.|-- nordunet.sara1.nl-ix.net   0.0%    10   32.9  32.1  30.6  36.4   1.9
  6.|-- de-hmb.nordu.net           0.0%    10   37.6  37.9  35.7  50.8   4.6
  7.|-- ndn-gw.pionier.gov.pl      0.0%    10   47.9  50.5  47.5  62.7   4.8
  8.|-- z-poznan-gw3.lodman.10Gb.  0.0%    10   52.3  52.1  51.1  52.9   0.6
  9.|-- pl-cke-gw-0-0-3.man.lodz.  0.0%    10   55.3  51.8  50.3  55.3   1.6
 10.|-- tul.p.lodz.pl              0.0%    10   51.5  51.7  50.8  53.9   1.0
 11.|-- ckbd-uss-0.p.lodz.pl       0.0%    10   96.1  67.5  56.4  96.1  12.1
 12.|-- ???                       100.0    10    0.0   0.0   0.0   0.0   0.0
```

traceroute

```bash
🞂 traceroute studife.it.p.lodz.pl --resolve-hostnames
traceroute to studife.it.p.lodz.pl (212.51.220.81), 64 hops max
  1   192.168.1.254 (netiaspot.home)  11.329ms  2.103ms  3.758ms 
  2   195.114.190.184 (195.114.190.184)  8.035ms  *  * 
  3   83.238.251.208 (warsc001rt06.inetia.pl)  18.146ms  20.937ms  19.308ms 
  4   83.238.249.64 (83.238.249.64)  18.829ms  10.922ms  19.966ms 
  5   193.239.116.53 (nordunet.sara1.nl-ix.net)  30.646ms  *  * 
  6   *  *  * 
  7   109.105.98.125 (ndn-gw.pionier.gov.pl)  50.194ms  *  * 
  8   212.191.224.6 (z-poznan-gw3.lodman.10Gb.rtr.pionier.gov.pl)  55.966ms  *  * 
  9   212.191.9.14 (pl-cke-gw-0-0-3.man.lodz.pl)  56.358ms  *  * 
 10   212.191.9.194 (tul.p.lodz.pl)  51.847ms  *  * 
 11   212.51.207.86 (ckbd-uss-0.p.lodz.pl)  65.649ms !F  *  * 
```

whois

```bash
🞂 whois studife.it.p.lodz.pl

No information available about domain name studife.it.p.lodz.pl in the Registry NASK database.




WHOIS database responses: http://www.dns.pl/english/opiskomunikatow_en.html

WHOIS displays data with a delay not exceeding 15 minutes in relation to the .pl Registry system
Registrant data available at http://dns.pl/cgi-bin/en_whois.pl
```



##### Poland

ping

```bash
🞂 ping gov.pl --count=5
PING gov.pl (194.181.157.100): 56 data bytes
--- gov.pl ping statistics ---
5 packets transmitted, 0 packets received, 100% packet loss
```

mtr

```bash
🞂 mtr gov.pl --report --report-cycles 10
Start: 2018-02-28T22:59:49+0100
HOST: peppy                       Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- netiaspot.home             0.0%    10    2.0   2.4   1.6   3.9   0.9
  2.|-- 195.114.190.184            0.0%    10    9.1   7.9   6.8  11.4   1.6
  3.|-- warsc001rt06.inetia.pl     0.0%    10   17.3  11.4   8.4  17.3   2.5
  4.|-- nask.thinx.pl              0.0%    10    8.0  10.8   8.0  25.5   5.4
  5.|-- 195.187.255.191            0.0%    10    8.4  15.8   8.3  31.8   9.0
  6.|-- 194.181.157.100            0.0%    10    9.6  11.1   9.3  15.8   2.0
```

traceroute

```bash
🞂 traceroute gov.pl  --resolve-hostnames
traceroute to gov.pl (194.181.157.100), 64 hops max
  1   192.168.1.254 (netiaspot.home)  2.967ms  1.472ms  10.870ms 
  2   195.114.190.184 (195.114.190.184)  8.397ms  *  * 
  3   83.238.251.208 (warsc001rt06.inetia.pl)  11.349ms  11.376ms  17.937ms 
  4   212.91.0.180 (nask.thinx.pl)  10.183ms  *  * 
  5   195.187.255.191 (195.187.255.191)  9.095ms  *  * 
  6   194.181.157.100 (194.181.157.100)  12.140ms  17.242ms  20.941ms 
```

whois

```bash
🞂 whois gov.pl

DOMAIN NAME:           gov.pl
registrant type:       organization
nameservers:           a-dns.pl. [2001:a10:0121:0001::156][194.181.87.156]
                       b-dns.pl. [2001:7f9:c::53][192.195.72.53]
                       c-dns.pl. [93.190.128.146][2a02:38:14::146]
                       d-dns.pl. [81.15.133.186][2a00:4120:8000:2::186]
                       e-dns.pl. [46.28.245.82]
                       f-dns.pl. [77.79.212.238][2001:1a68:0:17::238]
                       g-dns.pl. [149.156.1.252][2001:06d8:1001:1::252]
created:               1995.01.01 12:00:00
last modified:         2012.04.20 08:36:40
renewal date:          not defined

no option

dnssec:                Signed


REGISTRAR:
NASK
ul. Kolska 12
01-045 Warszawa
Polska/Poland
+48.22 3808300
info@dns.pl

WHOIS database responses: http://www.dns.pl/english/opiskomunikatow_en.html

WHOIS displays data with a delay not exceeding 15 minutes in relation to the .pl Registry system
Registrant data available at http://dns.pl/cgi-bin/en_whois.pl
```

##### World

ping

```bash
🞂 ping usa.gov --count=5
PING usa.gov (54.85.132.205): 56 data bytes
--- usa.gov ping statistics ---
5 packets transmitted, 0 packets received, 100% packet loss
```

mtr

```bash
🞂 mtr usa.gov --report-wide --report-cycles 10
Start: 2018-02-28T23:08:07+0100
HOST: peppy                                     Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- netiaspot.home                             0.0%    10    2.1   4.0   2.0   9.8   2.8
  2.|-- 195.114.190.184                            0.0%    10   12.0  13.1   6.9  42.4  10.8
  3.|-- warsc001rt06.inetia.pl                     0.0%    10   11.8  13.9   8.9  32.8   7.0
  4.|-- te0-7-0-12.ccr21.waw01.atlas.cogentco.com  0.0%    10    8.3  13.0   8.3  35.0   8.0
  5.|-- be2253.ccr42.ham01.atlas.cogentco.com      0.0%    10   22.5  24.9  22.5  33.0   3.2
  6.|-- be2816.ccr42.ams03.atlas.cogentco.com      0.0%    10   33.4  39.1  31.7  64.4  11.2
  7.|-- be12488.ccr42.lon13.atlas.cogentco.com     0.0%    10  106.3 109.4 104.4 122.3   5.9
  8.|-- be2983.ccr32.bos01.atlas.cogentco.com      0.0%    10  106.6 108.8 105.0 124.9   6.1
  9.|-- be3472.ccr42.jfk02.atlas.cogentco.com      0.0%    10  104.9 108.9 104.4 114.9   4.1
 10.|-- be2807.ccr42.dca01.atlas.cogentco.com      0.0%    10  118.5 121.0 118.3 128.2   3.8
 11.|-- be3084.ccr41.iad02.atlas.cogentco.com      0.0%    10  115.7 118.5 115.4 122.6   2.8
 12.|-- 38.142.220.42                              0.0%    10  123.1 120.1 116.1 127.8   3.7
 13.|-- ???                                       100.0    10    0.0   0.0   0.0   0.0   0.0
 14.|-- 54.239.110.168                             0.0%    10  115.2 116.9 114.9 120.2   2.1
 15.|-- 54.239.110.167                             0.0%    10  153.2 173.8 148.0 253.0  37.8
 16.|-- 54.239.111.7                               0.0%    10  130.4 132.4 130.0 138.5   3.2
 17.|-- ???                                       100.0    10    0.0   0.0   0.0   0.0   0.0
```

traceroute

```bash
🞂 traceroute usa.gov  --resolve-hostnames
traceroute to usa.gov (54.85.132.205), 64 hops max
  1   192.168.1.254 (netiaspot.home)  3.895ms  9.242ms  8.318ms 
  2   195.114.190.184 (195.114.190.184)  16.032ms  *  * 
  3   83.238.251.208 (warsc001rt06.inetia.pl)  20.107ms  16.921ms  16.825ms 
  4   149.6.70.25 (te0-7-0-7.ccr21.waw01.atlas.cogentco.com)  11.380ms  9.310ms  9.629ms 
  5   154.54.60.253 (be2252.ccr41.ham01.atlas.cogentco.com)  32.699ms  22.026ms  40.314ms 
  6   154.54.38.209 (be2816.ccr42.ams03.atlas.cogentco.com)  32.271ms  38.172ms  34.621ms 
  7   130.117.51.41 (be12488.ccr42.lon13.atlas.cogentco.com)  107.939ms  109.594ms  111.193ms 
  8   154.54.1.117 (be2982.ccr31.bos01.atlas.cogentco.com)  112.401ms  106.027ms  109.918ms 
  9   154.54.46.34 (be3472.ccr42.jfk02.atlas.cogentco.com)  109.104ms  108.347ms  110.451ms 
 10   154.54.40.62 (be2915.ccr41.jfk02.atlas.cogentco.com)  118.623ms  122.541ms  117.786ms 
 11   154.54.30.54 (be3083.ccr41.iad02.atlas.cogentco.com)  118.880ms  120.054ms  122.545ms 
 12   *  *  * 
 13   38.142.220.42 (38.142.220.42)  129.183ms  *  * 
 14   54.239.110.136 (54.239.110.136)  113.923ms  114.329ms  111.958ms 
 15   54.239.110.131 (54.239.110.131)  128.864ms  *  * 
 16   54.239.109.9 (54.239.109.9)  139.770ms  *  * 
```

whois

```bash
🞂 whois usa.gov
% DOTGOV WHOIS Server ready
   Domain Name: USA.GOV
   Status: ACTIVE

>>> Last update of whois database: 2018-02-28T22:08:44Z <<<
Please be advised that this whois server only contains information pertaining
to the .GOV domain. For information for other domains please use the whois
server at RS.INTERNIC.NET. 
```



##### My Computer

IP Address: 		192.168.1.4

MAC Address:	9C:D2:1E:18:0D:5F


Show routing table at your PC using route

```bash
🞂 cat /proc/net/route
Iface	Destination	Gateway 	Flags	RefCnt	Use	Metric	Mask		MTU	Window	IRTT                                                       
wlp1s0	00000000	FE01A8C0	0003	0	0	600	00000000	0	0	0                                                                           
wlp1s0	0001A8C0	00000000	0001	0	0	600	00FFFFFF	0	0	0  

🞂 ip route
default via 192.168.1.254 dev wlp1s0 proto dhcp metric 600 
192.168.1.0/24 dev wlp1s0 proto kernel scope link src 192.168.1.4 metric 600 
```

Assigning a different IP

```bash
🞂 sudo ifconfig wlp1s0 192.168.0.8 netmask 255.255.255.0
Password: 

🞂 ifconfig
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Bcast:0.0.0.0  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:329 errors:0 dropped:0 overruns:0 frame:0
          TX packets:329 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:25019  TX bytes:25019

wlp1s0    Link encap:Ethernet  HWaddr 9C:D2:1E:18:0D:5F
          inet addr:192.168.0.8  Bcast:192.168.0.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:5387 errors:0 dropped:0 overruns:0 frame:0
          TX packets:4641 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:5675491  TX bytes:868699
```

Finding MAC address of the computer using ipconfig

```bash
🞂 ifconfig
lo        Link encap:Local Loopback
          inet addr:127.0.0.1  Bcast:0.0.0.0  Mask:255.0.0.0
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:546 errors:0 dropped:0 overruns:0 frame:0
          TX packets:546 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:42108  TX bytes:42108

wlp1s0    Link encap:Ethernet  HWaddr 9C:D2:1E:18:0D:5F
          inet addr:192.168.1.4  Bcast:192.168.1.255  Mask:255.255.255.0
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:181464 errors:0 dropped:0 overruns:0 frame:0
          TX packets:118647 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000
          RX bytes:233682013  TX bytes:15835489
          
🞂 ip address
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: wlp1s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default qlen 1000
    link/ether 9c:d2:1e:18:0d:5f brd ff:ff:ff:ff:ff:ff
    inet 192.168.1.4/24 brd 192.168.1.255 scope global noprefixroute dynamic wlp1s0
       valid_lft 76017sec preferred_lft 76017sec
    inet6 fe80::d556:8d50:e8e2:b17d/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

Finding MAC address of router using arp

```bash
🞂 cat /proc/net/arp 
IP address       HW type     Flags       HW address            Mask     Device
192.168.1.254    0x1         0x2         00:12:2a:83:89:b1     *        wlp1s0
192.168.1.6      0x1         0x2         9c:6c:15:cd:89:48     *        wlp1s0
192.168.1.1      0x1         0x2         dc:4a:3e:cb:21:34     *        wlp1s0

🞂 ip neighbor
192.168.1.254 dev wlp1s0 lladdr 00:12:2a:83:89:b1 REACHABLE
192.168.1.6 dev wlp1s0 lladdr 9c:6c:15:cd:89:48 STALE
192.168.1.1 dev wlp1s0 lladdr dc:4a:3e:cb:21:34 STALE
```

##### Graphical software that displays physical locations of servers

zenmap
