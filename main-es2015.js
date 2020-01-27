(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-light\" style=\"height: 98vh\">\n    <router-outlet></router-outlet>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-input/dice-input.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-input/dice-input.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-info pt-4 px-4 text-white border border-secondary\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"rollDice(form.value)\">\n        <div class=\"row\">\n\n            <div class=\"form-group col-4\">\n                <label for=\"dicePieces\">Dice Pieces</label>\n                <input formControlName=\"pieces\" type=\"text\" class=\"form-control\" id=\"dicePieces\"\n                    aria-describedby=\"dicePiecesHelp\" placeholder=\"Enter dice pieces\">\n                <small id=\"dicePiecesHelp\" class=\"form-text\">Minimum of 1 and Maximum of 100.</small>\n            </div>\n\n            <div class=\"form-group col-4\">\n                <label for=\"diceSides\">Dice Sides</label>\n                <select formControlName=\"sides\" class=\"form-control\" id=\"diceSides\" aria-describedby=\"diceSidessHelp\">\n                    <option *ngFor=\"let i of sides\" value=\"{{i}}\">{{i}}</option>\n                </select>\n                <small id=\"diceSidessHelp\" class=\"form-text\"></small>\n            </div>\n            <div class=\"form-group col-4\">\n                <label for=\"diceRolls\">Rolls</label>\n                <input formControlName=\"rolls\" type=\"text\" class=\"form-control\" id=\"diceRolls\"\n                    aria-describedby=\"diceRollsHelp\" placeholder=\"Rolls\">\n                <small id=\"diceRollsHelp\" class=\"form-text\">Minimum of 1 and Maximum of 100.</small>\n            </div>\n            <div class=\"form-group col-4\">\n                <button [disabled]=\"!form.valid\" (click)=\"rollDice(form.value)\" type=\"button\"\n                    class=\"btn btn-primary\">Submit</button>\n            </div>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-report/dice-report.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-report/dice-report.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-white p-2 pt-3  border border-secondary\">\n    <h4>Reports</h4>\n    <div *ngIf=\"diceResponseReport\" class=\"border border-secondary overflow-auto\" style=\"height: 65vh;\">\n\n        <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n            <ngb-panel *ngFor=\"let group of diceResponseReport.groupList\">\n                <ng-template ngbPanelTitle>\n                    <span>Pieces: {{group.request.pieces}} | </span>\n                    <span>Sides: {{group.request.sides}} | </span>\n                    <span>Total Rolls: {{group.totalRolls}} | </span>\n                    <span>Total Simulations: {{group.totalSimulations}}</span>\n                </ng-template>\n                <ng-template ngbPanelContent>\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">#</th>\n                                <th scope=\"col\">Sum</th>\n                                <th scope=\"col\">Count</th>\n                                <th scope=\"col\">Percentage</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let diceSumDistribution of group.diceSumDistributionList; index as i\">\n                                <th scope=\"row\">{{ i + 1 }}</th>\n                                <td>{{ diceSumDistribution.diceSum.sum }}</td>\n                                <td>{{ diceSumDistribution.diceSum.count }}</td>\n                                <td>{{ diceSumDistribution.percentage}}%</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </ng-template>\n            </ngb-panel>\n        </ngb-accordion>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-results/dice-results.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-results/dice-results.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-white p-2 border border-secondary\" style=\"height: 72vh;\">\n\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\n        <ngb-panel *ngFor=\"let results of resultsList\">\n            <ng-template ngbPanelTitle>\n                <span>Pieces: {{results.request.pieces}} | </span>\n                <span>Sides: {{results.request.sides}} | </span>\n                <span>Rolls: {{results.request.rolls}}</span>\n            </ng-template>\n            <ng-template ngbPanelContent>\n                <div *ngFor=\"let diceRoll of results.diceRollList\" class=\"row py-1 mb-1 border border-secondary\">\n                    <div class=\"row col-10\">\n                        <ng-container *ngFor=\"let num of diceRoll.results; let i = index\">\n                            <div class=\"col-1 {{((i + 1) + (toInt(i/10) % 2 == 0 ? 0 : 1)) % 2 == 0 ? 'bg-light': ''}}\">\n                                {{num}}\n                            </div>\n                            <div *ngIf=\"(i + 1) % 10 == 0\" style=\"width: 100%\"></div>\n                        </ng-container>\n                    </div>\n                    <div class=\"col-2\">\n                        Total: {{diceRoll.sum}}\n                    </div>\n                </div>\n            </ng-template>\n        </ngb-panel>\n    </ngb-accordion>\n    <div *ngIf=\"resultsList.length === 0\" class=\"d-flex justify-content-center\">\n        No Results\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-simulation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-simulation.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row bg-secondary mt-2 mx-4\" style=\"height: 95vh;\">\n\n    <div class=\"col-1 bg-info\">&nbsp;</div>\n    <div class=\"col-10\">\n        <div>\n            <app-dice-input></app-dice-input>\n        </div>\n        <div class=\"row bg-secondary\" style=\"height: 73vh;\">\n            <div class=\"col-6\">\n                <app-dice-results></app-dice-results>\n            </div>\n            <div class=\"col-6\">\n                <app-dice-report></app-dice-report>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-1 bg-info\">&nbsp;</div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dice_simulation_dice_simulation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dice-simulation/dice-simulation.component */ "./src/app/dice-simulation/dice-simulation.component.ts");




const routes = [
    {
        path: '',
        component: _dice_simulation_dice_simulation_component__WEBPACK_IMPORTED_MODULE_3__["DiceSimulationComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'rldp-diceapp-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dice_simulation_dice_results_dice_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dice-simulation/dice-results/dice-results.component */ "./src/app/dice-simulation/dice-results/dice-results.component.ts");
/* harmony import */ var _core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/dice-backend.service */ "./src/app/core/services/dice-backend.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _extended_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./extended-http */ "./src/app/extended-http.ts");
/* harmony import */ var _dice_simulation_dice_simulation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dice-simulation/dice-simulation.component */ "./src/app/dice-simulation/dice-simulation.component.ts");
/* harmony import */ var _dice_simulation_dice_input_dice_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dice-simulation/dice-input/dice-input.component */ "./src/app/dice-simulation/dice-input/dice-input.component.ts");
/* harmony import */ var _dice_simulation_dice_report_dice_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dice-simulation/dice-report/dice-report.component */ "./src/app/dice-simulation/dice-report/dice-report.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _dice_simulation_dice_input_dice_input_component__WEBPACK_IMPORTED_MODULE_12__["DiceInputComponent"],
            _dice_simulation_dice_report_dice_report_component__WEBPACK_IMPORTED_MODULE_13__["DiceReportComponent"],
            _dice_simulation_dice_results_dice_results_component__WEBPACK_IMPORTED_MODULE_7__["DiceResultsComponent"],
            _dice_simulation_dice_simulation_component__WEBPACK_IMPORTED_MODULE_11__["DiceSimulationComponent"]
        ],
        imports: [
            _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ],
        providers: [
            {
                provide: _angular_http__WEBPACK_IMPORTED_MODULE_9__["Http"],
                useClass: _extended_http__WEBPACK_IMPORTED_MODULE_10__["ExtendedHttp"]
            },
            _core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_8__["DiceBackendService"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/models/dice-request.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/dice-request.ts ***!
  \*********************************************/
/*! exports provided: DiceRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceRequest", function() { return DiceRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _distinct_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distinct-request */ "./src/app/core/models/distinct-request.ts");


class DiceRequest extends _distinct_request__WEBPACK_IMPORTED_MODULE_1__["DistinctRequest"] {
    constructor(param) {
        super(param);
        this.rolls = param.rolls;
    }
}


/***/ }),

