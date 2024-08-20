"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[213],{5213:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});var s=a(2791),n=a(9434),l=a(6534),r=a(6549),o=a(9307),i=a(7736),c=a(7487),d=a(4880),u=a(8021),m=a(4279),p=a(827),h=a(3401),x=a(4325),j=a(2417),g=a(6082),v=a(2149),f=a(1334),Z=a(8755),N=a(4470),C=a(5471),S=a(5584),y=a(6627),P=a(4575),b=a(272),F=a(8302),I=a(3188),$=a(6828),A=a(6513),w=a(184);const B=function(){const e=(0,n.I0)(),t=(0,d.k6)(),a=(0,l.VY)(),{loading:B,error:k,success:z}=(0,n.v9)((e=>e.addNewProduct)),[W,q]=(0,s.useState)(""),[D,E]=(0,s.useState)(0),[O,R]=(0,s.useState)(""),[T,H]=(0,s.useState)(""),[U,G]=(0,s.useState)(0),[K,L]=(0,s.useState)(""),[M,Q]=(0,s.useState)([]),[V,Y]=(0,s.useState)([]),[J,X]=(0,s.useState)(!1),_=(0,s.useRef)(),[ee,te]=(0,s.useState)(!1),ae=(0,P.Z)();return(0,s.useEffect)((()=>{k&&(a.error(k),e((0,c.b9)())),z&&(a.success("Product Created Successfully"),t.push("/admin/dashboard"),e({type:u.Q5}))}),[e,a,k,t,z]),(0,w.jsx)(w.Fragment,{children:B?(0,w.jsx)(o.Z,{}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(r.Z,{title:"New Product"}),(0,w.jsxs)("div",{className:ae.updateProduct,children:[(0,w.jsx)("div",{className:ee?`${ae.toggleBox1}`:`${ae.firstBox1}`,children:(0,w.jsx)(i.Z,{})}),(0,w.jsxs)("div",{className:ae.secondBox1,children:[(0,w.jsx)("div",{className:ae.navBar1,children:(0,w.jsx)(y.Z,{toggleHandler:()=>{console.log("toggle"),te(!ee)}})}),(0,w.jsx)("div",{className:`${ae.formContainer} ${ae.formContainer2}`,children:(0,w.jsxs)("form",{className:`${ae.form} ${ae.form2}`,encType:"multipart/form-data",onSubmit:t=>{t.preventDefault();const a=new FormData;a.set("name",W),a.set("price",D),a.set("description",O),a.set("category",T),a.set("Stock",U),a.set("info",K),M.forEach((e=>{a.append("images",e)})),e((0,c.ry)(a))},children:[(0,w.jsx)(b.Z,{className:ae.avatar,children:(0,w.jsx)(v.Z,{})}),(0,w.jsx)(F.Z,{variant:"h5",component:"h1",className:ae.heading,children:"Create Product"}),(0,w.jsx)(I.Z,{variant:"outlined",fullWidth:!0,className:`${ae.nameInput} ${ae.textField}`,label:"Product Name",required:!0,value:W,onChange:e=>q(e.target.value),InputProps:{endAdornment:(0,w.jsx)(m.Z,{position:"end",children:(0,w.jsx)(Z.Z,{style:{fontSize:20,color:"#414141"}})})}}),(0,w.jsx)(I.Z,{variant:"outlined",label:"Price",value:D,required:!0,fullWidth:!0,className:`${ae.passwordInput} ${ae.textField}`,onChange:e=>E(e.target.value),InputProps:{endAdornment:(0,w.jsx)(m.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,w.jsx)(g.Z,{})})}}),(0,w.jsx)(I.Z,{variant:"outlined",label:"Stock",value:U,required:!0,className:`${ae.passwordInput} ${ae.textField}`,onChange:e=>G(e.target.value),InputProps:{endAdornment:(0,w.jsx)(m.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,w.jsx)(x.Z,{})})}}),(0,w.jsx)(I.Z,{variant:"outlined",label:"Product info",value:K,required:!0,className:`${ae.passwordInput} ${ae.textField}`,onChange:e=>L(e.target.value),InputProps:{endAdornment:(0,w.jsx)(m.Z,{position:"end",style:{fontSize:20,color:"#414141"},children:(0,w.jsx)(S.Z,{})})}}),(0,w.jsxs)("div",{className:ae.selectOption,children:[!J&&(0,w.jsx)(F.Z,{variant:"body2",className:ae.labelText,children:"Choose Category"}),(0,w.jsx)($.Z,{className:ae.formControl,children:(0,w.jsxs)(N.Z,{variant:"outlined",fullWidth:!0,value:T,onChange:e=>{H(e.target.value),X(!0)},className:ae.select,inputProps:{name:"category",id:"category-select"},MenuProps:{classes:{paper:ae.menu},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},getContentAnchorEl:null},children:[!T&&(0,w.jsx)(C.Z,{value:"",children:(0,w.jsx)("em",{children:"Choose Category"})}),["Cricket Kits","Batting Gloves","Batting Pads","Bats","Bags","Helmets","Balls","Stumps","Shoes","Clothing","Accessories"].map((e=>(0,w.jsx)(C.Z,{value:e,children:e},e)))]})})]}),(0,w.jsx)(I.Z,{variant:"outlined",fullWidth:!0,className:ae.descriptionInput,label:"Product Description",multiline:!0,rows:1,value:O,onChange:e=>R(e.target.value),InputProps:{endAdornment:(0,w.jsx)(m.Z,{position:"end",children:(0,w.jsx)(h.Z,{className:ae.descriptionIcon})})}}),(0,w.jsxs)("div",{className:ae.root,children:[(0,w.jsx)("div",{className:ae.imgIcon,children:(0,w.jsx)(f.Z,{fontSize:"large",style:{fontSize:40}})}),(0,w.jsx)("input",{type:"file",name:"avatar",className:ae.input,accept:"image/*",onChange:e=>{const t=Array.from(e.target.files);Q([]),Y([]),t.forEach((e=>{const t=new FileReader;t.onload=()=>{2===t.readyState&&(Y((e=>[...e,t.result])),Q((e=>[...e,t.result])))},t.readAsDataURL(e)}))},multiple:!0,style:{display:"none"},ref:_}),(0,w.jsx)("label",{htmlFor:"avatar-input",children:(0,w.jsx)(A.Z,{variant:"contained",color:"default",className:ae.uploadAvatarButton,startIcon:(0,w.jsx)(j.Z,{style:{color:"#FFFFFF"}}),onClick:()=>{_.current.click()},children:(0,w.jsx)("p",{className:ae.uploadAvatarText,children:"Upload Images"})})})]}),(0,w.jsx)(p.Z,{className:ae.imageArea,children:V&&V.map(((e,t)=>(0,w.jsx)("img",{src:e,alt:"Product Preview",className:ae.image},t)))}),(0,w.jsx)(A.Z,{variant:"contained",className:ae.loginButton,fullWidth:!0,type:"submit",disabled:!!B,children:"Create"})]})})]})]})]})})}}}]);
//# sourceMappingURL=213.44936d09.chunk.js.map