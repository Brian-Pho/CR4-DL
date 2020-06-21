# The CR4-DL (Cradle)

This repository holds the code for the CR4-DL website.

CR4-DL Website: <https://brianpho.com/CR4-DL>

The website was built using Gatsby and React-Bootstrap, and the theme was heavily inspired by

- <https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/>
- <https://www.gatsbyjs.org/starters/GatsbyCentral/gatsby-v2-starter-lumen/>
- <https://github.com/fongandrew/hydeout>
- <https://github.com/cotes2020/jekyll-theme-chirpy>
- <https://www.facebook.com/careers/>

## TODO

- [ ] Clean up notes
- [ ] Clean up grammar and spelling
- [ ] Run notes through Grammarly
- [ ] Convert LaTeX course notes into Markdown using [Pandoc](https://pandoc.org/getting-started.html)
- [ ] Add review section to all textbooks

## Favicon Generator

- <https://favicon.io/>
- Font Color: #677B8C
- Background Color: #EFF1F3
- Background: Circle
- Font Family: Arima Madurai
- Font Size: 110

## Image Compression

- <https://tinypng.com/>

## Other Resources

- <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
- <https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md>
- <https://github.github.com/gfm/>
- <https://www.gatsbyjs.org/docs/gatsby-cli/>

## Note Creation Process

### Style Guide

- Parts use h1 (\#), chapters use h2 (\#\#), subsections use h3 (\#\#\#)
- If a part/chapter/subsection has a subtitle, use italics (\*subtitle goes here\*)
- Definitions are in italics, don't italicize the colon, end with a period.
- E.g. *Algorithm*: a series of steps that completes a goal.
- End bullet points with periods unless they have sub-bullet points.
- E.g.
- This sentence has no sub-bullets so it ends with a period.
- This sentence has sub-bullets so it doesn't end with a period
    - No period here
    - Except when the inner points are full sentences or long.
- No newline breaks except between sections within a chapter.
- No colon “:” before nested list.
- Parts are in roman numerals.
- Chapters are in digits.
- Markdown linter: <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>

### Process

1. Read the textbook/book and write notes in Dropbox Paper.
2. Export notes in Markdown.
3. Add them to site and fix markdown to pass linter.
4. Add quote to start of textbook notes.
5. Download images.
6. Replace image URLs with local ones.
7. Compress images with TinyPNG.
8. Test locally.
9. Push to repo.
10. Review and fix errors.

- Replace "\. \n" with ".\n" and replace "\? \n" with "?\n" for notes written on mobile (it auto-adds space after period).
- VS Code Replace "- (.*[^*]):" with "- *$1*:".
