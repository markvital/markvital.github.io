
## 🚀 Quick start

1.  **Start developing.**

To start the website locally, run:

```sh
gatsby develop
```

To test production build localy run ```gatsby build``` and then ```gatsby serve```

** 1. Open the source code and start editing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

Save your changes and the browser will update in real time!
    
** 2. Edit site content**

To edit project content change markdown files in ```content/portfolio``` folder. Each project post have thumbnail and cover in ```/thumb``` folder.
For cover and thumbnail to display correctly, each markdown file should have these 2 lines in frontmatter (do not change them):
```
title: My Project
...
coverImage: ./thumb/cover.jpeg
thumbImage: ./thumb/thumb.jpeg
---
```
To change other pages of website (like */about* page) , carefully edit *.js* files in ```src/pages```.
Each file is a React component of correspondent page.
        
** 3. Deploy latest changes**

To deploy latest changes to staging, run:
```sh
npm run deploy
```
Currently our website is hosted on [GitHub Pages](https://pages.github.com/). 
Deploy script will build the project and commit it to [gh-pages](https://github.com/Adioma/infographopedia/tree/gh-pages) branch in our repository.

** 4. New to all this?**

Full documentation for Gatsby lives [on their website](https://www.gatsbyjs.org/).

We use Markdown. Read [Markdown cheat sheet](https://www.markdownguide.org/cheat-sheet).


The website theme is derived from [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).
