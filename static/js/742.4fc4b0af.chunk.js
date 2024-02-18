"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[742],{1821:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var r,a=n(2791),s=n(4420),c=n(2564),i=n(3553),o=function(e){return e.contacts.contacts},l=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},m=function(e){return e.filter.filter},d=(0,i.P1)([o,m],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase().trim())}))})),f=n(3634),_=n(1413),h=n(7762),p=n(1134),v="ContactForm_form__dhl+T",g="ContactForm_formMainContent__rAbBB",b="ContactForm_title__jZguf",j="ContactForm_formInput__GszVU",x="ContactForm_errorMessage__HbfEx",C="ContactForm_btn__wll+u",w="ContactForm_text__kqq6l",y=n(184),N=function(){var e=(0,s.I0)(),t=(0,p.cI)(),n=t.register,r=t.handleSubmit,a=t.reset,i=t.formState.errors,l=(0,s.v9)(o);return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)("form",{onSubmit:r((function(t){var n,r="",s=(0,h.Z)(l);try{for(s.s();!(n=s.n()).done;){var i=n.value;if(i.name.toLowerCase()===t.name.toLowerCase()){r=t.name;break}if(i.number.toLowerCase()===t.number.toLowerCase()){r=t.number;break}}}catch(o){s.e(o)}finally{s.f()}r?c.Am.error('"'.concat(r,'" is already in contacts.')):(e((0,f.AT)(t)),c.Am.success('"'.concat(t.name,'" has been added to contacts!')),a())})),className:v,children:[(0,y.jsxs)("div",{className:g,children:[(0,y.jsx)("h2",{className:b,children:"New contact form"}),(0,y.jsx)("input",(0,_.Z)((0,_.Z)({},n("name",{required:!0})),{},{type:"text",placeholder:"*Name",autoFocus:!0,className:j})),i.name&&(0,y.jsx)("span",{className:x,children:"this field is required"}),(0,y.jsx)("input",(0,_.Z)((0,_.Z)({},n("number",{required:!0})),{},{type:"text",placeholder:"*Phone number",className:j})),i.number&&(0,y.jsx)("span",{className:x,children:"this field is required"}),(0,y.jsx)("button",{type:"submit",className:C,children:"Add contact"})]}),(0,y.jsx)("p",{className:w,children:"* - Fields are required"})]})})},O=n(4808),L="Filter_wrapper__9Ksqy",P="Filter_input__N7T3z",F=function(){var e=(0,s.I0)(),t=(0,s.v9)(m);return(0,y.jsx)("div",{className:L,children:(0,y.jsx)("input",{type:"text",name:"filter",placeholder:"Find contact",className:P,value:t,onChange:function(t){var n=t.target.value;e((0,O.T)(n))}})})},k=n(7784),I="ContactListPage_wrapper__fMpwG",A="ContactListPage_inner__XilDs",E="ContactListPage_title__qBuqb",q="ContactListPage_imageWrapper__h4D6a",S="ContactListPage_text__WcY7t",z="ContactListPage_animatedText__zFjR0",M="ContactListPage_contactsList__IGsVt",Z="ContactListPage_card__j4lX8",B="ContactListPage_cardInner__sE9tz",T="ContactListPage_contactName__NBynt",G="ContactListPage_contactNumber__jvbcC",D="ContactListPage_icon__Vs9zz",R="ContactListPage_btn__FzfGE",V=n.p+"static/media/contacts_stopper-image.e9f4230019e42468dde2.png",H=["title","titleId"];function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function K(e,t){var n=e.title,s=e.titleId,c=X(e,H);return a.createElement("svg",W({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",ref:t,"aria-labelledby":s},c),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("path",{fill:"currentColor",d:"M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2M6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6"})))}var Q,U=a.forwardRef(K),Y=(n.p,["title","titleId"]);function J(){return J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function ee(e,t){var n=e.title,r=e.titleId,s=$(e,Y);return a.createElement("svg",J({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 24 24",ref:t,"aria-labelledby":r},s),n?a.createElement("title",{id:r},n):null,Q||(Q=a.createElement("path",{fill:"currentColor",d:"M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296a11.421 11.421 0 0 0 4.583 1.364a1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995A15.51 15.51 0 0 1 18.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.421 11.421 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.45 12.45 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.441 12.441 0 0 1-.75-1.588"})))}var te=a.forwardRef(ee),ne=(n.p,function(){var e=(0,s.I0)(),t=(0,s.v9)(o),n=(0,s.v9)(l),r=(0,s.v9)(u),i=(0,s.v9)(m),_=(0,s.v9)(d);return(0,a.useEffect)((function(){e((0,f.Qd)())}),[e]),(0,y.jsxs)(y.Fragment,{children:[r&&(0,y.jsx)("p",{children:r}),(0,y.jsxs)("div",{className:I,children:[(0,y.jsx)("div",{children:(0,y.jsx)(N,{})}),(0,y.jsxs)("div",{className:A,children:[(0,y.jsx)("h2",{className:E,children:"Contacts list"}),n?(0,y.jsx)(k.Z,{}):(0,y.jsx)(y.Fragment,{children:0===(null===t||void 0===t?void 0:t.length)?(0,y.jsxs)("div",{className:q,children:[(0,y.jsx)("img",{src:V,alt:"An opened empty book",width:"220",height:"100"}),(0,y.jsx)("p",{className:S,children:"Contacts list is empty."}),(0,y.jsx)("p",{className:z,children:"Start adding your contacts!"})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(F,{}),(0,y.jsx)("ul",{className:M,children:(i.length>0?_:t).map((function(t){var n=t.id,r=t.name,a=t.number;return(0,y.jsxs)("li",{className:Z,children:[(0,y.jsxs)("div",{className:B,children:[(0,y.jsxs)("p",{className:T,children:[(0,y.jsx)(U,{className:D}),r]}),(0,y.jsxs)("p",{className:G,children:[(0,y.jsx)(te,{className:D}),a]})]}),(0,y.jsx)("button",{type:"submit",className:R,onClick:function(){return t=n,a=r,e((0,f.m5)(t)),void c.Am.info('"'.concat(a,'" has been deleted from contacts.'));var t,a},children:"Delete"})]},n)}))})]})})]})]})]})})}}]);
//# sourceMappingURL=742.4fc4b0af.chunk.js.map