(function(){var P$=Clazz.newPackage("org.apache.commons.logging"),I$=[[0,'java.util.Hashtable','Boolean','java.io.BufferedReader','java.io.InputStreamReader','java.security.AccessController','Thread','StringBuffer','java.util.Properties','java.io.FileOutputStream','java.io.PrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogFactory");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.diagnosticsStream=null;
C$.factories=null;
C$.nullClassLoaderFactory=null;
{
C$.thisClassLoader=C$.getClassLoader$Class(Clazz.getClass(C$));
var classLoaderName;
try {
var classLoader=C$.thisClassLoader;
if (C$.thisClassLoader == null ) {
classLoaderName="BOOTLOADER";
} else {
classLoaderName=C$.objectId$O(classLoader);
}} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
classLoaderName="UNKNOWN";
} else {
throw e;
}
}
C$.diagnosticPrefix="[LogFactory from " + classLoaderName + "] " ;
C$.diagnosticsStream=C$.initDiagnostics$();
C$.logClassLoaderEnvironment$Class(Clazz.getClass(C$));
C$.factories=C$.createFactoryStore$();
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("BOOTSTRAP COMPLETED");
}};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['diagnosticPrefix'],'O',['diagnosticsStream','java.io.PrintStream','thisClassLoader','ClassLoader','factories','java.util.Hashtable','nullClassLoaderFactory','org.apache.commons.logging.LogFactory']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createFactoryStore$', function () {
var result=null;
var storeImplementationClass;
try {
storeImplementationClass=C$.getSystemProperty$S$S("org.apache.commons.logging.LogFactory.HashtableImpl", null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
storeImplementationClass=null;
} else {
throw ex;
}
}
if (storeImplementationClass == null ) {
storeImplementationClass="org.apache.commons.logging.impl.WeakHashtable";
}try {
var implementationClass=Clazz.forName(storeImplementationClass);
result=implementationClass.newInstance$();
} catch (t) {
C$.handleThrowable$Throwable(t);
if (!"org.apache.commons.logging.impl.WeakHashtable".equals$O(storeImplementationClass)) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[ERROR] LogFactory: Load of custom hashtable failed");
} else {
System.err.println$S("[ERROR] LogFactory: Load of custom hashtable failed");
}}}
if (result == null ) {
result=Clazz.new_($I$(1,1));
}return result;
}, 1);

Clazz.newMeth(C$, 'trim$S', function (src) {
if (src == null ) {
return null;
}return src.trim$();
}, 1);

Clazz.newMeth(C$, 'handleThrowable$Throwable', function (t) {
if (Clazz.instanceOf(t, "java.lang.ThreadDeath")) {
throw t;
}if (Clazz.instanceOf(t, "java.lang.VirtualMachineError")) {
throw t;
}}, 1);

