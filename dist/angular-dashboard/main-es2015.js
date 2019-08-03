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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.is-opened]=\"opened\" class=\"wrapper\">\n    <app-sidebar (toggleSidebar)=\"onToggleSidebar()\"></app-sidebar>\n\n    <section id=\"right-container\" class=\"right-container\">\n        <app-topbar (toggleSidebar)=\"onToggleSidebar()\"></app-topbar>\n        <main class=\"main-content\">\n            <router-outlet></router-outlet>\n\n        </main>\n    </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <button id=\"modal-table-btn\" class=\"box box-red add-button-dark\">\n        <a routerLink=\"/widget-table-create\">\n            <p>New Table</p>\n        </a>\n    </button>\n    <button id=\"modal-messenger-btn\" class=\"box box-red add-button-dark\">\n        <a routerLink=\"/widget-messenger-create\">\n            <p>New Messenger</p>\n        </a>\n    </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messaging/messaging.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>messaging works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Not found</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Container for sidebar(s) + page content -->\n<aside id=\"sidebar\" class=\"sidebar\">\n    <div class=\"sidebar-logo\">\n        <a href=\"\">\n            <img src=\"../assets/logo-inverse.png\" alt=\"\" class=\"logo\">\n        </a>\n        <a class=\"sidebar-close\" (click)=\"toggleSidebar.emit()\">\n            <i class=\"material-icons\">arrow_back_ios</i>\n        </a>\n    </div>\n    <nav class=\"sidebar-links\">\n        <ul>\n            <li><a routerLink=\"#\"><span class=\"gear-icon\"></span>Theme Settings</a></li>\n            <li><a routerLink=\"#\"><span class=\"docu-icon\"></span>Documentation</a></li>\n            <li>\n                <hr>\n            </li>\n            <li><a routerLink=\"\"><span class=\"home-icon\"></span>Dashboard (active)</a></li>\n            <li>\n                <hr>\n            </li>\n            <li><a routerLink=\"#\"><span class=\"profile-icon\"></span>Profile</a></li>\n            <li><a routerLink=\"/messaging\"><span class=\"chat-icon\"></span>Messaging (active)</a></li>\n            <li><a routerLink=\"#\"><span class=\"exchange-icon\"></span>Mail</a></li>\n            <li><a routerLink=\"#\"><span class=\"calendar-icon\"></span>Calendar</a></li>\n            <li><a routerLink=\"#\"><span class=\"gallery-icon\"></span>Gallery</a></li>\n        </ul>\n    </nav>\n</aside>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/topbar/topbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/topbar/topbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"main-nav\">\n    <a class=\"nav-ham\" (click)=\"toggleSidebar.emit()\">\n        <i class=\"material-icons\">menu</i>\n    </a>\n    <div class=\"main-nav-left\">\n        <a routerLink=\"#\"><span class=\"bug-icon\"></span>Issues History</a>\n        <a routerLink=\"#\"><span class=\"graph-icon\"></span>Dashboards</a>\n        <a routerLink=\"#\"><span class=\"project-icon\"></span>Projects</a>\n    </div>\n    <div class=\"main-nav-right\">\n        <form class=\"nav-search\">\n            <input type=\"text\" placeholder=\"Search...\" class=\"search-input\" />\n            <button type=\"submit\" class=\"search-button\"><i class=\"material-icons\">search</i></button>\n        </form>\n        <div><img class=\"round-image\" src=\"http://placeimg.com/50/50/people\" alt=\"Placeholder image\"></div>\n    </div>\n</nav>"

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
/* harmony import */ var _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messaging/messaging.component */ "./src/app/messaging/messaging.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");






