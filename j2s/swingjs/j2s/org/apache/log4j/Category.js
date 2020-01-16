(function(){var P$=Clazz.newPackage("org.apache.log4j"),p$1={},I$=[[0,'org.apache.log4j.Logger',['org.apache.log4j.Category','.PrivateManager'],'org.apache.log4j.Category',['org.apache.log4j.Category','.PrivateAdapter'],'java.util.WeakHashMap','org.apache.log4j.legacy.core.CategoryUtil','java.util.concurrent.ConcurrentHashMap','org.apache.log4j.LogManager','org.apache.logging.log4j.spi.StandardLevel','org.apache.log4j.Level','org.apache.logging.log4j.Level','org.apache.log4j.helpers.NullEnumeration','org.apache.logging.log4j.message.ObjectMessage','org.apache.logging.log4j.util.Strings','org.apache.logging.log4j.message.LocalizedMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Category", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.adapter=Clazz.new_($I$(4,1));
C$.CONTEXT_MAP=Clazz.new_(1,{V:"org.apache.logging.log4j.spi.LoggerContext",K:"java.util.concurrent.ConcurrentMap"},$I$(5,1));
C$.FQCN=Clazz.getClass(C$).getName$();
{
var available;
try {
available=Clazz.forName("org.apache.logging.log4j.core.Logger") != null ;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
available=false;
} else {
throw ex;
}
}
C$.isCoreAvailable=available;
};
}

Clazz.newMeth(C$, '$init$', function () {
this.bundle=null;
}, 1);

C$.$fields$=[['O',['bundle','java.util.ResourceBundle','logger','org.apache.logging.log4j.Logger']]
,['Z',['isCoreAvailable'],'S',['FQCN'],'O',['adapter','org.apache.log4j.Category.PrivateAdapter','CONTEXT_MAP','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_spi_LoggerContext$S', function (context, name) {
;C$.$init$.apply(this);
this.logger=context.getLogger$S(name);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.c$$org_apache_logging_log4j_spi_LoggerContext$S.apply(this, [$I$(2).getContext$(), name]);
}, 1);

Clazz.newMeth(C$, 'c$$org_apache_logging_log4j_Logger', function (logger) {
;C$.$init$.apply(this);
this.logger=logger;
}, 1);

Clazz.newMeth(C$, 'getInstance$S', function (name) {
return C$.getInstance$org_apache_logging_log4j_spi_LoggerContext$S$org_apache_log4j_Category_PrivateAdapter($I$(2).getContext$(), name, C$.adapter);
}, 1);

Clazz.newMeth(C$, 'getInstance$org_apache_logging_log4j_spi_LoggerContext$S', function (context, name) {
return C$.getInstance$org_apache_logging_log4j_spi_LoggerContext$S$org_apache_log4j_Category_PrivateAdapter(context, name, C$.adapter);
}, 1);

Clazz.newMeth(C$, 'getInstance$org_apache_logging_log4j_spi_LoggerContext$S$org_apache_log4j_spi_LoggerFactory', function (context, name, factory) {
var loggers=C$.getLoggersMap$org_apache_logging_log4j_spi_LoggerContext(context);
var logger=loggers.get$O(name);
if (logger != null ) {
return logger;
}logger=factory.makeNewLoggerInstance$(name);
var prev=loggers.putIfAbsent$TK$TV(name, logger);
return prev == null  ? logger : prev;
}, 1);

Clazz.newMeth(C$, 'getInstance$org_apache_logging_log4j_spi_LoggerContext$S$org_apache_log4j_Category_PrivateAdapter', function (context, name, factory) {
var loggers=C$.getLoggersMap$org_apache_logging_log4j_spi_LoggerContext(context);
var logger=loggers.get$O(name);
if (logger != null ) {
return logger;
}logger=factory.newLogger$S$org_apache_logging_log4j_spi_LoggerContext(name, context);
var prev=loggers.putIfAbsent$TK$TV(name, logger);
return prev == null  ? logger : prev;
}, 1);

Clazz.newMeth(C$, 'getInstance$Class', function (clazz) {
return C$.getInstance$S(clazz.getName$());
}, 1);

Clazz.newMeth(C$, 'getInstance$org_apache_logging_log4j_spi_LoggerContext$Class', function (context, clazz) {
return C$.getInstance$org_apache_logging_log4j_spi_LoggerContext$S(context, clazz.getName$());
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.logger.getName$();
});

Clazz.newMeth(C$, 'getLogger$', function () {
return this.logger;
});

Clazz.newMeth(C$, 'getParent$', function () {
if (!C$.isCoreAvailable) {
return null;
}var parent=$I$(6).getParent$org_apache_logging_log4j_Logger(this.logger);
var loggerContext=$I$(6).getLoggerContext$org_apache_logging_log4j_Logger(this.logger);
if (parent == null  || loggerContext == null  ) {
return null;
}var loggers=C$.getLoggersMap$org_apache_logging_log4j_spi_LoggerContext(loggerContext);
var l=loggers.get$O(parent.getName$());
return l == null  ? Clazz.new_(C$.c$$org_apache_logging_log4j_Logger,[parent]) : l;
});

Clazz.newMeth(C$, 'getRoot$', function () {
return C$.getInstance$S("");
}, 1);

Clazz.newMeth(C$, 'getRoot$org_apache_logging_log4j_spi_LoggerContext', function (context) {
return C$.getInstance$org_apache_logging_log4j_spi_LoggerContext$S(context, "");
}, 1);

Clazz.newMeth(C$, 'getLoggersMap$org_apache_logging_log4j_spi_LoggerContext', function (context) {
{
var map=C$.CONTEXT_MAP.get$O(context);
if (map == null ) {
map=Clazz.new_(1,{V:"String",K:"org.apache.log4j.Logger"},$I$(7,1));
C$.CONTEXT_MAP.put$TK$TV(context, map);
}return map;
}}, 1);

Clazz.newMeth(C$, 'getCurrentCategories$', function () {
return $I$(8).getCurrentLoggers$();
}, 1);

Clazz.newMeth(C$, 'getEffectiveLevel$', function () {
switch (this.logger.getLevel$().getStandardLevel$()) {
case $I$(9).ALL:
return $I$(10).ALL;
case $I$(9).TRACE:
return $I$(10).TRACE;
case $I$(9).DEBUG:
return $I$(10).$DEBUG;
case $I$(9).INFO:
return $I$(10).$INFO;
case $I$(9).WARN:
return $I$(10).$WARN;
case $I$(9).ERROR:
return $I$(10).$ERROR;
case $I$(9).FATAL:
return $I$(10).$FATAL;
default:
return $I$(10).OFF;
}
});

Clazz.newMeth(C$, 'getChainedPriority$', function () {
return this.getEffectiveLevel$();
});

Clazz.newMeth(C$, 'getLevel$', function () {
return this.getEffectiveLevel$();
});

Clazz.newMeth(C$, 'setLevel$org_apache_log4j_Level', function (level) {
p$1.setLevel$S.apply(this, [level.levelStr]);
});

Clazz.newMeth(C$, 'getPriority$', function () {
return this.getEffectiveLevel$();
});

Clazz.newMeth(C$, 'setPriority$org_apache_log4j_Priority', function (priority) {
p$1.setLevel$S.apply(this, [priority.levelStr]);
});

Clazz.newMeth(C$, 'setLevel$S', function (levelStr) {
if (C$.isCoreAvailable) {
$I$(6).setLevel$org_apache_logging_log4j_Logger$org_apache_logging_log4j_Level(this.logger, $I$(11).toLevel$S(levelStr));
}}, p$1);

Clazz.newMeth(C$, 'debug$O', function (message) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).DEBUG, message, null]);
});

