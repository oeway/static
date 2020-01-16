(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.concurrent.locks.ReentrantReadWriteLock','java.util.HashSet','org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.LogManager']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractLoggerAdapter", null, null, ['org.apache.logging.log4j.spi.LoggerAdapter', 'org.apache.logging.log4j.spi.LoggerContextShutdownAware']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.registry=Clazz.new_(1,{V:"org.apache.logging.log4j.spi.LoggerContext",K:"java.util.concurrent.ConcurrentMap"},$I$(1,1));
this.lock=Clazz.new_($I$(2,1).c$$Z,[true]);
}, 1);

C$.$fields$=[['O',['registry','java.util.Map','lock','java.util.concurrent.locks.ReadWriteLock']]]

Clazz.newMeth(C$, 'getLogger$S', function (name) {
var context=this.getContext$();
var loggers=this.getLoggersInContext$org_apache_logging_log4j_spi_LoggerContext(context);
var logger=loggers.get$O(name);
if (logger != null ) {
return logger;
}loggers.putIfAbsent$TK$TV(name, this.newLogger$S$org_apache_logging_log4j_spi_LoggerContext(name, context));
return loggers.get$O(name);
});

Clazz.newMeth(C$, ['contextShutdown$org_apache_logging_log4j_spi_LoggerContext','contextShutdown$'], function (loggerContext) {
this.registry.remove$O(loggerContext);
});

Clazz.newMeth(C$, ['getLoggersInContext$org_apache_logging_log4j_spi_LoggerContext'], function (context) {
var loggers;
this.lock.readLock$().lock$();
try {
loggers=this.registry.get$O(context);
} finally {
this.lock.readLock$().unlock$();
}
if (loggers != null ) {
return loggers;
}this.lock.writeLock$().lock$();
try {
loggers=this.registry.get$O(context);
if (loggers == null ) {
loggers=Clazz.new_(1,{V:"String",K:"Object"},$I$(1,1));
this.registry.put$TK$TV(context, loggers);
if (Clazz.instanceOf(context, "org.apache.logging.log4j.spi.LoggerContextShutdownEnabled")) {
(context).addShutdownListener$org_apache_logging_log4j_spi_LoggerContextShutdownAware(this);
}}return loggers;
} finally {
this.lock.writeLock$().unlock$();
}
});

Clazz.newMeth(C$, 'getLoggerContexts$', function () {
return Clazz.new_(1,{E:"org.apache.logging.log4j.spi.LoggerContext"},$I$(3,1).c$$java_util_Collection,[this.registry.keySet$()]);
});

Clazz.newMeth(C$, 'getContext$Class', function (callerClass) {
var cl=null;
if (callerClass != null ) {
cl=callerClass.getClassLoader$();
}if (cl == null ) {
cl=$I$(4).getThreadContextClassLoader$();
}return $I$(5).getContext$ClassLoader$Z(cl, false);
});

Clazz.newMeth(C$, 'close$', function () {
this.lock.writeLock$().lock$();
try {
this.registry.clear$();
} finally {
this.lock.writeLock$().unlock$();
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
