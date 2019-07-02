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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EnemyBullet; });\n/* harmony import */ var _Entity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.js */ \"./lib/Entity.js\");\n\n\n\nclass EnemyBullet extends _Entity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(x, y, dx, dy, speed = 5, type = \"normal\"){\n        super(x, y, dx, dy);\n        this.speed = speed;\n        this.type = type;\n        this.lifespan = 0;\n        this.graze = false;\n        this.destroyed = false;\n    }\n\n    render(ctx, spriteSheet) {\n        this.x += this.dx;\n        this.y += this.dy;\n        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {\n            this.destroyed = true;\n        }\n        ctx.drawImage(spriteSheet, 1111, 463, 20, 20, this.x - 10, this.y - 10, 20, 20);\n    }\n    \n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvRW5lbXlCdWxsZXQuanM/ODViMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBaUM7OztBQUdsQiwwQkFBMEIsa0RBQU07QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbGliL0VuZW15QnVsbGV0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHkuanNcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteUJ1bGxldCBleHRlbmRzIEVudGl0eXtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBkeCwgZHksIHNwZWVkID0gNSwgdHlwZSA9IFwibm9ybWFsXCIpe1xuICAgICAgICBzdXBlcih4LCB5LCBkeCwgZHkpO1xuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xuICAgICAgICB0aGlzLmdyYXplID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgc3ByaXRlU2hlZXQpIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHg7XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgICAgICBpZiAodGhpcy55ID4gNzIwIHx8IHRoaXMueSA8IDAgfHwgdGhpcy54IDwgMCB8fCB0aGlzLnggPiA1MzApIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZHJhd0ltYWdlKHNwcml0ZVNoZWV0LCAxMTExLCA0NjMsIDIwLCAyMCwgdGhpcy54IC0gMTAsIHRoaXMueSAtIDEwLCAyMCwgMjApO1xuICAgIH1cbiAgICBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/EnemyBullet.js\n");

/***/ }),

