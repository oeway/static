(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'org.apache.logging.log4j.status.StatusLogger','java.lang.ref.WeakReference','org.apache.logging.log4j.spi.LoggerContextFactory','org.apache.logging.log4j.spi.ThreadContextMap','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Provider");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DEFAULT_PRIORITY=Integer.valueOf$I(-1);
C$.LOGGER=$I$(1).getLogger$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['className','threadContextMap','versions'],'O',['priority','Integer','loggerContextFactoryClass','Class','+threadContextMapClass','url','java.net.URL','classLoader','java.lang.ref.WeakReference']]
,['S',['FACTORY_PRIORITY','THREAD_CONTEXT_MAP','LOGGER_CONTEXT_FACTORY'],'O',['DEFAULT_PRIORITY','Integer','LOGGER','org.apache.logging.log4j.Logger']]]

Clazz.newMeth(C$, 'c$$java_util_Properties$java_net_URL$ClassLoader', function (props, url, classLoader) {
;C$.$init$.apply(this);
this.url=url;
this.classLoader=Clazz.new_(1,{T:"ClassLoader"},$I$(2,1).c$$TT,[classLoader]);
var weight=props.getProperty$S("FactoryPriority");
this.priority=weight == null  ? C$.DEFAULT_PRIORITY : Integer.valueOf$S(weight);
this.className=props.getProperty$S("LoggerContextFactory");
this.threadContextMap=props.getProperty$S("ThreadContextMap");
this.loggerContextFactoryClass=null;
this.threadContextMapClass=null;
this.versions=null;
}, 1);

Clazz.newMeth(C$, 'c$$Integer$S$Class', function (priority, versions, loggerContextFactoryClass) {
C$.c$$Integer$S$Class$Class.apply(this, [priority, versions, loggerContextFactoryClass, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Integer$S$Class$Class', function (priority, versions, loggerContextFactoryClass, threadContextMapClass) {
;C$.$init$.apply(this);
this.url=null;
this.classLoader=null;
this.priority=priority;
this.loggerContextFactoryClass=loggerContextFactoryClass;
this.threadContextMapClass=threadContextMapClass;
this.className=null;
this.threadContextMap=null;
this.versions=versions;
}, 1);

Clazz.newMeth(C$, 'getVersions$', function () {
return this.versions;
});

Clazz.newMeth(C$, 'getPriority$', function () {
return this.priority;
});

Clazz.newMeth(C$, 'getClassName$', function () {
if (this.loggerContextFactoryClass != null ) {
return this.loggerContextFactoryClass.getName$();
}return this.className;
});

Clazz.newMeth(C$, 'loadLoggerContextFactory$', function () {
if (this.loggerContextFactoryClass != null ) {
return this.loggerContextFactoryClass;
}if (this.className == null ) {
return null;
}var loader=this.classLoader.get$();
if (loader == null ) {
return null;
}try {
var clazz=loader.loadClass$S(this.className);
if (Clazz.getClass($I$(3),['getContext$S$ClassLoader$O$Z','getContext$S$ClassLoader$O$Z$java_net_URI$S','removeContext$org_apache_logging_log4j_spi_LoggerContext']).isAssignableFrom$Class(clazz)) {
return clazz.asSubclass$Class(Clazz.getClass($I$(3),['getContext$S$ClassLoader$O$Z','getContext$S$ClassLoader$O$Z$java_net_URI$S','removeContext$org_apache_logging_log4j_spi_LoggerContext']));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.LOGGER.error$S$O$O$O("Unable to create class {} specified in {}", this.className, this.url.toString(), e);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getThreadContextMap$', function () {
if (this.threadContextMapClass != null ) {
return this.threadContextMapClass.getName$();
}return this.threadContextMap;
});

Clazz.newMeth(C$, 'loadThreadContextMap$', function () {
if (this.threadContextMapClass != null ) {
return this.threadContextMapClass;
}if (this.threadContextMap == null ) {
return null;
}var loader=this.classLoader.get$();
if (loader == null ) {
return null;
}try {
var clazz=loader.loadClass$S(this.threadContextMap);
if (Clazz.getClass($I$(4),['clear$','containsKey$S','get$S','getCopy$','getImmutableMapOrNull$','isEmpty$','put$S$S','remove$S']).isAssignableFrom$Class(clazz)) {
return clazz.asSubclass$Class(Clazz.getClass($I$(4),['clear$','containsKey$S','get$S','getCopy$','getImmutableMapOrNull$','isEmpty$','put$S$S','remove$S']));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
C$.LOGGER.error$S$O$O$O("Unable to create class {} specified in {}", this.threadContextMap, this.url.toString(), e);
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getUrl$', function () {
return this.url;
});

Clazz.newMeth(C$, 'toString', function () {
var result=Clazz.new_($I$(5,1).c$$S,["Provider["]);
if (!C$.DEFAULT_PRIORITY.equals$O(this.priority)) {
result.append$S("priority=").append$O(this.priority).append$S(", ");
}if (this.threadContextMap != null ) {
result.append$S("threadContextMap=").append$S(this.threadContextMap).append$S(", ");
} else if (this.threadContextMapClass != null ) {
result.append$S("threadContextMapClass=").append$S(this.threadContextMapClass.getName$());
}if (this.className != null ) {
result.append$S("className=").append$S(this.className).append$S(", ");
} else if (this.loggerContextFactoryClass != null ) {
result.append$S("class=").append$S(this.loggerContextFactoryClass.getName$());
}if (this.url != null ) {
result.append$S("url=").append$O(this.url);
}var loader;
if (this.classLoader == null  || (loader=this.classLoader.get$()) == null  ) {
result.append$S(", classLoader=null(not reachable)");
} else {
result.append$S(", classLoader=").append$O(loader);
}result.append$S("]");
return result.toString();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var provider=o;
if (this.priority != null  ? !this.priority.equals$O(provider.priority) : provider.priority != null ) {
return false;
}if (this.className != null  ? !this.className.equals$O(provider.className) : provider.className != null ) {
return false;
}if (this.loggerContextFactoryClass != null  ? !this.loggerContextFactoryClass.equals$O(provider.loggerContextFactoryClass) : provider.loggerContextFactoryClass != null ) {
return false;
}return this.versions != null  ? this.versions.equals$O(provider.versions) : provider.versions == null ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=this.priority != null  ? this.priority.hashCode$() : 0;
result=31 * result + (this.className != null  ? this.className.hashCode$() : 0);
result=31 * result + (this.loggerContextFactoryClass != null  ? this.loggerContextFactoryClass.hashCode$() : 0);
result=31 * result + (this.versions != null  ? this.versions.hashCode$() : 0);
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
