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

Browsers do not understand TypeScript. It must be compiled down to JavaScript first.

TypeScript will infer the given variables type, just declare a number and now everytime you reference this number variable the ts environment will see this as a number and will not allow you to assign anything else to this number variable.

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
  "include": ["./src"]       // 06.tell TS to only compile TS files from the SRC folder
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

## Types, Type hinting

By adding colon and the type that variable is, you tell TypeScript that this variable is of a given type, string, boolean, number.

```js
let displayName: string = "Mannuel Ferreira";
let inventoryType: string = "piano";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let cost: number = 300;
```

## Union types

Union types allow you to specify more than one type. If you are not sure what type a property in an API might return this can safe guard against it. However you must at run time convert that value to correct type once you have it.

```js
let monthlyPromo: number | string = 50; // union types 
```

## Type Inference

Typescript can at run time figure what type is in the variable, even if you never explicitly told it. I would urge you to be explicit.

```js
let monthlyPromo = 50; // can use :any , opting out of type safety, last resort
```

## Describe structure of complex types

```js
function getProduct(trackingNumber: string): {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
} {
  return null;
}
```

## Interfaces

```js
interface Product {
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number; 
}
```

Other option is an Interface, the more information TypeScript has about your objects the better.

- Interfaces give typescript this information and helps you find mistakes as you code.
- Interfaces describe your object, it's properties and properties types, with that information TS will alert you when you try to write the wrong type or property to an object.
- use it a lot, the more information you give it the better

```js
interface Product {
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
}

function getProduct(trackingNumber: string): Product {
  return null;
}
```

## Optional properties

Adding a question mark after the function name, tells TypeScript that this method is option, so you do not need to call it if you dont want to.

use question mark Optional param to optionally remove a property.

```js
interface Product {
  inventoryType: string;
  addNote?: (note: string) => string;
}
```

## Read ony property

This will make a property fixed, not allow you to change it.

```js
interface Product {
  inventoryType: string;
  readonly createDate: Date;
  addNote?: (note: string) => string;
}
```

## Enums

```js
enum ProductType {
  Computer = "Computer",
  Furniture = "Furniture"
}
```

## Literal types

Define the list of possible values

```js
interface Product {
  inventoryType: "computer" | "furniture";
  addNote?: (note: string) => string;
}
```

## Classes

### Access Modifiers

```js
interface Category {
  name: string,
  displayName: string,
  subCategories: { name: string, displayName: string }[]
}

class InventoryStore {
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
