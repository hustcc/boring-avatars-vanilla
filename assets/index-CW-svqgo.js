(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&s(e)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const C=a=>{let t=0;for(let r=0;r<a.length;r++){const s=a.charCodeAt(r);t=(t<<5)-t+s,t=t&t}return Math.abs(t)},D=(a,t)=>Math.floor(a/Math.pow(10,t)%10),x=(a,t)=>!(D(a,t)%2),g=(a,t,r)=>{const s=a%t;return r&&D(a,r)%2===0?-s:s},y=(a,t,r)=>t[a%r],U=a=>{a.slice(0,1)==="#"&&(a=a.slice(1));const t=parseInt(a.substr(0,2),16),r=parseInt(a.substr(2,2),16),s=parseInt(a.substr(4,2),16);return(t*299+r*587+s*114)/1e3>=128?"#000000":"#FFFFFF"};let P=0;const v=()=>`boring-avatar-${++P}-${Date.now().toString(36)}`,_=3,h=80;function G(a,t){const r=C(a),s=t.length;return Array.from({length:_},(n,e)=>({color:y(r+e,t,s),translateX:g(r*(e+1),h/10,1),translateY:g(r*(e+1),h/10,2),scale:1.2+g(r*(e+1),h/20)/10,rotate:g(r*(e+1),360,1)}))}const b=a=>{const{name:t,colors:r,title:s,square:o,size:n="40px"}=a,e=G(t,r),l=v(),$=typeof n=="number"?`${n}px`:n,m=o?`<rect width="${h}" height="${h}" fill="#FFFFFF" />`:`<rect width="${h}" height="${h}" rx="${h*2}" fill="#FFFFFF" />`;return`<svg
  viewBox="0 0 ${h} ${h}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${$}"
  height="${$}"
>
  ${s?`<title>${t}</title>`:""}
  <mask id="${l}" maskUnits="userSpaceOnUse" x="0" y="0" width="${h}" height="${h}">
    ${m}
  </mask>
  <g mask="url(#${l})">
    <rect width="${h}" height="${h}" fill="${e[0].color}" />
    <path
      filter="url(#filter_${l})"
      d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
      fill="${e[1].color}"
      transform="translate(${e[1].translateX} ${e[1].translateY}) rotate(${e[1].rotate} ${h/2} ${h/2}) scale(${e[2].scale})"
    />
    <path
      filter="url(#filter_${l})"
      style="mix-blend-mode: overlay"
      d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
      fill="${e[2].color}"
      transform="translate(${e[2].translateX} ${e[2].translateY}) rotate(${e[2].rotate} ${h/2} ${h/2}) scale(${e[2].scale})"
    />
  </g>
  <defs>
    <filter id="filter_${l}" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur" />
    </filter>
  </defs>
</svg>`},H=64,f=80;function Y(a,t){const r=C(a),s=t.length;return Array.from({length:H},(n,e)=>y(r%(e+1),t,s))}const X=a=>{const{name:t,colors:r,title:s,square:o,size:n="40px"}=a,e=Y(t,r),l=v(),$=typeof n=="number"?`${n}px`:n,m=o?`<rect width="${f}" height="${f}" fill="#FFFFFF" />`:`<rect width="${f}" height="${f}" rx="${f*2}" fill="#FFFFFF" />`,p=[],w=[[0,0],[20,0],[40,0],[60,0],[10,0],[30,0],[50,0],[70,0],[0,10],[0,20],[0,30],[0,40],[0,50],[0,60],[0,70],[20,10],[20,20],[20,30],[20,40],[20,50],[20,60],[20,70],[40,10],[40,20],[40,30],[40,40],[40,50],[40,60],[40,70],[60,10],[60,20],[60,30],[60,40],[60,50],[60,60],[60,70],[10,10],[10,20],[10,30],[10,40],[10,50],[10,60],[10,70],[30,10],[30,20],[30,30],[30,40],[30,50],[30,60],[30,70],[50,10],[50,20],[50,30],[50,40],[50,50],[50,60],[50,70],[70,10],[70,20],[70,30],[70,40],[70,50],[70,60],[70,70]];for(let E=0;E<w.length;E++){const[R,T]=w[E];p.push(`    <rect x="${R}" y="${T}" width="10" height="10" fill="${e[E]}" />`)}return`<svg
  viewBox="0 0 ${f} ${f}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${$}"
  height="${$}"
>
  ${s?`<title>${t}</title>`:""}
  <mask id="${l}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="${f}" height="${f}">
    ${m}
  </mask>
  <g mask="url(#${l})">
${p.join(`
`)}
  </g>
</svg>`},F=90,W=5;function J(a,t){const r=C(a),s=t.length,o=Array.from({length:W},(e,l)=>y(r+l,t,s)),n=[];return n[0]=o[0],n[1]=o[1],n[2]=o[1],n[3]=o[2],n[4]=o[2],n[5]=o[3],n[6]=o[3],n[7]=o[0],n[8]=o[4],n}const Z=a=>{const{name:t,colors:r,title:s,square:o,size:n="40px"}=a,e=J(t,r),l=v(),$=typeof n=="number"?`${n}px`:n,m=o?`<rect width="${F}" height="${F}" fill="#FFFFFF" />`:`<rect width="${F}" height="${F}" rx="${F*2}" fill="#FFFFFF" />`;return`<svg
  viewBox="0 0 ${F} ${F}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${$}"
  height="${$}"
>
  ${s?`<title>${t}</title>`:""}
  <mask id="${l}" maskUnits="userSpaceOnUse" x="0" y="0" width="${F}" height="${F}">
    ${m}
  </mask>
  <g mask="url(#${l})">
    <path d="M0 0h90v45H0z" fill="${e[0]}" />
    <path d="M0 45h90v45H0z" fill="${e[1]}" />
    <path d="M83 45a38 38 0 00-76 0h76z" fill="${e[2]}" />
    <path d="M83 45a38 38 0 01-76 0h76z" fill="${e[3]}" />
    <path d="M77 45a32 32 0 10-64 0h64z" fill="${e[4]}" />
    <path d="M77 45a32 32 0 11-64 0h64z" fill="${e[5]}" />
    <path d="M71 45a26 26 0 00-52 0h52z" fill="${e[6]}" />
    <path d="M71 45a26 26 0 01-52 0h52z" fill="${e[7]}" />
    <circle cx="45" cy="45" r="23" fill="${e[8]}" />
  </g>
</svg>`},c=36;function K(a,t){const r=C(a),s=t.length,o=y(r,t,s),n=g(r,10,1),e=n<5?n+c/9:n,l=g(r,10,2),$=l<5?l+c/9:l;return{wrapperColor:o,faceColor:U(o),backgroundColor:y(r+13,t,s),wrapperTranslateX:e,wrapperTranslateY:$,wrapperRotate:g(r,360),wrapperScale:1+g(r,c/12)/10,isMouthOpen:x(r,2),isCircle:x(r,1),eyeSpread:g(r,5),mouthSpread:g(r,3),faceRotate:g(r,10,3),faceTranslateX:e>c/6?e/2:g(r,8,1),faceTranslateY:$>c/6?$/2:g(r,7,2)}}const B=a=>{const{name:t,colors:r,title:s,square:o,size:n="40px"}=a,e=K(t,r),l=v(),$=typeof n=="number"?`${n}px`:n,m=o?`<rect width="${c}" height="${c}" fill="#FFFFFF" />`:`<rect width="${c}" height="${c}" rx="${c*2}" fill="#FFFFFF" />`,p=e.isMouthOpen?`<path d="M15 ${19+e.mouthSpread}c2 1 4 1 6 0" stroke="${e.faceColor}" fill="none" stroke-linecap="round" />`:`<path d="M13,${19+e.mouthSpread} a1,0.75 0 0,0 10,0" fill="${e.faceColor}" />`,w=e.isCircle?c:c/6;return`<svg
  viewBox="0 0 ${c} ${c}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${$}"
  height="${$}"
>
  ${s?`<title>${t}</title>`:""}
  <mask id="${l}" maskUnits="userSpaceOnUse" x="0" y="0" width="${c}" height="${c}">
    ${m}
  </mask>
  <g mask="url(#${l})">
    <rect width="${c}" height="${c}" fill="${e.backgroundColor}" />
    <rect
      x="0"
      y="0"
      width="${c}"
      height="${c}"
      transform="translate(${e.wrapperTranslateX} ${e.wrapperTranslateY}) rotate(${e.wrapperRotate} ${c/2} ${c/2}) scale(${e.wrapperScale})"
      fill="${e.wrapperColor}"
      rx="${w}"
    />
    <g transform="translate(${e.faceTranslateX} ${e.faceTranslateY}) rotate(${e.faceRotate} ${c/2} ${c/2})">
      ${p}
      <rect x="${14-e.eyeSpread}" y="14" width="1.5" height="2" rx="1" stroke="none" fill="${e.faceColor}" />
      <rect x="${20+e.eyeSpread}" y="14" width="1.5" height="2" rx="1" stroke="none" fill="${e.faceColor}" />
    </g>
  </g>
</svg>`},V=4,i=80;function j(a,t){const r=C(a),s=t.length;return Array.from({length:V},(n,e)=>({color:y(r+e,t,s),translateX:g(r*(e+1),i/2-(e+17),1),translateY:g(r*(e+1),i/2-(e+17),2),rotate:g(r*(e+1),360),isSquare:x(r,2)}))}const M=a=>{const{name:t,colors:r,title:s,square:o,size:n="40px"}=a,e=j(t,r),l=v(),$=typeof n=="number"?`${n}px`:n,m=o?`<rect width="${i}" height="${i}" fill="#FFFFFF" />`:`<rect width="${i}" height="${i}" rx="${i*2}" fill="#FFFFFF" />`,p=e[1].isSquare?i:i/8;return`<svg
  viewBox="0 0 ${i} ${i}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${$}"
  height="${$}"
>
  ${s?`<title>${t}</title>`:""}
  <mask id="${l}" maskUnits="userSpaceOnUse" x="0" y="0" width="${i}" height="${i}">
    ${m}
  </mask>
  <g mask="url(#${l})">
    <rect width="${i}" height="${i}" fill="${e[0].color}" />
    <rect
      x="${(i-60)/2}"
      y="${(i-20)/2}"
      width="${i}"
      height="${p}"
      fill="${e[1].color}"
      transform="translate(${e[1].translateX} ${e[1].translateY}) rotate(${e[1].rotate} ${i/2} ${i/2})"
    />
    <circle
      cx="${i/2}"
      cy="${i/2}"
      fill="${e[2].color}"
      r="${i/5}"
      transform="translate(${e[2].translateX} ${e[2].translateY})"
    />
    <line
      x1="0"
      y1="${i/2}"
      x2="${i}"
      y2="${i/2}"
      stroke-width="2"
      stroke="${e[3].color}"
      transform="translate(${e[3].translateX} ${e[3].translateY}) rotate(${e[3].rotate} ${i/2} ${i/2})"
    />
  </g>
</svg>`},Q=4,u=80;function ee(a,t){const r=C(a),s=t.length;return Array.from({length:Q},(n,e)=>y(r+e,t,s))}const te=a=>{const{name:t,colors:r,title:s,square:o,size:n="40px"}=a,e=ee(t,r),l=t.replace(/\s/g,""),$=v(),m=`gradient_paint0_linear_${l}_${$}`,p=`gradient_paint1_linear_${l}_${$}`,w=typeof n=="number"?`${n}px`:n,E=o?`<rect width="${u}" height="${u}" fill="#FFFFFF" />`:`<rect width="${u}" height="${u}" rx="${u*2}" fill="#FFFFFF" />`;return`<svg
  viewBox="0 0 ${u} ${u}"
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  width="${w}"
  height="${w}"
>
  ${s?`<title>${t}</title>`:""}
  <mask id="${$}" maskUnits="userSpaceOnUse" x="0" y="0" width="${u}" height="${u}">
    ${E}
  </mask>
  <g mask="url(#${$})">
    <path fill="url(#${m})" d="M0 0h80v40H0z" />
    <path fill="url(#${p})" d="M0 40h80v40H0z" />
  </g>
  <defs>
    <linearGradient id="${m}" x1="${u/2}" y1="0" x2="${u/2}" y2="${u/2}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${e[0]}" />
      <stop offset="1" stop-color="${e[1]}" />
    </linearGradient>
    <linearGradient id="${p}" x1="${u/2}" y1="${u/2}" x2="${u/2}" y2="${u}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${e[2]}" />
      <stop offset="1" stop-color="${e[3]}" />
    </linearGradient>
  </defs>
</svg>`},re=["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],ae={marble:b,pixel:X,ring:Z,beam:B,bauhaus:M,sunset:te,geometric:B,abstract:M};function k(a={}){const{name:t="Clara Barton",colors:r=re,title:s=!1,square:o=!1,size:n="40px",variant:e="marble"}=a;return(ae[e]||b)({name:t,colors:r,title:s,square:o,size:n})}const ne=["Mary Baker","Amelia Earhart","Mary Roebling","Sarah Winnemucca","Margaret Brent","Lucy Stone","Mary Edwards","Margaret Chase","Mahalia Jackson","Maya Angelou","Margaret Bourke","Eunice Kennedy","Carrie Chapman","Elizabeth Peratrovich","Alicia Dickerson","Daisy Gatson","Emma Willard","Amelia Boynton","Maria Mitchell","Sojourner Truth","Willa Cather","Coretta Scott","Harriet Tubman","Fabiola Cabeza","Sacagawea","Esther Martinez","Elizabeth Cady","Bessie Coleman","Ma Rainey","Julia Ward","Irene Morgan","Babe Didrikson","Lyda Conley","Annie Dodge","Maud Nathan","Betty Ford","Rosa Parks","Susan La","Gertrude Stein","Wilma Mankiller","Grace Hopper","Jane Addams","Katharine Graham","Florence Chadwick","Zora Neale","Wilma Rudolph","Annie Jump","Mother Frances","Jovita Idár","Maggie L","Henrietta Swan","Jane Cunningham","Victoria Woodhull","Helen Keller","Patsy Takemoto","Chien-Shiung","Dorothea Dix","Margaret Sanger","Alice Paul","Frances Willard","Sally Ride","Juliette Gordon","Queen Lili","Katharine Lee","Harriet Beecher","Felisa Rincon","Hetty Green","Belva Lockwood","Biddy Mason","Ida B","Eleanor Roosevelt","Maria Goeppert","Phillis Wheatley","Mary Harris","Fannie Lou","Rosalyn Yalow","Susan B","Clara Barton","Lady Deborah","Jane Johnston","Alice Childress","Georgia O","Rebecca Crumpler","Anne Bradstreet","Elizabeth Blackwell","Christa McAuliffe","Edmonia Lewis","Nellie Bly","Mary Cassatt","Pauli Murray","Ellen Swallow","Hedy Lamarr","Pearl Kendrick","Abigail Adams","Margaret Fuller","Emma Lazarus","Marian Anderson","Virginia Apgar","Mary Walton"],oe=["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"];let d={variant:"beam",colors:[...oe],size:80,square:!1};const I=document.getElementById("variant-selector"),q=document.getElementById("size-selector"),O=document.getElementById("colors-section"),se=document.getElementById("random-palette"),N=document.getElementById("toggle-square"),L=document.getElementById("avatars-grid"),z=[["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"],["#264653","#2A9D8F","#E9C46A","#F4A261","#E76F51"],["#606C38","#283618","#FEFAE0","#DDA15E","#BC6C25"],["#8ECAE6","#219EBC","#023047","#FFB703","#FB8500"],["#000000","#14213D","#FCA311","#E5E5E5","#FFFFFF"],["#D8E2DC","#FFE5D9","#FFCAD4","#F4ACB7","#9D8189"],["#E63946","#F1FAEE","#A8DADC","#457B9D","#1D3557"],["#F72585","#7209B7","#3A0CA3","#4361EE","#4CC9F0"],["#FFBE0B","#FB5607","#FF006E","#8338EC","#3A86FF"],["#F94144","#F3722C","#F8961E","#F9C74F","#90BE6D"]];function le(){return z[Math.floor(Math.random()*z.length)]}function A(){I.querySelectorAll(".segment").forEach(a=>{a.classList.toggle("selected",a.getAttribute("data-variant")===d.variant)}),q.querySelectorAll(".segment").forEach(a=>{a.classList.toggle("selected",parseInt(a.getAttribute("data-size"))===d.size)}),O.querySelectorAll(".color-input").forEach((a,t)=>{a.value=d.colors[t]}),N.textContent=d.square?"Round":"Square"}function S(){L.innerHTML="",ne.forEach(a=>{const t=document.createElement("div");t.className="avatar-container";const r=document.createElement("div");r.className="avatar-section";const s=k({name:a,variant:d.variant,colors:d.colors,size:d.size,square:d.square});r.innerHTML=s;const o=document.createElement("input");o.className="avatar-input",o.value=a,o.addEventListener("change",n=>{const e=n.target.value,l=k({name:e,variant:d.variant,colors:d.colors,size:d.size,square:d.square});r.innerHTML=l}),o.addEventListener("focus",n=>{n.target.select()}),t.appendChild(r),t.appendChild(o),L.appendChild(t)})}I.querySelectorAll(".segment").forEach(a=>{a.addEventListener("click",()=>{d.variant=a.getAttribute("data-variant"),A(),S()})});q.querySelectorAll(".segment").forEach(a=>{a.addEventListener("click",()=>{d.size=parseInt(a.getAttribute("data-size")),A(),S()})});O.querySelectorAll(".color-input").forEach(a=>{a.addEventListener("input",t=>{const r=parseInt(t.target.getAttribute("data-index"));d.colors[r]=t.target.value,S()})});se.addEventListener("click",()=>{d.colors=le(),A(),S()});N.addEventListener("click",()=>{d.square=!d.square,A(),S()});A();S();
