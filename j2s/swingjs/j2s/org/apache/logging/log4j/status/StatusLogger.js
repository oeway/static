(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.status"),p$1={},I$=[[0,'org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.message.ParameterizedNoReferenceMessageFactory','java.util.concurrent.CopyOnWriteArrayList','java.util.concurrent.locks.ReentrantReadWriteLock',['org.apache.logging.log4j.status.StatusLogger','.BoundedQueue'],'java.util.concurrent.locks.ReentrantLock','org.apache.logging.log4j.util.Strings','org.apache.logging.log4j.simple.SimpleLogger','org.apache.logging.log4j.Level','java.util.ArrayList','Thread','org.apache.logging.log4j.status.StatusData']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StatusLogger", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.apache.logging.log4j.spi.AbstractLogger');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PROPS=Clazz.new_($I$(1,1).c$$S,["log4j2.StatusLogger.properties"]);
C$.MAX_ENTRIES=C$.PROPS.getIntegerProperty$S$I("log4j2.status.entries", 200);
C$.DEFAULT_STATUS_LEVEL=C$.PROPS.getStringProperty$S("log4j2.StatusLogger.level");
C$.STATUS_LOGGER=Clazz.new_(C$.c$$S$org_apache_logging_log4j_message_MessageFactory,[Clazz.getClass(C$).getName$(), $I$(2).INSTANCE]);
}

Clazz.newMeth(C$, '$init$', function () {
this.listeners=Clazz.new_(1,{E:"org.apache.logging.log4j.status.StatusListener"},$I$(3,1));
this.listenersLock=Clazz.new_($I$(4,1));
this.messages=Clazz.new_(1,{E:"org.apache.logging.log4j.status.StatusData"},$I$(5,1).c$$I, [this, null, C$.MAX_ENTRIES]);
this.msgLock=Clazz.new_($I$(6,1));
}, 1);

C$.$fields$=[['I',['listenersLevel'],'O',['logger','org.apache.logging.log4j.simple.SimpleLogger','listeners','java.util.Collection','listenersLock','java.util.concurrent.locks.ReadWriteLock','messages','java.util.Queue','msgLock','java.util.concurrent.locks.Lock']]
,['I',['MAX_ENTRIES'],'L',['serialVersionUID'],'S',['MAX_STATUS_ENTRIES','DEFAULT_STATUS_LISTENER_LEVEL','STATUS_DATE_FORMAT','NOT_AVAIL','DEFAULT_STATUS_LEVEL'],'O',['PROPS','org.apache.logging.log4j.util.PropertiesUtil','STATUS_LOGGER','org.apache.logging.log4j.status.StatusLogger']]]

Clazz.newMeth(C$, 'c$$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
;C$.superclazz.c$$S$org_apache_logging_log4j_message_MessageFactory.apply(this, [name, messageFactory]);C$.$init$.apply(this);
var dateFormat=C$.PROPS.getStringProperty$S$S("log4j2.StatusLogger.DateFormat", "");
var showDateTime=!$I$(7).isEmpty$CharSequence(dateFormat);
this.logger=Clazz.new_($I$(8,1).c$$S$org_apache_logging_log4j_Level$Z$Z$Z$Z$S$org_apache_logging_log4j_message_MessageFactory$org_apache_logging_log4j_util_PropertiesUtil$java_io_PrintStream,["StatusLogger", $I$(9).ERROR, false, true, showDateTime, false, dateFormat, messageFactory, C$.PROPS, System.err]);
this.listenersLevel=$I$(9).toLevel$S$org_apache_logging_log4j_Level(C$.DEFAULT_STATUS_LEVEL, $I$(9).WARN).intLevel$();
if (p$1.isDebugPropertyEnabled.apply(this, [])) {
this.logger.setLevel$org_apache_logging_log4j_Level($I$(9).TRACE);
}}, 1);

Clazz.newMeth(C$, 'isDebugPropertyEnabled', function () {
return $I$(1).getProperties$().getBooleanProperty$S$Z$Z("log4j2.debug", false, true);
}, p$1);

Clazz.newMeth(C$, 'getLogger$', function () {
return C$.STATUS_LOGGER;
}, 1);

Clazz.newMeth(C$, 'setLevel$org_apache_logging_log4j_Level', function (level) {
this.logger.setLevel$org_apache_logging_log4j_Level(level);
});

