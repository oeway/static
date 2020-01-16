(function(){var P$=Clazz.newPackage("org.scijava.module.process"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "InitPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
try {
module.initialize$();
if (p$1.isCanceled$org_scijava_module_Module.apply(this, [module])) this.cancel$S(p$1.getCancelReason$org_scijava_module_Module.apply(this, [module]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.module.MethodCallException")){
if (this.log != null ) this.log.error$Throwable(exc);
var moduleClass=module.getInfo$().getDelegateClassName$();
this.cancel$S("The module \"" + moduleClass + "\" failed to initialize." );
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'isCanceled$org_scijava_module_Module', function (module) {
return Clazz.instanceOf(module, "org.scijava.Cancelable") && (module).isCanceled$() ;
}, p$1);

Clazz.newMeth(C$, 'getCancelReason$org_scijava_module_Module', function (module) {
if (!(Clazz.instanceOf(module, "org.scijava.Cancelable"))) return null;
var cancelReason=(module).getCancelReason$();
return cancelReason == null  ? "" : cancelReason;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.InitPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="100.0" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
