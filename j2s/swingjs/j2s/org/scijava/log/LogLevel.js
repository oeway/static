(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LogLevel");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'prefix$I', function (level) {
switch (level) {
case 1:
return "ERROR";
case 2:
return "WARNING";
case 3:
return "INFO";
case 4:
return "DEBUG";
case 5:
return "TRACE";
default:
return "LEVEL" + level;
}
}, 1);

Clazz.newMeth(C$, 'value$S', function (s) {
if (s == null ) return -1;
var log=s.trim$().toLowerCase$();
if (log.startsWith$S("n")) return 0;
if (log.startsWith$S("e")) return 1;
if (log.startsWith$S("w")) return 2;
if (log.startsWith$S("i")) return 3;
if (log.startsWith$S("d")) return 4;
if (log.startsWith$S("t")) return 5;
try {
return Integer.parseInt$S(log);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
} else {
throw exc;
}
}
return -1;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
