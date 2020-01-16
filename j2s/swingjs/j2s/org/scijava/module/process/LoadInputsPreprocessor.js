(function(){var P$=Clazz.newPackage("org.scijava.module.process"),p$1={},I$=[[0,'org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoadInputsPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['moduleService','org.scijava.module.ModuleService','conversionService','org.scijava.convert.ConvertService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
var inputs=module.getInfo$().inputs$();
for (var item, $item = inputs.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
p$1.loadValue$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [module, item]);
}
});

Clazz.newMeth(C$, 'loadValue$org_scijava_module_Module$org_scijava_module_ModuleItem', function (module, item) {
if (module.isInputResolved$S(item.getName$())) return;
var prefValue=this.moduleService.load$org_scijava_module_ModuleItem(item);
var type=item.getType$();
var defaultValue=item.getValue$org_scijava_module_Module(module);
var value=p$1.getBestValue$O$O$Class.apply(this, [prefValue, defaultValue, type]);
item.setValue$org_scijava_module_Module$TT(module, value);
}, p$1);

Clazz.newMeth(C$, 'getBestValue$O$O$Class', function (prefValue, defaultValue, type) {
if (prefValue != null ) return this.conversionService.convert$O$Class(prefValue, type);
if (defaultValue != null ) {
return this.conversionService.convert$O$Class(defaultValue, type);
}return $I$(1).nullValue$Class(type);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.LoadInputsPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="-9999.0" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['conversionService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
