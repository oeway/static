(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'java.util.TreeSet','sun.misc.ServiceConfigurationError','java.util.ArrayList','java.io.BufferedReader','java.io.InputStreamReader',['sun.misc.Service','.LazyIterator'],'Thread']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Service", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LazyIterator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fail$Class$S$Throwable', function (service, msg, cause) {
var sce=Clazz.new_($I$(2,1).c$$S,[service.getName$() + ": " + msg ]);
sce.initCause$Throwable(cause);
throw sce;
}, 1);

Clazz.newMeth(C$, 'fail$Class$S', function (service, msg) {
throw Clazz.new_($I$(2,1).c$$S,[service.getName$() + ": " + msg ]);
}, 1);

Clazz.newMeth(C$, 'fail$Class$java_net_URL$I$S', function (service, u, line, msg) {
C$.fail$Class$S(service, u + ":" + line + ": " + msg );
}, 1);

Clazz.newMeth(C$, 'parseLine$Class$java_net_URL$java_io_BufferedReader$I$java_util_List$java_util_Set', function (service, u, r, lc, names, returned) {
var ln=r.readLine$();
if (ln == null ) {
return -1;
}var ci=ln.indexOf$I("#");
if (ci >= 0) ln=ln.substring$I$I(0, ci);
ln=ln.trim$();
var n=ln.length$();
if (n != 0) {
if ((ln.indexOf$I(" ") >= 0) || (ln.indexOf$I("\t") >= 0) ) C$.fail$Class$java_net_URL$I$S(service, u, lc, "Illegal configuration-file syntax");
var cp=ln.codePointAt$I(0);
if (!Character.isJavaIdentifierStart$I(cp)) C$.fail$Class$java_net_URL$I$S(service, u, lc, "Illegal provider-class name: " + ln);
for (var i=Character.charCount$I(cp); i < n; i+=Character.charCount$I(cp)) {
cp=ln.codePointAt$I(i);
if (!Character.isJavaIdentifierPart$I(cp) && (cp != 46 ) ) C$.fail$Class$java_net_URL$I$S(service, u, lc, "Illegal provider-class name: " + ln);
}
if (!returned.contains$O(ln)) {
names.add$TE(ln);
returned.add$TE(ln);
}}return lc + 1;
}, 1);

Clazz.newMeth(C$, 'parse$Class$java_net_URL$java_util_Set', function (service, u, returned) {
var $in=null;
var r=null;
var names=Clazz.new_(1,{E:"String"},$I$(3,1));
try {
$in=u.openStream$();
r=Clazz.new_($I$(4,1).c$$java_io_Reader,[Clazz.new_($I$(5,1).c$$java_io_InputStream$S,[$in, "utf-8"])]);
var lc=1;
while ((lc=C$.parseLine$Class$java_net_URL$java_io_BufferedReader$I$java_util_List$java_util_Set(service, u, r, lc, names, returned)) >= 0);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
C$.fail$Class$S(service, ": " + x);
} else {
throw x;
}
} finally {
try {
if (r != null ) r.close$();
if ($in != null ) $in.close$();
} catch (y) {
if (Clazz.exceptionOf(y,"java.io.IOException")){
C$.fail$Class$S(service, ": " + y);
} else {
throw y;
}
}
}
return names.iterator$();
}, 1);

Clazz.newMeth(C$, 'providers$Class$ClassLoader', function (service, loader) {
return Clazz.new_(1,{S:"Object"},$I$(6,1).c$$Class$ClassLoader,[service, loader]);
}, 1);

Clazz.newMeth(C$, 'providers$Class', function (service) {
var cl=$I$(7).currentThread$().getContextClassLoader$();
return C$.providers$Class$ClassLoader(service, cl);
}, 1);

Clazz.newMeth(C$, 'installedProviders$Class', function (service) {
var cl=ClassLoader.getSystemClassLoader$();
var prev=null;
while (cl != null ){
prev=cl;
cl=cl.getParent$();
}
return C$.providers$Class$ClassLoader(service, prev);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Service, "LazyIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.configs=null;
this.pending=null;
this.returned=Clazz.new_(1,{E:"String"},$I$(1,1));
this.nextName=null;
}, 1);

C$.$fields$=[['S',['nextName'],'O',['service','Class','loader','ClassLoader','configs','java.util.Enumeration','pending','java.util.Iterator','returned','java.util.Set']]]

Clazz.newMeth(C$, 'c$$Class$ClassLoader', function (service, loader) {
;C$.$init$.apply(this);
this.service=service;
this.loader=loader;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
if (this.nextName != null ) {
return true;
}if (this.configs == null ) {
try {
var fullName="META-INF/services/" + this.service.getName$();
if (this.loader == null ) this.configs=ClassLoader.getSystemResources$S(fullName);
 else this.configs=this.loader.getResources$S(fullName);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
P$.Service.fail$Class$S(this.service, ": " + x);
} else {
throw x;
}
}
}while ((this.pending == null ) || !this.pending.hasNext$() ){
if (!this.configs.hasMoreElements$()) {
return false;
}this.pending=P$.Service.parse$Class$java_net_URL$java_util_Set(this.service, this.configs.nextElement$(), this.returned);
}
this.nextName=this.pending.next$();
return true;
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var cn=this.nextName;
this.nextName=null;
var c=null;
try {
c=Clazz.forName(cn, false, this.loader);
} catch (x) {
if (Clazz.exceptionOf(x,"ClassNotFoundException")){
P$.Service.fail$Class$S(this.service, "Provider " + cn + " not found" );
} else {
throw x;
}
}
if (!this.service.isAssignableFrom$Class(c)) {
P$.Service.fail$Class$S(this.service, "Provider " + cn + " not a subtype" );
}try {
return this.service.cast$O(c.newInstance$());
} catch (x) {
P$.Service.fail$Class$S$Throwable(this.service, "Provider " + cn + " could not be instantiated" , x);
}
return null;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
