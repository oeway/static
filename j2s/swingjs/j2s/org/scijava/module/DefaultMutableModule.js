(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[[0,'org.scijava.module.DefaultMutableModuleInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMutableModule", null, 'org.scijava.module.AbstractModule', 'org.scijava.module.MutableModule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['info','org.scijava.module.MutableModuleInfo']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_module_MutableModuleInfo.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_module_MutableModuleInfo', function (info) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.info=info;
info.setModuleClass$Class(this.getClass$());
}, 1);

Clazz.newMeth(C$, 'getInfo$', function () {
return this.info;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
