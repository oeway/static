(function(){var P$=Clazz.newPackage("org.apache.commons.logging.impl"),p$1={},I$=[[0,'java.util.Hashtable','org.apache.commons.logging.LogFactory','Boolean','java.security.AccessController','StringBuffer','java.io.StringWriter','java.io.PrintWriter','org.apache.commons.logging.Log']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogFactoryImpl", null, 'org.apache.commons.logging.LogFactory');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PKG_LEN="org.apache.commons.logging.impl.".length$();
C$.classesToDiscover=Clazz.array(String, -1, ["org.apache.commons.logging.impl.Log4JLogger", "org.apache.commons.logging.impl.Jdk14Logger", "org.apache.commons.logging.impl.Jdk13LumberjackLogger", "org.apache.commons.logging.impl.SimpleLog"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.useTCCL=true;
this.attributes=Clazz.new_($I$(1,1));
this.instances=Clazz.new_($I$(1,1));
this.logConstructor=null;
this.logConstructorSignature=Clazz.array(Class, -1, [Clazz.getClass(String)]);
this.logMethod=null;
this.logMethodSignature=Clazz.array(Class, -1, [Clazz.getClass($I$(2))]);
}, 1);

C$.$fields$=[['Z',['useTCCL','allowFlawedContext','allowFlawedDiscovery','allowFlawedHierarchy'],'S',['$diagnosticPrefix','logClassName'],'O',['attributes','java.util.Hashtable','+instances','logConstructor','java.lang.reflect.Constructor','logConstructorSignature','Class[]','logMethod','java.lang.reflect.Method','logMethodSignature','Class[]']]
,['I',['PKG_LEN'],'S',['LOGGING_IMPL_LOG4J_LOGGER','LOGGING_IMPL_JDK14_LOGGER','LOGGING_IMPL_LUMBERJACK_LOGGER','LOGGING_IMPL_SIMPLE_LOGGER','PKG_IMPL','LOG_PROPERTY','LOG_PROPERTY_OLD','ALLOW_FLAWED_CONTEXT_PROPERTY','ALLOW_FLAWED_DISCOVERY_PROPERTY','ALLOW_FLAWED_HIERARCHY_PROPERTY'],'O',['classesToDiscover','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this, []);C$.$init$.apply(this);
p$1.initDiagnostics.apply(this, []);
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Instance created.");
}}, 1);

Clazz.newMeth(C$, 'getAttribute$S', function (name) {
return this.attributes.get$O(name);
});

Clazz.newMeth(C$, 'getAttributeNames$', function () {
return this.attributes.keySet$().toArray$__TA(Clazz.array(String, [this.attributes.size$()]));
});

Clazz.newMeth(C$, 'getInstance$Class', function (clazz) {
return this.getInstance$S(clazz.getName$());
});

Clazz.newMeth(C$, 'getInstance$S', function (name) {
var instance=this.instances.get$O(name);
if (instance == null ) {
instance=this.newInstance$S(name);
this.instances.put$TK$TV(name, instance);
}return instance;
});

Clazz.newMeth(C$, 'release$', function () {
this.logDiagnostic$S("Releasing all known loggers");
this.instances.clear$();
});

Clazz.newMeth(C$, 'removeAttribute$S', function (name) {
this.attributes.remove$O(name);
});

Clazz.newMeth(C$, 'setAttribute$S$O', function (name, value) {
if (this.logConstructor != null ) {
this.logDiagnostic$S("setAttribute: call too late; configuration already performed.");
}if (value == null ) {
this.attributes.remove$O(name);
} else {
this.attributes.put$TK$TV(name, value);
}if (name.equals$O("use_tccl")) {
this.useTCCL=value != null  && $I$(3).valueOf$S(value.toString()).booleanValue$() ;
}});

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
return $I$(2).getContextClassLoader$();
}, 1);

Clazz.newMeth(C$, 'isDiagnosticsEnabled$', function () {
return $I$(2).isDiagnosticsEnabled$();
}, 1);

Clazz.newMeth(C$, 'getClassLoader$Class', function (clazz) {
return $I$(2).getClassLoader$Class(clazz);
}, 1);

Clazz.newMeth(C$, 'initDiagnostics', function () {
var clazz=this.getClass$();
var classLoader=C$.getClassLoader$Class(clazz);
var classLoaderName;
try {
if (classLoader == null ) {
classLoaderName="BOOTLOADER";
} else {
classLoaderName=org.apache.commons.logging.LogFactory.objectId$O(classLoader);
}} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
classLoaderName="UNKNOWN";
} else {
throw e;
}
}
this.$diagnosticPrefix="[LogFactoryImpl@" + System.identityHashCode$O(this) + " from " + classLoaderName + "] " ;
}, p$1);

