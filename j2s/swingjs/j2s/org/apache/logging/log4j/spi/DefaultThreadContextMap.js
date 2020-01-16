(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),I$=[[0,'java.util.Collections','java.util.HashMap','InheritableThreadLocal','ThreadLocal','org.apache.logging.log4j.util.PropertiesUtil','Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultThreadContextMap", null, null, ['org.apache.logging.log4j.spi.ThreadContextMap', 'org.apache.logging.log4j.util.ReadOnlyStringMap']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
C$.init$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['useMap'],'O',['localMap','ThreadLocal']]
,['Z',['inheritableMap'],'L',['serialVersionUID'],'S',['INHERITABLE_MAP']]]

Clazz.newMeth(C$, 'createThreadLocalMap$Z', function (isMapEnabled) {
if (C$.inheritableMap) {
return ((P$.DefaultThreadContextMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultThreadContextMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('InheritableThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['childValue$java_util_Map','childValue$TT'], function (parentValue) {
return parentValue != null  && this.$finals$.isMapEnabled  ? $I$(1).unmodifiableMap$java_util_Map(Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$java_util_Map,[parentValue])) : null;
});
})()
), Clazz.new_(1,{T:"java.util.Map"},$I$(3,1), [this, {isMapEnabled:isMapEnabled}],P$.DefaultThreadContextMap$1));
}return Clazz.new_(1,{T:"java.util.Map"},$I$(4,1));
}, 1);

Clazz.newMeth(C$, 'init$', function () {
C$.inheritableMap=$I$(5).getProperties$().getBooleanProperty$S("isThreadContextMapInheritable");
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (useMap) {
;C$.$init$.apply(this);
this.useMap=useMap;
this.localMap=C$.createThreadLocalMap$Z(useMap);
}, 1);

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
if (!this.useMap) {
return;
}var map=this.localMap.get$();
map=map == null  ? Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$I,[1]) : Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$java_util_Map,[map]);
map.put$TK$TV(key, value);
this.localMap.set$TT($I$(1).unmodifiableMap$java_util_Map(map));
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (m) {
if (!this.useMap) {
return;
}var map=this.localMap.get$();
map=map == null  ? Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$I,[m.size$()]) : Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$java_util_Map,[map]);
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
map.put$TK$TV(e.getKey$(), e.getValue$());
}
this.localMap.set$TT($I$(1).unmodifiableMap$java_util_Map(map));
});

Clazz.newMeth(C$, 'get$S', function (key) {
var map=this.localMap.get$();
return map == null  ? null : map.get$O(key);
});

Clazz.newMeth(C$, 'remove$S', function (key) {
var map=this.localMap.get$();
if (map != null ) {
var copy=Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$java_util_Map,[map]);
copy.remove$O(key);
this.localMap.set$TT($I$(1).unmodifiableMap$java_util_Map(copy));
}});

Clazz.newMeth(C$, 'removeAll$Iterable', function (keys) {
var map=this.localMap.get$();
if (map != null ) {
var copy=Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$java_util_Map,[map]);
for (var key, $key = keys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
copy.remove$O(key);
}
this.localMap.set$TT($I$(1).unmodifiableMap$java_util_Map(copy));
}});

Clazz.newMeth(C$, 'clear$', function () {
this.localMap.remove$();
});

Clazz.newMeth(C$, 'toMap$', function () {
return this.getCopy$();
});

Clazz.newMeth(C$, 'containsKey$S', function (key) {
var map=this.localMap.get$();
return map != null  && map.containsKey$O(key) ;
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_BiConsumer', function (action) {
var map=this.localMap.get$();
if (map == null ) {
return;
}for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var value=entry.getValue$();
action.accept$(entry.getKey$(), value);
}
});

Clazz.newMeth(C$, 'forEach$org_apache_logging_log4j_util_TriConsumer$TS', function (action, state) {
var map=this.localMap.get$();
if (map == null ) {
return;
}for (var entry, $entry = map.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var value=entry.getValue$();
action.accept$(entry.getKey$(), value, state);
}
});

Clazz.newMeth(C$, 'getValue$S', function (key) {
var map=this.localMap.get$();
return (map == null  ? null : map.get$O(key));
});

Clazz.newMeth(C$, 'getCopy$', function () {
var map=this.localMap.get$();
return map == null  ? Clazz.new_(1,{V:"String",K:"String"},$I$(2,1)) : Clazz.new_(1,{V:"String",K:"String"},$I$(2,1).c$$java_util_Map,[map]);
});

Clazz.newMeth(C$, 'getImmutableMapOrNull$', function () {
return this.localMap.get$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
var map=this.localMap.get$();
return map == null  || map.size$() == 0 ;
});

Clazz.newMeth(C$, 'size$', function () {
var map=this.localMap.get$();
return map == null  ? 0 : map.size$();
});

Clazz.newMeth(C$, 'toString', function () {
var map=this.localMap.get$();
return map == null  ? "{}" : map.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
var prime=31;
var result=1;
var map=this.localMap.get$();
result=31 * result + ((map == null ) ? 0 : map.hashCode$());
result=31 * result + $I$(6).valueOf$Z(this.useMap).hashCode$();
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (Clazz.instanceOf(obj, "org.apache.logging.log4j.spi.DefaultThreadContextMap")) {
var other=obj;
if (this.useMap != other.useMap ) {
return false;
}}if (!(Clazz.instanceOf(obj, "org.apache.logging.log4j.spi.ThreadContextMap"))) {
return false;
}var other=obj;
var map=this.localMap.get$();
var otherMap=other.getImmutableMapOrNull$();
if (map == null ) {
if (otherMap != null ) {
return false;
}} else if (!map.equals$O(otherMap)) {
return false;
}return true;
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:57 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
