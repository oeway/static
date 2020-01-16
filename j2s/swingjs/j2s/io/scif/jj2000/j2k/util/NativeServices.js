(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),I$=[[0,'UnsatisfiedLinkError']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NativeServices");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['libState']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Class can not be instantiated"]);
}, 1);

Clazz.newMeth(C$, 'setThreadConcurrency$I', function (n) {
C$.checkLibrary$();
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
C$.setThreadConcurrencyN$I(n);
}, 1);

Clazz.newMeth(C$, 'setThreadConcurrencyN$I', function (level) {
alert('native method must be replaced! setThreadConcurrencyN');
}
, 2);

Clazz.newMeth(C$, 'getThreadConcurrency$', function () {
C$.checkLibrary$();
return C$.getThreadConcurrencyN$();
}, 1);

Clazz.newMeth(C$, 'getThreadConcurrencyN$', function () {
alert('native method must be replaced! getThreadConcurrencyN');
}
, 2);

Clazz.newMeth(C$, 'loadLibrary$', function () {
if (C$.libState == 1) return true;
try {
System.loadLibrary$S("jj2000");
} catch (e) {
if (Clazz.exceptionOf(e,"UnsatisfiedLinkError")){
C$.libState=2;
return false;
} else {
throw e;
}
}
C$.libState=1;
return true;
}, 1);

Clazz.newMeth(C$, 'checkLibrary$', function () {
switch (C$.libState) {
case 1:
return;
case 0:
if (C$.loadLibrary$()) break;
case 2:
throw Clazz.new_($I$(1,1).c$$S,["NativeServices: native shared library could not be loaded"]);
}
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
