import{j as e,r as c}from"./index-CQrn7TS7.js";import{a as l}from"./viewport-DfOHwhn1.js";import{u as d}from"./LinkCard-4gDWWiYw.js";import{u as v,d as A,e as I,f as M}from"./owner-cs5WkvQO.js";import{g as R,u as L,C as T,a as F,b as E,M as P,c as k,d as p,e as g,f as U,h as O,R as V,I as $,F as W,U as f,i as q,j as G,k as H,s as u,l as m,m as K,E as _,n as X,S as Z}from"./utils-Chlj6cjC.js";import{A as C}from"./Shiki-pJrAkXhx.js";import{c as j,a as i}from"./helper-BGko9IlV.js";import{a as Q}from"./Markdown-CN8O7Xx4.js";import{A as D}from"./index-CAz2iPa1.js";import{m as h}from"./proxy-B0oLt6wm.js";import{I as J}from"./Gallery-DRtmOj6D.js";import{M as Y,S as ee}from"./StyledButton-D1Cx_faz.js";import{u as se}from"./useQuery-COkueFI_.js";import{G as te}from"./SocialSourceLink-Bom5U6I1.js";import"./provider-mIiy6YyP.js";import"./index-BVeOn4JB.js";import"./index-Dbo25glw.js";import"./image-BKFb82BB.js";import"./spring-C80N1tKa.js";import"./bangumi-DGWEI3g8.js";import"./dom-BowoBODo.js";import"./use-motion-template-DlJJZFi3.js";import"./visual-element-DBFYzubs.js";import"./lodash-FRkVha7u.js";import"./index-CeLWkVAG.js";import"./FloatPopover-Ck9cQ0ly.js";import"./use-event-callback-CkUfPiHa.js";import"./use-is-dark-DMmkBWbe.js";import"./customParseFormat-Bz-d0EJ_.js";import"./use-drag-controls-CjWTZMwi.js";import"./index-Bhvj2jCq.js";import"./Collapse-DroalJaZ.js";import"./use-is-unmounted-33YatcXX.js";const w=({className:s})=>{const a=l()?.provider,n=a&&R(a);return n?e.jsx("span",{className:j("pointer-events-none flex size-4 select-none items-center justify-center rounded-full bg-white dark:bg-zinc-900",s),children:e.jsx(n,{className:"size-3"})}):null};function ae({className:s}){return e.jsx("i",{className:i("i-mingcute-send-plane-line",s)})}const ne=()=>{const s=F(),t=E();return e.jsxs("span",{className:i("font-mono text-[10px]",s?"text-red-500":"text-zinc-500"),children:[t.length,"/",P]})},re=()=>{const s=d(),t=k(),a=v(p().isWhisper),n=g();return s||t?null:e.jsxs("label",{className:"label mx-2 flex items-center",children:[e.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:a,type:"checkbox",onChange:r=>{const{checked:o}=r.target;n("isWhisper",o)}}),e.jsx("span",{className:"label-text text-sm",children:"悄悄话"})]})},oe=()=>{const s=d(),t=v(p().syncToRecently),a=g(),n=k();return!s||n?null:e.jsxs("label",{className:"label mx-2 flex items-center",children:[e.jsx("input",{className:"checkbox-accent checkbox checkbox-sm mr-2",checked:t,type:"checkbox",onChange:r=>{const{checked:o}=r.target;a("syncToRecently",o)}}),e.jsx("span",{className:"label-text text-sm",children:"同步到碎碎念"})]})},b=({className:s})=>{const t=L();return e.jsxs("footer",{className:j("mt-3 flex h-5 w-full min-w-0 items-center justify-between",s),children:[e.jsxs("span",{className:i("flex-1 select-none text-[10px] text-zinc-500 transition-opacity"),children:[e.jsxs("span",{className:"hidden md:inline",children:["支持 ",e.jsx("b",{children:"Markdown"})," 与"," ",e.jsx(Q,{href:"https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",children:"GFM"})]}),e.jsx(T,{})]}),e.jsx(D,{children:t&&e.jsxs(h.aside,{initial:{opacity:0,scale:.96,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.98,y:8},className:"flex select-none items-center gap-2.5",children:[e.jsx(ne,{}),e.jsx(re,{}),e.jsx(oe,{}),e.jsx(ie,{})]},"send-button-wrapper")})]})},ie=()=>{const[s,t]=U();return e.jsxs(h.button,{className:"flex appearance-none items-center space-x-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",whileHover:{scale:1.05},whileTap:{scale:.95},type:"button",disabled:t,onClick:s,children:[e.jsx(ae,{className:"size-5 text-zinc-800 dark:text-zinc-200"}),e.jsx(h.span,{className:"text-sm",layout:"size",children:t?"送信...":"送信"})]})},ce=()=>{const s=g(),t=l(),a=t?t.name||"Anonymous":"";return c.useEffect(()=>{t&&(s("author",a),s("avatar",t.image),s("mail",t.email),t.handle&&s("url",O({provider:t.provider,handle:t.handle})||""),s("source",t.provider))},[a,t,s]),t?e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("div",{className:i("relative mb-2 shrink-0 select-none self-end rounded-full","bg-zinc-200 ring-2 ring-zinc-200 dark:bg-zinc-800","backface-hidden ml-[2px]"),children:[e.jsxs(V,{children:[e.jsx($,{className:"rounded-full object-cover",src:t.image,alt:`${a}'s avatar`,width:48,height:48}),e.jsx(W,{delayMs:600,className:"block size-[48px] shrink-0 rounded-full"})]}),e.jsx(w,{className:"absolute -bottom-1 right-0"})]}),e.jsx("div",{className:"relative h-[150px] w-full rounded-xl bg-gray-200/50 dark:bg-zinc-800/50",children:e.jsx(f,{className:"pb-5"})}),e.jsx(b,{className:"absolute bottom-0 left-14 right-0 mb-2 ml-4 w-auto px-4"})]}):null},le=()=>d()?e.jsx(ue,{}):e.jsx(xe,{}),z="relative h-[150px] w-full rounded-xl bg-gray-200/50 dark:bg-zinc-800/50",me={author:"昵称",mail:"邮箱",url:"网址"},de={author:{validator:s=>s.length>0&&s.length<=20,message:"昵称长度应在 1-20 之间"},mail:{validator:s=>/^[\w-]+@[\w-]+(\.[\w-]+)+$/.test(s),message:"邮箱格式不正确"},url:{validator:s=>/^https?:\/\/[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(s),message:"网址格式不正确"}},x=s=>{const{fieldKey:t,required:a}=s,[n,r]=I(p()[t]);return e.jsx(G,{type:"text",value:n,onChange:o=>r(o.target.value),required:a,placeholder:me[t]+(a?" *":""),name:t,className:"bg-gray-200/50 dark:bg-zinc-800/50",rules:[de[t]]})},xe=()=>e.jsxs(q,{className:"flex flex-col space-y-4 px-2 pt-2",showErrorMessage:!1,children:[e.jsxs("div",{className:"flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0",children:[e.jsx(x,{fieldKey:"author",required:!0}),e.jsx(x,{fieldKey:"mail",required:!0}),e.jsx(x,{fieldKey:"url"})]}),e.jsx("div",{className:z,children:e.jsx(f,{className:"pb-8"})}),e.jsx(b,{className:"absolute bottom-4 left-0 right-4 mb-2 ml-2 w-auto px-4"})]}),ue=()=>{const s=A(t=>t.user);return e.jsxs("div",{className:"flex space-x-4",children:[e.jsxs("div",{className:i("relative mb-2 shrink-0 select-none self-end rounded-full","ring-2 ring-accent","backface-hidden ml-[2px]"),children:[e.jsx(J,{className:"rounded-full object-cover",src:s.avatar,alt:`${s.name||s.username}'s avatar`,width:48,height:48}),e.jsx(w,{className:"absolute -bottom-1 right-0"})]}),e.jsx("div",{className:z,children:e.jsx(f,{className:"pb-5"})}),e.jsx(b,{className:"absolute bottom-0 left-14 right-0 mb-2 ml-4 w-auto px-4"})]})},B=()=>{const{data:s}=se({queryKey:["providers"],queryFn:()=>M.proxy.auth.providers.get().then(t=>t.data),refetchOnMount:"always",meta:{persist:!0}});return s},he=()=>{const s=B(),[t,a]=c.useState(()=>new Set);return e.jsx(e.Fragment,{children:s&&e.jsx("ul",{className:"flex items-center justify-center gap-3",children:s.map(n=>e.jsx("li",{children:e.jsx(Y,{disabled:t.has(n),onClick:()=>{t.has(n)||(H.signIn.social({provider:n,callbackURL:window.location.href}),a(r=>(r.add(n),new Set(r))))},children:e.jsx("div",{className:"flex size-10 items-center justify-center rounded-full border bg-base-100 dark:border-neutral-700",children:t.has(n)?e.jsx("div",{className:"center flex",children:e.jsx("i",{className:"loading loading-spinner loading-xs opacity-50"})}):e.jsx(c.Fragment,{children:n==="github"?e.jsx(te,{}):e.jsx("img",{className:"size-4",src:`https://authjs.dev/img/providers/${n}.svg`})})})})},n))})})};function pe(){const s=!!l(),t=B(),a=t&&Object.keys(t).length>0;return c.useEffect(()=>{t&&Object.keys(t).length===0&&u(m.legacy)},[t]),s?null:e.jsxs("div",{className:"center flex h-[150px] w-full flex-col rounded-lg bg-gray-100/80 dark:bg-zinc-900/80",children:[e.jsx("p",{className:"mb-4 text-sm",children:"使用社交账号登录"}),e.jsx(he,{}),e.jsx(ee,{className:i(a?"mt-6":""),variant:"secondary",type:"button",onClick:()=>{u(m.legacy)},children:"免登录评论"})]})}const Qe=s=>{const{refId:t,className:a,afterSubmit:n,initialValue:r}=s,o=K(),S=d(),y=l();return c.useEffect(()=>{y&&u(m["with-auth"])},[y]),e.jsx(_,{children:e.jsx(X,{refId:t,afterSubmit:n,initialValue:r,children:e.jsxs("div",{className:j("group relative w-full min-w-0",a),"data-hide-print":!0,children:[e.jsx(Z,{}),e.jsx("div",{className:"relative w-full",children:S?e.jsx(N,{}):o===m.legacy?e.jsx(N,{}):e.jsx(ge,{})})]})})})},N=()=>e.jsx(C,{children:e.jsx(le,{})}),ge=()=>{const s=!!l();return e.jsx(C,{children:s?e.jsx(ce,{}):e.jsx(pe,{})})};export{Qe as CommentBoxRoot};
