(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[4548],{1997:function(w,b,u){"use strict";u.d(b,{ML:function(){return z},sJ:function(){return J},ZP:function(){return Rn}});var P=u(71194),y=u(50146),q=u(57663),R=u(71577),U=u(49111),A=u(19650),Ln=u(77576),_=u(12028),bn=u(22385),nn=u(31097),Pn=u(402),M=u(97272),m=u(67294),en=u(94184),V=u.n(en),H=u(2824),tn=u(29656),Vn=u(63138),In=u(88386),n=u(85893),un=(0,m.forwardRef)(function(t,e){var r=t.value,a=t.readOnly,o=t.placeholder,c=(0,m.useState)(),h=(0,H.Z)(c,2),i=h[0],x=h[1];(0,m.useEffect)(function(){i&&i.focus()},[i]),(0,m.useImperativeHandle)(e,function(){return{getValue:function(){return i.getValue()},focus:function(){i.focus()},getDoc:function(){return i.getDoc()}}});var E=(0,m.useMemo)(function(){return{mode:"text/x-spreadsheet",line:!0,lineWrapping:!0,readOnly:a,placeholder:o}},[a]),g=function(d,l,s,f,F){var B=d.getDoc(),C=document.createElement("span");C.innerText=f.title||f.path,C.className="formula-tag ".concat(F||"formula-tag-value"),B.markText(l,s,{replacedWith:C})},D=function v(d,l,s){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:[];(f||[]).forEach(function(F){for(var B="#{".concat(F.path,"}"),C=new RegExp(B,"g");C.exec(l)!==null;){var N={line:s,ch:C.lastIndex-B.length},p={line:s,ch:C.lastIndex};g(d,N,p,F)}for(B="#{_".concat(F.path,"}"),C=new RegExp(B,"g");C.exec(l)!==null;){var S={line:s,ch:C.lastIndex-B.length},On={line:s,ch:C.lastIndex};g(d,S,On,F,"formula-tag-text")}F.children&&F.children.length>0&&v(d,l,s,F.children)})},j=function(d,l){var s=l.split(`
`);s.forEach(function(f,F){return D(d,f,F,t.variable)})},T=function(d,l){x(d),r!=null&&r!==""&&j(d,l)},O=function(d,l,s){(s!=null||s!=="")&&j(d,s),t.onChange&&t.onChange(s)};return(0,n.jsx)("div",{className:V()("formula-editor-content",{readOnly:a}),children:(0,n.jsx)(tn.Rt,{autoCursor:!1,value:r,options:E,editorDidMount:T,onChange:O})})}),z=un,Zn=u(47673),rn=u(4107),an=u(86582),Un=u(18106),W=u(67164),Mn=u(20136),on=u(55241),Hn=u(7359),k=u(27279),cn=k.Z.Panel,ln=M.Z.Link;function $(t,e,r){if(t.popover){var a,o;return(0,n.jsx)(on.Z,{content:(0,n.jsxs)("div",{className:"fn-popover-content",children:[(0,n.jsxs)("div",{className:"fn-popover-content-header",children:["\u516C\u5F0F\u7B80\u4ECB",(0,n.jsx)(ln,{href:t.popover.docHref,target:"_blank",children:"\u6587\u6863"})]}),(a=t.popover)===null||a===void 0?void 0:a.content]}),title:(o=t.popover)===null||o===void 0?void 0:o.title,placement:"right",className:"fn-popover",children:(0,n.jsxs)("div",{className:"function-item",onClick:function(){return r&&r(t.name)},children:[(0,n.jsx)("div",{className:"function-item__name",children:t.name}),(0,n.jsx)("div",{className:"function-item__desc",children:t.description})]})},e)}return(0,n.jsxs)("div",{className:"function-item",onClick:function(){return r&&r(t.name)},children:[(0,n.jsx)("div",{className:"function-item__name",children:t.name}),(0,n.jsx)("div",{className:"function-item__desc",children:t.description})]},e)}var sn=function(e){var r=e.dataSource,a=r===void 0?[]:r,o=e.check,c="function-store";return(0,n.jsx)(k.Z,{className:c,bordered:!1,defaultActiveKey:[0],expandIconPosition:"right",ghost:!0,children:a.map(function(h,i){return(0,n.jsx)(cn,{className:"".concat(c,"-group"),header:h.name,children:h.functions.map(function(x,E){return $(x,E,o)})},i)})})},dn=sn,L=u(11849),fn=function(t){return(0,n.jsx)("svg",(0,L.Z)((0,L.Z)({width:"1em",height:"1.2em",viewBox:"0 0 24 24"},t),{},{children:(0,n.jsx)("path",{d:"M12.42 5.29c-1.1-.1-2.07.71-2.17 1.82L10 10h2.82v2h-3l-.44 5.07A4.001 4.001 0 0 1 2 18.83l1.5-1.5c.33 1.05 1.46 1.64 2.5 1.3c.78-.24 1.33-.93 1.4-1.74L7.82 12h-3v-2H8l.27-3.07a4.01 4.01 0 0 1 4.33-3.65c1.26.11 2.4.81 3.06 1.89l-1.5 1.5c-.25-.77-.93-1.31-1.74-1.38M22 13.65l-1.41-1.41l-2.83 2.83l-2.83-2.83l-1.43 1.41l2.85 2.85l-2.85 2.81l1.43 1.41l2.83-2.83l2.83 2.83L22 19.31l-2.83-2.81L22 13.65z",fill:"currentColor"})}))},vn=function(t){return(0,n.jsx)("svg",(0,L.Z)((0,L.Z)({width:"1em",height:"1em",viewBox:"0 0 16 16"},t),{},{children:(0,n.jsx)("g",{fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 5h2V4H1.5l-.5.5v8l.5.5H4v-1H2V5zm12.5-1H12v1h2v7h-2v1h2.5l.5-.5v-8l-.5-.5zm-2.74 2.57L12 7v2.51l-.3.45l-4.5 2h-.46l-2.5-1.5l-.24-.43v-2.5l.3-.46l4.5-2h.46l2.5 1.5zM5 9.71l1.5.9V9.28L5 8.38v1.33zm.58-2.15l1.45.87l3.39-1.5l-1.45-.87l-3.39 1.5zm1.95 3.17l3.5-1.56v-1.4l-3.5 1.55v1.41z"})})}))},zn=u(32157),mn=u(32138),hn=u(57254),Fn=function(e){var r=e.id,a=e.type,o=e.title,c=e.pick,h=(0,m.useCallback)(function(){c&&c()},[]),i=(0,m.useMemo)(function(){return a==="SplitLine"},[]);return(0,n.jsx)("div",{className:V()("field-variable",{disabled:i}),onClick:h,children:o})},Cn=Fn;function Y(t,e){return{title:(0,n.jsx)(Cn,{type:t.type,id:t.id,title:t.title,pick:function(){return e&&e(t)}}),key:t.id,children:(t.children||[]).map(function(r){return Y(r,e)})}}var pn=function(e){var r=e.dataSource,a=e.pick,o=(0,m.useMemo)(function(){return r.map(function(c){return Y(c,a)})},[]);return(0,n.jsx)(mn.Z,{blockNode:!0,showLine:{showLeafIcon:!1},switcherIcon:(0,n.jsx)(hn.Z,{}),className:"hide-file-icon",treeData:o,selectable:!1})},xn=pn,En=u(76570),Wn=u(54421),G=u(38272),gn=function(e){var r=e.check,a=e.dataSource;return(0,n.jsx)(G.ZP,{bordered:!1,dataSource:a,className:"function-store-group",renderItem:function(c){return(0,n.jsx)(G.ZP.Item,{children:$(c,c.name,r)})}})},jn=gn,K=W.Z.TabPane,Bn=function(e){var r=e.variables,a=r===void 0?[]:r,o=e.insertFun,c=e.insertVariable,h=e.functionVisible,i=h===void 0?!0:h,x="formula-editor-toolbar",E=(0,m.useState)([]),g=(0,H.Z)(E,2),D=g[0],j=g[1],T=(0,m.useCallback)(function(v){return(0,n.jsxs)("span",{children:[v.icon?(0,n.jsx)("span",{role:"img",className:"anticon",children:v.icon}):null,v.name]})},[]),O=function(d){var l;if(!d){j([]);return}var s=new Set;j(((l=e.functions)===null||l===void 0?void 0:l.reduce(function(f,F){return f.push.apply(f,(0,an.Z)(F.functions.filter(function(B){return B.name.includes(d.toUpperCase())}))),f},[]).filter(function(f){return s.has(f.name)?!1:(s.add(f.name),!0)}))||[])};return(0,n.jsx)("div",{className:x,children:(0,n.jsxs)(W.Z,{defaultActiveKey:i?"fx":"field",centered:i,children:[i&&(0,n.jsxs)(K,{tab:(0,n.jsx)(T,{name:"\u51FD\u6570",icon:(0,n.jsx)(fn,{})}),children:[(0,n.jsx)(rn.Z,{placeholder:"\u641C\u7D22\u516C\u5F0F",prefix:(0,n.jsx)(En.Z,{}),allowClear:!0,onChange:function(d){return O(d.target.value)}}),D.length>0&&(0,n.jsx)(jn,{dataSource:D,check:o}),D.length===0&&(0,n.jsx)(dn,{dataSource:e.functions,check:o})]},"fx"),(0,n.jsx)(K,{tab:(0,n.jsx)(T,{name:"\u5B57\u6BB5",icon:(0,n.jsx)(vn,{})}),children:(0,n.jsx)("div",{children:(0,n.jsx)(xn,{dataSource:a,pick:c})})},"field")]})})};function I(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];return(0,n.jsxs)("div",{className:"fn-popover-title",children:[t,"(",r.map(function(o,c){return(0,n.jsxs)("span",{className:"fn-popover-arg",children:[o," ",c===r.length-1?"":","]},c)}),")"]})}var Q="https://support.microsoft.com/zh-cn/office/",Z=[{name:"\u903B\u8F91",functions:[{name:"IF",description:"\u6839\u636E\u5224\u65AD\u6761\u4EF6\uFF0C\u8FD4\u56DE\u6B63\u786E\u6216\u9519\u8BEF\u7684\u503C"},{name:"AND",description:"\u8FD4\u56DE\u903B\u8F91\u503C\uFF1A\u5982\u679C\u6240\u6709\u53C2\u6570\u503C\u5747\u4E3A\u903B\u8F91\u201Ctrue\u201D\uFF0C\u5219\u8FD4\u56DE\u903B\u8F91\u201Ctrue\u201D\uFF0C\u53CD\u4E4B\u8FD4\u56DE\u903B\u8F91\u201Cfalse",popover:{title:I("AND","logical1","logical2","..."),content:(0,n.jsxs)("div",{className:"fn-popover-content",children:["\u4EFB\u4F55\u4E00\u4E2A\u53C2\u6570\u7684\u903B\u8F91\u503C\u4E3Afalse\uFF0C\u5373\u8FD4\u56DE false\uFF1B",(0,n.jsx)("br",{})," \u53EA\u6709\u5F53\u6240\u6709\u53C2\u6570\u7684\u903B\u8F91\u503C\u4E3Atrue\uFF0C\u624D\u8FD4\u56DE true\u3002",(0,n.jsx)("br",{}),"logical:\u903B\u8F91\u503C\uFF0C\u4F8B\u5982\uFF0C2>1\u7684\u903B\u8F91\u503C\u4E3A true"]})}},{name:"OR",description:"\u4EFB\u4F55\u4E00\u4E2A\u53C2\u6570\u903B\u8F91\u503C\u4E3Atrue\uFF0C\u5373\u8FD4\u56DEtrue\uFF1B\u53EA\u6709\u5F53\u6240\u6709\u903B\u8F91\u53C2\u6570\u503C\u4E3Afalse\uFF0C\u624D\u8FD4\u56DEfalse"},{name:"XOR",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u6570\u7684\u5F02\u6216\u503C"},{name:"NOT",description:"\u5BF9\u53C2\u6570\u903B\u8F91\u503C\u6C42\u53CD"}]},{name:"\u6587\u5B57",functions:[{name:"SUBSTITUTE",description:"\u5728\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u7528 new_text \u66FF\u6362 old_text",popover:{title:I("SUBSTITUTE","old_text","new_text","[instance_num]"),content:(0,n.jsxs)("div",{className:"fn-popover-content",children:["\u5728\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u7528 new_text \u66FF\u6362 old_text\u3002",(0,n.jsx)("br",{}),"\u5982\u679C\u9700\u8981\u5728\u67D0\u4E00\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u66FF\u6362\u6307\u5B9A\u7684\u6587\u672C\uFF0C\u8BF7\u4F7F\u7528\u51FD\u6570 SUBSTITUTE\uFF1B",(0,n.jsx)("br",{}),"\u5982\u679C\u9700\u8981\u5728\u67D0\u4E00\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u66FF\u6362\u7279\u5B9A\u4F4D\u7F6E\u5904\u7684\u4EFB\u610F\u6587\u672C\uFF0C\u8BF7\u4F7F\u7528\u51FD\u6570 REPLACE\u3002"]}),docHref:"".concat(Q,"substitute-\u51FD\u6570-6434944e-a904-4336-a9b0-1e58df3bc332")}},{name:"CONCATENATE",description:"\u5C06\u591A\u4E2A\u6587\u5B57\u5408\u5E76"},{name:"LEFT",description:"\u4ECE\u5DE6\u8FB9\u622A\u53D6\u6307\u5B9A\u957F\u5EA6\u7684\u6587\u5B57"},{name:"RIGHT",description:"\u4ECE\u53F3\u8FB9\u8FB9\u622A\u53D6\u6307\u5B9A\u957F\u5EA6\u7684\u6587\u5B57"},{name:"MID",description:"\u622A\u53D6\u6307\u5B9A\u4F4D\u7F6E\u7684\u6587\u5B57"},{name:"REPLACE",description:"\u66FF\u6362\u6587\u672C\u4E2D\u7684\u6307\u5B9A\u6587\u5B57",popover:{title:I("REPLACE","old_text","start_num","num_chars","new_text"),content:(0,n.jsxs)("div",{className:"fn-popover-content",children:["\u6839\u636E\u6307\u5B9A\u7684\u5B57\u7B26\u6570\uFF0CREPLACE \u5C06\u90E8\u5206\u6587\u672C\u5B57\u7B26\u4E32\u66FF\u6362\u4E3A\u4E0D\u540C\u7684\u6587\u672C\u5B57\u7B26\u4E32\u3002",(0,n.jsx)("br",{}),"REPLACEB \u4F7F\u7528\u5176\u4ED6\u6587\u672C\u5B57\u7B26\u4E32\u5E76\u6839\u636E\u6240\u6307\u5B9A\u7684\u5B57\u8282\u6570\u66FF\u6362\u67D0\u6587\u672C\u5B57\u7B26\u4E32\u4E2D\u7684\u90E8\u5206\u6587\u672C\u3002"]}),docHref:"".concat(Q,"replace-replaceb-\u51FD\u6570-8d799074-2425-4a8a-84bc-82472868878a")}},{name:"TRIM",description:"\u79FB\u9664\u6587\u5B57\u5934\u5C3E\u7684\u7A7A\u683C"},{name:"LEN",description:"\u540E\u53BB\u6587\u5B57\u7684\u957F\u5EA6"},{name:"LOWER",description:"\u8F6C\u6210\u5C0F\u5199\u6587\u5B57"},{name:"UPPER",description:"\u8F6C\u6210\u5927\u5199\u6587\u5B57"}]},{name:"\u6570\u5B57",functions:[{name:"AVERAGE",description:"\u8BA1\u7B97\u6240\u6709\u53C2\u4E0E\u8FD0\u7B97\u5B57\u6BB5\u7684\u5E73\u5747\u503C"},{name:"COUNT",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u8FD0\u7B97\u5B57\u6BB5\u4E2D\u503C\u6570\u5B57\u7684\u6570\u91CF"},{name:"COUNTA",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u8FD0\u7B97\u5B57\u6BB5\u4E2D\u503C\u4E0D\u4E3A\u7A7A\u7684\u6570\u91CF"},{name:"COUNTIF",description:"COUNTIF(\u8868\u683C[\u91D1\u989D], 100)\uFF0C\u53EF\u5F97\u5230\u8868\u683C\u4E2D\u91D1\u989D\u4E3A100\u7684\u6570\u636E\u6761\u6570"},{name:"MAX",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u5B57\u6BB5\u4E2D\u7684\u6700\u5927\u503C"},{name:"MIN",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u5B57\u6BB5\u4E2D\u7684\u6700\u5C0F\u503C"},{name:"ROUND",description:"\u5C06\u6570\u5B57\u56DB\u820D\u4E94\u5165\u5230\u6307\u5B9A\u7684\u4F4D\u6570"},{name:"INT",description:"\u5C06\u6570\u5B57\u5411\u4E0B\u53D6\u6574"},{name:"MOD",description:"\u8FD4\u56DE\u4E24\u6570\u76F8\u9664\u7684\u4F59\u6570"},{name:"PRODUCT",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u5B57\u6BB5\u4E2D\u6570\u503C\u7684\u4E58\u79EF"},{name:"SUM",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u5B57\u6BB5\u4E2D\u6570\u503C\u7684\u603B\u548C"},{name:"SUMPRODUCT",description:"\u8FD4\u56DE\u6240\u6709\u53C2\u4E0E\u5B57\u6BB5\u4E2D\u6570\u503C\u7684\u603B\u548C"},{name:"SUMIF",description:"\u7EDF\u8BA1\u8868\u683C\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u6570\u503C\uFF0C\u5E76\u6C42\u548C"},{name:"ROUNDUP",description:"\u5C06\u6570\u5B57\u4FDD\u7559\u6307\u5B9A\u7684\u4F4D\u6570\uFF0C\u6700\u540E\u4E00\u4F4D\u5411\u4E0A\u53D6"},{name:"ROUNDDOWN",description:"\u5C06\u6570\u5B57\u4FDD\u7559\u6307\u5B9A\u7684\u4F4D\u6570\uFF0C\u6700\u540E\u4E00\u4F4D\u5411\u4E0B\u53D6"},{name:"POWER",description:"\u8BA1\u7B97\u6570\u5B57num\u7684n\u6B21\u65B9\uFF0Cn\u53EF\u4EE5\u4E3A\u5206\u6570\u6216\u8005\u6574\u6570"},{name:"LN",description:"\u8BA1\u7B97\u6307\u5B9A\u6570\u5B57\u7684\u81EA\u7136\u5BF9\u6570"},{name:"SQRT",description:"\u8BA1\u7B97\u6307\u5B9A\u6570\u5B57\u7684\u5E73\u65B9\u6839"}]},{name:"\u65F6\u95F4",functions:[{name:"YEAR",description:"\u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u5E74\u4EFD"},{name:"MONTH",description:"\u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u6708\u4EFD"},{name:"DAY",description:"\u8FD4\u56DE\u65E5\u671F\u5728\u4E00\u4E2A\u6708\u4E2D\u7684\u7B2C\u51E0\u5929\u7684\u6570\u503C"},{name:"HOUR",description:"\u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u5C0F\u65F6\uFF0C\u65E5\u671F\u5B57\u6BB5\u5FC5\u987B\u7CBE\u786E\u5230\u65F6\u95F4\u624D\u53EF\u4EE5\u8BA1\u7B97\u51FA\u6765"},{name:"MINUTE",description:"\u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u5206\u949F\uFF0C\u65E5\u671F\u5B57\u6BB5\u5FC5\u987B\u7CBE\u786E\u5230\u65F6\u95F4\u624D\u53EF\u4EE5\u8BA1\u7B97\u51FA\u6765"},{name:"SECOND",description:"\u8FD4\u56DE\u65E5\u671F\u4E2D\u7684\u79D2\uFF0C\u65E5\u671F\u5B57\u6BB5\u5FC5\u987B\u7CBE\u786E\u5230\u65F6\u95F4\u624D\u53EF\u4EE5\u8BA1\u7B97\u51FA\u6765"},{name:"DATE",description:"\u5C06\u6570\u5B57\u62FC\u63A5\u6210\u4E3A\u5E74\u4EFD\uFF0C\u6570\u5B57\u5B57\u6BB5\u987A\u5E8F\u4E3A\uFF1A\u5E74\uFF0F\u6708\uFF0F\u65E5\uFF0F\u65F6\uFF0F\u5206\uFF0F\u79D2"},{name:"CURDATE",description:"\u8FD4\u56DE\u5F53\u524D\u65E5\u671F"},{name:"NOW",description:"\u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u65F6/\u5206/\u79D2"},{name:"DAYS",description:"\u8FD4\u56DE\u65E5\u671F\u5B57\u6BB51\u4E0E\u65E5\u671F\u5B57\u6BB52\u7684\u5DEE\u503C\uFF0C\u5355\u4F4D\u4E3A\u5929"},{name:"DATEDELTA",description:"\u5C06\u6307\u5B9A\u65E5\u671F\u52A0/\u51CF\u6307\u5B9A\u5929\u6570\uFF0C\u5E76\u8FD4\u56DE\u76EE\u6807\u65E5\u671F"}]}];function Dn(t){if(t){var e=Z.map(function(a){return a.functions}).reduce(function(a,o){return a.concat(o)},[]),r=t.map(function(a){return e.find(function(o){return o.name===a})});return[{name:"\u5E38\u7528",functions:r}].concat(Z)}return Z}var X=u(76826);function Nn(t){return!!(t==="SplitLine"||t==="Pagination"||t==="Remark"||t==="Signature"||t==="Upload"||t&&t.startsWith("Matrix"))}function Sn(t){return!!["Dept","FillBlank","User","Score","Nps","Textarea"].includes(t)}var kn=function t(e){var r;(r=e.children)===null||r===void 0||r.forEach(function(a){a.parent=e,t(a)})},J=function t(e,r,a,o){var c;if(!e)return[];var h=!1;return((c=e.children)===null||c===void 0?void 0:c.filter(function(i){return i===r&&!a?(h=!0,!1):o&&!o.includes(i.type)?!1:!Nn(i.type)&&!h}).map(function(i){var x,E=i.id,g=i.title,D=i.type,j=i.type===void 0?"".concat((x=i.parent)===null||x===void 0?void 0:x.id,".").concat(E):E;return Sn(i.type)?{id:E,path:j,title:(0,X.WO)(g),type:D}:{id:E,path:j,title:(0,X.WO)(g),type:D,children:t(i,r,a,o)}}))||[]},Tn=u(1870),An=M.Z.Link,yn=function(e){var r=e.title,a=e.subTitle,o=e.helpLink,c=e.onOk,h=e.value,i=e.className,x=e.onCancel,E=e.fieldAll,g=e.visible,D=g===void 0?!0:g,j=e.schema,T=e.current,O=e.functions,v=e.functionVisible,d=e.fieldTypes,l=(0,m.useRef)(null),s="formula-editor",f=(0,m.useRef)(""),F=(0,m.useCallback)(function(N){if(l.current!=null){var p=l.current.getDoc(),S=p.getCursor();p.replaceRange("".concat(N,"()"),S),S.ch+=N.length+1,p.setCursor(S),l.current.focus()}},[l.current]),B=(0,m.useCallback)(function(N){if(l.current!=null){var p=l.current.getDoc(),S=p.getCursor();p.replaceRange("#{".concat(f.current).concat(N.path,"}"),S,S),l.current.focus()}},[l.current]),C=(0,m.useMemo)(function(){return J(j,T,E,d)},[j,T,E,d]);return(0,n.jsx)(y.Z,{onCancel:x,visible:D,maskClosable:!1,getContainer:e.getContainer,title:r,width:1e3,footer:!1,onOk:function(p){p.stopPropagation(),c(l.current.getValue())},keyboard:!1,children:(0,n.jsxs)("div",{className:V()(s,i),children:[(0,n.jsx)(Bn,{functionVisible:v,functions:O||Dn(e.commonUseFunctionNames),variables:C,insertFun:F,insertVariable:B}),(0,n.jsxs)("div",{className:"".concat(s,"-main"),children:[(0,n.jsxs)("div",{className:"".concat(s,"-main__code"),children:[(0,n.jsxs)("h1",{children:[(0,n.jsxs)("span",{className:"equle",children:[a,"="]}),(0,n.jsxs)("span",{style:{float:"right"},children:[(0,n.jsx)(nn.Z,{title:"\u903B\u8F91\u8868\u793A\u4F7F\u7528\u5177\u4F53\u503C\u53C2\u4E0E\u903B\u8F91\u8BA1\u7B97\uFF0C\u5982\u5355\u9009\u9898\u9009\u4E2D\u4E3A true;\u6587\u672C\u8868\u793A\u4F7F\u7528\u6807\u9898\u53C2\u4E0E\u6587\u672C\u8BA1\u7B97\uFF0C\u5982\u5355\u9009\u9898\u9009\u4E2D\u9009\u9879\u7684\u6587\u672C\u3002",children:(0,n.jsx)(Tn.Z,{style:{fontSize:16,marginRight:10}})}),(0,n.jsx)(_.Z,{checkedChildren:"\u903B\u8F91",defaultChecked:!0,unCheckedChildren:"\u6587\u672C",onChange:function(p){p?f.current="":f.current="_"}})]})]}),(0,n.jsx)("div",{style:{fontSize:14,color:"#b0b0b9"},children:"\u5728\u5DE6\u4FA7\u9009\u62E9\u51FD\u6570\u6216\u5B57\u6BB5\u53D8\u91CF\uFF0C\u4E14\u5728\u82F1\u6587\u8F93\u5165\u6CD5\u4E0B\u7F16\u8F91"})]}),(0,n.jsx)("div",{className:"".concat(s,"-main__panel"),children:(0,n.jsx)(z,{ref:l,variable:C,value:h})}),(0,n.jsxs)("div",{className:"".concat(s,"-main__footer"),children:[(0,n.jsxs)(A.Z,{children:[(0,n.jsx)("span",{children:o}),(0,n.jsx)(An,{href:"https://support.microsoft.com/zh-cn/office/excel-%E5%87%BD%E6%95%B0-%E6%8C%89%E7%B1%BB%E5%88%AB%E5%88%97%E5%87%BA-5f91f4e9-7b42-46d2-9bd1-63f26a86c0eb",target:"_blank",children:"\u516C\u5F0F\u6587\u6863"})]}),(0,n.jsxs)(A.Z,{children:[(0,n.jsx)(R.Z,{onClick:function(){x&&x()},children:"\u53D6\u6D88"}),(0,n.jsx)(R.Z,{type:"primary",onClick:function(p){p.stopPropagation(),c(l.current.getValue())},children:"\u786E\u5B9A"})]})]})]})]})})},Rn=yn},11628:function(w,b,u){"use strict";u.d(b,{xI:function(){return y},Ge:function(){return U},IE:function(){return R}});var P=u(67294),y=(0,P.createContext)({}),q=y.Provider;function R(){var A=(0,P.useContext)(y);return A.store}function U(){var A=R();return A.flowStore}}}]);
