(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,'Runtime','java.io.PrintStream','org.scijava.util.ReadInto','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProcessUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'exec$java_io_File$java_io_PrintStream$java_io_PrintStream$SA', function (workingDirectory, err, out, args) {
return C$.exec$java_io_File$java_io_InputStream$java_io_PrintStream$java_io_PrintStream$SA(workingDirectory, null, err, out, args);
}, 1);

Clazz.newMeth(C$, 'exec$java_io_File$java_io_InputStream$java_io_PrintStream$java_io_PrintStream$SA', function (workingDirectory, $in, err, out, args) {
try {
var process=$I$(1).getRuntime$().exec$SA$SA$java_io_File(args, null, workingDirectory);
var inThread;
if ($in == null ) {
inThread=null;
process.getOutputStream$().close$();
} else {
var print=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[process.getOutputStream$()]);
inThread=Clazz.new_($I$(3,1).c$$java_io_InputStream$java_io_PrintStream$Z,[$in, print, true]);
}var errThread=Clazz.new_($I$(3,1).c$$java_io_InputStream$java_io_PrintStream,[process.getErrorStream$(), err]);
var outThread=Clazz.new_($I$(3,1).c$$java_io_InputStream$java_io_PrintStream,[process.getInputStream$(), out]);
try {
process.waitFor$();
if (inThread != null ) {
inThread.done$();
inThread.join$();
}errThread.join$();
outThread.join$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
process.destroy$();
if (inThread != null ) inThread.interrupt$();
errThread.done$();
errThread.interrupt$();
outThread.done$();
outThread.interrupt$();
err.println$S("Interrupted!");
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
if (process.exitValue$() != 0) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["exit status " + process.exitValue$() + ": " + $I$(4).toString$OA(args) + "\n" + err ]);
}return outThread.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
