# Assignment 2

## Theoretical Part

##### Hierarchical structure of Domain Name Systems (DNS)

The naming conventions, structure and also the delegation of authority are all part of the DNS hierarchy. 

The hierarchy, also called the domain name space, can be imagined as an inverted tree structure, each leaf being a label of a domain. 

A fully qualified domain name consists of a list of labels, starting from the lowest relevant label up to the highest, concatenated using the dot as a separator. 

At the top is the root domain, which does not have a formal name. Its label is an empty string. Each fully qualified domain name can be regarded as ending in an empty string and thus include a terminating dot (e.g. ``` www.example.com.```), however it is most commonly implied. 

The root domain includes all so-called top level domains, which in turn can be divided into subdomains, and so on—however the total length of a fully qualified domain name may not exceed 253 ASCII characters. 

##### Top Level Domains (TLDs)

Top level domains are one step below the root domain. They can be divided into:

- infrastructure top-level domain (ARPA)
- generic top-level domains (gTLD)
- restricted generic top-level domains (grTLD)
- sponsored top-level domains (sTLD)
- country code top-level domains (ccTLD)
- test top-level domains (tTLD)

There are over 1500 TLDs.

##### DNS queries

DNS name servers store DNS records for domains and respond to queries.

##### DNS delegation

When an authoritative name server for a domain faces a request for a subdomain's records it may respond with an address of another name server.

For example, when the *com* name server receives a request for *google.com* it will respond with an address to Google's name servers.

##### DNS record

The most common records stored on DNS servers are:

- Start of Authority (SOA)
- IP Addresses (A; AAAA for IPv6)
- SMTP Mail Exchangers (MX)
- Name Servers (NS)
- Reverse DNS Lookup (PTR)
- Domain Name Aliases (CNAME)

##### DNS and reverse DNS

Reverse DNS finds domain names corresponding to IP addresses. Such reversed resolving makes use of PTR records, which point to a canonical name.

##### Authoritative answer, non-authoritative answer

Authoritative answers come only from official name servers for the queried domain.

Non-authoritative answers are produced from cache, obtained from other name-servers.

##### DNS resolver

Domain names are translated into an IP address by querying each of the domain name servers responsible, starting from the top-level domain label (i.e. the root name server), until it receives an authoritative answer.

Alternatively, for improved efficiency, DNS cache servers are employed—they store results of DNS queries for a period of time. 

DNS resolvers are responsible for initiating queries that lead to the translation of a domain name. 

They can query a DNS server which will: immediately return the answer (*non-recursive query*), query other servers until it can finally produce the answer (*recursive query*), or simply return the address of the next name server for the resolver to check (*iterative query*).

If possible the resolver may simply get the answer from local DNS cache.

##### DNS cache

DNS cache, also known as DNS resolver cache, contains data about recent DNS lookups. It speeds up subsequent requests. 

##### /etc/hosts

The hosts file is a plain text file that maps hostnames to IP addresses. It's the predecessor of the Domain Name System.

## Practical Part

##### Finding the list of TLDs

The list of all valid top-level domains is maintained by IANA.

http://data.iana.org/TLD/tlds-alpha-by-domain.txt

##### Displaying DNS settings using Control Panel and *ipconfig* 

Control Panel

—

ipconfig

```bash
🞂 echo "TODO"
```

##### Switching to the Google DNS server

—

##### Domain names and corresponding IP addresses of all computers in p.lodz.pl

dig

```bash
🞂 echo "TODO"
```

host

```bash
🞂 echo "TODO"
```

nslookup

```bash
🞂 echo "TODO"
```

##### Domain name, IP address and all available information about DNS settings of a computer in Europe, outside Łódź

dig

```bash
🞂 echo "TODO"
```

host

```bash
🞂 echo "TODO"
```

nslookup

```bash
🞂 echo "TODO"
```

##### Flushing DNS memory using *ipconfig*

```bash
🞂 echo "TODO"
```

##### Changing /etc/hosts such that www.faked_address.com redirects to http://ftims.p.lodz.pl

—