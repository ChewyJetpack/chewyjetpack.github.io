(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{477:function(t,e,n){"use strict";n.r(e);var r=n(10),c=(n(61),n(54),n(69),{head:function(){return{title:"Emil Smith | "+this.caseStudy.title,meta:[{hid:this.caseStudy.description,name:"description",content:this.caseStudy.description},{hid:this.caseStudy.title+": img",name:"og:image",content:this.caseStudy.hero}]}},name:"CaseStudyPage",layout:"DefaultLayout",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.prev=1,e.next=4,n("work/case-studies",r.slug).fetch();case 4:o=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c({message:"Case Study not found"});case 10:return e.abrupt("return",{caseStudy:o});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},components:{Article:n(446).default}}),o=n(9),component=Object(o.a)(c,(function(){return(0,this._self._c)("Article",{attrs:{content:this.caseStudy,caseStudy:!0}})}),[],!1,null,null,null);e.default=component.exports}}]);