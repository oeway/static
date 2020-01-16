(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlatformUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isWindows$', function () {
return C$.osName$().startsWith$S("Win");
}, 1);

Clazz.newMeth(C$, 'isMac$', function () {
return C$.osName$().startsWith$S("Mac");
}, 1);

Clazz.newMeth(C$, 'isLinux$', function () {
return C$.osName$().startsWith$S("Linux");
}, 1);

Clazz.newMeth(C$, 'isPOSIX$', function () {
return C$.isMac$() || C$.isLinux$() ;
}, 1);

Clazz.newMeth(C$, 'osName$', function () {
var osName=System.getProperty$S("os.name");
return osName == null  ? "Unknown" : osName;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
