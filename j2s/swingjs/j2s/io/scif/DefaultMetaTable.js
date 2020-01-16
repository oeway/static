(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'java.util.Vector','org.scijava.util.StringUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMetaTable", null, 'java.util.HashMap', 'io.scif.MetaTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['filtered']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (filter) {
Clazz.super_(C$, this);
this.filtered=filter;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (copy) {
Clazz.super_(C$, this);
for (var k, $k = copy.keySet$().iterator$(); $k.hasNext$()&&((k=($k.next$())),1);) this.put$S$O(k, copy.get$O(k));

}, 1);

Clazz.newMeth(C$, 'putList$S$O', function (key, value) {
var list=this.get$O(key);
if (list == null ) list=Clazz.new_(1,{E:"java.lang.Object"},$I$(1,1));
if (Clazz.instanceOf(list, "java.util.Vector")) {
var valueList=(list);
valueList.add$TE(value);
} else {
var v=Clazz.new_(1,{E:"java.lang.Object"},$I$(1,1));
v.add$TE(list);
v.add$TE(value);
list=v;
}this.put$S$O(key, list);
});

Clazz.newMeth(C$, ['put$S$O','put$TK$TV'], function (key, value) {
if (key == null  || value == null  ) {
return null;
}key=key.trim$();
var string=Clazz.instanceOf(value, "java.lang.String") || Clazz.instanceOf(value, "java.lang.Character") ;
var simple=string || Clazz.instanceOf(value, "java.lang.Number") || Clazz.instanceOf(value, "java.lang.Boolean")  ;
var val=string ? String.valueOf$O(value) : null;
if (this.filtered) {
if (!simple) return null;
var maxLen=8192;
if (key.length$() > 8192) return null;
if (string && val.length$() > 8192 ) return null;
key=$I$(2).sanitize$S(key);
if (string) val=$I$(2).sanitize$S(val);
if (!key.matches$S(".*[a-zA-Z].*")) return null;
var invalidSequences=Clazz.array(String, -1, ["&lt;", "&gt;", "&amp;", "<", ">", "&"]);
for (var invalidSequence, $invalidSequence = 0, $$invalidSequence = invalidSequences; $invalidSequence<$$invalidSequence.length&&((invalidSequence=($$invalidSequence[$invalidSequence])),1);$invalidSequence++) {
key=key.replaceAll$S$S(invalidSequence, "");
if (string) val=val.replaceAll$S$S(invalidSequence, "");
}
if (key.length$() == 0) return null;
if (string && val.trim$().length$() == 0 ) return null;
if (string) value=val;
}return C$.superclazz.prototype.put$TK$TV.apply(this, [key, val == null  ? value : val]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
