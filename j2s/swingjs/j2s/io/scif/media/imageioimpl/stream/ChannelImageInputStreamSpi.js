(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.stream"),I$=[[0,'io.scif.media.imageioimpl.common.PackageUtil','java.nio.channels.ReadableByteChannel','io.scif.media.imageio.stream.FileChannelImageInputStream','java.nio.channels.Channels','javax.imageio.stream.FileCacheImageInputStream','javax.imageio.stream.MemoryCacheImageInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChannelImageInputStreamSpi", null, 'javax.imageio.spi.ImageInputStreamSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$Class.apply(this,[$I$(1).getVendor$(), $I$(1).getVersion$(), Clazz.getClass($I$(2),['read$java_nio_ByteBuffer'])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createInputStreamInstance$O$Z$java_io_File', function (input, useCache, cacheDir) {
if (input == null  || !(Clazz.instanceOf(input, "java.nio.channels.ReadableByteChannel")) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["XXX"]);
}var stream=null;
if (Clazz.instanceOf(input, "java.nio.channels.FileChannel")) {
stream=Clazz.new_($I$(3,1).c$$java_nio_channels_FileChannel,[input]);
} else {
var inStream=$I$(4).newInputStream$java_nio_channels_ReadableByteChannel(input);
if (useCache) {
try {
stream=Clazz.new_($I$(5,1).c$$java_io_InputStream$java_io_File,[inStream, cacheDir]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}if (stream == null ) {
stream=Clazz.new_($I$(6,1).c$$java_io_InputStream,[inStream]);
}}return stream;
});

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
return "NIO Channel ImageInputStream";
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