Clazz.newMeth(C$, 'debug$O$Throwable', function (message, t) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).DEBUG, message, t]);
});

Clazz.newMeth(C$, 'isDebugEnabled$', function () {
return this.logger.isDebugEnabled$();
});

Clazz.newMeth(C$, 'error$O', function (message) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).ERROR, message, null]);
});

Clazz.newMeth(C$, 'error$O$Throwable', function (message, t) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).ERROR, message, t]);
});

Clazz.newMeth(C$, 'isErrorEnabled$', function () {
return this.logger.isErrorEnabled$();
});

Clazz.newMeth(C$, 'warn$O', function (message) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).WARN, message, null]);
});

Clazz.newMeth(C$, 'warn$O$Throwable', function (message, t) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).WARN, message, t]);
});

Clazz.newMeth(C$, 'isWarnEnabled$', function () {
return this.logger.isWarnEnabled$();
});

Clazz.newMeth(C$, 'fatal$O', function (message) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).FATAL, message, null]);
});

Clazz.newMeth(C$, 'fatal$O$Throwable', function (message, t) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).FATAL, message, t]);
});

Clazz.newMeth(C$, 'isFatalEnabled$', function () {
return this.logger.isFatalEnabled$();
});

Clazz.newMeth(C$, 'info$O', function (message) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).INFO, message, null]);
});

