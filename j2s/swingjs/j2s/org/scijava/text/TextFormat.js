(function(){var P$=Clazz.newPackage("org.scijava.text"),I$=[[0,'org.scijava.util.FileUtils','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "TextFormat", null, null, 'org.scijava.plugin.HandlerPlugin');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['supports$java_io_File','supports$TT'], function (file) {
for (var ext, $ext = this.getExtensions$().iterator$(); $ext.hasNext$()&&((ext=($ext.next$())),1);) {
if ($I$(1).getExtension$java_io_File(file).equalsIgnoreCase$S(ext)) return true;
}
return false;
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(2));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
