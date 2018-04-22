webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"header\">\n    <img src=\"../assets/images/admin.png\">\n  </div>\n\n  <div class=\"content\">\n      <div class=\"content-intro container\">\n        <h2>Hello<span>.</span>I'm a creative Technologist<br> <span>Re-design of admin calendar display</span></h2>      \n        <p>\n          Below is a skin I was asked to design for our admin calendar booking dashboard.\n          \n      </p>      \n      </div>\n      </div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.navigation {\n  background-color: transparent; }\n\n.content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background.svg") + "); }\n\n.overlay {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 20;\n  left: 0;\n  z-index: 1;\n  opacity: 0.60; }\n\n.container {\n  max-width: 960px;\n  margin-left: 0.5rem;\n  margin: auto;\n  text-align: left;\n  padding-top: 100px !important;\n  padding-bottom: 100px !important;\n  z-index: 0; }\n\nr\n.content-more {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.content-more .left {\n  float: left; }\n\n.content-more .right {\n  float: right; }\n\n.container p {\n  width: 50%; }\n\n.container h2 {\n  width: 50%; }\n\nh2 {\n  margin-top: 60px;\n  font-size: 100px; }\n\nh3 {\n  margin-top: 60px;\n  font-size: 120px; }\n\nh5 {\n  margin-top: 100px;\n  color: yellowgreen; }\n\n.project {\n  padding-top: 100px; }\n\n.list {\n  padding-top: 20px; }\n\nimg {\n  height: cover;\n  width: 100%; }\n\n.logo {\n  width: 100%; }\n\n.row {\n  padding-top: 100px; }\n\n.item {\n  background-color: blue;\n  width: calc(20% - 20px); }\n\nul {\n  text-decoration: none !important; }\n\na {\n  text-decoration: none !important;\n  font-size: 1rem; }\n\n@media (max-width: 960px) {\n  .container {\n    padding-right: 3rem;\n    padding-left: 3rem;\n    width: 100%; } }\n\n@media (max-width: 960px) {\n  .container p, h2 {\n    width: 100% !important; } }\n\n.preview {\n  margin-left: 20rem;\n  margin-right: 20rem;\n  margin-top: 100px; }\n\n@media (max-width: 960px) {\n  .preview {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 100px; } }\n\n@media (max-width: 960px) {\n  .content .preview {\n    width: 100% !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/main.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sauron_sauron_component__ = __webpack_require__("../../../../../src/app/sauron/sauron.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__foooter_foooter_component__ = __webpack_require__("../../../../../src/app/foooter/foooter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_ui_ui_component__ = __webpack_require__("../../../../../src/app/content/ui/ui.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_phyto_phyto_component__ = __webpack_require__("../../../../../src/app/content/phyto/phyto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__content_loading_loading_component__ = __webpack_require__("../../../../../src/app/content/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__friends_friends_component__ = __webpack_require__("../../../../../src/app/friends/friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__panda_panda_component__ = __webpack_require__("../../../../../src/app/panda/panda.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sauron_sauron_component__["a" /* SauronComponent */],
            __WEBPACK_IMPORTED_MODULE_8__calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__foooter_foooter_component__["a" /* FoooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__content_ui_ui_component__["a" /* UiComponent */],
            __WEBPACK_IMPORTED_MODULE_11__content_phyto_phyto_component__["a" /* PhytoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__content_loading_loading_component__["a" /* LoadingComponent */],
            __WEBPACK_IMPORTED_MODULE_13__friends_friends_component__["a" /* FriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__panda_panda_component__["a" /* PandaComponent */],
            __WEBPACK_IMPORTED_MODULE_16__top_bar_top_bar_component__["a" /* TopBarComponent */],
            __WEBPACK_IMPORTED_MODULE_17__resume_resume_component__["a" /* ResumeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                {
                    path: 'sauron',
                    component: __WEBPACK_IMPORTED_MODULE_7__sauron_sauron_component__["a" /* SauronComponent */]
                },
                {
                    path: 'panda',
                    component: __WEBPACK_IMPORTED_MODULE_15__panda_panda_component__["a" /* PandaComponent */]
                },
                {
                    path: 'calendar',
                    component: __WEBPACK_IMPORTED_MODULE_8__calendar_calendar_component__["a" /* CalendarComponent */]
                },
                {
                    path: 'ui',
                    component: __WEBPACK_IMPORTED_MODULE_10__content_ui_ui_component__["a" /* UiComponent */]
                },
                {
                    path: 'phyto',
                    component: __WEBPACK_IMPORTED_MODULE_11__content_phyto_phyto_component__["a" /* PhytoComponent */]
                },
                {
                    path: 'friends',
                    component: __WEBPACK_IMPORTED_MODULE_13__friends_friends_component__["a" /* FriendsComponent */]
                },
                {
                    path: 'resume',
                    component: __WEBPACK_IMPORTED_MODULE_17__resume_resume_component__["a" /* ResumeComponent */]
                },
            ])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n \n\n\n\n\n\n\n\n\n\n\n\n      <div class=\"header-portfolio\">\n    <div class=\"header-portfolio-inner\">\n        <img src=\"../assets/images/admin.png\">\n      </div>\n  </div>\n\n  \n\n      <div class=\"content\" >\n          <div class=\"content-intro container\">\n              <h4 style=\"color:#000; font-size:80px;\">Brief</h4>   \n            <div class=\"col\">\n            <p>\n                I was asked by head stakeholders re-design an existing reception area display calendar.\n                <p>\n                   Things that needed to be considered\n                </p>\n                   <ul >    \n                    <li>Needed to some how display our existing meeting rooms spacial awarenes</li>  \n                    <li>Needed to display available equipment for each rooms</li>\n                      <li>Needed to have a duration bar and who was attending that meeting</li>\n                      <li>Had to consider branding colours etc</li>\n\n                      </ul>\n\n              </div>\n          </div>\n          </div>\n          <div class=\"preview\">\n            <img src=\"../assets/images/calendarm.png\">\n          </div>\n\n          <div class=\"header\">\n              <img src=\"../assets/images/new.png\">\n            </div>\n\n\n\n                                                       \n\n      "

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.navigation {\n  background-color: transparent; }\n\n.banner {\n  height: 40px;\n  width: 100%;\n  background: #141618; }\n\n.banner h5 {\n  padding-bottom: 10px;\n  padding-top: 10px;\n  margin-left: 20px;\n  font-size: 1rem;\n  font-style: thin;\n  color: #FFFFFF; }\n\n.content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #232526;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #414345, #232526);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/background.svg") + "); }\n\n.overlay {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 20;\n  left: 0;\n  z-index: 1;\n  opacity: 0.60; }\n\n.container {\n  max-width: 960px;\n  margin-left: 0.5rem;\n  margin: auto;\n  text-align: center;\n  padding-top: 50px !important;\n  padding-bottom: 50px !important;\n  z-index: 0; }\n\nr\n.content-more {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.content-more .left {\n  float: left; }\n\n.content-more .right {\n  float: right; }\n\n.container p {\n  width: 100%;\n  text-align: left; }\n\n.container h2 {\n  width: 100%; }\n\nh2 {\n  font-size: 100px; }\n\nh3 {\n  margin-top: 60px;\n  font-size: 80px;\n  text-align: left; }\n\nh4 {\n  text-align: left; }\n\nul {\n  text-align: left; }\n\n.project {\n  padding-top: 100px; }\n\n.list {\n  padding-top: 20px; }\n\nimg {\n  height: cover;\n  width: 100% !important; }\n\n.logo {\n  width: 100%; }\n\n.row {\n  padding-top: 100px; }\n\n.item {\n  background-color: blue;\n  width: calc(20% - 20px); }\n\nul {\n  text-decoration: none !important; }\n\na {\n  text-decoration: none !important;\n  font-size: 1rem; }\n\n.header {\n  width: 100%; }\n\n.preview {\n  margin-left: 20rem;\n  margin-right: 20rem;\n  margin-top: 100px; }\n\n@media (max-width: 960px) {\n  .preview {\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-top: 100px; } }\n\n@media (max-width: 960px) {\n  ul, h1, h2, h4, p {\n    text-align: left;\n    width: 100%;\n    margin-left: 1px; } }\n\n@media (max-width: 960px) {\n  .content .preview {\n    width: 100% !important; } }\n\n@media (max-width: 960px) {\n  .container {\n    padding-right: 1rem;\n    padding-left: 1rem;\n    width: 100%; } }\n\n@media (max-width: 960px) {\n  .container p, h2 {\n    width: 100% !important; } }\n\n.col {\n  -webkit-column-count: 2;\n  column-count: 2; }\n\n@media (max-width: 960px) {\n  .col {\n    -webkit-column-count: 1;\n    column-count: 1; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <!-- <div class=\"content\">\n      <div class=\"content-intro container\">\n        <h1>I have done things a little different<span>.</span></h1>\n\n        <p>\n          I am a Brisbane based UX & UI designer that has pivoted from interest like Architecture, Web Design, and Business while undergoing my tertiary studies.\n                       </p>\n            <p>\n              Current status! over the past 1 half years, I have been happily pursuing a career\n              where I can design think, scribble on whiteboards, design for user problems and also be part of a huge culture of future thinkers that will create our future digital experiences.\n          </p>\n      </div>\n      </div> -->\n\n      <!-- <div class=\"content\">\n          <div class=\"content-intro container\">\n            <h4>Hello there<span>,</span></h4>\n\n            <p>\n              I am a Brisbane based UX & UI designer.<br>\n  Currently designing for <span a href=\"https://www.canstar.com.au/team-members/joseph-wells/\" class=\"canstar\">Canstar</span>.\n                           </p>\n\n          </div>\n          </div> -->\n\n              <div class=\"content\">\n          <div class=\"content-intro container\">\n\n          <div class=\"col-left\">\n\n            <h2>I love creating digital..</h2>\n\n          </div>\n\n          <div class=\"col-right\">\n\n          <img class=\"right-image\" src=\"/../../assets/images/Me workng.svg\">\n\n          </div>\n\n          <div class=\"clear\"></div>\n\n          </div>\n          </div>\n\n\n\n\n\n\n\n      <div class=\"content\">\n        <div class=\"content-intro container\">\n        <!-- <h2>I have done things a little different<span>.</span></h2> -->\n        <h4>So Click on a project below</h4>\n     <p>Unfortunately though this won’t route the page to a new frame. But It will appear right underneath<span> :)</span></p>\n       <ul>\n\n <li> <a class=\"btn\" title=\"Relevant Title\" routerLink=\"/panda\">Panda</a> </li>\n <!-- <li> <a class=\"btn\" title=\"Relevant Title\" routerLink=\"/sauron\">Saurun</a> </li> -->\n <li> <a class=\"btn\" title=\"Relevant Title\" routerLink=\"/phyto\">Phyto GP</a> </li>\n <li> <a class=\"btn\" title=\"Relevant Title\" routerLink=\"/friends\">Friends</a> </li>\n <li> <a class=\"btn\" title=\"Relevant Title\" routerLink=\"/ui\">More</a> </li>\n <li> <a class=\"btn\" title=\"Relevant Title\" routerLink=\"/resume\">Resume</a> </li>\n\n        </ul>\n                   <h5>Projects will route below,</h5>\n       </div>\n"

/***/ }),

