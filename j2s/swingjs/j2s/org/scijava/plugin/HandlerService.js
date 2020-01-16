(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "HandlerService", null, null, ['org.scijava.plugin.SingletonService', 'org.scijava.plugin.TypedService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['getHandler$TDT'], function (data) {
for (var handler, $handler = this.getInstances$().iterator$(); $handler.hasNext$()&&((handler=($handler.next$())),1);) {
try {
if (handler.supports$TT(data)) return handler;
} catch (t) {
this.log$().error$O$Throwable("Malfunctioning plugin: " + handler.getClass$().getName$(), t);
}
}
return null;
});

Clazz.newMeth(C$, ['supports$TDT','supports$TT'], function (data) {
return this.getHandler$TDT(data) != null ;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
