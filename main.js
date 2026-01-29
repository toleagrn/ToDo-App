/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --dust-gray: #dad7cd;\n    --dry-sage: #A3B18A;\n    --fern: #588157;\n    --hunter-green: #3A5A40;\n    --pine-teal: #344E41;\n\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n    background-color: var(--dust-gray);\n}\n\nheader {\n    height: 15vh;\n    background-color: var(--dry-sage);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 20px;\n}\n\n.logo-text {\n    color: var(--pine-teal);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n    font-size: 3.8rem;\n    font-weight: 600;\n}\n\n.btn-section {\n    display:flex;\n    gap: 0px;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    padding-top: 1rem;\n    height: 3.7rem;\n}\n\n.button {\n    width: 16rem;\n    height: 100%;\n    background-color: var(--dry-sage);\n    border: 1px solid var(--pine-teal);\n    font-size: 17px;\n    transition: 0.5s;\n    font-weight: bold;\n}\n\n.button:hover {\n    background-color: var(--fern);\n}\n\n#today-btn {\n    border-right: 0px;\n    border-radius: 15px 0px 0px 15px; \n}\n\n#overdue-btn {\n    border-left: 0px;\n    border-radius: 0px 15px 15px 0px;\n    height: 100%;\n}\n\n.sort-wrapper {\n    height: 100%;\n}\n\n.display-header {\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n\n    display: flex;\n    height: 2.8rem;\n    margin-top: 3rem;\n}\n\n.display-header > h2 {\n    color: var(--pine-teal);\n}\n\n.display {\n    width: 100%;\n}\n\n.btn-new-section {\n    margin-left: auto;\n    display: flex;\n    gap: 1rem;\n    justify-content: right;\n}\n\n.btn-new-section > button {\n    border-radius: 15px;\n}\n\n.task-container {\n    background-color: gainsboro;\n    margin-top: 1rem;\n    max-width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    height: 5.5rem;\n    \n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n    transition: background-color 0.5s ease, color 0.5s ease;\n    transition: transform 0.5s ease;\n    border-radius: 15px;\n    overflow: hidden;\n\n    display: flex;\n    gap: 2rem;\n    padding-left: 2rem;\n    padding-right: 2rem;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.task-container.completed {\n    background-color: #B8C4D1;\n    filter: grayscale(50%);\n}\n\n.task-container.today-task {\n    border: 2px solid var(--pine-teal);\n}\n\n.task-container.overdue-task {\n    border: 2px solid red;\n}\n\n.notes-section {\n    margin-top: 0.5rem;\n    margin-bottom: 2rem;\n    padding: 0.5rem;\n    height: 3rem;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 15px;\n    background-color: gainsboro;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n}\n\n.due-date {\n    display: flex;\n    width: 8rem;\n    justify-content: center;\n    font-size: 0.9rem;\n}\n\n.task-description {\n    font-size: 0.9rem;\n    width: 30%;\n    overflow-x: hidden;\n}\n\n.task-container > h2 {\n    font-size: 1.2rem;\n    width: 15%;\n}\n\n.task-container:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(0,0,0,0.15);\n}\n\n.done-btn {\n    background-color: var(--dry-sage);\n    margin-left: auto;\n    width: 4rem;\n    height: 50%;\n    border-radius: 15px;\n    border: 0px;\n    font-size: 24px;\n    transition: 0.5s;\n    justify-self: right;\n}\n\n.done-btn:hover {\n    background-color: var(--hunter-green);\n}\n\n.delete-task-btn {\n    background-color: #FF746C;\n}\n\n.delete-task-btn:hover {\n    background-color: red;\n}\n\n.btn-wrapper {\n    height: 100%;\n    display: flex;\n    margin-left: auto;\n    gap: 1rem;\n    align-items: center;\n}\n\n.hidden {\n    display: none !important;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1000; \n}\n\n.overlay-content {\n    background-color: var(--dust-gray);\n    padding: 2rem;\n    font-size: 18px;\n    border-radius: 20px;\n}\n\n.overlay-content > h2 {\n    margin: 0;\n    color: var(--pine-teal);\n    padding-bottom: 1rem;\n}\n\n.form-group {\n    padding-bottom: 1rem;\n    display: flex;\n    flex-direction: column;\n    font-size: 14px;\n}\n\n.form-group > label {\n    letter-spacing: 3px;\n    font-size: 0.7rem;\n    font-weight: 600;\n    padding-left: 0.2rem;\n}\n\n.form-group > input, textarea {\n    width: 24rem;\n    line-height: 1.5;\n    font-size: 18px;\n\n    border-radius: 10px;\n    border: 0px;\n    transition: 0.2s;\n}\n\n.form-group > input:focus, textarea:focus {\n    outline: none;\n    background-color: var(--dry-sage);\n    border: 2px solid var(--dry-sage);\n}\n\n.form-btn-section {\n    display: flex;\n}\n\n.form-btn-section > button {\n    width: 10rem;\n    height: 2.5rem;\n    border: 1px solid var(--pine-teal);\n    font-size: 17px;\n    transition: 0.5s;\n    font-weight: bold;\n    border-radius: 15px;\n    transition: 0.5s;\n}\n\n#save-task {\n    background-color: var(--dry-sage);\n}\n\n#save-task:hover {\n    background-color: var(--fern);\n}\n\n#cancel-new-task {\n    margin-left: auto;\n    background-color: #FF746C;\n}\n\n#cancel-new-task:hover {\n    background-color: red;\n}\n\n.completed-heading {\n    color: var(--pine-teal);\n    margin-left: 10%;\n}\n\n.error-message {\n  color: red;\n  font-size: 0.8rem;\n  display: none; \n}\n\n.error-message.visible {\n  display: block; \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-project/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n// Function for validating the date of input\nfunction isDateValid(inputDate) {\n    const selectedDate = new Date(inputDate);\n    const today = new Date();\n\n    today.setHours(0, 0, 0, 0);\n    return selectedDate >= today;\n}\n\n// Storage functions\nfunction getTasksFromStorage() {\n    return JSON.parse(localStorage.getItem(\"tasks\") || \"[]\");\n}\n\nfunction saveTasksToStorage(tasks) {\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nclass Task {\n    constructor(title, description, notes, \n                dueDate, doneStatus, project) {\n        this.title = title;\n        this.description = description;\n        this.notes = notes;\n        this.dueDate = dueDate;\n        this.doneStatus = doneStatus;\n        this.project = project;\n        this.id = Date.now(); // Simple unique ID\n    }\n}\n\nclass ToDoList {\n    constructor(projectName) {\n        this.projectName = projectName;\n        this.tasks = getTasksFromStorage();\n    }\n\n    render() {\n        mainContainer.innerHTML = \"\";\n        completeTaskDisplay.innerHTML = \"\";\n\n        this.tasks.forEach(task => this.renderTask(task));\n    }\n\n    renderTask(task) {\n        const taskContainer = document.createElement(\"div\");\n        taskContainer.dataset.id = task.id;\n        taskContainer.classList.add(\"task-container\");\n\n        const taskTitle = document.createElement(\"h2\");\n        taskTitle.classList.add(\"heading2\");\n        taskTitle.textContent = task.title;\n\n        const taskDescription = document.createElement(\"p\");\n        taskDescription.classList.add(\"task-description\");\n        taskDescription.textContent = task.description;\n\n        const dueDate = document.createElement(\"p\");\n        dueDate.classList.add(\"due-date\");\n        dueDate.textContent = task.dueDate;\n\n        const btnWrapper = document.createElement(\"div\");\n        btnWrapper.classList.add(\"btn-wrapper\");\n\n        const doneBtn = document.createElement(\"button\");\n        doneBtn.classList.add(\"done-btn\");\n        doneBtn.textContent = \"✓\";\n\n        const deleteBtn = document.createElement(\"button\");\n        deleteBtn.classList.add(\"done-btn\", \"delete-task-btn\");\n        deleteBtn.textContent = \"x\";\n\n        taskContainer.append(taskTitle, taskDescription, dueDate, btnWrapper);\n        btnWrapper.append(doneBtn, deleteBtn);\n\n        if (task.doneStatus) {\n            taskContainer.classList.add(\"completed\");\n            completeTaskDisplay.appendChild(taskContainer);\n        } else {\n            mainContainer.appendChild(taskContainer);\n        }\n    }\n\n    saveNewTask(task) {\n        this.tasks.push(task);\n        saveTasksToStorage(this.tasks);\n        this.renderTask(task);\n    }\n\n    findTaskById(id) {\n        return this.tasks.find(task => task.id === id);\n    }\n\n    toggleDoneStatus(id) {\n        const task = this.findTaskById(id);\n        if (task) {\n            task.doneStatus = !task.doneStatus;\n            saveTasksToStorage(this.tasks);\n            this.render(); // Re-render for simplicity, but could be optimized\n        }\n    }\n\n    deleteTask(id) {\n        this.tasks = this.tasks.filter(task => task.id !== id);\n        saveTasksToStorage(this.tasks);\n        this.render();\n    }\n\n    getTaskNotes(id) {\n        const task = this.findTaskById(id);\n        return task ? task.notes : \"\";\n    }\n}\n\n// --- DOM Elements ---\nconst mainContainer = document.querySelector(\".display\");\nconst completeTaskDisplay = document.querySelector(\".display-done\");\nconst addNewtaskBtn = document.querySelector(\"#add-task-btn\");\nconst overlay = document.querySelector(\".overlay\");\nconst formAddTask = document.querySelector(\".add-task-form\");\nconst saveTaskBtn = document.querySelector(\"#save-task\");\nconst cancelFormBtn = document.querySelector(\"#cancel-new-task\");\nconst todayBtn = document.querySelector(\"#today-btn\");\nconst overdueBtn = document.querySelector(\"#overdue-btn\");\n\n// --- App Initialization ---\nconst workProject = new ToDoList(\"work\");\nworkProject.render();\n\n// --- Event Handlers ---\n\nfunction handleTaskActions(event) {\n    const taskContainer = event.target.closest(\".task-container\");\n    if (!taskContainer) return;\n\n    const taskId = Number(taskContainer.dataset.id);\n\n    if (event.target.classList.contains(\"done-btn\")) {\n        workProject.toggleDoneStatus(taskId);\n    }\n\n    if (event.target.classList.contains(\"delete-task-btn\")) {\n        workProject.deleteTask(taskId);\n    }\n}\n\n// Revealing the notes on click\nconst toggleNotes = (event) => {\n    if(event.target.classList.contains(\"task-container\")) {\n        const taskContainer = event.target.closest(\".task-container\");\n        const taskId = Number(taskContainer.dataset.id);\n        if(taskContainer.dataset.notes === \"true\") {\n            taskContainer.nextElementSibling?.remove();\n            taskContainer.dataset.notes = \"false\";\n            return;\n        };\n\n        const notes = workProject.getTaskNotes(taskId);\n        if (notes) {\n            taskContainer.classList.toggle(\"opened\");\n            taskContainer.dataset.notes = \"true\";\n            const notesDiv = document.createElement(\"div\");\n            notesDiv.classList.add(\"notes-section\");\n            notesDiv.textContent = notes;\n            taskContainer.insertAdjacentElement(\"afterend\", notesDiv);\n        }\n    }\n}\n\nfunction showForm() {\n    overlay.classList.remove(\"hidden\");\n}\n\nfunction hideForm() {\n    overlay.classList.add(\"hidden\");\n    formAddTask.reset();\n    // Also clear error messages when the form is hidden/cancelled\n    const errors = formAddTask.querySelectorAll(\".error-message\");\n    errors.forEach(error => {\n        error.textContent = \"\";\n        error.classList.remove(\"visible\");\n    });\n}\n\nfunction validateAndSaveTask(event) {\n    event.preventDefault();\n\n    // --- 1. Clear previous errors ---\n    const errorMessages = formAddTask.querySelectorAll(\".error-message\");\n    errorMessages.forEach(error => {\n        error.textContent = \"\";\n        error.classList.remove(\"visible\");\n    });\n\n    // --- 2. Get form values ---\n    const title = document.querySelector(\"#title-field\").value;\n    const description = document.querySelector(\"#description-field\").value;\n    const dueDate = document.querySelector(\"#dueDate-field\").value;\n    const notes = document.querySelector(\"#notes-field\").value;\n\n    let isFormValid = true;\n\n    // --- 3. Validate each field ---\n    if (title.length < 3 || title.length > 60) {\n        document.querySelector(\"#title-error\").textContent = \"Title must be between 3 and 60 characters!\";\n        document.querySelector(\"#title-error\").classList.add(\"visible\");\n        isFormValid = false;\n    }\n\n    if (description.length < 3 || description.length > 90) {\n        document.querySelector(\"#description-error\").textContent = \"Description must be between 3 and 90 characters!\";\n        document.querySelector(\"#description-error\").classList.add(\"visible\");\n        isFormValid = false;\n    }\n    if (!isDateValid(dueDate)) {\n        document.querySelector(\"#dueDate-error\").textContent = \"Due date must be in the future!\";\n        document.querySelector(\"#dueDate-error\").classList.add(\"visible\");\n        isFormValid = false;\n    }\n    if (notes.length > 500) {\n        document.querySelector(\"#notes-error\").textContent = \"Notes must be shorter than 500 characters!\";\n        document.querySelector(\"#notes-error\").classList.add(\"visible\");\n        isFormValid = false;\n    }\n\n    // --- 4. Submit if valid ---\n    if (isFormValid) {\n        const newTask = new Task(title, description, notes, dueDate, false);\n        workProject.saveNewTask(newTask);\n        hideForm();\n    }\n}\n\nfunction highlightTodayTasks() {\n    const today = new Date();\n    workProject.tasks.forEach(task => {\n        const dateOfTask = new Date(task.dueDate);\n        if (dateOfTask.getDate() === today.getDate() &&\n            dateOfTask.getMonth() === today.getMonth() &&\n            dateOfTask.getFullYear() === today.getFullYear()) {\n            const taskContainer = document.querySelector(`[data-id=\"${task.id}\"]`);\n            taskContainer?.classList.toggle(\"today-task\");\n        }\n    });\n}\n\nfunction highlightOverdueTasks() {\n    const today = new Date();\n    today.setHours(0, 0, 0, 0);\n\n    workProject.tasks.forEach(task => {\n        const dateOfTask = new Date(task.dueDate);\n        if (dateOfTask < today) {\n            const taskContainer = document.querySelector(`[data-id=\"${task.id}\"]`);\n            taskContainer?.classList.toggle(\"overdue-task\");\n        }\n    });\n}\n\n// --- Event Listeners ---\naddNewtaskBtn.addEventListener(\"click\", showForm);\nsaveTaskBtn.addEventListener(\"click\", validateAndSaveTask);\n\noverlay.addEventListener(\"click\", (event) => {\n    if (event.target === overlay) hideForm();\n});\n\ncancelFormBtn.addEventListener(\"click\", (event) => {\n    event.preventDefault();\n    hideForm();\n});\n\nmainContainer.addEventListener(\"click\", toggleNotes);\nmainContainer.addEventListener(\"click\", handleTaskActions);\ncompleteTaskDisplay.addEventListener(\"click\", handleTaskActions);\n\ntodayBtn.addEventListener(\"click\", highlightTodayTasks);\noverdueBtn.addEventListener(\"click\", highlightOverdueTasks);\n\n\n//# sourceURL=webpack://todo-project/./src/index.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-project/./src/style.css?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;