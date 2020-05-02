(this["webpackJsonp01-todolist"]=this["webpackJsonp01-todolist"]||[]).push([[0],{117:function(t,e,n){t.exports={appWrapper:"App_appWrapper__1y6-z"}},121:function(t,e,n){t.exports=n(246)},126:function(t,e,n){},246:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(51),r=n.n(i);n(126),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(7),c=n(249),l=n(113),u=n(82),d=n(3),p=n(114),f=n.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"2a70584b-20f7-4ff5-8c15-684fb9f4be7b"}}),m=function(t,e){return f.post("/todo-lists/".concat(e,"/tasks"),{title:t})},h=function(t){return f.get("/todo-lists/".concat(t,"/tasks"))},T=function(t,e){return f.put("/todo-lists/tasks",Object(d.a)(Object(d.a)({},t),e))},k=function(t){return f.delete("/todo-lists/tasks/".concat(t))},v=function(t){return f.delete("/todo-lists/".concat(t))},b=function(){return f.get("/todo-lists")},E=function(t){return f.post("/todo-lists",{title:t})},g=function(t,e){return f.put("/todo-lists/".concat(t),{title:e})},O=function(){return f.get("/auth/me").then((function(t){return t.data}))},j=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=f.post("/auth/login",{email:t,password:e,rememberMe:n}).then((function(t){return t.data}));return a},_=function(){return f.delete("/auth/login").then((function(t){return t.data}))},L="TodoList/Reducer/ADD_TODOLIST",C="TodoList/Reducer/DELETE_TODOLIST",A="TodoList/Reducer/ADD_TASK",I="TodoList/Reducer/CHANGE_TASK",w="TodoList/Reducer/DELETE_TASK",N="TodoList/Reducer/SET_TODOLISTS",S="TodoList/Reducer/SET_TASKS",D="TodoList/Reducer/CHANGE_TODOLIST",y={todolists:[]},F=function(t){return function(e){h(t).then((function(n){var a=n.data.items;e(function(t,e){return{type:S,tasks:t,todolistId:e}}(a,t))}))}},M=function(t,e){return function(n){m(t,e).then((function(t){var a=t.data.data.item;n(function(t,e){return{type:A,newTask:t,todolistId:e}}(a,e))}))}},H=function(t,e,n,a){return function(o){T(n,a).then((function(n){o(function(t,e,n){return{type:I,taskId:t,obj:e,todolistId:n}}(t,a,e))}))}},x=function(t,e){return function(n){k(e).then((function(a){n(function(t,e){return{type:w,todolistId:t,taskId:e}}(t,e))}))}},R=function(){return function(t){b().then((function(e){var n;t((n=e.data,{type:N,todolists:n}))}))}},V=function(t){return function(e){E(t).then((function(t){var n=t.data.data.item;e({type:L,newTodoList:n})}))}},B=function(t,e){return function(n){g(t,e).then((function(a){n(function(t,e){return{type:D,todolistId:t,newTodolistTitle:e}}(t,e))}))}},U=function(t){return function(e){v(t).then((function(n){e(function(t){return{type:C,todolistId:t}}(t))}))}},J=function(t,e,n,a){return{type:"TodoList/Reducer/SET_AUTH_USER_DATA",payload:{userId:t,email:e,login:n,isAuth:a}}},K={userId:null,email:null,login:null,isAuth:!1},P=function(){return function(t){O().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,o=n.email,i=n.login;t(J(a,o,i,!0))}}))}},W=Object(s.c)({reducer:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case L:return Object(d.a)(Object(d.a)({},t),{},{todolists:[].concat(Object(u.a)(t.todolists),[e.newTodoList])});case N:return Object(d.a)(Object(d.a)({},t),{},{todolists:e.todolists.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{tasks:[]})}))});case C:return Object(d.a)(Object(d.a)({},t),{},{todolists:t.todolists.filter((function(t){return t.id!==e.todolistId}))});case A:return Object(d.a)(Object(d.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(d.a)(Object(d.a)({},t),{},{tasks:[].concat(Object(u.a)(t.tasks),[e.newTask])}):t}))});case S:return Object(d.a)(Object(d.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(d.a)(Object(d.a)({},t),{},{tasks:e.tasks}):t}))});case I:return Object(d.a)(Object(d.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(d.a)(Object(d.a)({},t),{},{tasks:t.tasks.map((function(t){return t.id===e.taskId?Object(d.a)(Object(d.a)({},t),e.obj):t}))}):t}))});case D:return Object(d.a)(Object(d.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(d.a)({},t):t}))});case w:return Object(d.a)(Object(d.a)({},t),{},{todolists:t.todolists.map((function(t){return t.id===e.todolistId?Object(d.a)(Object(d.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==e.taskId}))}):t}))});default:return t}},auth:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TodoList/Reducer/SET_AUTH_USER_DATA":return Object(d.a)(Object(d.a)({},t),e.payload);default:return t}},form:c.a}),z=Object(s.d)(W,Object(s.a)(l.a)),G=n(16),q=n(8),Y=n(10),Z=n(9),$=n(117),Q=n.n($),X=n(39),tt=n.n(X),et=n(248),nt=n(247),at=function(t){if(!t)return"Field is required"},ot=function(t){return function(e){if(e.length>t)return"Max length is ".concat(t," symbols")}},it=n(119),rt=n(74),st=n.n(rt),ct=function(t){var e=t.input,n=t.meta,a=Object(it.a)(t,["input","meta"]),i=n.touched&&n.error;return o.a.createElement("div",{className:st.a.formControl+" "+(i&&st.a.error)},o.a.createElement("input",Object.assign({},e,a)),i&&o.a.createElement("span",null,n.error))},lt=n(24),ut=ot(20),dt=ot(40),pt=Object(nt.a)({form:"login"})((function(t){return o.a.createElement("form",{onSubmit:t.handleSubmit,className:tt.a.loginForm},o.a.createElement(et.a,{component:ct,name:"email",placeholder:"Email",validate:[at,dt]}),o.a.createElement(et.a,{component:ct,name:"password",type:"password",placeholder:"Password",validate:[at,ut]}),o.a.createElement("div",null,o.a.createElement(et.a,{component:ct,type:"checkbox",name:"rememberMe"}),"remember me"),o.a.createElement("button",null,"Login"))})),ft=Object(G.b)((function(t){return{isAuth:t.auth.isAuth}}),{login:function(t,e,n){return function(a){j(t,e,n).then((function(t){0===t.resultCode&&a(P())}))}}})((function(t){return t.isAuth?o.a.createElement(lt.a,{to:"/"}):o.a.createElement("div",{className:tt.a.login},o.a.createElement("div",{className:tt.a.loginTitle},"Login"),o.a.createElement(pt,{onSubmit:function(e){t.login(e.email,e.password,e.rememberMe)}}),o.a.createElement("div",{className:tt.a.testData},"\u0422\u0435\u0441\u0442\u043e\u0432\u044b\u0435 e-mail \u0438 password:",o.a.createElement("div",null,"E-mail: ",o.a.createElement("span",null,"free@samuraijs.com")),o.a.createElement("div",null,"Password: ",o.a.createElement("span",null,"free"))))})),mt=n(30),ht=n(40),Tt=n.n(ht),kt=n(41),vt=n.n(kt),bt=n(54),Et=n.n(bt),gt=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(t){var a;return Object(q.a)(this,n),(a=e.call(this,t)).state={editMode:!1,title:a.props.task.title},a.activateEditMode=function(){a.setState({editMode:!0})},a.deactiveEditMode=function(){a.props.changeTitle(a.props.task.id,a.state.title),a.setState({editMode:!1})},a.onIsDoneChanged=function(t){var e=t.currentTarget.checked?2:0;a.props.changeIsDoneStatus(a.props.task.id,e)},a.onTitleChanged=function(t){a.setState({title:t.currentTarget.value})},a.onDeleteTask=function(){a.props.deleteTask(a.props.task.id)},a.render=function(){var t=a.props.task.status?"".concat(vt.a.done):"";return o.a.createElement("div",{className:vt.a.todoListTask},o.a.createElement("input",{type:"checkbox",id:"check",checked:2===a.props.task.status,onChange:a.onIsDoneChanged}),o.a.createElement("div",{className:vt.a.todoListTaskItem},o.a.createElement("div",null,a.state.editMode?o.a.createElement("input",{onBlur:a.deactiveEditMode,onChange:a.onTitleChanged,autoFocus:!0,value:a.state.title}):o.a.createElement("span",{onClick:a.activateEditMode,className:t},a.props.task.title)),o.a.createElement("button",{className:vt.a.todoListTaskDelete,onClick:a.onDeleteTask},o.a.createElement("img",{src:Et.a,alt:"basket"}))))},a}return n}(o.a.Component),Ot=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(t){var a;return Object(q.a)(this,n),(a=e.call(this,t)).render=function(){var t=a.props.tasks.map((function(t){return o.a.createElement(gt,{key:t.id,task:t,changeIsDoneStatus:a.props.changeIsDoneStatus,changeTitle:a.props.changeTitle,deleteTask:a.props.deleteTask})}));return o.a.createElement("div",null,t)},a}return n}(o.a.Component),jt=n(42),_t=n.n(jt),Lt=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(){var t;Object(q.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={isHidden:!1},t.onAllFilterClick=function(){t.props.changeFilter("All")},t.onComplitedFilterClick=function(){t.props.changeFilter("Completed")},t.onActiveFilterClick=function(){t.props.changeFilter("Active")},t.onHideFilterClick=function(){t.setState({isHidden:!0})},t.onShowFilterClick=function(){t.setState({isHidden:!1})},t.render=function(){var e="All"===t.props.filterValue?"".concat(_t.a.filterActive):"",n="Completed"===t.props.filterValue?"".concat(_t.a.filterActive):"",a="Active"===t.props.filterValue?"".concat(_t.a.filterActive):"";return o.a.createElement("div",{className:_t.a.todoListFooter},!t.state.isHidden&&o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){t.onAllFilterClick()},className:e},"All"),o.a.createElement("button",{onClick:function(){t.onComplitedFilterClick()},className:n},"Completed"),o.a.createElement("button",{onClick:function(){t.onActiveFilterClick()},className:a},"Active")),!t.state.isHidden&&o.a.createElement("span",{onClick:function(){t.onHideFilterClick()}},"hide"),t.state.isHidden&&o.a.createElement("span",{onClick:function(){t.onShowFilterClick()}},"show"))},t}return n}(o.a.Component),Ct=n(80),At=n.n(Ct),It=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(t){var a;return Object(q.a)(this,n),(a=e.call(this,t)).state={error:!1,title:""},a.onInputTextChange=function(t){a.setState({error:!1,title:t.currentTarget.value})},a.onAddNewItemTitle=function(){var t=a.state.title;a.setState({title:""}),""===t?a.setState({error:!0}):(a.setState({error:!1}),a.props.addNewTitle(t))},a.onPressEnter=function(t){"Enter"===t.key&&a.onAddNewItemTitle()},a.render=function(){var t=a.state.error?"error":"";return o.a.createElement("div",{className:At.a.todoListHeader},o.a.createElement("div",{className:At.a.todoListNewTaskForm},o.a.createElement("input",{type:"text",placeholder:"New item name",className:t,onChange:a.onInputTextChange,onKeyPress:a.onPressEnter,value:a.state.title}),o.a.createElement("button",{onClick:function(){a.onAddNewItemTitle()}},"Add")))},a}return n}(o.a.Component),wt=n(31),Nt=n.n(wt),St=n(81),Dt=n.n(St),yt=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(t){var a;return Object(q.a)(this,n),(a=e.call(this,t)).state={title:a.props.title,editMode:!1},a.activeEditMode=function(){a.setState({editMode:!0})},a.deactiveEditMode=function(){a.props.changeTodolist(a.state.title),a.setState({editMode:!1})},a.changeTodolistTitle=function(t){a.setState({title:t.currentTarget.value})},a.render=function(){return o.a.createElement("div",null,a.state.editMode?o.a.createElement("input",{onBlur:a.deactiveEditMode,autoFocus:!0,value:a.state.title,onChange:a.changeTodolistTitle,className:Dt.a.todolistTitleInput}):o.a.createElement("h3",{className:Dt.a.todolistHeaderTitle,onClick:a.activeEditMode},a.state.title))},a}return n}(o.a.Component),Ft=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(t){var a;return Object(q.a)(this,n),(a=e.call(this,t)).state={filterValue:"All",nextTaskId:3},a.restoreState=function(){a.props.loadTasks(a.props.id)},a.addTask=function(t){a.props.addTask(t,a.props.id)},a.changeFilter=function(t){a.setState({filterValue:t})},a.changeTask=function(t,e){var n=a.props.tasks.find((function(e){return e.id===t})),o=Object(d.a)(Object(d.a)({},n),e);a.props.changeTask(t,a.props.id,o,e)},a.changeTodolist=function(t){a.props.changeTodolist(a.props.id,t)},a.changeIsDoneStatus=function(t,e){a.changeTask(t,{status:e})},a.changeTitle=function(t,e){a.changeTask(t,{title:e})},a.deleteTask=function(t){a.props.deleteTask(a.props.id,t)},a.deleteTodolist=function(){a.props.deleteTodolist(a.props.id)},a.render=function(){var t=a.props.tasks,e=void 0===t?[]:t;return o.a.createElement("div",{className:Nt.a.App},o.a.createElement("div",{className:Nt.a.todoList},o.a.createElement("div",{className:Nt.a.todoListHeader},o.a.createElement(yt,{title:a.props.title,changeTodolist:a.changeTodolist}),o.a.createElement("button",{onClick:function(){a.deleteTodolist()},className:Nt.a.todoListDeleteButton},o.a.createElement("img",{src:Et.a,alt:"basket"}))),o.a.createElement(It,{addNewTitle:a.addTask}),o.a.createElement("div",{className:Nt.a.todoListContent},o.a.createElement(Ot,{changeIsDoneStatus:a.changeIsDoneStatus,changeTitle:a.changeTitle,deleteTask:a.deleteTask,tasks:e.filter((function(t){return"All"===a.state.filterValue?2:"Active"===a.state.filterValue?0===t.status:2===t.status}))})),o.a.createElement(Lt,{changeFilter:a.changeFilter,filterValue:a.state.filterValue})))},a}return Object(mt.a)(n,[{key:"componentDidMount",value:function(){this.restoreState()}}]),n}(o.a.Component),Mt=Object(G.b)(null,(function(t){return{addTask:function(e,n){t(M(e,n))},loadTasks:function(e){t(F(e))},changeTask:function(e,n,a,o){t(H(e,n,a,o))},deleteTask:function(e,n){t(x(e,n))},deleteTodolist:function(e){t(U(e))},changeTodolist:function(e,n){t(B(e,n))}}}))(Ft),Ht=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(){var t;Object(q.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={newTodoListId:0},t.addNewTodolist=function(e){t.props.addTodolist(e)},t}return Object(mt.a)(n,[{key:"render",value:function(){var t=this.props.todolists.map((function(t){return o.a.createElement(Mt,{key:t.id,id:t.id,title:t.title,tasks:t.tasks})}));return o.a.createElement("div",{className:Tt.a.item},o.a.createElement("div",{className:Tt.a.itemHeader},o.a.createElement(It,{addNewTitle:this.addNewTodolist}),this.props.isAuth?o.a.createElement("div",null,this.props.login,o.a.createElement("div",{onClick:this.props.logout,className:Tt.a.logout},"logout")):o.a.createElement("div",null,"Login")),o.a.createElement("div",{className:Tt.a.App},t))}}]),n}(o.a.Component),xt=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(){return Object(q.a)(this,n),e.apply(this,arguments)}return Object(mt.a)(n,[{key:"componentDidMount",value:function(){this.props.setTodolists(),this.props.setAuthUserData()}},{key:"render",value:function(){return this.props.isAuth?o.a.createElement(Ht,this.props):o.a.createElement(lt.a,{to:"/login"})}}]),n}(o.a.Component),Rt=Object(G.b)((function(t){return{todolists:t.reducer.todolists,isAuth:t.auth.isAuth,login:t.auth.login}}),(function(t){return{addTodolist:function(e){var n=V(e);t(n)},setTodolists:function(){var e=R();t(e)},setAuthUserData:function(){var e=P();t(e)},logout:function(){var e=function(t){_().then((function(e){0===e.resultCode&&t(J(null,null,null,!1))}))};t(e)}}}))(xt),Vt=function(t){Object(Y.a)(n,t);var e=Object(Z.a)(n);function n(){var t;Object(q.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).render=function(){return o.a.createElement("div",{className:Q.a.appWrapper},o.a.createElement(lt.b,{path:"/login",render:function(){return o.a.createElement(ft,null)}}),o.a.createElement(lt.b,{path:"/",render:function(){return o.a.createElement(Rt,null)}}))},t}return n}(o.a.Component),Bt=n(35);r.a.render(o.a.createElement(G.a,{store:z},o.a.createElement(Bt.a,null,o.a.createElement(Vt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},31:function(t,e,n){t.exports={App:"TodoList_App__1_2JL",todoList:"TodoList_todoList__14Jgj",todoListHeader:"TodoList_todoListHeader__2kYED",todoListDeleteButton:"TodoList_todoListDeleteButton__31VBZ",todoListContent:"TodoList_todoListContent__3pyqt"}},39:function(t,e,n){t.exports={login:"Login_login__1HjUh",loginForm:"Login_loginForm__2Ee3A",testData:"Login_testData__3VMnJ"}},40:function(t,e,n){t.exports={App:"Item_App__1GlEt",error:"Item_error__2WHcr",itemHeader:"Item_itemHeader__1Om1T",logout:"Item_logout__2m_JE"}},41:function(t,e,n){t.exports={todoListTask:"TodoListTask_todoListTask__1z8cr",toDoListCheck:"TodoListTask_toDoListCheck__tpMHF",done:"TodoListTask_done__2-InM",todoListTaskDelete:"TodoListTask_todoListTaskDelete__2sd-L",todoListTaskItem:"TodoListTask_todoListTaskItem__2zRwl"}},42:function(t,e,n){t.exports={filterActive:"TodoListFooter_filterActive__3CMgb"}},54:function(t,e,n){t.exports=n.p+"static/media/basket.491ecf80.svg"},74:function(t,e,n){t.exports={formControl:"FormControl_formControl__RD53d",error:"FormControl_error__2OUbJ"}},80:function(t,e,n){t.exports={todoListNewTaskForm:"TodoListInputForm_todoListNewTaskForm__2BcMN"}},81:function(t,e,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.d0375e14.chunk.js.map