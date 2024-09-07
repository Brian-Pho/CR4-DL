---
layout: post
title: "Eloquent JavaScript"
date: "2020-01-15"
categories:
- Textbooks
book: "eloquent-javascript"
book_authors: "Marijn Haverbeke"
excerpt: "An introduction to JavaScript."
---

<blockquote class="blockquote">
  <p>Some people, when confronted with a problem, think 'I know, I'll use regular expressions.' Now they have two problems.</p>
  <p class="blockquote-footer">Jamie Zawinski</p>
</blockquote>

## Chapter 0: Introduction

- DISCLAIMER: These notes are from a senior software engineering student so basic concepts have been skipped and I’ve mostly noted the special syntax/features of JS. These notes are not for beginner programmers.
- Textbook website: <https://eloquentjavascript.net/>
- A better review of JS for experienced programmers: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript>
- ECMAScript = JavaScript (JS)
- JavaScript is mostly run in a browser but Node.js lets JS run outside of it.

# Part 1: Language

## Chapter 1: Values, Types, and Operators

- Special numbers
    - Infinity
    - -Infinity
    - NaN (Not a number)
- Strings can be in single quotes, double quotes, or back ticks.
- NaN != NaN
- Conditional operator: condition ? true : false
- Special empty values
    - null
    - undefined
    - The difference between these two is an accident in JS but it doesn’t matter most of the time.
- JS performs *type coercion* when the types of two values is different.
- Use `===` to check for value and type equality most of the time unless the types are known.
- Use `${variableName}` to use the value of variableName in a string.
- There are no integers in JS so everything is a float.

## Chapter 2: Program Structure

- If an expression corresponds to a sentence fragment, a JavaScript *statement* corresponds to a full sentence. A program is a list of statements.
- All statements must end with a semicolon.
- Review of variable binding, control structures, and loops.

## Chapter 3: Functions

- Three ways of defining functions
    1. Function binding
    2. Function declaration
    3. Arrow functions
- Function binding syntax

```javascript
    const square = function() {
      console.log("Hello world!");
    };
```

- Functions can act like values and be stored by variables.
- Function declaration syntax

```javascript
    function square(x) {
      return x * x;
    }
```

- Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope.
- Arrow function syntax

```javascript
    const square = (x) => { return x * x; };
    const square = x => x * x;
```

- The arrow comes after the parameters and is followed by the function’s body.
- There’s no deep reason to have both arrow functions and the function keyword in the language.
- *Closure*: being able to reference a specific instance of a local binding in an enclosing scope.
- Always start by writing something that’s correct and easy to understand.
- If you’re worried that it’s too slow - which it usually isn’t since most code simply isn’t executed often enough to take any significant amount of time - you can measure afterward and improve it if necessary
- A useful principle is to not add cleverness unless you are absolutely sure you’re going to need it.
- Functions can be roughly divided into those that are called for their side effects and those that are called for their return value.
    - Side effect such as printing the right value.
    - Return value as in returning some value.

## Chapter 4: Data Structures: Objects and Arrays

- JavaScript has no “deep” comparison operator to compare object contents (but you can write a custom one).
- Arrays have an `includes` method that checks whether a given value exists in the array.
- Foreach loop in JS

```javascript
    for (let element of array) {}
```

- Use `push` and `pop` to append and remove from the end of an array.
- Use `unshift` and `shift` to append and remove from the start of an array.
- Add three dots before a function parameter for it to be the rest parameter

```javascript
    function max(...numbers) {}
```

- *Rest parameter*: a parameter of an array containing all further arguments (similar to *args and **kwargs in Python).
- If we know the inputs into a function, we can bind those inputs to specific variable names.

```javascript
    function phi([n00, n01, n10, n11]) {
      return (n11 * n00 - n10 * n01) /
        Math.sqrt((n10 + n11) * (n00 + n01) *
                  (n01 + n11) * (n00 + n10));
    }
```

- *JavaScript Object Notation (JSON)*: a popular serialization format.
- The `length` property of arrays isn’t necessarily the number of items in the array, but the highest index of the array.

## Chapter 5: Higher-order Functions

- E.g. of a function that creates functions.

```javascript
    function greaterThan(n) {
      return m => m > n;
    }
    let greaterThan10 = greaterThan(10);
    console.log(greaterThan10(11));
    // → true
```

- Arrays have a built-in `forEach` method.

```javascript
    ["A", "B"].forEach(l => console.log(l));
    // → A
    // → B
```

