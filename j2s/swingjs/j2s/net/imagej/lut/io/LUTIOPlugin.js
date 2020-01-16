(function(){var P$=Clazz.newPackage("net.imagej.lut.io"),I$=[[0,'net.imglib2.display.ColorTable','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LUTIOPlugin", null, 'org.scijava.io.AbstractIOPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['lutService','net.imagej.lut.LUTService']]]

Clazz.newMeth(C$, 'getDataType$', function () {
return Clazz.getClass($I$(1),['get$I$I','getComponentCount$','getLength$','getResampled$I$I$I','lookupARGB$D$D$D']);
});

Clazz.newMeth(C$, 'supportsOpen$S', function (source) {
if (this.lutService == null ) return false;
return this.lutService.isLUT$java_io_File(Clazz.new_($I$(2,1).c$$S,[source]));
});

Clazz.newMeth(C$, 'open$S', function (source) {
if (this.lutService == null ) return null;
return this.lutService.loadLUT$java_io_File(Clazz.new_($I$(2,1).c$$S,[source]));
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.lut.io.LUTIOPlugin',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.IOPlugin.class" ']],
  [['lutService','net.imagej.lut.LUTService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
