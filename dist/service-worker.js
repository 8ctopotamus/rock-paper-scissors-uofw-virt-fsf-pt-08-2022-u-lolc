if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let o={};const t=e=>i(e,l),d={module:{uri:l},exports:o,require:t};n[l]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"0f1569381eb4c28b56f5.png",revision:null},{url:"2993a8ab5ffbbe4d4f9d.png",revision:null},{url:"ac9048832337e53dd9e0.png",revision:null},{url:"bundle.js",revision:"30702d28286f03431165b2196debd6d0"},{url:"index.html",revision:"9e1de1b28696dc39b3e6556b647de3b2"},{url:"styles.min.css",revision:"2f551b50f86f5e126a37d08a306a73b8"}],{})}));