Clazz.newMeth(C$, 'getFactory$', function () {
var contextClassLoader=C$.getContextClassLoaderInternal$();
if (contextClassLoader == null ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Context classloader is null.");
}}var factory=C$.getCachedFactory$ClassLoader(contextClassLoader);
if (factory != null ) {
return factory;
}if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] LogFactory implementation requested for the first time for context classloader " + C$.objectId$O(contextClassLoader));
C$.logHierarchy$S$ClassLoader("[LOOKUP] ", contextClassLoader);
}var props=C$.getConfigurationFile$ClassLoader$S(contextClassLoader, "commons-logging.properties");
var baseClassLoader=contextClassLoader;
if (props != null ) {
var useTCCLStr=props.getProperty$S("use_tccl");
if (useTCCLStr != null ) {
if ($I$(2).valueOf$S(useTCCLStr).booleanValue$() == false ) {
baseClassLoader=C$.thisClassLoader;
}}}if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Looking for system property [org.apache.commons.logging.LogFactory] to define the LogFactory subclass to use...");
}try {
var factoryClass=C$.getSystemProperty$S$S("org.apache.commons.logging.LogFactory", null);
if (factoryClass != null ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Creating an instance of LogFactory class '" + factoryClass + "' as specified by system property " + "org.apache.commons.logging.LogFactory" );
}factory=C$.newFactory$S$ClassLoader$ClassLoader(factoryClass, baseClassLoader, contextClassLoader);
} else {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] No system property [org.apache.commons.logging.LogFactory] defined.");
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] A security exception occurred while trying to create an instance of the custom factory class: [" + C$.trim$S(e.getMessage$()) + "]. Trying alternative implementations..." );
}}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var e = e$$;
{
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] An exception occurred while trying to create an instance of the custom factory class: [" + C$.trim$S(e.getMessage$()) + "] as specified by a system property." );
}throw e;
}
} else {
throw e$$;
}
}
if (factory == null ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Looking for a resource file of name [META-INF/services/org.apache.commons.logging.LogFactory] to define the LogFactory subclass to use...");
}try {
var is=C$.getResourceAsStream$ClassLoader$S(contextClassLoader, "META-INF/services/org.apache.commons.logging.LogFactory");
if (is != null ) {
var rd;
try {
rd=Clazz.new_($I$(3,1).c$$java_io_Reader,[Clazz.new_($I$(4,1).c$$java_io_InputStream$S,[is, "UTF-8"])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
rd=Clazz.new_($I$(3,1).c$$java_io_Reader,[Clazz.new_($I$(4,1).c$$java_io_InputStream,[is])]);
} else {
throw e;
}
}
var factoryClassName=rd.readLine$();
rd.close$();
if (factoryClassName != null  && !"".equals$O(factoryClassName) ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP]  Creating an instance of LogFactory class " + factoryClassName + " as specified by file '" + "META-INF/services/org.apache.commons.logging.LogFactory" + "' which was present in the path of the context classloader." );
}factory=C$.newFactory$S$ClassLoader$ClassLoader(factoryClassName, baseClassLoader, contextClassLoader);
}} else {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] No resource file with name \'META-INF/services/org.apache.commons.logging.LogFactory\' found.");
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] A security exception occurred while trying to create an instance of the custom factory class: [" + C$.trim$S(ex.getMessage$()) + "]. Trying alternative implementations..." );
}} else {
throw ex;
}
}
}if (factory == null ) {
if (props != null ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Looking in properties file for entry with key \'org.apache.commons.logging.LogFactory\' to define the LogFactory subclass to use...");
}var factoryClass=props.getProperty$S("org.apache.commons.logging.LogFactory");
if (factoryClass != null ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Properties file specifies LogFactory subclass '" + factoryClass + "'" );
}factory=C$.newFactory$S$ClassLoader$ClassLoader(factoryClass, baseClassLoader, contextClassLoader);
} else {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Properties file has no entry specifying LogFactory subclass.");
}}} else {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] No properties file available to determine LogFactory subclass from..");
}}}if (factory == null ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Loading the default LogFactory implementation \'org.apache.commons.logging.impl.LogFactoryImpl\' via the same classloader that loaded this LogFactory class (ie not looking in the context classloader).");
}factory=C$.newFactory$S$ClassLoader$ClassLoader("org.apache.commons.logging.impl.LogFactoryImpl", C$.thisClassLoader, contextClassLoader);
}if (factory != null ) {
C$.cacheFactory$ClassLoader$org_apache_commons_logging_LogFactory(contextClassLoader, factory);
if (props != null ) {
var names=props.propertyNames$();
while (names.hasMoreElements$()){
var name=names.nextElement$();
var value=props.getProperty$S(name);
factory.setAttribute$S$O(name, value);
}
}}return factory;
}, 1);

Clazz.newMeth(C$, 'getLog$Class', function (clazz) {
return C$.getFactory$().getInstance$Class(clazz);
}, 1);

Clazz.newMeth(C$, 'getLog$S', function (name) {
return C$.getFactory$().getInstance$S(name);
}, 1);

Clazz.newMeth(C$, 'release$ClassLoader', function (classLoader) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Releasing factory for classloader " + C$.objectId$O(classLoader));
}var factories=C$.factories;
{
if (classLoader == null ) {
if (C$.nullClassLoaderFactory != null ) {
C$.nullClassLoaderFactory.release$();
C$.nullClassLoaderFactory=null;
}} else {
var factory=factories.get$O(classLoader);
if (factory != null ) {
factory.release$();
factories.remove$O(classLoader);
}}}}, 1);

