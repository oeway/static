(function(){var P$=Clazz.newPackage("org.scijava.module.run"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ModuleCodeRunner", null, 'org.scijava.run.AbstractCodeRunner');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, 'run$O$OA', function (code, args) {
this.waitFor$java_util_concurrent_Future(this.moduleService.run$org_scijava_module_ModuleInfo$Z$OA(p$1.getModuleInfo$O.apply(this, [code]), true, args));
});

Clazz.newMeth(C$, 'run$O$java_util_Map', function (code, inputMap) {
this.waitFor$java_util_concurrent_Future(this.moduleService.run$org_scijava_module_ModuleInfo$Z$java_util_Map(p$1.getModuleInfo$O.apply(this, [code]), true, inputMap));
});

Clazz.newMeth(C$, ['supports$O','supports$TT','supports$TD'], function (code) {
return p$1.getModuleInfo$O.apply(this, [code]) != null ;
});

Clazz.newMeth(C$, 'getModuleInfo$O', function (code) {
if (!(Clazz.instanceOf(code, "java.lang.String"))) return null;
var id=code;
return this.moduleService.getModuleById$S(id);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.run.ModuleCodeRunner',null,['org.scijava.plugin.Plugin']],['type="org.scijava.run.CodeRunner.class" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