const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'messaging', component: _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_3__["MessagingComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] }
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

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-sidebar {\n  float: left;\n}\n\napp-topbar {\n  left: 250px;\n}\n\n.right-container {\n  padding: 90px 0 0 280px;\n  overflow: hidden;\n}\n\n@media (max-width: 768px) {\n  app-sidebar {\n    display: none;\n  }\n\n  app-topbar {\n    left: 0;\n  }\n\n  .right-container {\n    padding: 90px 20px;\n  }\n\n  .wrapper.is-opened app-sidebar {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dGEvRG9jdW1lbnRzL3Zpc21hL2RlbGV0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxhQUFBO0VDQ047O0VEQ0U7SUFDSSxPQUFBO0VDRU47O0VEQUU7SUFDSSxrQkFBQTtFQ0dOOztFRENVO0lBQ0ksY0FBQTtFQ0VkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2lkZWJhciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmFwcC10b3BiYXIge1xuICAgIGxlZnQ6IDI1MHB4O1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA5MHB4IDAgMCAyODBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBhcHAtc2lkZWJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIGFwcC10b3BiYXIge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAucmlnaHQtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogOTBweCAyMHB4O1xuICAgIH1cbiAgICAud3JhcHBlciB7XG4gICAgICAgICYuaXMtb3BlbmVkIHtcbiAgICAgICAgICAgIGFwcC1zaWRlYmFyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJhcHAtc2lkZWJhciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5hcHAtdG9wYmFyIHtcbiAgbGVmdDogMjUwcHg7XG59XG5cbi5yaWdodC1jb250YWluZXIge1xuICBwYWRkaW5nOiA5MHB4IDAgMCAyODBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGFwcC1zaWRlYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgYXBwLXRvcGJhciB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5yaWdodC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDkwcHggMjBweDtcbiAgfVxuXG4gIC53cmFwcGVyLmlzLW9wZW5lZCBhcHAtc2lkZWJhciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"

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
    onToggleSidebar() {
        this.opened = !this.opened;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messaging/messaging.component */ "./src/app/messaging/messaging.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _messaging_messaging_component__WEBPACK_IMPORTED_MODULE_9__["MessagingComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/messaging/messaging.component.scss":
/*!****************************************************!*\
  !*** ./src/app/messaging/messaging.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/messaging/messaging.component.ts":
/*!**************************************************!*\
  !*** ./src/app/messaging/messaging.component.ts ***!
  \**************************************************/
/*! exports provided: MessagingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagingComponent", function() { return MessagingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessagingComponent = class MessagingComponent {
    constructor() { }
    ngOnInit() {
    }
};
MessagingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messaging',
        template: __webpack_require__(/*! raw-loader!./messaging.component.html */ "./node_modules/raw-loader/index.js!./src/app/messaging/messaging.component.html"),
        styles: [__webpack_require__(/*! ./messaging.component.scss */ "./src/app/messaging/messaging.component.scss")]
    })
], MessagingComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.scss":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  background-color: #38354a;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;\n  height: 100%;\n  position: fixed;\n  overflow-x: hidden;\n  z-index: 3;\n  width: 250px;\n}\n\n.sidebar-logo {\n  background-color: #2b2839;\n  height: 60px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.sidebar-logo .logo {\n  width: 150px;\n  display: none;\n}\n\n.sidebar-links {\n  padding: 15px 20px;\n}\n\n.sidebar-links ul {\n  list-style: none;\n}\n\n.sidebar-links a {\n  text-decoration: none;\n  color: #fff;\n  opacity: 0.8;\n  font-weight: 500;\n  line-height: 2.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.sidebar-links hr {\n  margin: 10px 0;\n  border: 1px solid inherit;\n  opacity: 0.2;\n}\n\n.sidebar-close {\n  color: white;\n  font-size: 2em;\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  opacity: 0.8;\n  display: none;\n}\n\n.sidebar-close > .material-icons {\n  font-size: 30px;\n}\n\n@media (max-width: 768px) {\n  .sidebar-logo .logo {\n    display: none;\n  }\n\n  .sidebar-close {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dGEvRG9jdW1lbnRzL3Zpc21hL2RlbGV0ZS9zcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx5SEFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUhBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0UsYUFBQTtFQ0RGOztFRElBO0lBQ0ksY0FBQTtFQ0RKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODM1NGE7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDJweCAxcHggLTFweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDI1MHB4O1xufVxuICBcbi5zaWRlYmFyLWxvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyODM5O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDJweCAxcHggLTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiAgXG4uc2lkZWJhci1sb2dvIC5sb2dvIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuICBcbi5zaWRlYmFyLWxpbmtzIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuICBcbi5zaWRlYmFyLWxpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiAgXG4uc2lkZWJhci1saW5rcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMi41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4gIFxuLnNpZGViYXItbGlua3MgaHIge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgaW5oZXJpdDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uc2lkZWJhci1jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogMTZweDtcbiAgb3BhY2l0eTogMC44O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1jbG9zZSA+IC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyLWxvZ28gLmxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5zaWRlYmFyLWNsb3NlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzNTRhO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAzcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAxcHggMXB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggMnB4IDFweCAtMXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5zaWRlYmFyLWxvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyODM5O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAycHggMXB4IC0xcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyLWxvZ28gLmxvZ28ge1xuICB3aWR0aDogMTUwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWxpbmtzIHtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuXG4uc2lkZWJhci1saW5rcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaWRlYmFyLWxpbmtzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBvcGFjaXR5OiAwLjg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNpZGViYXItbGlua3MgaHIge1xuICBtYXJnaW46IDEwcHggMDtcbiAgYm9yZGVyOiAxcHggc29saWQgaW5oZXJpdDtcbiAgb3BhY2l0eTogMC4yO1xufVxuXG4uc2lkZWJhci1jbG9zZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogMTZweDtcbiAgb3BhY2l0eTogMC44O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci1jbG9zZSA+IC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWRlYmFyLWxvZ28gLmxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuc2lkZWJhci1jbG9zZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "toggleSidebar", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/sidebar/sidebar.component.scss")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/topbar/topbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.main-nav {\n  padding: 0 20px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;\n  height: 60px;\n  overflow: hidden;\n  z-index: 2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.main-nav-left {\n  width: 400px;\n  display: none;\n}\n\n.main-nav-right {\n  width: 320px;\n}\n\n.main-nav div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.main-nav-left a,\n.main-nav-right div {\n  text-decoration: none;\n  color: inherit;\n  font-weight: 500;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  text-align: center;\n}\n\n.main-nav-left a {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.main-nav-left a,\n.main-nav-right form {\n  opacity: 0.6;\n}\n\n/* Hamburger */\n\n.nav-ham {\n  text-align: center;\n  padding: 16px 0;\n  color: black;\n  text-decoration: none;\n  position: relative;\n  font-size: 2em;\n  display: inline-block;\n}\n\n.nav-ham > .material-icons {\n  font-size: 30px;\n}\n\n/* Search */\n\n.nav-search {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border: 1px solid grey;\n  border-radius: 20px;\n  padding: 4px 15px;\n  margin: auto;\n}\n\n.search-input {\n  -webkit-box-flex: 2;\n          flex-grow: 2;\n  border: none;\n  height: 30px;\n}\n\n.search-input:focus {\n  outline: none;\n}\n\n.search-button {\n  border: none;\n  color: grey;\n  background-color: #fff;\n  height: 30px;\n  padding-top: 3px;\n}\n\n@media (min-width: 768px) {\n  .nav-ham {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  .main-nav-left {\n    display: none !important;\n  }\n\n  .main-nav :not(.nav-ham) {\n    margin: auto;\n  }\n}\n\n@media (max-width: 425px) {\n  .main-nav-right {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1dGEvRG9jdW1lbnRzL3Zpc21hL2RlbGV0ZS9zcmMvYXBwL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx5SEFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0FKOztBREdBOztFQUVJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDQUo7O0FER0E7O0VBRUksWUFBQTtBQ0FKOztBREdBLGNBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKOztBREdBLFdBQUE7O0FBQ0E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0k7SUFDSSxhQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJO0lBQ0ksd0JBQUE7RUNETjs7RURHRTtJQUNJLFlBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSx3QkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLm1haW4tbmF2IHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCAzcHggMHB4LFxuICAgICAgcmdiYSgwLCAwLCAwLCAwLjE0KSAwcHggMXB4IDFweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDJweCAxcHggLTFweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuICBcbi5tYWluLW5hdi1sZWZ0IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbiAgXG4ubWFpbi1uYXYtcmlnaHQge1xuICAgIHdpZHRoOiAzMjBweDtcbn1cbiAgXG4ubWFpbi1uYXYgZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuICBcbi5tYWluLW5hdi1sZWZ0IGEsXG4ubWFpbi1uYXYtcmlnaHQgZGl2IHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuICBcbi5tYWluLW5hdi1sZWZ0IGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuICBcbi5tYWluLW5hdi1sZWZ0IGEsXG4ubWFpbi1uYXYtcmlnaHQgZm9ybSB7XG4gICAgb3BhY2l0eTogMC42O1xufVxuICBcbi8qIEhhbWJ1cmdlciAqL1xuLm5hdi1oYW0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubmF2LWhhbSA+IC5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuICBcbi8qIFNlYXJjaCAqL1xuLm5hdi1zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZzogNHB4IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuICBcbi5zZWFyY2gtaW5wdXQge1xuICAgIGZsZXgtZ3JvdzogMjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuICBcbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG4gIFxuLnNlYXJjaC1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogM3B4XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5uYXYtaGFtIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubWFpbi1uYXYtbGVmdCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1haW4tbmF2IDpub3QoLm5hdi1oYW0pIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH0gXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgIC5tYWluLW5hdi1yaWdodCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9IFxufSIsIjpob3N0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWFpbi1uYXYge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDNweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4xNCkgMHB4IDFweCAxcHggMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAycHggMXB4IC0xcHg7XG4gIGhlaWdodDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFpbi1uYXYtbGVmdCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1haW4tbmF2LXJpZ2h0IHtcbiAgd2lkdGg6IDMyMHB4O1xufVxuXG4ubWFpbi1uYXYgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWFpbi1uYXYtbGVmdCBhLFxuLm1haW4tbmF2LXJpZ2h0IGRpdiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluLW5hdi1sZWZ0IGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubWFpbi1uYXYtbGVmdCBhLFxuLm1haW4tbmF2LXJpZ2h0IGZvcm0ge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi8qIEhhbWJ1cmdlciAqL1xuLm5hdi1oYW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5hdi1oYW0gPiAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi8qIFNlYXJjaCAqL1xuLm5hdi1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiA0cHggMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgZmxleC1ncm93OiAyO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gtYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLm5hdi1oYW0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm1haW4tbmF2LWxlZnQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYWluLW5hdiA6bm90KC5uYXYtaGFtKSB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1haW4tbmF2LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TopbarComponent = class TopbarComponent {
    constructor() {
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TopbarComponent.prototype, "toggleSidebar", void 0);
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/topbar/topbar.component.html"),
        styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/topbar/topbar.component.scss")]
    })
], TopbarComponent);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // URL of development API
    apiUrl: 'http://localhost:3004'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ruta/Documents/visma/delete/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map