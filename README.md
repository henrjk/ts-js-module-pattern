# ts-js-module-pattern
Demonstrate a potential bug in typescript

My starting point was some existing JavaScript code which runs in the Browser in a Single Page Application. 
The module pattern in this code original stems from the book [Single Page Web Applications
JavaScript end-to-end](http://www.manning.com/mikowski/) from Michael S. Mikowski and Josh C. Powell.

# The Javascript Module Pattern
The module pattern in this code is to have a single global variable which then has properties for each other app module:
In the book for example this looks like this:

```
spa - root module
spa.model - model module
spa.util - utility module
...
```

This git repository contains the code to demonstrate the problem I ran into. Here I used a 'cats' app.
The JavaScript code looks like this:



