"use strict";(self.webpackChunkspace_tourism_website=self.webpackChunkspace_tourism_website||[]).push([[386],{3386:(A,g,s)=>{s.r(g),s.d(g,{TechnologyModule:()=>Z});var r=s(6895),i=s(6237),a=s(2340),o=s(8256),u=s(4004),h=s(529);let p=(()=>{class e{constructor(t){this.http=t}getTechnologies(){return this.http.get("../../../assets/data/technology.data.json")}getTechnologyByName(t){return this.getTechnologies().pipe((0,u.U)(c=>c.find(l=>l.name==t)))}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(h.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var m=s(2343);const d=function(e,n){return{active:e,"ml-16":n}};function T(e,n){if(1&e){const t=o.EpF();o.TgZ(0,"button",8),o.NdJ("click",function(){const b=o.CHM(t).$implicit,C=o.oxw();return o.KtG(C.setCurrentTechnology(b))}),o.TgZ(1,"span"),o._uU(2),o.qZA()()}if(2&e){const t=n.$implicit,c=n.index,l=o.oxw();o.Q6J("ngClass",o.WLB(2,d,l.currentTech.name===t.name,0!==c)),o.xp6(2),o.Oqu(c+1)}}const y=[{path:"",component:(()=>{class e{constructor(t){this.technologyService=t,this.technologies=[],this.currentTech={name:"",images:{portrait:"",landscape:""},description:""},this.baseUrl=a.N.assetsUrl}ngOnInit(){this.technologyService.getTechnologies().subscribe(t=>{this.technologies=[...t],this.currentTech=Object.assign({},t[0])})}setCurrentTechnology(t){this.currentTech=Object.assign({},t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(p))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-technology"]],decls:20,vars:12,consts:[[1,"technology-section"],[3,"desktop","tablet","mobile"],[1,"container","page-content"],[1,"tech-image"],[3,"src"],[1,"container","page-content","no-pt"],[1,"toggle-buttons-group"],["class","toggle-button",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"toggle-button",3,"ngClass","click"]],template:function(t,c){1&t&&(o.TgZ(0,"div",0),o._UZ(1,"app-background-page",1),o.TgZ(2,"div",2)(3,"h5")(4,"strong"),o._uU(5,"03"),o.qZA(),o._uU(6),o.ALo(7,"uppercase"),o.qZA()(),o.TgZ(8,"div",3),o._UZ(9,"img",4),o.qZA(),o.TgZ(10,"div",5)(11,"div",6),o.YNc(12,T,3,5,"button",7),o.qZA(),o.TgZ(13,"h6"),o._uU(14,"THE TERMINOLOGY\u2026"),o.qZA(),o.TgZ(15,"h4"),o._uU(16),o.ALo(17,"uppercase"),o.qZA(),o.TgZ(18,"p"),o._uU(19),o.qZA()()()),2&t&&(o.xp6(1),o.Q6J("desktop","assets/images/technology/background-technology-desktop.jpg")("tablet","assets/images/technology/background-technology-tablet.jpg")("mobile","assets/images/technology/background-technology-mobile.jpg"),o.xp6(5),o.Oqu(o.lcZ(7,8,"Space launch 101")),o.xp6(3),o.Q6J("src",c.baseUrl+c.currentTech.images.landscape,o.LSH),o.xp6(3),o.Q6J("ngForOf",c.technologies),o.xp6(4),o.Oqu(o.lcZ(17,10,c.currentTech.name)),o.xp6(3),o.Oqu(c.currentTech.description))},dependencies:[r.mk,r.sg,m.l,r.gd]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[i.Bz.forChild(y),i.Bz]}),e})();var f=s(4466);let Z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[r.ez,v,f.m]}),e})()}}]);