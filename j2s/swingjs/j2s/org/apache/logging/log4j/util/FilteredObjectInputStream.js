(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.util.Arrays','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FilteredObjectInputStream", null, 'java.io.ObjectInputStream');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.REQUIRED_JAVA_CLASSES=$I$(1).asList$__TA(["java.math.BigDecimal", "java.math.BigInteger", "java.rmi.MarshalledObject", "[B"]);
C$.REQUIRED_JAVA_PACKAGES=$I$(1).asList$__TA(["java.lang.", "java.time", "java.util.", "org.apache.logging.log4j.", "[Lorg.apache.logging.log4j."]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['allowedClasses','java.util.Collection']]
,['O',['REQUIRED_JAVA_CLASSES','java.util.List','+REQUIRED_JAVA_PACKAGES']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this, []);C$.$init$.apply(this);
this.allowedClasses=Clazz.new_(1,{E:"String"},$I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
;C$.superclazz.c$$java_io_InputStream.apply(this, [$in]);C$.$init$.apply(this);
this.allowedClasses=Clazz.new_(1,{E:"String"},$I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (allowedClasses) {
;C$.superclazz.c$.apply(this, []);C$.$init$.apply(this);
this.allowedClasses=allowedClasses;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$java_util_Collection', function ($in, allowedClasses) {
;C$.superclazz.c$$java_io_InputStream.apply(this, [$in]);C$.$init$.apply(this);
this.allowedClasses=allowedClasses;
}, 1);

Clazz.newMeth(C$, 'getAllowedClasses$', function () {
return this.allowedClasses;
});

Clazz.newMeth(C$, 'resolveClass$java_io_ObjectStreamClass', function (desc) {
var name=desc.getName$();
if (!(C$.isAllowedByDefault$S(name) || this.allowedClasses.contains$O(name) )) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Class is not allowed for deserialization: " + name]);
}return C$.superclazz.prototype.resolveClass$java_io_ObjectStreamClass.apply(this, [desc]);
});

Clazz.newMeth(C$, 'isAllowedByDefault$S', function (name) {
return C$.isRequiredPackage$S(name) || C$.REQUIRED_JAVA_CLASSES.contains$O(name) ;
}, 1);

Clazz.newMeth(C$, 'isRequiredPackage$S', function (name) {
for (var packageName, $packageName = C$.REQUIRED_JAVA_PACKAGES.iterator$(); $packageName.hasNext$()&&((packageName=($packageName.next$())),1);) {
if (name.startsWith$S(packageName)) {
return true;
}}
return false;
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
