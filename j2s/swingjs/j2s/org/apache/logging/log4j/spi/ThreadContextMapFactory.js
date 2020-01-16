(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'org.apache.logging.log4j.status.StatusLogger','org.apache.logging.log4j.spi.CopyOnWriteSortedArrayThreadContextMap','org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap','org.apache.logging.log4j.spi.DefaultThreadContextMap','org.apache.logging.log4j.util.PropertiesUtil','org.apache.logging.log4j.util.ProviderUtil','org.apache.logging.log4j.spi.ThreadContextMap','org.apache.logging.log4j.LogManager','org.apache.logging.log4j.util.Constants']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThreadContextMapFactory");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOGGER=$I$(1).getLogger$();
{
C$.initPrivate$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['GcFreeThreadContextKey'],'S',['THREAD_CONTEXT_KEY','GC_FREE_THREAD_CONTEXT_KEY','ThreadContextMapName'],'O',['LOGGER','org.apache.logging.log4j.Logger']]]

Clazz.newMeth(C$, 'init$', function () {
$I$(2).init$();
$I$(3).init$();
$I$(4).init$();
C$.initPrivate$();
}, 1);

Clazz.newMeth(C$, 'initPrivate$', function () {
var properties=$I$(5).getProperties$();
C$.ThreadContextMapName=properties.getStringProperty$S("log4j2.threadContextMap");
C$.GcFreeThreadContextKey=properties.getBooleanProperty$S("log4j2.garbagefree.threadContextMap");
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createThreadContextMap$', function () {
var cl=$I$(6).findClassLoader$();
var result=null;
if (C$.ThreadContextMapName != null ) {
try {
var clazz=cl.loadClass$S(C$.ThreadContextMapName);
if (Clazz.getClass($I$(7),['clear$','containsKey$S','get$S','getCopy$','getImmutableMapOrNull$','isEmpty$','put$S$S','remove$S']).isAssignableFrom$Class(clazz)) {
result=clazz.newInstance$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cnfe = e$$;
{
C$.LOGGER.error$S$O("Unable to locate configured ThreadContextMap {}", C$.ThreadContextMapName);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
C$.LOGGER.error$S$O$O("Unable to create configured ThreadContextMap {}", C$.ThreadContextMapName, ex);
}
} else {
throw e$$;
}
}
}if (result == null  && $I$(6).hasProviders$()  && $I$(8).getFactory$() != null  ) {
var factoryClassName=$I$(8).getFactory$().getClass$().getName$();
for (var provider, $provider = $I$(6).getProviders$().iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
if (factoryClassName.equals$O(provider.getClassName$())) {
var clazz=provider.loadThreadContextMap$();
if (clazz != null ) {
try {
result=clazz.newInstance$();
break;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.LOGGER.error$S$O$O("Unable to locate or load configured ThreadContextMap {}", provider.getThreadContextMap$(), e);
result=C$.createDefaultThreadContextMap$();
} else {
throw e;
}
}
}}}
}if (result == null ) {
result=C$.createDefaultThreadContextMap$();
}return result;
}, 1);

Clazz.newMeth(C$, 'createDefaultThreadContextMap$', function () {
if ($I$(9).ENABLE_THREADLOCALS) {
if (C$.GcFreeThreadContextKey) {
return Clazz.new_($I$(3,1));
}return Clazz.new_($I$(2,1));
}return Clazz.new_($I$(4,1).c$$Z,[true]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
