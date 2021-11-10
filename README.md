# The CR4-DL (Cradle)

This repository holds the code and content for the CR4-DL website.

CR4-DL Link: <https://brianpho.com/CR4-DL>

The website was built using Gatsby and React-Bootstrap, and the theme was inspired by

- <https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/>
- <https://github.com/fongandrew/hydeout>
- <https://github.com/cotes2020/jekyll-theme-chirpy>
- <https://www.facebook.com/careers/>

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

- <https://www.markdownguide.org>
- <https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md>
- <https://www.gatsbyjs.org/docs/gatsby-cli/>
- <https://regexr.com/>
- <https://www.thepunctuationguide.com/>
- <https://www.quickpicturetools.com/en/combine_images/>
- Markdown linter: <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>

## Note Creation Process

### Style Guide

- Parts use h1 (\#), chapters use h2 (\#\#), and subsections use h3 (\#\#\#)
- If a part/chapter has a subtitle, use italics (\*subtitle goes here\*)
- Parts are in roman numerals, chapters are in digits.
- Definitions are in italics, don't italicize the colon, end with a period.
- E.g. *Algorithm*: a series of steps to complete a goal.
- End bullet points with periods unless they have sub-bullet points.
- E.g. This sentence has no sub-bullets so it ends with a period.
- E.g. This sentence has sub-bullets so it doesn't end with a period
    - No period here
    - Except when the inner points are full sentences or long.
- No newline breaks except between sections within a chapter.
- No colon “:” before nested list.

### Process

1. Copy the book's table of contents into Dropbox Paper.
2. Read the book and write notes in Dropbox Paper.
3. Export notes in Markdown.
4. Add them to site and fix markdown to pass linter (italicize definitions).
5. Add a quote to the start of textbook notes.
6. Download images.
7. Replace image URLs with local ones.
8. Compress images with TinyPNG.
9. Test locally.
10. Push to repo.
11. Review and fix errors.

- Replace "\. \n" with ".\n" and replace "\? \n" with "?\n" for notes written on mobile (it auto-adds space after period).
- VS Code Replace "- (.*[^*]):" with "- *$1*:".
- Replace double spaces "  " with single space " "
- Autofix all markdown violations using VSCode

```markdown
![Figure ](figure.png)
![Table ](table.png)

.*FIG\s(\d+)\.(\d+).*
![Figure $1.$2](figure$1-$2.png)

.*TAB\s(\d+)\.(\d+).*
![Table $1.$2](table$1-$2.png)
```