Clazz.newMeth(C$, 'info$O$Throwable', function (message, t) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).INFO, message, t]);
});

Clazz.newMeth(C$, 'isInfoEnabled$', function () {
return this.logger.isInfoEnabled$();
});

Clazz.newMeth(C$, 'trace$O', function (message) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).TRACE, message, null]);
});

Clazz.newMeth(C$, 'trace$O$Throwable', function (message, t) {
p$1.maybeLog$S$org_apache_logging_log4j_Level$O$Throwable.apply(this, [C$.FQCN, $I$(11).TRACE, message, t]);
});

Clazz.newMeth(C$, 'isTraceEnabled$', function () {
return this.logger.isTraceEnabled$();
});

Clazz.newMeth(C$, 'isEnabledFor$org_apache_log4j_Priority', function (level) {
var lvl=$I$(11).toLevel$S(level.toString());
return p$1.isEnabledFor$org_apache_logging_log4j_Level.apply(this, [lvl]);
});

Clazz.newMeth(C$, 'addAppender$org_apache_log4j_Appender', function (appender) {
});

Clazz.newMeth(C$, 'callAppenders$org_apache_log4j_spi_LoggingEvent', function (event) {
});

Clazz.newMeth(C$, 'getAllAppenders$', function () {
return $I$(12).getInstance$();
});

Clazz.newMeth(C$, 'getAppender$S', function (name) {
return null;
});

Clazz.newMeth(C$, 'isAttached$org_apache_log4j_Appender', function (appender) {
return false;
});

Clazz.newMeth(C$, 'removeAllAppenders$', function () {
});

Clazz.newMeth(C$, 'removeAppender$org_apache_log4j_Appender', function (appender) {
});

Clazz.newMeth(C$, 'removeAppender$S', function (name) {
});

Clazz.newMeth(C$, 'shutdown$', function () {
}, 1);

Clazz.newMeth(C$, 'forcedLog$S$org_apache_log4j_Priority$O$Throwable', function (fqcn, level, message, t) {
var lvl=$I$(11).toLevel$S(level.toString());
var msg=Clazz.instanceOf(message, "org.apache.logging.log4j.message.Message") ? message : Clazz.new_($I$(13,1).c$$O,[message]);
if (Clazz.instanceOf(this.logger, "org.apache.logging.log4j.spi.ExtendedLogger")) {
(this.logger).logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(fqcn, lvl, null, Clazz.new_($I$(13,1).c$$O,[message]), t);
} else {
this.logger.log$org_apache_logging_log4j_Level$org_apache_logging_log4j_message_Message$Throwable(lvl, msg, t);
}});

Clazz.newMeth(C$, 'exists$S', function (name) {
return $I$(2).getContext$().hasLogger$S(name);
});

Clazz.newMeth(C$, 'getAdditivity$', function () {
return C$.isCoreAvailable ? $I$(6).isAdditive$org_apache_logging_log4j_Logger(this.logger) : false;
});

Clazz.newMeth(C$, 'setAdditivity$Z', function (additivity) {
if (C$.isCoreAvailable) {
$I$(6).setAdditivity$org_apache_logging_log4j_Logger$Z(this.logger, additivity);
}});

Clazz.newMeth(C$, 'setResourceBundle$java_util_ResourceBundle', function (bundle) {
this.bundle=bundle;
});

Clazz.newMeth(C$, 'getResourceBundle$', function () {
if (this.bundle != null ) {
return this.bundle;
}var name=this.logger.getName$();
if (C$.isCoreAvailable) {
var ctx=$I$(6).getLoggerContext$org_apache_logging_log4j_Logger(this.logger);
if (ctx != null ) {
var loggers=C$.getLoggersMap$org_apache_logging_log4j_spi_LoggerContext(ctx);
while ((name=C$.getSubName$S(name)) != null ){
var subLogger=loggers.get$O(name);
if (subLogger != null ) {
var rb=subLogger.bundle;
if (rb != null ) {
return rb;
}}}
}}return null;
});

