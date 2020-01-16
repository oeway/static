(function(){var P$=Clazz.newPackage("net.imagej.display.process"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SingleInputPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inputType','Class','moduleService','org.scijava.module.ModuleService','convertService','org.scijava.convert.ConvertService']]]

Clazz.newMeth(C$, 'c$$Class', function (inputType) {
Clazz.super_(C$, this);
this.inputType=inputType;
}, 1);

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
var singleInput=p$1.getSingleInput$org_scijava_module_Module$Class.apply(this, [module, this.inputType]);
if (singleInput == null ) return;
var value=this.getValue$();
if (value == null ) return;
var itemName=singleInput.getName$();
value=this.convertService.convert$O$Class(value, singleInput.getType$());
module.setInput$S$O(itemName, value);
module.resolveInput$S(itemName);
});

Clazz.newMeth(C$, 'getSingleInput$org_scijava_module_Module$Class', function (module, type) {
if (this.moduleService == null  || this.convertService == null  ) return null;
var item=this.moduleService.getSingleInput$org_scijava_module_Module$Class(module, type);
if (item == null  || !item.isAutoFill$() ) {
var compatibleClasses=this.convertService.getCompatibleOutputClasses$Class(type);
item=this.moduleService.getSingleInput$org_scijava_module_Module$java_util_Collection(module, compatibleClasses);
}if (item == null  || !item.isAutoFill$() ) return null;
return item;
}, p$1);
C$.$getAnn$ = function(){ return [
[['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
