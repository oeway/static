(function(){var P$=Clazz.newPackage("org.scijava.text"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "TextService", null, null, ['org.scijava.plugin.HandlerService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['getHandler$java_io_File','getHandler$TDT'], function (file) {
return org.scijava.plugin.HandlerService.prototype.getHandler$TDT.apply(this, [file]);
});

Clazz.newMeth(C$, ['supports$java_io_File','supports$TT','supports$TDT'], function (file) {
return org.scijava.plugin.HandlerService.prototype.supports$TDT.apply(this, [file]);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