## Chapter 6: The Secret Life of Objects

- The core idea in object-oriented programming is to divide programs into smaller pieces and make each piece responsible for managing its own state.
- E.g. of defining a class method

```javascript
    let rabbit = {};
    rabbit.speak = function() {};
    rabbit.speak();
```

- Arrow functions are different - they do not bind their own `this` but can see the `this` binding of the scope around them.
- Class notation

```javascript
    class Rabbit {
      constructor(type) {
        this.type = type;
      }
      speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
      }
    }

    let killerRabbit = new Rabbit("killer");
    let blackRabbit = new Rabbit("black");
```

- Using plain objects as maps is dangerous, instead use the `Map` class.
- The `Symbol` function lets us define class interfaces that are unique.

## Chapter 7: Project: A Robot

- Chapter skipped.

## Chapter 8: Bugs and Errors

- JS has a strict mode invoked using `use strict;`.
- E.g. of throwing an exception and catching it.

```javascript
    throw new Error("Error");

    try {
      // something
    } catch (error) {
      // something
    }
```

- E.g. of selective exception catching

```javascript
    class InputError extends Error {}

    try {}
    catch (e) {
      if (e instanceof InputError) {}
    }
```

## Chapter 9: Regular Expressions

- Skimmed because I’ve done regex before but I did the exercises.

## Chapter 10: Modules

- *Module*: a piece of program that specifies which other pieces it relies on and which functionality it provides.
- *Package*: a chunk of code that can be distributed.
- *NPM*: a place to store, find, and manage packages.
- Use the `require()` function to load a module via CommonJS.
- Use `import` and `export` to load a module via ES modules.
- Fetching a big file tends to be faster than fetching a lot of smaller files.
- *Bundler*: a tool that bundles a program into a single big file.
- *Minifier*: a tool that minimizes a program by removing comments and whitespace, renaming binding, and replacing pieces of code with equivalent, shorter code.
- Be aware that the JavaScript code you run is often not the code as it was written.

## Chapter 11: Asynchronous Programming

- *Synchronous*: things happen one at a time.
- *Asynchronous*: multiple things happen at the same time.


![Figure 11.1](figure11-1.png)

- One approach to asynchronous programming is to make functions that are slow to take an extra argument called a callback function.
- *Callback function*: when the function finishes, call the callback function with the result.
- Asynchronicity is contagious; any function that calls a function that works asynchronously must itself be asynchronous.
- Another way of performing asynchronous programming, instead of using a callback function, is to return an object that represents the future event.
- *Promise*: an asynchronous action that may complete at some point and produce a value.
- Callback functions and promises are different solutions to the same problem, the problem of knowing when an async function call is done.
- However, callback functions perform a function while promises return an object.
- Create a promise using the `Promise.resolve()` function and call `.then()` on the promise object to get the its result.
- E.g.

```javascript
    let fifteen = Promise.resolve(15);
    fifteen.then(value => console.log(`Got ${value}`));
    // → Got 15
```

- You can add multiple callbacks to a single promise and they will be called, even if you add them after the promise has already resolved (finished).
- Also, the `then()` function returns another promise when its function argument returns.
- Think of promises as a way to move values into the future. A normal value is simply there. A promised value might be there or it might be there in the future.
- Promise-based functions look similar to regular ones but they differ in that the output may not be available yet.
- Handling errors in async programming is a nightmare because it isn’t easy to trace the error.
- For callback functions, it’s common to use the first argument to indicate whether the action failed and to use the second argument to hold the value when the action is successful.
- For promises, the `then()` function is only called when the promise is successful and exceptions are propagated. The `catch()` function is only called when the promise is unsuccessful and is useful in exception handling.
- To build an async loop for retries, we need to use a recursive function because regular loops don’t allow us to stop and wait for an async action.
- Promises are better than callbacks because they automatically handle reporting and routing of exceptions.
- Use the `Promise.all()` function to return a promise when all promises in an array are resolved.
- You can write pseudo-synchronous code to describe an async computation using `async` and `await`.
- *Async function*: a function that implicitly returns a promise and that can await other promises in its function body.
- E.g.

```javascript
    async function findInStorage() {
      let local = await storage();
      if (local != null) return local;
      throw new Error('Not found');
    }
```

- Use `await` in the function body to pause the execution and wait for the promise to resolve.
- Using async and promises together make the code easier to read and write.
- JS also has generators like Python which return an iterator.
- Create a generator function using the `function*` keyword.
- E.g.