/***/ "./src/app/core/models/dice-response-group.ts":
/*!****************************************************!*\
  !*** ./src/app/core/models/dice-response-group.ts ***!
  \****************************************************/
/*! exports provided: DiceResponseGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceResponseGroup", function() { return DiceResponseGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dice_sum_distribution__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice-sum-distribution */ "./src/app/core/models/dice-sum-distribution.ts");
/* harmony import */ var _dice_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dice-response */ "./src/app/core/models/dice-response.ts");
/* harmony import */ var _distinct_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distinct-request */ "./src/app/core/models/distinct-request.ts");




class DiceResponseGroup {
    constructor(param) {
        this.diceSumDistributionList = [];
        this.diceResponseList = [];
        this.totalRolls = param.totalRolls;
        this.totalSimulations = param.totalSimulations;
        this.request = new _distinct_request__WEBPACK_IMPORTED_MODULE_3__["DistinctRequest"](param.request);
        param.diceSumDistributionList.forEach(element => {
            this.diceSumDistributionList.push(new _dice_sum_distribution__WEBPACK_IMPORTED_MODULE_1__["DiceSumDistribution"](element));
        });
        param.diceResponseList.forEach(element => {
            this.diceResponseList.push(new _dice_response__WEBPACK_IMPORTED_MODULE_2__["DiceResponse"](element));
        });
    }
}


