(function(){var P$=Clazz.newPackage("org.scijava.io.nio"),p$1={},I$=[[0,'Boolean','java.nio.ByteBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultNIOService", null, 'org.scijava.service.AbstractService', 'org.scijava.io.nio.NIOService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.useMappedByteBuffer=$I$(1).parseBoolean$S(System.getProperty$S("mappedBuffers"));
}, 1);

C$.$fields$=[['Z',['useMappedByteBuffer'],'O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'allocate$java_nio_channels_FileChannel$java_nio_channels_FileChannel_MapMode$J$I', function (channel, mapMode, bufferStartPosition, newSize) {
this.log.debug$O("NIO: allocate: mapped=" + this.useMappedByteBuffer + ", start=" + bufferStartPosition + ", size=" + newSize );
if (this.useMappedByteBuffer) {
return p$1.allocateMappedByteBuffer$java_nio_channels_FileChannel$java_nio_channels_FileChannel_MapMode$J$I.apply(this, [channel, mapMode, bufferStartPosition, newSize]);
}return p$1.allocateDirect$java_nio_channels_FileChannel$J$I.apply(this, [channel, bufferStartPosition, newSize]);
});

Clazz.newMeth(C$, 'allocateDirect$java_nio_channels_FileChannel$J$I', function (channel, bufferStartPosition, newSize) {
var buffer=$I$(2).allocate$I(newSize);
channel.read$java_nio_ByteBuffer$J(buffer, bufferStartPosition);
return buffer;
}, p$1);

Clazz.newMeth(C$, 'allocateMappedByteBuffer$java_nio_channels_FileChannel$java_nio_channels_FileChannel_MapMode$J$I', function (channel, mapMode, bufferStartPosition, newSize) {
return channel.map$java_nio_channels_FileChannel_MapMode$J$J(mapMode, bufferStartPosition, newSize);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.nio.DefaultNIOService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
