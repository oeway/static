(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),p$1={},I$=[[0,'Throwable',['org.bushe.swing.event.Logger','.LoggerType'],'java.util.logging.Logger',['org.bushe.swing.event.Logger','.Level'],'java.util.logging.Level','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Logger", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LoggerType',25],['Level',25]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EMPTY_ARGS=Clazz.array(java.lang.Object, [0]);
C$.CLASS_ARGS_EMPTY=Clazz.array(Class, [0]);
C$.CLASS_ARGS_ONE=Clazz.array(Class, -1, [Clazz.getClass(java.lang.Object)]);
C$.CLASS_ARGS_TWO=Clazz.array(Class, -1, [Clazz.getClass(java.lang.Object), Clazz.getClass($I$(1))]);
C$.LOGGER_TYPE=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['utilLogger','java.util.logging.Logger','commonsLogger','java.lang.Object','METHOD_CACHE_NO_PARAMS','java.util.Map','+METHOD_CACHE_ONE_PARAM','+METHOD_CACHE_TWO_PARAMS']]
,['O',['logFactoryClass','Class','+logClass','getLogMethod','java.lang.reflect.Method','EMPTY_ARGS','Object[]','CLASS_ARGS_EMPTY','Class[]','+CLASS_ARGS_ONE','+CLASS_ARGS_TWO','LOGGER_TYPE','org.bushe.swing.event.Logger.LoggerType']]]

