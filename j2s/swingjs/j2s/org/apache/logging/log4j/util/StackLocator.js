(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),p$1={},I$=[[0,'org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.util.PrivateSecurityManagerStackTraceUtil','java.util.Stack','Throwable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StackLocator");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
var getCallerClass;
var java7u25CompensationOffset=0;
try {
var sunReflectionClass=$I$(1).loadClass$S("sun.reflect.Reflection");
getCallerClass=sunReflectionClass.getDeclaredMethod$S$ClassA("getCallerClass", [Integer.TYPE]);
var o=getCallerClass.invoke$O$OA(null, [new Integer(0)]);
getCallerClass.invoke$O$OA(null, [new Integer(0)]);
if (o == null  || o !== sunReflectionClass  ) {
getCallerClass=null;
java7u25CompensationOffset=-1;
} else {
o=getCallerClass.invoke$O$OA(null, [new Integer(1)]);
if (o === sunReflectionClass ) {
System.out.println$S("WARNING: Java 1.7.0_25 is in use which has a broken implementation of Reflection.getCallerClass().  Please consider upgrading to Java 1.7.0_40 or later.");
java7u25CompensationOffset=1;
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception") || Clazz.exceptionOf(e,"LinkageError")){
System.out.println$S("WARNING: sun.reflect.Reflection.getCallerClass is not supported. This will impact performance.");
getCallerClass=null;
java7u25CompensationOffset=-1;
} else {
throw e;
}
}
C$.GET_CALLER_CLASS=getCallerClass;
C$.JDK_7u25_OFFSET=java7u25CompensationOffset;
C$.INSTANCE=Clazz.new_(C$);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['JDK_7u25_OFFSET'],'O',['GET_CALLER_CLASS','java.lang.reflect.Method','INSTANCE','org.apache.logging.log4j.util.StackLocator']]]

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.INSTANCE;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCallerClass$I', function (depth) {
if (depth < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(depth)]);
}try {
return C$.GET_CALLER_CLASS.invoke$O$OA(null, [new Integer(depth + 1 + C$.JDK_7u25_OFFSET )]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getCallerClass$S$S', function (fqcn, pkg) {
var next=false;
var clazz;
for (var i=2; null != (clazz=this.getCallerClass$I(i)) ; i++) {
if (fqcn.equals$O(clazz.getName$())) {
next=true;
continue;
}if (next && clazz.getName$().startsWith$S(pkg) ) {
return clazz;
}}
return null;
});

Clazz.newMeth(C$, 'getCallerClass$Class', function (anchor) {
var next=false;
var clazz;
for (var i=2; null != (clazz=this.getCallerClass$I(i)) ; i++) {
if (anchor.equals$O(clazz)) {
next=true;
continue;
}if (next) {
return clazz;
}}
return Clazz.getClass(java.lang.Object);
});

Clazz.newMeth(C$, 'getCurrentStackTrace$', function () {
if ($I$(2).isEnabled$()) {
return $I$(2).getCurrentStackTrace$();
}var classes=Clazz.new_(1,{E:"Class"},$I$(3,1));
var clazz;
for (var i=1; null != (clazz=this.getCallerClass$I(i)) ; i++) {
classes.push$TE(clazz);
}
return classes;
});

Clazz.newMeth(C$, 'calcLocation$S', function (fqcnOfLogger) {
if (fqcnOfLogger == null ) {
return null;
}var stackTrace=Clazz.new_($I$(4,1)).getStackTrace$();
var found=false;
for (var i=0; i < stackTrace.length; i++) {
var className=stackTrace[i].getClassName$();
if (fqcnOfLogger.equals$O(className)) {
found=true;
continue;
}if (found && !fqcnOfLogger.equals$O(className) ) {
return stackTrace[i];
}}
return null;
});

Clazz.newMeth(C$, 'getStackTraceElement$I', function (depth) {
var elements=Clazz.new_($I$(4,1)).getStackTrace$();
var i=0;
for (var element, $element = 0, $$element = elements; $element<$$element.length&&((element=($$element[$element])),1);$element++) {
if (p$1.isValid$StackTraceElement.apply(this, [element])) {
if (i == depth) {
return element;
}++i;
}}
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Integer.toString$I(depth)]);
});

Clazz.newMeth(C$, 'isValid$StackTraceElement', function (element) {
if (element.isNativeMethod$()) {
return false;
}var cn=element.getClassName$();
if (cn.startsWith$S("sun.reflect.")) {
return false;
}var mn=element.getMethodName$();
if (cn.startsWith$S("java.lang.reflect.") && (mn.equals$O("invoke") || mn.equals$O("newInstance") ) ) {
return false;
}if (cn.startsWith$S("jdk.internal.reflect.")) {
return false;
}if (cn.equals$O("java.lang.Class") && mn.equals$O("newInstance") ) {
return false;
}if (cn.equals$O("java.lang.invoke.MethodHandle") && mn.startsWith$S("invoke") ) {
return false;
}return true;
}, p$1);
C$.$getAnn$ = function(){ return [
[['M:getCallerClass','Class','getCallerClass$I',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCallerClass','.','getCallerClass$S$S',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCallerClass','.','getCallerClass$Class',['org.apache.logging.log4j.util.PerformanceSensitive']],['']],
  [['M:getCurrentStackTrace','java.util.Stack','getCurrentStackTrace$',['org.apache.logging.log4j.util.PerformanceSensitive']],['']]]}
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
