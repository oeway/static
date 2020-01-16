(function(){var P$=Clazz.newPackage("org.scijava.module.process"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractSingleInputPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, 'getSingleInput$org_scijava_module_Module$Class', function (module, type) {
if (this.moduleService == null ) return null;
var item=this.moduleService.getSingleInput$org_scijava_module_Module$Class(module, type);
if (item == null  || !item.isAutoFill$() ) return null;
return item.getName$();
});
C$.$getAnn$ = function(){ return [
[['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