Clazz.newMeth(C$, 'logDiagnostic$S', function (msg) {
if (C$.isDiagnosticsEnabled$()) {
org.apache.commons.logging.LogFactory.logRawDiagnostic$S(this.$diagnosticPrefix + msg);
}});

Clazz.newMeth(C$, 'getLogClassName$', function () {
if (this.logClassName == null ) {
p$1.discoverLogImplementation$S.apply(this, [this.getClass$().getName$()]);
}return this.logClassName;
});

Clazz.newMeth(C$, 'getLogConstructor$', function () {
if (this.logConstructor == null ) {
p$1.discoverLogImplementation$S.apply(this, [this.getClass$().getName$()]);
}return this.logConstructor;
});

Clazz.newMeth(C$, 'isJdk13LumberjackAvailable$', function () {
return p$1.isLogLibraryAvailable$S$S.apply(this, ["Jdk13Lumberjack", "org.apache.commons.logging.impl.Jdk13LumberjackLogger"]);
});

Clazz.newMeth(C$, 'isJdk14Available$', function () {
return p$1.isLogLibraryAvailable$S$S.apply(this, ["Jdk14", "org.apache.commons.logging.impl.Jdk14Logger"]);
});

Clazz.newMeth(C$, 'isLog4JAvailable$', function () {
return p$1.isLogLibraryAvailable$S$S.apply(this, ["Log4J", "org.apache.commons.logging.impl.Log4JLogger"]);
});

Clazz.newMeth(C$, 'newInstance$S', function (name) {
var instance;
try {
if (this.logConstructor == null ) {
instance=p$1.discoverLogImplementation$S.apply(this, [name]);
} else {
var params=Clazz.array(java.lang.Object, -1, [name]);
instance=this.logConstructor.newInstance$OA(params);
}if (this.logMethod != null ) {
var params=Clazz.array(java.lang.Object, -1, [this]);
this.logMethod.invoke$O$OA(instance, params);
}return instance;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.apache.commons.logging.LogConfigurationException")){
var lce = e$$;
{
throw lce;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
var c=e.getTargetException$();
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$Throwable,[c == null  ? e : c]);
}
} else {
var t = e$$;
{
org.apache.commons.logging.LogFactory.handleThrowable$Throwable(t);
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$Throwable,[t]);
}
}
}
});

Clazz.newMeth(C$, 'getContextClassLoaderInternal$', function () {
return $I$(4).doPrivileged$java_security_PrivilegedAction(((P$.LogFactoryImpl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactoryImpl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return $I$(2).directGetContextClassLoader$();
});
})()
), Clazz.new_(P$.LogFactoryImpl$1.$init$, [this, null])));
}, 1);

Clazz.newMeth(C$, 'getSystemProperty$S$S', function (key, def) {
return $I$(4).doPrivileged$java_security_PrivilegedAction(((P$.LogFactoryImpl$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactoryImpl$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return System.getProperty$S$S(this.$finals$.key, this.$finals$.def);
});
})()
), Clazz.new_(P$.LogFactoryImpl$2.$init$, [this, {def:def,key:key}])));
}, 1);

Clazz.newMeth(C$, 'getParentClassLoader$ClassLoader', function (cl) {
try {
return $I$(4).doPrivileged$java_security_PrivilegedAction(((P$.LogFactoryImpl$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactoryImpl$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.cl.getParent$();
});
})()
), Clazz.new_(P$.LogFactoryImpl$3.$init$, [this, {cl:cl}])));
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
this.logDiagnostic$S("[SECURITY] Unable to obtain parent classloader");
return null;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'isLogLibraryAvailable$S$S', function (name, classname) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Checking for '" + name + "'." );
}try {
var log=p$1.createLogFromClass$S$S$Z.apply(this, [classname, this.getClass$().getName$(), false]);
if (log == null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Did not find '" + name + "'." );
}return false;
} else {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Found '" + name + "'." );
}return true;
}} catch (e) {
if (Clazz.exceptionOf(e,"org.apache.commons.logging.LogConfigurationException")){
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Logging system '" + name + "' is available but not useable." );
}return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getConfigurationValue$S', function (property) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] Trying to get configuration for item " + property);
}var valueObj=this.getAttribute$S(property);
if (valueObj != null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] Found LogFactory attribute [" + valueObj + "] for " + property );
}return valueObj.toString();
}if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] No LogFactory attribute found for " + property);
}try {
var value=C$.getSystemProperty$S$S(property, null);
if (value != null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] Found system property [" + value + "] for " + property );
}return value;
}if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] No system property found for property " + property);
}} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] Security prevented reading system property " + property);
}} else {
throw e;
}
}
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[ENV] No configuration defined for item " + property);
}return null;
}, p$1);

