# Code Repository for the Julia Set landing page

Code repository for my 'link in bio' website, emporium.becausejulia.com. Project files are uploaded here for your code review and Netlify web hosting. I am leveraging 11ty for a static site generator and a private Trello board pushes promotional updates. I decided to use Trello because of their email-to-board feature, generous automation options, and ease of Netlify deploy via Zapier. Rather than scheduling deploys every 12 hours via the code here, Zapier triggers a build based on changes to a list as they occur. While the Trello board that I am fetching here has its own documentation, I am filtering the response to reinforce the following criteria:

- cards must contain a start date on or before today
- cards must contain a due date on or after today
- cards must contain a description
- cards must have a label (with online store name)
- fail state shows no offers and does not impede display of any other code

## Development Scripts

`npx netlify dev`

Run 11ty with Netlify secrets hot reload at localhost:8888, including reload based on Sass changes

`npm run build`

Production build includes minified, autoprefixed CSS

Use this as the "Publish command" if needed by hosting such as Netlify.

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
- [Acknowledgments](#acknowlegments)

## Project Dependencies

### Design Resources

- Google Fonts [Alexandria](https://fonts.google.com/specimen/Alexandria) && [Notable](https://fonts.google.com/specimen/Notable)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

### Code Resources

- [11ty-sass-skeleton](https://github.com/5t3ph/11ty-sass-skeleton)
- [a11y-color-tokens](https://github.com/5t3ph/a11y-color-tokens)
- [Trello API](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/)
- [Netlify CLI](https://cli.netlify.com/)

### Tech and Tooling

- 11ty
- SASS
- Netlify

### Links

- Live Site [emporium.becausejulia.com](https://emporium.becausejulia.com/)
- Hosting via Netlify: [![Netlify Status](https://api.netlify.com/api/v1/badges/4429c8ed-bfa4-48b6-9504-5198908d0d04/deploy-status)](https://app.netlify.com/sites/zingy-basbousa-9f76c2/deploys)

## Project Roadmap

### Current Screenshot

![screenshot](./screenshot.png?raw=true)

### Current Release

- Set up fetch call to ~~Notion API~~ Trello API
- Filter results for valid offer dates
- Filter results for !labels
- Filter results for !empty states
- Refactor ./links/\*.njk to .js collection
- Leverage Netlify functions for initial request

### Future Improvements

- Step Four
  - Totally unnecessary redesign
  - Incorporate tasteful parallax scrolling

## Acknowledgments && Resources

- Converted Adobe Illustrator color set to oklch via [oklch.com](https://oklch.com/)
- Leveraged [typescale.com](https://typescale.com/) for scaling and google font paring
- Leveraged [utopia.fyi](https://utopia.fyi/) for clamp() only sizing
- Help with [dark mode favicon](https://web.dev/articles/building/an-adaptive-favicon/)
- Help with [Trello as a CMS](https://css-tricks.com/using-trello-as-a-super-simple-cms/)
- Help with [merging object data](https://stackoverflow.com/questions/30025965/merge-duplicate-objects-in-array-of-objects)
