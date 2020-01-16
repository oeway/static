(function(){var P$=Clazz.newPackage("org.apache.commons.logging.impl"),I$=[[0,'java.util.Properties','java.text.SimpleDateFormat','StringBuffer','java.util.Date','java.io.StringWriter','java.io.PrintWriter','Thread','java.security.AccessController']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleLog", null, null, ['org.apache.commons.logging.Log', 'java.io.Serializable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.simpleLogProps=Clazz.new_($I$(1,1));
C$.showLogName=false;
C$.showShortName=true;
C$.showDateTime=false;
C$.dateTimeFormat="yyyy/MM/dd HH:mm:ss:SSS zzz";
C$.dateFormatter=null;
{
var $in=C$.getResourceAsStream$S("simplelog.properties");
if (null != $in ) {
try {
C$.simpleLogProps.load$java_io_InputStream($in);
$in.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}C$.showLogName=C$.getBooleanProperty$S$Z("org.apache.commons.logging.simplelog.showlogname", C$.showLogName);
C$.showShortName=C$.getBooleanProperty$S$Z("org.apache.commons.logging.simplelog.showShortLogname", C$.showShortName);
C$.showDateTime=C$.getBooleanProperty$S$Z("org.apache.commons.logging.simplelog.showdatetime", C$.showDateTime);
if (C$.showDateTime) {
C$.dateTimeFormat=C$.getStringProperty$S$S("org.apache.commons.logging.simplelog.dateTimeFormat", C$.dateTimeFormat);
try {
C$.dateFormatter=Clazz.new_($I$(2,1).c$$S,[C$.dateTimeFormat]);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.dateTimeFormat="yyyy/MM/dd HH:mm:ss:SSS zzz";
C$.dateFormatter=Clazz.new_($I$(2,1).c$$S,[C$.dateTimeFormat]);
} else {
throw e;
}
}
}};
}

Clazz.newMeth(C$, '$init$', function () {
this.logName=null;
this.shortLogName=null;
}, 1);

C$.$fields$=[['I',['currentLogLevel'],'S',['logName','shortLogName']]
,['Z',['showLogName','showShortName','showDateTime'],'I',['LOG_LEVEL_TRACE','LOG_LEVEL_DEBUG','LOG_LEVEL_INFO','LOG_LEVEL_WARN','LOG_LEVEL_ERROR','LOG_LEVEL_FATAL','LOG_LEVEL_ALL','LOG_LEVEL_OFF'],'L',['serialVersionUID'],'S',['systemPrefix','DEFAULT_DATE_TIME_FORMAT','dateTimeFormat'],'O',['simpleLogProps','java.util.Properties','dateFormatter','java.text.DateFormat']]]

Clazz.newMeth(C$, 'getStringProperty$S', function (name) {
var prop=null;
try {
prop=System.getProperty$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
} else {
throw e;
}
}
return prop == null  ? C$.simpleLogProps.getProperty$S(name) : prop;
}, 1);

Clazz.newMeth(C$, 'getStringProperty$S$S', function (name, dephault) {
var prop=C$.getStringProperty$S(name);
return prop == null  ? dephault : prop;
}, 1);

Clazz.newMeth(C$, 'getBooleanProperty$S$Z', function (name, dephault) {
var prop=C$.getStringProperty$S(name);
return prop == null  ? dephault : "true".equalsIgnoreCase$S(prop);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
this.logName=name;
this.setLevel$I(3);
var lvl=C$.getStringProperty$S("org.apache.commons.logging.simplelog." + "log." + this.logName );
var i=String.valueOf$O(name).lastIndexOf$S(".");
while (null == lvl  && i > -1 ){
name=name.substring$I$I(0, i);
lvl=C$.getStringProperty$S("org.apache.commons.logging.simplelog." + "log." + name );
i=String.valueOf$O(name).lastIndexOf$S(".");
}
if (null == lvl ) {
lvl=C$.getStringProperty$S("org.apache.commons.logging.simplelog.defaultlog");
}if ("all".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(0);
} else if ("trace".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(1);
} else if ("debug".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(2);
} else if ("info".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(3);
} else if ("warn".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(4);
} else if ("error".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(5);
} else if ("fatal".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(6);
} else if ("off".equalsIgnoreCase$S(lvl)) {
this.setLevel$I(7);
}}, 1);

Clazz.newMeth(C$, 'setLevel$I', function (currentLogLevel) {
this.currentLogLevel=currentLogLevel;
});

Clazz.newMeth(C$, 'getLevel$', function () {
return this.currentLogLevel;
});

Clazz.newMeth(C$, 'log$I$O$Throwable', function (type, message, t) {
var buf=Clazz.new_($I$(3,1));
if (C$.showDateTime) {
var now=Clazz.new_($I$(4,1));
var dateText;
{
dateText=C$.dateFormatter.format$java_util_Date(now);
}buf.append$S(dateText);
buf.append$S(" ");
}switch (type) {
case 1:
buf.append$S("[TRACE] ");
break;
case 2:
buf.append$S("[DEBUG] ");
break;
case 3:
buf.append$S("[INFO] ");
break;
case 4:
buf.append$S("[WARN] ");
break;
case 5:
buf.append$S("[ERROR] ");
break;
case 6:
buf.append$S("[FATAL] ");
break;
}
if (C$.showShortName) {
if (this.shortLogName == null ) {
var slName=this.logName.substring$I(this.logName.lastIndexOf$S(".") + 1);
this.shortLogName=slName.substring$I(slName.lastIndexOf$S("/") + 1);
}buf.append$S(String.valueOf$O(this.shortLogName)).append$S(" - ");
} else if (C$.showLogName) {
buf.append$S(String.valueOf$O(this.logName)).append$S(" - ");
}buf.append$S(String.valueOf$O(message));
if (t != null ) {
buf.append$S(" <");
buf.append$S(t.toString());
buf.append$S(">");
var sw=Clazz.new_($I$(5,1).c$$I,[1024]);
var pw=Clazz.new_($I$(6,1).c$$java_io_Writer,[sw]);
t.printStackTrace$java_io_PrintWriter(pw);
pw.close$();
buf.append$S(sw.toString());
}this.write$StringBuffer(buf);
});

Clazz.newMeth(C$, 'write$StringBuffer', function (buffer) {
System.err.println$S(buffer.toString());
});

Clazz.newMeth(C$, 'isLevelEnabled$I', function (logLevel) {
return logLevel >= this.currentLogLevel;
});

Clazz.newMeth(C$, 'debug$O', function (message) {
if (this.isLevelEnabled$I(2)) {
this.log$I$O$Throwable(2, message, null);
}});

Clazz.newMeth(C$, 'debug$O$Throwable', function (message, t) {
if (this.isLevelEnabled$I(2)) {
this.log$I$O$Throwable(2, message, t);
}});

Clazz.newMeth(C$, 'trace$O', function (message) {
if (this.isLevelEnabled$I(1)) {
this.log$I$O$Throwable(1, message, null);
}});

Clazz.newMeth(C$, 'trace$O$Throwable', function (message, t) {
if (this.isLevelEnabled$I(1)) {
this.log$I$O$Throwable(1, message, t);
}});

Clazz.newMeth(C$, 'info$O', function (message) {
if (this.isLevelEnabled$I(3)) {
this.log$I$O$Throwable(3, message, null);
}});

Clazz.newMeth(C$, 'info$O$Throwable', function (message, t) {
if (this.isLevelEnabled$I(3)) {
this.log$I$O$Throwable(3, message, t);
}});

Clazz.newMeth(C$, 'warn$O', function (message) {
if (this.isLevelEnabled$I(4)) {
this.log$I$O$Throwable(4, message, null);
}});

Clazz.newMeth(C$, 'warn$O$Throwable', function (message, t) {
if (this.isLevelEnabled$I(4)) {
this.log$I$O$Throwable(4, message, t);
}});

Clazz.newMeth(C$, 'error$O', function (message) {
if (this.isLevelEnabled$I(5)) {
this.log$I$O$Throwable(5, message, null);
}});

Clazz.newMeth(C$, 'error$O$Throwable', function (message, t) {
if (this.isLevelEnabled$I(5)) {
this.log$I$O$Throwable(5, message, t);
}});

Clazz.newMeth(C$, 'fatal$O', function (message) {
if (this.isLevelEnabled$I(6)) {
this.log$I$O$Throwable(6, message, null);
}});

Clazz.newMeth(C$, 'fatal$O$Throwable', function (message, t) {
if (this.isLevelEnabled$I(6)) {
this.log$I$O$Throwable(6, message, t);
}});

Clazz.newMeth(C$, 'isDebugEnabled$', function () {
return this.isLevelEnabled$I(2);
});

Clazz.newMeth(C$, 'isErrorEnabled$', function () {
return this.isLevelEnabled$I(5);
});

Clazz.newMeth(C$, 'isFatalEnabled$', function () {
return this.isLevelEnabled$I(6);
});

Clazz.newMeth(C$, 'isInfoEnabled$', function () {
return this.isLevelEnabled$I(3);
});

Clazz.newMeth(C$, 'isTraceEnabled$', function () {
return this.isLevelEnabled$I(1);
});

Clazz.newMeth(C$, 'isWarnEnabled$', function () {
return this.isLevelEnabled$I(4);
});

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
var classLoader=null;
try {
var method=Clazz.getClass($I$(7)).getMethod$S$ClassA("getContextClassLoader", null);
try {
classLoader=method.invoke$O$OA($I$(7).currentThread$(), null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
if (Clazz.instanceOf(e.getTargetException$(), "java.lang.SecurityException")) {
} else {
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S$Throwable,["Unexpected InvocationTargetException", e.getTargetException$()]);
}}
} else {
throw e$$;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
} else {
throw e;
}
}
if (classLoader == null ) {
classLoader=Clazz.getClass(C$).getClassLoader$();
}return classLoader;
}, 1);

Clazz.newMeth(C$, 'getResourceAsStream$S', function (name) {
return $I$(8).doPrivileged$java_security_PrivilegedAction(((P$.SimpleLog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleLog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var threadCL=P$.SimpleLog.getContextClassLoader$();
if (threadCL != null ) {
return threadCL.getResourceAsStream$S(this.$finals$.name);
} else {
return ClassLoader.getSystemResourceAsStream$S(this.$finals$.name);
}});
})()
), Clazz.new_(P$.SimpleLog$1.$init$, [this, {name:name}])));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-23 04:54:58 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
