# ts-js-module-pattern
Demonstrates an issue when converting existing JavaScript to typescript.

This is about converting some preexisting JavaScript code which runs in
the Browser.
The patters in the JavaScript code originated from the book [Single Page Web Applications
JavaScript end-to-end](http://www.manning.com/mikowski/) from Michael S. Mikowski and Josh C. Powell.

# The Javascript Module Pattern
The module pattern here is to have a single global variable which then has properties for each other app module:
In the book for example this looks like this:

```
spa - root module
spa.model - model module
spa.util - utility module
...
```

This git repository contains the code to demonstrate the problem I ran into.
Starting point is the module pattern for a 'cats' app (instead of 'spa').
The JavaScript code looks like this:

```JavaScript
//  file cats.js
cats = (function () {
  'use strict';

  var initModule = function () {
    cats.model.initModule();
  };

  return {
    initModule : initModule
  };
}());

```

```JavaScript

// file cats.model.js
cats.model = (function () {
  'use strict';
  var initModule, getCat;

  initModule = function () {
    // some init code here.
  };

  getCat = function() {
    return "tabby";
  }

  return {
    initModule : initModule,
    getCat     : getCat
  };
}());
```

After a bit of trial and error I translated the model module as follows:

```typescript
// cats.model.ts
module cats {

  var initModule = function(): void {
    // some init code here.
  }

  var getCat = function() : string {
    return "tabby";
  }

  export var model = {
    initModule : initModule,
    getCat     : getCat
  };
}

```
 This was translated by typescript to:
```JavaScript
// typescript compiled code cats.model.js - this comment added manually.
var cats;
(function (cats) {
    'use strict';
    var initModule = function () {
    };
    var getCat = function () {
        return "tabby";
    };
    cats.model = {
        initModule: initModule,
        getCat: getCat
    };
})(cats || (cats = {}));
```

The typescript generated is equivalent to the original JavaScript code, which the original goal was.

When converting the root module `cats` it was not clear to me how to
expose the module correctly without introducing a new variable. So I used code as shown above for submodules instead:

```typescript
module cats {
  'use strict'
  var initModule = function () {
    cats.model.initModule();
  }

  export var cats = {
    initModule : initModule
  };
}
```

Unexpectedly this caused this error:
```console
ts-js-module-pattern dev$ tsc -p app
app/cats.ts(4,10): error TS2339: Property 'model' does not exist on type '{ initModule: () => void; }'.
ts-js-module-pattern dev$ tsc -v
message TS6029: Version 1.5.0-beta
```

In the typescript generated code:
```JavaScript
var cats;
(function (cats_1) {
    'use strict';
    var initModule = function () {
        cats_1.cats.model.initModule();
    };
    cats_1.cats = {
        initModule: initModule
    };
})(cats || (cats = {}));
```

a variable `cats_1` is introduced which probably confuses typescript so that `cats` in code `cats.model.initModule()` no longer references the cats module as expected, but to `cats.cats.model` which of course is not defined.

By not referencing the module `cats` with initModule as shown:

```typescript
module cats {
  'use strict'
  var initModule = function () {
    model.initModule();
  }

  export var cats = {
    initModule : initModule
  };
}
```

the expected JavaScript is generated
```JavaScript
var cats;
(function (cats_1) {
    'use strict';
    var initModule = function () {
        cats_1.model.initModule();
    };
    cats_1.cats = {
        initModule: initModule
    };
})(cats || (cats = {}));
```

And this also works when changing the name from `cats.cats` to `cats.root`:
```typescript
module cats {
  'use strict'
  var initModule = function () {
    model.initModule();
  }

  export var root = {
    initModule : initModule
  };
}
```
