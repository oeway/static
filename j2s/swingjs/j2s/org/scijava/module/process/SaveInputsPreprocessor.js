(function(){var P$=Clazz.newPackage("org.scijava.module.process"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SaveInputsPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
var inputs=module.getInfo$().inputs$();
for (var item, $item = inputs.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
p$1.saveValue$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [module, item]);
}
});

Clazz.newMeth(C$, 'saveValue$org_scijava_module_Module$org_scijava_module_ModuleItem', function (module, item) {
var value=item.getValue$org_scijava_module_Module(module);
this.moduleService.save$org_scijava_module_ModuleItem$TT(item, value);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.SaveInputsPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="-10001.0" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
