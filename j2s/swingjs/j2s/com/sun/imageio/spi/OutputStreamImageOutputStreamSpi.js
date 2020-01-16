(function(){var P$=Clazz.newPackage("com.sun.imageio.spi"),I$=[[0,'java.io.OutputStream','javax.imageio.stream.FileCacheImageOutputStream','javax.imageio.stream.MemoryCacheImageOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutputStreamImageOutputStreamSpi", null, 'javax.imageio.spi.ImageOutputStreamSpi');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$outputClass=Clazz.getClass($I$(1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['$outputClass','Class']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$S$Class.apply(this,["Oracle Corporation", "1.0", C$.$outputClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale', function (locale) {
return "Service provider that instantiates an OutputStreamImageOutputStream from an OutputStream";
});

Clazz.newMeth(C$, 'canUseCacheFile$', function () {
return true;
});

Clazz.newMeth(C$, 'needsCacheFile$', function () {
return false;
});

Clazz.newMeth(C$, 'createOutputStreamInstance$O$Z$java_io_File', function (output, useCache, cacheDir) {
if (Clazz.instanceOf(output, "java.io.OutputStream")) {
var os=output;
if (useCache) {
return Clazz.new_($I$(2,1).c$$java_io_OutputStream$java_io_File,[os, cacheDir]);
} else {
return Clazz.new_($I$(3,1).c$$java_io_OutputStream,[os]);
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
