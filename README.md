<img src="./.readme/noroff-light.png" width="160" align="right">

# TypeScript

## 1. Install TypeScript globally

```bash
npm install -g typescript
```

> TypeScript is a superset of JavaScript.

The biggest difference TypeScript and JavaScript is that TypeScript has strict typing. TypeScript is superset of JavaScript, it extends JS functionality does not change how it works.

It runs in strict mode by default. TypeScript runs static analysis of your code at run time and reports errors to you before you compile and ship that beautiful JavaScript code you just wrote.

TypeScript gives JavaScript super powers.

Browsers do not understand TypeScript. It must be compiled (transpile) down to JavaScript first.

TypeScript will infer the given variables type, just declare a number and now every time you reference this number variable the ts environment will see this as a number and will not allow you to assign anything else to this number variable.

The purpose of TS is to read the errors and fix them as you go along, you will write bug free code.

## Install TypeScript

```bash
npm install -g typescript
```

## Init TypeScript

In the root of your website project initialise TypeScript. TS will create a `tsconfig.json` file. This is used to configure you build process.

`tsc` is the main start command for TypeScript. Run the command now to see helpful TypeScript docs.

```js
tsc
```

Run the TypeScript `--init` flag to initialise your project as a TypeScript project.

```bash
tsc --init
```

The `tsconfig.json` will have many properties but we only care about a few for now.

```js
{
  "compilerOptions": {
    "target": "es6",         // 01. tel TS what version of JavaScript to compile down to
    "module": "es2015",      // 02. tel TS what module system to use
    "outDir": "./public/js", // 03. tel TS what folder to compile js to
    "rootDir": "./src",      // 04. tel TS what folder the TS source files live in
    "strict": true,          // 05. tel TS to sun in strict mode
  },
  "include": ["./src"]  // 06.tell TS to only compile TS files from the SRC folder.
}
```

### Globing & Excluding folders

```js
{
  ...
  "include": ["./src/**/*"], // 07. Glob for many folders.
  "exclude":[                // 08. Glob for many folders.
    "./someFolder/**/*.spec.ts",
    "./folder/someSubFolder"
  ]
}
```

## Basic JavaScript Types

- String
- Number
- Boolean
- Object (Date, Functions etc)
- Null
- Undefined
- Symbol
- BigInt

## Types & Type Inference

Typescript at compile/transpile time figures out what type is in the variable based on what value you put into the variable, even if you never explicitly told it. I would urge you to be explicit.

```js
let monthlyPromo = 50;
let displayName = "Mannuel Ferreira";
let productType = "Piano";
let trackingNumber = "FD123455";
let createDate: Date = new Date();
let cost: number = 300;
```

## Explicit Types

By adding colon and the type that variable that you intend to create, you Explicitly tell TypeScript that this variable is of a given type, string, boolean, number, date, function, object.

```js
let displayName: string = "Mannuel Ferreira";
let productType: string = "piano";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let cost: number = 300;
```

## Union types

Union types allow you to specify more than one type. If you are not sure what type a property in an API might return this can safe guard against it. However you must at run time convert that value to correct type once you have it.

```js
let monthlyPromo: number | string = 50; // union types, if you don't know what might be coming down the API wire.
```

## Modules

TypeScript supports modules and imports and exports. Only thing to remember is you must use the .js extension. All other rules about module scope and named vs default exports still apply.

```js
import { someModule } from "./someFolder/someModule.js"

someModule.getApi("api.com");

```

## Function Type Annotations

Function params and the types you pass in can be enforced and Is highly recommend that you do this.
Tell TS what you will allow into the function.

```js
const multiply = (x: number, y:number) => {
  return x * y;
}

multiply(2, 10);
```

## Optional Params

Optional params are a way to extend your function to take an extra param, but still function if the 3rd param is not used. You know it's optional by the presence of the question mark.

Silly thought experiment here, but you can see if Z is not passed in, the if block will run `x * y`.

```js
const multiply = (x: number, y:number, z?: number | string) => {
  if (!z) {
   return x * y 
  }
  return x * y * z;
}

multiply(2, 10, 10);
```

## Type casting

TypeScript knows all the different properties and methods on the element and it will come up in the inteli-sense

Tell TS what kind of type this element is going to be. 

```js
const form = document.querySelector('form') as HTMLFormElement;
const email = document.querySelector('#inputEmail') as HTMLInputElement;
const password = document.querySelector('#inputPassword') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    email.value,
    password.value
   );
    // value as number turns it into number
});
```

## Describe structure of complex types

What if you are passing a huge object into your function, you can also do an inline type declaration. 

```js
function getProduct(trackingNumber: string): {
  displayName: string;
  productType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}
```

Its not ideal to do this because then you can only use this type once for one function, not reusable, what if another function passing same object. Interfaces are better in this respect.

## Interfaces

```js
interface Product {
  productType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number; 
}
```

Other option is an Interface, the more information TypeScript has about your objects the better.

- Interfaces describe your object, it's properties and properties types, with that information TS will alert you when you try to write the wrong type or property to an object.
- Interfaces give typescript this information and helps you find mistakes as you code.
- use it a lot, the more information you give it the better

```js
interface Product {
  productType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
}

function getProduct(trackingNumber: string): Product {
  return null;
}
```

## Optional properties

Adding a question mark after the function name, tells TypeScript that this method is option, so you do not need to call it if you don't want to.

use question mark Optional param to optionally remove a property.

```js
interface Product {
  productType: string;
  addNote?: (note: string) => string;
}
```

## Read ony property

This will make a property fixed, not allow you to change it.

```js
interface Product {
  productType: string;
  readonly createDate: Date;
  addNote?: (note: string) => string;
}
```

## Enums

An enum is way of of grouping logical variables together in one conceptual variable.

```js
enum Color {
  Red,
  Green,
  Blue
}

const shoe = {
  size: 32,
  color: Color.Blue
}

shoe.color = Color.Red 
```

## Literal types

Define the list of possible values

```js
interface Product {
  productType: "computer" | "furniture";
  addNote?: (note: string) => string;
}
```

## Classes

### Access Modifiers

```js
interface Category {
  name: string,
  displayName: string,
  subCategories: { name: string, displayName: string }[] // Array holding objects
}

class ProductsStore {
  _categories: Category[] = [];
  _items: Product[] = [];
  _isInitialized: Promise<boolean>;

  get categories() {
    return this._categories;
  }
}
```

> private

Only visible to members within the same class.

> protected

Only visible to members within the same class and derived classes.

> public (default)

Visible to all consumers.

```js
class ProductsStore {
  private _categories: Category[] = [];
  private _items: Product[] = [];
  private _isInitialized: Promise<boolean>;

  get categories() {
    return this._categories;
  }

  ...
}
```

## Generics

Can describe a variety of types

```js


```

## Tel TypeScript to look at JavaScript files as well

Add a few settings to the configurations file. Now TS will also check any JS files for compile time errors. Its not as good as completely changing your files over to TS, but it's better than nothing.

```js
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
  }
}
```
