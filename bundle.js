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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/EnemyBullet.js":
/*!****************************!*\
  !*** ./lib/EnemyBullet.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EnemyBullet; });\n/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.js */ \"./lib/Entity.js\");\n\n\n\nclass EnemyBullet extends _Entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(ctx, spriteSheet, x, y, dx, dy, speed = 5, type = \"normal\"){\n        super(ctx, spriteSheet, x, y, dx, dy);\n        this.speed = speed;\n        this.type = type;\n        this.lifespan = 0;\n        this.graze = false;\n        this.destroyed = false;\n    }\n\n    render() {\n        this.x += this.dx;\n        this.y += this.dy;\n        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {\n            this.destroyed = true;\n        }\n        this.ctx.drawImage(this.spriteSheet, 1111, 463, 20, 20, this.x - 10, this.y - 10, 20, 20);\n    }\n    \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvRW5lbXlCdWxsZXQuanM/ODViMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBaUM7OztBQUdsQiwwQkFBMEIsa0RBQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbGliL0VuZW15QnVsbGV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHkuanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUJ1bGxldCBleHRlbmRzIEVudGl0eXtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHNwcml0ZVNoZWV0LCB4LCB5LCBkeCwgZHksIHNwZWVkID0gNSwgdHlwZSA9IFwibm9ybWFsXCIpe1xuICAgICAgICBzdXBlcihjdHgsIHNwcml0ZVNoZWV0LCB4LCB5LCBkeCwgZHkpO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xuICAgICAgICB0aGlzLmdyYXplID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHk7XG4gICAgICAgIGlmICh0aGlzLnkgPiA3MjAgfHwgdGhpcy55IDwgMCB8fCB0aGlzLnggPCAwIHx8IHRoaXMueCA+IDUzMCkge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZVNoZWV0LCAxMTExLCA0NjMsIDIwLCAyMCwgdGhpcy54IC0gMTAsIHRoaXMueSAtIDEwLCAyMCwgMjApO1xuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/EnemyBullet.js\n");

/***/ }),

/***/ "./lib/Entity.js":
/*!***********************!*\
  !*** ./lib/Entity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Entity; });\nclass Entity{\n    constructor(ctx, spriteSheet, x, y, dx, dy){\n        this.ctx = ctx;\n        this.spriteSheet = spriteSheet;\n        this.x = x;\n        this.y = y;\n        this.dx = dx;\n        this.dy = dy;\n    }\n\n    render(){\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"white\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvRW50aXR5LmpzP2Q4MGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL2xpYi9FbnRpdHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRpdHl7XG4gICAgY29uc3RydWN0b3IoY3R4LCBzcHJpdGVTaGVldCwgeCwgeSwgZHgsIGR5KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBzcHJpdGVTaGVldDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5keCA9IGR4O1xuICAgICAgICB0aGlzLmR5ID0gZHk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy54LCB0aGlzLnksIDEwLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Entity.js\n");

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EnemyBullet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnemyBullet.js */ \"./lib/EnemyBullet.js\");\n\n\nclass Game{\n    constructor(ctx){\n        this.ctx = ctx;\n        this.gameOver = false;\n        this.bullets = [];\n        this.spriteSheet = new Image();\n        this.spriteSheet.src = \"assets/SpriteSheet.png\";\n    }\n\n    fillBullets(){\n        for(let i = 0; i < 10; i++){\n            let dx = (Math.random() * 2) - 1;\n            let dy = (Math.random() * 2) - 1;\n            const bullet = new _EnemyBullet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.ctx, this.spriteSheet, 300, 300, dx, dy);\n            this.bullets.push(bullet);\n        }\n    }\n\n    start(){\n        setInterval(() => {this.render();}, 16);\n    }\n\n    render(){\n            if(this.bullets.length === 0){\n                this.fillBullets();\n            }\n            this.ctx.beginPath();\n            this.ctx.rect(20, 20, 500, 680);\n            this.ctx.fillStyle = \"black\";\n            this.ctx.fill();\n            this.ctx.closePath();\n            for(let i = 0; i < this.bullets.length; i++){\n                let bullet = this.bullets[i];\n                if (bullet.destroyed === true) {\n                    debugger\n                    this.bullets.splice(i, 1);\n                    i--;\n                    debugger\n                } \n                bullet.render();\n            }\n            // debugger\n            this.ctx.drawImage(this.spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);\n            this.ctx.drawImage(this.spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcz9iNmUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0EsK0JBQStCLHVEQUFXO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSIsImZpbGUiOiIuL2xpYi9HYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZW15QnVsbGV0IGZyb20gXCIuL0VuZW15QnVsbGV0LmpzXCI7XG5cbmNsYXNzIEdhbWV7XG4gICAgY29uc3RydWN0b3IoY3R4KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWxsZXRzID0gW107XG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5zcHJpdGVTaGVldC5zcmMgPSBcImFzc2V0cy9TcHJpdGVTaGVldC5wbmdcIjtcbiAgICB9XG5cbiAgICBmaWxsQnVsbGV0cygpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZHggPSAoTWF0aC5yYW5kb20oKSAqIDIpIC0gMTtcbiAgICAgICAgICAgIGxldCBkeSA9IChNYXRoLnJhbmRvbSgpICogMikgLSAxO1xuICAgICAgICAgICAgY29uc3QgYnVsbGV0ID0gbmV3IEVuZW15QnVsbGV0KHRoaXMuY3R4LCB0aGlzLnNwcml0ZVNoZWV0LCAzMDAsIDMwMCwgZHgsIGR5KTtcbiAgICAgICAgICAgIHRoaXMuYnVsbGV0cy5wdXNoKGJ1bGxldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydCgpe1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7dGhpcy5yZW5kZXIoKTt9LCAxNik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgICAgICBpZih0aGlzLmJ1bGxldHMubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGxCdWxsZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoMjAsIDIwLCA1MDAsIDY4MCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJ1bGxldHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGJ1bGxldC5kZXN0cm95ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxsZXRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgYnVsbGV0LnJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZVNoZWV0LCA3LCAzLCA1NDAsIDcyMCwgMCwgMCwgNTQwLCA3MjApO1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlU2hlZXQsIDU1OCwgNSwgNDIwLCA3MjAsIDU0MCwgMCwgNDIwLCA3MjApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/Game.js\n");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./lib/Game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    let canvas = document.getElementById(\"board\");\n    let ctx = canvas.getContext(\"2d\");\n\n    let game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx);\n    game.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFpbi5qcz81MDRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQSxDQUFDIiwiZmlsZSI6Ii4vbGliL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZFwiKTtcbiAgICBsZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbiAgICBnYW1lLnN0YXJ0KCk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/main.js\n");

/***/ })

/******/ });