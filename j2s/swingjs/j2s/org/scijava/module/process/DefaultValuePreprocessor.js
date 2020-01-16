(function(){var P$=Clazz.newPackage("org.scijava.module.process"),p$1={},I$=[[0,'org.scijava.util.Types','java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultValuePreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
for (var input, $input = module.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
p$1.assignDefaultValue$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [module, input]);
}
for (var output, $output = module.getInfo$().outputs$().iterator$(); $output.hasNext$()&&((output=($output.next$())),1);) {
p$1.assignDefaultValue$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [module, output]);
}
});

Clazz.newMeth(C$, 'assignDefaultValue$org_scijava_module_Module$org_scijava_module_ModuleItem', function (module, item) {
if (module.isInputResolved$S(item.getName$())) return;
var nullValue=$I$(1).nullValue$Class(item.getType$());
if (!$I$(2).equals$O$O(item.getValue$org_scijava_module_Module(module), nullValue)) return;
var defaultValue=this.moduleService.getDefaultValue$org_scijava_module_ModuleItem(item);
if (defaultValue == null ) return;
item.setValue$org_scijava_module_Module$TT(module, defaultValue);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.DefaultValuePreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
