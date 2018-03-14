/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ({

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_process_src_params__ = __webpack_require__(134);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



//IE polyfill
__webpack_require__(135);
var weakMap = new WeakMap();

var generateUniversityWidget = function generateUniversityWidget() {
    var USNGE_widget = function () {
        function USNGE_widget() {
            _classCallCheck(this, USNGE_widget);

            //array in which the names of the widgets are verified
            this.availableWidgets = ['university-banner.js'];

            //processedParameters imported from "process-src-params.js"
            this.sourceParameters = Object(__WEBPACK_IMPORTED_MODULE_0__components_process_src_params__["a" /* default */])();

            //polyfill for IE and EDGE for the 'Array.prototype.includes' method
            if (!Array.prototype.includes) {
                Object.defineProperty(Array.prototype, "includes", {
                    enumerable: false,
                    value: function value(obj) {
                        var newArr = this.filter(function (el) {
                            return el == obj;
                        });
                        return newArr.length > 0;
                    }
                });
            }

            if (this.availableWidgets.includes(this.sourceParameters[0] + '.js')) {
                this.createAsyncCallScript(this.sourceParameters[0], this.sourceParameters[1]);
            }
        }

        //create the script that will in turn create the specified widget based on the given name


        _createClass(USNGE_widget, [{
            key: 'createAsyncCallScript',
            value: function createAsyncCallScript(widget, count) {

                var currentScript = document.getElementById('usnge-main-widget-script');
                var currentScriptSrc = currentScript.getAttribute('src');
                var modifiedSource = currentScriptSrc.split('widgets.js');
                var contentScript = document.createElement('script');
                var documentHead = document.getElementsByName('body');
                currentScript.insertAdjacentElement('afterend', contentScript);
                contentScript.setAttribute('async', 'true');
                contentScript.setAttribute('src', '' + modifiedSource[0] + widget + '.js');
                contentScript.setAttribute('widget-name', widget);
                contentScript.setAttribute('count', count);
                contentScript.setAttribute('id', 'usnge-markup-call-script');
            }
        }]);

        return USNGE_widget;
    }();

    // instantiate our class


    var newWidget = new USNGE_widget();
};

//call the main function
generateUniversityWidget();

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var processedParameters = function processedParameters() {

    //IE conditions
    var currentScript = document.getElementById('usnge-main-widget-script');
    //  if (document._currentScript) {
    //     currentScript = document._currentScript;
    // } else {
    //     currentScript = document.currentScript;
    // }
    //declare variables
    var currentScriptSrc = currentScript.getAttribute('src'),
        sourceParameters = void 0,
        allSourceParameters = [],
        emptyArray = [];

    //first text split by the "?" sign
    sourceParameters = currentScriptSrc.split('?').slice(1);
    sourceParameters = sourceParameters.map(function (element) {
        //second text spliy by the '=' sign
        return allSourceParameters.push(element.split('=').slice(1));
    });
    //concatenate all the parameter values into a single array
    allSourceParameters = Array.prototype.concat.apply(emptyArray, allSourceParameters);

    //make the array with the parameter values available to the constructor function
    return allSourceParameters;
};

/* harmony default export */ __webpack_exports__["a"] = (processedParameters);

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */

(function(self) {
  'use strict';

  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var defineProperty = function(object, name, value) {
    if (Object.defineProperty) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = (function() {

    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap'));

      // ECMA-262 23.3.1.1 WeakMap([iterable])
      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    }

    // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
    defineProperty(WeakMap.prototype, 'delete', function(key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    });

    // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
    defineProperty(WeakMap.prototype, 'get', function(key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    });

    // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
    defineProperty(WeakMap.prototype, 'has', function(key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    });

    // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
    defineProperty(WeakMap.prototype, 'set', function(key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];
      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });


    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(
          methodName + ' method called on incompatible receiver ' +
          typeof x
        );
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }


    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  })();


  function isObject(x) {
    return Object(x) === x;
  }

})(
  typeof self !== 'undefined' ? self :
  typeof window !== 'undefined' ? window :
  typeof global !== 'undefined' ? global : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(43)))

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });