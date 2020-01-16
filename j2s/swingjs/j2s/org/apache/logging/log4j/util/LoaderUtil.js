(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'Thread','org.apache.logging.log4j.util.LoaderUtil','java.util.Objects',['org.apache.logging.log4j.util.LoaderUtil','.ThreadContextClassLoaderGetter'],'RuntimePermission','java.security.AccessController','java.util.ArrayList','org.apache.logging.log4j.util.LowLevelLogUtil','org.apache.logging.log4j.util.PropertiesUtil','java.util.LinkedHashSet',['org.apache.logging.log4j.util.LoaderUtil','.UrlResource']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoaderUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.SECURITY_MANAGER=System.getSecurityManager$();
C$.TCCL_GETTER=Clazz.new_($I$(4,1));
{
if (C$.SECURITY_MANAGER != null ) {
var getClassLoaderDisabled;
try {
C$.SECURITY_MANAGER.checkPermission$java_security_Permission(Clazz.new_($I$(5,1).c$$S,["getClassLoader"]));
getClassLoaderDisabled=false;
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"SecurityException")){
getClassLoaderDisabled=true;
} else {
throw ignored;
}
}
C$.GET_CLASS_LOADER_DISABLED=getClassLoaderDisabled;
} else {
C$.GET_CLASS_LOADER_DISABLED=false;
}};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['GET_CLASS_LOADER_DISABLED'],'S',['IGNORE_TCCL_PROPERTY'],'O',['SECURITY_MANAGER','SecurityManager','ignoreTCCL','Boolean','TCCL_GETTER','java.security.PrivilegedAction']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getThreadContextClassLoader$', function () {
if (C$.GET_CLASS_LOADER_DISABLED) {
return Clazz.getClass(C$).getClassLoader$();
}return C$.SECURITY_MANAGER == null  ? C$.TCCL_GETTER.run$() : $I$(6).doPrivileged$java_security_PrivilegedAction(C$.TCCL_GETTER);
}, 1);

Clazz.newMeth(C$, 'getClassLoaders$', function () {
var classLoaders=Clazz.new_(1,{E:"ClassLoader"},$I$(7,1));
var tcl=C$.getThreadContextClassLoader$();
classLoaders.add$TE(tcl);
var current=Clazz.getClass(C$).getClassLoader$();
if (current != null  && current !== tcl  ) {
classLoaders.add$TE(current);
var parent=current.getParent$();
while (parent != null  && !classLoaders.contains$O(parent) ){
classLoaders.add$TE(parent);
}
}var parent=tcl == null  ? null : tcl.getParent$();
while (parent != null  && !classLoaders.contains$O(parent) ){
classLoaders.add$TE(parent);
parent=parent.getParent$();
}
var systemClassLoader=ClassLoader.getSystemClassLoader$();
if (!classLoaders.contains$O(systemClassLoader)) {
classLoaders.add$TE(systemClassLoader);
}return classLoaders.toArray$__TA(Clazz.array(ClassLoader, [classLoaders.size$()]));
}, 1);

Clazz.newMeth(C$, 'isClassAvailable$S', function (className) {
try {
var clazz=C$.loadClass$S(className);
return clazz != null ;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException") || Clazz.exceptionOf(e$$,"LinkageError")){
var e = e$$;
{
return false;
}
} else {
var e = e$$;
{
$I$(8).logException$S$Throwable("Unknown error checking for existence of class: " + className, e);
return false;
}
}
}
}, 1);

Clazz.newMeth(C$, 'loadClass$S', function (className) {
if (C$.isIgnoreTccl$()) {
return Clazz.forName(className);
}try {
return C$.getThreadContextClassLoader$().loadClass$S(className);
} catch (ignored) {
return Clazz.forName(className);
}
}, 1);

