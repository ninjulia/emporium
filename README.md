# Code Repository for the Julia Set landing page

Code repository for my 'link in bio' website, emporium.becausejulia.com. Project files are uploaded here for your code review and Netlify web hosting. I am working on leveraging 11ty for a static site generator and will eventually link the site to Notion for automated promotional updates.

## Table of contents

- [Project Dependencies](#project-dependencies)
  - [Design Resources](#design-resources)
  - [Code Resources](#code-resorces)
  - [Tech and Tooling](#tech-and-tooling)
  - [Links](#links)
- [Project Roadmap](#project-roadmap)
  - [Current Screenshot](#screenshot)
  - [Current Release](#current-release)
  - [Future Improvements](#future-improvements)
- [Acknowledgments](#)

## Project Dependencies

### Design Resources

- Google Fonts [Alexandria](https://fonts.google.com/specimen/Alexandria) && [Notable](https://fonts.google.com/specimen/Notable)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

### Code Resources

- not currently leveraging any external libraries (vanilla html and css)

### Tech and Tooling

- HTML, CSS

### Links

- Live Site [emporium.becausejulia.com](https://www.emporium.becausejulia.com/)
- Hosting via Netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/4429c8ed-bfa4-48b6-9504-5198908d0d04/deploy-status)](https://app.netlify.com/sites/superb-chimera-8a0809/deploys)

## Project Roadmap

### Current Screenshot

![screenshot](./screenshot.png?raw=true)

### Current Release

- Rebuild [current "link in bio" page](https://www.becausejulia.com/instagram) eliminating Bootstrap dependencies.
- Finess branding with updated colors, fonts, typescale
- Leverage OKLCH for color
- Set up dark mode color scheme
- Craft favicon set
- Set up dark mode favicon
- Host site on Github/Netlify

### Future Improvements

- Step One

  - Leverage 11ty framework
  - Leverage SASS
  - Minify HTML and CSS output

- Step Two
  - Connect to Notion for CMS capabilities
  - Set up auto-publishing

## Acknowledgments

- Converted Adobe Illustrator color set to oklch via [oklch.com](https://oklch.com/)
- Leveraged [typescale.com](https://typescale.com/) for scaling and google font paring
- Leveraged [utopia.fyi](https://utopia.fyi/) for clamp() only sizing
- Help with [dark mode favicon](https://web.dev/articles/building/an-adaptive-favicon/)