Clazz.newMeth(C$, 'releaseAll$', function () {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Releasing factory for all classloaders.");
}var factories=C$.factories;
{
var elements=factories.elements$();
while (elements.hasMoreElements$()){
var element=elements.nextElement$();
element.release$();
}
factories.clear$();
if (C$.nullClassLoaderFactory != null ) {
C$.nullClassLoaderFactory.release$();
C$.nullClassLoaderFactory=null;
}}}, 1);

Clazz.newMeth(C$, 'getClassLoader$Class', function (clazz) {
try {
return clazz.getClassLoader$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Unable to get classloader for class '" + clazz + "' due to security restrictions - " + ex.getMessage$() );
}throw ex;
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
return C$.directGetContextClassLoader$();
}, 1);

Clazz.newMeth(C$, 'getContextClassLoaderInternal$', function () {
return $I$(5).doPrivileged$java_security_PrivilegedAction(((P$.LogFactory$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactory$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return P$.LogFactory.directGetContextClassLoader$();
});
})()
), Clazz.new_(P$.LogFactory$1.$init$, [this, null])));
}, 1);

Clazz.newMeth(C$, 'directGetContextClassLoader$', function () {
var classLoader=null;
try {
classLoader=$I$(6).currentThread$().getContextClassLoader$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
} else {
throw ex;
}
}
return classLoader;
}, 1);

Clazz.newMeth(C$, 'getCachedFactory$ClassLoader', function (contextClassLoader) {
if (contextClassLoader == null ) {
return C$.nullClassLoaderFactory;
} else {
return C$.factories.get$O(contextClassLoader);
}}, 1);

Clazz.newMeth(C$, 'cacheFactory$ClassLoader$org_apache_commons_logging_LogFactory', function (classLoader, factory) {
if (factory != null ) {
if (classLoader == null ) {
C$.nullClassLoaderFactory=factory;
} else {
C$.factories.put$TK$TV(classLoader, factory);
}}}, 1);

Clazz.newMeth(C$, 'newFactory$S$ClassLoader$ClassLoader', function (factoryClass, classLoader, contextClassLoader) {
var result=$I$(5).doPrivileged$java_security_PrivilegedAction(((P$.LogFactory$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactory$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return P$.LogFactory.createFactory$S$ClassLoader(this.$finals$.factoryClass, this.$finals$.classLoader);
});
})()
), Clazz.new_(P$.LogFactory$2.$init$, [this, {factoryClass:factoryClass,classLoader:classLoader}])));
if (Clazz.instanceOf(result, "org.apache.commons.logging.LogConfigurationException")) {
var ex=result;
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("An error occurred while loading the factory class:" + ex.getMessage$());
}throw ex;
}if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Created object " + C$.objectId$O(result) + " to manage classloader " + C$.objectId$O(contextClassLoader) );
}return result;
}, 1);

Clazz.newMeth(C$, 'newFactory$S$ClassLoader', function (factoryClass, classLoader) {
return C$.newFactory$S$ClassLoader$ClassLoader(factoryClass, classLoader, null);
}, 1);

