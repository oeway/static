(function(){var P$=Clazz.newPackage("org.scijava.annotations"),p$1={},I$=[[0,'java.util.HashSet','Boolean','org.scijava.util.FileUtils','java.util.jar.JarFile',['java.util.jar.Attributes','.Name'],'java.net.URL','java.io.File','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EclipseHelper", null, 'org.scijava.annotations.DirectoryIndexer');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.indexed=Clazz.new_(1,{E:"java.net.URL"},$I$(1,1));
C$.debug="debug".equals$O(System.getProperty$S("scijava.log.level"));
}

Clazz.newMeth(C$, '$init$', function () {
this.autoDetectEclipse=true;
}, 1);

C$.$fields$=[['Z',['bannerShown','autoDetectEclipse']]
,['Z',['debug'],'O',['indexed','java.util.Set']]]

Clazz.newMeth(C$, 'debug$S', function (message) {
if (C$.debug) {
System.err.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'updateAnnotationIndex$ClassLoader', function (loader) {
C$.debug$S("Checking class loader: " + loader);
if (loader == null  || !(Clazz.instanceOf(loader, "java.net.URLClassLoader")) ) {
C$.debug$S("Not an URLClassLoader: " + loader);
return;
}var helper=Clazz.new_(C$);
if ($I$(2).getBoolean$S("force.annotation.index")) {
helper.autoDetectEclipse=false;
}var first=true;
for (var url, $url = 0, $$url = (loader).getURLs$(); $url<$$url.length&&((url=($$url[$url])),1);$url++) {
C$.debug$S("Checking URL: " + url);
if (helper.autoDetectEclipse && first ) {
if (!"file".equals$O(url.getProtocol$()) || (!url.getPath$().endsWith$S("/") && !url.getPath$().contains$CharSequence("surefire") ) ) {
C$.debug$S("Not Eclipse because first entry is: " + url);
return;
}first=false;
}if (url.toString().endsWith$S("/./")) {
break;
}p$1.maybeIndex$java_net_URL$ClassLoader.apply(helper, [url, loader]);
}
C$.updateAnnotationIndex$ClassLoader(loader.getParent$());
}, 1);

Clazz.newMeth(C$, 'maybeIndex$java_net_URL$ClassLoader', function (url, loader) {
{
if (C$.indexed.contains$O(url)) {
return;
}C$.indexed.add$TE(url);
}if (!"file".equals$O(url.getProtocol$())) {
C$.debug$S("Not a file URL: " + url);
return;
}var file=$I$(3).urlToFile$java_net_URL(url);
if (this.autoDetectEclipse && !file.isAbsolute$() ) {
C$.debug$S("Not an absolute file URL: " + url);
return;
}var name=file.getName$();
if (name.endsWith$S(".jar")) {
if (!file.isFile$()) {
C$.debug$S("Not a file: " + file);
return;
}if (!this.autoDetectEclipse || url.toString().matches$S(".*/target/surefire/surefirebooter[0-9]*\\.jar") ) try {
var jar=Clazz.new_($I$(4,1).c$$java_io_File,[file]);
var manifest=jar.getManifest$();
if (manifest != null ) {
var classPath=manifest.getMainAttributes$().getValue$java_util_jar_Attributes_Name($I$(5).CLASS_PATH);
if (classPath != null ) {
for (var element, $element = 0, $$element = classPath.split$S(" +"); $element<$$element.length&&((element=($$element[$element])),1);$element++) try {
p$1.maybeIndex$java_net_URL$ClassLoader.apply(this, [Clazz.new_($I$(6,1).c$$java_net_URL$S,[url, element]), loader]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
e.printStackTrace$();
} else {
throw e;
}
}

}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Warning: could not index annotations due to ");
e.printStackTrace$();
} else {
throw e;
}
}
return;
}if (!file.isDirectory$()) {
return;
}p$1.index$java_io_File$ClassLoader.apply(this, [file, loader]);
}, p$1);

Clazz.newMeth(C$, 'index$java_io_File$ClassLoader', function (directory, loader) {
C$.debug$S("Directory: " + directory);
if (!directory.canWrite$() || p$1.upToDate$java_io_File.apply(this, [directory]) || p$1.isIJ1$java_io_File.apply(this, [directory])  ) {
C$.debug$S("can write: " + directory.canWrite$() + ", up-to-date: " + p$1.upToDate$java_io_File.apply(this, [directory]) + ", : is IJ1: " + p$1.isIJ1$java_io_File.apply(this, [directory]) );
return;
}var jsonDirectory=Clazz.new_($I$(7,1).c$$java_io_File$S,[directory, "META-INF/json/"]);
try {
this.discoverAnnotations$java_io_File$S$ClassLoader(directory, "", loader);
if (!jsonDirectory.exists$() && !this.foundAnnotations$() ) return;
if (!this.bannerShown) {
System.err.println$S("[ECLIPSE HELPER] Indexing annotations...");
this.bannerShown=true;
}this.write$java_io_File(directory);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
if (jsonDirectory.isDirectory$()) {
jsonDirectory.setLastModified$J(System.currentTimeMillis$());
} else {
jsonDirectory.mkdirs$();
}}, p$1);

Clazz.newMeth(C$, 'isIJ1$java_io_File', function (directory) {
return Clazz.new_($I$(7,1).c$$java_io_File$S,[directory, "IJ_Props.txt"]).exists$();
}, p$1);

Clazz.newMeth(C$, 'upToDate$java_io_File', function (directory) {
var jsonDirectory=Clazz.new_($I$(7,1).c$$java_io_File$S,[directory, "META-INF/json/"]);
if (!jsonDirectory.isDirectory$()) {
return false;
}return p$1.upToDate$java_io_File$J.apply(this, [directory, jsonDirectory.lastModified$()]);
}, p$1);

Clazz.newMeth(C$, 'upToDate$java_io_File$J', function (directory, lastModified) {
if (directory.lastModified$() > lastModified) {
return false;
}var list=directory.listFiles$();
if (list != null ) {
for (var file, $file = 0, $$file = list; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
if (file.isFile$()) {
if (file.lastModified$() > lastModified) {
return false;
}} else if (file.isDirectory$()) {
if (!p$1.upToDate$java_io_File$J.apply(this, [file, lastModified])) {
return false;
}}}
}return true;
}, p$1);

Clazz.newMeth(C$, 'main$SA', function (args) {
System.setProperty$S$S("force.annotation.index", "true");
C$.updateAnnotationIndex$ClassLoader($I$(8).currentThread$().getContextClassLoader$());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
