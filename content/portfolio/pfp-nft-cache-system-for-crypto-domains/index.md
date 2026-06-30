---
title: PFP NFT Cache System for Crypto Domains
date: "2022-05-28T22:40:32.169Z"
description: A caching system for NFT profile images used by Unstoppable Domains.
coverImage: ./thumb/cover.jpg
thumbImage: ./thumb/thumb.jpg
---

I implemented an NFT PFP cache for Unstoppable Domains.
Users can set an avatar based on NFT images tied to their wallet.
The cache was needed because some of those images loaded from IPFS, which made the user experience slow. I used Puppeteer to support rendering both SVG and PNG images and convert them to JPG in the worker.


**Tech**: React.js, Node.js, TypeScript, Web3.js, Ethers.js, Blockchain, NFT, Ethereum, Polygon, IPFS

**Scope**: Development
