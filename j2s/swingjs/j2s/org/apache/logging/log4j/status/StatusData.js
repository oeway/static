(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.status"),I$=[[0,'Thread','StringBuilder','java.text.SimpleDateFormat','java.util.Date','java.io.ByteArrayOutputStream','java.io.PrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StatusData", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['timestamp'],'S',['threadName'],'O',['$caller','StackTraceElement','level','org.apache.logging.log4j.Level','msg','org.apache.logging.log4j.message.Message','throwable','Throwable']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$StackTraceElement$org_apache_logging_log4j_Level$org_apache_logging_log4j_message_Message$Throwable$S', function ($caller, level, msg, t, threadName) {
;C$.$init$.apply(this);
this.timestamp=System.currentTimeMillis$();
this.$caller=$caller;
this.level=level;
this.msg=msg;
this.throwable=t;
this.threadName=threadName;
}, 1);

Clazz.newMeth(C$, 'getTimestamp$', function () {
return this.timestamp;
});

Clazz.newMeth(C$, 'getStackTraceElement$', function () {
return this.$caller;
});

Clazz.newMeth(C$, 'getLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return this.msg;
});

Clazz.newMeth(C$, 'getThreadName$', function () {
if (this.threadName == null ) {
this.threadName=$I$(1).currentThread$().getName$();
}return this.threadName;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return this.throwable;
});

Clazz.newMeth(C$, 'getFormattedStatus$', function () {
var sb=Clazz.new_($I$(2,1));
var format=Clazz.new_($I$(3,1).c$$S,["yyyy-MM-dd HH:mm:ss,SSS"]);
sb.append$S(format.format$java_util_Date(Clazz.new_($I$(4,1).c$$J,[this.timestamp])));
sb.append$C(" ");
sb.append$S(this.getThreadName$());
sb.append$C(" ");
sb.append$S(this.level.toString());
sb.append$C(" ");
sb.append$S(this.msg.getFormattedMessage$());
var params=this.msg.getParameters$();
var t;
if (this.throwable == null  && params != null   && Clazz.instanceOf(params[params.length - 1], "java.lang.Throwable") ) {
t=params[params.length - 1];
} else {
t=this.throwable;
}if (t != null ) {
sb.append$C(" ");
var baos=Clazz.new_($I$(5,1));
t.printStackTrace$java_io_PrintStream(Clazz.new_($I$(6,1).c$$java_io_OutputStream,[baos]));
sb.append$S(baos.toString());
}return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