/***/ }),

/***/ "./src/app/core/models/dice-response-report.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/models/dice-response-report.ts ***!
  \*****************************************************/
/*! exports provided: DiceResponseReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceResponseReport", function() { return DiceResponseReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dice_response_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice-response-group */ "./src/app/core/models/dice-response-group.ts");


class DiceResponseReport {
    constructor(param) {
        this.groupList = [];
        if (param.groupList) {
            param.groupList.forEach(element => {
                this.groupList.push(new _dice_response_group__WEBPACK_IMPORTED_MODULE_1__["DiceResponseGroup"](element));
            });
        }
    }
}


/***/ }),

/***/ "./src/app/core/models/dice-response.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/dice-response.ts ***!
  \**********************************************/
/*! exports provided: DiceResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceResponse", function() { return DiceResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dice_sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice-sum */ "./src/app/core/models/dice-sum.ts");
/* harmony import */ var _dice_roll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dice-roll */ "./src/app/core/models/dice-roll.ts");



class DiceResponse {
    constructor(param) {
        this.diceRollList = [];
        this.diceSumSet = [];
        if (param.diceRollList) {
            param.diceRollList.forEach(element => {
                this.diceRollList.push(new _dice_roll__WEBPACK_IMPORTED_MODULE_2__["DiceRoll"](element));
            });
        }
        if (param.diceSumSet) {
            param.diceSumSet.forEach(element => {
                this.diceSumSet.push(new _dice_sum__WEBPACK_IMPORTED_MODULE_1__["DiceSum"](element));
            });
        }
        this.request = param.request;
    }
}


/***/ }),

/***/ "./src/app/core/models/dice-roll.ts":
/*!******************************************!*\
  !*** ./src/app/core/models/dice-roll.ts ***!
  \******************************************/
/*! exports provided: DiceRoll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceRoll", function() { return DiceRoll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DiceRoll {
    constructor(param) {
        this.results = [];
        this.results = param.results;
        this.sum = param.sum;
    }
}


/***/ }),

/***/ "./src/app/core/models/dice-sum-distribution.ts":
/*!******************************************************!*\
  !*** ./src/app/core/models/dice-sum-distribution.ts ***!
  \******************************************************/
/*! exports provided: DiceSumDistribution */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceSumDistribution", function() { return DiceSumDistribution; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dice_sum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dice-sum */ "./src/app/core/models/dice-sum.ts");


class DiceSumDistribution {
    constructor(param) {
        this.percentage = param.percentage;
        this.diceSum = new _dice_sum__WEBPACK_IMPORTED_MODULE_1__["DiceSum"](param.diceSum);
    }
}


/***/ }),

/***/ "./src/app/core/models/dice-sum.ts":
/*!*****************************************!*\
  !*** ./src/app/core/models/dice-sum.ts ***!
  \*****************************************/
/*! exports provided: DiceSum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceSum", function() { return DiceSum; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DiceSum {
    constructor(param) {
        this.sum = param.sum;
        this.count = param.count;
    }
}


/***/ }),

