(function(){var P$=Clazz.newPackage("org.scijava.parse"),p$1={},I$=[[0,'org.scijava.parse.Item','java.util.LinkedHashMap','org.scijava.parse.eval.DefaultEvaluator','java.util.Collections',['org.scijava.parse.DefaultParseService','.ItemsList']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultParseService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'org.scijava.parse.ParseService');
C$.$classes$=[['ItemsList',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parse$S$Z', function (arg, strict) {
if (arg == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["arg must not be null"]);
return Clazz.new_($I$(5,1).c$$S$Z,[arg, strict]);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.parse.DefaultParseService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultParseService, "ItemsList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.scijava.util.ObjectArray', 'org.scijava.parse.Items');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (arg, strict) {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(1),['name$','value$'])]);C$.$init$.apply(this);
p$1.parseItems$S$Z.apply(this, [arg, strict]);
}, 1);

Clazz.newMeth(C$, 'asMap$', function () {
var map=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
for (var item, $item = this.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
map.put$TK$TV(item.name$(), item.value$());
}
return map;
});

Clazz.newMeth(C$, 'isMap$', function () {
for (var item, $item = this.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (item.name$() == null ) return false;
}
return true;
});

Clazz.newMeth(C$, 'isList$', function () {
for (var item, $item = this.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (item.name$() != null ) return false;
}
return true;
});

Clazz.newMeth(C$, 'parseItems$S$Z', function (arg, strict) {
var e=Clazz.new_($I$(3,1));
e.setStrict$Z(strict);
var result=e.evaluate$S("(" + arg + ")" );
if (result == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Error parsing string: '" + arg + "'" ]);
}var list;
if (Clazz.instanceOf(result, "java.util.List")) list=result;
 else list=$I$(4).singletonList$TT(result);
for (var o, $o = list.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
var name;
var value;
if (Clazz.instanceOf(o, "org.scijava.parse.Variable")) {
var v=o;
name=v.getToken$();
value=e.value$O(v);
} else {
name=null;
value=o;
}this.add$TE(((P$.DefaultParseService$ItemsList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultParseService$ItemsList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.scijava.parse.Item', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'name$', function () {
return this.$finals$.name;
});

Clazz.newMeth(C$, 'value$', function () {
return this.$finals$.value;
});
})()
), Clazz.new_(P$.DefaultParseService$ItemsList$1.$init$, [this, {name:name,value:value}])));
}
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