/***/ "../../../../../src/app/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".canstar {\n  color: #007a87;\n  font-weight: 800; }\n\n.canstar:hover {\n  cursor: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/happy.png\"), auto;\n  color: #62b206; }\n\n* {\n  box-sizing: border-box; }\n\n.navigation {\n  background-color: transparent; }\n\n.content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding: 10px 2rem; }\n\n.projects {\n  background-color: #FFFFFF;\n  width: 100%; }\n\n.project #tag {\n  color: #FFFFFF !important; }\n\n#main {\n  text-align: left; }\n\n.btn {\n  border: none;\n  background-color: inherit;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  display: inline-block;\n  color: #333333;\n  /* Safari */\n  transition-duration: 0.4s; }\n\n/* On mouse-over */\n.btn:hover {\n  background: greenyellow;\n  color: #ffffff !important; }\n\n.btn:target {\n  color: #FFFFFF !important;\n  background-color: greenyellow; }\n\n.overlay {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 20;\n  left: 0;\n  z-index: 1;\n  opacity: 0.60; }\n\n.container {\n  max-width: 960px;\n  margin-left: 0.5rem;\n  margin: auto;\n  text-align: left;\n  padding-top: 100px !important;\n  padding-bottom: 100px !important;\n  z-index: 0; }\n\n.content-more {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.content-more .left {\n  float: left; }\n\n.content-more .right {\n  float: right; }\n\n.container p {\n  width: 80%; }\n\n.container h2 {\n  width: 50%; }\n\n@keyframes colorchange {\n  0% {\n    color: #2C3A4E; }\n  25% {\n    color: -webkit-linear-gradient(to right, #0575e6, #021b79);\n    /* Chrome 10-25, Safari 5.1-6 */ }\n  50% {\n    color: -webkit-linear-gradient(to right, #9cecfb, #65c7f7, #0052d4);\n    /* Chrome 10-25, Safari 5.1-6 */ }\n  75% {\n    color: -webkit-linear-gradient(to right, #9cecfb, #65c7f7, #0052d4);\n    /* Chrome 10-25, Safari 5.1-6 */ }\n  100% {\n    color: #00BA27;\n    /* Chrome 10-25, Safari 5.1-6 */ } }\n\n@-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */ {\n  0% {\n    color: #2C3A4E; }\n  25% {\n    color: #00695C; }\n  50% {\n    color: #4DB6AC; }\n  75% {\n    color: #009688; }\n  100% {\n    color: #37DB67; } }\n\nh1 {\n  animation: colorchange 10s infinite;\n  /* animation-name followed by duration in seconds*/\n  /* you could also use milliseconds (ms) or something like 2.5s */\n  -webkit-animation: colorchange 10s;\n  /* Chrome and Safari */\n  color: #2C3A4E; }\n\nh2 {\n  margin-top: 100px;\n  font-size: 40px;\n  font-weight: 800;\n  font-style: black;\n  animation: colorchange 50s infinite;\n  /* animation-name followed by duration in seconds*/\n  /* you could also use milliseconds (ms) or something like 2.5s */\n  -webkit-animation: colorchange 50s;\n  /* Chrome and Safari */ }\n\nh3 {\n  margin-top: 60px;\n  font-size: 120px;\n  color: #FFFFFF; }\n\nh5 {\n  margin-top: 100px;\n  color: #FFFFFF; }\n\n.project {\n  padding-top: 100px; }\n\na {\n  font-size: 30px;\n  color: #FFFFFF; }\n\n.list {\n  padding-top: 20px; }\n\n.span {\n  animation: colorchange 50s infinite;\n  /* animation-name followed by duration in seconds*/\n  /* you could also use milliseconds (ms) or something like 2.5s */\n  -webkit-animation: colorchange 50s !important;\n  /* Chrome and Safari */ }\n\nimg {\n  height: cover;\n  width: 100%; }\n\n.logo {\n  width: 100%; }\n\n.row {\n  padding-top: 100px; }\n\n.item {\n  background-color: blue;\n  width: calc(20% - 20px); }\n\nul {\n  padding-top: 50px;\n  text-decoration: none !important;\n  list-style-type: none; }\n\na {\n  text-decoration: none !important;\n  font-size: 1rem;\n  color: black;\n  float: left;\n  margin-right: 30px;\n  font-weight: 900; }\n\na:active {\n  color: #Fefefe; }\n\na:hover {\n  animation: colorchange 50s infinite;\n  /* animation-name followed by duration in seconds*/\n  /* you could also use milliseconds (ms) or something like 2.5s */\n  -webkit-animation: colorchange 50s;\n  /* Chrome and Safari */\n  color: #37DB67; }\n\n.col {\n  -webkit-column-count: 2;\n  column-count: 2;\n  padding-bottom: 150px; }\n\n@media (max-width: 960px) {\n  .col {\n    -webkit-column-count: 1;\n    column-count: 1; } }\n\n@media (max-width: 960px) {\n  .container {\n    padding-right: 3rem;\n    padding-left: 3rem;\n    width: 100%; } }\n\n@media (max-width: 960px) {\n  .container p, h2 {\n    width: 100% !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/content.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\">\n    <div class=\"loader__bar\"></div>\n    <div class=\"loader__bar\"></div>\n    <div class=\"loader__bar\"></div>\n    <div class=\"loader__bar\"></div>\n    <div class=\"loader__bar\"></div>\n    <div class=\"loader__ball\"></div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/content/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  height: 100%; }\n\nbody {\n  height: 100%;\n  background: #EA4961;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.loader {\n  position: relative;\n  width: 75px;\n  height: 100px; }\n  .loader__bar {\n    position: absolute;\n    bottom: 0;\n    width: 10px;\n    height: 50%;\n    background: #fff;\n    -webkit-transform-origin: center bottom;\n            transform-origin: center bottom;\n    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2); }\n    .loader__bar:nth-child(1) {\n      left: 0px;\n      -webkit-transform: scale(1, 0.2);\n              transform: scale(1, 0.2);\n      -webkit-animation: barUp1 4s infinite;\n              animation: barUp1 4s infinite; }\n    .loader__bar:nth-child(2) {\n      left: 15px;\n      -webkit-transform: scale(1, 0.4);\n              transform: scale(1, 0.4);\n      -webkit-animation: barUp2 4s infinite;\n              animation: barUp2 4s infinite; }\n    .loader__bar:nth-child(3) {\n      left: 30px;\n      -webkit-transform: scale(1, 0.6);\n              transform: scale(1, 0.6);\n      -webkit-animation: barUp3 4s infinite;\n              animation: barUp3 4s infinite; }\n    .loader__bar:nth-child(4) {\n      left: 45px;\n      -webkit-transform: scale(1, 0.8);\n              transform: scale(1, 0.8);\n      -webkit-animation: barUp4 4s infinite;\n              animation: barUp4 4s infinite; }\n    .loader__bar:nth-child(5) {\n      left: 60px;\n      -webkit-transform: scale(1, 1);\n              transform: scale(1, 1);\n      -webkit-animation: barUp5 4s infinite;\n              animation: barUp5 4s infinite; }\n  .loader__ball {\n    position: absolute;\n    bottom: 10px;\n    left: 0;\n    width: 10px;\n    height: 10px;\n    background: #fff;\n    border-radius: 50%;\n    -webkit-animation: ball 4s infinite;\n            animation: ball 4s infinite; }\n\n@-webkit-keyframes ball {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  5% {\n    -webkit-transform: translate(8px, -14px);\n            transform: translate(8px, -14px); }\n  10% {\n    -webkit-transform: translate(15px, -10px);\n            transform: translate(15px, -10px); }\n  17% {\n    -webkit-transform: translate(23px, -24px);\n            transform: translate(23px, -24px); }\n  20% {\n    -webkit-transform: translate(30px, -20px);\n            transform: translate(30px, -20px); }\n  27% {\n    -webkit-transform: translate(38px, -34px);\n            transform: translate(38px, -34px); }\n  30% {\n    -webkit-transform: translate(45px, -30px);\n            transform: translate(45px, -30px); }\n  37% {\n    -webkit-transform: translate(53px, -44px);\n            transform: translate(53px, -44px); }\n  40% {\n    -webkit-transform: translate(60px, -40px);\n            transform: translate(60px, -40px); }\n  50% {\n    -webkit-transform: translate(60px, 0);\n            transform: translate(60px, 0); }\n  57% {\n    -webkit-transform: translate(53px, -14px);\n            transform: translate(53px, -14px); }\n  60% {\n    -webkit-transform: translate(45px, -10px);\n            transform: translate(45px, -10px); }\n  67% {\n    -webkit-transform: translate(37px, -24px);\n            transform: translate(37px, -24px); }\n  70% {\n    -webkit-transform: translate(30px, -20px);\n            transform: translate(30px, -20px); }\n  77% {\n    -webkit-transform: translate(22px, -34px);\n            transform: translate(22px, -34px); }\n  80% {\n    -webkit-transform: translate(15px, -30px);\n            transform: translate(15px, -30px); }\n  87% {\n    -webkit-transform: translate(7px, -44px);\n            transform: translate(7px, -44px); }\n  90% {\n    -webkit-transform: translate(0, -40px);\n            transform: translate(0, -40px); }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); } }\n\n@keyframes ball {\n  0% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n  5% {\n    -webkit-transform: translate(8px, -14px);\n            transform: translate(8px, -14px); }\n  10% {\n    -webkit-transform: translate(15px, -10px);\n            transform: translate(15px, -10px); }\n  17% {\n    -webkit-transform: translate(23px, -24px);\n            transform: translate(23px, -24px); }\n  20% {\n    -webkit-transform: translate(30px, -20px);\n            transform: translate(30px, -20px); }\n  27% {\n    -webkit-transform: translate(38px, -34px);\n            transform: translate(38px, -34px); }\n  30% {\n    -webkit-transform: translate(45px, -30px);\n            transform: translate(45px, -30px); }\n  37% {\n    -webkit-transform: translate(53px, -44px);\n            transform: translate(53px, -44px); }\n  40% {\n    -webkit-transform: translate(60px, -40px);\n            transform: translate(60px, -40px); }\n  50% {\n    -webkit-transform: translate(60px, 0);\n            transform: translate(60px, 0); }\n  57% {\n    -webkit-transform: translate(53px, -14px);\n            transform: translate(53px, -14px); }\n  60% {\n    -webkit-transform: translate(45px, -10px);\n            transform: translate(45px, -10px); }\n  67% {\n    -webkit-transform: translate(37px, -24px);\n            transform: translate(37px, -24px); }\n  70% {\n    -webkit-transform: translate(30px, -20px);\n            transform: translate(30px, -20px); }\n  77% {\n    -webkit-transform: translate(22px, -34px);\n            transform: translate(22px, -34px); }\n  80% {\n    -webkit-transform: translate(15px, -30px);\n            transform: translate(15px, -30px); }\n  87% {\n    -webkit-transform: translate(7px, -44px);\n            transform: translate(7px, -44px); }\n  90% {\n    -webkit-transform: translate(0, -40px);\n            transform: translate(0, -40px); }\n  100% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); } }\n\n@-webkit-keyframes barUp1 {\n  0% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  40% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  50% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  90% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  100% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); } }\n\n@keyframes barUp1 {\n  0% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  40% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  50% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  90% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  100% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); } }\n\n@-webkit-keyframes barUp2 {\n  0% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  40% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  50% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  90% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  100% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); } }\n\n@keyframes barUp2 {\n  0% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  40% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  50% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  90% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  100% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); } }\n\n@-webkit-keyframes barUp3 {\n  0% {\n    -webkit-transform: scale(1, 0.6);\n            transform: scale(1, 0.6); }\n  100% {\n    -webkit-transform: scale(1, 0.6);\n            transform: scale(1, 0.6); } }\n\n@keyframes barUp3 {\n  0% {\n    -webkit-transform: scale(1, 0.6);\n            transform: scale(1, 0.6); }\n  100% {\n    -webkit-transform: scale(1, 0.6);\n            transform: scale(1, 0.6); } }\n\n@-webkit-keyframes barUp4 {\n  0% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  40% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  50% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  90% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  100% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); } }\n\n@keyframes barUp4 {\n  0% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  40% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); }\n  50% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  90% {\n    -webkit-transform: scale(1, 0.4);\n            transform: scale(1, 0.4); }\n  100% {\n    -webkit-transform: scale(1, 0.8);\n            transform: scale(1, 0.8); } }\n\n@-webkit-keyframes barUp5 {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  40% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  50% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  90% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n\n@keyframes barUp5 {\n  0% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  40% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); }\n  50% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  90% {\n    -webkit-transform: scale(1, 0.2);\n            transform: scale(1, 0.2); }\n  100% {\n    -webkit-transform: scale(1, 1);\n            transform: scale(1, 1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    return LoadingComponent;
}());
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../src/app/content/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/loading/loading.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/phyto/phyto.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"content\">\n\n    <div class=\"content-intro container\">\n\n    <div class=\"col-left\">\n\n      <h3>Phyto GP</h3>\n      <h5>Simplifying the Medical Triage Process</h5>\n\n  </div>\n\n  <div class=\"col-right\">\n\n    <img class=\"right-image\" src=\"/../../assets/images/Header-gp.svg\">\n\n  </div>\n\n  <div class=\"clear\"></div>\n\n  </div>\n  </div>\n\n\n\n      <div class=\"header\">\n          <img src=\"../assets/images/phyto.png\">\n        </div>\n\n\n            <div class=\"content\">\n\n              <div class=\"content-intro container\">\n\n              <div class=\"col-left\">\n\n                <h4>Brief</h4>\n                <p class=\"two-column\">\n                  Earlier on this year I worked on Ipad Application with a Melbourne base startup that is trying to desrupt the medical triage industry.\n                While working on this project I conducted user-testing, design of the Ipad user-interface and collaborated with a video-designer to create the case study video for Tech Crunch-battlefields entry.\n                </p>\n\n            </div>\n\n            <div class=\"col-right\">\n\n              <p>\n              Key role\n          </p>\n            <ul>\n              <li>Lead designer of the product</li>\n              <li>Facilitated user tests</li>\n              <li>Pair designed a entry video for tech Crunch-battlefields with a video designer</li>\n            </ul>\n\n            </div>\n\n            <div class=\"clear\"></div>\n\n            </div>\n            </div>\n\n\n\n\n\n              <div class=\"preview\">\n                  <img src=\"../assets/images/phyto2.png\">\n                </div>\n\n                <div class=\"content\">\n                    <div class=\"content-intro container\">\n                      <h2>Tech Crunch entry here<span>.</span></h2>\n                      <a class=\"btn\" href=\"https://www.youtube.com/watch?v=ko9Di_dvLvw\">Here</a>\n\n\n                    </div>\n                    </div>\n"

