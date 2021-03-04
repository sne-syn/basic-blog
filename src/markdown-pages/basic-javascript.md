# JavaScipt 

## Difference

- compiler - compiles code to the earliest versions of EcmaScript. Usually, ES5.
- polyfill - provides code for the features which don't have analogous in ES5. For example, promises.

## Different modes for running javascript

- sloppy mode - default.

* allows to declare variables without keyword VAR. Assigns it to the window object as its property
* allows to delete function, variable, functiin's arguments
  // function example(){};
  // delete example;
* <i>eval</i> isn't safe.

- strict mode 
  enables with the "use strict;" string. Because it's a string, old browsers can ignore it without breaking.
  Creates <b>strict operating context </b>