Clazz.newMeth(C$, 'newInstanceOf$Class', function (clazz) {
try {
return clazz.getConstructor$ClassA([]).newInstance$OA([]);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"NoSuchMethodException")){
return clazz.newInstance$();
} else {
throw ignored;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstanceOf$S', function (className) {
return C$.newInstanceOf$Class(C$.loadClass$S(className));
}, 1);

Clazz.newMeth(C$, 'newCheckedInstanceOf$S$Class', function (className, clazz) {
return clazz.cast$O(C$.newInstanceOf$S(className));
}, 1);

Clazz.newMeth(C$, 'newCheckedInstanceOfProperty$S$Class', function (propertyName, clazz) {
var className=$I$(9).getProperties$().getStringProperty$S(propertyName);
if (className == null ) {
return null;
}return C$.newCheckedInstanceOf$S$Class(className, clazz);
}, 1);

Clazz.newMeth(C$, 'isIgnoreTccl$', function () {
if (C$.ignoreTCCL == null ) {
var ignoreTccl=$I$(9).getProperties$().getStringProperty$S$S("log4j.ignoreTCL", null);
C$.ignoreTCCL=new Boolean(ignoreTccl != null  && !"false".equalsIgnoreCase$S(ignoreTccl.trim$()) );
}return (C$.ignoreTCCL).valueOf();
}, 1);

Clazz.newMeth(C$, 'findResources$S', function (resource) {
var urlResources=C$.findUrlResources$S(resource);
var resources=Clazz.new_(1,{E:"java.net.URL"},$I$(10,1).c$$I,[urlResources.size$()]);
for (var urlResource, $urlResource = urlResources.iterator$(); $urlResource.hasNext$()&&((urlResource=($urlResource.next$())),1);) {
resources.add$TE(urlResource.getUrl$());
}
return resources;
}, 1);

Clazz.newMeth(C$, 'findUrlResources$S', function (resource) {
var candidates=Clazz.array(ClassLoader, -1, [C$.getThreadContextClassLoader$(), Clazz.getClass(C$).getClassLoader$(), C$.GET_CLASS_LOADER_DISABLED ? null : ClassLoader.getSystemClassLoader$()]);
var resources=Clazz.new_(1,{E:"org.apache.logging.log4j.util.LoaderUtil.UrlResource"},$I$(10,1));
for (var cl, $cl = 0, $$cl = candidates; $cl<$$cl.length&&((cl=($$cl[$cl])),1);$cl++) {
if (cl != null ) {
try {
var resourceEnum=cl.getResources$S(resource);
while (resourceEnum.hasMoreElements$()){
resources.add$TE(Clazz.new_($I$(11,1).c$$ClassLoader$java_net_URL,[cl, resourceEnum.nextElement$()]));
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(8).logException$Throwable(e);
} else {
throw e;
}
}
}}
return resources;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoaderUtil, "ThreadContextClassLoaderGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.security.PrivilegedAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var cl=$I$(1).currentThread$().getContextClassLoader$();
if (cl != null ) {
return cl;
}var ccl=Clazz.getClass($I$(2)).getClassLoader$();
return ccl == null  && !$I$(2).GET_CLASS_LOADER_DISABLED  ? ClassLoader.getSystemClassLoader$() : ccl;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoaderUtil, "UrlResource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['classLoader','ClassLoader','url','java.net.URL']]]

Clazz.newMeth(C$, 'c$$ClassLoader$java_net_URL', function (classLoader, url) {
;C$.$init$.apply(this);
this.classLoader=classLoader;
this.url=url;
}, 1);

Clazz.newMeth(C$, 'getClassLoader$', function () {
return this.classLoader;
});

Clazz.newMeth(C$, 'getUrl$', function () {
return this.url;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (this.classLoader != null  ? !this.classLoader.equals$O(that.classLoader) : that.classLoader != null ) {
return false;
}if (this.url != null  ? !this.url.equals$O(that.url) : that.url != null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(3).hashCode$O(this.classLoader) + $I$(3).hashCode$O(this.url);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
