(()=>{var e={};e.id=154,e.ids=[154],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9561:e=>{"use strict";e.exports=require("canvas")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9796:e=>{"use strict";e.exports=require("zlib")},5952:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>h,pages:()=>d,routeModule:()=>u,tree:()=>c}),s(4766),s(5144),s(5866);var a=s(3191),r=s(8716),i=s(7922),n=s.n(i),l=s(5231),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["resume-parser",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,4766)),"/home/anurag/Videos/Seewee/Seewee/src/app/resume-parser/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,5144)),"/home/anurag/Videos/Seewee/Seewee/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/anurag/Videos/Seewee/Seewee/src/app/resume-parser/page.tsx"],h="/resume-parser/page",m={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/resume-parser/page",pathname:"/resume-parser",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9094:(e,t,s)=>{Promise.resolve().then(s.bind(s,115))},5436:(e,t,s)=>{"use strict";s.d(t,{G:()=>r});var a=s(326);let r=({maxWidth:e,minWidth:t=0,className:s=""})=>a.jsx("div",{className:`invisible shrink-[10000] grow ${s}`,style:{maxWidth:`${e}px`,minWidth:`${t}px`}})},115:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M});var a=s(326),r=s(7577);s(5210);var i=s(1233),n=s(5360),l=s(1910),o=s(9049),c=s(4693);let d={1:"text-2xl font-bold",2:"text-xl font-bold",3:"text-lg font-semibold"},h=({level:e=1,children:t,className:s=""})=>{let r=`h${e}`;return a.jsx(r,{className:(0,c.cx)("mt-[2em] text-gray-900",d[e],s),children:t})},m=({smallMarginTop:e=!1,children:t,className:s=""})=>a.jsx("p",{className:(0,c.cx)(e?"mt-[0.8em]":"mt-[1.5em]","text-lg text-gray-700",s),children:t}),u=({href:e,children:t,className:s=""})=>a.jsx("a",{href:e,target:"_blank",className:(0,c.cx)("underline underline-offset-2 hover:decoration-2",s),children:t}),x=({children:e})=>a.jsx("span",{className:"inline-flex rounded-md bg-blue-50 px-2 pb-0.5 align-text-bottom text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10",children:e}),p=({table:e,title:t,className:s,trClassNames:r=[],tdClassNames:i=[]})=>{let n=e[0],l=e.slice(1);return(0,a.jsxs)("table",{className:(0,c.cx)("w-full divide-y border text-sm text-gray-900",s),children:[(0,a.jsxs)("thead",{className:"divide-y bg-gray-50 text-left align-top",children:[t&&a.jsx("tr",{className:"divide-x bg-gray-50",children:a.jsx("th",{className:"px-2 py-1.5 font-bold",scope:"colSpan",colSpan:n.length,children:t})}),a.jsx("tr",{className:"divide-x bg-gray-50",children:n.map((e,t)=>a.jsx("th",{className:"px-2 py-1.5 font-semibold",scope:"col",children:e},t))})]}),a.jsx("tbody",{className:"divide-y text-left align-top",children:l.map((e,t)=>a.jsx("tr",{className:(0,c.cx)("divide-x",r[t]),children:e.map((e,t)=>a.jsx("td",{className:(0,c.cx)("px-2 py-1.5",i[t]),children:e},t))},t))})]})};var b=s(7450),f=s(4830);let g=({children:e})=>a.jsx("tr",{className:"divide-x bg-gray-50",children:a.jsx("th",{className:"px-3 py-2 font-semibold",scope:"colgroup",colSpan:2,children:e})}),j=({label:e,value:t,className:s})=>(0,a.jsxs)("tr",{className:(0,c.cx)("divide-x",s),children:[a.jsx("th",{className:"px-3 py-2 font-medium",scope:"row",children:e}),a.jsx("td",{className:"w-full px-3 py-2",children:"string"==typeof t?t:t.map((e,t)=>(0,a.jsxs)(r.Fragment,{children:["• ",e,a.jsx("br",{})]},t))})]}),y=({resume:e})=>{let t=0===e.educations.length?[(0,f.I)(b.cS)]:e.educations,s=0===e.workExperiences.length?[(0,f.I)(b.O3)]:e.workExperiences,i=[...e.skills.descriptions],n=e.skills.featuredSkills.filter(e=>e.skill.trim()).map(e=>e.skill).join(", ").trim();return n&&i.unshift(n),a.jsx("table",{className:"mt-2 w-full border text-sm text-gray-900",children:(0,a.jsxs)("tbody",{className:"divide-y text-left align-top",children:[a.jsx(g,{children:"Profile"}),a.jsx(j,{label:"Name",value:e.profile.name}),a.jsx(j,{label:"Email",value:e.profile.email}),a.jsx(j,{label:"Phone",value:e.profile.phone}),a.jsx(j,{label:"Location",value:e.profile.location}),a.jsx(j,{label:"Link",value:e.profile.url}),a.jsx(j,{label:"Summary",value:e.profile.summary}),a.jsx(g,{children:"Education"}),t.map((e,s)=>(0,a.jsxs)(r.Fragment,{children:[a.jsx(j,{label:"School",value:e.school}),a.jsx(j,{label:"Degree",value:e.degree}),a.jsx(j,{label:"GPA",value:e.gpa}),a.jsx(j,{label:"Date",value:e.date}),a.jsx(j,{label:"Descriptions",value:e.descriptions,className:t.length-1!=0&&s!==t.length-1&&"!border-b-4"})]},s)),a.jsx(g,{children:"Work Experience"}),s.map((e,t)=>(0,a.jsxs)(r.Fragment,{children:[a.jsx(j,{label:"Company",value:e.company}),a.jsx(j,{label:"Job Title",value:e.jobTitle}),a.jsx(j,{label:"Date",value:e.date}),a.jsx(j,{label:"Descriptions",value:e.descriptions,className:s.length-1!=0&&t!==s.length-1&&"!border-b-4"})]},t)),e.projects.length>0&&a.jsx(g,{children:"Projects"}),e.projects.map((t,s)=>(0,a.jsxs)(r.Fragment,{children:[a.jsx(j,{label:"Project",value:t.project}),a.jsx(j,{label:"Date",value:t.date}),a.jsx(j,{label:"Descriptions",value:t.descriptions,className:e.projects.length-1!=0&&s!==e.projects.length-1&&"!border-b-4"})]},s)),a.jsx(g,{children:"Skills"}),a.jsx(j,{label:"Descriptions",value:i})]})})};var w=s(5436),v=s(6140),N=s(8166);let k=({textItems:e,lines:t,sections:s})=>{let r=e=>{let t=Math.round(e.x),s=Math.round(e.x+e.width),a=Math.round(e.y),r=`X₁=${t} X₂=${s} Y=${a}`;return t===s&&(r=`X=${s} Y=${a}`),(0,v.nJ)(e)&&(r=`${r} Bold`),e.hasEOL&&(r=`${r} NewLine`),r},i=[["#","Text Content","Metadata"],...e.map((e,t)=>[t+1,e.text,a.jsx(x,{children:r(e)},t)])],n=[["Lines","Line Content"],...t.map((e,t)=>[t+1,e.map((t,s)=>(0,a.jsxs)("span",{children:[t.text,s!==e.length-1&&(0,a.jsxs)("span",{className:"select-none font-extrabold text-sky-400",children:["\xa0\xa0","|","\xa0\xa0"]})]},s))])],{profile:l,profileScores:o}=(0,N.of)(s),c=({scores:e})=>a.jsx(a.Fragment,{children:e.sort((e,t)=>t.score-e.score).map((e,t)=>(0,a.jsxs)("span",{className:"break-all",children:[a.jsx(x,{children:e.score})," ",e.text,a.jsx("br",{})]},t))}),d=[["Resume Attribute","Text (Highest Feature Score)","Feature Scores of Other Texts"],["Name",l.name,a.jsx(c,{scores:o.name},"Name")],["Email",l.email,a.jsx(c,{scores:o.email},"Email")],["Phone",l.phone,a.jsx(c,{scores:o.phone},"Phone")]];return(0,a.jsxs)("article",{className:"mt-10",children:[a.jsx(h,{className:"text-primary !mt-0 border-t-2 pt-8",children:"Resume Parser Algorithm Deep Dive"}),a.jsx(m,{smallMarginTop:!0,children:"For the technical curious, this section will dive into the OpenResume parser algorithm and walks through the 4 steps on how it works. (Note that the algorithm is designed to parse single column resume in English language)"}),a.jsx(h,{level:2,children:"Step 1. Read the text items from a PDF file"}),(0,a.jsxs)(m,{smallMarginTop:!0,children:["A PDF file is a standardized file format defined by the"," ",a.jsx(u,{href:"https://www.iso.org/standard/51502.html",children:"ISO 32000 specification"}),". When you open up a PDF file using a text editor, you'll notice that the raw content looks encoded and is difficult to read. To display it in a readable format, you would need a PDF reader to decode and view the file. Similarly, the resume parser first needs to decode the PDF file in order to extract its text content."]}),(0,a.jsxs)(m,{children:["While it is possible to write a custom PDF reader function following the ISO 32000 specification, it is much simpler to leverage an existing library. In this case, the resume parser uses Mozilla's open source"," ",a.jsx(u,{href:"https://github.com/mozilla/pdf.js",children:"pdf.js"})," library to first extract all the text items in the file."]}),(0,a.jsxs)(m,{children:["The table below lists ",e.length," text items that are extracted from the resume PDF added. A text item contains the text content and also some metadata about the content, e.g. its x, y positions in the document, whether the font is bolded, or whether it starts a new line. (Note that x,y position is relative to the bottom left corner of the page, which is the origin 0,0)"]}),a.jsx("div",{className:"mt-4 max-h-72 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3",children:a.jsx(p,{table:i,className:"!border-none",tdClassNames:["","","md:whitespace-nowrap"]})}),a.jsx(h,{level:2,children:"Step 2. Group text items into lines"}),a.jsx(m,{smallMarginTop:!0,children:"The extracted text items aren't ready to use yet and have 2 main issues:"}),(0,a.jsxs)(m,{children:[a.jsx("span",{className:"mt-3 block font-semibold",children:"Issue 1: They have some unwanted noises."}),'Some single text items can get broken into multiple ones, as you might observe on the table above, e.g. a phone number "(123) 456-7890" might be broken into 3 text items "(123) 456", "-" and "7890".']}),(0,a.jsxs)(m,{smallMarginTop:!0,children:[a.jsx("span",{className:"font-semibold",children:"Solution:"})," To tackle this issue, the resume parser connects adjacent text items into one text item if their distance is smaller than the average typical character width, where",a.jsx("span",{dangerouslySetInnerHTML:{__html:`<math display="block">
                        <mrow>
                            <mn>Distance </mn>
                            <mo>=</mo>
                            <mn>RightTextItemX₁</mn>
                            <mo>-</mo>
                            <mn>LeftTextItemX₂</mn>
                        </mrow>
                    </math>`},className:"my-2 block text-left text-base"}),"The average typical character width is calculated by dividing the sum of all text items' widths by the total number characters of the text items (Bolded texts and new line elements are excluded to not skew the results)."]}),(0,a.jsxs)(m,{children:[a.jsx("span",{className:"mt-3 block font-semibold",children:"Issue 2: They lack contexts and associations."}),"When we read a resume, we scan a resume line by line. Our brains can process each section via visual cues such as texts' boldness and proximity, where we can quickly associate texts closer together to be a related group. The extracted text items however currently don't have those contexts/associations and are just disjointed elements."]}),(0,a.jsxs)(m,{smallMarginTop:!0,children:[a.jsx("span",{className:"font-semibold",children:"Solution:"})," To tackle this issue, the resume parser reconstructs those contexts and associations similar to how our brain would read and process the resume. It first groups text items into lines since we read text line by line. It then groups lines into sections, which will be discussed in the next step."]}),(0,a.jsxs)(m,{children:["At the end of step 2, the resume parser extracts ",t.length," lines from the resume PDF added, as shown in the table below. The result is much more readable when displayed in lines. (Some lines might have multiple text items, which are separated by a blue vertical divider"," ",(0,a.jsxs)("span",{className:"select-none font-extrabold text-sky-400",children:["\xa0","|","\xa0"]}),")"]}),a.jsx("div",{className:"mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3",children:a.jsx(p,{table:n,className:"!border-none"})}),a.jsx(h,{level:2,children:"Step 3. Group lines into sections"}),a.jsx(m,{smallMarginTop:!0,children:"At step 2, the resume parser starts building contexts and associations to text items by first grouping them into lines. Step 3 continues the process to build additional associations by grouping lines into sections."}),a.jsx(m,{children:"Note that every section (except the profile section) starts with a section title that takes up the entire line. This is a common pattern not just in resumes but also in books and blogs. The resume parser uses this pattern to group lines into the closest section title above these lines."}),(0,a.jsxs)(m,{children:["The resume parser applies some heuristics to detect a section title. The main heuristic to determine a section title is to check if it fulfills all 3 following conditions: ",a.jsx("br",{}),"1. It is the only text item in the line ",a.jsx("br",{}),"2. It is ",a.jsx("span",{className:"font-bold",children:"bolded"})," ",a.jsx("br",{}),"3. Its letters are all UPPERCASE",a.jsx("br",{})]}),a.jsx(m,{children:"In simple words, if a text item is double emphasized to be both bolded and uppercase, it is most likely a section title in a resume. This is generally true for a well formatted resume. There can be exceptions, but it is likely not a good use of bolded and uppercase in those cases."}),a.jsx(m,{children:"The resume parser also has a fallback heuristic if the main heuristic doesn't apply. The fallback heuristic mainly performs a keyword matching against a list of common resume section title keywords."}),(0,a.jsxs)(m,{children:["At the end of step 3, the resume parser identifies the sections from the resume and groups those lines with the associated section title, as shown in the table below. Note that"," ",a.jsx("span",{className:"font-bold",children:"the section titles are bolded"})," and"," ",a.jsx("span",{className:"bg-teal-50",children:"the lines associated with the section are highlighted with the same colors"}),"."]}),a.jsx(P,{sections:s}),a.jsx(h,{level:2,children:"Step 4. Extract resume from sections"}),a.jsx(m,{smallMarginTop:!0,children:"Step 4 is the last step of the resume parsing process and is also the core of the resume parser, where it extracts resume information from the sections."}),a.jsx(h,{level:3,children:"Feature Scoring System"}),a.jsx(m,{smallMarginTop:!0,children:"The gist of the extraction engine is a feature scoring system. Each resume attribute to be extracted has a custom feature sets, where each feature set consists of a feature matching function and a feature matching score if matched (feature matching score can be a positive or negative number). To compute the final feature score of a text item for a particular resume attribute, it would run the text item through all its feature sets and sum up the matching feature scores. This process is carried out for all text items within the section, and the text item with the highest computed feature score is identified as the extracted resume attribute."}),a.jsx(m,{children:"As a demonstration, the table below shows 3 resume attributes in the profile section of the resume PDF added."}),a.jsx(p,{table:d,className:"mt-4"}),(o.name.find(e=>e.text===l.name)?.score||0)>0&&(0,a.jsxs)(m,{smallMarginTop:!0,children:['In the resume PDF added, the resume attribute name is likely to be "',l.name,'" since its feature score is'," ",o.name.find(e=>e.text===l.name)?.score,", which is the highest feature score out of all text items in the profile section. (Some text items' feature scores can be negative, indicating they are very unlikely to be the targeted attribute)"]}),a.jsx(h,{level:3,children:"Feature Sets"}),(0,a.jsxs)(m,{smallMarginTop:!0,children:["Having explained the feature scoring system, we can dive more into how feature sets are constructed for a resume attribute. It follows 2 principles: ",a.jsx("br",{}),"1. A resume attribute's feature sets are designed relative to all other resume attributes within the same section. ",a.jsx("br",{}),"2. A resume attribute's feature sets are manually crafted based on its characteristics and likelihood of each characteristic."]}),a.jsx(m,{children:"The table below lists some of the feature sets for the resume attribute name. It contains feature function that matches the name attribute with positive feature score and also feature function that only matches other resume attributes in the section with negative feature score."}),a.jsx(p,{table:S,title:"Name Feature Sets",className:"mt-4"}),a.jsx(h,{level:3,children:"Core Feature Function"}),a.jsx(m,{smallMarginTop:!0,children:"Each resume attribute has multiple feature sets. They can be found in the source code under the extract-resume-from-sections folder and we won't list them all out here. Each resume attribute usually has a core feature function that greatly identifies them, so we will list out the core feature function below."}),a.jsx(p,{table:T,className:"mt-4"}),a.jsx(h,{level:3,children:"Special Case: Subsections"}),a.jsx(m,{smallMarginTop:!0,children:"The last thing that is worth mentioning is subsections. For profile section, we can directly pass all the text items to the feature scoring systems. But for other sections, such as education and work experience, we have to first divide the section into subsections since there can be multiple schools or work experiences in the section. The feature scoring system then process each subsection to retrieve each's resume attributes and append the results."}),a.jsx(m,{smallMarginTop:!0,children:"The resume parser applies some heuristics to detect a subsection. The main heuristic to determine a subsection is to check if the vertical line gap between 2 lines is larger than the typical line gap * 1.4, since a well formatted resume usually creates a new empty line break before adding the next subsection. There is also a fallback heuristic if the main heuristic doesn't apply to check if the text item is bolded."}),a.jsx(m,{children:"And that is everything about the OpenResume parser algorithm :)"}),(0,a.jsxs)(m,{children:["Written by ",a.jsx(u,{href:"https://github.com/xitanggg",children:"Xitang"})," on June 2023"]})]})},S=[["Feature Function","Feature Matching Score"],["Contains only letters, spaces or periods","+3"],["Is bolded","+2"],["Contains all uppercase letters","+2"],["Contains @","-4 (match email)"],["Contains number","-4 (match phone)"],["Contains ,","-4 (match address)"],["Contains /","-4 (match url)"]],T=[["Resume Attribute","Core Feature Function","Regex"],["Name","Contains only letters, spaces or periods","/^[a-zA-Z\\s\\.]+$/"],["Email",(0,a.jsxs)(a.Fragment,{children:["Match email format xxx@xxx.xxx",a.jsx("br",{}),"xxx can be anything not space"]}),"/\\S+@\\S+\\.\\S+/"],["Phone",(0,a.jsxs)(a.Fragment,{children:["Match phone format (xxx)-xxx-xxxx ",a.jsx("br",{})," () and - are optional"]}),"/\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{4}/"],["Location",(0,a.jsxs)(a.Fragment,{children:["Match city and state format ","City, ST"]}),"/[A-Z][a-zA-Z\\s]+, [A-Z]{2}/"],["Url","Match url format xxx.xxx/xxx","/\\S+\\.[a-z]+\\/\\S+/"],["School","Contains a school keyword, e.g. College, University, School",""],["Degree","Contains a degree keyword, e.g. Associate, Bachelor, Master",""],["GPA","Match GPA format x.xx","/[0-4]\\.\\d{1,2}/"],["Date","Contains date keyword related to year, month, seasons or the word Present","Year: /(?:19|20)\\d{2}/"],["Job Title","Contains a job title keyword, e.g. Analyst, Engineer, Intern",""],["Company","Is bolded or doesn't match job title & date",""],["Project","Is bolded or doesn't match date",""]],P=({sections:e})=>{let t=[["Lines","Line Content"]],s=[],r=0,i=["bg-red-50","bg-yellow-50","bg-orange-50","bg-green-50","bg-blue-50","bg-purple-50"],n=Object.entries(e),l=({line:e})=>a.jsx(a.Fragment,{children:e.map((t,s)=>(0,a.jsxs)("span",{children:[t.text,s!==e.length-1&&(0,a.jsxs)("span",{className:"select-none font-extrabold text-sky-400",children:["\xa0\xa0","|","\xa0\xa0"]})]},s))});for(let e=0;e<n.length;e++){let o=i[e%6],[c,d]=n[e];t.push(["profile"===c?"":r,"profile"===c?"PROFILE":c]),s.push(`${o} font-bold`),r+=1;for(let e=0;e<d.length;e++)t.push([r,a.jsx(l,{line:d[e]},r)]),s.push(o),r+=1}return a.jsx("div",{className:"mt-4 max-h-96 overflow-y-scroll border scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-w-3",children:a.jsx(p,{table:t,className:"!border-none",trClassNames:s})})},F=[{fileUrl:"resume-example/laverne-resume.pdf",description:(0,a.jsxs)("span",{children:["Borrowed from University of La Verne Career Center -"," ",a.jsx(u,{href:"https://laverne.edu/careers/wp-content/uploads/sites/15/2010/12/Undergraduate-Student-Resume-Examples.pdf",children:"Link"})]})},{fileUrl:"resume-example/openresume-resume.pdf",description:(0,a.jsxs)("span",{children:["Created with OpenResume resume builder -"," ",a.jsx(u,{href:"/resume-builder",children:"Link"})]})}],C=F[0].fileUrl;function M(){let[e,t]=(0,r.useState)(C),[s,d]=(0,r.useState)([]),u=(0,i.U)(s||[]),x=(0,n.A)(u),p=(0,l.n)(x);return a.jsx("main",{className:"h-full w-full overflow-scroll",children:(0,a.jsxs)("div",{className:"grid md:grid-cols-6",children:[(0,a.jsxs)("div",{className:"flex justify-center px-2 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end",children:[a.jsx("section",{className:"mt-5 grow px-4 md:max-w-[600px] md:px-0",children:a.jsx("div",{className:"aspect-h-[9.5] aspect-w-7",children:a.jsx("iframe",{src:`${e}#navpanes=0`,className:"h-full w-full"})})}),a.jsx(w.G,{maxWidth:45,className:"hidden md:block"})]}),(0,a.jsxs)("div",{className:"flex px-6 text-gray-900 md:col-span-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:overflow-y-scroll",children:[a.jsx(w.G,{maxWidth:45,className:"hidden md:block"}),(0,a.jsxs)("section",{className:"max-w-[600px] grow",children:[a.jsx(h,{className:"text-primary !mt-4",children:"Resume Parser Playground"}),a.jsx(m,{smallMarginTop:!0,children:"This playground showcases the OpenResume resume parser and its ability to parse information from a resume PDF. Click around the PDF examples below to observe different parsing results."}),a.jsx("div",{className:"mt-3 flex gap-3",children:F.map((s,r)=>(0,a.jsxs)("article",{className:(0,c.cx)("flex-1 cursor-pointer rounded-md border-2 px-4 py-3 shadow-sm outline-none hover:bg-gray-50 focus:bg-gray-50",s.fileUrl===e?"border-blue-400":"border-gray-300"),onClick:()=>t(s.fileUrl),onKeyDown:e=>{["Enter"," "].includes(e.key)&&t(s.fileUrl)},tabIndex:0,children:[(0,a.jsxs)("h1",{className:"font-semibold",children:["Resume Example ",r+1]}),a.jsx("p",{className:"mt-2 text-sm text-gray-500",children:s.description})]},r))}),(0,a.jsxs)(m,{children:["You can also"," ",a.jsx("span",{className:"font-semibold",children:"add your resume below"})," to access how well your resume would be parsed by similar Application Tracking Systems (ATS) used in job applications. The more information it can parse out, the better it indicates the resume is well formatted and easy to read. It is beneficial to have the name and email accurately parsed at the very least."]}),a.jsx("div",{className:"mt-3",children:a.jsx(o.A,{onFileUrlChange:e=>t(e||C),playgroundView:!0})}),a.jsx(h,{level:2,className:"!mt-[1.2em]",children:"Resume Parsing Results"}),a.jsx(y,{resume:p}),a.jsx(k,{textItems:s,lines:u,sections:x}),a.jsx("div",{className:"pt-24"})]})]})]})})}},4766:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var a=s(8570);let r=(0,a.createProxy)(String.raw`/home/anurag/Videos/Seewee/Seewee/src/app/resume-parser/page.tsx`),{__esModule:i,$$typeof:n}=r;r.default;let l=(0,a.createProxy)(String.raw`/home/anurag/Videos/Seewee/Seewee/src/app/resume-parser/page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[948,178,621,453,481,946,391],()=>s(5952));module.exports=a})();