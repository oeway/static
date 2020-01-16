(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.util.Objects',['org.apache.logging.log4j.util.PropertySource','.Util']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SystemPropertiesPropertySource", null, null, 'org.apache.logging.log4j.util.PropertySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['DEFAULT_PRIORITY'],'S',['PREFIX']]]

Clazz.newMeth(C$, 'getPriority$', function () {
return 100;
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_BiConsumer', function (action) {
var properties;
try {
properties=System.getProperties$();
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
return;
} else {
throw e;
}
}
var keySet;
{
keySet=properties.keySet$().toArray$();
}for (var key, $key = 0, $$key = keySet; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
var keyStr=$I$(1).toString$O$S(key, null);
action.accept$(keyStr, properties.getProperty$S(keyStr));
}
});

Clazz.newMeth(C$, 'getNormalForm$Iterable', function (tokens) {
return "log4j2." + $I$(2).joinAsCamelCase$Iterable(tokens);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:55 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
