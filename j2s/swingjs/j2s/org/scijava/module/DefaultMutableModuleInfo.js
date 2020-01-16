(function(){var P$=Clazz.newPackage("org.scijava.module");
/*c*/var C$=Clazz.newClass(P$, "DefaultMutableModuleInfo", null, 'org.scijava.module.AbstractModuleInfo', 'org.scijava.module.MutableModuleInfo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['moduleClass','Class']]]

Clazz.newMeth(C$, 'setModuleClass$Class', function (moduleClass) {
this.moduleClass=moduleClass;
});

Clazz.newMeth(C$, 'getModuleClass$', function () {
return this.moduleClass;
});

Clazz.newMeth(C$, 'addInput$org_scijava_module_ModuleItem', function (input) {
this.inputMap$().put$TK$TV(input.getName$(), input);
this.inputList$().add$TE(input);
});

Clazz.newMeth(C$, 'addOutput$org_scijava_module_ModuleItem', function (output) {
this.outputMap$().put$TK$TV(output.getName$(), output);
this.outputList$().add$TE(output);
});

Clazz.newMeth(C$, 'removeInput$org_scijava_module_ModuleItem', function (input) {
this.inputMap$().remove$O(input.getName$());
this.inputList$().remove$O(input);
});

Clazz.newMeth(C$, 'removeOutput$org_scijava_module_ModuleItem', function (output) {
this.outputMap$().remove$O(output.getName$());
this.outputList$().remove$O(output);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
