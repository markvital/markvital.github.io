---
title: Web-based Infographic Vector Editor
date: "2021-01-28T22:40:32.169Z"
coverImage: ./thumb/cover.jpg
thumbImage: ./thumb/thumb.jpg

items:
  - title:  Editor Screen
    image:  the-editor.jpg
    
  - title:  The Dashboard of User Graphics
    description: the dashboard of user graphics
    image:  user-graphics-dashboard.jpg
    
  - title:  Admin Panel
    image:  admin-panel.jpg
---

I build a proof-of concept of web-based vector editor to build infographics for Adioma 2.0. All the geometry is rendered using in-browser SVG capabilities. The editor is using React.js to Manipulate SVG and React hooks as state management. 
It supports selecting and manipulation with multiple objects, multi-line formatted text, inserting icons and illustrations.
The documents are stored in MongoDB database on backend.
The users, authentification system is implemented using JSON-web token.
The backend is managed with ReactAdmin.

*Tech*: React, Node.js, MongoDB, SVG, ReactAdmin

Scope: development