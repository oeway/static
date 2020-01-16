(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,['org.apache.logging.log4j.util.PropertySource','.Util']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PropertiesPropertySource", null, null, 'org.apache.logging.log4j.util.PropertySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['properties','java.util.Properties']]
,['S',['PREFIX']]]

Clazz.newMeth(C$, 'c$$java_util_Properties', function (properties) {
;C$.$init$.apply(this);
this.properties=properties;
}, 1);

Clazz.newMeth(C$, 'getPriority$', function () {
return 0;
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_BiConsumer', function (action) {
for (var entry, $entry = this.properties.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
action.accept$((entry.getKey$()), (entry.getValue$()));
}
});

Clazz.newMeth(C$, 'getNormalForm$Iterable', function (tokens) {
return "log4j2." + $I$(1).joinAsCamelCase$Iterable(tokens);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
