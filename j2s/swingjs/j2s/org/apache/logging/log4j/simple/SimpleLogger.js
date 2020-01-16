(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.simple"),I$=[[0,'org.apache.logging.log4j.Level','java.text.SimpleDateFormat','StringBuilder','java.util.Date','org.apache.logging.log4j.util.Strings','org.apache.logging.log4j.ThreadContext']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleLogger", null, 'org.apache.logging.log4j.spi.AbstractLogger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['showDateTime','showContextMap'],'S',['logName'],'O',['dateFormatter','java.text.DateFormat','level','org.apache.logging.log4j.Level','stream','java.io.PrintStream']]
,['C',['SPACE'],'L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_Level$Z$Z$Z$Z$S$org_apache_logging_log4j_message_MessageFactory$org_apache_logging_log4j_util_PropertiesUtil$java_io_PrintStream', function (name, defaultLevel, showLogName, showShortLogName, showDateTime, showContextMap, dateTimeFormat, messageFactory, props, stream) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_MessageFactory.apply(this, [name, messageFactory]);C$.$init$.apply(this);
var lvl=props.getStringProperty$S("org.apache.logging.log4j.simplelog." + name + ".level" );
this.level=$I$(1).toLevel$S$org_apache_logging_log4j_Level(lvl, defaultLevel);
if (showShortLogName) {
var index=name.lastIndexOf$S(".");
if (index > 0 && index < name.length$() ) {
this.logName=name.substring$I(index + 1);
} else {
this.logName=name;
}} else if (showLogName) {
this.logName=name;
} else {
this.logName=null;
}this.showDateTime=showDateTime;
this.showContextMap=showContextMap;
this.stream=stream;
if (showDateTime) {
var format;
try {
format=Clazz.new_($I$(2,1).c$$S,[dateTimeFormat]);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
format=Clazz.new_($I$(2,1).c$$S,["yyyy/MM/dd HH:mm:ss:SSS zzz"]);
} else {
throw e;
}
}
this.dateFormatter=format;
} else {
this.dateFormatter=null;
}}, 1);

Clazz.newMeth(C$, 'getLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (testLevel, marker, msg, t) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (testLevel, marker, msg, t) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable', function (testLevel, marker, msg, t) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S', function (testLevel, marker, msg) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (testLevel, marker, msg, p1) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O', function (testLevel, marker, message, p0) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O', function (testLevel, marker, message, p0, p1) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O', function (testLevel, marker, message, p0, p1, p2) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3, p4) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3, p4, p5) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3, p4, p5, p6) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (testLevel, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable', function (testLevel, marker, msg, t) {
return this.level.intLevel$() >= testLevel.intLevel$();
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, mgsLevel, marker, msg, throwable) {
var sb=Clazz.new_($I$(3,1));
if (this.showDateTime) {
var now=Clazz.new_($I$(4,1));
var dateText;
{
dateText=this.dateFormatter.format$java_util_Date(now);
}sb.append$S(dateText);
sb.append$C(" ");
}sb.append$S(mgsLevel.toString());
sb.append$C(" ");
if ($I$(5).isNotEmpty$CharSequence(this.logName)) {
sb.append$S(this.logName);
sb.append$C(" ");
}sb.append$S(msg.getFormattedMessage$());
if (this.showContextMap) {
var mdc=$I$(6).getImmutableContext$();
if (mdc.size$() > 0) {
sb.append$C(" ");
sb.append$S(mdc.toString());
sb.append$C(" ");
}}var params=msg.getParameters$();
var t;
if (throwable == null  && params != null   && params.length > 0  && Clazz.instanceOf(params[params.length - 1], "java.lang.Throwable") ) {
t=params[params.length - 1];
} else {
t=throwable;
}this.stream.println$S(sb.toString());
if (t != null ) {
this.stream.print$C(" ");
t.printStackTrace$java_io_PrintStream(this.stream);
}});

Clazz.newMeth(C$, 'setLevel$org_apache_logging_log4j_Level', function (level) {
if (level != null ) {
this.level=level;
}});

Clazz.newMeth(C$, 'setStream$java_io_PrintStream', function (stream) {
this.stream=stream;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
