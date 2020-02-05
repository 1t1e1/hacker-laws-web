---
title: "The Robustness Principle (Postel's Law)"
draft: false
---
[The Robustness Principle on Wikipedia](https://en.wikipedia.org/wiki/Robustness_principle)

> Be conservative in what you do, be liberal in what you accept from others.

Often applied in server application development, this principle states that what you send to others should be as minimal and conformant as possible, but you should be aim to allow non-conformant input if it can be processed.

The goal of this principle is to build systems which are robust, as they can handle poorly formed input if the intent can still be understood. However, there are potentially security implications of accepting malformed input, particularly if the processing of such input is not well tested.

Allowing non-conformant input, in time, may undermine the ability of protocols to evolve as implementors will eventually rely on this liberality to build their features.

See Also:

- [Hyrum's Law]({{< ref "hyrums-law-the-law-of-implicit-interfaces.md" >}})