Clazz.newMeth(C$, 'getBooleanConfiguration$S$Z', function (key, dflt) {
var val=p$1.getConfigurationValue$S.apply(this, [key]);
if (val == null ) {
return dflt;
}return $I$(3).valueOf$S(val).booleanValue$();
}, p$1);

Clazz.newMeth(C$, 'initConfiguration', function () {
this.allowFlawedContext=p$1.getBooleanConfiguration$S$Z.apply(this, ["org.apache.commons.logging.Log.allowFlawedContext", true]);
this.allowFlawedDiscovery=p$1.getBooleanConfiguration$S$Z.apply(this, ["org.apache.commons.logging.Log.allowFlawedDiscovery", true]);
this.allowFlawedHierarchy=p$1.getBooleanConfiguration$S$Z.apply(this, ["org.apache.commons.logging.Log.allowFlawedHierarchy", true]);
}, p$1);

Clazz.newMeth(C$, 'discoverLogImplementation$S', function (logCategory) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Discovering a Log implementation...");
}p$1.initConfiguration.apply(this, []);
var result=null;
var specifiedLogClassName=p$1.findUserSpecifiedLogClassName.apply(this, []);
if (specifiedLogClassName != null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Attempting to load user-specified log class '" + specifiedLogClassName + "'..." );
}result=p$1.createLogFromClass$S$S$Z.apply(this, [specifiedLogClassName, logCategory, true]);
if (result == null ) {
var messageBuffer=Clazz.new_($I$(5,1).c$$S,["User-specified log class \'"]);
messageBuffer.append$S(specifiedLogClassName);
messageBuffer.append$S("\' cannot be found or is not useable.");
p$1.informUponSimilarName$StringBuffer$S$S.apply(this, [messageBuffer, specifiedLogClassName, "org.apache.commons.logging.impl.Log4JLogger"]);
p$1.informUponSimilarName$StringBuffer$S$S.apply(this, [messageBuffer, specifiedLogClassName, "org.apache.commons.logging.impl.Jdk14Logger"]);
p$1.informUponSimilarName$StringBuffer$S$S.apply(this, [messageBuffer, specifiedLogClassName, "org.apache.commons.logging.impl.Jdk13LumberjackLogger"]);
p$1.informUponSimilarName$StringBuffer$S$S.apply(this, [messageBuffer, specifiedLogClassName, "org.apache.commons.logging.impl.SimpleLog"]);
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S,[messageBuffer.toString()]);
}return result;
}if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("No user-specified Log implementation; performing discovery using the standard supported logging implementations...");
}for (var i=0; i < C$.classesToDiscover.length && result == null  ; ++i) {
result=p$1.createLogFromClass$S$S$Z.apply(this, [C$.classesToDiscover[i], logCategory, true]);
}
if (result == null ) {
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S,["No suitable Log implementation"]);
}return result;
}, p$1);

Clazz.newMeth(C$, 'informUponSimilarName$StringBuffer$S$S', function (messageBuffer, name, candidate) {
if (name.equals$O(candidate)) {
return;
}if (name.regionMatches$Z$I$S$I$I(true, 0, candidate, 0, C$.PKG_LEN + 5)) {
messageBuffer.append$S(" Did you mean \'");
messageBuffer.append$S(candidate);
messageBuffer.append$S("\'?");
}}, p$1);

