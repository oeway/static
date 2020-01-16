(function(){var P$=Clazz.newPackage("org.bushe.swing.exception"),I$=[[0,'java.io.PrintWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SwingException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['callingStackTrace','StackTraceElement[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
;C$.superclazz.c$$Throwable.apply(this,[cause]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable$StackTraceElementA', function (message, cause, callingStack) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.setCallingStack$StackTraceElementA(callingStack);
}, 1);

Clazz.newMeth(C$, 'setCallingStack$StackTraceElementA', function (swingCallingStack) {
this.callingStackTrace=swingCallingStack;
});

Clazz.newMeth(C$, 'getCallingStack$', function () {
return this.callingStackTrace;
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintStream', function (ps) {
var pw=Clazz.new_($I$(1,1).c$$java_io_OutputStream$Z,[ps, true]);
this.printStackTrace$java_io_PrintWriter(pw);
});

Clazz.newMeth(C$, 'printStackTrace$java_io_PrintWriter', function (pw) {
pw.println$O(this);
if (this.callingStackTrace != null ) {
pw.println$S("Calling stack:");
for (var i=0; i < this.callingStackTrace.length; i++) {
pw.println$S("\tat " + this.callingStackTrace[i]);
}
pw.println$S("Stack after call:");
}C$.superclazz.prototype.printStackTrace$java_io_PrintWriter.apply(this, [pw]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
