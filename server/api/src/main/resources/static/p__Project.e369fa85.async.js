(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[7562],{2909:function(Cn,I,t){"use strict";t.r(I),t.d(I,{Home:function(){return H},default:function(){return vn}});var xn=t(14781),Y=t(58998),fn=t(57663),v=t(71577),gn=t(13062),p=t(71230),Zn=t(89032),Q=t(15746),jn=t(88983),T=t(47933),d=t(11849),yn=t(47673),N=t(4107),En=t(17462),J=t(76772),Sn=t(30887),f=t(54689),A=t(2824),Dn=t(71194),W=t(50146),D=t(67294),X=t(15873),F=t(57119),$=t(18401),w=t(34707),B=t(49101),b=t(51615),M=t(2299),z=t(72706),q=t(70844),S=t(68489),Pn=t(54421),O=t(38272),Tn=t(58024),_=t(39144),On=t(54029),K=t(79166),In=t(59250),k=t(13013),nn=t(86582),Nn=t(13254),L=t(14277),tn=t(8212),en=t(92570),on=t(57820),sn=t(24616),R=t(44545),g=t(42285),n=t(85893),an=(0,M.Pi)(function(m){var Z=m.moreMenu,h=(0,S.ok)(),j=h.loading,C=h.projects,i={},r=function(e,o,a){e.stopPropagation(),a!=="more"&&g.m8.push("/survey/".concat(o.id,"/").concat(a))};return C.length===0?(0,n.jsx)(L.Z,{image:L.Z.PRESENTED_IMAGE_SIMPLE,imageStyle:{height:60},description:(0,n.jsx)("span",{children:"\u5F53\u524D\u8FD8\u6CA1\u6709\u521B\u5EFA\u95EE\u5377"})}):(0,n.jsx)(O.ZP,{rowKey:"id",className:"survey-home-content",loading:j,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:[i].concat((0,nn.Z)(C)),renderItem:function(e){return e&&e.id?(0,n.jsx)(O.ZP.Item,{children:(0,n.jsx)(_.Z,{onClick:function(){return g.m8.push("/survey/".concat(e.id))},hoverable:!0,actions:[(0,n.jsx)(v.Z,{shape:"circle",size:"small",icon:(0,n.jsx)(tn.Z,{onClick:function(a){return r(a,e,"edit")}},"edit")}),(0,n.jsx)(v.Z,{shape:"circle",size:"small",icon:(0,n.jsx)(en.Z,{onClick:function(a){return r(a,e,"data")}},"data")}),(0,n.jsx)(v.Z,{shape:"circle",size:"small",icon:(0,n.jsx)(on.Z,{onClick:function(a){return r(a,e,"report")}},"report")}),(0,n.jsx)(v.Z,{shape:"circle",size:"small",icon:(0,n.jsx)(sn.Z,{onClick:function(a){return r(a,e,"setting")}},"setting")}),(0,n.jsx)(v.Z,{shape:"circle",size:"small",icon:(0,n.jsx)(k.Z,{overlay:Z(e),trigger:["click"],children:(0,n.jsx)(R.Z,{onClick:function(a){return r(a,e,"more")}},"ellipsis")})})],children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"title",children:e.name}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsx)("div",{className:"publish-status",children:e.setting.status===1?(0,n.jsx)(K.Z,{status:"processing",text:"\u6536\u96C6\u4E2D",className:"yes"}):(0,n.jsx)(K.Z,{status:"warning",text:"\u672A\u53D1\u5E03",className:"no"})}),(0,n.jsxs)("div",{className:"total",children:[(0,n.jsx)("span",{children:e.total}),"\u4EFD\u6570\u636E"]})]})]})})},e.id):(0,n.jsx)(O.ZP.Item,{children:(0,n.jsxs)(v.Z,{type:"dashed",className:"newButton",onClick:function(){return g.m8.push("/survey/new")},children:[(0,n.jsx)(B.Z,{})," \u65B0\u589E\u95EE\u5377"]})})}})}),ln=an,An=t(66456),rn=t(48995),Fn=t(71153),U=t(60331),un=t(77613),cn=(0,un.P)(function(m){var Z=m.moreMenu,h=(0,S.ok)(),j=h.loading,C=h.projects,i=function(e,o){return{onClick:function(){o==="name"?g.m8.push("/survey/".concat(e.id,"/edit")):o==="total"?g.m8.push("/survey/".concat(e.id,"/data")):g.m8.push("/survey/".concat(e.id))}}},r=[{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"name",onCell:function(e){return i(e,"name")}},{title:"\u9879\u76EE\u72B6\u6001",dataIndex:"status",onCell:function(e){return i(e,"status")},render:function(e,o){var a=o.setting.status;return a===0?(0,n.jsx)(U.Z,{color:"warning",children:"\u672A\u5F00\u59CB"}):(0,n.jsx)(U.Z,{color:"processing",children:"\u6536\u96C6\u4E2D"})}},{title:"\u7B54\u5377\u6570",dataIndex:"total",onCell:function(e){return i(e,"total")}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createAt",onCell:function(e){return i(e,"createAt")}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateAt",onCell:function(e){return i(e,"updateAt")}},{title:"\u64CD\u4F5C",dataIndex:"operate",render:function(e,o){return(0,n.jsx)(k.Z,{overlay:Z(o),trigger:["click"],children:(0,n.jsx)(R.Z,{},"ellipsis")})}}];return(0,n.jsx)("div",{children:(0,n.jsx)(rn.Z,{dataSource:C,loading:j,columns:r,rowKey:"id",pagination:!1,rowClassName:function(){return"project-list-row"}})})}),dn=cn,P=W.Z.confirm,G="home-content-type",H=(0,M.Pi)(function(){var m=(0,S.ok)(),Z=(0,D.useRef)(""),h=(0,D.useState)(localStorage.getItem(G)||"card"),j=(0,A.Z)(h,2),C=j[0],i=j[1],r=(0,D.useState)({current:1,pageSize:11}),l=(0,A.Z)(r,2),e=l[0],o=l[1],a=(0,b.k6)();(0,D.useEffect)(function(){m.loadProjects(e)},[e,m]);var V=function(s){return(0,n.jsxs)(f.Z,{onClick:function(E){return E.domEvent.stopPropagation()},children:[(0,n.jsx)(f.Z.Item,{onClick:function(){return window.open("/s/".concat(s.id))},children:"\u9884\u89C8"},"preview"),(0,n.jsx)(f.Z.Item,{onClick:function(){P({title:"\u95EE\u5377\u91CD\u547D\u540D",icon:void 0,content:(0,n.jsxs)("div",{children:[(0,n.jsx)(J.Z,{message:"\u95EE\u5377\u91CD\u547D\u540D\u6210\u529F\uFF0C\u7CFB\u7EDF\u5185\u5404\u5904\u5C06\u663E\u793A\u91CD\u547D\u540D\u6807\u9898\u3002\u6B64\u64CD\u4F5C\u4E0D\u5F71\u54CD\u516C\u5F00\u95EE\u5377\u540D\u79F0",type:"info",showIcon:!0}),(0,n.jsx)(N.Z,{style:{marginTop:10},onChange:function(c){return Z.current=c.target.value},defaultValue:s.name})]}),okText:"\u786E\u8BA4",okType:"primary",cancelText:"\u53D6\u6D88",onOk:function(){new z.Uf(s.id).saveOrUpdateProject({name:Z.current}).then(function(c){c.code===200&&o(function(x){return(0,d.Z)({},x)})})}})},children:"\u91CD\u547D\u540D"},"rename"),s.setting.status===0&&(0,n.jsx)(f.Z.Item,{onClick:function(){P({title:"\u786E\u5B9A\u53D1\u5E03\u5F53\u524D\u95EE\u5377?",icon:(0,n.jsx)(X.Z,{style:{color:"#1890ff"}}),content:"\u53EA\u6709\u53D1\u5E03\u7684\u95EE\u5377\u624D\u80FD\u6536\u96C6\u6570\u636E",okText:"\u53D1\u5E03",okType:"primary",cancelText:"\u53D6\u6D88",onOk:function(){S.hi.updateSetting({id:s.id,settingKey:"status",settingValue:1}).then(function(c){c.code===200&&o(function(x){return(0,d.Z)({},x)})})}})},children:"\u53D1\u5E03"},"publish"),s.setting.status===1&&(0,n.jsx)(f.Z.Item,{onClick:function(){P({title:"\u786E\u5B9A\u505C\u6B62\u5F53\u524D\u95EE\u5377?",icon:(0,n.jsx)(F.Z,{}),content:"\u505C\u6B62\u4E4B\u540E\u95EE\u5377\u5C06\u4E0D\u80FD\u7EE7\u7EED\u6536\u96C6\u6570\u636E",okText:"\u505C\u6B62",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){S.hi.updateSetting({id:s.id,settingKey:"status",settingValue:0}).then(function(c){c.code===200&&o(function(x){return(0,d.Z)({},x)})})}})},children:"\u505C\u6B62"},"stop"),(0,n.jsx)(f.Z.Item,{onClick:function(){P({title:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u95EE\u5377?",icon:(0,n.jsx)(F.Z,{}),content:"\u5220\u9664\u4E4B\u540E\u53EF\u4EE5\u5728\u56DE\u6536\u7AD9\u91CC\u9762\u627E\u56DE",okText:"\u5220\u9664",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){new z.Uf(s.id).deleteProject(s.id).then(function(c){c.code===200&&o(function(x){return(0,d.Z)({},x)})})}})},children:"\u5220\u9664"},"delete")]})},mn=function(){return C==="card"?(0,n.jsx)(ln,{moreMenu:V}):(0,n.jsx)(dn,{moreMenu:V})},hn=(0,n.jsx)("div",{children:(0,n.jsx)(p.Z,{className:"survey-home-search",children:(0,n.jsxs)(Q.Z,{span:24,children:[(0,n.jsxs)(T.ZP.Group,{value:C,onChange:function(s){i(s.target.value),localStorage.setItem(G,s.target.value)},children:[(0,n.jsx)(T.ZP.Button,{value:"card",children:(0,n.jsx)($.Z,{})}),(0,n.jsx)(T.ZP.Button,{value:"list",children:(0,n.jsx)(w.Z,{})})]}),(0,n.jsx)(N.Z.Search,{className:"search",placeholder:"\u641C\u7D22\u9879\u76EE\u540D\u79F0",onSearch:function(s){o(function(u){return(0,d.Z)((0,d.Z)({},u),{},{name:s})})}})]})})});return(0,n.jsx)(q.ZP,{title:"\u6211\u7684\u95EE\u5377",content:hn,extra:[(0,n.jsx)(v.Z,{type:"primary",icon:(0,n.jsx)(B.Z,{}),onClick:function(){return a.push("/survey/new")},children:"\u65B0\u589E\u95EE\u5377"},"add")],children:(0,n.jsxs)("div",{className:"survey-home",children:[mn(),(0,n.jsx)("div",{className:"pagination-container",children:(0,n.jsx)(Y.Z,{size:"small",current:e.current,pageSize:e.pageSize,total:m.total,showTotal:function(s){return"\u5171 ".concat(s," \u6761")},onChange:function(s){o(function(u){return(0,d.Z)((0,d.Z)({},u),{},{current:s})})}})})]})})}),vn=H}}]);
