(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9222:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Gomoku",function(){return __webpack_require__(4145)}])},4145:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return App}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7294),_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5521),_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3__),_util_generalSrc__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3695);function App(){let[number,setNumber]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3),[countNum,setCountNum]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3),tileList=(0,_util_generalSrc__WEBPACK_IMPORTED_MODULE_2__.qR)(10,3),[nowPlayer,setNowPlayer]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),[squaresList,setSquaresList]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),[changeSquares,setChangeSquares]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),[reStart,setReStart]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[gameStets,setGameStets]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("start"),clickEvent=(i,j,square)=>{"end"!=gameStets&&0==squaresList[i][j]&&(squaresList[i][j]=nowPlayer,setChangeSquares(squaresList))},allFilled=()=>{let filled=squaresList.map(squares=>squares.includes(0));return!filled.some(value=>value)},reStartEvent=()=>{setNowPlayer(1),setGameStets("now"),setReStart(pev=>!pev)},warpOrWeftProcess=squaresList=>squaresList.map(squares=>{let count=0;return squares.map(square=>{count!=countNum&&(square==nowPlayer?count++:count=0)}),count==countNum}),upLeftProcess=squaresList=>squaresList.map((squares,i)=>{let count1=0,count2=0;return squares.map((_,j)=>{i+j<squaresList.length&&count1!=countNum&&count2!=countNum&&(squaresList[i+j][squaresList.length-(squaresList.length-j)]==nowPlayer?count1++:count1=0,squaresList[squaresList.length-(squaresList.length-j)][i+j]==nowPlayer?count2++:count2=0)}),count1==countNum||count2==countNum}),upRightProcess=squaresList=>squaresList.map((squares,i)=>(squares.map((_,j)=>{squaresList.length}),0==countNum)),beAllPresent=()=>{let weft=warpOrWeftProcess(squaresList);if(weft.some(value=>value))return!0;let warp=warpOrWeftProcess((0,_util_generalSrc__WEBPACK_IMPORTED_MODULE_2__.p4)(squaresList));if(warp.some(value=>value))return!0;let upLeft=upLeftProcess(squaresList);if(upLeft.some(value=>value))return!0;let upRight=upRightProcess(squaresList);return!!upRight.some(value=>value)},changePlayer=()=>{setNowPlayer(1===nowPlayer?2:1)},mainProcess=()=>{if(setSquaresList(changeSquares),setChangeSquares([]),beAllPresent()){setGameStets("end");return}if(allFilled()){setGameStets("draw");return}changePlayer()};return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{setSquaresList((0,_util_generalSrc__WEBPACK_IMPORTED_MODULE_2__.o)(number,!0))},[number,reStart]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{0!=changeSquares.length&&mainProcess()},[changeSquares]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text,children:["start"==gameStets&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["マスをクリックしてスタート",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),"Player".concat(nowPlayer,"のターン")]}),"now"==gameStets&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Player".concat(nowPlayer,"のターン")}),("end"==gameStets||"draw"==gameStets)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["end"==gameStets?"Player".concat(nowPlayer,"の勝ち"):"引き分け",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:()=>reStartEvent(),children:"もう一度"})]})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().squaresBox,style:{height:"".concat(100*number,"px"),width:"".concat(100*number,"px")},children:squaresList&&squaresList.map((squares,i)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().squares,children:squares.map((square,j)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().square,onClick:()=>clickEvent(i,j,square),children:["".concat(i,",").concat(j),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().squareText,children:(()=>{switch(square){case 1:return"○";case 2:return"\xd7";default:return""}})()})]},"key_".concat(j)))},"key_".concat(i)))}),"start"==gameStets&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_gomoku_module_scss__WEBPACK_IMPORTED_MODULE_3___default().text,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select",{disabled:"start"!=gameStets,onChange:e=>setNumber(Number(e.target.value)),defaultValue:number,children:tileList.map(tile=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option",{value:tile,children:tile},"key_".concat(tile)))})})})]})}},3695:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{LN:function(){return sum2Array},Mu:function(){return centerArrayCalc},YL:function(){return bogoSort},iP:function(){return useWindowSize},k8:function(){return rotationMatrix},o:function(){return dimensional2Array},p4:function(){return transpose},qR:function(){return createSumNumberArray},t$:function(){return getRandomNum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);function dimensional2Array(index,arrNum,index2){let board=[],indexRow=void 0!==index2?index2:index,numOrStr=arrNum?0:"0";for(var i=0;i<index;i++){board[i]=[];for(var j=0;j<indexRow;j++)board[i][j]=numOrStr}return board}function sum2Array(index,startNum,sumNumber){let numberArr=dimensional2Array(index,!0),count=0;for(var i=0;i<numberArr.length;i++)for(var j=0;j<numberArr[i].length;j++)numberArr[i][j]=startNum+count,count=sumNumber?count+sumNumber:count+1;return numberArr}function rotationMatrix(x,y,angle){let radian=angle*(Math.PI/180),sin=Math.round(Math.sin(radian)),cos=Math.round(Math.cos(radian));return{X:x*cos+-(y*sin),Y:x*sin+y*cos}}function centerArrayCalc(array,x,y){let xLength=array.length,yLength=array[0].length,board=dimensional2Array(xLength,!1,yLength);for(var i=0;i<xLength;i++)for(var j=0;j<yLength;j++){let xCalc=y>=j?j-y:Math.abs(j-y),yCalc=i>=x?-1*(i-x):Math.abs(i-x);board[i][j]="".concat(xCalc,",").concat(yCalc)}return board}function bogoSort(arr,answerArr){let completion=!1;for(;!completion;){let index=arr.length;for(;index;){var i=Math.floor(Math.random()*index),str=arr[--index];arr[index]=arr[i],arr[i]=str}JSON.stringify(arr)==JSON.stringify(answerArr)&&(completion=!0)}}let useWindowSize=()=>{let[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0,0]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{let updateSize=()=>{setSize([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",updateSize),updateSize(),()=>window.removeEventListener("resize",updateSize)},[]),size},getRandomNum=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;function createSumNumberArray(index,minNumber){let board=[],defaultNumber=minNumber?minNumber-1:0;for(var i=defaultNumber;i<index;i++)board[i]=i+1;return board}let transpose=a=>a[0].map((_,c)=>a.map(r=>r[c]))},5521:function(module){module.exports={box:"gomoku_box__V8z4t",text:"gomoku_text__B2ChC",squares:"gomoku_squares__pWpPP",squaresBox:"gomoku_squaresBox__PjzIY",square:"gomoku_square__1TOs4",squareText:"gomoku_squareText__0YLuU"}}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=9222)}),_N_E=__webpack_require__.O()}]);