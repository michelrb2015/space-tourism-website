"use strict";(self.webpackChunkspace_tourism_website=self.webpackChunkspace_tourism_website||[]).push([[802],{8802:(U,i,n)=>{n.r(i),n.d(i,{CrewModule:()=>v});var c=n(6895),a=n(6237),p=n(2340),e=n(8256),l=n(4004),d=n(529);let m=(()=>{class t{constructor(r){this.http=r,this.dataUrl=p.N.dataUrl}getCrews(){return this.http.get(this.dataUrl+"crew.data.json")}getCrewByName(r){return this.getCrews().pipe((0,l.U)(s=>s.find(u=>u.name==r)))}}return t.\u0275fac=function(r){return new(r||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n(2343);function w(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"input",7),e.NdJ("click",function(){const Z=e.CHM(r).$implicit,b=e.oxw();return e.KtG(b.setCurrentPerson(Z))}),e.qZA()}2&t&&e.Q6J("checked",0==o.index)}const C=[{path:"",component:(()=>{class t{constructor(r){this.crewService=r,this.crew=[],this.currentPerson={name:"",images:{png:"",webp:""},role:"Commander",bio:""},this.baseUrl=p.N.assetsUrl}ngOnInit(){this.crewService.getCrews().subscribe(r=>{this.crew=[...r],this.currentPerson=Object.assign({},r[0])})}setCurrentPerson(r){this.currentPerson=Object.assign({},r)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-crew"]],decls:19,vars:13,consts:[[1,"crew-section"],[3,"desktop","tablet","mobile"],[1,"crew","container","page-content"],[3,"src"],[1,"h-separator"],[1,"image-stepper"],["type","radio","name","a",3,"checked","click",4,"ngFor","ngForOf"],["type","radio","name","a",3,"checked","click"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"app-background-page",1),e.TgZ(2,"div",2)(3,"h5")(4,"strong"),e._uU(5,"02"),e.qZA(),e._uU(6),e.ALo(7,"uppercase"),e.qZA(),e._UZ(8,"img",3)(9,"div",4),e.TgZ(10,"div",5),e.YNc(11,w,1,1,"input",6),e.qZA(),e.TgZ(12,"h6"),e._uU(13),e.qZA(),e.TgZ(14,"h4"),e._uU(15),e.ALo(16,"uppercase"),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.qZA()()()),2&r&&(e.xp6(1),e.Q6J("desktop","assets/images/crew/background-crew-desktop.jpg")("tablet","assets/images/crew/background-crew-tablet.jpg")("mobile","assets/images/crew/background-crew-mobile.jpg"),e.xp6(5),e.Oqu(e.lcZ(7,9,"Meet your crew")),e.xp6(2),e.Q6J("src",s.baseUrl+s.currentPerson.images.png,e.LSH),e.xp6(3),e.Q6J("ngForOf",s.crew),e.xp6(2),e.Oqu(s.currentPerson.role),e.xp6(2),e.Oqu(e.lcZ(16,11,s.currentPerson.name)),e.xp6(3),e.Oqu(s.currentPerson.bio))},dependencies:[c.sg,g.l,c.gd]}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(C),a.Bz]}),t})();var f=n(4466);let v=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,h,f.m]}),t})()}}]);