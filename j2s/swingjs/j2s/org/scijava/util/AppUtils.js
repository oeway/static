(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'org.scijava.util.DebugUtils','org.scijava.util.Types','java.io.File','org.scijava.util.FileUtils','java.util.regex.Pattern']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AppUtils");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
var className=$I$(1).getMainClassName$();
C$.mainClass=className == null  ? null : $I$(2).load$S(className);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['mainClass','Class']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMainClass$', function () {
return C$.mainClass;
}, 1);

Clazz.newMeth(C$, 'getBaseDirectory$S$Class$S', function (sysProp, c, baseSubdirectory) {
var property=System.getProperty$S(sysProp);
if (property != null ) {
var dir=Clazz.new_($I$(3,1).c$$S,[property]);
if (dir.isDirectory$()) return dir;
}var basePath=C$.getBaseDirectory$Class$S(c, baseSubdirectory);
if (basePath != null ) return basePath;
var mc=C$.getMainClass$();
var appPath=mc == null  ? null : C$.getBaseDirectory$Class(mc);
if (appPath != null ) return appPath;
return Clazz.new_($I$(3,1).c$$S,["."]).getAbsoluteFile$();
}, 1);

Clazz.newMeth(C$, 'getBaseDirectory$Class', function (c) {
return C$.getBaseDirectory$Class$S(c, null);
}, 1);

Clazz.newMeth(C$, 'getBaseDirectory$Class$S', function (c, baseSubdirectory) {
var location=$I$(2).location$Class(c);
var baseFile;
try {
baseFile=$I$(4).urlToFile$java_net_URL(location);
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalArgumentException")){
baseFile=null;
} else {
throw exc;
}
}
return C$.getBaseDirectory$java_io_File$S(baseFile, baseSubdirectory);
}, 1);

Clazz.newMeth(C$, 'getBaseDirectory$java_io_File$S', function (classLocation, baseSubdirectory) {
if (classLocation == null ) return null;
var path=$I$(4).getPath$java_io_File(classLocation).replace$C$C("\\", "/");
if (path.contains$CharSequence("/.m2/repository/")) {
return null;
}var basePrefix="/";
if (baseSubdirectory != null ) basePrefix += baseSubdirectory + "/";
var targetClassesSuffix=basePrefix + "target/classes";
var targetTestClassesSuffix=basePrefix + "target/test-classes";
var suffixes=Clazz.array(String, -1, [targetClassesSuffix, targetTestClassesSuffix]);
for (var suffix, $suffix = 0, $$suffix = suffixes; $suffix<$$suffix.length&&((suffix=($$suffix[$suffix])),1);$suffix++) {
if (!path.endsWith$S(suffix)) continue;
path=path.substring$I$I(0, path.length$() - suffix.length$());
var dir=Clazz.new_($I$(3,1).c$$S,[path]);
if (baseSubdirectory == null ) {
while (dir.getParentFile$() != null  && Clazz.new_($I$(3,1).c$$java_io_File$S,[dir.getParentFile$(), "pom.xml"]).exists$() ){
dir=dir.getParentFile$();
}
}return dir;
}
var pattern=$I$(5).compile$S(".*(" + $I$(5).quote$S(basePrefix + "target/") + "[^/]*\\.jar)" );
var matcher=pattern.matcher$CharSequence(path);
if (matcher.matches$()) {
var index=matcher.start$I(1);
path=path.substring$I$I(0, index);
return Clazz.new_($I$(3,1).c$$S,[path]);
}if (path.endsWith$S(".jar")) {
var jarDirectory=classLocation.getParentFile$();
return jarDirectory.getParentFile$();
}return classLocation;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
