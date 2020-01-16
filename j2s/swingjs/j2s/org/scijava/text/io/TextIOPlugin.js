(function(){var P$=Clazz.newPackage("org.scijava.text.io"),I$=[[0,'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TextIOPlugin", null, 'org.scijava.io.AbstractIOPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['textService','org.scijava.text.TextService']]]

Clazz.newMeth(C$, 'getDataType$', function () {
return Clazz.getClass(String);
});

Clazz.newMeth(C$, 'supportsOpen$S', function (source) {
if (this.textService == null ) return false;
return this.textService.supports$java_io_File(Clazz.new_($I$(1,1).c$$S,[source]));
});

Clazz.newMeth(C$, 'open$S', function (source) {
if (this.textService == null ) return null;
return this.textService.asHTML$java_io_File(Clazz.new_($I$(1,1).c$$S,[source]));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.text.io.TextIOPlugin',null,['org.scijava.plugin.Plugin']],['type="org.scijava.io.IOPlugin.class" priority="-101.0" ']],
  [['textService','org.scijava.text.TextService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
