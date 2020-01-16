(function(){var P$=Clazz.newPackage("org.scijava.module.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ModulePreprocessEvent", null, 'org.scijava.module.event.ModuleProcessEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$processor','org.scijava.module.process.ModulePreprocessor']]]

Clazz.newMeth(C$, 'c$$org_scijava_module_Module$org_scijava_module_process_ModulePreprocessor', function (module, processor) {
;C$.superclazz.c$$org_scijava_module_Module$org_scijava_module_process_ModuleProcessor.apply(this,[module, processor]);C$.$init$.apply(this);
this.$processor=processor;
}, 1);

Clazz.newMeth(C$, 'getProcessor$', function () {
return this.$processor;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
