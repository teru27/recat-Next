(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[998],{3805:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/url",function(){return __webpack_require__(8142)}])},8142:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),dist=__webpack_require__(9734),url_module=__webpack_require__(4723),url_module_default=__webpack_require__.n(url_module);let swrGetData=async key=>{let sourceList={sheetNo:1,method:"GET",type:"getPrivateData",menberId:key[1]},postparam={method:"POST",body:JSON.stringify(sourceList)},returnStr=[];return await fetch("https://script.google.com/macros/s/".concat("AKfycbwxIM4qrgIzqEMvvDYmk5NFdIcOR-E2kpXRANPXyx9cSp0codFTysCwe2ZUej7Yla-zMQ","/exec"),postparam).then(res=>Promise.any([res.json()]).then(data=>{returnStr=data})),returnStr};function Home(){let NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY="AKfycbwxIM4qrgIzqEMvvDYmk5NFdIcOR-E2kpXRANPXyx9cSp0codFTysCwe2ZUej7Yla-zMQ",[userAllProduct,setUserAllProduct]=(0,react.useState)([]),[lodging,setLoding]=(0,react.useState)(!0),[getInput,setInput]=(0,react.useState)(""),[flag,setFlag]=(0,react.useState)(!0);(0,react.useEffect)(()=>{},[]);let Delete=(menberId,todoId)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"deleteData",menberId:menberId,todoId:todoId})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>(console.log(response),response.json())).then(data=>{setLoding(!0)}).catch(err=>{console.log(err)})},Update=(menberId,todoId)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"UpDate",menberId:menberId,todoId:todoId,todo:"https://sakura-checker.jp/search/B0BP3SHG5Z/"})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>(console.log(response.ok),response.json())).then(data=>{setLoding(!0)}).catch(err=>{console.log(err)})},addData=async todo=>{setFlag(!1),console.log("a");let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"POST",menberId:"1",data:[{todo:"".concat(todo)}]})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>(console.log(response.status),response.json())).then(data=>{console.log(data.result),setLoding(!0)}).catch(err=>{console.log("Error!")})},click=()=>{getInput&&addData(getInput)},{data:getData,error:GetDataerror,mutate:GetDataMutate}=(0,dist.ZP)(["GetData",1],swrGetData);return(0,react.useEffect)(()=>{console.log(getData),getData&&setUserAllProduct(getData),(!flag||lodging)&&(GetDataMutate(),setLoding(!1),setFlag(!0),setInput(""))},[getData,lodging]),(0,react.useEffect)(()=>{let menberId=localStorage.getItem("meberId");if(!menberId){let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"makeMenberId"})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>(console.log(response.ok),response.json())).then(data=>{console.log(data),localStorage.setItem("meberId",data)}).catch(err=>{console.log(err)})}},[]),console.log(userAllProduct),(0,jsx_runtime.jsxs)("div",{className:url_module_default().main,children:[(0,jsx_runtime.jsx)("h1",{children:"桜チェッカーのURLから値段と商品名を抜き出す"}),(0,jsx_runtime.jsx)("div",{className:url_module_default().inputBox,children:(0,jsx_runtime.jsxs)("div",{className:url_module_default().inputs,children:[(0,jsx_runtime.jsx)("input",{type:"text",onChange:e=>setInput(e.target.value),value:getInput,className:url_module_default().inputs}),(0,jsx_runtime.jsx)("button",{onClick:()=>click(),disabled:!flag,children:"送信"})]})}),(0,jsx_runtime.jsx)("button",{onClick:()=>Update("2","5"),children:"Update demo"}),(0,jsx_runtime.jsxs)("section",{className:url_module_default().container,children:[(0,jsx_runtime.jsxs)("div",{className:url_module_default().box,children:[(0,jsx_runtime.jsx)("h2",{children:"todo"}),userAllProduct.map((item,index)=>(0,jsx_runtime.jsxs)("div",{className:url_module_default().itemBox,children:[(0,jsx_runtime.jsx)("div",{className:url_module_default().itemName,children:item.todo}),(0,jsx_runtime.jsx)("button",{onClick:()=>Delete(item.menberId,item.todoId),disabled:!flag,children:"削除"})]},"".concat(index)))]}),(0,jsx_runtime.jsx)("div",{className:url_module_default().box,children:(0,jsx_runtime.jsx)("h2",{children:"???"})})]})]})}},4723:function(module){module.exports={main:"url_main__EgNnY",inputBox:"url_inputBox__MGJcJ",inputs:"url_inputs__78Ex1",input:"url_input__oN25W",button:"url_button___sfln",container:"url_container__nMMEo",box:"url_box__U6qb8",itemBox:"url_itemBox__klyQp",itemName:"url_itemName__Sh_Dz"}}},function(__webpack_require__){__webpack_require__.O(0,[734,774,888,179],function(){return __webpack_require__(__webpack_require__.s=3805)}),_N_E=__webpack_require__.O()}]);