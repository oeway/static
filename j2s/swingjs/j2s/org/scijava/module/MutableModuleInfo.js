(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "MutableModuleInfo", null, null, 'org.scijava.module.ModuleInfo');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getDelegateClassName$', function () {
return this.getModuleClass$().getName$();
});

Clazz.newMeth(C$, 'loadDelegateClass$', function () {
return this.getModuleClass$();
});

Clazz.newMeth(C$, 'createModule$', function () {
try {
return this.getModuleClass$().newInstance$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"InstantiationException") || Clazz.exceptionOf(exc,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('org.scijava.module.ModuleException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