Clazz.newMeth(C$, 'getSubName$S', function (name) {
if ($I$(14).isEmpty$CharSequence(name)) {
return null;
}var i=name.lastIndexOf$I(".");
return i > 0 ? name.substring$I$I(0, i) : "";
}, 1);

Clazz.newMeth(C$, 'assertLog$Z$S', function (assertion, msg) {
if (!assertion) {
this.error$O(msg);
}});

Clazz.newMeth(C$, 'l7dlog$org_apache_log4j_Priority$S$Throwable', function (priority, key, t) {
if (this.isEnabledFor$org_apache_log4j_Priority(priority)) {
var msg=Clazz.new_($I$(15,1).c$$java_util_ResourceBundle$S$OA,[this.bundle, key, null]);
this.forcedLog$S$org_apache_log4j_Priority$O$Throwable(C$.FQCN, priority, msg, t);
}});

Clazz.newMeth(C$, 'l7dlog$org_apache_log4j_Priority$S$OA$Throwable', function (priority, key, params, t) {
if (this.isEnabledFor$org_apache_log4j_Priority(priority)) {
var msg=Clazz.new_($I$(15,1).c$$java_util_ResourceBundle$S$OA,[this.bundle, key, params]);
this.forcedLog$S$org_apache_log4j_Priority$O$Throwable(C$.FQCN, priority, msg, t);
}});

Clazz.newMeth(C$, 'log$org_apache_log4j_Priority$O$Throwable', function (priority, message, t) {
if (this.isEnabledFor$org_apache_log4j_Priority(priority)) {
var msg=Clazz.new_($I$(13,1).c$$O,[message]);
this.forcedLog$S$org_apache_log4j_Priority$O$Throwable(C$.FQCN, priority, msg, t);
}});

Clazz.newMeth(C$, 'log$org_apache_log4j_Priority$O', function (priority, message) {
if (this.isEnabledFor$org_apache_log4j_Priority(priority)) {
var msg=Clazz.new_($I$(13,1).c$$O,[message]);
this.forcedLog$S$org_apache_log4j_Priority$O$Throwable(C$.FQCN, priority, msg, null);
}});

Clazz.newMeth(C$, 'log$S$org_apache_log4j_Priority$O$Throwable', function (fqcn, priority, message, t) {
if (this.isEnabledFor$org_apache_log4j_Priority(priority)) {
var msg=Clazz.new_($I$(13,1).c$$O,[message]);
this.forcedLog$S$org_apache_log4j_Priority$O$Throwable(fqcn, priority, msg, t);
}});

Clazz.newMeth(C$, 'maybeLog$S$org_apache_logging_log4j_Level$O$Throwable', function (fqcn, level, message, throwable) {
if (this.logger.isEnabled$org_apache_logging_log4j_Level(level)) {
if (Clazz.instanceOf(this.logger, "org.apache.logging.log4j.spi.ExtendedLogger")) {
(this.logger).logMessage$S$org_apache_logging_log4j_Level$org_apache_logging_log4j_Marker$org_apache_logging_log4j_message_Message$Throwable(fqcn, level, null, Clazz.new_($I$(13,1).c$$O,[message]), throwable);
} else {
this.logger.log$org_apache_logging_log4j_Level$O$Throwable(level, message, throwable);
}}}, p$1);

Clazz.newMeth(C$, 'isEnabledFor$org_apache_logging_log4j_Level', function (level) {
return this.logger.isEnabled$org_apache_logging_log4j_Level(level);
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Category, "PrivateAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.apache.logging.log4j.spi.AbstractLoggerAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newLogger$S$org_apache_logging_log4j_spi_LoggerContext', function (name, context) {
return Clazz.new_($I$(1,1).c$$org_apache_logging_log4j_spi_LoggerContext$S,[context, name]);
});

Clazz.newMeth(C$, 'getContext$', function () {
return $I$(2).getContext$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Category, "PrivateManager", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.apache.logging.log4j.LogManager');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.$FQCN=Clazz.getClass($I$(3)).getName$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['$FQCN']]]

Clazz.newMeth(C$, 'getContext$', function () {
return org.apache.logging.log4j.LogManager.getContext$S$Z(C$.$FQCN, false);
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return org.apache.logging.log4j.LogManager.getLogger$S$S(C$.$FQCN, name);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:27:32 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
