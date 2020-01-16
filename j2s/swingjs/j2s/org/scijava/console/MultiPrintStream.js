(function(){var P$=Clazz.newPackage("org.scijava.console"),I$=[[0,'org.scijava.console.MultiOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MultiPrintStream", null, 'java.io.PrintStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (os) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[C$.multi$java_io_OutputStream(os)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParent$', function () {
return this.out;
});

Clazz.newMeth(C$, 'multi$java_io_OutputStream', function (os) {
if (Clazz.instanceOf(os, "org.scijava.console.MultiOutputStream")) return os;
return Clazz.new_($I$(1,1).c$$java_io_OutputStreamA,[[os]]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
