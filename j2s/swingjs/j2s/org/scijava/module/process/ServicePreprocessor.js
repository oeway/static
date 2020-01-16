(function(){var P$=Clazz.newPackage("org.scijava.module.process"),p$1={},I$=[[0,'org.scijava.service.Service']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ServicePreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
for (var input, $input = module.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
if (!input.isAutoFill$()) continue;
var type=input.getType$();
if (Clazz.getClass($I$(1),['initialize$','registerEventHandlers$']).isAssignableFrom$Class(type)) {
var serviceInput=input;
p$1.setServiceValue$org_scijava_Context$org_scijava_module_Module$org_scijava_module_ModuleItem.apply(this, [this.getContext$(), module, serviceInput]);
}if (type.isAssignableFrom$Class(this.getContext$().getClass$())) {
var name=input.getName$();
module.setInput$S$O(name, this.getContext$());
module.resolveInput$S(name);
}}
});

Clazz.newMeth(C$, 'setServiceValue$org_scijava_Context$org_scijava_module_Module$org_scijava_module_ModuleItem', function (context, module, input) {
var service=context.getService$Class(input.getType$());
input.setValue$org_scijava_module_Module$TT(module, service);
module.resolveInput$S(input.getName$());
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.ServicePreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="20000.0" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
