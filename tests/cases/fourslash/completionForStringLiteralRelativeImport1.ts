/// <reference path='fourslash.ts' />

// @Filename: test0.ts
//// import * as foo1 from "./*import_as0*/
//// import * as foo2 from ".//*import_as1*/
//// import * as foo3 from "./f/*import_as2*/
//// import * as foo4 from "./folder//*import_as3*/
//// import * as foo5 from "./folder/h/*import_as4*/

//// import foo6 = require("./*import_equals0*/
//// import foo7 = require(".//*import_equals1*/
//// import foo8 = require("./f/*import_equals2*/
//// import foo9 = require("./folder//*import_equals3*/
//// import foo10 = require("./folder/h/*import_equals4*/

//// var foo11 = require("./*require0*/
//// var foo12 = require(".//*require1*/
//// var foo13 = require("./f/*require2*/
//// var foo14 = require("./folder//*require3*/
//// var foo15 = require("./folder/h/*require4*/

// @Filename: parentTest/sub/test5.ts
//// import * as foo16 from "../g/*import_as5*/

//// import foo17 = require("../g/*import_equals5*/

//// var foo18 = require("../g/*require5*/

// @Filename: f1.ts
//// /*f1*/
// @Filename: f1.js
//// /*f1j*/
// @Filename: f1.d.ts
//// /*f1d*/
// @Filename: f2.tsx
//// /f2*/
// @Filename: f3.js
//// /*f3*/
// @Filename: f4.jsx
//// /*f4*/
// @Filename: e1.ts
//// /*e1*/
// @Filename: folder/f1.ts
//// /*subf1*/
// @Filename: folder/h1.ts
//// /*subh1*/
// @Filename: parentTest/f1.ts
//// /*parentf1*/
// @Filename: parentTest/g1.ts
//// /*parentg1*/
const kinds = ["import_as", "import_equals", "require"];

for (const kind of kinds) {
    goTo.marker(kind + "0");
    verify.completionListIsEmpty();

    goTo.marker(kind + "1");
    verify.completionListContains("f1");
    verify.completionListContains("f2");
    verify.completionListContains("e1");
    verify.completionListContains("test0");
    verify.completionListContains("folder/");
    verify.completionListContains("parentTest/");
    verify.not.completionListItemsCountIsGreaterThan(6);

    goTo.marker(kind + "2");
    verify.completionListContains("f1");
    verify.completionListContains("f2");
    verify.completionListContains("folder/");
    verify.not.completionListItemsCountIsGreaterThan(3);

    goTo.marker(kind + "3");
    verify.completionListContains("f1");
    verify.completionListContains("h1");
    verify.not.completionListItemsCountIsGreaterThan(2);

    goTo.marker(kind + "4");
    verify.completionListContains("h1");
    verify.not.completionListItemsCountIsGreaterThan(1);

    goTo.marker(kind + "5");
    verify.completionListContains("g1");
    verify.not.completionListItemsCountIsGreaterThan(1);
}