/***/ }),

/***/ "../../../../../src/app/content/phyto/phyto.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding: 150px 2rem; }\n\n.header-portfolio {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #141618; }\n\nimg {\n  height: cover;\n  width: 100% !important; }\n\n.banner {\n  padding: 150px 2rem; }\n\n.right-image {\n  box-shadow: 0 4px 4px 0 rgba(92, 96, 110, 0.05);\n  overflow-y: hidden;\n  background: #fcfdff;\n  border-radius: 10px;\n  border: 1px solid #e6e9f2;\n  width: auto !important;\n  margin-right: -200px;\n  margin-top: 8px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin: -300px 0 0 -190px; }\n\n.right-image-colour {\n  box-shadow: 0 4px 4px 0 rgba(92, 96, 110, 0.05);\n  overflow-y: hidden;\n  border-radius: 10px;\n  width: 1300px;\n  margin-right: -200px;\n  margin-top: 8px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  position: relative;\n  margin: 0 0 0; }\n\n@media screen and (max-width: 800px) {\n  .right-image {\n    box-shadow: 0 4px 4px 0 rgba(92, 96, 110, 0.05);\n    overflow-y: hidden;\n    border-radius: 10px;\n    width: 330px !important;\n    margin-right: -200px;\n    margin-top: 8px;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    position: relative;\n    margin: 0 0 0; } }\n\n.btn {\n  border: none;\n  background-color: inherit;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  display: inline-block;\n  color: #333333;\n  /* Safari */\n  transition-duration: 0.4s; }\n\n/* On mouse-over */\n.btn:hover {\n  background: #e62117;\n  color: #ffffff; }\n\n.btn:target {\n  color: #FFFFFF;\n  background-color: #e62117; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/phyto/phyto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhytoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhytoComponent = (function () {
    function PhytoComponent() {
    }
    PhytoComponent.prototype.ngOnInit = function () {
    };
    return PhytoComponent;
}());
PhytoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-phyto',
        template: __webpack_require__("../../../../../src/app/content/phyto/phyto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/phyto/phyto.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PhytoComponent);

//# sourceMappingURL=phyto.component.js.map

/***/ }),

