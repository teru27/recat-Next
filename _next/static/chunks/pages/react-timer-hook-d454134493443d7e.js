(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[247],{3433:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react-timer-hook",function(){return __webpack_require__(8843)}])},8843:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return App}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),react_timer_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3751);function MyStopwatch(){let{seconds,minutes,hours,days,isRunning,start,pause,reset}=(0,react_timer_hook__WEBPACK_IMPORTED_MODULE_2__.useStopwatch)({autoStart:!1}),[defaultTime,setDefaultTime]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(30),[time,setTime]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultTime);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(0===time){pause();return}setTime(defaultTime-seconds)},[seconds]);let startEvent=()=>{0===time&&(setTime(defaultTime),reset()),start()},resetEvent=()=>{setTime(defaultTime),reset()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{textAlign:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{style:{fontSize:"100px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:days}),":",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:hours}),":",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:minutes}),":",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:time})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:isRunning?"Running":"Not running"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:startEvent,children:"Start"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:pause,children:"Pause"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:resetEvent,children:"Reset"})]})}function App(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MyStopwatch,{})})}},3751:function(module,__unused_webpack_exports,__webpack_require__){var e;"undefined"!=typeof self&&self,module.exports=(e=__webpack_require__(7294),(()=>{"use strict";var t={156(t){t.exports=e}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var s=r[e]={exports:{}};return t[e](s,s.exports,o),s.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.r(n),o.d(n,{default:()=>l,useStopwatch:()=>u,useTime:()=>m,useTimer:()=>c});var e=o(156);class t{static expiryTimestamp(e){let t=new Date(e).getTime()>0;return t||console.warn("react-timer-hook: { useTimer } Invalid expiryTimestamp settings",e),t}static onExpire(e){let t=e&&"function"==typeof e;return e&&!t&&console.warn("react-timer-hook: { useTimer } Invalid onExpire settings function",e),t}}class r{static getTimeFromSeconds(e){let t=Math.ceil(e);return{totalSeconds:t,seconds:Math.floor(t%60),minutes:Math.floor(t%3600/60),hours:Math.floor(t%86400/3600),days:Math.floor(t/86400)}}static getSecondsFromExpiry(e,t){let r=e-(new Date).getTime();if(r>0){let e1=r/1e3;return t?Math.round(e1):e1}return 0}static getSecondsFromPrevTime(e,t){let r=(new Date).getTime()-e;if(r>0){let e1=r/1e3;return t?Math.round(e1):e1}return 0}static getSecondsFromTimeNow(){let e=new Date;return e.getTime()/1e3-60*e.getTimezoneOffset()}static getFormattedTimeFromSeconds(e,t){let{seconds:o,minutes:n,hours:s}=r.getTimeFromSeconds(e),i="",a=s;return"12-hour"===t&&(i=s>=12?"pm":"am",a=s%12),{seconds:o,minutes:n,hours:a,ampm:i}}}function s(t,r){let o=(0,e.useRef)();(0,e.useEffect)(()=>{o.current=t}),(0,e.useEffect)(()=>{if(!r)return()=>{};let e=setInterval(()=>{o.current&&o.current()},r);return()=>clearInterval(e)},[r])}function a(e){if(!t.expiryTimestamp(e))return null;let o=r.getSecondsFromExpiry(e),n=Math.floor(1e3*(o-Math.floor(o)));return n>0?n:1e3}function c(){let{expiryTimestamp:o,onExpire:n,autoStart:c=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[u,m]=(0,e.useState)(o),[l,d]=(0,e.useState)(r.getSecondsFromExpiry(u)),[p,f]=(0,e.useState)(c),[g,S]=(0,e.useState)(c),[T,y]=(0,e.useState)(a(u)),h=(0,e.useCallback)(()=>{t.onExpire(n)&&n(),f(!1),y(null)},[n]),x=(0,e.useCallback)(()=>{f(!1)},[]),v=(0,e.useCallback)(function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];y(a(e)),S(t),f(t),m(e),d(r.getSecondsFromExpiry(e))},[]),F=(0,e.useCallback)(()=>{let e=new Date;e.setMilliseconds(e.getMilliseconds()+1e3*l),v(e)},[l,v]),b=(0,e.useCallback)(()=>{g?(d(r.getSecondsFromExpiry(u)),f(!0)):F()},[u,g,F]);return s(()=>{1e3!==T&&y(1e3);let e=r.getSecondsFromExpiry(u);d(e),e<=0&&h()},p?T:null),{...r.getTimeFromSeconds(l),start:b,pause:x,resume:F,restart:v,isRunning:p}}function u(){let{autoStart:t,offsetTimestamp:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[n,i]=(0,e.useState)(r.getSecondsFromExpiry(o,!0)||0),[a,c]=(0,e.useState)(new Date),[u,m]=(0,e.useState)(n+r.getSecondsFromPrevTime(a||0,!0)),[l,d]=(0,e.useState)(t);s(()=>{m(n+r.getSecondsFromPrevTime(a,!0))},l?1e3:null);let p=(0,e.useCallback)(()=>{let e=new Date;c(e),d(!0),m(n+r.getSecondsFromPrevTime(e,!0))},[n]),f=(0,e.useCallback)(()=>{i(u),d(!1)},[u]),g=(0,e.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=r.getSecondsFromExpiry(e,!0)||0,n=new Date;c(n),i(o),d(t),m(o+r.getSecondsFromPrevTime(n,!0))},[]);return{...r.getTimeFromSeconds(u),start:p,pause:f,reset:g,isRunning:l}}function m(){let{format:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[o,n]=(0,e.useState)(r.getSecondsFromTimeNow());return s(()=>{n(r.getSecondsFromTimeNow())},1e3),{...r.getFormattedTimeFromSeconds(o,t)}}function l(t){if((0,e.useEffect)(()=>{console.warn("react-timer-hook: default export useTimer is deprecated, use named exports { useTimer, useStopwatch, useTime } instead")},[]),t.expiryTimestamp){let e1=c(t);return{...e1,startTimer:e1.start,stopTimer:e1.pause,resetTimer(){}}}let r=u(t);return{...r,startTimer:r.start,stopTimer:r.pause,resetTimer:r.reset}}})(),n})())}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=3433)}),_N_E=__webpack_require__.O()}]);