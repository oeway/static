(function(){var P$=Clazz.newPackage("io.scif.common"),I$=[[0,'java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IniList", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTable$S', function (tableName) {
for (var table, $table = this.iterator$(); $table.hasNext$()&&((table=($table.next$())),1);) {
var header=table.get$O("header");
if (tableName.equals$O(header)) return table;
}
return null;
});

Clazz.newMeth(C$, 'flattenIntoHashMap$', function () {
var h=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
for (var table, $table = this.iterator$(); $table.hasNext$()&&((table=($table.next$())),1);) {
var tableName=table.get$O("header");
for (var key, $key = table.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (!key.equals$O("header")) {
h.put$TK$TV("[" + tableName + "] " + key , table.get$O(key));
}}
}
return h;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
