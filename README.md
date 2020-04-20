# The CR4-DL (Cradle)

This repository is for me to store and view my notes from courses, textbooks, and papers.

Homepage Link:  <https://www.brianpho.com>

CR4-DL Link: <https://brianpho.com/CR4-DL>

Theme Link: <https://github.com/fongandrew/hydeout> and <https://github.com/cotes2020/jekyll-theme-chirpy>

## TODO

- [ ] Run Google Chrome Audit for further improvements
- [ ] Delete textbook covers
- [ ] Clean up grammar and spelling
- [ ] Run notes through Grammarly

## Favicon Generator

- <https://favicon.io/>
- Background Color: #202020
- Background: Square
- Font Family: Abril Fatface
- Font Size: 110

## Image Compression

- <https://tinypng.com/>

## Other Resources

- <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
- <https://codepen.io/mathiesjanssen/pen/ggeBKm>
- <https://github.com/DavidAnson/markdownlint/blob/v0.10.0/doc/Rules.md>
- jekyll serve --livereload

## Note Creation Process

### Style Guide

- Definitions are in italics, don't italicize the colon, end with a period.
- E.g. *Algorithm*: a series of steps that completes a goal.

- End bullet points with periods unless they have sub-bullet points.
- E.g. Blah blah blah
  - No period here
  - Except when the inner points are full sentences or long.

- No newline breaks except between sections within a chapter.
- No colon “:” before nested list.

### Books

1. Write notes in Dropbox Paper.
2. Export notes in Markdown.
3. Add them to site and fix to pass linter.
4. Download images.
5. Replace image URLs with local ones.
6. Compress images with TinyPNG.
7. Test locally.

Replace "\. \n" with ".\n"
Replace "\? \n" with "?\n"

### Textbooks

- Parts are in roman numerals
- Chapters are in digits
- VS Code Replace "  - (.*[^*]):" with "  - *$1*:".
