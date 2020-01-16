(function(){var P$=Clazz.newPackage("org.scijava.module"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Module", null, null, 'Runnable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'isResolved$S', function (name) {
return this.isInputResolved$S(name);
});

Clazz.newMeth(C$, 'setResolved$S$Z', function (name, resolved) {
if (resolved) this.resolveInput$S(name);
 else this.unresolveInput$S(name);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
