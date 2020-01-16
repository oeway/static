(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'java.util.HashMap','java.util.Arrays','org.scijava.util.ClassUtils','io.scif.Field']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMetadataService", null, 'org.scijava.service.AbstractService', 'io.scif.MetadataService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'parse$S', function (data) {
return this.parse$S$S(data, "[&\n]");
});

Clazz.newMeth(C$, 'parse$S$S', function (data, regex) {
var map=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
var tokens=data.split$S(regex);
for (var token, $token = 0, $$token = tokens; $token<$$token.length&&((token=($$token[$token])),1);$token++) {
var equals=token.indexOf$S("=");
if (!map.containsKey$O("name") && equals < 0 ) {
map.put$TK$TV("name", token);
continue;
}if (equals < 0) {
this.log.warn$O("Ignoring token: " + token);
continue;
}var key=token.substring$I$I(0, equals);
var value;
var rawValue=token.substring$I(equals + 1);
if (rawValue.indexOf$I(",") >= 0) {
var values=rawValue.split$S(",");
value=$I$(2).asList$TTA(values);
} else {
value=rawValue;
}map.put$TK$TV(key, value);
}
return map;
});

Clazz.newMeth(C$, 'populate$O$java_util_Map', function (metadata, map) {
var fields=$I$(3).getAnnotatedFields$Class$Class(metadata.getClass$(), Clazz.getClass($I$(4),['isList','label']));
for (var field, $field = fields.iterator$(); $field.hasNext$()&&((field=($field.next$())),1);) {
var name=field.getName$();
if (!map.containsKey$O(name)) {
continue;
}var value=map.get$O(name);
if (value == null ) continue;
$I$(3).setValue$reflect_Field$O$O(field, metadata, value);
}
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.DefaultMetadataService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
