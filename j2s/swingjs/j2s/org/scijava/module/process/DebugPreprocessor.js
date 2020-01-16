(function(){var P$=Clazz.newPackage("org.scijava.module.process"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DebugPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.log == null  || !this.log.isDebug$() ) return;
this.log.debug$O("Executing module: " + module.getDelegateObject$());
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.DebugPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="1.0E300" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