Clazz.newMeth(C$, 'createFactory$S$ClassLoader', function (factoryClass, classLoader) {
var logFactoryClass=null;
try {
if (classLoader != null ) {
try {
logFactoryClass=classLoader.loadClass$S(factoryClass);
if (Clazz.getClass(C$).isAssignableFrom$Class(logFactoryClass)) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Loaded class " + logFactoryClass.getName$() + " from classloader " + C$.objectId$O(classLoader) );
}} else {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Factory class " + logFactoryClass.getName$() + " loaded from classloader " + C$.objectId$O(logFactoryClass.getClassLoader$()) + " does not extend '" + Clazz.getClass(C$).getName$() + "' as loaded by this classloader." );
C$.logHierarchy$S$ClassLoader("[BAD CL TREE] ", classLoader);
}}return logFactoryClass.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var ex = e$$;
{
if (classLoader === C$.thisClassLoader ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Unable to locate any class called '" + factoryClass + "' via classloader " + C$.objectId$O(classLoader) );
}throw ex;
}}
} else if (Clazz.exceptionOf(e$$,"NoClassDefFoundError")){
var e = e$$;
{
if (classLoader === C$.thisClassLoader ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Class '" + factoryClass + "' cannot be loaded" + " via classloader " + C$.objectId$O(classLoader) + " - it depends on some other class that cannot be found." );
}throw e;
}}
} else if (Clazz.exceptionOf(e$$,"ClassCastException")){
var e = e$$;
{
if (classLoader === C$.thisClassLoader ) {
var implementsLogFactory=C$.implementsLogFactory$Class(logFactoryClass);
var msg=Clazz.new_($I$(7,1));
msg.append$S("The application has specified that a custom LogFactory implementation ");
msg.append$S("should be used but Class \'");
msg.append$S(factoryClass);
msg.append$S("\' cannot be converted to \'");
msg.append$S(Clazz.getClass(C$).getName$());
msg.append$S("\'. ");
if (implementsLogFactory) {
msg.append$S("The conflict is caused by the presence of multiple LogFactory classes ");
msg.append$S("in incompatible classloaders. ");
msg.append$S("Background can be found in http://commons.apache.org/logging/tech.html. ");
msg.append$S("If you have not explicitly specified a custom LogFactory then it is likely ");
msg.append$S("that the container has set one without your knowledge. ");
msg.append$S("In this case, consider using the commons-logging-adapters.jar file or ");
msg.append$S("specifying the standard LogFactory from the command line. ");
} else {
msg.append$S("Please check the custom implementation. ");
}msg.append$S("Help can be found @http://commons.apache.org/logging/troubleshooting.html.");
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S(msg.toString());
}throw Clazz.new_(Clazz.load('ClassCastException').c$$S,[msg.toString()]);
}}
} else {
throw e$$;
}
}
}if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Unable to load factory class via classloader " + C$.objectId$O(classLoader) + " - trying the classloader associated with this LogFactory." );
}logFactoryClass=Clazz.forName(factoryClass);
return logFactoryClass.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("Unable to create LogFactory instance.");
}if (logFactoryClass != null  && !Clazz.getClass(C$).isAssignableFrom$Class(logFactoryClass) ) {
return Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$S$Throwable,["The chosen LogFactory implementation does not extend LogFactory. Please check your configuration.", e]);
}return Clazz.new_(Clazz.load('org.apache.commons.logging.LogConfigurationException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'implementsLogFactory$Class', function (logFactoryClass) {
var implementsLogFactory=false;
if (logFactoryClass != null ) {
try {
var logFactoryClassLoader=logFactoryClass.getClassLoader$();
if (logFactoryClassLoader == null ) {
C$.logDiagnostic$S("[CUSTOM LOG FACTORY] was loaded by the boot classloader");
} else {
C$.logHierarchy$S$ClassLoader("[CUSTOM LOG FACTORY] ", logFactoryClassLoader);
var factoryFromCustomLoader=Clazz.forName("org.apache.commons.logging.LogFactory", false, logFactoryClassLoader);
implementsLogFactory=factoryFromCustomLoader.isAssignableFrom$Class(logFactoryClass);
if (implementsLogFactory) {
C$.logDiagnostic$S("[CUSTOM LOG FACTORY] " + logFactoryClass.getName$() + " implements LogFactory but was loaded by an incompatible classloader." );
} else {
C$.logDiagnostic$S("[CUSTOM LOG FACTORY] " + logFactoryClass.getName$() + " does not implement LogFactory." );
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
C$.logDiagnostic$S("[CUSTOM LOG FACTORY] SecurityException thrown whilst trying to determine whether " + "the compatibility was caused by a classloader conflict: " + e.getMessage$() );
}
} else if (Clazz.exceptionOf(e$$,"LinkageError")){
var e = e$$;
{
C$.logDiagnostic$S("[CUSTOM LOG FACTORY] LinkageError thrown whilst trying to determine whether " + "the compatibility was caused by a classloader conflict: " + e.getMessage$() );
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
C$.logDiagnostic$S("[CUSTOM LOG FACTORY] LogFactory class cannot be loaded by classloader which loaded the custom LogFactory implementation. Is the custom factory in the right classloader?");
}
} else {
throw e$$;
}
}
}return implementsLogFactory;
}, 1);

Clazz.newMeth(C$, 'getResourceAsStream$ClassLoader$S', function (loader, name) {
return $I$(5).doPrivileged$java_security_PrivilegedAction(((P$.LogFactory$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactory$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.$finals$.loader != null ) {
return this.$finals$.loader.getResourceAsStream$S(this.$finals$.name);
} else {
return ClassLoader.getSystemResourceAsStream$S(this.$finals$.name);
}});
})()
), Clazz.new_(P$.LogFactory$3.$init$, [this, {loader:loader,name:name}])));
}, 1);