/***/ "./src/app/core/models/distinct-request.ts":
/*!*************************************************!*\
  !*** ./src/app/core/models/distinct-request.ts ***!
  \*************************************************/
/*! exports provided: DistinctRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistinctRequest", function() { return DistinctRequest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DistinctRequest {
    constructor(param) {
        this.pieces = param.pieces;
        this.sides = param.sides;
    }
}


/***/ }),

/***/ "./src/app/core/services/dice-backend.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/dice-backend.service.ts ***!
  \*******************************************************/
/*! exports provided: DiceBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceBackendService", function() { return DiceBackendService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_dice_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../models/dice-response */ "./src/app/core/models/dice-response.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_dice_response_report__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/dice-response-report */ "./src/app/core/models/dice-response-report.ts");







let DiceBackendService = class DiceBackendService {
    constructor(http) {
        this.http = http;
        this._diceResponse = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.diceResponse = this._diceResponse.asObservable();
    }
    rollDice(req) {
        return this.http.get(`/rldp-diceapp-service/dice/roll?pieces=${req.pieces}&sides=${req.sides}&rolls=${req.rolls}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            this._diceResponse.next(new _models_dice_response__WEBPACK_IMPORTED_MODULE_4__["DiceResponse"](response.json()));
            return true;
        }));
    }
    getDiceResultsReport() {
        return this.http.get(`/rldp-diceapp-service/dice/report`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            return new _models_dice_response_report__WEBPACK_IMPORTED_MODULE_6__["DiceResponseReport"](response.json());
        }));
    }
};
DiceBackendService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
DiceBackendService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DiceBackendService);



/***/ }),

/***/ "./src/app/dice-simulation/dice-input/dice-input.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/dice-simulation/dice-input/dice-input.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY2Utc2ltdWxhdGlvbi9kaWNlLWlucHV0L2RpY2UtaW5wdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dice-simulation/dice-input/dice-input.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dice-simulation/dice-input/dice-input.component.ts ***!
  \********************************************************************/
/*! exports provided: DiceInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceInputComponent", function() { return DiceInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/dice-backend.service */ "./src/app/core/services/dice-backend.service.ts");
/* harmony import */ var src_app_core_models_dice_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/models/dice-request */ "./src/app/core/models/dice-request.ts");





const SIDES = [
    4,
    6,
    8,
    10,
    12,
    20,
    100
];
let DiceInputComponent = class DiceInputComponent {
    constructor(diceBackendService) {
        this.diceBackendService = diceBackendService;
        this.sides = SIDES;
    }
    ngOnInit() {
        const commonValidators = [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[1-9]{1}[0-9]*"),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            pieces: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, commonValidators),
            sides: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](4),
            rolls: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, commonValidators),
        });
    }
    rollDice(param) {
        const request = new src_app_core_models_dice_request__WEBPACK_IMPORTED_MODULE_4__["DiceRequest"](param);
        this.diceBackendService.rollDice(request).subscribe(results => {
        });
    }
};
DiceInputComponent.ctorParameters = () => [
    { type: src_app_core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_3__["DiceBackendService"] }
];
DiceInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dice-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dice-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-input/dice-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dice-input.component.css */ "./src/app/dice-simulation/dice-input/dice-input.component.css")).default]
    })
], DiceInputComponent);



/***/ }),

/***/ "./src/app/dice-simulation/dice-report/dice-report.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dice-simulation/dice-report/dice-report.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY2Utc2ltdWxhdGlvbi9kaWNlLXJlcG9ydC9kaWNlLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/dice-simulation/dice-report/dice-report.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dice-simulation/dice-report/dice-report.component.ts ***!
  \**********************************************************************/
/*! exports provided: DiceReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceReportComponent", function() { return DiceReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/dice-backend.service */ "./src/app/core/services/dice-backend.service.ts");



let DiceReportComponent = class DiceReportComponent {
    constructor(diceBackendService) {
        this.diceBackendService = diceBackendService;
    }
    ngOnInit() {
        this.getDiceResultsReport();
        this.diceBackendService.diceResponse.subscribe(results => {
            if (results) {
                this.getDiceResultsReport();
            }
        });
    }
    getDiceResultsReport() {
        this.diceBackendService.getDiceResultsReport().subscribe(diceResponseReport => {
            this.diceResponseReport = diceResponseReport;
        });
    }
};
DiceReportComponent.ctorParameters = () => [
    { type: src_app_core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_2__["DiceBackendService"] }
];
DiceReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dice-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dice-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-report/dice-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dice-report.component.css */ "./src/app/dice-simulation/dice-report/dice-report.component.css")).default]
    })
], DiceReportComponent);



/***/ }),

/***/ "./src/app/dice-simulation/dice-results/dice-results.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/dice-simulation/dice-results/dice-results.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY2Utc2ltdWxhdGlvbi9kaWNlLXJlc3VsdHMvZGljZS1yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dice-simulation/dice-results/dice-results.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dice-simulation/dice-results/dice-results.component.ts ***!
  \************************************************************************/
/*! exports provided: DiceResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceResultsComponent", function() { return DiceResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/dice-backend.service */ "./src/app/core/services/dice-backend.service.ts");



let DiceResultsComponent = class DiceResultsComponent {
    constructor(diceBackendService) {
        this.diceBackendService = diceBackendService;
        this.resultsList = [];
    }
    ngOnInit() {
        this.diceBackendService.diceResponse.subscribe(results => {
            if (results) {
                this.resultsList.unshift(results);
            }
        });
    }
    toInt(num) {
        return parseInt(num);
    }
};
DiceResultsComponent.ctorParameters = () => [
    { type: _core_services_dice_backend_service__WEBPACK_IMPORTED_MODULE_2__["DiceBackendService"] }
];
DiceResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dice-results',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dice-results.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-results/dice-results.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dice-results.component.css */ "./src/app/dice-simulation/dice-results/dice-results.component.css")).default]
    })
], DiceResultsComponent);



/***/ }),

/***/ "./src/app/dice-simulation/dice-simulation.component.css":
/*!***************************************************************!*\
  !*** ./src/app/dice-simulation/dice-simulation.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpY2Utc2ltdWxhdGlvbi9kaWNlLXNpbXVsYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dice-simulation/dice-simulation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dice-simulation/dice-simulation.component.ts ***!
  \**************************************************************/
/*! exports provided: DiceSimulationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiceSimulationComponent", function() { return DiceSimulationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiceSimulationComponent = class DiceSimulationComponent {
    constructor() { }
    ngOnInit() {
    }
};
DiceSimulationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dice-simulation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dice-simulation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dice-simulation/dice-simulation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dice-simulation.component.css */ "./src/app/dice-simulation/dice-simulation.component.css")).default]
    })
], DiceSimulationComponent);



/***/ }),

/***/ "./src/app/extended-http.ts":
/*!**********************************!*\
  !*** ./src/app/extended-http.ts ***!
  \**********************************/
/*! exports provided: ExtendedHttp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedHttp", function() { return ExtendedHttp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");



let ExtendedHttp = class ExtendedHttp extends _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] {
    constructor(backend, defaultOptions, injector) {
        super(backend, defaultOptions);
        this.injector = injector;
    }
    request(url, options) {
        let requestUrl;
        if (typeof url === 'string') {
            requestUrl = url;
        }
        else {
            requestUrl = url.url;
        }
        if (requestUrl.indexOf('rldp-diceapp-service') >= 0) {
            this.overrideUrl(url);
        }
        return super.request(url, options);
    }
    overrideUrl(request) {
        const apiDomain = sessionStorage.getItem('apiDomain');
        if (apiDomain) {
            if (typeof request === 'string') {
                request = apiDomain.concat(request);
            }
            else {
                request.url = apiDomain.concat(request.url);
            }
        }
    }
};
ExtendedHttp.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["XHRBackend"] },
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
ExtendedHttp = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ExtendedHttp);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jr/Projects/Codes/Personal/rldp-dice-app/rldp-diceapp-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map