/***/ "./lib/Entity.js":
/*!***********************!*\
  !*** ./lib/Entity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Entity; });\nclass Entity{\n    constructor(x, y, dx, dy){\n        this.x = x;\n        this.y = y;\n        this.dx = dx;\n        this.dy = dy;\n    }\n\n    render(){\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"white\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvRW50aXR5LmpzP2Q4MGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vbGliL0VudGl0eS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudGl0eXtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBkeCwgZHkpe1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmR4ID0gZHg7XG4gICAgICAgIHRoaXMuZHkgPSBkeTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Entity.js\n");

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EnemyBullet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnemyBullet.js */ \"./lib/EnemyBullet.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player.js */ \"./lib/Player.js\");\n\n\n\nclass Game{\n    constructor(ctx, inputs){\n        this.ctx = ctx;\n        this.gameOver = false;\n        this.particles = [];\n        this.playerBullets = [];\n        this.enemyBullets = [];\n        this.spriteSheet = new Image();\n        this.spriteSheet.src = \"assets/SpriteSheet.png\";\n        this.player = new _Player_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](0, 0);\n        this.inputs = inputs;\n    }\n\n    fillBullets(){\n        for(let i = 0; i < 10; i++){\n            let dx = (Math.random() * 2) - 1;\n            let dy = (Math.random() * 2) - 1;\n            const bullet = new _EnemyBullet_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](300, 300, dx, dy);\n            this.enemyBullets.push(bullet);\n        }\n    }\n\n    start(){\n        this.player.spawn();\n        // setInterval(() => {this.render();}, 16);\n        window.requestAnimationFrame(this.render.bind(this));\n    }\n\n    render(){\n            if(this.enemyBullets.length === 0){\n                this.fillBullets();\n            }\n\n            //background\n            this.ctx.beginPath();\n            this.ctx.rect(20, 20, 500, 680);\n            this.ctx.fillStyle = \"black\";\n            this.ctx.fill();\n            this.ctx.closePath();\n\n\n            //player\n            this.player.render(this.ctx, this.spriteSheet, this.inputs, this.particles);\n\n            //player bullets\n            for(let i = 0; i < this.playerBullets.length; i++){\n                const bullet = this.playerBullets[i];\n                if(bullet.destroyed === true){\n                    this.playerBullets.splice(i,1);\n                    i--;\n                }\n                bullet.render(this.ctx, this.spriteSheet);\n            }\n\n\n            //enemy bullets\n            for(let i = 0; i < this.enemyBullets.length; i++){\n                const bullet = this.enemyBullets[i];\n                if (bullet.destroyed === true) {\n                    this.enemyBullets.splice(i, 1);\n                    i--;\n                } \n                bullet.render(this.ctx, this.spriteSheet);\n            }\n\n            //particles\n            for(let i = 0; i < this.particles.length; i++){\n                const particle = this.particles[i];\n                particle.x += particle.dx;\n                particle.y += particle.dy;\n                particle.lifespan--;\n                if(particle.lifespan === 0){\n                    this.particles.splice(i, 1);\n                    i--;\n                }\n                particle.render(this.ctx);\n            }\n            this.ctx.drawImage(this.spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);\n            this.ctx.drawImage(this.spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);\n            window.requestAnimationFrame(this.render.bind(this));\n        }\n\n    \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcz9iNmUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNWOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsa0RBQU07QUFDaEM7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQSwrQkFBK0IsdURBQVc7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwrQkFBK0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMEJBQTBCLDhCQUE4QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyQkFBMkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRWUsbUVBQUkiLCJmaWxlIjoiLi9saWIvR2FtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmVteUJ1bGxldCBmcm9tIFwiLi9FbmVteUJ1bGxldC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXIuanNcIjtcblxuY2xhc3MgR2FtZXtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGlucHV0cyl7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFydGljbGVzID0gW107XG4gICAgICAgIHRoaXMucGxheWVyQnVsbGV0cyA9IFtdO1xuICAgICAgICB0aGlzLmVuZW15QnVsbGV0cyA9IFtdO1xuICAgICAgICB0aGlzLnNwcml0ZVNoZWV0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuc3ByaXRlU2hlZXQuc3JjID0gXCJhc3NldHMvU3ByaXRlU2hlZXQucG5nXCI7XG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigwLCAwKTtcbiAgICAgICAgdGhpcy5pbnB1dHMgPSBpbnB1dHM7XG4gICAgfVxuXG4gICAgZmlsbEJ1bGxldHMoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspe1xuICAgICAgICAgICAgbGV0IGR4ID0gKE1hdGgucmFuZG9tKCkgKiAyKSAtIDE7XG4gICAgICAgICAgICBsZXQgZHkgPSAoTWF0aC5yYW5kb20oKSAqIDIpIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGJ1bGxldCA9IG5ldyBFbmVteUJ1bGxldCgzMDAsIDMwMCwgZHgsIGR5KTtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCdWxsZXRzLnB1c2goYnVsbGV0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0KCl7XG4gICAgICAgIHRoaXMucGxheWVyLnNwYXduKCk7XG4gICAgICAgIC8vIHNldEludGVydmFsKCgpID0+IHt0aGlzLnJlbmRlcigpO30sIDE2KTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlci5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5lbXlCdWxsZXRzLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxsQnVsbGV0cygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgdGhpcy5jdHgucmVjdCgyMCwgMjAsIDUwMCwgNjgwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuXG5cbiAgICAgICAgICAgIC8vcGxheWVyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5yZW5kZXIodGhpcy5jdHgsIHRoaXMuc3ByaXRlU2hlZXQsIHRoaXMuaW5wdXRzLCB0aGlzLnBhcnRpY2xlcyk7XG5cbiAgICAgICAgICAgIC8vcGxheWVyIGJ1bGxldHNcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBsYXllckJ1bGxldHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGJ1bGxldCA9IHRoaXMucGxheWVyQnVsbGV0c1tpXTtcbiAgICAgICAgICAgICAgICBpZihidWxsZXQuZGVzdHJveWVkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJCdWxsZXRzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1bGxldC5yZW5kZXIodGhpcy5jdHgsIHRoaXMuc3ByaXRlU2hlZXQpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vZW5lbXkgYnVsbGV0c1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbXlCdWxsZXRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBidWxsZXQgPSB0aGlzLmVuZW15QnVsbGV0c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoYnVsbGV0LmRlc3Ryb3llZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15QnVsbGV0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGJ1bGxldC5yZW5kZXIodGhpcy5jdHgsIHRoaXMuc3ByaXRlU2hlZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3BhcnRpY2xlc1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUuZHg7XG4gICAgICAgICAgICAgICAgcGFydGljbGUueSArPSBwYXJ0aWNsZS5keTtcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5saWZlc3Bhbi0tO1xuICAgICAgICAgICAgICAgIGlmKHBhcnRpY2xlLmxpZmVzcGFuID09PSAwKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhcnRpY2xlLnJlbmRlcih0aGlzLmN0eCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGVTaGVldCwgNywgMywgNTQwLCA3MjAsIDAsIDAsIDU0MCwgNzIwKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZSh0aGlzLnNwcml0ZVNoZWV0LCA1NTgsIDUsIDQyMCwgNzIwLCA1NDAsIDAsIDQyMCwgNzIwKTtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXIuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Game.js\n");

