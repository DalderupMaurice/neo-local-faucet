!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){var t=e.body,n=e.styles,r=e.title;return'\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n      <title>'.concat(r,"</title>\n      ").concat(n,'\n      <link rel="stylesheet" type="text/css" href="https://unpkg.com/antd/dist/antd.min.css">\n      <link rel="shortcut icon" href="/assets/favicon.ico">\n    </head>\n    <body style="margin:0; background-color:#fff;">\n      <div id="app">').concat(t,"</div>\n    </body>\n  </html>\n")};t.default=r},function(e,t){e.exports=require("antd")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=(a(n(0)),n(3));function a(e){return e&&e.__esModule?e:{default:e}}var l=o.Layout.Header,u=o.Layout.Content,c=o.Layout.Footer,s=(o.Layout.Sider,function(e){return r.default.createElement(o.Layout,null,r.default.createElement(l,{style:{textAlign:"center",backgroundColor:"#f0f2f5"}},r.default.createElement("h1",null,"⛽ NEO Privatenet Faucet")),r.default.createElement(u,{style:{padding:"0 50px"}},r.default.createElement(o.Layout,null,r.default.createElement(u,{style:{backgroundColor:"#ffffff",padding:32,minHeight:"calc(100vh - 133px)"}},r.default.createElement(o.Row,null,r.default.createElement(o.Col,{xs:{span:20,push:2},md:{span:16,push:4},lg:{span:12,push:6},xl:{span:8,push:8}},r.default.createElement(o.Alert,{message:"Ready for refill",description:"Your address hasn't used the faucet recently, you're good to go.",type:"success",showIcon:!0})))))),r.default.createElement(c,{style:{textAlign:"center"}},"Made by City Of Zion"))});t.default=s},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=s(n(6)),o=s(n(1)),a=n(5),l=s(n(4)),u=s(n(2)),c=n(0);function s(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)();i.use("/assets",r.default.static("assets")),i.get("/",function(e,t){var n=new c.ServerStyleSheet,r=(0,a.renderToString)(n.collectStyles(o.default.createElement(l.default,null))),s=n.getStyleTags();t.send((0,u.default)({body:r,styles:s,title:"NEO faucet"}))}),i.listen(4002),console.log("Serving at http://localhost:".concat(4002))}]);