/***/ "../../../../../src/app/content/ui/ui.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<span class=\"arrow\" src=\"../assets/images/arrows.svg\" style=\"width:10%; margin-left:45%;\"></span>\n<br>\n\n\n      <div class=\"header\">\n      <img src=\"../assets/images/dribbble.png\">\n      </div>\n\n      <div class=\"header\">\n          <img src=\"../assets/images/bmw1.png\">\n        </div>\n\n        <div class=\"header\">\n            <img src=\"../assets/images/bmw2.png\">\n          </div>\n\n          <div class=\"header\">\n              <img src=\"../assets/images/sauron1.png\">\n            </div>\n\n            <div class=\"header\">\n                <img src=\"../assets/images/sauron2.png\">\n              </div>\n\n\n      <div class=\"header\">\n      <img src=\"../assets/images/amazon.png\">\n      </div>\n\n        <div class=\"header\">\n            <img src=\"../assets/images/ipad.png\">\n          </div>\n\n        <div class=\"header\">\n          <img src=\"../assets/images/final.png\">\n        </div>\n\n            <div class=\"header\">\n                <img src=\"../assets/images/backdrop.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/card.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/blue.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/Persona.png\">\n              </div>\n\n\n              <div class=\"header\">\n                <img src=\"../assets/images/cute.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/gay.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/P ark.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/Addidaspng.png\">\n              </div>\n\n              <div class=\"header\">\n                <img src=\"../assets/images/car.png\">\n              </div>\n\n\n\n\n                <div class=\"header\">\n                    <img src=\"../assets/images/facebook.png\">\n                  </div>\n"

/***/ }),

/***/ "../../../../../src/app/content/ui/ui.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.navigation {\n  background-color: transparent; }\n\n.content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-image: url(\"/assets/images/background.svg\"); }\n\n.overlay {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 20;\n  left: 0;\n  z-index: 1;\n  opacity: 0.60; }\n\n.header {\n  margin-top: 50px; }\n\n.container {\n  max-width: 960px;\n  margin-left: 0.5rem;\n  margin: auto;\n  text-align: left;\n  padding-top: 100px !important;\n  padding-bottom: 100px !important;\n  z-index: 0; }\n\nr\n.content-more {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n\n.content-more .left {\n  float: left; }\n\n.content-more .right {\n  float: right; }\n\n.container p {\n  width: 50%; }\n\n.container h2 {\n  width: 50%; }\n\nh2 {\n  margin-top: 60px;\n  font-size: 100px; }\n\nh3 {\n  margin-top: 60px;\n  font-size: 120px; }\n\nh5 {\n  margin-top: 100px;\n  color: yellowgreen; }\n\n.project {\n  padding-top: 100px; }\n\n.list {\n  padding-top: 20px; }\n\nimg {\n  height: cover;\n  width: 100%; }\n\n.logo {\n  width: 100%; }\n\n.row {\n  padding-top: 100px; }\n\n.item {\n  background-color: blue;\n  width: calc(20% - 20px); }\n\nul {\n  text-decoration: none !important; }\n\na {\n  text-decoration: none !important;\n  font-size: 1rem; }\n\n@media (max-width: 960px) {\n  .container {\n    padding-right: 3rem;\n    padding-left: 3rem;\n    width: 100%; } }\n\n@media (max-width: 960px) {\n  .container p, h2 {\n    width: 100% !important; } }\n\n.preview {\n  margin-left: 30rem;\n  margin-right: 30rem;\n  margin-top: 100px; }\n\n@media (max-width: 960px) {\n  .content .preview {\n    width: 100% !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/ui/ui.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiComponent = (function () {
    function UiComponent() {
    }
    UiComponent.prototype.ngOnInit = function () {
    };
    return UiComponent;
}());
UiComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ui',
        template: __webpack_require__("../../../../../src/app/content/ui/ui.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/ui/ui.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], UiComponent);

//# sourceMappingURL=ui.component.js.map

/***/ }),

/***/ "../../../../../src/app/foooter/foooter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-distributed{\n\tbackground-color:#191919;\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n\tbox-sizing: border-box;\n\twidth: 100%;\n\ttext-align: left;\n\tcolor:#ffffff;\n\n\tpadding: 55px 50px;\n}\n\n.center-headline{\n\twidth:100%;\n\tposition: center;\n\tdisplay: inline-block;\n\tmargin-top:50px;\n\tmargin-bottom: 50px;\n}\n\n.center-headline h3{\n\ttext-align: center;\n\t\tmargin-top:50px;\n\tfont-style: normal;\n\tfont-weight: 100;\n}\n\n.footer-distributed .footer-left,\n.footer-distributed .footer-center,\n.footer-distributed .footer-right{\n\tdisplay: inline-block;\n\tvertical-align: top;\n}\n\n/* Footer left */\n\n.footer-distributed .footer-left{\n\twidth: 40%;\n}\n\n/* The company logo */\n\n.footer-distributed h3{\n\tcolor:  #333333;\n\tfont: normal 36px;\n\tmargin: 0;\n}\n\n.footer-distributed h3 span{\n\tcolor:#fff;\n}\n\n/* Footer links */\n\n.footer-distributed .footer-links{\n\tcolor:  #333333;\n\tmargin: 20px 0 12px;\n\tpadding: 0;\n}\n\n.footer-distributed .footer-links a{\n\tdisplay:inline-block;\n\tline-height: 1.8;\n\ttext-decoration: none;\n\tcolor:#ffffff;\n}\n\n.footer-distributed .footer-links a:hover{\n\tcolor:#62b206;\n}\n\n.footer-distributed .footer-company-name{\n\tcolor:  #333333;\n\tfont-size: 14px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n/* Footer Center */\n\n.footer-distributed .footer-center{\n\twidth: 35%;\n}\n\n.footer-distributed .footer-center i{\n\tbackground-color:  #393d40;\n\tcolor: #ffffff;\n\tfont-size: 25px;\n\twidth: 38px;\n\theight: 38px;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tline-height: 42px;\n\tmargin: 10px 15px;\n\tvertical-align: middle;\n}\n\n.footer-distributed .footer-center i.fa-envelope{\n\tfont-size: 17px;\n\tline-height: 38px;\n}\n\n.footer-distributed .footer-center p{\n\tdisplay: inline-block;\n\tcolor: #ffffff;\n\tvertical-align: middle;\n\tmargin:0;\n}\n\n.footer-distributed .footer-center p span{\n\tdisplay:block;\n\tfont-weight: normal;\n\tfont-size:14px;\n\tline-height:2;\n\tcolor:#333333;\n}\n\n.footer-distributed .footer-center p a{\n\tcolor: #333333;\n\ttext-decoration: none;\n}\n\n.footer-distributed .footer-center p a:hover{\n\tcolor:#0073b1;\n\ttext-decoration: none;\n}\n\n/* Footer Right */\n\n.footer-distributed .footer-right{\n\twidth: 20%;\n}\n\n.footer-distributed .footer-company-about{\n\tline-height: 20px;\n\tcolor:  #ffffff;\n\tfont-size: 13px;\n\tfont-weight: normal;\n\tmargin: 0;\n}\n\n.footer-distributed .footer-company-about span{\n\tdisplay: block;\n\tcolor:  #333333;\n\tfont-size: 14px;\n  font-weight: bold;\n  margin-top:10px;\n\tmargin-bottom: 20px;\n}\n\n.footer-distributed .footer-icons{\n\tmargin-top: 25px;\n}\n\n.footer-distributed .footer-icons a{\n\tdisplay: inline-block;\n\twidth: 35px;\n\theight: 35px;\n\tcursor: pointer;\n\tbackground-color:  #33383b;\n\tborder-radius: 2px;\n\tfont-size: 20px;\n\tcolor: #333333;\n\ttext-align: center;\n\tline-height: 35px;\n\n\tmargin-right: 3px;\n\tmargin-bottom: 5px;\n}\n\n/* If you don't want the footer to be responsive, remove these media queries */\n\n@media (max-width: 880px) {\n\n\t.footer-distributed{\n\t\tfont: bold 14px sans-serif;\n\t}\n\n\t.footer-distributed .footer-left,\n\t.footer-distributed .footer-center,\n\t.footer-distributed .footer-right{\n\t\tdisplay: block;\n\t\twidth: 100%;\n\t\tmargin-bottom: 40px;\n\t\ttext-align: center;\n\t}\n\n\t.footer-distributed .footer-center i{\n\t\tmargin-left: 0;\n\t}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/foooter/foooter.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- The content of your page would go here. -->\n\n<footer class=\"footer-distributed\">\n\n<div class=\"center-headline\">\n        <h3>I Want to help</h3><h2>Design</h2><h3>The next big thing</h3>\n</div>\n\n  <div class=\"footer-left\">\n\n\n  <p class=\"footer-company-name\">More work here !</p>\n    <p class=\"footer-links\">\n      <a href=\"panda\">Panda</a>\n      .\n      <!-- <a routerLink=\"Sauron\">Sauron</a> -->\n      ·\n      <a routerLink=\"phyto\">Phyto-GP</a>\n      ·\n      <a routerLink=\"ui\">UI-Designs</a>\n      ·\n\n    </p>\n\n    <p class=\"footer-company-name\">Joseph copyright@2017</p>\n  </div>\n\n  <div class=\"footer-center\">\n\n    <div>\n      <i class=\"fa fa-map-marker\"></i>\n      <p>\n        <span>Joseph Wells</span>\n      </p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-phone\"></i>\n      <p>Contact me here</p>\n    </div>\n\n    <div>\n      <i class=\"fa fa-envelope\"></i>\n      <p>\n        <a href=\"https://www.linkedin.com/in/joseph-wells-0a4423b5\">Linkedin</a>\n      </p>\n\n    </div>\n\n  </div>\n\n  <div class=\"footer-right\">\n\n    <p class=\"footer-company-about\">\n\n      <span>What I'm doing</span>\n      looking for new Ventures!\n      <span>Information</span>\n      Anyways, hopefully you liked this!  As I would love to work with you on my next project.\n      <br>\n      <span>Currently Designing at Canstar PTY LTD</span>\n    </p>\n\n\n\n\n\n\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/foooter/foooter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FoooterComponent = (function () {
    function FoooterComponent() {
    }
    FoooterComponent.prototype.ngOnInit = function () {
    };
    return FoooterComponent;
}());
FoooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-foooter',
        template: __webpack_require__("../../../../../src/app/foooter/foooter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/foooter/foooter.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FoooterComponent);

//# sourceMappingURL=foooter.component.js.map

/***/ }),

/***/ "../../../../../src/app/friends/friends.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n    <div class=\"content-intro container\">\n      <h3>Shopping with friends</h3>\n      <h5>A Capstone University project</h5>\n  </div>\n</div>\n\n      <div class=\"header\">\n        <img src=\"../assets/images/layout.png\">\n      </div>\n\n      <div class=\"content\">\n          <div class=\"content-intro container\">\n            <h2>Brief</h2>\n            <p>\n                This project was a project I worked on while in my final Human centred design\n                minor subject while completing my bachelor in Information Technology at Queensland University\n                Technology.</p>\n          </div>\n          </div>\n\n\n\n      <div class=\"content\">\n          <div class=\"content-intro container\">\n            <h2>Information</h2>\n           <div class=\"col\">\n              <p>The scope of the project was to pick one of four categories including Elderly, book management, Scheduling and shopping. Once we had chosen the category of study, we then ventured to find a common problem with the topic chosen which I target \"shopping\". When reviewing problems\n               within the space! I soon decided to target the online market.\n          </p>\n          </div>\n          </div>\n          </div>\n\n          <div class=\"content\">\n            <div class=\"content-intro container\">\n              <h2>Validation</h2>\n              <p>\n                While in the validation stages, I conducted several research methods such as daily diary logs and User Interview primarily targeting students under the age of 25. After reading the diary logs and processing the target markets experiences using the online market space.\n                I found majority of our testers/participants involved in my studies have used the online market space for a form of procrastination, an excuse to escape the everyday stress off everyday challenges.\n            </p>\n            <p>\n                When Valiating this hypothesis, my research showed that online shopping is the NO.1 form of procarastination of young adults.\n                When validating this issue of procrastination I soon found that that the users that were involved on the online market space have faced a similar buying process. For example most of the user's mentioned that have brought items online and then followed the process of receiving either the\n                wrong order or have been sent the totally wrong item all together.\n            </p>\n            </div>\n            </div>\n\n\n            <div class=\"content\">\n                <div class=\"content-intro container\">\n                  <h2>Brainstorming</h2>\n                 <div class=\"col\">\n                  <p>\n                      During the Brainstorming phase, I collated all data from the previouse validation stage and wrote the\n                      important insights on sticky notes. When researching key insights that was written on sticky notes, I determined that the average 85% of customers that prefer to shop within the store prefer to be able to try on the clothes, as well as visualise the product in person.\n                </p>\n                <p>\n                    As for the average 85% of people that prefer the physical\n                     experience, 35% of the 85% would consider the new digital shopping\n                      experience, but neglect the experience because of the stressful process involved while shopping online.\n                </p>\n\n                  <p>\n                      That included entering their personal credentials online and the process of waiting for it to be shipped and arrive.\n                      I surveyed 22 students at the university about the process of the experience, and majority found it to be a stressful process and were afraid to buy something they can't try before purchasing.\n                    </p>\n                    </div>\n                </div>\n                </div>\n\n\n                <div class=\"preview\">\n                    <img src=\"../assets/images/process.png\">\n                  </div>\n\n                  <div class=\"preview\">\n                      <img src=\"../assets/images/process2.jpg\">\n                    </div>\n\n                    <div class=\"content\">\n                        <div class=\"content-intro container\">\n                          <h2>Low Fi- Mockups</h2>\n                          <p>\n                              Through the process of Design Thinking, sketching solutions and evaluating the key points that\n                              were developed in previous studies, I spoke about in the early stages of the project.\n                              I managed to design and develop a new digital solution/product that will fix\n                              previous negative research points and the overall user-experience while in the digital space.\n                        </p>\n                        <p>\n                            The idea around the new digital product was developed by picking the most important points explained\n                            early in the research such as the overall process, negative social aesthetics within previous\n                            experiences and being an unsociable activity.\n                        </p>\n                        </div>\n                        </div>\n\n                        <div class=\"preview\">\n                            <img src=\"../assets/images/process4.png\">\n                          </div>\n\n                          <div class=\"content\">\n                              <div class=\"content-intro container\">\n                                <h2>MVP - Mockups</h2>\n                                    <div class=\"col\">\n                                <p>\n                                    The final design is a social collaboration application that connects both the user and the digital space.\n                                    The new digital solution aims to create a new experience within both the physical environment and digital social environment.\n                                    The application combines social interaction, next generation camera technology, Physical Interactions and Augmented Reality.\n                                    The new design is not to replace the existing online market but, make the physical aspects of going shopping seamless and a fun in group experience were you can recieve group feedback on your choices from your friends.\n                                    </p>\n                              </div>\n                              </div>\n                              </div>\n                              <div class=\"header\">\n                                  <img src=\"../assets/images/layout.png\">\n                                </div>\n"

/***/ }),

/***/ "../../../../../src/app/friends/friends.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  padding: 150px 2rem; }\n\n.header-portfolio {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #141618; }\n\nimg {\n  height: cover;\n  width: 100% !important; }\n\n.banner {\n  padding: 150px 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/friends/friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsComponent = (function () {
    function FriendsComponent() {
    }
    FriendsComponent.prototype.ngOnInit = function () {
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-friends',
        template: __webpack_require__("../../../../../src/app/friends/friends.component.html"),
        styles: [__webpack_require__("../../../../../src/app/friends/friends.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FriendsComponent);

//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<header class=\"v-header container\">\n    <div class=\"fullscreen-video-wrap\">\n    <video src=\"../assets/images/cd.mp4\" controls muted></video>\n    </div>\n    <div class=\"header-overlay\">\n    </div>\n    <div class=\"header-content\">\n        <h1>I<span>'</span>m Joseph</h1>\n        <p>I think, design & sometimes develop :)</p>\n        <!-- <a href=\"#\" class=\"btn\">See more</a> -->\n        </div>\n    </header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\n.navigation {\n  background-color: transparent; }\n\n.header-image {\n  height: 100%;\n  width: 100%; }\n\np {\n  color: #fff;\n  letter-spacing: 1px;\n  line-height: 2rem; }\n\n.v-header {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: left;\n  color: #FFFFFF; }\n\n.container {\n  max-width: 960px;\n  margin-left: 0.5rem;\n  margin: auto;\n  text-align: left; }\n\n.fullscreen-video-wrap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  overflow: hidden; }\n\n.fullscreen-video-wrap video {\n  min-width: 100%;\n  min-height: 100%; }\n\n.header-overlay {\n  height: 100vh;\n  width: 100vw;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #225470;\n  z-index: 1;\n  opacity: 0.60; }\n\n.header-content {\n  z-index: 2; }\n\n.header-content h1 {\n  margin-bottom: 0; }\n\n.header-content p {\n  font-size: 1.2rem;\n  display: block;\n  padding-bottom: 2rem; }\n\n.btn {\n  background-color: #34b340;\n  color: #FFFFFF;\n  font-size: 1.2rem;\n  padding: 1rem 2rem;\n  text-decoration: none;\n  border-radius: 4px; }\n\n@media (max-width: 960px) {\n  .container {\n    padding-right: 2rem !important;\n    padding-left: 2rem !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.html":
/***/ (function(module, exports) {

module.exports = "<top-bar></top-bar>\n<app-header></app-header>\n<app-content></app-content>\n<a routerLink=\"sauron\"></a>\n<div class=\"body\">\n<router-outlet></router-outlet>\n</div>\n<app-foooter></app-foooter>\n"

/***/ }),

/***/ "../../../../../src/app/panda/panda.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"content\">\n\n  <div class=\"content-intro container\">\n\n  <div class=\"col-left\">\n\n    <h3>Panda</h3>\n    <h5>Transformation of\nan internal data\nplatform.</h5>\n\n</div>\n\n<div class=\"col-right\">\n\n  <img class=\"right-image\" src=\"/../../assets/images/Header-p.svg\">\n\n</div>\n\n<div class=\"clear\"></div>\n\n</div>\n</div>\n\n\n\n\n<div class=\"header-portfolio\">\n  <div class=\"header-portfolio-inner\">\n\n  </div>\n\n  <div class=\"content\" id=\"header\">\n\n    <div class=\"content-intro container\">\n\n    <div class=\"col-left\">\n\n      <h4>Anyways this<br>\n        is the Brief”</h4>\n      <p class=\"two-column\">\n          I was approached by head stakeholders to manage the overall design and experience for an internal application called Insight. This application at the time was quite bloaty, boring, slow and had no personality at all. So\n          I was instructed to take over the application and re-design the application to be more functional, fun and easy to use.\n      </p>\n\n  </div>\n\n  <div class=\"col-right\">\n    <p>\n    Key role\n</p>\n  <ul>\n    <li>Become the product designer of the product</li>\n    <li>Facilitated workshops, weekly user interviews about the products functionality and presented finalised designed solutions</li>\n    <li>Managed the overall feel of the application which resulted later to a re-design</li>\n  </ul>\n\n  </div>\n\n  <div class=\"clear\"></div>\n\n  </div>\n  </div>\n\n\n<div class=\"content-colour\">\n\n  <div class=\"content-intro container\">\n\n  <div class=\"col-left\">\n\n    <h2>What was <br>involved\"</h2>\n    <p class=\"two-column\">\n\n    </p>\n\n</div>\n\n<div class=\"col-right\">\n  <p>\nProcess\n</p>\n<ul>\n  <li>Research</li>\n  <li>Held Several Workshops with the product owners</li>\n  <li>Wire-frames</li>\n  <li>Journey Mapping</li>\n  <li>User-flows</li>\n  <li>App-flow designs</li>\n  <li>Style Guides</li>\n  <li>Whoala new Designs</li>\n</ul>\n\n</div>\n\n<div class=\"clear\"></div>\n\n</div>\n</div>\n\n<div class=\"content-colour\">\n  <div class=\"content-intro container\">\n  <div class=\"col-left\">\n    <h4>Before\n<br>Changes</h4>\n    <p class=\"two-column\">\n      The current application was quite bloated.\n    </p>\n    <p class=\"two-column\">\n      Product owners and majority of the employees\n      <br>found it confusing\n      and hard to navigate <br>to sections.\n    </p>\n\n    <p class=\"two-column\">\n      The overal application was just hard to use.\n    </p>\n</div>\n\n<div class=\"col-right\">\n\n  <img class=\"right-image\" id=\"new\" src=\"/../../assets/images/Problems-p.svg\">\n\n\n</div>\n\n<div class=\"clear\"></div>\n\n</div>\n</div>\n\n\n\n\n  <div class=\"content-colour\">\n\n    <div class=\"content-intro container\">\n\n    <div class=\"col-left\">\n\n      <h4>Approach</h4>\n      <p class=\"two-column\">\n        After kicking off the initial start of the project, I started to hold various weekly and daily meeting with each individual team member to find out what the everyday users didn't like\n        about the existing design, functionality and user-experince of the existing application.\n      </p>\n\n  </div>\n\n  <div class=\"col-right\">\n    <p>\n  Questions asked,\n  </p>\n  <ul>\n    <li>What were the current problems ?</li>\n    <li>What did you hate about the current data input process ?</li>\n    <li>Whats its like using the application on daily basis ?</li>\n  </ul>\n\n  </div>\n\n  <div class=\"clear\"></div>\n\n  </div>\n  </div>\n\n\n\n\n\n\n\n  <div class=\"content-colour\">\n\n    <div class=\"content-intro container\">\n\n    <div class=\"col-left\">\n\n      <h4>Research\"</h4>\n      <p class=\"two-column\">\n        After holding various interviews and workshops I finally had the information to support my re-design. Anyways see\n        below for the user-flow/wireframe preview of the re-design of the product management section of the new application.\n      </p>\n\n  </div>\n\n  <div class=\"col-right\">\n    <p>\n      What was envolved\n</p>\n  <ul>\n    <li>Re-visited past 2 application phases</li>\n    <li>Interviewed several employees for answers</li>\n  </ul>\n\n  </div>\n\n  <div class=\"clear\"></div>\n\n  </div>\n  </div>\n\n  <div class=\"header\">\n    <img src=\"../assets/images/pastp.svg\">\n  </div>\n\n\n<div class=\"content\" id=\"intro\">\n\n    <div class=\"content-intro container\">\n\n    <div class=\"col-left\">\n\n      <h5>Preview below<br>\n        for the updating products\n        userflow & App Flow :)</h5>\n\n\n  </div>\n\n\n\n  <div class=\"clear\"></div>\n\n  </div>\n  </div>\n\n\n\n\n\n\n    <div class=\"header\">\n      <img src=\"../assets/images/Product data user-flow.svg\">\n    </div>\n\n    <div class=\"content\" id=\"preview\">\n\n        <div class=\"content-intro container\">\n\n        <div class=\"col-left\">\n\n          <h5>From User-flows<br>\n          Sketches to Wire-frames</h5>\n\n\n      </div>\n\n\n\n      <div class=\"clear\"></div>\n\n      </div>\n      </div>\n\n    <div class=\"header\">\n      <img src=\"../assets/images/Product Data Wireframe.svg\">\n    </div>\n\n    <div class=\"header\">\n      <img src=\"../assets/images/Productup.svg\">\n    </div>\n\n\n    <div class=\"content-colour\">\n\n      <div class=\"content-intro container\">\n\n      <div class=\"col-left\">\n\n        <h4>Much more</h4>\n        <p class=\"two-column\">\n          Hopefully you like the short case study above and the approach I took.\n          If you keep scrolling you will see little bit more below :)\n\n        </p>\n\n    </div>\n\n    <div class=\"col-right\">\n      <p>\n        What was envolved,\n    </p>\n    <ul>\n      <li>Audit processing section</li>\n      <li>Rest of the Product management sections</li>\n      <li>Clients preview section</li>\n      <li>Loading screens, interactions and illustrations</li>\n\n    </ul>\n\n    </div>\n\n    <div class=\"clear\"></div>\n\n    </div>\n    </div>\n\n      <div class=\"header\">\n        <img src=\"../assets/images/visual.svg\">\n      </div>\n\n\n      <div class=\"content-colour\">\n        <div class=\"content-intro container\">\n        <div class=\"col-left\">\n          <h4>Illustrations\n& <br>Emotion</h4>\n          <p class=\"two-column\">\n          While designing this product, I  wanted to create a quirky and not so boring experience by designing a bunch of illustrations that affect the emotions.\n          </p>\n\n      </div>\n\n      <div class=\"col-right\">\n\n        <img class=\"right-image-colour\" src=\"/../../assets/images/faces.svg\">\n\n\n      </div>\n\n      <div class=\"clear\"></div>\n\n      </div>\n      </div>\n\n      <div class=\"header\">\n        <img src=\"../assets/images/logo.svg\">\n      </div>\n\n      <div class=\"content-colour\">\n        <div class=\"content-intro container\">\n        <div class=\"col-left\">\n          <h4>404 pages</h4>\n          <p class=\"two-column\">\n          When re-designing the product I found that the existing product didn’t have error screens.\n          So in the new created Panda I wanted to give the users error screens.\n          </p>\n\n      </div>\n\n      <div class=\"col-right\">\n\n        <img class=\"right-image-colour\" src=\"/../../assets/images/404.svg\">\n\n\n      </div>\n\n      <div class=\"clear\"></div>\n\n      </div>\n      </div>\n\n      <div class=\"header\">\n        <img src=\"../assets/images/alertp.svg\">\n      </div>\n\n\n      <div class=\"header\">\n        <img src=\"../assets/images/system.svg\">\n      </div>\n\n      <div class=\"content-colour\">\n        <div class=\"content-intro container\">\n        <div class=\"col-left\">\n          <h4>New Login Screen</h4>\n          <p class=\"two-column\">\n\n          </p>\n\n      </div>\n\n      <div class=\"col-right\">\n\n        <img class=\"right-image-colour\" src=\"/../../assets/images/login.svg\">\n\n\n      </div>\n\n      <div class=\"clear\"></div>\n\n      </div>\n      </div>\n\n      <div class=\"content-colour\">\n        <div class=\"content-intro container\">\n        <div class=\"col-left\">\n          <h4>Wholaa’ we turned a cluttered, boring and confusing data input software into a beautiful software’....</h4>\n\n      </div>\n\n      <div class=\"col-right\">\n\n\n\n      </div>\n\n      <div class=\"clear\"></div>\n\n      </div>\n      </div>\n\n      <div class=\"header\">\n        <img src=\"../assets/images/p8.jpeg\">\n      </div>\n\n\n            <div class=\"header\">\n              <img src=\"../assets/images/screens.svg\">\n            </div>\n"

/***/ }),

/***/ "../../../../../src/app/panda/panda.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#intro {\n  height: 100vh;\n  width: 100%;\n  background-image: url(\"/assets/images/desk2.JPG\");\n  background-size: cover;\n  padding: 150px 2rem;\n  color: #ffffff;\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%); }\n\n#preview {\n  height: 100vh;\n  width: 100%;\n  background-image: url(\"/assets/images/sketch.jpg\");\n  background-size: cover;\n  padding: 150px 2rem;\n  color: #ffffff;\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%); }\n\n.content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background-size: cover;\n  padding: 150px 2rem;\n  background: transform(skew(0deg, -10deg)); }\n\n#header {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background-image: url(\"/assets/images/pandab.svg\");\n  background-size: cover;\n  padding: 150px 2rem;\n  color: #ffffff; }\n\n#about {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background-image: url(\"/assets/images/confeti.svg\");\n  background-size: cover;\n  padding: 150px 2rem; }\n\n#header h4 {\n  font-size: 60px; }\n\nh4 {\n  color: #98DEE3; }\n\n.content-colour {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background-color: #333333;\n  background-size: cover;\n  padding: 150px 2rem;\n  color: #ffffff !important; }\n\n#header p {\n  color: #ffffff; }\n\n.content-colour p {\n  color: #ffffff; }\n\n.header-portfolio {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #141618; }\n\nimg {\n  height: cover;\n  width: 100% !important; }\n\n.banner {\n  padding: 150px 2rem; }\n\n.right-image {\n  box-shadow: 0 4px 4px 0 rgba(92, 96, 110, 0.05);\n  overflow-y: hidden;\n  border-radius: 10px;\n  width: auto !important;\n  margin-right: -200px;\n  margin-top: 8px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  margin: -300px 0 0 -190px; }\n\n.right-image-colour {\n  box-shadow: 0 4px 4px 0 rgba(92, 96, 110, 0.05);\n  overflow-y: hidden;\n  border-radius: 10px;\n  width: 1300px;\n  margin-right: -200px;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  position: relative;\n  margin: 0 0 0; }\n\n#new {\n  margin-top: -300px; }\n\n@media screen and (max-width: 800px) {\n  .right-image {\n    box-shadow: 0 4px 4px 0 rgba(92, 96, 110, 0.05);\n    overflow-y: hidden;\n    border-radius: 10px;\n    width: 330px !important;\n    margin-right: -200px;\n    margin-top: 8px;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    position: relative;\n    margin: 0 0 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/panda/panda.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PandaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PandaComponent = (function () {
    function PandaComponent() {
    }
    PandaComponent.prototype.ngOnInit = function () {
    };
    return PandaComponent;
}());
PandaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-panda',
        template: __webpack_require__("../../../../../src/app/panda/panda.component.html"),
        styles: [__webpack_require__("../../../../../src/app/panda/panda.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PandaComponent);

//# sourceMappingURL=panda.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"content\">\n    <div class=\"content-intro container\">\n      <h4>Ahh I see your interested<span>,</span></h4>\n          <p>Keep reading </p>\n\n    </div>\n    </div>\n\n\n    <div class=\"header\">\n      <img src=\"../assets/images/desk.jpg\">\n    </div>\n\n\n\n\n    <div class=\"content\">\n\n      <div class=\"content-intro container\">\n\n      <div class=\"col-left\">\n\n        <img class=\"left-image\" src=\"/../../assets/images/me.JPG\">\n\n    </div>\n\n    <div class=\"col-right\">\n    <p>\n      I am a designer that has pivoted from interest like Architecture, Web Design, and Business while undergoing my tertiary studies.\n    </p>\n\n    <p>\n      Current status! over the past 1 half years, I have been happily pursuing a career where I can design think, scribble on whiteboards, design for user problems and also be part of a huge culture of future thinkers that will create our future digital experiences.\n    </p>\n      Ahh I forgot to mention also, I like listening to anything chill while researching and designing. My hobies include long skate trips along the beach, music, design, Architurual things and love to take photos in my own time.\n    </div>\n\n    <div class=\"clear\"></div>\n\n  </div>\n</div>\n\n\n\n    <div class=\"content\">\n\n      <div class=\"content-intro container\">\n\n\n</div>\n</div>\n\n\n<div class=\"header\">\n  <img src=\"../assets/images/sketch.jpg\">\n</div>\n\n\n\n\n\n<div class=\"content\">\n    <div class=\"content-intro container\">\n      <h4>Here is my design journey<span>,</span></h4>\n      <h2>Experience</h2>\n      <span>-</span>\n    </div>\n    </div>\n\n    <div class=\"content\">\n\n      <div class=\"content-intro container\">\n\n      <div class=\"col-left\">\n            <h4>work -</h4>\n    </div>\n\n    <div class=\"col-right\">\n        Jnr UX-UI Designer\n        <p>Canstar PTY LTD Brisbane Aug 17- current</p>\n          <br>\n        Jnr Digital Producer CRO/UX\n        <p>Canstar PTY LTD Brisbane Jun 16 - Aug 17</p>\n            <br>\n            Freelance UX/UI consultant\n            <p>Phyto Inc. August 17 - Oct 17</p>\n            <br>\n            Juniour Digital Strategist\n            <p>Orange Digital Jun 16 - July 16</p>\n            <br>\n            UX/ UI Design Student Intern\n            <p>Orange Digital May 16 - Jun 16</p>\n            <br>\n            Casual Juniour Front End Developer\n            <p>Cancer Council Queensland Jan 16 - March 16</p>\n    </div>\n    <div class=\"clear\"></div>\n\n    <div class=\"col-left\">\n          <h4>Other-</h4>\n  </div>\n  <div class=\"col-right\">\n      Mentor Designer (Canstar sponsored)\n      <p>UQ Weekend of start-ups 2017</p>\n        <br>\n      UX-UI Designer Contestant\n      <p>CUA Hackathon 2017 - Yomo Project</p>\n          <br>2\n          UX-Research Contestant\n          <p>BOQ Hackathon 2017 - Dash app Project</p>\n          <br>\n          Volunteer Front-End Developer\n          <p>Cancer Council Queensland - Throughout 2015</p>\n\n  </div>\n    <div class=\"clear\"></div>\n  </div>\n</div>\n\n\n\n\n<div class=\"content\">\n    <div class=\"content-intro container\">\n      <h4>Connect with me on linkedin here<span>,</span></h4>\n      <a class=\"btn\"  href=\"https://www.linkedin.com/in/joseph-wells-0a4423b5\" title=\"Relevant Title\">Linkedin.</a>\n  <div class=\"clear\"></div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/r-background.svg") + ");\n  background-size: cover;\n  padding: 150px 2rem; }\n\n.content-colour p {\n  color: #ffffff; }\n\n.header-portfolio {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #141618; }\n\n.left-image {\n  height: cover;\n  width: 300px !important;\n  float: left;\n  border-radius: 2.5px;\n  padding-bottom: 50px;\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%); }\n\nimg {\n  -webkit-filter: grayscale(100%);\n  /* Safari 6.0 - 9.0 */\n  filter: grayscale(100%); }\n\n.banner {\n  padding: 150px 2rem; }\n\n.btn {\n  border: none;\n  background-color: inherit;\n  padding: 14px 28px;\n  font-size: 16px;\n  cursor: pointer;\n  display: inline-block;\n  color: #333333;\n  /* Safari */\n  transition-duration: 0.4s; }\n\n/* On mouse-over */\n.btn:hover {\n  background: #0073b1;\n  color: #ffffff; }\n\n.btn:target {\n  color: #FFFFFF;\n  background-color: greenyellow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'resume',
        template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resume/resume.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/app/sauron/sauron.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"content\">\n      <div class=\"content-intro container\">\n        <h3>Sauron</h3>\n        <h5>Enabling company workflow metrics</h5>\n    </div>\n  </div>\n\n    <div class=\"header-portfolio\">\n      <div class=\"header-portfolio-inner\">\n          <img src=\"../assets/images/sauranfinal2.png\">\n        </div>\n\n    </div>\n\n\n\n        <div class=\"content\" style=\"background-color:#FFFFFF\">\n            <div class=\"content-intro container\">\n\n\n              <h2>Brief</h2>\n\n              <p style=\"color:#000;\">\n                  I was asked by Head stakeholders to design an application that enables them to be able to overview important company internal metrics.\n              </p>\n                  <p>\n                     Cons\n                  </p>\n                     <ul style=\"color:#000000;\">\n                        <li>Wasn’t aloud to waste anyones time. </li>\n                        <li>Wasn’t aloud to interview the executives through the research phase.</li>\n                        </ul>\n\n            </div>\n            </div>\n\n          <div class=\"content\">\n              <div class=\"content-intro container\">\n                <h2>Research</h2>\n\n                <p>\n                    After kicking off the initial start of the project, the first thing I wanted to do was approach the potential users and ask questions.\n                    As I wasn’t allowed to approach the users, I thought the next big thing would be to contact the PA or someone that may work close to that teams stakeholder.\n                      </p>\n\n                      <p>\n                           Questions asked,\n                        </p>\n                  <ul>\n                      <li>What sort of metrics do you guys oversee every day?</li>\n                      <li>Whats the most common metric related question there stakeholders ask?</li>\n                      <li>What tools and applications are used track metrics?</li>\n\n                  </ul>\n\n                  </div>\n                </div>\n\n                      <div class=\"header\">\n                          <img src=\"../assets/images/wall.jpg\">\n                        </div>\n\n                        <div class=\"content\" style=\"background-color:#ffffff;\">\n                            <div class=\"content-intro container\">\n                              <h2>API Access</h2>\n                              <p>\n                                  After finalising the information I started to try and figure out data points, as well as see if it was possible to collect these important metrics via existing individual teams applications API’s.\n                                </p>\n                                <ul>\n                                    <li>Data around website metrics</li>\n                                    <li>Our internal development process and status</li>\n\n\n                                </ul>\n                            </div>\n                            </div>\n\n\n                        <div class=\"content\">\n                            <div class=\"content-intro container\">\n                              <h2>After Reviewing</h2>\n\n                                <p>\n                                    After gathering all the opertunities and the data points I started to create individual persona’s for each category of executive that would make use of this dashboard                                    </p>\n                                        </div>\n\n                            </div>\n                            <div class=\"header\">\n                                <img src=\"../assets/images/Persona's.png\">\n                              </div>\n\n\n\n                                <div class=\"header\">\n                                    <img src=\"../assets/images/wireframes.png\">\n                                  </div>\n\n                                  <div class=\"content\">\n                                      <div class=\"content-intro container\">\n                                        <h2>User-testing</h2>\n\n                                        <p>After designing the wireframes/low-fi prototype I ventured to test internal users</p>\n\n                                         <p>\n                                            Questions I asked !\n                                           </p>\n                                           <ul>\n                                              <li>What they liked about the application so far!</li>\n                                              <li>What data points they liked!</li>\n                                              <li>What could I do to improve the exp?</li>\n                                          </ul>\n\n\n                                      </div>\n                                      </div>\n\n                                      <div class=\"content\">\n                                          <div class=\"content-intro container\">\n\n                                            <h5>Please keep in mind this is my first dashboard design and practice makes perfect :)</h5>\n\n\n                                          </div>\n                                          </div>\n\n                                          <div class=\"header\">\n                                              <img src=\"../assets/images/itterations.png\">\n                                            </div>\n\n                                            <div class=\"content\">\n                                                <div class=\"content-intro container\">\n\n                                                  <h5>After conducting the user tests, research and whole lot of\n                                                    Itterations I had a final MVP I could present to the Stakeholders for feedback</h5>\n\n\n                                                </div>\n                                                </div>\n\n                                            <div class=\"header\">\n                                                <img src=\"../assets/images/Sauron-testing.png\">\n                                              </div>\n\n                                               <div class=\"content\">\n                                                <div class=\"content-intro container\">\n                                                  <h2>Feedback Given<span>.</span></h2>\n\n                                                  <p>\n                                                      Feedback Given\n                                                     </p>\n                                                     <ul>\n                                                        <li>Doesn’t show percentages of developer resources and we want this!</li>\n                                                        <li>White is really strong on the eyes and hard to visibly see the data</li>\n                                                        <li>Mentioned they didn’t notice the Set and Delivered tasks data</li>\n                                                        <li>Wanted to see a number of tasks in DOR “Definition of ready</li>\n                                                        <li>Wanted to see not just current but past sprint information</li>\n                                                        <li>Wants to see a clearer progress bar in the sprint section</li>\n                                                        <li>Wants to know what tasks have been replaced</li>\n                                                        <li>hey wanted to see the new sprint name not old…</li>\n                                                    </ul>\n\n\n                                                </div>\n                                                </div>\n\n                                                <div class=\"content\">\n                                                    <div class=\"content-intro container\">\n\n                                                      <h5>Anyways after itterations, consultations and constant research!\n                                                        I managed to design a final product that the executives were happy with !</h5>\n\n\n                                                    </div>\n                                                    </div>\n\n\n\n\n\n\n                                                            <div class=\"header\">\n\n                                                                <img src=\"../assets/images/Sauron-layout.png\">\n                                                              </div>\n"

/***/ }),

/***/ "../../../../../src/app/sauron/sauron.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  background: #FFFFFF;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #FFFFFF, #Fefefe);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  background-image: url(\"/assets/images/background.svg\");\n  padding: 150px 2rem; }\n\n.header-portfolio {\n  width: 100%;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #141618; }\n\nimg {\n  height: cover;\n  width: 100% !important; }\n\n.banner {\n  padding: 150px 2rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sauron/sauron.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SauronComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SauronComponent = (function () {
    function SauronComponent() {
    }
    SauronComponent.prototype.ngOnInit = function () {
    };
    return SauronComponent;
}());
SauronComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sauron',
        template: __webpack_require__("../../../../../src/app/sauron/sauron.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sauron/sauron.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SauronComponent);

//# sourceMappingURL=sauron.component.js.map

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopBarComponent = (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'top-bar',
        template: __webpack_require__("../../../../../src/app/top-bar/top-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top-bar/top-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TopBarComponent);

//# sourceMappingURL=top-bar.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/background.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background.68be73349778f2598c3f.svg";

/***/ }),

/***/ "../../../../../src/assets/images/r-background.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "r-background.645d77e9abfa7f096d1d.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map