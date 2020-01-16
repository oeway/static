(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.security.AccessController','sun.security.action.GetPropertyAction','java.io.File','sun.misc.PerformanceLogger','java.io.FileWriter','java.io.OutputStreamWriter','java.util.Vector',['sun.misc.PerformanceLogger','.TimeData']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PerformanceLogger", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TimeData',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.perfLoggingOn=false;
C$.useNanoTime=false;
C$.logFileName=null;
C$.logWriter=null;
{
var perfLoggingProp=$I$(1).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(2,1).c$$S,["sun.perflog"]));
if (perfLoggingProp != null ) {
C$.perfLoggingOn=true;
var perfNanoProp=$I$(1).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(2,1).c$$S,["sun.perflog.nano"]));
if (perfNanoProp != null ) {
C$.useNanoTime=true;
}if (perfLoggingProp.regionMatches$Z$I$S$I$I(true, 0, "file:", 0, 5)) {
C$.logFileName=perfLoggingProp.substring$I(5);
}if (C$.logFileName != null ) {
if (C$.logWriter == null ) {
$I$(1).doPrivileged$java_security_PrivilegedAction(((P$.PerformanceLogger$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PerformanceLogger$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$', function () {
try {
var logFile=Clazz.new_($I$(3,1).c$$S,[$I$(4).logFileName]);
logFile.createNewFile$();
$I$(4).logWriter=Clazz.new_($I$(5,1).c$$java_io_File,[logFile]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e + ": Creating logfile " + $I$(4).logFileName + ".  Log to console" );
} else {
throw e;
}
}
return null;
});
})()
), Clazz.new_(P$.PerformanceLogger$1.$init$, [this, null])));
}}if (C$.logWriter == null ) {
C$.logWriter=Clazz.new_($I$(6,1).c$$java_io_OutputStream,[System.out]);
}}C$.times=Clazz.new_(1,{E:"sun.misc.PerformanceLogger.TimeData"},$I$(7,1).c$$I,[10]);
for (var i=0; i <= 0; ++i) {
C$.times.add$TE(Clazz.new_($I$(8,1).c$$S$J,["Time " + i + " not set" , 0]));
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['perfLoggingOn','useNanoTime'],'L',['baseTime'],'S',['logFileName'],'O',['times','java.util.Vector','logWriter','java.io.Writer']]]

Clazz.newMeth(C$, 'loggingEnabled$', function () {
return C$.perfLoggingOn;
}, 1);

Clazz.newMeth(C$, 'getCurrentTime$', function () {
if (C$.useNanoTime) {
return System.nanoTime$();
} else {
return System.currentTimeMillis$();
}}, 1);

Clazz.newMeth(C$, 'setStartTime$S', function (message) {
if (C$.loggingEnabled$()) {
var nowTime=C$.getCurrentTime$();
C$.setStartTime$S$J(message, nowTime);
}}, 1);

Clazz.newMeth(C$, 'setBaseTime$J', function (time) {
if (C$.loggingEnabled$()) {
C$.baseTime=time;
}}, 1);

Clazz.newMeth(C$, 'setStartTime$S$J', function (message, time) {
if (C$.loggingEnabled$()) {
C$.times.set$I$TE(0, Clazz.new_($I$(8,1).c$$S$J,[message, time]));
}}, 1);

Clazz.newMeth(C$, 'getStartTime$', function () {
if (C$.loggingEnabled$()) {
return C$.times.get$I(0).getTime$();
} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'setTime$S', function (message) {
if (C$.loggingEnabled$()) {
var nowTime=C$.getCurrentTime$();
return C$.setTime$S$J(message, nowTime);
} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'setTime$S$J', function (message, time) {
if (C$.loggingEnabled$()) {
{
C$.times.add$TE(Clazz.new_($I$(8,1).c$$S$J,[message, time]));
return (C$.times.size$() - 1);
}} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'getTimeAtIndex$I', function (index) {
if (C$.loggingEnabled$()) {
return C$.times.get$I(index).getTime$();
} else {
return 0;
}}, 1);

Clazz.newMeth(C$, 'getMessageAtIndex$I', function (index) {
if (C$.loggingEnabled$()) {
return C$.times.get$I(index).getMessage$();
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'outputLog$java_io_Writer', function (writer) {
if (C$.loggingEnabled$()) {
try {
{
for (var i=0; i < C$.times.size$(); ++i) {
var td=C$.times.get$I(i);
if (td != null ) {
writer.write$S(i + " " + td.getMessage$() + ": " + (td.getTime$() - C$.baseTime) + "\n" );
}}
}writer.flush$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e + ": Writing performance log to " + writer );
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'outputLog$', function () {
C$.outputLog$java_io_Writer(C$.logWriter);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.PerformanceLogger, "TimeData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['time'],'S',['message']]]

Clazz.newMeth(C$, 'c$$S$J', function (message, time) {
;C$.$init$.apply(this);
this.message=message;
this.time=time;
}, 1);

Clazz.newMeth(C$, 'getMessage$', function () {
return this.message;
});

Clazz.newMeth(C$, 'getTime$', function () {
return this.time;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
