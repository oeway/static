(function(){var P$=Clazz.newPackage("org.scijava.text"),I$=[[0,'java.io.FileInputStream',['java.nio.channels.FileChannel','.MapMode'],'java.nio.charset.Charset','org.scijava.text.TextFormat','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTextService", null, 'org.scijava.plugin.AbstractHandlerService', 'org.scijava.text.TextService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$pluginService','org.scijava.plugin.PluginService']]]

Clazz.newMeth(C$, 'open$java_io_File', function (file) {
var stream=Clazz.new_($I$(1,1).c$$java_io_File,[file]);
try {
var fc=stream.getChannel$();
var bb=fc.map$java_nio_channels_FileChannel_MapMode$J$J($I$(2).READ_ONLY, 0, fc.size$());
return $I$(3).defaultCharset$().decode$java_nio_ByteBuffer(bb).toString();
} finally {
stream.close$();
}
});

Clazz.newMeth(C$, 'asHTML$java_io_File', function (file) {
var format=this.getHandler$java_io_File(file);
if (format == null ) return null;
return "<html><body>" + format.asHTML$S(this.open$java_io_File(file)) + "</body></html>" ;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(4),['asHTML$S','getExtensions$','getType$','supports$java_io_File']);
});

Clazz.newMeth(C$, 'getType$', function () {
return Clazz.getClass($I$(5));
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.text.DefaultTextService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
