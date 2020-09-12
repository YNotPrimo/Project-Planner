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
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (class {\n\tconstructor(hostElementId, insertBefore = false) {\n\t\tif (hostElementId) {\n\t\t\tthis.hostElement = document.getElementById(hostElementId);\n\t\t} else {\n\t\t\tthis.hostElement = document.body;\n\t\t}\n\t\tthis.insertBefore = insertBefore;\n\t}\n\n\tdetach() {\n\t\tif (this.element) {\n\t\t\tthis.element.parentElement.removeChild(this.element);\n\t\t}\n\t}\n\n\tattach() {\n\t\tthis.hostElement.insertAdjacentElement(\n\t\t\tthis.insertBefore ? \"afterbegin\" : \"beforeend\",\n\t\t\tthis.element\n\t\t);\n\t}\n});\n\n//# sourceURL=webpack:///./src/App/Component.js?");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/*! exports provided: ProjectItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectItem\", function() { return ProjectItem; });\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tooltip */ \"./src/App/Tooltip.js\");\n\n\n\nclass ProjectItem {\n\t// hasActiveTooltip = false;\n\n\tconstructor(id, updateProjectListsFunction, type) {\n\t\tthis.id = id;\n\t\tthis.hasActiveTooltip = false;\n\t\tthis.updateProjectListsHandler = updateProjectListsFunction;\n\n\t\tthis.connectSwitchButton(type);\n\t\tthis.connectMoreInfoButton();\n\t\tthis.connectDrag();\n\t}\n\n\tshowMoreInfoHandler() {\n\t\tif (this.hasActiveTooltip) {\n\t\t\treturn;\n\t\t}\n\t\tconst projectElement = document.getElementById(this.id);\n\t\tconst tooltipText = projectElement.dataset.extraInfo;\n\n\t\tconst tooltip = new _Tooltip__WEBPACK_IMPORTED_MODULE_1__[\"Tooltip\"](\n\t\t\t() => {\n\t\t\t\tthis.hasActiveTooltip = false;\n\t\t\t},\n\t\t\ttooltipText,\n\t\t\tthis.id\n\t\t);\n\n\t\ttooltip.attach();\n\t\tthis.hasActiveTooltip = true;\n\t}\n\n\tconnectDrag() {\n\t\tdocument.getElementById(this.id).addEventListener(\"dragstart\", event => {\n\t\t\tevent.dataTransfer.setData(\"text/plain\", this.id);\n\t\t\tevent.dataTransfer.effectAllowed = \"move\";\n\t\t});\n\t}\n\n\tconnectMoreInfoButton() {\n\t\tconst projectItemElement = document.getElementById(this.id);\n\t\tconst moreInfoBtn = projectItemElement.querySelector(\n\t\t\t\"button:first-of-type\"\n\t\t);\n\n\t\tmoreInfoBtn.addEventListener(\"click\", this.showMoreInfoHandler.bind(this));\n\t}\n\n\tconnectSwitchButton(type) {\n\t\tconst projectItemElement = document.getElementById(this.id);\n\t\tlet switchBtn = projectItemElement.querySelector(\"button:last-of-type\");\n\t\tswitchBtn = _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_0__[\"DOMHelper\"].clearEventListeners(switchBtn);\n\t\tswitchBtn.textContent = type === \"active\" ? \"Finish\" : \"Activate\";\n\t\tswitchBtn.addEventListener(\n\t\t\t\"click\",\n\t\t\tthis.updateProjectListsHandler.bind(null, this.id)\n\t\t);\n\t}\n\n\tupdate(updateProjectListsFn, type) {\n\t\tthis.updateProjectListsHandler = updateProjectListsFn;\n\t\tthis.connectSwitchButton(type);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/App/ProjectItem.js?");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/*! exports provided: ProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectList\", function() { return ProjectList; });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\n\n\nclass ProjectList {\n\t// projects = [];\n\n\tconstructor(type) {\n\t\tthis.type = type;\n\t\tthis.projects = [];\n\t\tconst prjItems = document.querySelectorAll(`#${type}-projects li`);\n\t\tfor (const prjItem of prjItems) {\n\t\t\tthis.projects.push(\n\t\t\t\tnew _ProjectItem__WEBPACK_IMPORTED_MODULE_0__[\"ProjectItem\"](prjItem.id, this.moveProject.bind(this), this.type)\n\t\t\t);\n\t\t}\n\t\tthis.connectDroppable();\n\t}\n\n\tconnectDroppable() {\n\t\tconst list = document.querySelector(`#${this.type}-projects ul`);\n\n\t\tlist.addEventListener(\"dragenter\", event => {\n\t\t\tif (event.dataTransfer.types[0] === \"text/plain\") {\n\t\t\t\tlist.parentElement.classList.add(\"droppable\");\n\t\t\t\tevent.preventDefault();\n\t\t\t}\n\t\t});\n\n\t\tlist.addEventListener(\"dragover\", event => {\n\t\t\tif (event.dataTransfer.types[0] === \"text/plain\") {\n\t\t\t\tevent.preventDefault();\n\t\t\t}\n\t\t});\n\n\t\tlist.addEventListener(\"dragleave\", event => {\n\t\t\tif (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n\t\t\t\tlist.parentElement.classList.remove(\"droppable\");\n\t\t\t}\n\t\t});\n\n\t\tlist.addEventListener(\"drop\", event => {\n\t\t\tconst prjId = event.dataTransfer.getData(\"text/plain\");\n\n\t\t\tif (this.projects.find(p => p.id === prjId)) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tdocument\n\t\t\t\t.getElementById(prjId)\n\t\t\t\t.querySelector(\"button:last-of-type\")\n\t\t\t\t.click();\n\t\t\tlist.parentElement.classList.remove(\"droppable\");\n\t\t\tevent.preventDefault(); // * not required\n\t\t});\n\t}\n\n\tsetMoveHandler(moveHandlerFunction) {\n\t\tthis.moveHandler = moveHandlerFunction;\n\t}\n\n\taddProject(project) {\n\t\tthis.projects.push(project);\n\t\tObject(_Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__[\"moveElement\"])(project.id, `#${this.type}-projects ul`);\n\t\tproject.update(this.moveProject.bind(this), this.type);\n\t}\n\n\tmoveProject(projectId) {\n\t\tthis.moveHandler(this.projects.find(p => p.id === projectId));\n\t\tthis.projects = this.projects.filter(p => p.id !== projectId);\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/App/ProjectList.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/*! exports provided: Tooltip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tooltip\", function() { return Tooltip; });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/App/Component.js\");\n\n\nclass Tooltip extends _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n\tconstructor(closeNotifierFunction, text, hostElementId) {\n\t\tsuper(hostElementId);\n\t\tthis.closeNotifier = closeNotifierFunction;\n\t\tthis.text = text;\n\t\tthis.create();\n\t}\n\n\tcloseTooltip() {\n\t\tthis.detach();\n\t\tthis.closeNotifier();\n\t}\n\n\tcreate() {\n\t\tconst tooltipElement = document.createElement(\"div\");\n\n\t\ttooltipElement.className = \"card\";\n\n\t\tconst tooltipTemplate = document.getElementById(\"tooltip\");\n\t\tconst tooltipBody = document.importNode(tooltipTemplate.content, true);\n\t\ttooltipBody.querySelector(\"p\").textContent = this.text;\n\t\ttooltipElement.appendChild(tooltipBody);\n\n\t\tconst hostElPosLeft = this.hostElement.offsetLeft;\n\t\tconst hostElPosTop = this.hostElement.offsetTop;\n\t\tconst hostElHeight = this.hostElement.clientHeight;\n\t\tconst parentElementScrolling = this.hostElement.parentElement.scrollTop;\n\n\t\tconst x = hostElPosLeft + 20;\n\t\tconst y = hostElPosTop + hostElHeight - parentElementScrolling - 10;\n\n\t\ttooltipElement.style.position = \"absolute\";\n\t\ttooltipElement.style.left = x + \"px\";\n\t\ttooltipElement.style.top = y + \"px\";\n\n\t\ttooltipElement.addEventListener(\"click\", this.closeTooltip);\n\n\t\tthis.element = tooltipElement;\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/App/Tooltip.js?");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/*! exports provided: DOMHelper, clearEventListeners, moveElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOMHelper\", function() { return DOMHelper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearEventListeners\", function() { return clearEventListeners; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveElement\", function() { return moveElement; });\nclass DOMHelper {\n\tstatic clearEventListeners(element) {\n\t\tconst clonedElement = element.cloneNode(true);\n\t\telement.replaceWith(clonedElement);\n\t\treturn clonedElement;\n\t}\n\n\tstatic moveElement(elementId, newDestinationSelector) {\n\t\tconst element = document.getElementById(elementId);\n\t\tconst destinationElement = document.querySelector(newDestinationSelector);\n\t\tdestinationElement.append(element);\n\t\telement.scrollIntoView({ behavior: \"smooth\" });\n\t}\n}\n\nfunction clearEventListeners(element) {\n\tconst clonedElement = element.cloneNode(true);\n\telement.replaceWith(clonedElement);\n\treturn clonedElement;\n}\n\nfunction moveElement(elementId, newDestinationSelector) {\n\tconst element = document.getElementById(elementId);\n\tconst destinationElement = document.querySelector(newDestinationSelector);\n\tdestinationElement.append(element);\n\telement.scrollIntoView({ behavior: \"smooth\" });\n}\n\n//# sourceURL=webpack:///./src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList.js */ \"./src/App/ProjectList.js\");\n\n\nclass App {\n\tstatic init() {\n\t\tconst activeProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"](\"active\");\n\t\tconst finishedProjectsList = new _App_ProjectList_js__WEBPACK_IMPORTED_MODULE_0__[\"ProjectList\"](\"finished\");\n\n\t\tactiveProjectsList.setMoveHandler(\n\t\t\tfinishedProjectsList.addProject.bind(finishedProjectsList)\n\t\t);\n\n\t\tfinishedProjectsList.setMoveHandler(\n\t\t\tactiveProjectsList.addProject.bind(activeProjectsList)\n\t\t);\n\n\t\tconst timerId = setTimeout(this.startAnalytics, 3000);\n\n\t\tdocument\n\t\t\t.getElementById(\"stop-analytics-btn\")\n\t\t\t.addEventListener(\"click\", () => {\n\t\t\t\tclearTimeout(timerId);\n\t\t\t});\n\t}\n\n\tstatic startAnalytics() {\n\t\tconst analyticsScript = document.createElement(\"script\");\n\t\tanalyticsScript.src = \"assets/scripts/Utility/Analytics.js\";\n\t\tanalyticsScript.defer = true;\n\t\tdocument.head.append(analyticsScript);\n\t}\n}\n\nApp.init();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });