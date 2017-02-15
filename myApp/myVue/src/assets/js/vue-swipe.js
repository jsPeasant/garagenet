(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSwipe"] = factory();
	else
		root["VueSwipe"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SwipeItem = exports.Swipe = undefined;

	var _swipe = __webpack_require__(1);

	var _swipe2 = _interopRequireDefault(_swipe);

	var _swipeItem = __webpack_require__(10);

	var _swipeItem2 = _interopRequireDefault(_swipeItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Swipe = _swipe2.default;
	exports.SwipeItem = _swipeItem2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* styles */
	__webpack_require__(2)

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\git\\vue-swipe\\src\\swipe.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-0127e9f7", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-0127e9f7", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] swipe.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _event = __webpack_require__(7);

	var _class = __webpack_require__(8);

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'mt-swipe',

	  created: function created() {
	    this.dragState = {};
	  },
	  data: function data() {
	    return {
	      ready: false,
	      dragging: false,
	      userScrolling: false,
	      animating: false,
	      index: 0,
	      pages: [],
	      timer: null,
	      reInitTimer: null,
	      noDrag: false
	    };
	  },


	  props: {
	    speed: {
	      type: Number,
	      default: 300
	    },

	    auto: {
	      type: Number,
	      default: 3000
	    },

	    continuous: {
	      type: Boolean,
	      default: true
	    },

	    showIndicators: {
	      type: Boolean,
	      default: true
	    },

	    noDragWhenSingle: {
	      type: Boolean,
	      default: true
	    },

	    prevent: {
	      type: Boolean,
	      default: false
	    }
	  },

	  methods: {
	    swipeItemCreated: function swipeItemCreated() {
	      var _this = this;

	      if (!this.ready) return;

	      clearTimeout(this.reInitTimer);
	      this.reInitTimer = setTimeout(function () {
	        _this.reInitPages();
	      }, 100);
	    },
	    swipeItemDestroyed: function swipeItemDestroyed() {
	      var _this2 = this;

	      if (!this.ready) return;

	      clearTimeout(this.reInitTimer);
	      this.reInitTimer = setTimeout(function () {
	        _this2.reInitPages();
	      }, 100);
	    },
	    translate: function translate(element, offset, speed, callback) {
	      var _this3 = this,
	          _arguments = arguments;

	      if (speed) {
	        this.animating = true;
	        element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
	        setTimeout(function () {
	          element.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
	        }, 50);

	        var called = false;

	        var transitionEndCallback = function transitionEndCallback() {
	          if (called) return;
	          called = true;
	          _this3.animating = false;
	          element.style.webkitTransition = '';
	          element.style.webkitTransform = '';
	          if (callback) {
	            callback.apply(_this3, _arguments);
	          }
	        };

	        (0, _event.once)(element, 'webkitTransitionEnd', transitionEndCallback);
	        setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
	      } else {
	        element.style.webkitTransition = '';
	        element.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
	      }
	    },
	    reInitPages: function reInitPages() {
	      var children = this.$children;
	      this.noDrag = children.length === 1 && this.noDragWhenSingle;

	      var pages = [];
	      this.index = 0;

	      children.forEach(function (child, index) {
	        pages.push(child.$el);

	        (0, _class.removeClass)(child.$el, 'is-active');

	        if (index === 0) {
	          (0, _class.addClass)(child.$el, 'is-active');
	        }
	      });

	      this.pages = pages;
	    },
	    doAnimate: function doAnimate(towards, options) {
	      var _this4 = this;

	      if (this.$children.length === 0) return;
	      if (!options && this.$children.length < 2) return;

	      var prevPage, nextPage, currentPage, pageWidth, offsetLeft;
	      var speed = this.speed || 300;
	      var index = this.index;
	      var pages = this.pages;
	      var pageCount = pages.length;

	      if (!options) {
	        pageWidth = this.$el.clientWidth;
	        currentPage = pages[index];
	        prevPage = pages[index - 1];
	        nextPage = pages[index + 1];
	        if (this.continuous && pages.length > 1) {
	          if (!prevPage) {
	            prevPage = pages[pages.length - 1];
	          }
	          if (!nextPage) {
	            nextPage = pages[0];
	          }
	        }
	        if (prevPage) {
	          prevPage.style.display = 'block';
	          this.translate(prevPage, -pageWidth);
	        }
	        if (nextPage) {
	          nextPage.style.display = 'block';
	          this.translate(nextPage, pageWidth);
	        }
	      } else {
	        prevPage = options.prevPage;
	        currentPage = options.currentPage;
	        nextPage = options.nextPage;
	        pageWidth = options.pageWidth;
	        offsetLeft = options.offsetLeft;
	      }

	      var newIndex;

	      var oldPage = this.$children[index].$el;

	      if (towards === 'prev') {
	        if (index > 0) {
	          newIndex = index - 1;
	        }
	        if (this.continuous && index === 0) {
	          newIndex = pageCount - 1;
	        }
	      } else if (towards === 'next') {
	        if (index < pageCount - 1) {
	          newIndex = index + 1;
	        }
	        if (this.continuous && index === pageCount - 1) {
	          newIndex = 0;
	        }
	      }

	      var callback = function callback() {
	        if (newIndex !== undefined) {
	          var newPage = _this4.$children[newIndex].$el;
	          (0, _class.removeClass)(oldPage, 'is-active');
	          (0, _class.addClass)(newPage, 'is-active');

	          _this4.index = newIndex;
	        }

	        if (prevPage) {
	          prevPage.style.display = '';
	        }

	        if (nextPage) {
	          nextPage.style.display = '';
	        }
	      };

	      setTimeout(function () {
	        if (towards === 'next') {
	          _this4.translate(currentPage, -pageWidth, speed, callback);
	          if (nextPage) {
	            _this4.translate(nextPage, 0, speed);
	          }
	        } else if (towards === 'prev') {
	          _this4.translate(currentPage, pageWidth, speed, callback);
	          if (prevPage) {
	            _this4.translate(prevPage, 0, speed);
	          }
	        } else {
	          _this4.translate(currentPage, 0, speed, callback);
	          if (typeof offsetLeft !== 'undefined') {
	            if (prevPage && offsetLeft > 0) {
	              _this4.translate(prevPage, pageWidth * -1, speed);
	            }
	            if (nextPage && offsetLeft < 0) {
	              _this4.translate(nextPage, pageWidth, speed);
	            }
	          } else {
	            if (prevPage) {
	              _this4.translate(prevPage, pageWidth * -1, speed);
	            }
	            if (nextPage) {
	              _this4.translate(nextPage, pageWidth, speed);
	            }
	          }
	        }
	      }, 10);
	    },
	    next: function next() {
	      this.doAnimate('next');
	    },
	    prev: function prev() {
	      this.doAnimate('prev');
	    },
	    doOnTouchStart: function doOnTouchStart(event) {
	      if (this.noDrag) return;

	      var element = this.$el;
	      var dragState = this.dragState;
	      var touch = event.touches[0];

	      dragState.startTime = new Date();
	      dragState.startLeft = touch.pageX;
	      dragState.startTop = touch.pageY;
	      dragState.startTopAbsolute = touch.clientY;

	      dragState.pageWidth = element.offsetWidth;
	      dragState.pageHeight = element.offsetHeight;

	      var prevPage = this.$children[this.index - 1];
	      var dragPage = this.$children[this.index];
	      var nextPage = this.$children[this.index + 1];

	      if (this.continuous && this.pages.length > 1) {
	        if (!prevPage) {
	          prevPage = this.$children[this.$children.length - 1];
	        }
	        if (!nextPage) {
	          nextPage = this.$children[0];
	        }
	      }

	      dragState.prevPage = prevPage ? prevPage.$el : null;
	      dragState.dragPage = dragPage ? dragPage.$el : null;
	      dragState.nextPage = nextPage ? nextPage.$el : null;

	      if (dragState.prevPage) {
	        dragState.prevPage.style.display = 'block';
	      }

	      if (dragState.nextPage) {
	        dragState.nextPage.style.display = 'block';
	      }
	    },
	    doOnTouchMove: function doOnTouchMove(event) {
	      if (this.noDrag) return;

	      var dragState = this.dragState;
	      var touch = event.touches[0];

	      dragState.currentLeft = touch.pageX;
	      dragState.currentTop = touch.pageY;
	      dragState.currentTopAbsolute = touch.clientY;

	      var offsetLeft = dragState.currentLeft - dragState.startLeft;
	      var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;

	      var distanceX = Math.abs(offsetLeft);
	      var distanceY = Math.abs(offsetTop);
	      if (distanceX < 5 || distanceX >= 5 && distanceY >= 1.73 * distanceX) {
	        this.userScrolling = true;
	        return;
	      } else {
	        this.userScrolling = false;
	        event.preventDefault();
	      }
	      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);

	      var towards = offsetLeft < 0 ? 'next' : 'prev';

	      if (dragState.prevPage && towards === 'prev') {
	        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
	      }
	      this.translate(dragState.dragPage, offsetLeft);
	      if (dragState.nextPage && towards === 'next') {
	        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
	      }
	    },
	    doOnTouchEnd: function doOnTouchEnd() {
	      if (this.noDrag) return;

	      var dragState = this.dragState;

	      var dragDuration = new Date() - dragState.startTime;
	      var towards = null;

	      var offsetLeft = dragState.currentLeft - dragState.startLeft;
	      var offsetTop = dragState.currentTop - dragState.startTop;
	      var pageWidth = dragState.pageWidth;
	      var index = this.index;
	      var pageCount = this.pages.length;

	      if (dragDuration < 300) {
	        var fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;
	        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
	          fireTap = true;
	        }
	        if (fireTap) {
	          this.$children[this.index].$emit('tap');
	        }
	      }

	      if (dragDuration < 300 && dragState.currentLeft === undefined) return;

	      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
	        towards = offsetLeft < 0 ? 'next' : 'prev';
	      }

	      if (!this.continuous) {
	        if (index === 0 && towards === 'prev' || index === pageCount - 1 && towards === 'next') {
	          towards = null;
	        }
	      }

	      if (this.$children.length < 2) {
	        towards = null;
	      }

	      this.doAnimate(towards, {
	        offsetLeft: offsetLeft,
	        pageWidth: dragState.pageWidth,
	        prevPage: dragState.prevPage,
	        currentPage: dragState.dragPage,
	        nextPage: dragState.nextPage
	      });

	      this.dragState = {};
	    }
	  },

	  destroyed: function destroyed() {
	    if (this.timer) {
	      clearInterval(this.timer);
	      this.timer = null;
	    }
	    if (this.reInitTimer) {
	      clearTimeout(this.reInitTimer);
	      this.reInitTimer = null;
	    }
	  },
	  mounted: function mounted() {
	    var _this5 = this;

	    this.ready = true;

	    if (this.auto > 0) {
	      this.timer = setInterval(function () {
	        if (!_this5.dragging && !_this5.animating) {
	          _this5.next();
	        }
	      }, this.auto);
	    }

	    this.reInitPages();

	    var element = this.$el;

	    element.addEventListener('touchstart', function (event) {
	      if (_this5.prevent) {
	        event.preventDefault();
	      }
	      if (_this5.animating) return;
	      _this5.dragging = true;
	      _this5.userScrolling = false;
	      _this5.doOnTouchStart(event);
	    });

	    element.addEventListener('touchmove', function (event) {
	      if (!_this5.dragging) return;
	      _this5.doOnTouchMove(event);
	    });

	    element.addEventListener('touchend', function (event) {
	      if (_this5.userScrolling) {
	        _this5.dragging = false;
	        _this5.dragState = {};
	        return;
	      }
	      if (!_this5.dragging) return;
	      _this5.doOnTouchEnd(event);
	      _this5.dragging = false;
	    });
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var bindEvent = function () {
	  if (document.addEventListener) {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.addEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event && handler) {
	        element.attachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	var unbindEvent = function () {
	  if (document.removeEventListener) {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.removeEventListener(event, handler, false);
	      }
	    };
	  } else {
	    return function (element, event, handler) {
	      if (element && event) {
	        element.detachEvent('on' + event, handler);
	      }
	    };
	  }
	}();

	var bindOnce = function bindOnce(el, event, fn) {
	  var listener = function listener() {
	    if (fn) {
	      fn.apply(this, arguments);
	    }
	    unbindEvent(el, event, listener);
	  };
	  bindEvent(el, event, listener);
	};

	module.exports = {
	  on: bindEvent,
	  off: unbindEvent,
	  once: bindOnce
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var trim = function trim(string) {
	  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
	};

	var hasClass = function hasClass(el, cls) {
	  if (!el || !cls) return false;
	  if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
	  if (el.classList) {
	    return el.classList.contains(cls);
	  } else {
	    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	  }
	};

	var addClass = function addClass(el, cls) {
	  if (!el) return;
	  var curClass = el.className;
	  var classes = (cls || '').split(' ');

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.add(clsName);
	    } else {
	      if (!hasClass(el, clsName)) {
	        curClass += ' ' + clsName;
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = curClass;
	  }
	};

	var removeClass = function removeClass(el, cls) {
	  if (!el || !cls) return;
	  var classes = cls.split(' ');
	  var curClass = ' ' + el.className + ' ';

	  for (var i = 0, j = classes.length; i < j; i++) {
	    var clsName = classes[i];
	    if (!clsName) continue;

	    if (el.classList) {
	      el.classList.remove(clsName);
	    } else {
	      if (hasClass(el, clsName)) {
	        curClass = curClass.replace(' ' + clsName + ' ', ' ');
	      }
	    }
	  }
	  if (!el.classList) {
	    el.className = trim(curClass);
	  }
	};

	module.exports = {
	  hasClass: hasClass,
	  addClass: addClass,
	  removeClass: removeClass
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mint-swipe"
	  }, [_h('div', {
	    ref: "wrap",
	    staticClass: "mint-swipe-items-wrap"
	  }, [_t("default")]), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (showIndicators),
	      expression: "showIndicators"
	    }],
	    staticClass: "mint-swipe-indicators"
	  }, [_l((pages), function(page, $index) {
	    return _h('div', {
	      staticClass: "mint-swipe-indicator",
	      class: {
	        'is-active': $index === index
	      }
	    })
	  })])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0127e9f7", module.exports)
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\git\\vue-swipe\\src\\swipe-item.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5749094e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5749094e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] swipe-item.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'mt-swipe-item',

	  mounted: function mounted() {
	    this.$parent && this.$parent.swipeItemCreated(this);
	  },
	  destroyed: function destroyed() {
	    this.$parent && this.$parent.swipeItemDestroyed(this);
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "mint-swipe-item"
	  }, [_t("default")])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5749094e", module.exports)
	  }
	}

/***/ }
/******/ ])
});
;