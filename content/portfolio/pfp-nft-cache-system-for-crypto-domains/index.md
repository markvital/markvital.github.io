---
title: PFP NFT Cache System for Crypto Domains
date: "2022-05-28T22:40:32.169Z"
description: This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.
coverImage: ./thumb/cover.jpg
thumbImage: ./thumb/thumb.jpg
---

I implemented NFT PFP Cache for NFT domains for Untstoppable Domains.
Users have an ability to set an avatar based from NFTs images that are tied to the wallet.
The need of the cache arose because some of those images load from IPF which made user experience hard. I used Puppeteer to support rendering of both SVG and PNG images and convert it to JPG in the worker.
