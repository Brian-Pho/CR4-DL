# Note Style Guide

## Style Guide

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

## Process

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
- VS Code Replace
    - Definitions: "- (.*[^*]):" with "-*$1*:"
    - Images "\n(!\[.*\))\n(\s+)-" with "\n$2$1\n$2-"
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

- All figures and tables are unindented to have them take full width (need to turn off Github-Flavored-Markdown)
    - <https://stackoverflow.com/questions/18088955/markdown-continue-numbered-list>
    - <https://stackoverflow.com/questions/54101316/markdown-whats-the-proper-way-to-do-a-continued-list-inside-of-a-list>
    - <https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/markdown/lists.html>
    - If indented, then the image is also indented which makes it smaller
