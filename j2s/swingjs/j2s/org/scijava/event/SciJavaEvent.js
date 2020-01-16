(function(){var P$=Clazz.newPackage("org.scijava.event"),I$=[[0,'org.scijava.util.DebugUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SciJavaEvent", null, 'org.scijava.AbstractContextual');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['consumed'],'O',['callingThread','Thread','stackTrace','StackTraceElement[]']]]

Clazz.newMeth(C$, 'isConsumed$', function () {
return this.consumed;
});

Clazz.newMeth(C$, 'setConsumed$Z', function (consumed) {
this.consumed=consumed;
});

Clazz.newMeth(C$, 'consume$', function () {
this.setConsumed$Z(true);
});

Clazz.newMeth(C$, 'getCallingThread$', function () {
return this.callingThread;
});

Clazz.newMeth(C$, 'setCallingThread$Thread', function (callingThread) {
this.callingThread=callingThread;
this.stackTrace=callingThread.getStackTrace$();
});

Clazz.newMeth(C$, 'getStackTrace$', function () {
return this.stackTrace;
});

Clazz.newMeth(C$, 'dumpStack$', function () {
return $I$(1).getStackDump$Thread$StackTraceElementA(this.getCallingThread$(), this.getStackTrace$());
});

Clazz.newMeth(C$, 'toString', function () {
return "\n\tcontext = " + this.getContext$() + "\n\tconsumed = " + this.consumed ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
