(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1147:function(e,n,t){var r=t(1148);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(178)(r,o);r.locals&&(e.exports=r.locals)},1148:function(e,n,t){(e.exports=t(177)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\n\n.markup.slice_container {\n  margin: 10px;\n}\n.separator {\n  background-color: transparent !important;\n}\n.separator hr {\n  border: 0;\n  height: 1px;\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));\n}\n.separator .chart-header {\n  border: none !important;\n}\n',""])},1719:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t.n(r),a=t(0),i=t.n(a);t(1147);var s={className:i.a.string,cssFiles:i.a.arrayOf(i.a.string),height:i.a.number.isRequired,html:i.a.string,isSeparator:i.a.bool},p={overflow:"auto",position:"relative"},c=function(e){function n(){return e.apply(this,arguments)||this}return function(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}(n,e),n.prototype.render=function(){var e=this.props,n=e.className,t=e.height,r=e.isSeparator,a=e.html,i=e.cssFiles;return o.a.createElement("div",{className:n,style:p},o.a.createElement("iframe",{title:"superset-markup",frameBorder:0,height:r?t-20:t,sandbox:"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation",srcDoc:"\n            <html>\n              <head>\n                "+i.map(function(e){return'<link rel="stylesheet" type="text/css" href="'+e+'" />'})+'\n              </head>\n              <body style="background-color: transparent;">\n                '+a+"\n              </body>\n            </html>"}))},n}(o.a.PureComponent);c.propTypes=s,c.defaultProps={className:"",cssFiles:[],html:"",isSeparator:!1},n.default=c}}]);