Clazz.newMeth(C$, 'findUserSpecifiedLogClassName', function () {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Trying to get log class from attribute \'org.apache.commons.logging.Log\'");
}var specifiedClass=this.getAttribute$S("org.apache.commons.logging.Log");
if (specifiedClass == null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Trying to get log class from attribute \'org.apache.commons.logging.log\'");
}specifiedClass=this.getAttribute$S("org.apache.commons.logging.log");
}if (specifiedClass == null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Trying to get log class from system property \'org.apache.commons.logging.Log\'");
}try {
specifiedClass=C$.getSystemProperty$S$S("org.apache.commons.logging.Log", null);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("No access allowed to system property '" + "org.apache.commons.logging.Log" + "' - " + e.getMessage$() );
}} else {
throw e;
}
}
}if (specifiedClass == null ) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Trying to get log class from system property \'org.apache.commons.logging.log\'");
}try {
specifiedClass=C$.getSystemProperty$S$S("org.apache.commons.logging.log", null);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("No access allowed to system property '" + "org.apache.commons.logging.log" + "' - " + e.getMessage$() );
}} else {
throw e;
}
}
}if (specifiedClass != null ) {
specifiedClass=specifiedClass.trim$();
}return specifiedClass;
}, p$1);

Clazz.newMeth(C$, 'createLogFromClass$S$S$Z', function (logAdapterClassName, logCategory, affectState) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Attempting to instantiate '" + logAdapterClassName + "'" );
}var params=Clazz.array(java.lang.Object, -1, [logCategory]);
var logAdapter=null;
var constructor=null;
var logAdapterClass=null;
var currentCL=p$1.getBaseClassLoader.apply(this, []);
for (; ; ) {
this.logDiagnostic$S("Trying to load '" + logAdapterClassName + "' from classloader " + org.apache.commons.logging.LogFactory.objectId$O(currentCL) );
try {
if (C$.isDiagnosticsEnabled$()) {
var url;
var resourceName=logAdapterClassName.replace$C$C(".", "/") + ".class";
if (currentCL != null ) {
url=currentCL.getResource$S(resourceName);
} else {
url=ClassLoader.getSystemResource$S(resourceName + ".class");
}if (url == null ) {
this.logDiagnostic$S("Class '" + logAdapterClassName + "' [" + resourceName + "] cannot be found." );
} else {
this.logDiagnostic$S("Class '" + logAdapterClassName + "' was found at '" + url + "'" );
}}var c;
try {
c=Clazz.forName(logAdapterClassName, true, currentCL);
} catch (originalClassNotFoundException) {
if (Clazz.exceptionOf(originalClassNotFoundException,"ClassNotFoundException")){
var msg=originalClassNotFoundException.getMessage$();
this.logDiagnostic$S("The log adapter '" + logAdapterClassName + "' is not available via classloader " + org.apache.commons.logging.LogFactory.objectId$O(currentCL) + ": " + msg.trim$() );
try {
c=Clazz.forName(logAdapterClassName);
} catch (secondaryClassNotFoundException) {
if (Clazz.exceptionOf(secondaryClassNotFoundException,"ClassNotFoundException")){
msg=secondaryClassNotFoundException.getMessage$();
this.logDiagnostic$S("The log adapter '" + logAdapterClassName + "' is not available via the LogFactoryImpl class classloader: " + msg.trim$() );
break;
} else {
throw secondaryClassNotFoundException;
}
}
} else {
throw originalClassNotFoundException;
}
}
constructor=c.getConstructor$ClassA(this.logConstructorSignature);
var o=constructor.newInstance$OA(params);
if (Clazz.instanceOf(o, "org.apache.commons.logging.Log")) {
logAdapterClass=c;
logAdapter=o;
break;
}p$1.handleFlawedHierarchy$ClassLoader$Class.apply(this, [currentCL, c]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var e = e$$;
{
var msg=e.getMessage$();
this.logDiagnostic$S("The log adapter '" + logAdapterClassName + "' is missing dependencies when loaded via classloader " + org.apache.commons.logging.LogFactory.objectId$O(currentCL) + ": " + msg.trim$() );
break;
}
} else if (Clazz.exceptionOf(e$$,"ExceptionInInitializerError")){
var e = e$$;
{
var msg=e.getMessage$();
this.logDiagnostic$S("The log adapter '" + logAdapterClassName + "' is unable to initialize itself when loaded via classloader " + org.apache.commons.logging.LogFactory.objectId$O(currentCL) + ": " + msg.trim$() );
break;
}
} else if (Clazz.exceptionOf(e$$,"org.apache.commons.logging.LogConfigurationException")){
var e = e$$;
{
throw e;
}
} else {
var t = e$$;
{
org.apache.commons.logging.LogFactory.handleThrowable$Throwable(t);
p$1.handleFlawedDiscovery$S$ClassLoader$Throwable.apply(this, [logAdapterClassName, currentCL, t]);
}
}
}
if (currentCL == null ) {
break;
}currentCL=p$1.getParentClassLoader$ClassLoader.apply(this, [currentCL]);
}
if (logAdapterClass != null  && affectState ) {
this.logClassName=logAdapterClassName;
this.logConstructor=constructor;
try {
this.logMethod=logAdapterClass.getMethod$S$ClassA("setLogFactory", this.logMethodSignature);
this.logDiagnostic$S("Found method setLogFactory(LogFactory) in '" + logAdapterClassName + "'" );
} catch (t) {
org.apache.commons.logging.LogFactory.handleThrowable$Throwable(t);
this.logMethod=null;
this.logDiagnostic$S("[INFO] '" + logAdapterClassName + "' from classloader " + org.apache.commons.logging.LogFactory.objectId$O(currentCL) + " does not declare optional method " + "setLogFactory(LogFactory)" );
}
this.logDiagnostic$S("Log adapter '" + logAdapterClassName + "' from classloader " + org.apache.commons.logging.LogFactory.objectId$O(logAdapterClass.getClassLoader$()) + " has been selected for use." );
}return logAdapter;
}, p$1);

