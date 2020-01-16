(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.stream"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','java.nio.channels.WritableByteChannel',['java.nio.channels.FileChannel','.MapMode'],'io.scif.media.imageio.stream.FileChannelImageOutputStream','java.nio.channels.Channels','javax.imageio.stream.FileCacheImageOutputStream','javax.imageio.stream.MemoryCacheImageOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelImageOutputStreamSpi", null, 'javax.imageio.spi.ImageOutputStreamSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$Class.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), Clazz.getClass($I$(2),['write$java_nio_ByteBuffer'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createOutputStreamInstance$O$Z$java_io_File', function (output, useCache, cacheDir) {
if (output == null  || !(Clazz.instanceOf(output, "java.nio.channels.WritableByteChannel")) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot create ImageOutputStream from " + output.getClass$().getName$()]);
}var stream=null;
if (Clazz.instanceOf(output, "java.nio.channels.FileChannel")) {
var channel=output;
try {
channel.map$java_nio_channels_FileChannel_MapMode$J$J($I$(3).READ_ONLY, channel.position$(), 1);
stream=Clazz.new_($I$(4,1).c$$java_nio_channels_FileChannel,[output]);
} catch (nrce) {
if (Clazz.exceptionOf(nrce,"java.nio.channels.NonReadableChannelException")){
} else {
throw nrce;
}
}
}if (stream == null ) {
var outStream=$I$(5).newOutputStream$java_nio_channels_WritableByteChannel(output);
if (useCache) {
try {
stream=Clazz.new_($I$(6,1).c$$java_io_OutputStream$java_io_File,[outStream, cacheDir]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}if (stream == null ) {
stream=Clazz.new_($I$(7,1).c$$java_io_OutputStream,[outStream]);
}}return stream;
});

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
return "NIO Channel ImageOutputStream";
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