Clazz.newMeth(C$, 'getResources$ClassLoader$S', function (loader, name) {
var action=((P$.LogFactory$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactory$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
if (this.$finals$.loader != null ) {
return this.$finals$.loader.getResources$S(this.$finals$.name);
} else {
return ClassLoader.getSystemResources$S(this.$finals$.name);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
if (P$.LogFactory.isDiagnosticsEnabled$()) {
P$.LogFactory.logDiagnostic$S("Exception while trying to find configuration file " + this.$finals$.name + ":" + e.getMessage$() );
}return null;
}
} else if (Clazz.exceptionOf(e$$,"NoSuchMethodError")){
var e = e$$;
{
return null;
}
} else {
throw e$$;
}
}
});
})()
), Clazz.new_(P$.LogFactory$4.$init$, [this, {name:name,loader:loader}]));
var result=$I$(5).doPrivileged$java_security_PrivilegedAction(action);
return result;
}, 1);

Clazz.newMeth(C$, 'getProperties$java_net_URL', function (url) {
var action=((P$.LogFactory$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactory$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var stream=null;
try {
var connection=this.$finals$.url.openConnection$();
connection.setUseCaches$Z(false);
stream=connection.getInputStream$();
if (stream != null ) {
var props=Clazz.new_($I$(8,1));
props.load$java_io_InputStream(stream);
stream.close$();
stream=null;
return props;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (P$.LogFactory.isDiagnosticsEnabled$()) {
P$.LogFactory.logDiagnostic$S("Unable to read URL " + this.$finals$.url);
}} else {
throw e;
}
} finally {
if (stream != null ) {
try {
stream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (P$.LogFactory.isDiagnosticsEnabled$()) {
P$.LogFactory.logDiagnostic$S("Unable to close stream for URL " + this.$finals$.url);
}} else {
throw e;
}
}
}}
return null;
});
})()
), Clazz.new_(P$.LogFactory$5.$init$, [this, {url:url}]));
return $I$(5).doPrivileged$java_security_PrivilegedAction(action);
}, 1);

Clazz.newMeth(C$, 'getConfigurationFile$ClassLoader$S', function (classLoader, fileName) {
var props=null;
var priority=0.0;
var propsUrl=null;
try {
var urls=C$.getResources$ClassLoader$S(classLoader, fileName);
if (urls == null ) {
return null;
}while (urls.hasMoreElements$()){
var url=urls.nextElement$();
var newProps=C$.getProperties$java_net_URL(url);
if (newProps != null ) {
if (props == null ) {
propsUrl=url;
props=newProps;
var priorityStr=props.getProperty$S("priority");
priority=0.0;
if (priorityStr != null ) {
priority=Double.parseDouble$S(priorityStr);
}if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Properties file found at '" + url + "'" + " with priority " + new Double(priority).toString() );
}} else {
var newPriorityStr=newProps.getProperty$S("priority");
var newPriority=0.0;
if (newPriorityStr != null ) {
newPriority=Double.parseDouble$S(newPriorityStr);
}if (newPriority > priority ) {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Properties file at '" + url + "'" + " with priority " + new Double(newPriority).toString() + " overrides file at '" + propsUrl + "'" + " with priority " + new Double(priority).toString() );
}propsUrl=url;
props=newProps;
priority=newPriority;
} else {
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("[LOOKUP] Properties file at '" + url + "'" + " with priority " + new Double(newPriority).toString() + " does not override file at '" + propsUrl + "'" + " with priority " + new Double(priority).toString() );
}}}}}
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
if (C$.isDiagnosticsEnabled$()) {
C$.logDiagnostic$S("SecurityException thrown while trying to find/read config files.");
}} else {
throw e;
}
}
if (C$.isDiagnosticsEnabled$()) {
if (props == null ) {
C$.logDiagnostic$S("[LOOKUP] No properties file of name '" + fileName + "' found." );
} else {
C$.logDiagnostic$S("[LOOKUP] Properties file of name '" + fileName + "' found at '" + propsUrl + '\"' );
}}return props;
}, 1);