Clazz.newMeth(C$, 'getBaseClassLoader', function () {
var thisClassLoader=C$.getClassLoader$Class(Clazz.getClass(C$));
if (!this.useTCCL) {
return thisClassLoader;
}var contextClassLoader=C$.getContextClassLoaderInternal$();
var baseClassLoader=p$1.getLowestClassLoader$ClassLoader$ClassLoader.apply(this, [contextClassLoader, thisClassLoader]);
if (baseClassLoader == null ) {
if (this.allowFlawedContext) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("[WARNING] the context classloader is not part of a parent-child relationship with the classloader that loaded LogFactoryImpl.");
}return contextClassLoader;
} else {
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S,["Bad classloader hierarchy; LogFactoryImpl was loaded via a classloader that is not related to the current context classloader."]);
}}if (baseClassLoader !== contextClassLoader ) {
if (this.allowFlawedContext) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Warning: the context classloader is an ancestor of the classloader that loaded LogFactoryImpl; it should be the same or a descendant. The application using commons-logging should ensure the context classloader is used correctly.");
}} else {
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S,["Bad classloader hierarchy; LogFactoryImpl was loaded via a classloader that is not related to the current context classloader."]);
}}return baseClassLoader;
}, p$1);

Clazz.newMeth(C$, 'getLowestClassLoader$ClassLoader$ClassLoader', function (c1, c2) {
if (c1 == null ) {
return c2;
}if (c2 == null ) {
return c1;
}var current;
current=c1;
while (current != null ){
if (current === c2 ) {
return c1;
}current=p$1.getParentClassLoader$ClassLoader.apply(this, [current]);
}
current=c2;
while (current != null ){
if (current === c1 ) {
return c2;
}current=p$1.getParentClassLoader$ClassLoader.apply(this, [current]);
}
return null;
}, p$1);

Clazz.newMeth(C$, 'handleFlawedDiscovery$S$ClassLoader$Throwable', function (logAdapterClassName, classLoader, discoveryFlaw) {
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S("Could not instantiate Log '" + logAdapterClassName + "' -- " + discoveryFlaw.getClass$().getName$() + ": " + discoveryFlaw.getLocalizedMessage$() );
if (Clazz.instanceOf(discoveryFlaw, "java.lang.reflect.InvocationTargetException")) {
var ite=discoveryFlaw;
var cause=ite.getTargetException$();
if (cause != null ) {
this.logDiagnostic$S("... InvocationTargetException: " + cause.getClass$().getName$() + ": " + cause.getLocalizedMessage$() );
if (Clazz.instanceOf(cause, "java.lang.ExceptionInInitializerError")) {
var eiie=cause;
var cause2=eiie.getException$();
if (cause2 != null ) {
var sw=Clazz.new_($I$(6,1));
cause2.printStackTrace$java_io_PrintWriter(Clazz.new_($I$(7,1).c$$java_io_Writer$Z,[sw, true]));
this.logDiagnostic$S("... ExceptionInInitializerError: " + sw.toString());
}}}}}if (!this.allowFlawedDiscovery) {
throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$Throwable,[discoveryFlaw]);
}}, p$1);