Clazz.newMeth(C$, 'getLogger$S', function (name) {
if (C$.LOGGER_TYPE == null ) {
C$.LOGGER_TYPE=C$.getLoggerType$();
}if (C$.LOGGER_TYPE === $I$(2).COMMONS ) {
try {
var logger=C$.getLogMethod.invoke$O$OA(null, [name]);
return Clazz.new_(C$.c$$O,[logger]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
}
}return Clazz.new_(C$.c$$java_util_logging_Logger,[$I$(3).getLogger$S(name)]);
}, 1);

Clazz.newMeth(C$, 'getLoggerType$', function () {
var result=$I$(2).JAVA;

return result;
try {
C$.logFactoryClass=Clazz.forName("org.apache.commons.logging.LogFactory");
C$.getLogMethod=C$.logFactoryClass.getMethod$S$ClassA("getLog", Clazz.array(Class, -1, [Clazz.getClass(String)]));
C$.logClass=Clazz.forName("org.apache.commons.logging.Log");
return $I$(2).COMMONS;
} catch (e) {
}
return $I$(2).JAVA;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_logging_Logger', function (utilLogger) {
;C$.$init$.apply(this);
this.utilLogger=utilLogger;
}, 1);

Clazz.newMeth(C$, 'c$$O', function (commonsLogger) {
;C$.$init$.apply(this);
this.commonsLogger=commonsLogger;
}, 1);

Clazz.newMeth(C$, 'isLoggable$org_bushe_swing_event_Logger_Level', function (level) {
if (this.utilLogger != null ) {
var javaLevel=p$1.getJavaLevelFor$org_bushe_swing_event_Logger_Level.apply(this, [level]);
return javaLevel != null  && this.utilLogger.isLoggable$java_util_logging_Level(javaLevel) ;
} else if (this.commonsLogger != null ) {
switch (level) {
case $I$(4).ERROR:
return (p$1.callCommonsLogger$S.apply(this, ["isErrorEnabled"])).valueOf();
case $I$(4).FATAL:
return (p$1.callCommonsLogger$S.apply(this, ["isFatalEnabled"])).valueOf();
case $I$(4).WARN:
return (p$1.callCommonsLogger$S.apply(this, ["isWarnEnabled"])).valueOf();
case $I$(4).INFO:
return (p$1.callCommonsLogger$S.apply(this, ["isInfoEnabled"])).valueOf();
case $I$(4).DEBUG:
return (p$1.callCommonsLogger$S.apply(this, ["isDebugEnabled"])).valueOf();
case $I$(4).TRACE:
return (p$1.callCommonsLogger$S.apply(this, ["isTraceEnabled"])).valueOf();
}
}return false;
});

Clazz.newMeth(C$, 'getJavaLevelFor$org_bushe_swing_event_Logger_Level', function (level) {
switch (level) {
case $I$(4).FATAL:
return $I$(5).SEVERE;
case $I$(4).ERROR:
return $I$(5).SEVERE;
case $I$(4).WARN:
return $I$(5).WARNING;
case $I$(4).INFO:
return $I$(5).INFO;
case $I$(4).DEBUG:
return $I$(5).FINE;
case $I$(4).TRACE:
return $I$(5).FINEST;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'debug$S', function (message) {
this.log$org_bushe_swing_event_Logger_Level$S($I$(4).DEBUG, message);
});

Clazz.newMeth(C$, 'log$org_bushe_swing_event_Logger_Level$S', function (level, message) {
this.log$org_bushe_swing_event_Logger_Level$S$Throwable(level, message, null);
});

Clazz.newMeth(C$, 'log$org_bushe_swing_event_Logger_Level$S$Throwable', function (level, message, throwable) {
if (!this.isLoggable$org_bushe_swing_event_Logger_Level(level)) {
return;
}if (this.utilLogger != null ) {
var javaLevel=p$1.getJavaLevelFor$org_bushe_swing_event_Logger_Level.apply(this, [level]);
if (throwable == null ) {
this.utilLogger.log$java_util_logging_Level$S(javaLevel, message);
} else {
this.utilLogger.log$java_util_logging_Level$S$Throwable(javaLevel, message, throwable);
}} else if (this.commonsLogger != null ) {
if (throwable == null ) {
switch (level) {
case $I$(4).ERROR:
p$1.callCommonsLogger$S$S.apply(this, ["error", message]);
break;
case $I$(4).FATAL:
p$1.callCommonsLogger$S$S.apply(this, ["fatal", message]);
break;
case $I$(4).WARN:
p$1.callCommonsLogger$S$S.apply(this, ["warn", message]);
break;
case $I$(4).INFO:
p$1.callCommonsLogger$S$S.apply(this, ["info", message]);
break;
case $I$(4).DEBUG:
p$1.callCommonsLogger$S$S.apply(this, ["debug", message]);
break;
case $I$(4).TRACE:
p$1.callCommonsLogger$S$S.apply(this, ["trace", message]);
break;
}
} else {
switch (level) {
case $I$(4).ERROR:
p$1.callCommonsLogger$S$S$Throwable.apply(this, ["error", message, throwable]);
break;
case $I$(4).FATAL:
p$1.callCommonsLogger$S$S$Throwable.apply(this, ["fatal", message, throwable]);
break;
case $I$(4).WARN:
p$1.callCommonsLogger$S$S$Throwable.apply(this, ["warn", message, throwable]);
break;
case $I$(4).INFO:
p$1.callCommonsLogger$S$S$Throwable.apply(this, ["info", message, throwable]);
break;
case $I$(4).DEBUG:
p$1.callCommonsLogger$S$S$Throwable.apply(this, ["debug", message, throwable]);
break;
case $I$(4).TRACE:
p$1.callCommonsLogger$S$S$Throwable.apply(this, ["trace", message, throwable]);
break;
}
}}});

Clazz.newMeth(C$, 'callCommonsLogger$S', function (methodName) {
if (this.METHOD_CACHE_NO_PARAMS == null ) {
this.METHOD_CACHE_NO_PARAMS=Clazz.new_(1,{K:"String",V:"java.lang.reflect.Method"},$I$(6,1));
}return p$1.callCommonsLogger$java_util_Map$S$ClassA$OA.apply(this, [this.METHOD_CACHE_NO_PARAMS, methodName, C$.CLASS_ARGS_EMPTY, C$.EMPTY_ARGS]);
}, p$1);

Clazz.newMeth(C$, 'callCommonsLogger$S$S', function (methodName, message) {
if (this.METHOD_CACHE_ONE_PARAM == null ) {
this.METHOD_CACHE_ONE_PARAM=Clazz.new_(1,{K:"String",V:"java.lang.reflect.Method"},$I$(6,1));
}return p$1.callCommonsLogger$java_util_Map$S$ClassA$OA.apply(this, [this.METHOD_CACHE_ONE_PARAM, methodName, C$.CLASS_ARGS_ONE, Clazz.array(java.lang.Object, -1, [message])]);
}, p$1);

Clazz.newMeth(C$, 'callCommonsLogger$S$S$Throwable', function (methodName, message, throwable) {
if (this.METHOD_CACHE_TWO_PARAMS == null ) {
this.METHOD_CACHE_TWO_PARAMS=Clazz.new_(1,{K:"String",V:"java.lang.reflect.Method"},$I$(6,1));
}return p$1.callCommonsLogger$java_util_Map$S$ClassA$OA.apply(this, [this.METHOD_CACHE_TWO_PARAMS, methodName, C$.CLASS_ARGS_TWO, Clazz.array(java.lang.Object, -1, [message, throwable])]);
}, p$1);

Clazz.newMeth(C$, 'callCommonsLogger$java_util_Map$S$ClassA$OA', function (cache, methodName, classOfArgs, args) {
var method=cache.get$O(methodName);
if (method == null ) {
try {
method=C$.logClass.getMethod$S$ClassA(methodName, classOfArgs);
cache.put$TK$TV(methodName, method);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
e.printStackTrace$();
} else {
throw e;
}
}
}if (method == null ) {
return null;
}try {
return method.invoke$O$OA(this.commonsLogger, args);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
return null;
}
} else {
throw e$$;
}
}
}, p$1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Logger, "LoggerType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "JAVA", 0, []);
Clazz.newEnumConst($vals, C$.c$, "COMMONS", 1, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Logger, "Level", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "FATAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ERROR", 1, []);
Clazz.newEnumConst($vals, C$.c$, "WARN", 2, []);
Clazz.newEnumConst($vals, C$.c$, "INFO", 3, []);
Clazz.newEnumConst($vals, C$.c$, "DEBUG", 4, []);
Clazz.newEnumConst($vals, C$.c$, "TRACE", 5, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
