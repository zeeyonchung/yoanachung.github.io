import{c as z,h as R,q as ae,e as ne,r as le,f as se,Q as C,R as oe}from"./QBtn.64cc4707.js";import{p as g,c as i,h as m,a as F,q as re,E as ue,g as H,r as x,B as P,a9 as k,a0 as ie,aa as O,H as Q,I as b,J as V,d as o,K as f,F as ce,R as de,L as T,C as fe,S as D,ab as ve,Q as me,U as pe,O as _e,i as A,M as ge}from"./index.f4050aec.js";import{c as ke,a as be,z as he,A as xe,B as ye,l as E,x as Ce,w as S,Q as Te,y as Ve,m as Ie,n as qe,o as L,p as Se,q as we,r as Qe,s as $e}from"./id-generator.b04c3f29.js";var Be=z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:s}){const{proxy:{$q:e}}=H(),t=F(re,g);if(t===g)return console.error("QPage needs to be a deep child of QLayout"),g;if(F(ue,g)===g)return console.error("QPage needs to be child of QPageContainer"),g;const c=i(()=>{const r=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof a.styleFn=="function"){const d=t.isContainer.value===!0?t.containerHeight.value:e.screen.height;return a.styleFn(r,d)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-r+"px":e.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":e.screen.height-r+"px"}}),n=i(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>m("main",{class:n.value,style:c.value},R(s.default))}});function Fe(a,s){const e=x(null),t=i(()=>a.disable===!0?null:m("span",{ref:e,class:"no-outline",tabindex:-1}));function u(c){const n=s.value;c!==void 0&&c.type.indexOf("key")===0?n!==null&&document.activeElement!==n&&n.contains(document.activeElement)===!0&&n.focus():e.value!==null&&(c===void 0||n!==null&&n.contains(c.target)===!0)&&e.value.focus()}return{refocusTargetEl:t,refocusTarget:u}}var Pe={xs:30,sm:35,md:40,lg:50,xl:60};const Ae={...be,...le,...he,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Le=["update:modelValue"];function ze(a,s){const{props:e,slots:t,emit:u,proxy:c}=H(),{$q:n}=c,r=ke(e,n),d=x(null),{refocusTargetEl:v,refocusTarget:j}=Fe(e,d),K=ae(e,Pe),h=i(()=>e.val!==void 0&&Array.isArray(e.modelValue)),I=i(()=>{const l=k(e.val);return h.value===!0?e.modelValue.findIndex(_=>k(_)===l):-1}),p=i(()=>h.value===!0?I.value>-1:k(e.modelValue)===k(e.trueValue)),y=i(()=>h.value===!0?I.value===-1:k(e.modelValue)===k(e.falseValue)),$=i(()=>p.value===!1&&y.value===!1),M=i(()=>e.disable===!0?-1:e.tabindex||0),U=i(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(r.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),J=i(()=>{const l=p.value===!0?"truthy":y.value===!0?"falsy":"indet",_=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?p.value===!0:y.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${l}${_}`}),W=i(()=>{const l={type:"checkbox"};return e.name!==void 0&&Object.assign(l,{".checked":p.value,"^checked":p.value===!0?"checked":void 0,name:e.name,value:h.value===!0?e.val:e.trueValue}),l}),G=xe(W),X=i(()=>{const l={tabindex:M.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":$.value===!0?"mixed":p.value===!0?"true":"false"};return e.disable===!0&&(l["aria-disabled"]="true"),l});function q(l){l!==void 0&&(P(l),j(l)),e.disable!==!0&&u("update:modelValue",Y(),l)}function Y(){if(h.value===!0){if(p.value===!0){const l=e.modelValue.slice();return l.splice(I.value,1),l}return e.modelValue.concat([e.val])}if(p.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(y.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function Z(l){(l.keyCode===13||l.keyCode===32)&&P(l)}function ee(l){(l.keyCode===13||l.keyCode===32)&&q(l)}const te=s(p,$);return Object.assign(c,{toggle:q}),()=>{const l=te();e.disable!==!0&&G(l,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const _=[m("div",{class:J.value,style:K.value,"aria-hidden":"true"},l)];v.value!==null&&_.push(v.value);const B=e.label!==void 0?ne(t.default,[e.label]):R(t.default);return B!==void 0&&_.push(m("div",{class:`q-${a}__label q-anchor--skip`},B)),m("div",{ref:d,class:U.value,...X.value,onClick:q,onKeydown:Z,onKeyup:ee},_)}}const Re=m("div",{key:"svg",class:"q-checkbox__bg absolute"},[m("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[m("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),m("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var He=z({name:"QCheckbox",props:Ae,emits:Le,setup(a){function s(e,t){const u=i(()=>(e.value===!0?a.checkedIcon:t.value===!0?a.indeterminateIcon:a.uncheckedIcon)||null);return()=>u.value!==null?[m("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[m(se,{class:"q-checkbox__icon",name:u.value})])]:[Re]}return ze("checkbox",s)}});const Oe="tasks",w=ye(Oe),De=()=>{function a(t){w.read(t)}function s(t){w.write(t.id,t)}function e(t){w.remove(t)}return{readTasks:a,writeTask:s,deleteTask:e}},N=ie("task",()=>{const a=De(),s=x([]);e();function e(){a.readTasks(n=>{s.value=n})}function t(n){a.writeTask(n)}function u(n){a.deleteTask(n)}function c(n){const r=s.value.filter(d=>d.id===n)[0];r.done=!r.done,a.writeTask(r)}return{tasks:s,addTask:t,deleteTask:u,toggleTask:c}});const Ee=Q({__name:"TaskList",setup(a){const s=N(),e=E(),t=i(()=>s.tasks.filter(u=>u.folderId==e.currentFolderId));return(u,c)=>(b(),V("div",null,[o(Ve,{class:"bg-white",separator:"",border:""},{default:f(()=>[(b(!0),V(ce,null,de(T(t),n=>fe((b(),D(Ce,{key:n.id,class:ve({"done bg-blue-1":n.done}),onClick:r=>T(s).toggleTask(n.id),clickable:""},{default:f(()=>[o(S,{avatar:""},{default:f(()=>[o(He,{modelValue:n.done,"onUpdate:modelValue":r=>n.done=r,class:"no-pointer-events",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),o(S,null,{default:f(()=>[o(Te,null,{default:f(()=>[me(pe(n.title),1)]),_:2},1024)]),_:2},1024),o(S,{side:""},{default:f(()=>[o(C,{onClick:_e(r=>T(s).deleteTask(n.id),["stop"]),flat:"",round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["class","onClick"])),[[oe]])),128))]),_:1})]))}});var Ne=O(Ee,[["__scopeId","data-v-bea459f8"]]);const je={class:"addBtn"},Ke=ge("div",{class:"text-h6"},"New task",-1),Me=Q({__name:"TaskAddButton",setup(a){const s=N(),e=E();let t=x(!1);const u=x("");function c(){const r={id:$e(),title:u.value,folderId:e.currentFolderId,done:!1};s.addTask(r),n()}function n(){u.value="",t.value=!1}return(r,d)=>(b(),V("div",je,[o(C,{onClick:d[0]||(d[0]=v=>A(t)?t.value=!0:t=!0),color:"primary",icon:"add",round:""}),o(Qe,{modelValue:T(t),"onUpdate:modelValue":d[2]||(d[2]=v=>A(t)?t.value=v:t=v),onHide:n},{default:f(()=>[o(Ie,{class:"full-width"},{default:f(()=>[o(qe,{onSubmit:c},{default:f(()=>[o(L,null,{default:f(()=>[Ke]),_:1}),o(L,{class:"q-pt-none"},{default:f(()=>[o(Se,{filled:"",autofocus:"",modelValue:u.value,"onUpdate:modelValue":d[1]||(d[1]=v=>u.value=v),label:"What's your new task?","lazy-rules":"",rules:[v=>v&&v.length>0||"Please type something"]},null,8,["modelValue","rules"])]),_:1}),o(we,{align:"right",class:"text-primary"},{default:f(()=>[o(C,{flat:"",label:"Cancel",onClick:n}),o(C,{flat:"",label:"Add task",type:"submit",color:"primary"})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}});const Ue={class:"row q-pa-sm bg-white"},Je={__name:"TaskButtonBar",setup(a){return(s,e)=>(b(),V("div",Ue,[o(Me)]))}};var We=O(Je,[["__scopeId","data-v-3a378f86"]]);const Ze=Q({__name:"TodoPage",setup(a){return(s,e)=>(b(),D(Be,{class:"bg-grey-3 column"},{default:f(()=>[o(We),o(Ne)]),_:1}))}});export{Ze as default};
