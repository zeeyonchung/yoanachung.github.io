import{c as z,h as A,q as te,e as ae,r as le,f as ne,Q as y,R as oe}from"./QBtn.c33cffc7.js";import{p as g,c as u,h as m,a as w,q as se,E as re,g as R,r as V,B as F,a9 as h,aa as O,H as $,I as b,J as I,d as o,K as c,F as ue,R as ie,L as C,C as ce,S as D,ab as de,Q as fe,U as ve,O as me,i as P,M as pe}from"./index.bc6a6312.js";import{c as _e,a as ge,z as he,A as be,v as E,l as H,x as ke,w as Q,Q as xe,y as ye,m as Ce,n as Ve,o as L,p as Ie,q as qe,r as Se}from"./todo-task-store.eeab505e.js";var Qe=z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(l,{slots:s}){const{proxy:{$q:e}}=R(),a=w(se,g);if(a===g)return console.error("QPage needs to be a deep child of QLayout"),g;if(w(re,g)===g)return console.error("QPage needs to be child of QPageContainer"),g;const d=u(()=>{const i=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof l.styleFn=="function"){const f=a.isContainer.value===!0?a.containerHeight.value:e.screen.height;return l.styleFn(i,f)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-i+"px":e.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":e.screen.height-i+"px"}}),n=u(()=>`q-page${l.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:n.value,style:d.value},A(s.default))}});function $e(l,s){const e=V(null),a=u(()=>l.disable===!0?null:m("span",{ref:e,class:"no-outline",tabindex:-1}));function r(d){const n=s.value;d!==void 0&&d.type.indexOf("key")===0?n!==null&&document.activeElement!==n&&n.contains(document.activeElement)===!0&&n.focus():e.value!==null&&(d===void 0||n!==null&&n.contains(d.target)===!0)&&e.value.focus()}return{refocusTargetEl:a,refocusTarget:r}}var Te={xs:30,sm:35,md:40,lg:50,xl:60};const Be={...ge,...le,...he,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:l=>l==="tf"||l==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},we=["update:modelValue"];function Fe(l,s){const{props:e,slots:a,emit:r,proxy:d}=R(),{$q:n}=d,i=_e(e,n),f=V(null),{refocusTargetEl:v,refocusTarget:N}=$e(e,f),j=te(e,Te),k=u(()=>e.val!==void 0&&Array.isArray(e.modelValue)),q=u(()=>{const t=h(e.val);return k.value===!0?e.modelValue.findIndex(_=>h(_)===t):-1}),p=u(()=>k.value===!0?q.value>-1:h(e.modelValue)===h(e.trueValue)),x=u(()=>k.value===!0?q.value===-1:h(e.modelValue)===h(e.falseValue)),T=u(()=>p.value===!1&&x.value===!1),K=u(()=>e.disable===!0?-1:e.tabindex||0),M=u(()=>`q-${l} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(i.value===!0?` q-${l}--dark`:"")+(e.dense===!0?` q-${l}--dense`:"")+(e.leftLabel===!0?" reverse":"")),U=u(()=>{const t=p.value===!0?"truthy":x.value===!0?"falsy":"indet",_=e.color!==void 0&&(e.keepColor===!0||(l==="toggle"?p.value===!0:x.value!==!0))?` text-${e.color}`:"";return`q-${l}__inner relative-position non-selectable q-${l}__inner--${t}${_}`}),J=u(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":p.value,"^checked":p.value===!0?"checked":void 0,name:e.name,value:k.value===!0?e.val:e.trueValue}),t}),W=be(J),G=u(()=>{const t={tabindex:K.value,role:l==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":T.value===!0?"mixed":p.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function S(t){t!==void 0&&(F(t),N(t)),e.disable!==!0&&r("update:modelValue",X(),t)}function X(){if(k.value===!0){if(p.value===!0){const t=e.modelValue.slice();return t.splice(q.value,1),t}return e.modelValue.concat([e.val])}if(p.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(x.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function Y(t){(t.keyCode===13||t.keyCode===32)&&F(t)}function Z(t){(t.keyCode===13||t.keyCode===32)&&S(t)}const ee=s(p,T);return Object.assign(d,{toggle:S}),()=>{const t=ee();e.disable!==!0&&W(t,"unshift",` q-${l}__native absolute q-ma-none q-pa-none`);const _=[m("div",{class:U.value,style:j.value,"aria-hidden":"true"},t)];v.value!==null&&_.push(v.value);const B=e.label!==void 0?ae(a.default,[e.label]):A(a.default);return B!==void 0&&_.push(m("div",{class:`q-${l}__label q-anchor--skip`},B)),m("div",{ref:f,class:M.value,...G.value,onClick:S,onKeydown:Y,onKeyup:Z},_)}}const Pe=m("div",{key:"svg",class:"q-checkbox__bg absolute"},[m("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[m("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),m("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var Le=z({name:"QCheckbox",props:Be,emits:we,setup(l){function s(e,a){const r=u(()=>(e.value===!0?l.checkedIcon:a.value===!0?l.indeterminateIcon:l.uncheckedIcon)||null);return()=>r.value!==null?[m("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[m(ne,{class:"q-checkbox__icon",name:r.value})])]:[Pe]}return Fe("checkbox",s)}});const ze=$({__name:"TaskList",setup(l){const s=E(),e=H(),a=u(()=>s.tasks.filter(r=>r.folderId==e.currentFolderId));return(r,d)=>(b(),I("div",null,[o(ye,{class:"bg-white",separator:"",border:""},{default:c(()=>[(b(!0),I(ue,null,ie(C(a),n=>ce((b(),D(ke,{key:n.id,class:de({"done bg-blue-1":n.done}),onClick:i=>C(s).toggleTask(n.id),clickable:""},{default:c(()=>[o(Q,{avatar:""},{default:c(()=>[o(Le,{modelValue:n.done,"onUpdate:modelValue":i=>n.done=i,class:"no-pointer-events",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(Q,null,{default:c(()=>[o(xe,null,{default:c(()=>[fe(ve(n.title),1)]),_:2},1024)]),_:2},1024),o(Q,{side:""},{default:c(()=>[o(y,{onClick:me(i=>C(s).deleteTask(n.id),["stop"]),flat:"",round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["class","onClick"])),[[oe]])),128))]),_:1})]))}});var Ae=O(ze,[["__scopeId","data-v-bea459f8"]]);const Re={class:"addBtn"},Oe=pe("div",{class:"text-h6"},"New task",-1),De=$({__name:"TaskAddButton",setup(l){const s=E(),e=H();let a=V(!1);const r=V("");function d(){const i={id:s.nextId,title:r.value,folderId:e.currentFolderId,done:!1};s.addTask(i),n()}function n(){r.value="",a.value=!1}return(i,f)=>(b(),I("div",Re,[o(y,{onClick:f[0]||(f[0]=v=>P(a)?a.value=!0:a=!0),color:"primary",icon:"add",round:""}),o(Se,{modelValue:C(a),"onUpdate:modelValue":f[2]||(f[2]=v=>P(a)?a.value=v:a=v),onHide:n},{default:c(()=>[o(Ce,{class:"full-width"},{default:c(()=>[o(Ve,{onSubmit:d},{default:c(()=>[o(L,null,{default:c(()=>[Oe]),_:1}),o(L,{class:"q-pt-none"},{default:c(()=>[o(Ie,{filled:"",autofocus:"",modelValue:r.value,"onUpdate:modelValue":f[1]||(f[1]=v=>r.value=v),label:"What's your new task?","lazy-rules":"",rules:[v=>v&&v.length>0||"Please type something"]},null,8,["modelValue","rules"])]),_:1}),o(qe,{align:"right",class:"text-primary"},{default:c(()=>[o(y,{flat:"",label:"Cancel",onClick:n}),o(y,{flat:"",label:"Add task",type:"submit",color:"primary"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});const Ee={class:"row q-pa-sm bg-white"},He={__name:"TaskButtonBar",setup(l){return(s,e)=>(b(),I("div",Ee,[o(De)]))}};var Ne=O(He,[["__scopeId","data-v-3a378f86"]]);const Ue=$({__name:"TodoPage",setup(l){return(s,e)=>(b(),D(Qe,{class:"bg-grey-3 column"},{default:c(()=>[o(Ne),o(Ae)]),_:1}))}});export{Ue as default};
