(function(){var P$=Clazz.newPackage("io.scif.formats.qt"),p$1={},I$=[[0,'java.awt.Dimension','java.awt.image.DirectColorModel','java.awt.Toolkit','java.awt.image.MemoryImageSource','org.scijava.util.ReflectedUniverse','java.net.URL','java.net.URLClassLoader','java.util.StringTokenizer','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultQTJavaService", null, 'org.scijava.service.AbstractService', 'io.scif.formats.qt.QTJavaService');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MAC_OS_X=System.getProperty$S("os.name").equals$O("Mac OS X");
}

Clazz.newMeth(C$, '$init$', function () {
this.initialized=false;
this.noQT=false;
this.jvm64Bit=false;
this.expiredQT=false;
}, 1);

C$.$fields$=[['Z',['initialized','noQT','jvm64Bit','expiredQT'],'O',['log','org.scijava.log.LogService','r','org.scijava.util.ReflectedUniverse']]
,['Z',['MAC_OS_X'],'O',['loader','ClassLoader']]]

Clazz.newMeth(C$, 'canDoQT$', function () {
if (!this.initialized) p$1.initQTJava.apply(this, []);
return !this.noQT;
});

Clazz.newMeth(C$, 'isJVM64Bit$', function () {
if (!this.initialized) p$1.initQTJava.apply(this, []);
return this.jvm64Bit;
});

Clazz.newMeth(C$, 'isQTExpired$', function () {
if (!this.initialized) p$1.initQTJava.apply(this, []);
return this.expiredQT;
});

Clazz.newMeth(C$, 'getQTVersion$', function () {
if (this.isJVM64Bit$()) return "Not available";
 else if (this.isQTExpired$()) return "Expired";
 else if (!this.canDoQT$()) return "Missing";
 else {
try {
var qtMajor=this.r.exec$S("QTSession.getMajorVersion()").toString();
var qtMinor=this.r.exec$S("QTSession.getMinorVersion()").toString();
return qtMajor + "." + qtMinor ;
} catch (t) {
this.log.debug$O$Throwable("Could not retrieve QuickTime for Java version", t);
return "Error";
}
}});

Clazz.newMeth(C$, 'getUniverse$', function () {
if (!this.initialized) p$1.initQTJava.apply(this, []);
return this.r;
});

Clazz.newMeth(C$, 'getPictDimensions$BA', function (bytes) {
this.checkQTLibrary$();
try {
this.r.exec$S("QTSession.open()");
this.r.setVar$S$O("bytes", bytes);
this.r.exec$S("pict = new Pict(bytes)");
this.r.exec$S("box = pict.getPictFrame()");
var width=(this.r.exec$S("box.getWidth()")).intValue$();
var height=(this.r.exec$S("box.getHeight()")).intValue$();
this.r.exec$S("QTSession.close()");
return Clazz.new_($I$(1,1).c$$I$I,[width, height]);
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
this.r.exec$S("QTSession.close()");
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["PICT height determination failed", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'pictToImage$BA', function (bytes) {
this.checkQTLibrary$();
try {
this.r.exec$S("QTSession.open()");
this.r.setVar$S$O("bytes", bytes);
this.r.exec$S("pict = new Pict(bytes)");
this.r.exec$S("box = pict.getPictFrame()");
var width=(this.r.exec$S("box.getWidth()")).intValue$();
var height=(this.r.exec$S("box.getHeight()")).intValue$();
this.r.exec$S("g = new QDGraphics(box)");
this.r.exec$S("pict.draw(g, box)");
this.r.exec$S("pixMap = g.getPixMap()");
this.r.exec$S("rei = pixMap.getPixelData()");
var rowBytes=(this.r.exec$S("pixMap.getRowBytes()")).intValue$();
var intsPerRow=(rowBytes/4|0);
var pixLen=intsPerRow * height;
this.r.setVar$S$I("pixLen", pixLen);
var pixels=Clazz.array(Integer.TYPE, [pixLen]);
this.r.setVar$S$O("pixels", pixels);
this.r.setVar$S$O("zero",  new Integer(0));
this.r.exec$S("rei.copyToArray(zero, pixels, zero, pixLen)");
var bitsPerSample=32;
var redMask=16711680;
var greenMask=65280;
var blueMask=255;
var alphaMask=0;
var colorModel=Clazz.new_($I$(2,1).c$$I$I$I$I$I,[32, 16711680, 65280, 255, 0]);
this.r.exec$S("QTSession.close()");
return $I$(3).getDefaultToolkit$().createImage$java_awt_image_ImageProducer(Clazz.new_($I$(4,1).c$$I$I$java_awt_image_ColorModel$IA$I$I,[width, height, colorModel, pixels, 0, intsPerRow]));
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
try {
this.r.exec$S("QTSession.close()");
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.util.ReflectException")){
this.log.info$O$Throwable("Could not close QuickTime session", exc);
} else {
throw exc;
}
}
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["PICT extraction failed", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkQTLibrary$', function () {
if (this.isJVM64Bit$()) throw Clazz.new_(Clazz.load('io.scif.MissingLibraryException').c$$S,["QuickTime for Java is not supported with a 64-bit JVM. Please invoke the 32-bit JVM (-d32) to utilize QTJava functionality."]);
if (this.isQTExpired$()) throw Clazz.new_(Clazz.load('io.scif.MissingLibraryException').c$$S,["Your version of QuickTime for Java has expired. Please reinstall QuickTime for Java from http://www.apple.com/quicktime/"]);
if (!this.canDoQT$()) throw Clazz.new_(Clazz.load('io.scif.MissingLibraryException').c$$S,["QuickTime for Java is required to read some QuickTime files. Please install QuickTime for Java from http://www.apple.com/quicktime/"]);
});

Clazz.newMeth(C$, 'initQTJava', function () {
if (this.initialized) return;
var arch=System.getProperty$S("os.arch");
if (arch != null  && arch.contains$CharSequence("64") ) {
this.noQT=true;
this.jvm64Bit=true;
this.initialized=true;
return;
}var needClose=false;
if (C$.loader == null ) C$.loader=p$1.constructLoader.apply(this, []);
this.r=Clazz.new_($I$(5,1).c$$ClassLoader,[C$.loader]);
try {
this.r.exec$S("import quicktime.QTSession");
this.r.exec$S("QTSession.open()");
needClose=true;
this.r.exec$S("import quicktime.io.QTFile");
this.r.exec$S("import quicktime.std.movies.Movie");
this.r.exec$S("import quicktime.app.view.MoviePlayer");
this.r.exec$S("import quicktime.app.view.QTImageProducer");
this.r.exec$S("import quicktime.io.OpenMovieFile");
this.r.exec$S("import quicktime.qd.QDDimension");
this.r.exec$S("import quicktime.std.StdQTConstants");
this.r.exec$S("import quicktime.std.movies.TimeInfo");
this.r.exec$S("import quicktime.std.movies.Track");
this.r.exec$S("import quicktime.qd.QDGraphics");
this.r.exec$S("import quicktime.qd.QDRect");
this.r.exec$S("import quicktime.std.image.CSequence");
this.r.exec$S("import quicktime.std.image.CodecComponent");
this.r.exec$S("import quicktime.std.image.ImageDescription");
this.r.exec$S("import quicktime.std.movies.media.VideoMedia");
this.r.exec$S("import quicktime.util.QTHandle");
this.r.exec$S("import quicktime.util.RawEncodedImage");
this.r.exec$S("import quicktime.util.EndianOrder");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ExceptionInInitializerError")){
var err = e$$;
{
this.noQT=true;
var t=err.getException$();
if (Clazz.instanceOf(t, "java.lang.SecurityException")) {
var exc=t;
if (exc.getMessage$().contains$CharSequence("expired")) this.expiredQT=true;
}}
} else {
var t = e$$;
{
this.noQT=true;
this.log.debug$O$Throwable("Could not find QuickTime for Java", t);
}
}
} finally {
if (needClose) {
try {
this.r.exec$S("QTSession.close()");
} catch (t) {
this.log.debug$O$Throwable("Could not close QuickTime session", t);
}
}this.initialized=true;
}
}, p$1);

Clazz.newMeth(C$, 'constructLoader', function () {
var paths=null;
if (C$.MAC_OS_X) {
try {
paths=Clazz.array($I$(6), -1, [Clazz.new_($I$(6,1).c$$S,["file:/System/Library/Java/Extensions/QTJava.zip"])]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException")){
this.log.info$O$Throwable("", exc);
} else {
throw exc;
}
}
return paths == null  ? null : Clazz.new_($I$(7,1).c$$java_net_URLA,[paths]);
}try {
var windir=System.getProperty$S("java.library.path");
var st=Clazz.new_($I$(8,1).c$$S$S,[windir, ";"]);
while (st.hasMoreTokens$()){
var f=Clazz.new_($I$(9,1).c$$S$S,[st.nextToken$(), "QTJava.zip"]);
if (f.exists$()) {
try {
paths=Clazz.array($I$(6), -1, [f.toURI$().toURL$()]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.MalformedURLException")){
this.log.info$O$Throwable("", exc);
} else {
throw exc;
}
}
return paths == null  ? null : Clazz.new_($I$(7,1).c$$java_net_URLA,[paths]);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
this.log.warn$O$Throwable("Cannot read value of \'java.library.path\'", e);
} else {
throw e;
}
}
return null;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.qt.DefaultQTJavaService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
