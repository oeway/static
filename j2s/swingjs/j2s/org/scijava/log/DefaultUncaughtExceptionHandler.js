(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[[0,'Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultUncaughtExceptionHandler", null, null, [['Thread','Thread.UncaughtExceptionHandler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogService', function (log) {
;C$.$init$.apply(this);
this.log=log;
}, 1);

Clazz.newMeth(C$, ['uncaughtException$Thread$Throwable','uncaughtException$'], function (thread, throwable) {
this.log.error$O$Throwable("Uncaught exception in thread " + thread, throwable);
});

Clazz.newMeth(C$, 'handle$Exception', function (exception) {
this.log.error$O$Throwable("Uncaught exception on the Event Dispatch Thread", exception);
});

Clazz.newMeth(C$, 'install$org_scijava_log_LogService', function (log) {
var handler=Clazz.new_(C$.c$$org_scijava_log_LogService,[log]);
$I$(1).setDefaultUncaughtExceptionHandler$Thread_UncaughtExceptionHandler(handler);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
