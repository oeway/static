(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.io.PrintWriter','java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LowLevelLogUtil");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.writer=Clazz.new_($I$(1,1).c$$java_io_OutputStream$Z,[System.err, true]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['writer','java.io.PrintWriter']]]

Clazz.newMeth(C$, 'log$S', function (message) {
if (message != null ) {
C$.writer.println$S(message);
}}, 1);

Clazz.newMeth(C$, 'logException$Throwable', function (exception) {
if (exception != null ) {
exception.printStackTrace$java_io_PrintWriter(C$.writer);
}}, 1);

Clazz.newMeth(C$, 'logException$S$Throwable', function (message, exception) {
C$.log$S(message);
C$.logException$Throwable(exception);
}, 1);

Clazz.newMeth(C$, 'setOutputStream$java_io_OutputStream', function (out) {
C$.writer=Clazz.new_($I$(1,1).c$$java_io_OutputStream$Z,[$I$(2).requireNonNull$TT(out), true]);
}, 1);

Clazz.newMeth(C$, 'setWriter$java_io_Writer', function (writer) {
C$.writer=Clazz.new_($I$(1,1).c$$java_io_Writer$Z,[$I$(2).requireNonNull$TT(writer), true]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