```javascript
    function* powers(n) {
      for (let current = n;; current *= n) {
        yield current;
      }
    }

    for (let power of powers(3)) {
      if (power > 50) break;
      console.log(power);
    }
    // → 3
    // → 9
    // → 27
```

- An async function is a special type of generator. It produces a promise when called, which is resolved when it returns (finishes) and rejected when it throws an exception.
- *Event loop*: the big loop around your program that only runs one program at a time.
- E.g.

```javascript
    Promise.resolve("Done").then(console.log);
    console.log("Me first!");
    // → Me first!
    // → Done
```

- Computing new values is less error-prone than changing existing values.

## Chapter 12: Project: A Programming Language

- Chapter skipped.

# Part 2: Browser

## Chapter 13: JavaScript and the Browser

- *Network protocol*: describes a style of communication over a network.
- *Hypertext Transfer Protocol (HTTP)*: a protocol for retrieving named resources.
- *World Wide Web (WWW)*: a set of protocols and formats for visiting web pages in a browser.
- *Uniform Resource Locator (URL)*: the name of each document on the web.

| http://  | eloquentjavascript.net/ | 13_browser.html |
| -------- | ----------------------- | --------------- |
| protocol | server                  | path            |

- *Hypertext Markup Language (HTML)*: the document format used for web pages.
- To write “<” and “>” in HTML, use `&gt;` and `&lt;`.
- Use the `src` attribute of the `<script>` tag to link to a JS file.
- E.g.

```html
    <script src="code/hello.js"></script>
```

## Chapter 14: The Document Object Model

- *Document Object Model (DOM)*: representing a webpage as a series of nested boxes.
- For the DOM, `document.documentElement` is the root element.
- DOM nodes contains various links to other nearby nodes.


![Figure 14.1](figure14-1.png)

- The `childNodes` array isn’t a real array so you can’t loop over it with a forEach loop. You have to use the index.
- E.g. of combining JS and HTML

```html
    <p>My ostrich Gertrude:</p>
    <p><img id="gertrude" src="img/ostrich.png"></p>

    <script>
      let ostrich = document.getElementById("gertrude");
      console.log(ostrich.src);
    </script>
```

## Chapter 15: Handling Events

- *Handlers*: functions that register and manage an event.
- E.g. of handler

```html
    <p>Click this document to activate the handler.</p>
    <script>
      window.addEventListener("click", event => {
        console.log("You knocked?");
        console.log(event);
      });
    </script>
```

- Event listeners are called only when the event happens in the context of the object they are registered on.
- *Event object*: objects passed to event handler functions that hold info about the event.
- Events are said to propagate from children to parents all the way to the root node.
- To stop the propagation, use the `event.stopPropagation()` function.
- Types of JS events
    - Keys
    - Mouse
    - Touch
    - Scroll
    - Focus
    - Load
- Use a web worker for multi-threaded programs.

## Chapter 16: Project: A Platform Game

- Chapter skipped.

## Chapter 17: Drawing on Canvas

- Chapter skipped.

## Chapter 18: HTTP and Forms

- Common HTTP methods
    - GET
    - DELETE
    - PUT
    - POST
- E.g. of HTML page sending an HTTP request

```html
    <form method="GET" action="example/message.html">
      <p>Name: <input type="text" name="name"></p>
      <p>Message:<br><textarea name="message"></textarea></p>
      <p><button type="submit">Send</button></p>
    </form>
```

- E.g. of JS sending an HTTP request

```javascript
    fetch("example/data.txt").then(response => {
      console.log(response.status);
      // → 200
      console.log(response.headers.get("Content-Type"));
      // → text/plain
    });
```

- Skimmed the HTML forms section.

## Chapter 19: Project: A Pixel Art Editor

- Chapter skipped.

# Part 3: Node

## Chapter 20: Node.js

- Use command `node -v` to check Node.js version.
- Access `process.argv` to access the command line arguments.
- Create a package.json file to hold the dependencies needed to run a program
- NPM uses semantic versioning where every time new functionality is added, the middle number has to be incremented. Every time compatibility is broken, so that existing code that uses the package might not work with the new version, the first number has to be incremented.
- A `^` means that the version compatible can be higher.
- E.g. `^2.3.0` is compatible with `3.0.0`.

## Chapter 21: Project: Skill-Sharing Website

- Chapter skipped.
