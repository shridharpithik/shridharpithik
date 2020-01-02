function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-fyle></app-fyle>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fyle/fyle.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fyle/fyle.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFyleFyleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n\n    <button *ngFor=\"let serve of Serving\" type=\"submit\" (click)=\"ServeClick(serve)\" class=\"box\">\n        {{serve}}\n        Serving </button><br><br><br>\n\n    <div *ngIf=\"togglebutton\">\n       Annual<label class=\"switch\">\n            <input type=\"checkbox\"  [(ngModel)]=\"formonthoranual\">\n            <span class=\"slider round\"></span>\n        </label>monthly\n    </div><br><br>\n    <div class=\"row\" *ngIf=\"hidecard\">\n        <div class=\"col-md-3\">\n            <div class=\"card\" (click)=\"ShowSavedlollipop(this.lolipopprice)\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">lollipop</h5>\n                    <h6 class=\"card-subtitle\">\n                        <span *ngIf=\"formonthoranual == true\" class=\"dark\">$ {{this.lolipopprice}}  <span class=\"ligth\">per month</span></span>\n                        <span *ngIf=\"formonthoranual == false\" class=\"dark\"> $ {{this.lolipopprice/2}}  <span class=\"ligth\">per year</span></span> \n                    </h6>\n                    <p class=\"card-text\">for {{service}} serving</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-3\" >\n            <div class=\"card\" (click)=\"ShowSavedicecandy(this.IcecandyPrice)\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">Icecandy</h5>\n                    <h6 class=\"card-subtitle\">\n                        <span *ngIf=\"formonthoranual == true\" class=\"dark\">$ {{this.IcecandyPrice}}  <span class=\"ligth\">per month</span></span>\n                        <span *ngIf=\"formonthoranual == false\" class=\"dark\">$ {{this.IcecandyPrice/2}} <span class=\"ligth\">per year</span></span>\n                     </h6>\n                    <p class=\"card-text\">for {{service}} serving</p>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-3\"  *ngIf=\"Islolipup\">\n            <div class=\"card\" >\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"></h5>\n                    <h6 class=\"card-subtitle\">\n                        <span class=\"dark\">your saving with lalipop</span><br/>\n                        <span class=\"color dark\">$ {{clickedlolisaving}}</span>\n                    </h6>\n                    <p class=\"card-text\">for {{service}} serving </p>\n\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-md-3\" *ngIf=\"IsIcecream\">\n            <div class=\"card\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\"> </h5>\n                    <h6 class=\"card-subtitle\">\n                        <span class=\"dark\">your saving with icecandy</span> <br>\n                        <span class=\"color dark\">$ {{clickediceisaving}}</span> \n                    \n                    </h6>\n                    <p class=\"card-text\">for {{service}} serving </p>\n\n                </div>\n            </div>\n        </div>\n\n        <br><br><br><br><br>\n\n        <table class=\"col-md-8 table table-bordered\">\n            <tr>\n                <th>lollipop</th>\n                <th>Price(per serving)</th>\n            </tr>\n\n            <tr>\n                <td>Annually</td>\n                <td>0.5$</td>\n            </tr>\n\n            <tr>\n                <td>Monthly</td>\n                <td>1$</td>\n            </tr>\n        </table>\n\n        <table class=\"col-md-8 table table-bordered\">\n            <tr>\n                <th>Icecandy</th>\n                <th>Price(per serving)</th>\n            </tr>\n\n            <tr>\n                <td>Annually</td>\n                <td>1$</td>\n            </tr>\n\n            <tr>\n                <td>Monthly</td>\n                <td>2$</td>\n\n            </tr>\n        </table>\n    </div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'fyle';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _fyle_fyle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fyle/fyle.component */
    "./src/app/fyle/fyle.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _fyle_fyle_component__WEBPACK_IMPORTED_MODULE_6__["FyleComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/fyle/fyle.component.css":
  /*!*****************************************!*\
    !*** ./src/app/fyle/fyle.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppFyleFyleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".margin{\r\n    margin:25px;}\r\n\r\n\r\n/* The switch - the box around the slider */\r\n\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n  }\r\n\r\n\r\n/* Hide default HTML checkbox */\r\n\r\n\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n  }\r\n\r\n\r\n/* The slider */\r\n\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\n\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\n\r\ninput:checked + .slider:before {\r\n    transform: translateX(26px);\r\n  }\r\n\r\n\r\n/* Rounded sliders */\r\n\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n  }\r\n\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n\r\n\r\n.box:hover {\r\n    border-color: blue;\r\n }\r\n\r\n\r\n.text {\r\n  color: blue;\r\n}\r\n\r\n\r\n.dark{\r\n    font-size: 30px;\r\n  }\r\n\r\n\r\n.ligth{\r\n    font-size: 15px;\r\n  }\r\n\r\n\r\n.color{\r\n    color: blue;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnlsZS9meWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXLENBQUM7OztBQUdoQiwyQ0FBMkM7OztBQUMzQztJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7RUFDZDs7O0FBRUEsK0JBQStCOzs7QUFDL0I7SUFDRSxVQUFVO0lBQ1YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7O0FBRUEsZUFBZTs7O0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFFdkIsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOzs7QUFFQTtJQUdFLDJCQUEyQjtFQUM3Qjs7O0FBRUEsb0JBQW9COzs7QUFDcEI7SUFDRSxtQkFBbUI7RUFDckI7OztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOzs7QUFDQTtJQUNFLGtCQUFrQjtDQUNyQjs7O0FBRUE7RUFDQyxXQUFXO0FBQ2I7OztBQUNFO0lBQ0UsZUFBZTtFQUNqQjs7O0FBRUE7SUFDRSxlQUFlO0VBQ2pCOzs7QUFDQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2Z5bGUvZnlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbntcclxuICAgIG1hcmdpbjoyNXB4O31cclxuXHJcblxyXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xyXG4uc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIaWRlIGRlZmF1bHQgSFRNTCBjaGVja2JveCAqL1xyXG4gIC5zd2l0Y2ggaW5wdXQge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgc2xpZGVyICovXHJcbiAgLnNsaWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgICB0cmFuc2l0aW9uOiAuNHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICB3aWR0aDogMjZweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICAgIHRyYW5zaXRpb246IC40cztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggIzIxOTZGMztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcclxuICB9XHJcbiAgXHJcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXHJcbiAgLnNsaWRlci5yb3VuZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNHB4O1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIC5ib3g6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gfVxyXG5cclxuIC50ZXh0IHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4gIC5kYXJre1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmxpZ3Roe1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAuY29sb3J7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/fyle/fyle.component.ts":
  /*!****************************************!*\
    !*** ./src/app/fyle/fyle.component.ts ***!
    \****************************************/

  /*! exports provided: FyleComponent */

  /***/
  function srcAppFyleFyleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FyleComponent", function () {
      return FyleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FyleComponent =
    /*#__PURE__*/
    function () {
      function FyleComponent() {
        _classCallCheck(this, FyleComponent);

        this.Serving = [25, 50, 100, 200];
        this.amt = 1;
        this.dis = 0;
        this.formonthoranual = false;
        this.Islolipup = false; // hide saving toggle button

        this.IsIcecream = false;
        this.togglebutton = false; // hide toggle button 

        this.hidecard = false;
      }

      _createClass(FyleComponent, [{
        key: "ServeClick",
        value: function ServeClick(ClickedAmount) {
          this.togglebutton = true; // hide toggle button 

          this.hidecard = true;
          this.service = ClickedAmount; // service store in card title

          this.saving = this.amt * this.dis / 100;
          this.lolipopprice = (this.amt - this.saving) * ClickedAmount;
          this.saving = this.amt * this.dis / 100;
          this.IcecandyPrice = (this.amt - this.saving) * ClickedAmount * 2;
          console.log(this.lolipopprice);
          console.log(this.IcecandyPrice);
        }
      }, {
        key: "ShowSavedlollipop",
        value: function ShowSavedlollipop(clickedloliprice) {
          // hide saving toggle button
          this.Islolipup = true;
          this.IsIcecream = false;

          if (this.formonthoranual == true) {
            this.clickedlolisaving = clickedloliprice;
          } else {
            this.clickedlolisaving = clickedloliprice / 2;
          }
        }
      }, {
        key: "ShowSavedicecandy",
        value: function ShowSavedicecandy(clickediceprice) {
          // hide saving toggle button
          this.IsIcecream = true;
          this.Islolipup = false;

          if (this.formonthoranual == true) {
            this.clickedicesaving = clickediceprice;
          } else {
            this.clickedicesaving = clickediceprice / 2;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FyleComponent;
    }();

    FyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fyle',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fyle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fyle/fyle.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fyle.component.css */
      "./src/app/fyle/fyle.component.css")).default]
    })], FyleComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Dell\Desktop\fyle11\fyle\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map