Clazz.newMeth(C$, 'handleFlawedHierarchy$ClassLoader$Class', function (badClassLoader, badClass) {
var implementsLog=false;
var logInterfaceName=Clazz.getClass($I$(8),['debug$O','debug$O$Throwable','error$O','error$O$Throwable','fatal$O','fatal$O$Throwable','info$O','info$O$Throwable','isDebugEnabled$','isErrorEnabled$','isFatalEnabled$','isInfoEnabled$','isTraceEnabled$','isWarnEnabled$','trace$O','trace$O$Throwable','warn$O','warn$O$Throwable']).getName$();
var interfaces=badClass.getInterfaces$();
for (var i=0; i < interfaces.length; i++) {
if (logInterfaceName.equals$O(interfaces[i].getName$())) {
implementsLog=true;
break;
}}
if (implementsLog) {
if (C$.isDiagnosticsEnabled$()) {
try {
var logInterfaceClassLoader=C$.getClassLoader$Class(Clazz.getClass($I$(8),['debug$O','debug$O$Throwable','error$O','error$O$Throwable','fatal$O','fatal$O$Throwable','info$O','info$O$Throwable','isDebugEnabled$','isErrorEnabled$','isFatalEnabled$','isInfoEnabled$','isTraceEnabled$','isWarnEnabled$','trace$O','trace$O$Throwable','warn$O','warn$O$Throwable']));
this.logDiagnostic$S("Class '" + badClass.getName$() + "' was found in classloader " + org.apache.commons.logging.LogFactory.objectId$O(badClassLoader) + ". It is bound to a Log interface which is not" + " the one loaded from classloader " + org.apache.commons.logging.LogFactory.objectId$O(logInterfaceClassLoader) );
} catch (t) {
org.apache.commons.logging.LogFactory.handleThrowable$Throwable(t);
this.logDiagnostic$S("Error while trying to output diagnostics about bad class \'" + badClass + "'" );
}
}if (!this.allowFlawedHierarchy) {
var msg=Clazz.new_($I$(5,1));
msg.append$S("Terminating logging for this context ");
msg.append$S("due to bad log hierarchy. ");
msg.append$S("You have more than one version of \'");
msg.append$S(Clazz.getClass($I$(8),['debug$O','debug$O$Throwable','error$O','error$O$Throwable','fatal$O','fatal$O$Throwable','info$O','info$O$Throwable','isDebugEnabled$','isErrorEnabled$','isFatalEnabled$','isInfoEnabled$','isTraceEnabled$','isWarnEnabled$','trace$O','trace$O$Throwable','warn$O','warn$O$Throwable']).getName$());
msg.append$S("\' visible.");
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S(msg.toString());
}throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S,[msg.toString()]);
}if (C$.isDiagnosticsEnabled$()) {
var msg=Clazz.new_($I$(5,1));
msg.append$S("Warning: bad log hierarchy. ");
msg.append$S("You have more than one version of \'");
msg.append$S(Clazz.getClass($I$(8),['debug$O','debug$O$Throwable','error$O','error$O$Throwable','fatal$O','fatal$O$Throwable','info$O','info$O$Throwable','isDebugEnabled$','isErrorEnabled$','isFatalEnabled$','isInfoEnabled$','isTraceEnabled$','isWarnEnabled$','trace$O','trace$O$Throwable','warn$O','warn$O$Throwable']).getName$());
msg.append$S("\' visible.");
this.logDiagnostic$S(msg.toString());
}} else {
if (!this.allowFlawedDiscovery) {
var msg=Clazz.new_($I$(5,1));
msg.append$S("Terminating logging for this context. ");
msg.append$S("Log class \'");
msg.append$S(badClass.getName$());
msg.append$S("\' does not implement the Log interface.");
if (C$.isDiagnosticsEnabled$()) {
this.logDiagnostic$S(msg.toString());
}throw Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S,[msg.toString()]);
}if (C$.isDiagnosticsEnabled$()) {
var msg=Clazz.new_($I$(5,1));
msg.append$S("[WARNING] Log class \'");
msg.append$S(badClass.getName$());
msg.append$S("\' does not implement the Log interface.");
this.logDiagnostic$S(msg.toString());
}}}, p$1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-23 04:53:58 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
