webpackJsonp([0],{"./src/components/App.js":function(e,t,n){"use strict";t.a=function(e){return o.a.createElement(a.BrowserRouter,null,o.a.createElement(i.a,null))};var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/components/Routes.js")},"./src/components/Routes.js":function(e,t,n){"use strict";t.a=function(){return o.a.createElement("main",null,o.a.createElement(l.a,null),o.a.createElement(a.Switch,null,o.a.createElement(a.Route,{path:"/",exact:!0,component:i.a})))};var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/react-router-dom/es/index.js"),i=n("./src/components/organisms/Home.js"),l=n("./src/components/molecules/Header.js")},"./src/components/atoms/Cell.js":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("./node_modules/react/index.js"),l=(n.n(i),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={editing:!1,editingValue:null},n}return a(t,i["Component"]),u(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.onSet,r=t.gridName,o=this.state,a=o.editing,u=o.editingValue,s={gridArea:r,outline:"1px solid black"};return i.createElement("div",{style:s},a?i.createElement("input",{value:u,onChange:function(t){var n=t.target.value;e.setState({editingValue:n})},onBlur:function(t){n(u),e.setState({editingValue:null,editing:!1})},onKeyDown:function(t){13===t.keyCode&&(n(u),e.setState({editingValue:null,editing:!1}))}}):i.createElement("span",{onDoubleClick:function(){e.setState(function(e){return l({},e,{editing:!0,editingValue:r})})}},r))}}]),t}();t.a=s},"./src/components/molecules/Header.js":function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}t.a=function(e){return r(e),a.a.createElement("header",null,a.a.createElement(i.Link,{to:"/"},"Grid Layout Generator"),a.a.createElement("hr",null))};var o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./node_modules/react-router-dom/es/index.js")},"./src/components/organisms/Home.js":function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("./node_modules/react/index.js"),u=n.n(l),s=n("./node_modules/uuid/index.js"),c=n.n(s),d=n("./node_modules/lodash.range/index.js"),m=n.n(d),f=n("./node_modules/lodash.uniq/index.js"),p=n.n(f),g=n("./node_modules/lodash.chunk/index.js"),h=n.n(g),y=n("./src/components/atoms/Cell.js"),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),j=function(e,t,n){var r=t*n-e.length,o=m()(r).map(function(t){return{name:"g"+(e.length+t).toString(),id:c()()}});return e.concat(o)},w=function(e,t){return h()(e,t).map(function(e){return e.map(function(e){return e.name}).join(" ")}).map(function(e){return"'"+e+"'"}).join(" ")},E=function(e){function t(){var e,n,r,i;o(this,t);for(var l=arguments.length,u=Array(l),s=0;s<l;s++)u[s]=arguments[s];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={columns:["1fr"],rows:["1fr"],rowCount:1,columnCount:1,cells:[{name:"g0",id:c()()}]},i=n,a(r,i)}return i(t,u.a.Component),v(t,[{key:"updateCellName",value:function(e,t){this.setState(function(n){return b({},n,{cells:n.cells.map(function(n,r){return n.id===e?(console.log("update",r,r),b({},n,{name:t})):n})})})}},{key:"addRow",value:function(){this.setState(function(e){return b({},e,{rowCount:e.rowCount+1,rows:e.rows.concat(["1fr"]),cells:j(e.cells,e.rowCount+1,e.columnCount)})})}},{key:"addColumn",value:function(){this.setState(function(e){return b({},e,{columnCount:e.columnCount+1,columns:e.columns.concat(["1fr"]),cells:j(e.cells,e.rowCount,e.columnCount+1)})})}},{key:"componentDidUpdate",value:function(){console.log(this.state.cells)}},{key:"render",value:function(){var e=this,t={width:"100%",height:"100%",display:"grid",gridTemplateColumns:this.state.columns.join(" "),gridTemplateRows:this.state.rows.join(" "),gridTemplateAreas:w(this.state.cells,this.state.columnCount)},n=this.state,o=n.cells,a=n.columns,i=n.rows,s=p()(o.map(function(e){return e.name})),c=Object.assign;return u.a.createElement(l.Fragment,null,u.a.createElement("div",{style:{width:"800px",height:"600px"}},u.a.createElement("div",{style:{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"\n                60px 1fr 60px\n              ",gridTemplateRows:"\n                30px\n                1fr\n                30px\n              ",gridTemplateAreas:'\n              "_0   columns addc menu"\n              "rows table   _3   menu"\n              "addr _2      _4   menu"\n\n            '}},u.a.createElement("div",{style:{gridArea:"columns"}},u.a.createElement("div",{style:{display:"grid",gridTemplateColumns:a.join(" "),gridTemplateAreas:'"'+m()(a.length).map(function(e){return"g"+e.toString()}).join(" ")+'"'}},a.map(function(t,n){return u.a.createElement("div",{key:n,style:{gridArea:"g"+n.toString()}},u.a.createElement("input",{style:{width:"100%",boxSizing:"border-box"},value:t,onChange:function(t){return e.setState(b({},e.state,{columns:c([],a,r({},n,t.target.value))}))}}))}))),u.a.createElement("div",{style:{gridArea:"addr"}},u.a.createElement("button",{onClick:this.addRow.bind(this)},"+Row")),u.a.createElement("div",{style:{gridArea:"addc"}},u.a.createElement("button",{onClick:this.addColumn.bind(this)},"+Column")),u.a.createElement("div",{style:{gridArea:"rows"}},u.a.createElement("div",{style:{display:"grid",height:"100%",gridTemplateRows:i.join(" "),gridTemplateAreas:m()(i.length).map(function(e){return'"g'+e+'"'}).join("\n")}},i.map(function(t,n){return u.a.createElement("div",{key:n,style:{gridArea:"g"+n.toString()}},u.a.createElement("input",{style:{width:"100%",boxSizing:"border-box"},value:t,onChange:function(t){return e.setState(b({},e.state,{rows:c([],i,r({},n,t.target.value))}))}}))}))),u.a.createElement("div",{style:{gridArea:"menu"}},"menu"),u.a.createElement("div",{style:{gridArea:"table"}},u.a.createElement("div",{style:t},s.map(function(t,n){var r=o.find(function(e){return e.name===t});return r&&u.a.createElement(y.a,{key:n,gridName:t,cell:r,onSet:function(t){return e.updateCellName(r.id,t)}})}))))),u.a.createElement("pre",null,"style: ",JSON.stringify(t,null,2)))}}]),t}();t.a=E},"./src/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("./node_modules/babel-polyfill/lib/index.js"),o=(n.n(r),n("./node_modules/react/index.js")),a=(n.n(o),n("./node_modules/react-dom/index.js")),i=n.n(a),l=n("./src/components/App.js"),u=document.querySelector("main");u&&i.a.render(o.createElement(l.a,null),u)},1:function(e,t,n){e.exports=n("./src/index.js")}},[1]);