"use strict";(self.webpackChunksleact_ts_front=self.webpackChunksleact_ts_front||[]).push([[928],{70917:(n,e,t)=>{var r;t.d(e,{F4:()=>c});var i=t(67294),a=(t(66898),t(8679),t(94199));function o(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,a.O)(e)}(r||(r=t.t(i,2))).useInsertionEffect?(r||(r=t.t(i,2))).useInsertionEffect:i.useLayoutEffect;var c=function(){var n=o.apply(void 0,arguments),e="animation-"+n.name;return{name:e,styles:"@keyframes "+e+"{"+n.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},79928:(n,e,t)=>{t.r(e),t.d(e,{default:()=>d});var r=t(67294),i=t(86329),a=t(45308);function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var c=(0,i.ZP)((function(){return Promise.all([t.e(946),t.e(672)]).then(t.bind(t,67970))})),l=(0,i.ZP)((function(){return Promise.all([t.e(131),t.e(966)]).then(t.bind(t,64966))}));const d=function(){var n,e,t=(n=(0,r.useState)([{content:"세종대 소프트웨학과(구 디지털 콘텐츠학과) ",date:"2016-03-02 ~\n 2022-02-18",icon:"graduate",title:"세종대 입학",type:"",animation:""},{content:"항공전단 CERT 감시병으로 복무했습니다.",date:"2018-02-19 ~\n 2019-12-15",icon:"military",title:"해군 만기전역",type:"",animation:""},{content:"SI 업체 코드크레인(유한)에서 약 4개월 인턴을 했습니다.",date:"2021-09-01 ~\n 2021-12-22",icon:"intern",title:"ICT 인턴십",type:"",animation:""},{content:"인턴으로 근무하던 회사에서 채용제안을 받아 현재까지도 재직중입니다.",date:"2022-01-03 ~",icon:"person",title:"코드크레인 재직",type:"",animation:""}]),e=2,function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(n){c=!0,i=n}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}}(n,e)||function(n,e){if(n){if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=t[0];return t[1],r.createElement(a.xf,null,r.createElement(c,null),r.createElement(a.Mb,null,(i||[]).map((function(n,e){return r.createElement(l,{title:n.title,date:n.date,icon:n.icon,index:e,animation:n.animation,content:n.content})}))))}},45308:(n,e,t)=>{t.d(e,{Mb:()=>h,rc:()=>g,xf:()=>x});var r,i,a,o,c,l,d=t(2156),f=t(70917);function s(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var u=(0,f.F4)(r||(r=s(["\n    100% {\n        right: 100%;\n    }\n"]))),p=(0,f.F4)(i||(i=s(["\n    100% {\n        top: 100%;\n    }\n"]))),b=(0,f.F4)(a||(a=s(["\n    100% {\n        left: 100%;\n    }\n"]))),x=d.Z.div(o||(o=s(["\n  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;\n  height: max-content;\n  min-height: 100vh;\n  width: 100vw;\n"]))),h=d.Z.div(c||(c=s(["\n  background-color: #F8F9FD;\n  display: flex;\n  flex-direction: column;\n  padding-top: 100px;\n  min-height: 100vh;\n"]))),g=d.Z.div(l||(l=s(['\n  position: relative;\n  display: flex;\n  margin: 20px 0;\n  border-radius: 6px;\n  align-self: center;\n  width: 50vw;\n  &:nth-child(2n + 1) {\n    flex-direction: row-reverse;\n    & div.date {\n      border-radius: 0 6px 6px 0;\n    }\n    & div.content {\n      border-radius: 6px 0 0 6px;\n    }\n\n    & div.icon {\n      &:before {\n        content: "";\n        width: 2px;\n        height: 100%;\n        background: #f6a4ec;\n        position: absolute;\n        top: 0;\n        left: 50%;\n        right: auto;\n        z-index: 0;\n        transform: translateX(-50%);\n        animation: ',' 2s forwards 4s ease-in-out;\n      }\n      &:after {\n        content: "";\n        width: 100%;\n        height: 2px;\n        background: #f6a4ec;\n        position: absolute;\n        right: 0;\n        z-index: 0;\n        top: 50%;\n        left: auto;\n        transform: translateY(-50%);\n        animation: ',' 2s forwards 4s ease-in-out;\n      }\n    }\n  }\n\n  & div.title {\n    font-size: 1.2rem;\n    line-height: 1.4;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: #9251ac;\n    letter-spacing: 1.5px;\n  }\n  & div.content {\n    padding: 20px;\n    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3),\n      0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n    background: #fff;\n    width: calc(40vw - 84px);\n    border-radius: 0 6px 6px 0;\n  }\n  & div.date {\n    color: #f6a4ec;\n    font-size: 1.5rem;\n    font-weight: 600;\n    background: #9251ac;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    white-space: pre;\n    padding: 0 20px;\n    border-radius: 6px 0 0 6px;\n    z-index: 1;\n  }\n  & div.icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #9251ac;\n    align-self: center;\n    margin: 0 20px;\n    background: #f6a4ec;\n    border-radius: 100%;\n    width: 40px;\n    box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),\n    0 18px 36px -18px rgba(0, 0, 0, 0.3),\n      0 -12px 36px -8px rgba(0, 0, 0, 0.025);\n    padding: 40px;\n    height: 40px;\n    position: relative;\n\n    & > svg {\n      font-size: 32px;\n      z-index: 1;\n    }\n\n    &:before {\n      content: "";\n      width: 2px;\n      height: 100%;\n      background: #f6a4ec;\n      position: absolute;\n      top: 0;\n      z-index: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      animation: ',' 2s both 4s ease-in-out;\n    }\n    &:after {\n      content: "";\n      width: 100%;\n      height: 2px;\n      background: #f6a4ec;\n      position: absolute;\n      left: 0;\n      z-index: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      animation: '," 2s forwards 4s ease-in-out;\n    }\n  }\n  \n  & div.description {\n    flex-basis: 60%;\n  }\n\n  &.type2 {\n    &:after {\n      background: #555ac0;\n    }\n    & div.date {\n      color: #87bbfe;\n      background: #555ac0;\n    }\n\n    &:nth-child(2n + 1) {\n      &  div.icon {\n        &:before,\n        &:after {\n          background: #87bbfe;\n        }\n      }\n    }\n\n    &  div.icon {\n      background: #87bbfe;\n      color: #555ac0;\n      &:before,\n      &:after {\n        background: #87bbfe;\n      }\n    }\n    &  div.title {\n      color: #555ac0;\n    }\n    &  div.title {\n    }\n  }\n\n  &.type3 {\n    &:after {\n      background: #24b47e;\n    }\n    &  div.date {\n      color: #aff1b6;\n      background-color: #24b47e;\n    }\n\n    &:nth-child(2n + 1) {\n      &  div.icon {\n        &:before,\n        &:after {\n          background: #aff1b6;\n        }\n      }\n    }\n\n    & div.icon {\n      background: #aff1b6;\n      color: #24b47e;\n      &:before,\n      &:after {\n        background: #aff1b6;\n      }\n    }\n    &  div.title {\n      color: #24b47e;\n    }\n    &  div.title {\n    }\n  }\n  \n  &:last-child {\n    & div.icon {\n      &:before {\n        content: none;\n      }\n    }\n  }\n"])),p,u,p,b)}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTI4LmpzIiwibWFwcGluZ3MiOiJ1TEFnTUEsU0FBU0EsSUFDUCxJQUFLLElBQUlDLEVBQU9DLFVBQVVDLE9BQVFDLEVBQU8sSUFBSUMsTUFBTUosR0FBT0ssRUFBTyxFQUFHQSxFQUFPTCxFQUFNSyxJQUMvRUYsRUFBS0UsR0FBUUosVUFBVUksR0FHekIsT0FBTyxPQUFnQkYsSUF4RkEsaUJBQStCLG9CQUFJLGlCQUErQixtQkFBSSxFQUFBRyxnQkEyRi9GLElBQUlDLEVBQVksV0FDZCxJQUFJQyxFQUFhVCxFQUFJVSxXQUFNLEVBQVFSLFdBQy9CUyxFQUFPLGFBQWVGLEVBQVdFLEtBRXJDLE1BQU8sQ0FDTEEsS0FBTUEsRUFDTkMsT0FBUSxjQUFnQkQsRUFBTyxJQUFNRixFQUFXRyxPQUFTLElBQ3pEQyxLQUFNLEVBQ05DLFNBQVUsV0FDUixNQUFPLFFBQVVDLEtBQUtKLEtBQU8sSUFBTUksS0FBS0gsT0FBUyxZLDZMQ3pNdkQsSUFBTUksR0FBU0MsRUFBQUEsRUFBQUEsS0FBUyxrQkFBTSwwREFDeEJDLEdBQWNELEVBQUFBLEVBQUFBLEtBQVMsa0JBQU0sMERBeURuQyxRQXZEaUIsV0FDYixJLElBQUEsRyxHQUEwQ0UsRUFBQUEsRUFBQUEsVUFBUyxDQUMvQyxDQUNJQyxRQUFTLDJCQUNUQyxLQUFNLDRCQUNOQyxLQUFNLFdBQ05DLE1BQU8sU0FDUEMsS0FBTSxHQUNOQyxVQUFXLElBRWYsQ0FDSUwsUUFBUywwQkFDVEMsS0FBTSw0QkFDTkMsS0FBTSxXQUNOQyxNQUFPLFVBQ1BDLEtBQU0sR0FDTkMsVUFBVyxJQUVmLENBQ0lMLFFBQVMsb0NBQ1RDLEtBQU0sNEJBQ05DLEtBQU0sU0FDTkMsTUFBTyxVQUNQQyxLQUFNLEdBQ05DLFVBQVcsSUFFZixDQUNJTCxRQUFTLHdDQUNUQyxLQUFNLGVBQ05DLEtBQU0sU0FDTkMsTUFBTyxXQUNQQyxLQUFNLEdBQ05DLFVBQVcsTSxFQS9CbkIsRSw4ekJBQU9DLEVBQVAsS0FtQ0EsT0FuQ0EsS0FvQ0ksZ0JBQUMsS0FBRCxLQUNJLGdCQUFDVixFQUFELE1BQ0EsZ0JBQUMsS0FBRCxNQUNNVSxHQUFpQixJQUFJQyxLQUFJLFNBQUNDLEVBQU1DLEdBQVAsT0FDdkIsZ0JBQUNYLEVBQUQsQ0FDSUssTUFBT0ssRUFBS0wsTUFDWkYsS0FBTU8sRUFBS1AsS0FDWEMsS0FBTU0sRUFBS04sS0FDWE8sTUFBT0EsRUFDUEosVUFBV0csRUFBS0gsVUFDaEJMLFFBQVNRLEVBQUtSLGlCLDJNQ3REdEMsSUFBTVUsR0FBV3RCLEVBQUFBLEVBQUFBLElBQUgsMkRBTVJ1QixHQUFVdkIsRUFBQUEsRUFBQUEsSUFBSCx5REFNUHdCLEdBQWN4QixFQUFBQSxFQUFBQSxJQUFILDBEQU1KeUIsRUFBb0JDLEVBQUFBLEVBQUFBLElBQUgsaUxBT2pCQyxFQUFrQkQsRUFBQUEsRUFBQUEsSUFBSCwwSUFRZkUsRUFBdUJGLEVBQUFBLEVBQUFBLElBQUgsdTZIQTRCWkgsRUFhQUQsRUFtRUZDLEVBWUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3JlYWN0L2Rpc3QvZW1vdGlvbi1yZWFjdC5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly9zbGVhY3QtdHMtZnJvbnQvLi9wYWdlcy9UaW1lTGluZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc2xlYWN0LXRzLWZyb250Ly4vcGFnZXMvVGltZUxpbmUvc3R5bGVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50LCB1c2VMYXlvdXRFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZiwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ0BlbW90aW9uL2NhY2hlJztcbmltcG9ydCB7IGggYXMgaGFzT3duUHJvcGVydHksIEUgYXMgRW1vdGlvbiwgYyBhcyBjcmVhdGVFbW90aW9uUHJvcHMsIHcgYXMgd2l0aEVtb3Rpb25DYWNoZSwgVCBhcyBUaGVtZUNvbnRleHQsIHUgYXMgdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUgfSBmcm9tICcuL2Vtb3Rpb24tZWxlbWVudC1jYmVkNDUxZi5icm93c2VyLmVzbS5qcyc7XG5leHBvcnQgeyBDIGFzIENhY2hlUHJvdmlkZXIsIFQgYXMgVGhlbWVDb250ZXh0LCBiIGFzIFRoZW1lUHJvdmlkZXIsIF8gYXMgX191bnNhZmVfdXNlRW1vdGlvbkNhY2hlLCBhIGFzIHVzZVRoZW1lLCB3IGFzIHdpdGhFbW90aW9uQ2FjaGUsIGQgYXMgd2l0aFRoZW1lIH0gZnJvbSAnLi9lbW90aW9uLWVsZW1lbnQtY2JlZDQ1MWYuYnJvd3Nlci5lc20uanMnO1xuaW1wb3J0ICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0ICdAZW1vdGlvbi93ZWFrLW1lbW9pemUnO1xuaW1wb3J0ICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgJy4uL19pc29sYXRlZC1obnJzL2Rpc3QvZW1vdGlvbi1yZWFjdC1faXNvbGF0ZWQtaG5ycy5icm93c2VyLmVzbS5qcyc7XG5pbXBvcnQgeyBpbnNlcnRTdHlsZXMsIHJlZ2lzdGVyU3R5bGVzLCBnZXRSZWdpc3RlcmVkU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vdXRpbHMnO1xuaW1wb3J0IHsgc2VyaWFsaXplU3R5bGVzIH0gZnJvbSAnQGVtb3Rpb24vc2VyaWFsaXplJztcblxudmFyIHBrZyA9IHtcblx0bmFtZTogXCJAZW1vdGlvbi9yZWFjdFwiLFxuXHR2ZXJzaW9uOiBcIjExLjkuM1wiLFxuXHRtYWluOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5janMuanNcIixcblx0bW9kdWxlOiBcImRpc3QvZW1vdGlvbi1yZWFjdC5lc20uanNcIixcblx0YnJvd3Nlcjoge1xuXHRcdFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuY2pzLmpzXCI6IFwiLi9kaXN0L2Vtb3Rpb24tcmVhY3QuYnJvd3Nlci5janMuanNcIixcblx0XHRcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmVzbS5qc1wiOiBcIi4vZGlzdC9lbW90aW9uLXJlYWN0LmJyb3dzZXIuZXNtLmpzXCJcblx0fSxcblx0dHlwZXM6IFwidHlwZXMvaW5kZXguZC50c1wiLFxuXHRmaWxlczogW1xuXHRcdFwic3JjXCIsXG5cdFx0XCJkaXN0XCIsXG5cdFx0XCJqc3gtcnVudGltZVwiLFxuXHRcdFwianN4LWRldi1ydW50aW1lXCIsXG5cdFx0XCJfaXNvbGF0ZWQtaG5yc1wiLFxuXHRcdFwidHlwZXMvKi5kLnRzXCIsXG5cdFx0XCJtYWNyby5qc1wiLFxuXHRcdFwibWFjcm8uZC50c1wiLFxuXHRcdFwibWFjcm8uanMuZmxvd1wiXG5cdF0sXG5cdHNpZGVFZmZlY3RzOiBmYWxzZSxcblx0YXV0aG9yOiBcIkVtb3Rpb24gQ29udHJpYnV0b3JzXCIsXG5cdGxpY2Vuc2U6IFwiTUlUXCIsXG5cdHNjcmlwdHM6IHtcblx0XHRcInRlc3Q6dHlwZXNjcmlwdFwiOiBcImR0c2xpbnQgdHlwZXNcIlxuXHR9LFxuXHRkZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9ydW50aW1lXCI6IFwiXjcuMTMuMTBcIixcblx0XHRcIkBlbW90aW9uL2JhYmVsLXBsdWdpblwiOiBcIl4xMS43LjFcIixcblx0XHRcIkBlbW90aW9uL2NhY2hlXCI6IFwiXjExLjkuM1wiLFxuXHRcdFwiQGVtb3Rpb24vc2VyaWFsaXplXCI6IFwiXjEuMC40XCIsXG5cdFx0XCJAZW1vdGlvbi91dGlsc1wiOiBcIl4xLjEuMFwiLFxuXHRcdFwiQGVtb3Rpb24vd2Vhay1tZW1vaXplXCI6IFwiXjAuMi41XCIsXG5cdFx0XCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiOiBcIl4zLjMuMVwiXG5cdH0sXG5cdHBlZXJEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMC4wXCIsXG5cdFx0cmVhY3Q6IFwiPj0xNi44LjBcIlxuXHR9LFxuXHRwZWVyRGVwZW5kZW5jaWVzTWV0YToge1xuXHRcdFwiQGJhYmVsL2NvcmVcIjoge1xuXHRcdFx0b3B0aW9uYWw6IHRydWVcblx0XHR9LFxuXHRcdFwiQHR5cGVzL3JlYWN0XCI6IHtcblx0XHRcdG9wdGlvbmFsOiB0cnVlXG5cdFx0fVxuXHR9LFxuXHRkZXZEZXBlbmRlbmNpZXM6IHtcblx0XHRcIkBiYWJlbC9jb3JlXCI6IFwiXjcuMTMuMTBcIixcblx0XHRcIkBkZWZpbml0ZWx5dHlwZWQvZHRzbGludFwiOiBcIjAuMC4xMTJcIixcblx0XHRcIkBlbW90aW9uL2Nzc1wiOiBcIjExLjkuMFwiLFxuXHRcdFwiQGVtb3Rpb24vY3NzLXByZXR0aWZpZXJcIjogXCIxLjAuMVwiLFxuXHRcdFwiQGVtb3Rpb24vc2VydmVyXCI6IFwiMTEuNC4wXCIsXG5cdFx0XCJAZW1vdGlvbi9zdHlsZWRcIjogXCIxMS45LjNcIixcblx0XHRcImh0bWwtdGFnLW5hbWVzXCI6IFwiXjEuMS4yXCIsXG5cdFx0cmVhY3Q6IFwiMTYuMTQuMFwiLFxuXHRcdFwic3ZnLXRhZy1uYW1lc1wiOiBcIl4xLjEuMVwiLFxuXHRcdHR5cGVzY3JpcHQ6IFwiXjQuNS41XCJcblx0fSxcblx0cmVwb3NpdG9yeTogXCJodHRwczovL2dpdGh1Yi5jb20vZW1vdGlvbi1qcy9lbW90aW9uL3RyZWUvbWFpbi9wYWNrYWdlcy9yZWFjdFwiLFxuXHRwdWJsaXNoQ29uZmlnOiB7XG5cdFx0YWNjZXNzOiBcInB1YmxpY1wiXG5cdH0sXG5cdFwidW1kOm1haW5cIjogXCJkaXN0L2Vtb3Rpb24tcmVhY3QudW1kLm1pbi5qc1wiLFxuXHRwcmVjb25zdHJ1Y3Q6IHtcblx0XHRlbnRyeXBvaW50czogW1xuXHRcdFx0XCIuL2luZGV4LmpzXCIsXG5cdFx0XHRcIi4vanN4LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9qc3gtZGV2LXJ1bnRpbWUuanNcIixcblx0XHRcdFwiLi9faXNvbGF0ZWQtaG5ycy5qc1wiXG5cdFx0XSxcblx0XHR1bWROYW1lOiBcImVtb3Rpb25SZWFjdFwiXG5cdH1cbn07XG5cbnZhciBqc3ggPSBmdW5jdGlvbiBqc3godHlwZSwgcHJvcHMpIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgaWYgKHByb3BzID09IG51bGwgfHwgIWhhc093blByb3BlcnR5LmNhbGwocHJvcHMsICdjc3MnKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICB9XG5cbiAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGNyZWF0ZUVsZW1lbnRBcmdBcnJheSA9IG5ldyBBcnJheShhcmdzTGVuZ3RoKTtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzBdID0gRW1vdGlvbjtcbiAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gY3JlYXRlRW1vdGlvblByb3BzKHR5cGUsIHByb3BzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVtpXSA9IGFyZ3NbaV07XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgY3JlYXRlRWxlbWVudEFyZ0FycmF5KTtcbn07XG5cbnZhciB1c2VJbnNlcnRpb25FZmZlY3QgPSBSZWFjdFsndXNlSW5zZXJ0aW9uJyArICdFZmZlY3QnXSA/IFJlYWN0Wyd1c2VJbnNlcnRpb24nICsgJ0VmZmVjdCddIDogdXNlTGF5b3V0RWZmZWN0O1xudmFyIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IGZhbHNlOyAvLyBtYWludGFpbiBwbGFjZSBvdmVyIHJlcmVuZGVycy5cbi8vIGluaXRpYWwgcmVuZGVyIGZyb20gYnJvd3NlciwgaW5zZXJ0QmVmb3JlIGNvbnRleHQuc2hlZXQudGFnc1swXSBvciBpZiBhIHN0eWxlIGhhc24ndCBiZWVuIGluc2VydGVkIHRoZXJlIHlldCwgYXBwZW5kQ2hpbGRcbi8vIGluaXRpYWwgY2xpZW50LXNpZGUgcmVuZGVyIGZyb20gU1NSLCB1c2UgcGxhY2Ugb2YgaHlkcmF0aW5nIHRhZ1xuXG52YXIgR2xvYmFsID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICF3YXJuZWRBYm91dENzc1Byb3BGb3JHbG9iYWwgJiYgKCAvLyBjaGVjayBmb3IgY2xhc3NOYW1lIGFzIHdlbGwgc2luY2UgdGhlIHVzZXIgaXNcbiAgLy8gcHJvYmFibHkgdXNpbmcgdGhlIGN1c3RvbSBjcmVhdGVFbGVtZW50IHdoaWNoXG4gIC8vIG1lYW5zIGl0IHdpbGwgYmUgdHVybmVkIGludG8gYSBjbGFzc05hbWUgcHJvcFxuICAvLyAkRmxvd0ZpeE1lIEkgZG9uJ3QgcmVhbGx5IHdhbnQgdG8gYWRkIGl0IHRvIHRoZSB0eXBlIHNpbmNlIGl0IHNob3VsZG4ndCBiZSB1c2VkXG4gIHByb3BzLmNsYXNzTmFtZSB8fCBwcm9wcy5jc3MpKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkl0IGxvb2tzIGxpa2UgeW91J3JlIHVzaW5nIHRoZSBjc3MgcHJvcCBvbiBHbG9iYWwsIGRpZCB5b3UgbWVhbiB0byB1c2UgdGhlIHN0eWxlcyBwcm9wIGluc3RlYWQ/XCIpO1xuICAgIHdhcm5lZEFib3V0Q3NzUHJvcEZvckdsb2JhbCA9IHRydWU7XG4gIH1cblxuICB2YXIgc3R5bGVzID0gcHJvcHMuc3R5bGVzO1xuICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhbc3R5bGVzXSwgdW5kZWZpbmVkLCB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCkpO1xuICAvLyBidXQgaXQgaXMgYmFzZWQgb24gYSBjb25zdGFudCB0aGF0IHdpbGwgbmV2ZXIgY2hhbmdlIGF0IHJ1bnRpbWVcbiAgLy8gaXQncyBlZmZlY3RpdmVseSBsaWtlIGhhdmluZyB0d28gaW1wbGVtZW50YXRpb25zIGFuZCBzd2l0Y2hpbmcgdGhlbSBvdXRcbiAgLy8gc28gaXQncyBub3QgYWN0dWFsbHkgYnJlYWtpbmcgYW55dGhpbmdcblxuXG4gIHZhciBzaGVldFJlZiA9IHVzZVJlZigpO1xuICB1c2VJbnNlcnRpb25FZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXkgPSBjYWNoZS5rZXkgKyBcIi1nbG9iYWxcIjsgLy8gdXNlIGNhc2Ugb2YgaHR0cHM6Ly9naXRodWIuY29tL2Vtb3Rpb24tanMvZW1vdGlvbi9pc3N1ZXMvMjY3NVxuXG4gICAgdmFyIHNoZWV0ID0gbmV3IGNhY2hlLnNoZWV0LmNvbnN0cnVjdG9yKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgbm9uY2U6IGNhY2hlLnNoZWV0Lm5vbmNlLFxuICAgICAgY29udGFpbmVyOiBjYWNoZS5zaGVldC5jb250YWluZXIsXG4gICAgICBzcGVlZHk6IGNhY2hlLnNoZWV0LmlzU3BlZWR5XG4gICAgfSk7XG4gICAgdmFyIHJlaHlkcmF0aW5nID0gZmFsc2U7IC8vICRGbG93Rml4TWVcblxuICAgIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtZW1vdGlvbj1cXFwiXCIgKyBrZXkgKyBcIiBcIiArIHNlcmlhbGl6ZWQubmFtZSArIFwiXFxcIl1cIik7XG5cbiAgICBpZiAoY2FjaGUuc2hlZXQudGFncy5sZW5ndGgpIHtcbiAgICAgIHNoZWV0LmJlZm9yZSA9IGNhY2hlLnNoZWV0LnRhZ3NbMF07XG4gICAgfVxuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHJlaHlkcmF0aW5nID0gdHJ1ZTsgLy8gY2xlYXIgdGhlIGhhc2ggc28gdGhpcyBub2RlIHdvbid0IGJlIHJlY29nbml6YWJsZSBhcyByZWh5ZHJhdGFibGUgYnkgb3RoZXIgPEdsb2JhbC8+c1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1lbW90aW9uJywga2V5KTtcbiAgICAgIHNoZWV0Lmh5ZHJhdGUoW25vZGVdKTtcbiAgICB9XG5cbiAgICBzaGVldFJlZi5jdXJyZW50ID0gW3NoZWV0LCByZWh5ZHJhdGluZ107XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfTtcbiAgfSwgW2NhY2hlXSk7XG4gIHVzZUluc2VydGlvbkVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNoZWV0UmVmQ3VycmVudCA9IHNoZWV0UmVmLmN1cnJlbnQ7XG4gICAgdmFyIHNoZWV0ID0gc2hlZXRSZWZDdXJyZW50WzBdLFxuICAgICAgICByZWh5ZHJhdGluZyA9IHNoZWV0UmVmQ3VycmVudFsxXTtcblxuICAgIGlmIChyZWh5ZHJhdGluZykge1xuICAgICAgc2hlZXRSZWZDdXJyZW50WzFdID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHNlcmlhbGl6ZWQubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBpbnNlcnQga2V5ZnJhbWVzXG4gICAgICBpbnNlcnRTdHlsZXMoY2FjaGUsIHNlcmlhbGl6ZWQubmV4dCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHNoZWV0LnRhZ3MubGVuZ3RoKSB7XG4gICAgICAvLyBpZiB0aGlzIGRvZXNuJ3QgZXhpc3QgdGhlbiBpdCB3aWxsIGJlIG51bGwgc28gdGhlIHN0eWxlIGVsZW1lbnQgd2lsbCBiZSBhcHBlbmRlZFxuICAgICAgdmFyIGVsZW1lbnQgPSBzaGVldC50YWdzW3NoZWV0LnRhZ3MubGVuZ3RoIC0gMV0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgc2hlZXQuYmVmb3JlID0gZWxlbWVudDtcbiAgICAgIHNoZWV0LmZsdXNoKCk7XG4gICAgfVxuXG4gICAgY2FjaGUuaW5zZXJ0KFwiXCIsIHNlcmlhbGl6ZWQsIHNoZWV0LCBmYWxzZSk7XG4gIH0sIFtjYWNoZSwgc2VyaWFsaXplZC5uYW1lXSk7XG4gIHJldHVybiBudWxsO1xufSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEdsb2JhbC5kaXNwbGF5TmFtZSA9ICdFbW90aW9uR2xvYmFsJztcbn1cblxuZnVuY3Rpb24gY3NzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZVN0eWxlcyhhcmdzKTtcbn1cblxudmFyIGtleWZyYW1lcyA9IGZ1bmN0aW9uIGtleWZyYW1lcygpIHtcbiAgdmFyIGluc2VydGFibGUgPSBjc3MuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICB2YXIgbmFtZSA9IFwiYW5pbWF0aW9uLVwiICsgaW5zZXJ0YWJsZS5uYW1lOyAvLyAkRmxvd0ZpeE1lXG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIHN0eWxlczogXCJAa2V5ZnJhbWVzIFwiICsgbmFtZSArIFwie1wiICsgaW5zZXJ0YWJsZS5zdHlsZXMgKyBcIn1cIixcbiAgICBhbmltOiAxLFxuICAgIHRvU3RyaW5nOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiBcIl9FTU9fXCIgKyB0aGlzLm5hbWUgKyBcIl9cIiArIHRoaXMuc3R5bGVzICsgXCJfRU1PX1wiO1xuICAgIH1cbiAgfTtcbn07XG5cbnZhciBjbGFzc25hbWVzID0gZnVuY3Rpb24gY2xhc3NuYW1lcyhhcmdzKSB7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgY2xzID0gJyc7XG5cbiAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBhcmcgPSBhcmdzW2ldO1xuICAgIGlmIChhcmcgPT0gbnVsbCkgY29udGludWU7XG4gICAgdmFyIHRvQWRkID0gdm9pZCAwO1xuXG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICB0b0FkZCA9IGNsYXNzbmFtZXMoYXJnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXJnLnN0eWxlcyAhPT0gdW5kZWZpbmVkICYmIGFyZy5uYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignWW91IGhhdmUgcGFzc2VkIHN0eWxlcyBjcmVhdGVkIHdpdGggYGNzc2AgZnJvbSBgQGVtb3Rpb24vcmVhY3RgIHBhY2thZ2UgdG8gdGhlIGBjeGAuXFxuJyArICdgY3hgIGlzIG1lYW50IHRvIGNvbXBvc2UgY2xhc3MgbmFtZXMgKHN0cmluZ3MpIHNvIHlvdSBzaG91bGQgY29udmVydCB0aG9zZSBzdHlsZXMgdG8gYSBjbGFzcyBuYW1lIGJ5IHBhc3NpbmcgdGhlbSB0byB0aGUgYGNzc2AgcmVjZWl2ZWQgZnJvbSA8Q2xhc3NOYW1lcy8+IGNvbXBvbmVudC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG9BZGQgPSAnJztcblxuICAgICAgICAgICAgZm9yICh2YXIgayBpbiBhcmcpIHtcbiAgICAgICAgICAgICAgaWYgKGFyZ1trXSAmJiBrKSB7XG4gICAgICAgICAgICAgICAgdG9BZGQgJiYgKHRvQWRkICs9ICcgJyk7XG4gICAgICAgICAgICAgICAgdG9BZGQgKz0gaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICB0b0FkZCA9IGFyZztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b0FkZCkge1xuICAgICAgY2xzICYmIChjbHMgKz0gJyAnKTtcbiAgICAgIGNscyArPSB0b0FkZDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2xzO1xufTtcblxuZnVuY3Rpb24gbWVyZ2UocmVnaXN0ZXJlZCwgY3NzLCBjbGFzc05hbWUpIHtcbiAgdmFyIHJlZ2lzdGVyZWRTdHlsZXMgPSBbXTtcbiAgdmFyIHJhd0NsYXNzTmFtZSA9IGdldFJlZ2lzdGVyZWRTdHlsZXMocmVnaXN0ZXJlZCwgcmVnaXN0ZXJlZFN0eWxlcywgY2xhc3NOYW1lKTtcblxuICBpZiAocmVnaXN0ZXJlZFN0eWxlcy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfVxuXG4gIHJldHVybiByYXdDbGFzc05hbWUgKyBjc3MocmVnaXN0ZXJlZFN0eWxlcyk7XG59XG5cbnZhciBJbnNlcnRpb24gPSBmdW5jdGlvbiBJbnNlcnRpb24oX3JlZikge1xuICB2YXIgY2FjaGUgPSBfcmVmLmNhY2hlLFxuICAgICAgc2VyaWFsaXplZEFyciA9IF9yZWYuc2VyaWFsaXplZEFycjtcbiAgdmFyIHJ1bGVzID0gdXNlSW5zZXJ0aW9uRWZmZWN0TWF5YmUoZnVuY3Rpb24gKCkge1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXJpYWxpemVkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVzID0gaW5zZXJ0U3R5bGVzKGNhY2hlLCBzZXJpYWxpemVkQXJyW2ldLCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbnZhciBDbGFzc05hbWVzID0gLyogI19fUFVSRV9fICovd2l0aEVtb3Rpb25DYWNoZShmdW5jdGlvbiAocHJvcHMsIGNhY2hlKSB7XG4gIHZhciBoYXNSZW5kZXJlZCA9IGZhbHNlO1xuICB2YXIgc2VyaWFsaXplZEFyciA9IFtdO1xuXG4gIHZhciBjc3MgPSBmdW5jdGlvbiBjc3MoKSB7XG4gICAgaWYgKGhhc1JlbmRlcmVkICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3NzIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIHJlbmRlcicpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZVN0eWxlcyhhcmdzLCBjYWNoZS5yZWdpc3RlcmVkKTtcbiAgICBzZXJpYWxpemVkQXJyLnB1c2goc2VyaWFsaXplZCk7IC8vIHJlZ2lzdHJhdGlvbiBoYXMgdG8gaGFwcGVuIGhlcmUgYXMgdGhlIHJlc3VsdCBvZiB0aGlzIG1pZ2h0IGdldCBjb25zdW1lZCBieSBgY3hgXG5cbiAgICByZWdpc3RlclN0eWxlcyhjYWNoZSwgc2VyaWFsaXplZCwgZmFsc2UpO1xuICAgIHJldHVybiBjYWNoZS5rZXkgKyBcIi1cIiArIHNlcmlhbGl6ZWQubmFtZTtcbiAgfTtcblxuICB2YXIgY3ggPSBmdW5jdGlvbiBjeCgpIHtcbiAgICBpZiAoaGFzUmVuZGVyZWQgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjeCBjYW4gb25seSBiZSB1c2VkIGR1cmluZyByZW5kZXInKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2UoY2FjaGUucmVnaXN0ZXJlZCwgY3NzLCBjbGFzc25hbWVzKGFyZ3MpKTtcbiAgfTtcblxuICB2YXIgY29udGVudCA9IHtcbiAgICBjc3M6IGNzcyxcbiAgICBjeDogY3gsXG4gICAgdGhlbWU6IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KVxuICB9O1xuICB2YXIgZWxlID0gcHJvcHMuY2hpbGRyZW4oY29udGVudCk7XG4gIGhhc1JlbmRlcmVkID0gdHJ1ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9jcmVhdGVFbGVtZW50KEZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovY3JlYXRlRWxlbWVudChJbnNlcnRpb24sIHtcbiAgICBjYWNoZTogY2FjaGUsXG4gICAgc2VyaWFsaXplZEFycjogc2VyaWFsaXplZEFyclxuICB9KSwgZWxlKTtcbn0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBDbGFzc05hbWVzLmRpc3BsYXlOYW1lID0gJ0Vtb3Rpb25DbGFzc05hbWVzJztcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGlzQnJvd3NlciA9IFwib2JqZWN0XCIgIT09ICd1bmRlZmluZWQnOyAvLyAjMTcyNyBmb3Igc29tZSByZWFzb24gSmVzdCBldmFsdWF0ZXMgbW9kdWxlcyB0d2ljZSBpZiBzb21lIGNvbnN1bWluZyBtb2R1bGUgZ2V0cyBtb2NrZWQgd2l0aCBqZXN0Lm1vY2tcblxuICB2YXIgaXNKZXN0ID0gdHlwZW9mIGplc3QgIT09ICd1bmRlZmluZWQnO1xuXG4gIGlmIChpc0Jyb3dzZXIgJiYgIWlzSmVzdCkge1xuICAgIC8vIGdsb2JhbFRoaXMgaGFzIHdpZGUgYnJvd3NlciBzdXBwb3J0IC0gaHR0cHM6Ly9jYW5pdXNlLmNvbS8/c2VhcmNoPWdsb2JhbFRoaXMsIE5vZGUuanMgMTIgYW5kIGxhdGVyXG4gICAgdmFyIGdsb2JhbENvbnRleHQgPSAvLyAkRmxvd0lnbm9yZVxuICAgIHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgIDogaXNCcm93c2VyID8gd2luZG93IDogZ2xvYmFsO1xuICAgIHZhciBnbG9iYWxLZXkgPSBcIl9fRU1PVElPTl9SRUFDVF9cIiArIHBrZy52ZXJzaW9uLnNwbGl0KCcuJylbMF0gKyBcIl9fXCI7XG5cbiAgICBpZiAoZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBhcmUgbG9hZGluZyBAZW1vdGlvbi9yZWFjdCB3aGVuIGl0IGlzIGFscmVhZHkgbG9hZGVkLiBSdW5uaW5nICcgKyAnbXVsdGlwbGUgaW5zdGFuY2VzIG1heSBjYXVzZSBwcm9ibGVtcy4gVGhpcyBjYW4gaGFwcGVuIGlmIG11bHRpcGxlICcgKyAndmVyc2lvbnMgYXJlIHVzZWQsIG9yIGlmIG11bHRpcGxlIGJ1aWxkcyBvZiB0aGUgc2FtZSB2ZXJzaW9uIGFyZSAnICsgJ3VzZWQuJyk7XG4gICAgfVxuXG4gICAgZ2xvYmFsQ29udGV4dFtnbG9iYWxLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgeyBDbGFzc05hbWVzLCBHbG9iYWwsIGpzeCBhcyBjcmVhdGVFbGVtZW50LCBjc3MsIGpzeCwga2V5ZnJhbWVzIH07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbG9hZGFibGUgZnJvbSBcIkBsb2FkYWJsZS9jb21wb25lbnRcIjtcclxuXHJcbi8vIFN0eWxlc1xyXG5pbXBvcnQge1RpbWVMaW5lQ29udGFpbmVyLCBUaW1lTGluZUNvbnRlbnR9IGZyb20gJy4vc3R5bGVzJztcclxuaW1wb3J0IHtjc3N9IGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuY29uc3QgSGVhZGVyID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCdAY29tcG9uZW50cy9IZWFkZXInKSk7XHJcbmNvbnN0IFRpbWVMaW5lQm94ID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCcuL1RpbWVMaW5lQm94JykpO1xyXG5cclxuY29uc3QgVGltZUxpbmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGltZUxpbmVBcnJheSwgc2V0VGltZUxpbmVBcnJheV0gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIuyEuOyiheuMgCDshoztlITtirjsm6jtlZnqs7wo6rWsIOuUlOyngO2EuCDsvZjthZDsuKDtlZnqs7wpIFwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMTYtMDMtMDIgflxcbiAyMDIyLTAyLTE4XCIsXHJcbiAgICAgICAgICAgIGljb246IFwiZ3JhZHVhdGVcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi7IS47KKF64yAIOyehe2VmVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IFwiXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi7ZWt6rO17KCE64uoIENFUlQg6rCQ7Iuc67OR7Jy866GcIOuzteustO2WiOyKteuLiOuLpC5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCIyMDE4LTAyLTE5IH5cXG4gMjAxOS0xMi0xNVwiLFxyXG4gICAgICAgICAgICBpY29uOiBcIm1pbGl0YXJ5XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIu2VtOq1sCDrp4zquLDsoITsl61cIixcclxuICAgICAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIlNJIOyXheyytCDsvZTrk5ztgazroIjsnbgo7Jyg7ZWcKeyXkOyEnCDslb0gNOqwnOyblCDsnbjthLTsnYQg7ZaI7Iq164uI64ukLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIwMjEtMDktMDEgflxcbiAyMDIxLTEyLTIyXCIsXHJcbiAgICAgICAgICAgIGljb246IFwiaW50ZXJuXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIklDVCDsnbjthLTsi61cIixcclxuICAgICAgICAgICAgdHlwZTogXCJcIixcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBcIlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIuyduO2EtOycvOuhnCDqt7zrrLTtlZjrjZgg7ZqM7IKs7JeQ7IScIOyxhOyaqeygnOyViOydhCDrsJvslYQg7ZiE7J6s6rmM7KeA64+EIOyerOyngeykkeyeheuLiOuLpC5cIixcclxuICAgICAgICAgICAgZGF0ZTogXCIyMDIyLTAxLTAzIH5cIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZXJzb25cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi7L2U65Oc7YGs66CI7J24IOyerOyngVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IFwiXCIsXHJcbiAgICAgICAgfVxyXG4gICAgXSk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxUaW1lTGluZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWRlci8+XHJcbiAgICAgICAgICAgIDxUaW1lTGluZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICB7KHRpbWVMaW5lQXJyYXkgfHwgW10pLm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRpbWVMaW5lQm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtpdGVtLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e2l0ZW0uYW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvVGltZUxpbmVDb250ZW50PlxyXG4gICAgICAgIDwvVGltZUxpbmVDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZUxpbmU7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcclxuaW1wb3J0IHtjc3N9IGZyb20gXCJAZW1vdGlvbi9jc3NcIjtcclxuaW1wb3J0IHtrZXlmcmFtZXN9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5cclxuY29uc3QgZmlsbExlZnQgPSBrZXlmcmFtZXMgYFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgcmlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IGZpbGxUb3AgPSBrZXlmcmFtZXMgYFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBmaWxsTGVmdE9kZCA9IGtleWZyYW1lcyBgXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBsZWZ0OiAxMDAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgVGltZUxpbmVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtZmFtaWx5OiBTbGFjay1MYXJzc2VpdCwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgU2Vnb2UgVUksIFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGltZUxpbmVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOUZEO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVGltZUxpbmVCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgJjpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICAmIGRpdi5kYXRlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDA7XHJcbiAgICB9XHJcbiAgICAmIGRpdi5jb250ZW50IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDAgMCA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBkaXYuaWNvbiB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNmE0ZWM7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiAke2ZpbGxUb3B9IDJzIGZvcndhcmRzIDRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y2YTRlYztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICBhbmltYXRpb246ICR7ZmlsbExlZnR9IDJzIGZvcndhcmRzIDRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIGRpdi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjOTI1MWFjO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gIH1cclxuICAmIGRpdi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAtMTJweCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpLFxyXG4gICAgMCAxOHB4IDM2cHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgICAwIC0xMnB4IDM2cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogY2FsYyg0MHZ3IC0gODRweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggMDtcclxuICB9XHJcbiAgJiBkaXYuZGF0ZSB7XHJcbiAgICBjb2xvcjogI2Y2YTRlYztcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJhY2tncm91bmQ6ICM5MjUxYWM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgJiBkaXYuaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICM5MjUxYWM7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmNmE0ZWM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAtMTJweCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpLFxyXG4gICAgMCAxOHB4IDM2cHggLTE4cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgICAwIC0xMnB4IDM2cHggLThweCByZ2JhKDAsIDAsIDAsIDAuMDI1KTtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgJiA+IHN2ZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2Y2YTRlYztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICBhbmltYXRpb246ICR7ZmlsbFRvcH0gMnMgYm90aCA0cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNmE0ZWM7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgYW5pbWF0aW9uOiAke2ZpbGxMZWZ0T2RkfSAycyBmb3J3YXJkcyA0cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJiBkaXYuZGVzY3JpcHRpb24ge1xyXG4gICAgZmxleC1iYXNpczogNjAlO1xyXG4gIH1cclxuXHJcbiAgJi50eXBlMiB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzU1NWFjMDtcclxuICAgIH1cclxuICAgICYgZGl2LmRhdGUge1xyXG4gICAgICBjb2xvcjogIzg3YmJmZTtcclxuICAgICAgYmFja2dyb3VuZDogIzU1NWFjMDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgybiArIDEpIHtcclxuICAgICAgJiAgZGl2Lmljb24ge1xyXG4gICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3YmJmZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmICBkaXYuaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4N2JiZmU7XHJcbiAgICAgIGNvbG9yOiAjNTU1YWMwO1xyXG4gICAgICAmOmJlZm9yZSxcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzg3YmJmZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiAgZGl2LnRpdGxlIHtcclxuICAgICAgY29sb3I6ICM1NTVhYzA7XHJcbiAgICB9XHJcbiAgICAmICBkaXYudGl0bGUge1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi50eXBlMyB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzI0YjQ3ZTtcclxuICAgIH1cclxuICAgICYgIGRpdi5kYXRlIHtcclxuICAgICAgY29sb3I6ICNhZmYxYjY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNGI0N2U7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMm4gKyAxKSB7XHJcbiAgICAgICYgIGRpdi5pY29uIHtcclxuICAgICAgICAmOmJlZm9yZSxcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNhZmYxYjY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJiBkaXYuaWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNhZmYxYjY7XHJcbiAgICAgIGNvbG9yOiAjMjRiNDdlO1xyXG4gICAgICAmOmJlZm9yZSxcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2FmZjFiNjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJiAgZGl2LnRpdGxlIHtcclxuICAgICAgY29sb3I6ICMyNGI0N2U7XHJcbiAgICB9XHJcbiAgICAmICBkaXYudGl0bGUge1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgJiBkaXYuaWNvbiB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gOyJdLCJuYW1lcyI6WyJjc3MiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsInVzZUxheW91dEVmZmVjdCIsImtleWZyYW1lcyIsImluc2VydGFibGUiLCJhcHBseSIsIm5hbWUiLCJzdHlsZXMiLCJhbmltIiwidG9TdHJpbmciLCJ0aGlzIiwiSGVhZGVyIiwibG9hZGFibGUiLCJUaW1lTGluZUJveCIsInVzZVN0YXRlIiwiY29udGVudCIsImRhdGUiLCJpY29uIiwidGl0bGUiLCJ0eXBlIiwiYW5pbWF0aW9uIiwidGltZUxpbmVBcnJheSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZpbGxMZWZ0IiwiZmlsbFRvcCIsImZpbGxMZWZ0T2RkIiwiVGltZUxpbmVDb250YWluZXIiLCJzdHlsZWQiLCJUaW1lTGluZUNvbnRlbnQiLCJUaW1lTGluZUJveENvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=