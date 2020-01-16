(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.LinkedList','sun.misc.SharedSecrets']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClassLoaderUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'releaseLoader$java_net_URLClassLoader', function (classLoader) {
C$.releaseLoader$java_net_URLClassLoader$java_util_List(classLoader, null);
}, 1);

Clazz.newMeth(C$, 'releaseLoader$java_net_URLClassLoader$java_util_List', function (classLoader, jarsClosed) {
var ioExceptions=Clazz.new_(1,{E:"java.io.IOException"},$I$(1,1));
try {
if (jarsClosed != null ) {
jarsClosed.clear$();
}var ucp=$I$(2).getJavaNetAccess$().getURLClassPath$(classLoader);
var loaders=ucp.loaders;
var urls=ucp.urls;
var lmap=ucp.lmap;
{
urls.clear$();
}{
lmap.clear$();
}{
for (var o, $o = loaders.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
if (o != null ) {
if (Clazz.instanceOf(o, "sun.misc.URLClassPath.JarLoader")) {
var jl=o;
var jarFile=jl.getJarFile$();
try {
if (jarFile != null ) {
jarFile.close$();
if (jarsClosed != null ) {
jarsClosed.add$TE(jarFile.getName$());
}}} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
var jarFileName=(jarFile == null ) ? "filename not available" : jarFile.getName$();
var msg="Error closing JAR file: " + jarFileName;
var newIOE=Clazz.new_(Clazz.load('java.io.IOException').c$$S,[msg]);
newIOE.initCause$Throwable(ioe);
ioExceptions.add$TE(newIOE);
} else {
throw ioe;
}
}
}}}
loaders.clear$();
}} catch (t) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[t]);
}
return ioExceptions;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
