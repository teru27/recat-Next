(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{98:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ex/2023_01_12",function(){return __webpack_require__(1099)}])},1099:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5893),_util_generalSrc__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3695);function Home(){let test=(str,Anser)=>{let board=(0,_util_generalSrc__WEBPACK_IMPORTED_MODULE_1__.o)(10,!0),count=0,strArr=str.split("/"),strArr2=[];strArr.map((strArr1,index)=>{strArr2[index]=strArr1.split("-")});for(var i=0;i<strArr2.length;i++){let xy=strArr2[i][0].split(","),xy1=strArr2[i][1].split(",");for(var k=0;k<board.length;k++)for(var j=0;j<board[k].length;j++)xy[1]<=k&&xy1[1]>=k&&xy[0]<=j&&xy1[0]>=j&&(board[k][j]=board[k][j]+1),i==strArr2.length-1&&2==board[k][j]&&count++}return"".concat(count)===Anser||count+"="+Anser};test("5,1-7,9/3,2-8,6/0,5-9,5","15"),test("0,0-9,9/0,0-9,9/0,0-9,9","0"),test("0,0-9,9/0,0-0,9/1,0-9,9","100"),test("2,5-7,6/0,5-7,7/2,0-8,6","0"),test("1,9-4,9/4,9-7,9/0,3-7,4","1"),test("6,1-6,9/5,0-7,4/5,1-7,2","6"),test("4,0-9,8/5,1-6,8/0,2-9,7","28"),test("2,8-8,9/7,9-8,9/8,3-8,9","2"),test("3,3-9,4/0,1-8,4/1,2-8,9","12"),test("2,1-8,3/0,1-3,7/8,3-8,4","7"),test("5,4-6,9/0,0-6,0/5,3-9,8","10"),test("1,1-9,7/1,1-3,8/3,8-7,9","22"),test("2,4-6,7/3,2-7,8/1,0-9,4","24"),test("0,2-1,5/8,1-8,3/1,8-6,8","0"),test("5,2-9,5/9,1-9,2/8,0-8,6","5"),test("5,0-6,4/2,1-6,4/3,8-3,9","8"),test("0,4-6,9/4,1-6,9/7,6-9,7","18"),test("0,0-5,5/0,1-2,8/5,3-9,4","17"),test("0,2-5,6/5,6-8,7/0,1-2,6","16"),test("7,2-8,4/1,0-6,8/1,3-7,6","26"),test("4,3-9,3/0,0-6,5/0,0-4,8","31"),test("3,4-4,6/2,2-4,8/2,0-8,4","11"),test("1,2-6,5/0,5-4,7/2,8-2,9","4"),test("4,1-7,5/2,1-9,9/1,7-2,9","23"),test("1,6-5,6/0,3-5,7/0,2-2,6","13"),test("1,3-3,4/1,4-3,4/9,2-9,9","3"),test("6,3-7,6/2,2-2,3/1,3-9,8","9"),test("2,2-9,7/1,8-9,8/2,2-8,9","49"),test("1,2-6,9/7,6-9,9/4,3-9,9","33"),test("6,0-7,5/0,4-3,8/1,4-5,8","15"),test("2,0-9,7/0,5-3,8/5,1-7,7","27"),test("1,2-8,7/3,1-4,3/2,3-5,8","20"),test("1,0-7,7/0,1-5,4/0,0-2,3","19"),test("2,0-3,7/1,1-3,7/5,3-5,9","14"),test("7,2-9,8/1,0-6,8/0,2-9,9","63"),test("1,1-5,3/0,3-8,7/2,3-8,7","32"),test("3,4-6,6/1,0-9,1/4,0-9,9","21"),test("0,0-4,7/0,5-5,9/0,2-4,5","25"),test("1,1-9,9/2,2-7,4/2,4-7,7","30"),test("3,2-9,9/2,0-6,6/0,5-8,9","36"),test("0,1-8,8/0,5-9,8/2,3-2,4","38"),test("0,0-8,6/4,3-9,9/7,1-9,9","29"),test("0,0-8,8/2,4-9,8/0,1-9,2","53");let exampleUrl="http://nabetani.sakura.ne.jp/hena/ordf02in2rec/";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["問題URL:",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{href:exampleUrl,target:"_blank",children:exampleUrl})]})}},3695:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{LN:function(){return sum2Array},Mu:function(){return centerArrayCalc},YL:function(){return bogoSort},iP:function(){return useWindowSize},k8:function(){return rotationMatrix},o:function(){return dimensional2Array},p4:function(){return transpose},qR:function(){return createSumNumberArray},t$:function(){return getRandomNum}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);function dimensional2Array(index,arrNum,index2){let board=[],indexRow=void 0!==index2?index2:index,numOrStr=arrNum?0:"0";for(var i=0;i<index;i++){board[i]=[];for(var j=0;j<indexRow;j++)board[i][j]=numOrStr}return board}function sum2Array(index,startNum,sumNumber){let numberArr=dimensional2Array(index,!0),count=0;for(var i=0;i<numberArr.length;i++)for(var j=0;j<numberArr[i].length;j++)numberArr[i][j]=startNum+count,count=sumNumber?count+sumNumber:count+1;return numberArr}function rotationMatrix(x,y,angle){let radian=angle*(Math.PI/180),sin=Math.round(Math.sin(radian)),cos=Math.round(Math.cos(radian));return{X:x*cos+-(y*sin),Y:x*sin+y*cos}}function centerArrayCalc(array,x,y){let xLength=array.length,yLength=array[0].length,board=dimensional2Array(xLength,!1,yLength);for(var i=0;i<xLength;i++)for(var j=0;j<yLength;j++){let xCalc=y>=j?j-y:Math.abs(j-y),yCalc=i>=x?-1*(i-x):Math.abs(i-x);board[i][j]="".concat(xCalc,",").concat(yCalc)}return board}function bogoSort(arr,answerArr){let completion=!1;for(;!completion;){let index=arr.length;for(;index;){var i=Math.floor(Math.random()*index),str=arr[--index];arr[index]=arr[i],arr[i]=str}JSON.stringify(arr)==JSON.stringify(answerArr)&&(completion=!0)}}let useWindowSize=()=>{let[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0,0]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{let updateSize=()=>{setSize([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",updateSize),updateSize(),()=>window.removeEventListener("resize",updateSize)},[]),size},getRandomNum=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;function createSumNumberArray(index,minNumber){let board=[],defaultNumber=minNumber?minNumber-1:0;for(var i=defaultNumber;i<index;i++)board[i]=i+1;return board}let transpose=a=>a[0].map((_,c)=>a.map(r=>r[c]))}},function(__webpack_require__){__webpack_require__.O(0,[774,888,179],function(){return __webpack_require__(__webpack_require__.s=98)}),_N_E=__webpack_require__.O()}]);