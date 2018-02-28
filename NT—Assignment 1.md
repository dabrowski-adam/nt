# Assignment 1

## Theoretical Part

##### IPv4 Protocol

##### ISO/OSI Model

##### IP packet parameters

##### ICMP protocol

##### Parameters of an IP address

##### Network subnets

##### Network classes

##### Network mask

##### Routing table

##### Default gateway

##### Lookup

##### Broadcast

##### Subnet address

##### Private network address

##### Network address translation

##### RIPE

##### ICANN

##### Physical layer solutions



## Practical Part

##### LAN

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

pathping

```bash
🞂 mtr 192.168.1.1 --report --report-cycles 10
Start: 2018-02-28T23:19:21+0100
HOST: peppy                       Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- HPCB2134.home              0.0%    10   43.0  48.1  20.0  66.1  13.3
```

tracert

```bash
🞂 traceroute 192.168.1.1 --resolve-hostnames
traceroute to 192.168.1.1 (192.168.1.1), 64 hops max
  1   192.168.1.1 (HPCB2134.home)  51.198ms  16.059ms  8.587ms 
```

whois

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

pathping

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

tracert

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



pathping

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

tracert

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



pathping

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

tracert

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

Assigning a different IP

Routing Table—route

```bash
🞂 cat /proc/net/route
Iface	Destination	Gateway 	Flags	RefCnt	Use	Metric	Mask		MTU	Window	IRTT                                                       
wlp1s0	00000000	FE01A8C0	0003	0	0	600	00000000	0	0	0                                                                           
wlp1s0	0001A8C0	00000000	0001	0	0	600	00FFFFFF	0	0	0  

🞂 ip route
default via 192.168.1.254 dev wlp1s0 proto dhcp metric 600 
192.168.1.0/24 dev wlp1s0 proto kernel scope link src 192.168.1.4 metric 600 
```

ipconfig

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

arp (incl. router's)

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
