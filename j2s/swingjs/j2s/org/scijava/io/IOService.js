(function(){var P$=Clazz.newPackage("org.scijava.io"),I$=[[0,'org.scijava.io.IOPlugin']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "IOService", null, null, ['org.scijava.plugin.HandlerService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getOpener$S', function (source) {
for (var handler, $handler = this.getInstances$().iterator$(); $handler.hasNext$()&&((handler=($handler.next$())),1);) {
if (handler.supportsOpen$S(source)) return handler;
}
return null;
});

Clazz.newMeth(C$, 'getSaver$TD$S', function (data, destination) {
for (var handler, $handler = this.getInstances$().iterator$(); $handler.hasNext$()&&((handler=($handler.next$())),1);) {
if (handler.supportsSave$O$S(data, destination)) {
var typedHandler=handler;
return typedHandler;
}}
return null;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),['getDataType$','getType$','open$S','save$TD$S','supports$S','supportsOpen$S','supportsSave$S','supportsSave$O$S']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass(String);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