/***/ }),

/***/ "./lib/Particle.js":
/*!*************************!*\
  !*** ./lib/Particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Particle; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./lib/Entity.js\");\n\n\nclass Particle extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(x,y,dx,dy, lifespan = 32, color = \"blue\"){\n        super(x,y,dx,dy);\n        this.lifespan = lifespan;\n        this.color = color;\n    }\n\n    render(ctx){\n        // debugger\n        let color;\n        let size;\n        if (this.color === \"blue\") {\n            if (this.lifespan < 8) {\n                color = \"#234196\";\n                size = 1;\n            } else if (this.lifespan < 16) {\n                color = \"#4eaaf5\";\n                size = 2;\n            } else if (this.lifespan < 24) {\n                color = \"#a8ffff\";\n\n                size = 3;\n            } else if (this.lifespan < 32) {\n                color = \"#ffffff\";\n                size = 4;\n            }\n        } else if (this.color === \"green\") {\n            if (this.lifespan < 12) {\n                color = \"#3c754c\";\n                size = 1;\n            } else if (this.lifespan < 24) {\n                color = \"#3d915e\";\n                size = 2;\n            } else if (this.lifespan < 36) {\n                color = \"#cfffd8\";\n\n                size = 3;\n            } else if (this.lifespan < 48) {\n                color = \"#befac8\";\n                size = 4;\n            }\n        } else if (this.color === \"smoke\") {\n            if (this.lifespan < 12) {\n                color = \"#42182e\";\n                size = 1;\n            } else if (this.lifespan < 24) {\n                color = \"#592c39\";\n                size = 2;\n            } else if (this.lifespan < 36) {\n                color = \"#a1554c\";\n\n                size = 3;\n            } else if (this.lifespan < 48) {\n                color = \"#ed9f45\";\n                size = 4;\n            }\n        }\n        ctx.beginPath();\n        // ctx.globalAlpha = 0.5;\n        ctx.rect(this.x, this.y, size, size);\n        ctx.fillStyle = color;\n        ctx.fill();\n        ctx.closePath();\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvUGFydGljbGUuanM/NGE0YiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBOEI7O0FBRWYsdUJBQXVCLCtDQUFNO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIuL2xpYi9QYXJ0aWNsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcnRpY2xlIGV4dGVuZHMgRW50aXR5e1xuICAgIGNvbnN0cnVjdG9yKHgseSxkeCxkeSwgbGlmZXNwYW4gPSAzMiwgY29sb3IgPSBcImJsdWVcIil7XG4gICAgICAgIHN1cGVyKHgseSxkeCxkeSk7XG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSBsaWZlc3BhbjtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIH1cblxuICAgIHJlbmRlcihjdHgpe1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBsZXQgY29sb3I7XG4gICAgICAgIGxldCBzaXplO1xuICAgICAgICBpZiAodGhpcy5jb2xvciA9PT0gXCJibHVlXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDwgOCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjMjM0MTk2XCI7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlmZXNwYW4gPCAxNikge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjNGVhYWY1XCI7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlmZXNwYW4gPCAyNCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjYThmZmZmXCI7XG5cbiAgICAgICAgICAgICAgICBzaXplID0gMztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5saWZlc3BhbiA8IDMyKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgICAgICAgICBzaXplID0gNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbG9yID09PSBcImdyZWVuXCIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDwgMTIpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiIzNjNzU0Y1wiO1xuICAgICAgICAgICAgICAgIHNpemUgPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpZmVzcGFuIDwgMjQpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiIzNkOTE1ZVwiO1xuICAgICAgICAgICAgICAgIHNpemUgPSAyO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpZmVzcGFuIDwgMzYpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiI2NmZmZkOFwiO1xuXG4gICAgICAgICAgICAgICAgc2l6ZSA9IDM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGlmZXNwYW4gPCA0OCkge1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjYmVmYWM4XCI7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb2xvciA9PT0gXCJzbW9rZVwiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5saWZlc3BhbiA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM0MjE4MmVcIjtcbiAgICAgICAgICAgICAgICBzaXplID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5saWZlc3BhbiA8IDI0KSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM1OTJjMzlcIjtcbiAgICAgICAgICAgICAgICBzaXplID0gMjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5saWZlc3BhbiA8IDM2KSB7XG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNhMTU1NGNcIjtcblxuICAgICAgICAgICAgICAgIHNpemUgPSAzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxpZmVzcGFuIDwgNDgpIHtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiI2VkOWY0NVwiO1xuICAgICAgICAgICAgICAgIHNpemUgPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gY3R4Lmdsb2JhbEFscGhhID0gMC41O1xuICAgICAgICBjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgc2l6ZSwgc2l6ZSk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Particle.js\n");

/***/ }),

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./lib/Entity.js\");\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Particle */ \"./lib/Particle.js\");\n\n\n\nclass Player extends _Entity__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n    constructor(x, y){\n        super(x, y);\n        this.lives = 3;\n        this.invuln = false;\n        this.invulnTimer = 0;\n        this.power = 0;\n        this.controllable = true;\n        this.protectTimer = 0;\n        this.state = 0;\n        this.option = 0;\n        this.weapon = 0;\n    }\n\n    spawn(){\n        this.y = 850;\n        this.x = 270;\n        this.invuln = true;\n        this.controllable = false;\n    }\n\n    boost(particles) {\n        for (let i = 0; i < 10; i++) {\n            particles.push(new _Particle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.x - 2, this.y + 15, (Math.random() * 1.5) - 0.75, Math.random()));\n        }\n    }\n\n    move(inputs, particles){\n        let speed;\n        if(inputs.shift === true){\n            speed = 3;\n        }else{\n            speed = 7;\n        }\n        if (this.controllable === true) {\n            if (inputs.right && this.x < 460) {\n                this.x += speed;\n                this.state = 1;\n            } else if (inputs.left && this.x > 80) {\n                this.x -= speed;\n                this.state = -1;\n            } else {\n                this.state = 0;\n            }\n            if (inputs.down && this.y < 650) {\n                this.y += speed;\n            } else if (inputs.up && this.y > 80) {\n                this.y -= speed;\n                // debugger\n                this.boost(particles);\n            }\n        }\n    }\n\n    shoot(){\n        \n    }\n\n\n\n    draw(ctx, spriteSheet){\n        if (this.invuln === false || this.invulnTimer % 10 >= 5) {\n            if (this.state === 0) {\n                ctx.drawImage(spriteSheet, 1237, 264, 72, 84, this.x - 27, this.y - 42, 54, 63);\n            } else if (this.state === -1) {\n                ctx.drawImage(spriteSheet, 1153, 264, 61, 84, this.x - 22.5, this.y - 42, 45, 63);\n            } else if (this.state === 1) {\n                ctx.drawImage(spriteSheet, 1329, 264, 61, 84, this.x - 22.5, this.y - 42, 45, 63);\n            }\n        }\n    }\n\n    render(ctx, spriteSheet, inputs, particles){\n        if (this.invuln === true && this.controllable === false) {\n            this.invulnTimer++;\n            this.y -= 3;\n            if (this.invulnTimer === 75) {\n                this.invuln = false;\n                this.invulnTimer = 0;\n                this.controllable = true;\n            }\n        }\n        this.move(inputs, particles);\n        this.draw(ctx, spriteSheet);\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvUGxheWVyLmpzP2FlNWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDSTs7QUFFbkIscUJBQXFCLCtDQUFNO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQiwrQkFBK0IsaURBQVE7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbGliL1BsYXllci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XG5pbXBvcnQgUGFydGljbGUgZnJvbSBcIi4vUGFydGljbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRW50aXR5e1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpe1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy5saXZlcyA9IDM7XG4gICAgICAgIHRoaXMuaW52dWxuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW52dWxuVGltZXIgPSAwO1xuICAgICAgICB0aGlzLnBvd2VyID0gMDtcbiAgICAgICAgdGhpcy5jb250cm9sbGFibGUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb3RlY3RUaW1lciA9IDA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSAwO1xuICAgICAgICB0aGlzLm9wdGlvbiA9IDA7XG4gICAgICAgIHRoaXMud2VhcG9uID0gMDtcbiAgICB9XG5cbiAgICBzcGF3bigpe1xuICAgICAgICB0aGlzLnkgPSA4NTA7XG4gICAgICAgIHRoaXMueCA9IDI3MDtcbiAgICAgICAgdGhpcy5pbnZ1bG4gPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbnRyb2xsYWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGJvb3N0KHBhcnRpY2xlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ldyBQYXJ0aWNsZSh0aGlzLnggLSAyLCB0aGlzLnkgKyAxNSwgKE1hdGgucmFuZG9tKCkgKiAxLjUpIC0gMC43NSwgTWF0aC5yYW5kb20oKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZShpbnB1dHMsIHBhcnRpY2xlcyl7XG4gICAgICAgIGxldCBzcGVlZDtcbiAgICAgICAgaWYoaW5wdXRzLnNoaWZ0ID09PSB0cnVlKXtcbiAgICAgICAgICAgIHNwZWVkID0gMztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzcGVlZCA9IDc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29udHJvbGxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRzLnJpZ2h0ICYmIHRoaXMueCA8IDQ2MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSBzcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRzLmxlZnQgJiYgdGhpcy54ID4gODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnB1dHMuZG93biAmJiB0aGlzLnkgPCA2NTApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgKz0gc3BlZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0cy51cCAmJiB0aGlzLnkgPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSAtPSBzcGVlZDtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIHRoaXMuYm9vc3QocGFydGljbGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob290KCl7XG4gICAgICAgIFxuICAgIH1cblxuXG5cbiAgICBkcmF3KGN0eCwgc3ByaXRlU2hlZXQpe1xuICAgICAgICBpZiAodGhpcy5pbnZ1bG4gPT09IGZhbHNlIHx8IHRoaXMuaW52dWxuVGltZXIgJSAxMCA+PSA1KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlU2hlZXQsIDEyMzcsIDI2NCwgNzIsIDg0LCB0aGlzLnggLSAyNywgdGhpcy55IC0gNDIsIDU0LCA2Myk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGVTaGVldCwgMTE1MywgMjY0LCA2MSwgODQsIHRoaXMueCAtIDIyLjUsIHRoaXMueSAtIDQyLCA0NSwgNjMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGVTaGVldCwgMTMyOSwgMjY0LCA2MSwgODQsIHRoaXMueCAtIDIyLjUsIHRoaXMueSAtIDQyLCA0NSwgNjMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGN0eCwgc3ByaXRlU2hlZXQsIGlucHV0cywgcGFydGljbGVzKXtcbiAgICAgICAgaWYgKHRoaXMuaW52dWxuID09PSB0cnVlICYmIHRoaXMuY29udHJvbGxhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5pbnZ1bG5UaW1lcisrO1xuICAgICAgICAgICAgdGhpcy55IC09IDM7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnZ1bG5UaW1lciA9PT0gNzUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmludnVsbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW52dWxuVGltZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbGxhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmUoaW5wdXRzLCBwYXJ0aWNsZXMpO1xuICAgICAgICB0aGlzLmRyYXcoY3R4LCBzcHJpdGVTaGVldCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/Player.js\n");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./lib/Game.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"board\");\n    const ctx = canvas.getContext(\"2d\");\n\n    const game = new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx, inputs);\n    game.start();\n\n    document.addEventListener(\"keydown\", keyHandleDown, false);\n    document.addEventListener(\"keyup\", keyHandleUp, false);\n});\n\nconst inputs = {\n    left: false,\n    right: false,\n    up: false,\n    down: false,\n    shift: false,\n    z: false\n};\n\nfunction keyHandleDown(e) {\n    if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n        event.preventDefault();\n        inputs.right = true;\n    } else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n        event.preventDefault();\n        inputs.left = true;\n    } else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n        event.preventDefault();\n        inputs.up = true;\n    } else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n        event.preventDefault();\n        inputs.down = true;\n    } else if (e.key == \"Shift\") {\n        inputs.shift = true;\n    } else if (e.key == \"z\") {\n        inputs.z = true;\n    }\n}\n\nfunction keyHandleUp(e) {\n    if (e.key == \"Right\" || e.key == \"ArrowRight\") {\n        event.preventDefault();\n        inputs.right = false;\n    } else if (e.key == \"Left\" || e.key == \"ArrowLeft\") {\n        event.preventDefault();\n        inputs.left = false;\n    } else if (e.key == \"Up\" || e.key == \"ArrowUp\") {\n        event.preventDefault();\n        inputs.up = false;\n    } else if (e.key == \"Down\" || e.key == \"ArrowDown\") {\n        event.preventDefault();\n        inputs.down = false;\n    } else if (e.key == \"Shift\") {\n        inputs.shift = false;\n    } else if (e.key == \"z\") {\n        inputs.z = false;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbWFpbi5qcz81MDRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsNkNBQUk7QUFDekI7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbGliL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9HYW1lXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkXCIpO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4LCBpbnB1dHMpO1xuICAgIGdhbWUuc3RhcnQoKTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGtleUhhbmRsZURvd24sIGZhbHNlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwga2V5SGFuZGxlVXAsIGZhbHNlKTtcbn0pO1xuXG5jb25zdCBpbnB1dHMgPSB7XG4gICAgbGVmdDogZmFsc2UsXG4gICAgcmlnaHQ6IGZhbHNlLFxuICAgIHVwOiBmYWxzZSxcbiAgICBkb3duOiBmYWxzZSxcbiAgICBzaGlmdDogZmFsc2UsXG4gICAgejogZmFsc2Vcbn07XG5cbmZ1bmN0aW9uIGtleUhhbmRsZURvd24oZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXRzLnJpZ2h0ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiTGVmdFwiIHx8IGUua2V5ID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXRzLmxlZnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJVcFwiIHx8IGUua2V5ID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0cy51cCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0cy5kb3duID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09IFwiU2hpZnRcIikge1xuICAgICAgICBpbnB1dHMuc2hpZnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT0gXCJ6XCIpIHtcbiAgICAgICAgaW5wdXRzLnogPSB0cnVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24ga2V5SGFuZGxlVXAoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIlJpZ2h0XCIgfHwgZS5rZXkgPT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXRzLnJpZ2h0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkxlZnRcIiB8fCBlLmtleSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0cy5sZWZ0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIlVwXCIgfHwgZS5rZXkgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaW5wdXRzLnVwID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIkRvd25cIiB8fCBlLmtleSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlucHV0cy5kb3duID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcIlNoaWZ0XCIpIHtcbiAgICAgICAgaW5wdXRzLnNoaWZ0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PSBcInpcIikge1xuICAgICAgICBpbnB1dHMueiA9IGZhbHNlO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/main.js\n");

/***/ })

/******/ });