Clazz.newMeth(C$, 'registerListener$org_apache_logging_log4j_status_StatusListener', function (listener) {
this.listenersLock.writeLock$().lock$();
try {
this.listeners.add$TE(listener);
var lvl=listener.getStatusLevel$();
if (this.listenersLevel < lvl.intLevel$()) {
this.listenersLevel=lvl.intLevel$();
}} finally {
this.listenersLock.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'removeListener$org_apache_logging_log4j_status_StatusListener', function (listener) {
C$.closeSilently$java_io_Closeable(listener);
this.listenersLock.writeLock$().lock$();
try {
this.listeners.remove$O(listener);
var lowest=$I$(9).toLevel$S$org_apache_logging_log4j_Level(C$.DEFAULT_STATUS_LEVEL, $I$(9).WARN).intLevel$();
for (var statusListener, $statusListener = this.listeners.iterator$(); $statusListener.hasNext$()&&((statusListener=($statusListener.next$())),1);) {
var level=statusListener.getStatusLevel$().intLevel$();
if (lowest < level) {
lowest=level;
}}
this.listenersLevel=lowest;
} finally {
this.listenersLock.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'updateListenerLevel$org_apache_logging_log4j_Level', function (status) {
if (status.intLevel$() > this.listenersLevel) {
this.listenersLevel=status.intLevel$();
}});

Clazz.newMeth(C$, 'getListeners$', function () {
return this.listeners;
});

Clazz.newMeth(C$, 'reset$', function () {
this.listenersLock.writeLock$().lock$();
try {
for (var listener, $listener = this.listeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) {
C$.closeSilently$java_io_Closeable(listener);
}
} finally {
this.listeners.clear$();
this.listenersLock.writeLock$().unlock$();
this.clear$();
}
});

Clazz.newMeth(C$, 'closeSilently$java_io_Closeable', function (resource) {
try {
resource.close$();
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"java.io.IOException")){
} else {
throw ignored;
}
}
}, 1);

Clazz.newMeth(C$, 'getStatusData$', function () {
this.msgLock.lock$();
try {
return Clazz.new_(1,{E:"org.apache.logging.log4j.status.StatusData"},$I$(10,1).c$$java_util_Collection,[this.messages]);
} finally {
this.msgLock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$', function () {
this.msgLock.lock$();
try {
this.messages.clear$();
} finally {
this.msgLock.unlock$();
}
});

Clazz.newMeth(C$, 'getLevel$', function () {
return this.logger.getLevel$();
});

Clazz.newMeth(C$, 'logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (fqcn, level, marker, msg, t) {
var element=null;
if (fqcn != null ) {
element=p$1.getStackTraceElement$S$StackTraceElementA.apply(this, [fqcn, $I$(11).currentThread$().getStackTrace$()]);
}var data=Clazz.new_($I$(12,1).c$$StackTraceElement$org_apache_logging_log4j_Level$org_apache_logging_log4j_message_Message$Throwable$S,[element, level, msg, t, null]);
this.msgLock.lock$();
try {
this.messages.add$TE(data);
} finally {
this.msgLock.unlock$();
}
if (p$1.isDebugPropertyEnabled.apply(this, [])) {
this.logger.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(fqcn, level, marker, msg, t);
} else {
if (this.listeners.size$() > 0) {
for (var listener, $listener = this.listeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) {
if (data.getLevel$().isMoreSpecificThan$org_apache_logging_log4j_Level(listener.getStatusLevel$())) {
listener.log$org_apache_logging_log4j_status_StatusData(data);
}}
} else {
this.logger.logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(fqcn, level, marker, msg, t);
}}});

Clazz.newMeth(C$, 'getStackTraceElement$S$StackTraceElementA', function (fqcn, stackTrace) {
if (fqcn == null ) {
return null;
}var next=false;
for (var element, $element = 0, $$element = stackTrace; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
var className=element.getClassName$();
if (next && !fqcn.equals$O(className) ) {
return element;
}if (fqcn.equals$O(className)) {
next=true;
} else if ("?".equals$O(className)) {
break;
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$Throwable', function (level, marker, message, t) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S', function (level, marker, message) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$OA', function (level, marker, message, params) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O', function (level, marker, message, p0) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O', function (level, marker, message, p0, p1) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O', function (level, marker, message, p0, p1, p2) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O', function (level, marker, message, p0, p1, p2, p3) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$S$O$O$O$O$O$O$O$O$O$O', function (level, marker, message, p0, p1, p2, p3, p4, p5, p6, p7, p8, p9) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$CharSequence$Throwable', function (level, marker, message, t) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$O$Throwable', function (level, marker, message, t) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable', function (level, marker, message, t) {
return this.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});

Clazz.newMeth(C$, 'isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker', function (level, marker) {
if (p$1.isDebugPropertyEnabled.apply(this, [])) {
return true;
}if (this.listeners.size$() > 0) {
return this.listenersLevel >= level.intLevel$();
}return this.logger.isEnabled$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker(level, marker);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.StatusLogger, "BoundedQueue", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.ConcurrentLinkedQueue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['size']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$$I', function (size) {
Clazz.super_(C$, this);
this.size=size;
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (object) {
C$.superclazz.prototype.add$TE.apply(this, [object]);
while (this.this$0.messages.size$() > this.size){
this.this$0.messages.poll$();
}
return this.size > 0;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
