(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{3092:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/modal",function(){return __webpack_require__(8032)}])},8032:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return App}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294);let ModalBtn=param=>{let{children,modalBtnName,modalClick}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("button",{name:modalBtnName,onClick:modalClick,children:children})})};var modal_module=__webpack_require__(8007),modal_module_default=__webpack_require__.n(modal_module);let Modal=param=>{let{children,modalClick,readComplete}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:modal_module_default().modal_content,children:[void 0===readComplete||readComplete?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children}):(0,jsx_runtime.jsx)("p",{className:modal_module_default().loading,children:"loading..."})," ",(0,jsx_runtime.jsx)("div",{className:modal_module_default().close_btn,onClick:modalClick,children:"閉じる"})]}),(0,jsx_runtime.jsx)("div",{className:modal_module_default().overlay,onClick:modalClick})]})};var react_dom=__webpack_require__(3935);let ModalPortal=param=>{let{children}=param,target=document.body;return(0,react_dom.createPortal)(children,target)},ModalElement=param=>{let{children,targetName,modalOpen,modalName,modalClick,readComplete}=param;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:modalOpen&&modalName===targetName?(0,jsx_runtime.jsx)(ModalPortal,{children:(0,jsx_runtime.jsx)(Modal,{modalClick:modalClick,readComplete:readComplete,children:children})}):""})};function App(){let[modalOpen,setModalOpen]=(0,react.useState)(!1),[modalName,setModalName]=(0,react.useState)(""),[readComplete,setReadComplete]=(0,react.useState)(!1);(0,react.useEffect)(()=>{modalOpen?document.body.classList.add("is_modal"):document.body.classList.remove("is_modal")},[modalOpen]);let modalClick=e=>{let{target}=e;setModalOpen(prev=>!prev),setReadComplete(!1),target instanceof HTMLButtonElement&&(target.name?setModalName(target.name):setModalName(""))};return(0,jsx_runtime.jsxs)("div",{className:"App",children:[(0,jsx_runtime.jsx)("h1",{children:"モーダルウィンドウ"}),(0,jsx_runtime.jsx)(ModalBtn,{modalBtnName:"modal2",modalClick:modalClick,children:"モーダル２（テキスト）"}),(0,jsx_runtime.jsxs)(ModalElement,{targetName:"modal2",modalOpen:modalOpen,modalName:modalName,modalClick:modalClick,readComplete:!0,children:[(0,jsx_runtime.jsx)("input",{type:"text"}),(0,jsx_runtime.jsx)("button",{onClick:()=>console.log("aaa"),children:"送信"})]})]})}},8007:function(module){module.exports={is_modal:"modal_is_modal__IOeTH",overlay:"modal_overlay__H5K7L",modal_content:"modal_modal_content__xeZwG",close_btn:"modal_close_btn__ni_kT",loading:"modal_loading__VDTy3"}}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=3092)}),_N_E=__webpack_require__.O()}]);