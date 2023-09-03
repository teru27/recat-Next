(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4677:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo",function(){return __webpack_require__(5843)}])},5843:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var _path,RightArrow_path,Delete_path,jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),dist=__webpack_require__(9734),todo_module=__webpack_require__(2379),todo_module_default=__webpack_require__.n(todo_module);let swrGetData=async key=>{let sourceList={sheetNo:1,method:"GET",type:"getPrivateData",menberId:key[1]},postparam={method:"POST",body:JSON.stringify(sourceList)},returnStr=[];return await fetch("https://script.google.com/macros/s/".concat("AKfycbwxIM4qrgIzqEMvvDYmk5NFdIcOR-E2kpXRANPXyx9cSp0codFTysCwe2ZUej7Yla-zMQ","/exec"),postparam).then(res=>Promise.any([res.json()]).then(data=>{returnStr=data})),returnStr};var renderTodoList_module=__webpack_require__(2516),renderTodoList_module_default=__webpack_require__.n(renderTodoList_module);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var LeftArrow=function(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},props),_path||(_path=react.createElement("path",{d:"M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"})))};function RightArrow_extends(){return(RightArrow_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var RightArrow=function(props){return react.createElement("svg",RightArrow_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24},props),RightArrow_path||(RightArrow_path=react.createElement("path",{d:"M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"})))};function Delete_extends(){return(Delete_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var svg_Delete=function(props){return react.createElement("svg",Delete_extends({xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 24 24"},props),Delete_path||(Delete_path=react.createElement("path",{d:"M22 5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h5a1 1 0 0 1 1 1zM4.934 21.071 4 8h16l-.934 13.071a1 1 0 0 1-1 .929H5.931a1 1 0 0 1-.997-.929zM15 18a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0zm-4 0a1 1 0 0 0 2 0v-6a1 1 0 0 0-2 0z"})))};let RenderTodoList=props=>{let{id,title,todos,Delete,flag,UpDateStatus}=props;return(0,jsx_runtime.jsxs)("div",{className:renderTodoList_module_default().box,children:[(0,jsx_runtime.jsx)("h2",{children:title}),todos.sort((a,b)=>Number(a.id)-Number(b.id)).map((todo,index)=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(RenderTodo,{todo,Delete,flag,UpDateStatus})},"key_".concat(index)))]})},RenderTodo=props=>{let{todo,flag,Delete,UpDateStatus}=props,[hoverFlag,setHoverFlag]=(0,react.useState)(!1),[leftDisabled,setLeftDisabled]=(0,react.useState)(!1),[rightDisabled,setRightDisabled]=(0,react.useState)(!1),changeStatusLogic=(direction,status)=>"left"===direction&&"inProgress"===status?"backlog":"right"===direction&&"inProgress"===status?"done":"inProgress",changeStatus=direction=>{let status=changeStatusLogic(direction,todo.status);UpDateStatus(todo.menberId,todo.id,status)},settingDisabled=(left,right)=>{setLeftDisabled(left),setRightDisabled(right)};return(0,react.useEffect)(()=>{if(hoverFlag)switch(todo.status){case"inProgress":settingDisabled(!0,!0);break;case"done":settingDisabled(!0,!1);break;default:settingDisabled(!1,!0)}else settingDisabled(!1,!1)},[hoverFlag]),(0,jsx_runtime.jsxs)("div",{className:renderTodoList_module_default().container,onMouseEnter:()=>setHoverFlag(!0),onMouseLeave:()=>setHoverFlag(!1),children:[(0,jsx_runtime.jsx)("div",{className:leftDisabled?renderTodoList_module_default().leftArrowBlock:renderTodoList_module_default().ArrowNone,onClick:()=>changeStatus("left"),children:(0,jsx_runtime.jsx)(LeftArrow,{})}),(0,jsx_runtime.jsxs)("div",{className:renderTodoList_module_default().itemBox,children:[(0,jsx_runtime.jsx)("div",{className:renderTodoList_module_default().itemName,children:todo.todo}),Delete&&(0,jsx_runtime.jsx)("div",{onClick:()=>flag&&Delete(todo.menberId,todo.id),className:flag?renderTodoList_module_default().selectDeleteIcon:renderTodoList_module_default().noselectDeleteIcon,children:(0,jsx_runtime.jsx)(svg_Delete,{})})]}),(0,jsx_runtime.jsx)("div",{className:rightDisabled?renderTodoList_module_default().rightArrowBlock:renderTodoList_module_default().ArrowNone,onClick:()=>changeStatus("right"),children:(0,jsx_runtime.jsx)(RightArrow,{})})]})};function Home(){let NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY="AKfycbwxIM4qrgIzqEMvvDYmk5NFdIcOR-E2kpXRANPXyx9cSp0codFTysCwe2ZUej7Yla-zMQ",data=[{id:"backLog",title:"課題",todos:[],deleteEvent:!1},{id:"inProgress",title:"進行中",todos:[],deleteEvent:!1},{id:"done",title:"完了",todos:[],deleteEvent:!0}],[columns,setColumns]=(0,react.useState)(data),[todoList,setTodoList]=(0,react.useState)([]),[lodging,setLoding]=(0,react.useState)(!0),[getInput,setInput]=(0,react.useState)(""),[flag,setFlag]=(0,react.useState)(!0);(0,react.useEffect)(()=>{},[]);let Delete=(menberId,todoId)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"deleteData",menberId:menberId,id:todoId})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},Update=(menberId,todoId)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"UpDate",menberId:menberId,todoId:todoId,todo:"https://sakura-checker.jp/search/B0BP3SHG5Z/"})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},UpDateStatus=(menberId,id,status)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"UpDateStatus",menberId,id,status})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},addData=async todo=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"POST",menberId:"1",data:[{todo:"".concat(todo),status:"backlog"}]})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},click=()=>{getInput&&addData(getInput)},{data:getData,error:GetDataerror,mutate:GetDataMutate}=(0,dist.ZP)(["GetData",1],swrGetData);return(0,react.useEffect)(()=>{getData&&setTodoList(getData),(!flag||lodging)&&(GetDataMutate(),setLoding(!1),setFlag(!0),setInput(""))},[getData,lodging]),(0,react.useEffect)(()=>{let menberId=localStorage.getItem("meberId");if(!menberId){let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"makeMenberId"})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{localStorage.setItem("meberId",data)}).catch(err=>{})}},[]),(0,react.useEffect)(()=>{todoList.forEach((todo,index)=>{switch(todo.status){case"inProgress":data[1].todos.push(todo);break;case"done":data[2].todos.push(todo);break;default:data[0].todos.push(todo)}}),setColumns(data)},[todoList]),(0,jsx_runtime.jsxs)("div",{className:todo_module_default().main,children:[(0,jsx_runtime.jsx)("h1",{children:"Todo List"}),(0,jsx_runtime.jsx)("div",{className:todo_module_default().inputBox,children:(0,jsx_runtime.jsxs)("div",{className:todo_module_default().inputs,children:[(0,jsx_runtime.jsx)("input",{type:"text",onChange:e=>setInput(e.target.value),value:getInput,className:todo_module_default().inputs}),(0,jsx_runtime.jsx)("button",{onClick:()=>click(),disabled:!flag,children:"送信"})]})}),(0,jsx_runtime.jsx)("button",{onClick:()=>Update("2","5"),children:"Update demo"}),(0,jsx_runtime.jsx)("section",{className:todo_module_default().container,children:columns.map(column=>{let props={id:column.id,title:column.title,todos:column.todos,UpDateStatus:UpDateStatus,flag:column.deleteEvent?flag:void 0,Delete:column.deleteEvent?Delete:void 0};return(0,jsx_runtime.jsx)(RenderTodoList,{...props})})})]})}},2516:function(module){module.exports={box:"renderTodoList_box__hFA9v",container:"renderTodoList_container__QCp_3",itemBox:"renderTodoList_itemBox__6lWju",leftArrowBlock:"renderTodoList_leftArrowBlock__HCZjd",rightArrowBlock:"renderTodoList_rightArrowBlock__Lmiqo",ArrowNone:"renderTodoList_ArrowNone__8XTDp",noselectDeleteIcon:"renderTodoList_noselectDeleteIcon__ak3IT",selectDeleteIcon:"renderTodoList_selectDeleteIcon__J9eNN"}},2379:function(module){module.exports={main:"todo_main__5vTqc",inputBox:"todo_inputBox__0cBXf",inputs:"todo_inputs__OipXM",container:"todo_container__fJoJX"}}},function(__webpack_require__){__webpack_require__.O(0,[734,774,888,179],function(){return __webpack_require__(__webpack_require__.s=4677)}),_N_E=__webpack_require__.O()}]);