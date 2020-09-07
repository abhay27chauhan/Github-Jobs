(this["webpackJsonpgithub-jobs"]=this["webpackJsonpgithub-jobs"]||[]).push([[0],{158:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),o=(t(56),t(19)),s=t(9),m=t(11),u=(t(57),t(12)),i=t.n(u),p="make-request",E="get-data",b="error",d="update-has-next-page",g="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";function h(e,a){switch(a.type){case p:return{loading:!0,jobs:[]};case E:return Object(s.a)({},e,{loading:!1,jobs:a.payload.jobs});case b:return Object(s.a)({},e,{loading:!1,error:a.payload.error,jobs:[]});case d:return Object(s.a)({},e,{hasNextPage:a.payload.hasNextPage});default:return e}}var f=t(162),y=t(166);function j(e){var a=e.page,t=e.setPage,n=e.hasNextPage;function c(e){return t((function(a){return a+e}))}return r.a.createElement(y.a,null,1!==a&&r.a.createElement(y.a.Prev,{onClick:function(){return c(-1)}}),1!==a&&r.a.createElement(y.a.Item,{onClick:function(){return t(1)}},"1"),a>2&&r.a.createElement(y.a.Ellipsis,null),a>2&&r.a.createElement(y.a.Item,{onClick:function(){return c(-1)}},a-1),r.a.createElement(y.a.Item,{active:!0},a),n&&r.a.createElement(y.a.Item,{onClick:function(){return c(1)}},a+1),n&&r.a.createElement(y.a.Next,{onClick:function(){return c(1)}}))}var v=t(165),k=t(160),N=t(161),x=t(164),C=t(30),O=t.n(C);function w(e){var a=e.job,t=Object(n.useState)(!1),c=Object(m.a)(t,2),l=c[0],o=c[1];return r.a.createElement(v.a,{className:"mb-3"},r.a.createElement(v.a.Body,null,r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement(v.a.Title,null,a.title," -"," ",r.a.createElement("span",{className:"text-muted font-weight-light"},a.company)),r.a.createElement(v.a.Subtitle,{className:"text-muted mb-2"},new Date(a.created_at).toLocaleDateString()),r.a.createElement(k.a,{variant:"secondary",className:"mr-2"},a.type),r.a.createElement(k.a,{variant:"secondary"},a.location),r.a.createElement("div",{style:{wordBreak:"break-all"}},r.a.createElement(O.a,{source:a.how_to_apply}))),r.a.createElement("img",{className:"d-none d-md-block",height:"50",alt:a.company,src:a.company_logo})),r.a.createElement(v.a.Text,null,r.a.createElement(N.a,{onClick:function(){return o((function(e){return!e}))}},l?"Hide Details":"View Details")),r.a.createElement(x.a,{in:l},r.a.createElement("div",{className:"mt-4"},r.a.createElement(O.a,{source:a.description})))))}var P=t(163),T=t(50);function S(e){var a=e.params,t=e.onParamChange;return r.a.createElement(P.a,{className:"mb-4"},r.a.createElement(P.a.Row,{className:"align-items-end"},r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Description"),r.a.createElement(P.a.Control,{onChange:t,value:a.description,name:"description",type:"text"})),r.a.createElement(P.a.Group,{as:T.a},r.a.createElement(P.a.Label,null,"Location"),r.a.createElement(P.a.Control,{onChange:t,value:a.location,name:"location",type:"text"})),r.a.createElement(P.a.Group,{as:T.a,xs:"auto",className:"ml-2"},r.a.createElement(P.a.Check,{onChange:t,value:a.full_time,name:"full_time",type:"checkbox",id:"full-time",label:"Only Full Time",className:"mb-2"}))))}var _=function(){var e=Object(n.useState)({}),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(3),u=Object(m.a)(l,2),y=u[0],v=u[1],k=function(e,a){var t=Object(n.useReducer)(h,{jobs:[],loading:!0}),r=Object(m.a)(t,2),c=r[0],l=r[1];return Object(n.useEffect)((function(){var t=i.a.CancelToken.source();l({type:p}),i.a.get(g,{cancelToken:t.token,params:Object(s.a)({markdown:!0,page:a},e)}).then((function(e){l({type:E,payload:{jobs:e.data}})})).catch((function(e){i.a.isCancel(e)||l({type:b,payload:{error:e}})}));var n=i.a.CancelToken.source();return i.a.get(g,{cancelToken:n.token,params:Object(s.a)({markdown:!0,page:a+1},e)}).then((function(e){l({type:d,payload:{hasNextPage:0!==e.data.length}})})).catch((function(e){i.a.isCancel(e)||l({type:b,payload:{error:e}})})),function(){t.cancel(),n.cancel()}}),[e,a]),c}(t,y),N=k.jobs,x=k.loading,C=k.error,O=k.hasNextPage;return r.a.createElement(f.a,{className:"my-3"},r.a.createElement("h1",{className:"mb-4"},"Github Jobs"),r.a.createElement(S,{params:t,onParamChange:function(e){var a=e.target.name,t=e.target.value;v(1),c((function(e){return Object(s.a)({},e,Object(o.a)({},a,t))}))}}),r.a.createElement(j,{page:y,setPage:v,hasNextPage:O}),x&&r.a.createElement("h1",null,"loading..."),C&&r.a.createElement("h1",null,"Error, try refreshing"),N.map((function(e){return r.a.createElement(w,{key:e.id,job:e})})),r.a.createElement(j,{page:y,setPage:v,hasNextPage:O}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))},51:function(e,a,t){e.exports=t(158)},56:function(e,a,t){},57:function(e,a,t){}},[[51,1,2]]]);
//# sourceMappingURL=main.fe5a568f.chunk.js.map