# Angular PDF printing snippet

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.26.

## Usage

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


### Basic printing

#### Install jsPDF and types

```shell
$ npm install jspdf --save
$ npm install @types/jspdf --save
```


#### Then need to add script path to `angular-cli.json` into `apps` section

```javascript
"scripts": [
    "../node_modules/jspdf/dist/jspdf.min.js"
],
```

#### Then go to your component and declare jsPDF on it

```javascript
declare let jsPDF;
```

#### And use it inside you component

```javascript
let doc = new jsPDF();
doc.text(20, 20, 'Hello world.');
doc.save('Test.pdf');
```

### Advanced printing

#### Install jsPDF, types and rasterizeHTML

```shell
$ npm install jspdf --save
$ npm install @types/jspdf --save
$ npm install rasterizehtml --save
```

#### Add scripts to `angular-cli.json` into `apps` section

```javascript
"scripts": [
    "../node_modules/jspdf/dist/jspdf.min.js",
    "../node_modules/rasterizehtml/dist/rasterizeHTML.allinone.js"
],
```

#### Then go to your component and declare jsPDF on it

```javascript
declare let jsPDF;
```

#### Import `ElementRef`

```javascript
import { Component, ElementRef, AfterViewInit} from '@angular/core';
```

#### Get current element into component

```javascript
constructor(private elementRef: ElementRef) {
    super()
  }
```

#### And finally use `jsPDF` inside you component

```javascript
let doc = new jsPDF('p', 'px', 'a4');
let options = {
  pagesplit: true
};
doc.fromHTML(this.elementRef.nativeElement, 0, 0, options, () => {
    doc.save('Test.pdf');
  });
}
```

