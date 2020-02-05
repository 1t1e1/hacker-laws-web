---
title: "The Fallacies of Distributed Computing"
draft: false
---
[The Fallacies of Distributed Computing on Wikipedia](https://en.wikipedia.org/wiki/You_aren%https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)

Also known as _Fallacies of Networked Computing_, the Fallacies are a list of conjectures (or beliefs) about distributed computing, which can lead to failures in software development. The assumptions are:

- The network is reliable
- Latency is zero
- Bandwidth is infinite
- The network is secure
- Topology doesn't change
- There is one administrator
- Transport cost is zero
- The network is homogeneous

The first four items were listed by [Bill Joy](https://en.wikipedia.org/wiki/Bill_Joy) and [Tom Lyon](https://twitter.com/aka_pugs) around 1991 and first classified by [James Gosling](https://en.wikipedia.org/wiki/James_Gosling) as the "Fallacies of Networked Computing". [L. Peter Deutsch](https://en.wikipedia.org/wiki/L._Peter_Deutsch) added the 5th, 6th and 7th fallacies. In the late 90's Gosling added the 8th fallacy.

The group were inspired by what was happening at the time inside [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems).

These fallacies should be considered carefully when designing code which is resilient; assuming any of these fallacies can lead to flawed logic which fails to deal with the realities and complexities of distributed systems.

See also:

- [Foraging for the Fallacies of Distributed Computing (Part 1) - Vaidehi Joshi
 on Medium](https://medium.com/baseds/foraging-for-the-fallacies-of-distributed-computing-part-1-1b35c3b85b53)
- [Deutsch's Fallacies, 10 Years After](http://java.sys-con.com/node/38665)

