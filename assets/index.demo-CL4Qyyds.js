import{j as t}from"./index-CQrn7TS7.js";import{W as i,M as m,G as a}from"./Gallery-DRtmOj6D.js";import"./helper-BGko9IlV.js";import"./image-BKFb82BB.js";import"./lodash-FRkVha7u.js";import"./owner-cs5WkvQO.js";import"./index-CeLWkVAG.js";import"./StyledButton-D1Cx_faz.js";import"./index-Dbo25glw.js";import"./proxy-B0oLt6wm.js";import"./viewport-DfOHwhn1.js";import"./use-is-unmounted-33YatcXX.js";const n=()=>Math.floor(Math.random()*255).toString(16).padStart(2,"0"),o=Array.from({length:10}).map((r,e)=>({src:`https://loremflickr.com/640/480/city?${e}`,height:480,width:640,type:"image",accent:`#${n()}`})),p=()=>t.jsx("div",{className:"inline-block overflow-hidden border border-accent",style:{width:"600px"},children:t.jsx(i,{children:t.jsx(m,{images:o,children:t.jsx(a,{images:o.map(r=>({...r,url:r.src,name:r.src,footnote:r.src}))})})})});p.meta={title:"Gallery",description:"Gallery component"};export{p as Demo1};
