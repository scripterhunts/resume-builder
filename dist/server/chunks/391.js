exports.id=391,exports.ids=[391],exports.modules={9877:(e,t,r)=>{Promise.resolve().then(r.bind(r,9690)),Promise.resolve().then(r.bind(r,7331))},3036:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},9049:(e,t,r)=>{"use strict";r.d(t,{A:()=>b});var s=r(326),l=r(7577),o=r(7857),i=r(2591),a=r(5210),n=r(1233),c=r(5360),u=r(1910);let d=async e=>{let t=await (0,a.g)(e),r=(0,n.U)(t),s=(0,c.A)(r);return(0,u.n)(s)};var p=r(3438),m=r(6244),h=r(5047);let f={src:"/_next/static/media/add-pdf.d5a58bd2.svg",height:99,width:86,blurWidth:0,blurHeight:0};var x=r(6226),g=r(4693),y=r(4830);let w={name:"",size:0,fileUrl:""},b=({onFileUrlChange:e,className:t,playgroundView:r=!1})=>{let[a,n]=(0,l.useState)(w),[c,u]=(0,l.useState)(!1),[b,v]=(0,l.useState)(!1),j=(0,h.useRouter)(),k=!!a.name,O=t=>{a.fileUrl&&URL.revokeObjectURL(a.fileUrl);let{name:r,size:s}=t,l=URL.createObjectURL(t);n({name:r,size:s,fileUrl:l}),e(l)},N=async e=>{let t=e.target.files;t&&O(t[0])},P=async()=>{let e=await d(a.fileUrl),t=(0,y.I)(m.DF);if((0,p.pK)()){let r=Object.keys(t.formToShow),s={workExperiences:e.workExperiences.length>0,educations:e.educations.length>0,projects:e.projects.length>0,skills:e.skills.descriptions.length>0,custom:e.custom.descriptions.length>0};for(let e of r)t.formToShow[e]=s[e]}console.log(e),(0,p.Wq)({resume:e,settings:t}),j.push("/resume-builder")};return s.jsx("div",{className:(0,g.cx)("flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 ",c&&"border-sky-400",r?"pb-6 pt-4":"py-12",t),onDragOver:e=>{e.preventDefault(),u(!0)},onDragLeave:()=>u(!1),onDrop:e=>{e.preventDefault();let t=e.dataTransfer.files[0];t.name.endsWith(".pdf")?(v(!1),O(t)):v(!0),u(!1)},children:(0,s.jsxs)("div",{className:(0,g.cx)("text-center",r?"space-y-2":"space-y-3"),children:[!r&&s.jsx(x.default,{src:f,className:"mx-auto h-14 w-14",alt:"Add pdf","aria-hidden":"true",priority:!0}),k?(0,s.jsxs)("div",{className:"flex items-center justify-center gap-3 pt-3",children:[(0,s.jsxs)("div",{className:"pl-7 font-semibold text-gray-900",children:[a.name," - ",S(a.size)]}),s.jsx("button",{type:"button",className:"outline-theme-blue rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-500",title:"Remove file",onClick:()=>{n(w),e("")},children:s.jsx(i.Z,{className:"h-6 w-6"})})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx("p",{className:(0,g.cx)("pt-3 text-gray-700",!r&&"text-lg font-semibold"),children:"Browse a pdf file or drop it here"}),(0,s.jsxs)("p",{className:"flex text-sm text-gray-500",children:[s.jsx(o.Z,{className:"mr-1 mt-1 h-3 w-3 text-gray-400"}),"File data is used locally and never leaves your browser"]})]}),s.jsx("div",{className:"pt-4",children:k?(0,s.jsxs)(s.Fragment,{children:[!r&&(0,s.jsxs)("button",{type:"button",className:"btn-primary",onClick:P,children:["Import and Continue ",s.jsx("span",{"aria-hidden":"true",children:"→"})]}),(0,s.jsxs)("p",{className:(0,g.cx)(" text-gray-500",!r&&"mt-6"),children:["Note: ",r?"Parser":"Import"," works best on single column resume"]})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("label",{className:(0,g.cx)("within-outline-theme-purple cursor-pointer rounded-full px-6 pb-2.5 pt-2 font-semibold shadow-sm",r?"border":"bg-primary"),children:["Browse file",s.jsx("input",{type:"file",className:"sr-only",accept:".pdf",onChange:N})]}),b&&s.jsx("p",{className:"mt-6 text-red-400",children:"Only pdf file is supported"})]})})]})})},S=e=>{let t=e/1024;return t<1e3?t.toPrecision(3)+" KB":(t/1024).toPrecision(3)+" MB"}},7331:(e,t,r)=>{"use strict";r.d(t,{TopNavBar:()=>a});var s=r(326),l=r(5047),o=r(434),i=r(4693);let a=()=>{let e=(0,l.usePathname)();return s.jsx("header",{"aria-label":"Site Header",className:(0,i.cx)("flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12","/"===e&&"bg-dot"),children:(0,s.jsxs)("div",{className:"flex h-10 w-full items-center justify-between",children:[(0,s.jsxs)(o.default,{href:"/",children:[s.jsx("span",{className:"sr-only",children:"SeeWee"}),s.jsx("h1",{style:{fontWeight:"bolder"},children:" SeeWee"})]}),s.jsx("nav",{"aria-label":"Site Nav Bar",className:"flex items-center gap-2 text-sm font-medium",children:[["/resume-builder","Create a new Resume"]].map(([e,t])=>s.jsx(o.default,{className:"rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4",href:e,children:t},t))})]})})}},4693:(e,t,r)=>{"use strict";r.d(t,{cx:()=>s});let s=(...e)=>{let t=[];for(let r of e)"string"==typeof r&&t.push(r.trim());return t.join(" ")}},4830:(e,t,r)=>{"use strict";r.d(t,{I:()=>s});let s=e=>JSON.parse(JSON.stringify(e))},8166:(e,t,r)=>{"use strict";r.d(t,{of:()=>g});var s=r(3517),l=r(6140),o=r(4139);let i=e=>e.text.includes("@"),a=e=>/\([0-9]+\)/.test(e.text),n=e=>e.text.match(/[A-Z][a-zA-Z\s]+, [A-Z]{2}/),c=e=>e.text.includes("/"),u=e=>e.text.split(" ").length>=4,d=[[e=>e.text.match(/^[a-zA-Z\s\.]+$/),3,!0],[l.nJ,2],[l.Pd,2],[i,-4],[l.Yo,-4],[a,-4],[l.r_,-4],[c,-4],[u,-2]],p=[[e=>e.text.match(/\S+@\S+\.\S+/),4,!0],[l.nJ,-1],[l.Pd,-1],[a,-4],[l.r_,-4],[c,-4],[u,-4]],m=[[e=>e.text.match(/\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}/),4,!0],[l.lZ,-4]],h=[[n,4,!0],[l.nJ,-1],[i,-4],[a,-3],[c,-4]],f=[[e=>e.text.match(/\S+\.[a-z]+\/\S+/),4,!0],[e=>e.text.match(/https?:\/\/\S+\.\S+/),3,!0],[e=>e.text.match(/www\.\S+\.\S+/),3,!0],[l.nJ,-1],[i,-4],[a,-3],[l.r_,-4],[u,-4]],x=[[u,4],[l.nJ,-1],[i,-4],[a,-3],[n,-4,!1]],g=e=>{let t=(e.profile||[]).flat(),[r,l]=(0,o.u)(t,d),[i,a]=(0,o.u)(t,p),[n,c]=(0,o.u)(t,m),[u,g]=(0,o.u)(t,h),[y,w]=(0,o.u)(t,f),[b,S]=(0,o.u)(t,x,void 0,!0),v=(0,s.A)(e,["summary"]).flat().map(e=>e.text).join(" "),j=(0,s.A)(e,["objective"]).flat().map(e=>e.text).join(" ");return{profile:{name:r,email:i,phone:n,location:u,url:y,summary:v||j||b},profileScores:{name:l,email:a,phone:c,location:g,url:w,summary:S}}}},1910:(e,t,r)=>{"use strict";r.d(t,{n:()=>P});var s=r(8166),l=r(3517),o=r(2593),i=r(6140);let a=e=>{let t=n(e),r=c(e,t);return 1===r.length&&(r=c(e,(e,t)=>!!(!(0,i.nJ)(t[0])&&(0,i.nJ)(e[0]))&&!o.w.includes(e[0].text))),r},n=e=>{let t={},r=e.map(e=>e[0].y),s=0,l=0;for(let e=1;e<r.length;e++){let o=Math.round(r[e-1]-r[e]);t[o]||(t[o]=0),t[o]+=1,t[o]>l&&(s=o,l=t[o])}let o=1.4*s;return(e,t)=>Math.round(t[0].y-e[0].y)>o},c=(e,t)=>{let r=[],s=[];for(let l=0;l<e.length;l++){let o=e[l];if(0===l){s.push(o);continue}t(o,e[l-1])&&(r.push(s),s=[]),s.push(o)}return s.length>0&&r.push(s),r};var u=r(4139);let d=["College","University","Institute","School","Academy","BASIS","Magnet"],p=e=>d.some(t=>e.text.includes(t)),m=["Associate","Bachelor","Master","PhD","Ph."],h=e=>m.some(t=>e.text.includes(t))||/[ABM][A-Z\.]/.test(e.text),f=[[p,4],[h,-4],[i.Yo,-4]],x=[[h,4],[p,-4],[i.Yo,-3]],g=[[e=>e.text.match(/[0-4]\.\d{1,2}/),4,!0],[e=>{let t=parseFloat(e.text);return Number.isFinite(t)&&t<=110?[String(t)]:null},3,!0],[i.r_,-3],[i.lZ,-4]],y=e=>{let t=[],r=[];for(let s of a((0,l.A)(e,["education"]))){let e=s.flat(),[l,a]=(0,u.u)(e,f),[n,c]=(0,u.u)(e,x),[d,p]=(0,u.u)(e,g),[m,h]=(0,u.u)(e,i.s5),y=[],w=(0,o.wl)(s);if(void 0!==w){let e=s.slice(w);y=(0,o.GC)(e)}t.push({school:l,degree:n,gpa:d,date:m,descriptions:y}),r.push({schoolScores:a,degreeScores:c,gpaScores:p,dateScores:h})}if(0!==t.length){let r=(0,l.A)(e,["course"]);0!==r.length&&t[0].descriptions.push("Courses: "+r.flat().map(e=>e.text).join(" "))}return{educations:t,educationsScores:r}},w=["work","experience","employment","history","job"],b=["Accountant","Administrator","Advisor","Agent","Analyst","Apprentice","Architect","Assistant","Associate","Auditor","Bartender","Biologist","Bookkeeper","Buyer","Carpenter","Cashier","CEO","Clerk","Co-op","Co-Founder","Consultant","Coordinator","CTO","Developer","Designer","Director","Driver","Editor","Electrician","Engineer","Extern","Founder","Freelancer","Head","Intern","Janitor","Journalist","Laborer","Lawyer","Lead","Manager","Mechanic","Member","Nurse","Officer","Operator","Operation","Photographer","President","Producer","Recruiter","Representative","Researcher","Sales","Server","Scientist","Specialist","Supervisor","Teacher","Technician","Trader","Trainee","Treasurer","Tutor","Vice","VP","Volunteer","Webmaster","Worker"],S=[[e=>b.some(t=>e.text.split(/\s/).some(e=>e===t)),4],[i.Yo,-4],[e=>e.text.split(/\s/).length>5,-2]],v=e=>{let t=[],r=[];for(let s of a((0,l.A)(e,w))){let e=(0,o.wl)(s)??2,l=s.slice(0,e).flat(),[a,n]=(0,u.u)(l,i.s5),[c,d]=(0,u.u)(l,S),p=[[i.nJ,2],[(0,i.PS)(a),-4],[(0,i.PS)(c),-4]],[m,h]=(0,u.u)(l,p,!1),f=s.slice(e),x=(0,o.GC)(f);t.push({company:m,jobTitle:c,date:a,descriptions:x}),r.push({companyScores:h,jobTitleScores:d,dateScores:n})}return{workExperiences:t,workExperiencesScores:r}},j=e=>{let t=[],r=[];for(let s of a((0,l.A)(e,["project"]))){let e=(0,o.wl)(s)??1,l=s.slice(0,e).flat(),[a,n]=(0,u.u)(l,i.s5),c=[[i.nJ,2],[(0,i.PS)(a),-4]],[d,p]=(0,u.u)(l,c,!1),m=s.slice(e),h=(0,o.GC)(m);t.push({project:d,date:a,descriptions:h}),r.push({projectScores:p,dateScores:n})}return{projects:t,projectsScores:r}};var k=r(4830),O=r(7450);let N=e=>{let t=(0,l.A)(e,["skill"]),r=(0,o.wl)(t)??0,s=t.slice(r),i=(0,o.GC)(s),a=(0,k.I)(O.oc);if(0!==r){let e=t.slice(0,r).flat().filter(e=>e.text.trim()).slice(0,6);for(let t=0;t<e.length;t++)a[t].skill=e[t].text}return{skills:{featuredSkills:a,descriptions:i}}},P=e=>{let{profile:t}=(0,s.of)(e),{educations:r}=y(e),{workExperiences:l}=v(e),{projects:o}=j(e),{skills:i}=N(e);return{profile:t,educations:r,workExperiences:l,projects:o,skills:i,custom:{descriptions:[]}}}},2593:(e,t,r)=>{"use strict";r.d(t,{GC:()=>l,w:()=>s,wl:()=>c});let s=["⋅","∙","\uD83D\uDF84","•","⦁","⚫︎","●","⬤","⚬","○"],l=e=>{if(void 0===i(e))return e.map(e=>e.map(e=>e.text).join(" "));let t="";for(let r of e.flat()){let e=r.text;t.endsWith(" ")||e.startsWith(" ")||(t+=" "),t+=e}let r=o(t),s=t.indexOf(r);return -1!==s&&(t=t.slice(s)),t.split(r).map(e=>e.trim()).filter(e=>!!e)},o=e=>{let t=s.reduce((e,t)=>(e[t]=0,e),{}),r=s[0];for(let s of e)t.hasOwnProperty(s)&&(t[s]++,t[s]>0&&(r=s));return r},i=e=>{for(let t=0;t<e.length;t++)for(let r of e[t])if(s.some(e=>r.text.includes(e)))return t},a=e=>/^[^0-9]+$/.test(e),n=e=>e.text.split(/\s/).filter(a).length>=8,c=e=>{let t=i(e);if(void 0===t)for(let r=0;r<e.length;r++){let s=e[r];if(1===s.length&&n(s[0])){t=r;break}}return t}},6140:(e,t,r)=>{"use strict";r.d(t,{PS:()=>n,Pd:()=>u,VE:()=>c,Yo:()=>i,lZ:()=>o,nJ:()=>l,r_:()=>a,s5:()=>m});let s=e=>e.toLowerCase().includes("bold"),l=e=>s(e.fontName),o=e=>/[a-zA-Z]/.test(e.text),i=e=>/[0-9]/.test(e.text),a=e=>e.text.includes(","),n=e=>t=>t.text.includes(e),c=e=>/^[A-Za-z\s&]+$/.test(e.text),u=e=>o(e)&&e.text.toUpperCase()===e.text,d=["January","February","March","April","May","June","July","August","September","October","November","December"],p=["Summer","Fall","Spring","Winter"],m=[[e=>/(?:19|20)\d{2}/.test(e.text),1],[e=>d.some(t=>e.text.includes(t)||e.text.includes(t.slice(0,4))),1],[e=>p.some(t=>e.text.includes(t)),1],[e=>e.text.includes("Present"),1],[a,-1]]},4139:(e,t,r)=>{"use strict";r.d(t,{u:()=>l});let s=(e,t)=>{let r=e.map(e=>({text:e.text,score:0,match:!1}));for(let s=0;s<e.length;s++){let l=e[s];for(let e of t){let[t,o,i]=e,a=t(l);if(a){let e=l.text;i&&"object"==typeof a&&(e=a[0]);let t=r[s];l.text===e?(t.score+=o,i&&(t.match=!0)):r.push({text:e,score:o,match:!0})}}}return r},l=(e,t,r=!0,l=!1)=>{let o=s(e,t),i=[],a=-1/0;for(let{text:e,score:t}of o)t>=a&&(t>a&&(i=[]),i.push(e),a=t);return r&&a<=0?["",o]:[l?i.map(e=>e.trim()).join(" "):i[0]??"",o]}},3517:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(e,t)=>{for(let r in e)if(t.some(e=>r.toLowerCase().includes(e)))return e[r];return[]}},5360:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var s=r(6140);let l=e=>{let t={},r="profile",s=[];for(let l=0;l<e.length;l++){let o=e[l],a=o[0]?.text.trim();i(o,l)?(t[r]=[...s],r=a,s=[]):s.push(o)}return s.length>0&&(t[r]=[...s]),t},o=["experience","education","project","skill","job","course","extracurricular","objective","summary","award","honor","project"],i=(e,t)=>{let r=e.length>1,l=0===e.length;if(t<2||r||l)return!1;let i=e[0];if((0,s.nJ)(i)&&(0,s.Pd)(i))return!0;let a=i.text.trim(),n=a.split(" ").filter(e=>"&"!==e).length<=2,c=/[A-Z]/.test(a.slice(0,1));return!!(n&&(0,s.VE)(i)&&c&&o.some(e=>a.toLowerCase().includes(e)))}},1233:(e,t,r)=>{"use strict";r.d(t,{U:()=>l});var s=r(2593);let l=e=>{let t=[],r=[];for(let s of e)s.hasEOL?(""!==s.text.trim()&&r.push({...s}),t.push(r),r=[]):""!==s.text.trim()&&r.push({...s});r.length>0&&t.push(r);let s=i(t.flat());for(let e of t)for(let t=e.length-1;t>0;t--){let r=e[t],l=e[t-1],i=l.x+l.width;if(r.x-i<=s){o(l.text,r.text)&&(l.text+=" "),l.text+=r.text;let s=r.x+r.width;l.width=s-l.x,e.splice(t,1)}}return t},o=(e,t)=>{let r=e[e.length-1],l=t[0];return[[":",",","|",".",...s.w].includes(r)&&" "!==l," "!==r&&["|",...s.w].includes(l)].some(e=>e)},i=e=>{e=e.filter(e=>""!==e.text.trim());let t={},r=0,s=0,l={},o="",i=0;for(let a of e){let{text:e,height:n,fontName:c}=a;t[n]||(t[n]=0),t[n]++,t[n]>s&&(r=n,s=t[n]),l[c]||(l[c]=0),l[c]+=e.length,l[c]>i&&(o=c,i=l[c])}let[a,n]=e.filter(e=>e.fontName===o&&e.height===r).reduce((e,t)=>{let[r,s]=e;return[r+t.width,s+t.text.length]},[0,0]);return a/n}},5210:(e,t,r)=>{"use strict";r.d(t,{g:()=>i});var s=r(2288),l=r(9885),o=r.n(l);s.GlobalWorkerOptions.workerSrc=o();let i=async e=>{let t=await s.getDocument(e).promise,r=[];for(let e=1;e<=t.numPages;e++){let s=await t.getPage(e),l=await s.getTextContent();await s.getOperatorList();let o=s.commonObjs,i=l.items.map(e=>{let{str:t,dir:r,transform:s,fontName:l,...i}=e,a=s[4],n=s[5],c=o.get(l).name,u=t.replace(/-­‐/g,"-");return{...i,fontName:c,text:u,x:a,y:n}});r.push(...i)}let l=e=>!e.hasEOL&&""===e.text.trim();return r.filter(e=>!l(e))}},3438:(e,t,r)=>{"use strict";r.d(t,{Wq:()=>o,dJ:()=>l,pK:()=>i});let s="open-resume-state",l=()=>{try{let e=localStorage.getItem(s);if(!e)return;return JSON.parse(e)}catch(e){return}},o=e=>{try{let t=JSON.stringify(e);localStorage.setItem(s,t)}catch(e){}},i=()=>!!l()},7450:(e,t,r)=>{"use strict";r.d(t,{Dp:()=>S,Dv:()=>d,Ml:()=>n,NR:()=>m,O3:()=>l,Ue:()=>x,WY:()=>u,Wi:()=>h,ZP:()=>A,_I:()=>O,b2:()=>j,bh:()=>k,cS:()=>o,fx:()=>g,gY:()=>P,hR:()=>y,im:()=>w,oc:()=>a,q1:()=>p,sf:()=>N,tM:()=>v,tO:()=>b,xx:()=>f});var s=r(3946);let l={company:"",jobTitle:"",date:"",descriptions:[]},o={school:"",degree:"",gpa:"",date:"",descriptions:[]},i={project:"",date:"",descriptions:[]},a=Array(6).fill({skill:"",rating:4}),n={profile:{name:"",summary:"",email:"",phone:"",location:"",url:""},workExperiences:[l],educations:[o],projects:[i],skills:{featuredSkills:a,descriptions:[]},custom:{descriptions:[]}},c=(0,s.oM)({name:"resume",initialState:n,reducers:{changeProfile:(e,t)=>{let{field:r,value:s}=t.payload;e.profile[r]=s},changeWorkExperiences:(e,t)=>{let{idx:r,field:s,value:l}=t.payload;e.workExperiences[r][s]=l},changeWorkExperienceDescriptions:(e,t)=>{let{idx:r,descriptions:s}=t.payload;e.workExperiences[r].descriptions=s},changeEducations:(e,t)=>{let{idx:r,field:s,value:l}=t.payload;e.educations[r][s]=l},changeProjects:(e,t)=>{let{idx:r,field:s,value:l}=t.payload;e.projects[r][s]=l},changeSkills:(e,t)=>{let{field:r}=t.payload;if("descriptions"===r){let{value:r}=t.payload;e.skills.descriptions=r}else{let{idx:r,skill:s,rating:l}=t.payload,o=e.skills.featuredSkills[r];o.skill=s,o.rating=l}},changeCustom:(e,t)=>{let{value:r}=t.payload;e.custom.descriptions=r},addSectionInForm:(e,t)=>{let{form:r}=t.payload;switch(r){case"workExperiences":return e.workExperiences.push(structuredClone(l)),e;case"educations":return e.educations.push(structuredClone(o)),e;case"projects":return e.projects.push(structuredClone(i)),e}},moveSectionInForm:(e,t)=>{let{form:r,idx:s,direction:l}=t.payload;if("skills"!==r&&"custom"!==r){if(0===s&&"up"===l||s===e[r].length-1&&"down"===l)return e;let t=e[r][s];"up"===l?(e[r][s]=e[r][s-1],e[r][s-1]=t):(e[r][s]=e[r][s+1],e[r][s+1]=t)}},deleteSectionInFormByIdx:(e,t)=>{let{form:r,idx:s}=t.payload;"skills"!==r&&"custom"!==r&&e[r].splice(s,1)},setResume:(e,t)=>t.payload}}),{changeProfile:u,changeWorkExperiences:d,changeEducations:p,changeProjects:m,changeSkills:h,changeCustom:f,addSectionInForm:x,moveSectionInForm:g,deleteSectionInFormByIdx:y,setResume:w,changeWorkExperienceDescriptions:b}=c.actions,S=e=>e.resume,v=e=>e.resume.profile,j=e=>e.resume.workExperiences,k=e=>e.resume.educations,O=e=>e.resume.projects,N=e=>e.resume.skills,P=e=>e.resume.custom,A=c.reducer},6244:(e,t,r)=>{"use strict";r.d(t,{Am:()=>S,DF:()=>i,De:()=>w,Dy:()=>n,I2:()=>m,Lk:()=>d,ON:()=>u,V1:()=>p,Yy:()=>b,ZP:()=>v,_S:()=>f,cd:()=>y,e:()=>l,hs:()=>g,vi:()=>h,wo:()=>x,xw:()=>o,z5:()=>c});var s=r(3946);let l="#38bdf8",o="#171717",i={themeColor:l,fontFamily:"Roboto",fontSize:"11",documentSize:"Letter",formToShow:{workExperiences:!0,educations:!0,projects:!0,skills:!0,custom:!1},formToHeading:{workExperiences:"WORK EXPERIENCE",educations:"EDUCATION",projects:"PROJECT",skills:"SKILLS",custom:"CUSTOM SECTION"},formsOrder:["workExperiences","educations","projects","skills","custom"],showBulletPoints:{educations:!0,projects:!0,skills:!0,custom:!0}},a=(0,s.oM)({name:"settings",initialState:i,reducers:{changeSettings:(e,t)=>{let{field:r,value:s}=t.payload;e[r]=s},changeShowForm:(e,t)=>{let{field:r,value:s}=t.payload;e.formToShow[r]=s},changeFormHeading:(e,t)=>{let{field:r,value:s}=t.payload;e.formToHeading[r]=s},changeFormOrder:(e,t)=>{let{form:r,type:s}=t.payload,l=e.formsOrder.length-1,o=e.formsOrder.indexOf(r),i="up"===s?o-1:o+1;i>=0&&i<=l&&((t,r)=>{let s=e.formsOrder[t];e.formsOrder[t]=e.formsOrder[r],e.formsOrder[r]=s})(o,i)},changeShowBulletPoints:(e,t)=>{let{field:r,value:s}=t.payload;e.showBulletPoints[r]=s},setSettings:(e,t)=>t.payload}}),{changeSettings:n,changeShowForm:c,changeFormHeading:u,changeFormOrder:d,changeShowBulletPoints:p,setSettings:m}=a.actions,h=e=>e.settings,f=e=>e.settings.themeColor,x=e=>t=>t.settings.formToShow[e],g=e=>t=>t.settings.formToHeading[e],y=e=>e.settings.formsOrder,w=e=>t=>t.settings.formsOrder[0]===e,b=e=>t=>t.settings.formsOrder[t.settings.formsOrder.length-1]===e,S=e=>t=>t.settings.showBulletPoints[e],v=a.reducer},5144:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>u});var s=r(9510);r(5023);var l=r(8570);let o=(0,l.createProxy)(String.raw`/home/anurag/Videos/Seewee/Seewee/src/app/components/TopNavBar.tsx`),{__esModule:i,$$typeof:a}=o;o.default;let n=(0,l.createProxy)(String.raw`/home/anurag/Videos/Seewee/Seewee/src/app/components/TopNavBar.tsx#TopNavBar`);var c=r(6674);let u={title:"SeeWee - Your AI Resume Buddy",description:"Seewee is a free, open-source, and powerful resume builder that allows anyone to create a modern professional resume in 3 simple steps. For those who have an existing resume, OpenResume also provides a resume parser to help test and confirm its ATS readability."};function d({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{children:[s.jsx(n,{}),e,s.jsx(c.c,{})]})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(6621);let l=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};