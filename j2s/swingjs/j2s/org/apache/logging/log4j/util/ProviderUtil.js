(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.util.HashSet','java.util.concurrent.locks.ReentrantLock','org.apache.logging.log4j.status.StatusLogger','org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.spi.Provider','java.util.ServiceLoader','Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProviderUtil");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.PROVIDERS=Clazz.new_(1,{E:"org.apache.logging.log4j.spi.Provider"},$I$(1,1));
C$.STARTUP_LOCK=Clazz.new_($I$(2,1));
C$.COMPATIBLE_API_VERSIONS=Clazz.array(String, -1, ["2.6.0"]);
C$.LOGGER=$I$(3).getLogger$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['S',['PROVIDER_RESOURCE','API_VERSION'],'O',['PROVIDERS','java.util.Collection','STARTUP_LOCK','java.util.concurrent.locks.Lock','COMPATIBLE_API_VERSIONS','String[]','LOGGER','org.apache.logging.log4j.Logger','instance','org.apache.logging.log4j.util.ProviderUtil']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
for (var classLoader, $classLoader = 0, $$classLoader = $I$(4).getClassLoaders$(); $classLoader<$$classLoader.length&&((classLoader=($$classLoader[$classLoader])),1);$classLoader++) {
try {
C$.loadProviders$ClassLoader(classLoader);
} catch (ex) {
C$.LOGGER.debug$S$O$O("Unable to retrieve provider from ClassLoader {}", classLoader, ex);
}
}
for (var resource, $resource = $I$(4).findUrlResources$S("META-INF/log4j-provider.properties").iterator$(); $resource.hasNext$()&&((resource=($resource.next$())),1);) {
C$.loadProvider$java_net_URL$ClassLoader(resource.getUrl$(), resource.getClassLoader$());
}
}, 1);

Clazz.newMeth(C$, 'addProvider$org_apache_logging_log4j_spi_Provider', function (provider) {
C$.PROVIDERS.add$TE(provider);
C$.LOGGER.debug$S$O("Loaded Provider {}", provider);
}, 1);

Clazz.newMeth(C$, 'loadProvider$java_net_URL$ClassLoader', function (url, cl) {
try {
var props=$I$(5).loadClose$java_io_InputStream$O(url.openStream$(), url);
if (C$.validVersion$S(props.getProperty$S("Log4jAPIVersion"))) {
var provider=Clazz.new_($I$(6,1).c$$java_util_Properties$java_net_URL$ClassLoader,[props, url, cl]);
C$.PROVIDERS.add$TE(provider);
C$.LOGGER.debug$S$O("Loaded Provider {}", provider);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
C$.LOGGER.error$S$O$O("Unable to open {}", url, e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'loadProviders$ClassLoader', function (classLoader) {
var serviceLoader=$I$(7).load$Class$ClassLoader(Clazz.getClass($I$(6)), classLoader);
for (var provider, $provider = serviceLoader.iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
if (C$.validVersion$S(provider.getVersions$()) && !C$.PROVIDERS.contains$O(provider) ) {
C$.PROVIDERS.add$TE(provider);
}}
}, 1);

Clazz.newMeth(C$, 'loadProviders$java_util_Enumeration$ClassLoader', function (urls, cl) {
if (urls != null ) {
while (urls.hasMoreElements$()){
C$.loadProvider$java_net_URL$ClassLoader(urls.nextElement$(), cl);
}
}}, 1);

Clazz.newMeth(C$, 'getProviders$', function () {
C$.lazyInit$();
return C$.PROVIDERS;
}, 1);

Clazz.newMeth(C$, 'hasProviders$', function () {
C$.lazyInit$();
return !C$.PROVIDERS.isEmpty$();
}, 1);

Clazz.newMeth(C$, 'lazyInit$', function () {
if (C$.instance == null ) {
try {
C$.STARTUP_LOCK.lockInterruptibly$();
try {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}} finally {
C$.STARTUP_LOCK.unlock$();
}
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
C$.LOGGER.fatal$S$Throwable("Interrupted before Log4j Providers could be loaded.", e);
$I$(8).currentThread$().interrupt$();
} else {
throw e;
}
}
}}, 1);

Clazz.newMeth(C$, 'findClassLoader$', function () {
return $I$(4).getThreadContextClassLoader$();
}, 1);

Clazz.newMeth(C$, 'validVersion$S', function (version) {
for (var v, $v = 0, $$v = C$.COMPATIBLE_API_VERSIONS; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
if (version.startsWith$S(v)) {
return true;
}}
return false;
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
