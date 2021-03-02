---
title: "Variables"
date: "2021-03-02"
---

# Variables 

### sloppy-mode 
default mode for scripts
### strict-mode
more errors, prevents pitfalls of the language
<i>'use strict';</i>

- **var** - keyword <br>
  **userName** - name/identifier 

- This proccess is called - "declaring" a variable

var userName;

now it's **undefined** in other words - empty

- assign variable with value, for example **'John'**

## YES

- letters, numbers, symbols: **$**, **_**

## NOT

- first character can't be a number
- reserved words

defining variable without **var** doen't provoke an error but adds a variable to the global pbject.
it becomes **a property** of the globalThis/window object, not a variable. 

### Global object is different across enviroments
* in js browser - window
* in node.js - global

some time ago was created a common name/single reference for the global/window - **globalThis**

<i>window.consol.log()</i> 

## Hoisting 
is a strange ability to access a variable before it was created/declared. Declaration vas "hoisted" to the top of the script, so js engine was able to book some space in the memory for it. JS engine gives it an "undefined" value. 

