(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'org.scijava.Context','io.scif.SCIFIOService','org.scijava.service.SciJavaService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractImgIOComponent", null, 'io.scif.AbstractSCIFIOPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['imgUtils','io.scif.img.ImgUtilityService']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_Context.apply(this, [Clazz.new_($I$(1,1).c$$ClassA,[[Clazz.getClass($I$(2),[]), Clazz.getClass($I$(3),[])]])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
}, 1);

Clazz.newMeth(C$, 'utils$', function () {
return this.imgUtils;
});
C$.$getAnn$ = function(){ return [
[['imgUtils','io.scif.img.ImgUtilityService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
