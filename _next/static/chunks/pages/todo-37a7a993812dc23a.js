(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{4677:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/todo",function(){return __webpack_require__(6259)}])},6259:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),react=__webpack_require__(7294),dist=__webpack_require__(9734),todo_module=__webpack_require__(2379),todo_module_default=__webpack_require__.n(todo_module);let swrGetData=async key=>{let sourceList={sheetNo:1,method:"GET",type:"getPrivateData",menberId:key[1]},postparam={method:"POST",body:JSON.stringify(sourceList)},returnStr=[];return await fetch("https://script.google.com/macros/s/".concat("AKfycbwxIM4qrgIzqEMvvDYmk5NFdIcOR-E2kpXRANPXyx9cSp0codFTysCwe2ZUej7Yla-zMQ","/exec"),postparam).then(res=>Promise.any([res.json()]).then(data=>{returnStr=data})),returnStr};var renderTodoList_module=__webpack_require__(2516),renderTodoList_module_default=__webpack_require__.n(renderTodoList_module);let RenderTodoList=props=>{let{id,title,todos,Delete,flag,UpDateStatus}=props;return(0,jsx_runtime.jsxs)("div",{className:renderTodoList_module_default().box,children:[(0,jsx_runtime.jsx)("h2",{children:title}),todos.sort((a,b)=>Number(a.id)-Number(b.id)).map((todo,index)=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(RenderTodo,{todo,Delete,flag,UpDateStatus})},"key_".concat(index)))]})},RenderTodo=props=>{let{todo,flag,Delete,UpDateStatus}=props,[hoverFlag,setHoverFlag]=(0,react.useState)(!1),[leftDisabled,setLeftDisabled]=(0,react.useState)(!1),[rightDisabled,setRightDisabled]=(0,react.useState)(!1),changeStatusLogic=(direction,status)=>"left"===direction&&"inProgress"===status?"backlog":"right"===direction&&"inProgress"===status?"done":"inProgress",changeStatus=direction=>{let status=changeStatusLogic(direction,todo.status);UpDateStatus(todo.menberId,todo.id,status)},settingDisabled=(left,right)=>{setLeftDisabled(left),setRightDisabled(right)};return(0,react.useEffect)(()=>{if(hoverFlag)switch(todo.status){case"inProgress":settingDisabled(!0,!0);break;case"done":settingDisabled(!0,!1);break;default:settingDisabled(!1,!0)}else settingDisabled(!1,!1)},[hoverFlag]),(0,jsx_runtime.jsxs)("div",{onMouseEnter:()=>setHoverFlag(!0),onMouseLeave:()=>setHoverFlag(!1),children:[(0,jsx_runtime.jsx)("div",{className:leftDisabled?renderTodoList_module_default().leftArrowBlock:renderTodoList_module_default().ArrowNone,onClick:()=>changeStatus("left"),children:"＜"}),(0,jsx_runtime.jsxs)("div",{className:renderTodoList_module_default().itemBox,children:[(0,jsx_runtime.jsx)("div",{className:renderTodoList_module_default().itemName,children:todo.todo}),Delete&&(0,jsx_runtime.jsx)("button",{onClick:()=>Delete(todo.menberId,todo.id),disabled:!flag,children:"削除"})]}),(0,jsx_runtime.jsx)("div",{className:rightDisabled?renderTodoList_module_default().rightArrowBlock:renderTodoList_module_default().ArrowNone,onClick:()=>changeStatus("right"),children:"＞"})]})};function Home(){let NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY="AKfycbwxIM4qrgIzqEMvvDYmk5NFdIcOR-E2kpXRANPXyx9cSp0codFTysCwe2ZUej7Yla-zMQ",data=[{id:"backLog",title:"課題",todos:[],deleteEvent:!1},{id:"inProgress",title:"進行中",todos:[],deleteEvent:!1},{id:"done",title:"完了",todos:[],deleteEvent:!0}],[columns,setColumns]=(0,react.useState)(data),[todoList,setTodoList]=(0,react.useState)([]),[lodging,setLoding]=(0,react.useState)(!0),[getInput,setInput]=(0,react.useState)(""),[flag,setFlag]=(0,react.useState)(!0);(0,react.useEffect)(()=>{},[]);let Delete=(menberId,todoId)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"deleteData",menberId:menberId,id:todoId})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},Update=(menberId,todoId)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"UpDate",menberId:menberId,todoId:todoId,todo:"https://sakura-checker.jp/search/B0BP3SHG5Z/"})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},UpDateStatus=(menberId,id,status)=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"UpDateStatus",menberId,id,status})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},addData=async todo=>{setFlag(!1);let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"POST",menberId:"1",data:[{todo:"".concat(todo),status:"backlog"}]})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{setLoding(!0)}).catch(err=>{})},click=()=>{getInput&&addData(getInput)},{data:getData,error:GetDataerror,mutate:GetDataMutate}=(0,dist.ZP)(["GetData",1],swrGetData);return(0,react.useEffect)(()=>{getData&&setTodoList(getData),(!flag||lodging)&&(GetDataMutate(),setLoding(!1),setFlag(!0),setInput(""))},[getData,lodging]),(0,react.useEffect)(()=>{let menberId=localStorage.getItem("meberId");if(!menberId){let postparam={method:"POST",body:JSON.stringify({sheetNo:1,method:"GET",type:"makeMenberId"})};fetch("https://script.google.com/macros/s/".concat(NEXT_PUBLIC_GOOGLE_SHEETS_POST_KEY,"/exec"),postparam).then(response=>response.json()).then(data=>{localStorage.setItem("meberId",data)}).catch(err=>{})}},[]),(0,react.useEffect)(()=>{todoList.forEach((todo,index)=>{switch(todo.status){case"inProgress":data[1].todos.push(todo);break;case"done":data[2].todos.push(todo);break;default:data[0].todos.push(todo)}}),setColumns(data)},[todoList]),(0,jsx_runtime.jsxs)("div",{className:todo_module_default().main,children:[(0,jsx_runtime.jsx)("h1",{children:"Todo List"}),(0,jsx_runtime.jsx)("div",{className:todo_module_default().inputBox,children:(0,jsx_runtime.jsxs)("div",{className:todo_module_default().inputs,children:[(0,jsx_runtime.jsx)("input",{type:"text",onChange:e=>setInput(e.target.value),value:getInput,className:todo_module_default().inputs}),(0,jsx_runtime.jsx)("button",{onClick:()=>click(),disabled:!flag,children:"送信"})]})}),(0,jsx_runtime.jsx)("button",{onClick:()=>Update("2","5"),children:"Update demo"}),(0,jsx_runtime.jsx)("button",{onClick:()=>UpDateStatus("2","4","inProgress"),children:"UpDateStatus demo"}),(0,jsx_runtime.jsx)("section",{className:todo_module_default().container,children:columns.map(column=>{let props={id:column.id,title:column.title,todos:column.todos,UpDateStatus:UpDateStatus,flag:column.deleteEvent?flag:void 0,Delete:column.deleteEvent?Delete:void 0};return(0,jsx_runtime.jsx)(RenderTodoList,{...props})})})]})}},2516:function(module){module.exports={box:"renderTodoList_box__hFA9v",itemBox:"renderTodoList_itemBox__6lWju",leftArrowBlock:"renderTodoList_leftArrowBlock__HCZjd",rightArrowBlock:"renderTodoList_rightArrowBlock__Lmiqo",ArrowNone:"renderTodoList_ArrowNone__8XTDp"}},2379:function(module){module.exports={main:"todo_main__5vTqc",inputBox:"todo_inputBox__0cBXf",inputs:"todo_inputs__OipXM",container:"todo_container__fJoJX"}}},function(__webpack_require__){__webpack_require__.O(0,[734,774,888,179],function(){return __webpack_require__(__webpack_require__.s=4677)}),_N_E=__webpack_require__.O()}]);