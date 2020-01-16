(function(){var P$=Clazz.newPackage("org.apache.logging.log4j"),I$=[[0,'org.apache.logging.log4j.status.StatusLogger','org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.spi.LoggerContextFactory','java.util.TreeMap','org.apache.logging.log4j.util.ProviderUtil','org.apache.logging.log4j.simple.SimpleLoggerContextFactory','StringBuilder','org.apache.logging.log4j.util.StackLocatorUtil','org.apache.logging.log4j.message.StringFormatterMessageFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogManager");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOGGER=$I$(1).getLogger$();
C$.FQCN=Clazz.getClass(C$).getName$();
{
var managerProps=$I$(2).getProperties$();
var factoryClassName=managerProps.getStringProperty$S("log4j2.loggerContextFactory");
if (factoryClassName != null ) {
try {
C$.factory=$I$(3).newCheckedInstanceOf$S$Class(factoryClassName, Clazz.getClass($I$(4),['getContext$S$ClassLoader$O$Z','getContext$S$ClassLoader$O$Z$java_net_URI$S','removeContext$org_apache_logging_log4j_spi_LoggerContext']));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cnfe = e$$;
{
C$.LOGGER.error$S$O("Unable to locate configured LoggerContextFactory {}", factoryClassName);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
C$.LOGGER.error$S$O$O("Unable to create configured LoggerContextFactory {}", factoryClassName, ex);
}
} else {
throw e$$;
}
}
}if (C$.factory == null ) {
var factories=Clazz.new_(1,{V:"Integer",K:"org.apache.logging.log4j.spi.LoggerContextFactory"},$I$(5,1));
if ($I$(6).hasProviders$()) {
for (var provider, $provider = $I$(6).getProviders$().iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
var factoryClass=provider.loadLoggerContextFactory$();
if (factoryClass != null ) {
try {
factories.put$TK$TV(provider.getPriority$(), factoryClass.newInstance$());
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.LOGGER.error$S$O$O$O("Unable to create class {} specified in provider URL {}", factoryClass.getName$(), provider.getUrl$(), e);
} else {
throw e;
}
}
}}
if (factories.isEmpty$()) {
C$.LOGGER.error$S("Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...");
C$.factory=Clazz.new_($I$(7,1));
} else if (factories.size$() == 1) {
C$.factory=factories.get$O(factories.lastKey$());
} else {
var sb=Clazz.new_($I$(8,1).c$$S,["Multiple logging implementations found: \n"]);
for (var entry, $entry = factories.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
sb.append$S("Factory: ").append$S(entry.getValue$().getClass$().getName$());
sb.append$S(", Weighting: ").append$O(entry.getKey$()).append$C("\n");
}
C$.factory=factories.get$O(factories.lastKey$());
sb.append$S("Using factory: ").append$S(C$.factory.getClass$().getName$());
C$.LOGGER.warn$S(sb.toString());
}} else {
C$.LOGGER.error$S("Log4j2 could not find a logging implementation. Please add log4j-core to the classpath. Using SimpleLogger to log to the console...");
C$.factory=Clazz.new_($I$(7,1));
}}};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['FACTORY_PROPERTY_NAME','ROOT_LOGGER_NAME','FQCN'],'O',['LOGGER','org.apache.logging.log4j.Logger','factory','org.apache.logging.log4j.spi.LoggerContextFactory']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'exists$S', function (name) {
return C$.getContext$().hasLogger$S(name);
}, 1);

Clazz.newMeth(C$, 'getContext$', function () {
try {
return C$.factory.getContext$S$ClassLoader$O$Z(C$.FQCN, null, null, true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z(C$.FQCN, null, null, true);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$Z', function (currentContext) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, null, null, currentContext, null, null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, null, null, currentContext, null, null);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$ClassLoader$Z', function (loader, currentContext) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z(C$.FQCN, loader, null, currentContext);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z(C$.FQCN, loader, null, currentContext);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$ClassLoader$Z$O', function (loader, currentContext, externalContext) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z(C$.FQCN, loader, externalContext, currentContext);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z(C$.FQCN, loader, externalContext, currentContext);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$ClassLoader$Z$java_net_URI', function (loader, currentContext, configLocation) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, loader, null, currentContext, configLocation, null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, loader, null, currentContext, configLocation, null);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$ClassLoader$Z$O$java_net_URI', function (loader, currentContext, externalContext, configLocation) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, loader, externalContext, currentContext, configLocation, null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, loader, externalContext, currentContext, configLocation, null);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$ClassLoader$Z$O$java_net_URI$S', function (loader, currentContext, externalContext, configLocation, name) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, loader, externalContext, currentContext, configLocation, name);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z$java_net_URI$S(C$.FQCN, loader, externalContext, currentContext, configLocation, name);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$S$Z', function (fqcn, currentContext) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z(fqcn, null, null, currentContext);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z(fqcn, null, null, currentContext);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$S$ClassLoader$Z', function (fqcn, loader, currentContext) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z(fqcn, loader, null, currentContext);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z(fqcn, loader, null, currentContext);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'getContext$S$ClassLoader$Z$java_net_URI$S', function (fqcn, loader, currentContext, configLocation, name) {
try {
return C$.factory.getContext$S$ClassLoader$O$Z$java_net_URI$S(fqcn, loader, null, currentContext, configLocation, name);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalStateException")){
C$.LOGGER.warn$S(ex.getMessage$() + " Using SimpleLogger");
return Clazz.new_($I$(7,1)).getContext$S$ClassLoader$O$Z(fqcn, loader, null, currentContext);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'shutdown$', function () {
C$.shutdown$Z(false);
}, 1);

Clazz.newMeth(C$, 'shutdown$Z', function (currentContext) {
C$.shutdown$org_apache_logging_log4j_spi_LoggerContext(C$.getContext$Z(currentContext));
}, 1);

Clazz.newMeth(C$, 'shutdown$org_apache_logging_log4j_spi_LoggerContext', function (context) {
if (context != null  && Clazz.instanceOf(context, "org.apache.logging.log4j.spi.Terminable") ) {
(context).terminate$();
}}, 1);

Clazz.newMeth(C$, 'toLoggerName$Class', function (cls) {
var canonicalName=cls.getCanonicalName$();
return canonicalName != null  ? canonicalName : cls.getName$();
}, 1);

Clazz.newMeth(C$, 'getFactory$', function () {
return C$.factory;
}, 1);

Clazz.newMeth(C$, 'setFactory$org_apache_logging_log4j_spi_LoggerContextFactory', function (factory) {
C$.factory=factory;
}, 1);

Clazz.newMeth(C$, 'getFormatterLogger$', function () {
return C$.getFormatterLogger$Class($I$(9).getCallerClass$I(2));
}, 1);

Clazz.newMeth(C$, 'getFormatterLogger$Class', function (clazz) {
return C$.getLogger$Class$org_apache_logging_log4j_message_MessageFactory(clazz != null  ? clazz : $I$(9).getCallerClass$I(2), $I$(10).INSTANCE);
}, 1);

Clazz.newMeth(C$, 'getFormatterLogger$O', function (value) {
return C$.getLogger$Class$org_apache_logging_log4j_message_MessageFactory(value != null  ? value.getClass$() : $I$(9).getCallerClass$I(2), $I$(10).INSTANCE);
}, 1);

Clazz.newMeth(C$, 'getFormatterLogger$S', function (name) {
return name == null  ? C$.getFormatterLogger$Class($I$(9).getCallerClass$I(2)) : C$.getLogger$S$org_apache_logging_log4j_message_MessageFactory(name, $I$(10).INSTANCE);
}, 1);

Clazz.newMeth(C$, 'callerClass$Class', function (clazz) {
if (clazz != null ) {
return clazz;
}var candidate=$I$(9).getCallerClass$I(3);
if (candidate == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["No class provided, and an appropriate one cannot be found."]);
}return candidate;
}, 1);

Clazz.newMeth(C$, 'getLogger$', function () {
return C$.getLogger$Class($I$(9).getCallerClass$I(2));
}, 1);

Clazz.newMeth(C$, 'getLogger$Class', function (clazz) {
var cls=C$.callerClass$Class(clazz);
return C$.getContext$ClassLoader$Z(cls.getClassLoader$(), false).getLogger$S(C$.toLoggerName$Class(cls));
}, 1);

Clazz.newMeth(C$, 'getLogger$Class$org_apache_logging_log4j_message_MessageFactory', function (clazz, messageFactory) {
var cls=C$.callerClass$Class(clazz);
return C$.getContext$ClassLoader$Z(cls.getClassLoader$(), false).getLogger$S$org_apache_logging_log4j_message_MessageFactory(C$.toLoggerName$Class(cls), messageFactory);
}, 1);

Clazz.newMeth(C$, 'getLogger$org_apache_logging_log4j_message_MessageFactory', function (messageFactory) {
return C$.getLogger$Class$org_apache_logging_log4j_message_MessageFactory($I$(9).getCallerClass$I(2), messageFactory);
}, 1);

Clazz.newMeth(C$, 'getLogger$O', function (value) {
return C$.getLogger$Class(value != null  ? value.getClass$() : $I$(9).getCallerClass$I(2));
}, 1);

Clazz.newMeth(C$, 'getLogger$O$org_apache_logging_log4j_message_MessageFactory', function (value, messageFactory) {
return C$.getLogger$Class$org_apache_logging_log4j_message_MessageFactory(value != null  ? value.getClass$() : $I$(9).getCallerClass$I(2), messageFactory);
}, 1);

Clazz.newMeth(C$, 'getLogger$S', function (name) {
return name != null  ? C$.getContext$Z(false).getLogger$S(name) : C$.getLogger$Class($I$(9).getCallerClass$I(2));
}, 1);

Clazz.newMeth(C$, 'getLogger$S$org_apache_logging_log4j_message_MessageFactory', function (name, messageFactory) {
return name != null  ? C$.getContext$Z(false).getLogger$S$org_apache_logging_log4j_message_MessageFactory(name, messageFactory) : C$.getLogger$Class$org_apache_logging_log4j_message_MessageFactory($I$(9).getCallerClass$I(2), messageFactory);
}, 1);

Clazz.newMeth(C$, 'getLogger$S$S', function (fqcn, name) {
return C$.factory.getContext$S$ClassLoader$O$Z(fqcn, null, null, false).getLogger$S(name);
}, 1);

Clazz.newMeth(C$, 'getRootLogger$', function () {
return C$.getLogger$S("");
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:54 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
