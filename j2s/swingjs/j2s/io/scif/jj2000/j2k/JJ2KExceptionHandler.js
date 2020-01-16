(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k"),I$=[[0,'ThreadDeath']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JJ2KExceptionHandler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'handleException$Throwable', function (e) {
e.fillInStackTrace$();
e.printStackTrace$();
System.err.println$S("The Thread is being terminated bacause an Exception (shown above)\nhas been thrown and no special action was defined for this Thread.");
throw Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