Clazz.newMeth(C$, 'getSystemProperty$S$S', function (key, def) {
return $I$(5).doPrivileged$java_security_PrivilegedAction(((P$.LogFactory$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "LogFactory$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return System.getProperty$S$S(this.$finals$.key, this.$finals$.def);
});
})()
), Clazz.new_(P$.LogFactory$6.$init$, [this, {def:def,key:key}])));
}, 1);

Clazz.newMeth(C$, 'initDiagnostics$', function () {
var dest;
try {
dest=C$.getSystemProperty$S$S("org.apache.commons.logging.diagnostics.dest", null);
if (dest == null ) {
return null;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
return null;
} else {
throw ex;
}
}
if (dest.equals$O("STDOUT")) {
return System.out;
} else if (dest.equals$O("STDERR")) {
return System.err;
} else {
try {
var fos=Clazz.new_($I$(9,1).c$$S$Z,[dest, true]);
return Clazz.new_($I$(10,1).c$$java_io_OutputStream,[fos]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
return null;
} else {
throw ex;
}
}
}}, 1);

Clazz.newMeth(C$, 'isDiagnosticsEnabled$', function () {
return C$.diagnosticsStream != null ;
}, 1);

Clazz.newMeth(C$, 'logDiagnostic$S', function (msg) {
if (C$.diagnosticsStream != null ) {
C$.diagnosticsStream.print$S(C$.diagnosticPrefix);
C$.diagnosticsStream.println$S(msg);
C$.diagnosticsStream.flush$();
}}, 1);

Clazz.newMeth(C$, 'logRawDiagnostic$S', function (msg) {
if (C$.diagnosticsStream != null ) {
C$.diagnosticsStream.println$S(msg);
C$.diagnosticsStream.flush$();
}}, 1);

Clazz.newMeth(C$, 'logClassLoaderEnvironment$Class', function (clazz) {
if (!C$.isDiagnosticsEnabled$()) {
return;
}try {
C$.logDiagnostic$S("[ENV] Extension directories (java.ext.dir): " + System.getProperty$S("java.ext.dir"));
C$.logDiagnostic$S("[ENV] Application classpath (java.class.path): " + System.getProperty$S("java.class.path"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
C$.logDiagnostic$S("[ENV] Security setting prevent interrogation of system classpaths.");
} else {
throw ex;
}
}
var className=clazz.getName$();
var classLoader;
try {
classLoader=C$.getClassLoader$Class(clazz);
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
C$.logDiagnostic$S("[ENV] Security forbids determining the classloader for " + className);
return;
} else {
throw ex;
}
}
C$.logDiagnostic$S("[ENV] Class " + className + " was loaded via classloader " + C$.objectId$O(classLoader) );
C$.logHierarchy$S$ClassLoader("[ENV] Ancestry of classloader which loaded " + className + " is " , classLoader);
}, 1);

Clazz.newMeth(C$, 'logHierarchy$S$ClassLoader', function (prefix, classLoader) {
if (!C$.isDiagnosticsEnabled$()) {
return;
}var systemClassLoader;
if (classLoader != null ) {
var classLoaderString=classLoader.toString();
C$.logDiagnostic$S(prefix + C$.objectId$O(classLoader) + " == '" + classLoaderString + "'" );
}try {
systemClassLoader=ClassLoader.getSystemClassLoader$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
C$.logDiagnostic$S(prefix + "Security forbids determining the system classloader.");
return;
} else {
throw ex;
}
}
if (classLoader != null ) {
var buf=Clazz.new_($I$(7,1).c$$S,[prefix + "ClassLoader tree:"]);
for (; ; ) {
buf.append$S(C$.objectId$O(classLoader));
if (classLoader === systemClassLoader ) {
buf.append$S(" (SYSTEM) ");
}try {
classLoader=classLoader.getParent$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"SecurityException")){
buf.append$S(" --> SECRET");
break;
} else {
throw ex;
}
}
buf.append$S(" --> ");
if (classLoader == null ) {
buf.append$S("BOOT");
break;
}}
C$.logDiagnostic$S(buf.toString());
}}, 1);

Clazz.newMeth(C$, 'objectId$O', function (o) {
if (o == null ) {
return "null";
} else {
return o.getClass$().getName$() + "@" + System.identityHashCode$O(o) ;
}}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-27 10:30:36 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
