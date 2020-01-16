(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.util.LowLevelLogUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Base64Util");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.encodeMethod=null;
C$.encoder=null;
{
try {
var clazz=$I$(1).loadClass$S("java.util.Base64");
var encoderClazz=$I$(1).loadClass$S("java.util.Base64$Encoder");
var method=clazz.getMethod$S$ClassA("getEncoder", []);
C$.encoder=method.invoke$O$OA(null, []);
C$.encodeMethod=encoderClazz.getMethod$S$ClassA("encodeToString", [Clazz.array(Byte.TYPE, -1)]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
try {
var clazz=$I$(1).loadClass$S("javax.xml.bind.DataTypeConverter");
C$.encodeMethod=clazz.getMethod$S$ClassA("printBase64Binary", []);
} catch (ex2) {
if (Clazz.exceptionOf(ex2,"Exception")){
$I$(2).logException$S$Throwable("Unable to create a Base64 Encoder", ex2);
} else {
throw ex2;
}
}
} else {
throw ex;
}
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['encodeMethod','java.lang.reflect.Method','encoder','java.lang.Object']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encode$S', function (str) {
if (str == null ) {
return null;
}var data=str.getBytes$();
if (C$.encodeMethod != null ) {
try {
return C$.encodeMethod.invoke$O$OA(C$.encoder, data);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_(Clazz.load('org.apache.logging.log4j.LoggingException').c$$S$Throwable,["Unable to encode String", ex]);
} else {
throw ex;
}
}
}throw Clazz.new_(Clazz.load('org.apache.logging.log4j.LoggingException').c$$S,["No Encoder, unable to encode string"]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
