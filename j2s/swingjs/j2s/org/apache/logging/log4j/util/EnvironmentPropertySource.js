(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'org.apache.logging.log4j.util.LowLevelLogUtil','StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EnvironmentPropertySource", null, null, 'org.apache.logging.log4j.util.PropertySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['DEFAULT_PRIORITY'],'S',['PREFIX']]]

Clazz.newMeth(C$, 'getPriority$', function () {
return -100;
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_BiConsumer', function (action) {
var getenv;
try {
getenv=System.getenv$();
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
$I$(1).logException$S$Throwable("The system environment variables are not available to Log4j due to security restrictions: " + e, e);
return;
} else {
throw e;
}
}
for (var entry, $entry = getenv.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var key=entry.getKey$();
if (key.startsWith$S("LOG4J_")) {
action.accept$(key.substring$I("LOG4J_".length$()), entry.getValue$());
}}
});

Clazz.newMeth(C$, 'getNormalForm$Iterable', function (tokens) {
var sb=Clazz.new_($I$(2,1).c$$S,["LOG4J"]);
for (var token, $token = tokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
sb.append$C("_");
for (var i=0; i < token.length$(); i++) {
sb.append$C(Character.toUpperCase$C(token.charAt$I(i)));
}
}
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
