(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.spi"),p$1={},I$=[[0,'org.apache.logging.log4j.util.PropertiesUtil','InheritableThreadLocal','ThreadLocal','org.apache.logging.log4j.util.SortedArrayStringMap','java.util.HashMap','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GarbageFreeSortedArrayThreadContextMap", null, null, ['org.apache.logging.log4j.spi.ReadOnlyThreadContextMap', 'org.apache.logging.log4j.spi.ObjectThreadContextMap']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
C$.init$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['localMap','ThreadLocal']]
,['Z',['inheritableMap'],'I',['DEFAULT_INITIAL_CAPACITY','initialCapacity'],'S',['INHERITABLE_MAP','PROPERTY_NAME_INITIAL_CAPACITY']]]

Clazz.newMeth(C$, 'init$', function () {
var properties=$I$(1).getProperties$();
C$.initialCapacity=properties.getIntegerProperty$S$I("log4j2.ThreadContext.initial.capacity", 16);
C$.inheritableMap=properties.getBooleanProperty$S("isThreadContextMapInheritable");
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.localMap=p$1.createThreadLocalMap.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createThreadLocalMap', function () {
if (C$.inheritableMap) {
return ((P$.GarbageFreeSortedArrayThreadContextMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "GarbageFreeSortedArrayThreadContextMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('InheritableThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['childValue$org_apache_logging_log4j_util_StringMap','childValue$TT'], function (parentValue) {
return parentValue != null  ? this.b$['org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap'].createStringMap$org_apache_logging_log4j_util_ReadOnlyStringMap.apply(this.b$['org.apache.logging.log4j.spi.GarbageFreeSortedArrayThreadContextMap'], [parentValue]) : null;
});
})()
), Clazz.new_(1,{T:"org.apache.logging.log4j.util.StringMap"},$I$(2,1), [this, null],P$.GarbageFreeSortedArrayThreadContextMap$1));
}return Clazz.new_(1,{T:"org.apache.logging.log4j.util.StringMap"},$I$(3,1));
}, p$1);

Clazz.newMeth(C$, 'createStringMap$', function () {
return Clazz.new_($I$(4,1).c$$I,[C$.initialCapacity]);
});

Clazz.newMeth(C$, 'createStringMap$org_apache_logging_log4j_util_ReadOnlyStringMap', function (original) {
return Clazz.new_($I$(4,1).c$$org_apache_logging_log4j_util_ReadOnlyStringMap,[original]);
});

Clazz.newMeth(C$, 'getThreadLocalMap', function () {
var map=this.localMap.get$();
if (map == null ) {
map=this.createStringMap$();
this.localMap.set$TT(map);
}return map;
}, p$1);

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
p$1.getThreadLocalMap.apply(this, []).putValue$S$O(key, value);
});

Clazz.newMeth(C$, 'putValue$S$O', function (key, value) {
p$1.getThreadLocalMap.apply(this, []).putValue$S$O(key, value);
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (values) {
if (values == null  || values.isEmpty$() ) {
return;
}var map=p$1.getThreadLocalMap.apply(this, []);
for (var entry, $entry = values.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
map.putValue$S$O(entry.getKey$(), entry.getValue$());
}
});

Clazz.newMeth(C$, 'putAllValues$java_util_Map', function (values) {
if (values == null  || values.isEmpty$() ) {
return;
}var map=p$1.getThreadLocalMap.apply(this, []);
for (var entry, $entry = values.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
map.putValue$S$O(entry.getKey$(), entry.getValue$());
}
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.getValue$S(key);
});

Clazz.newMeth(C$, 'getValue$S', function (key) {
var map=this.localMap.get$();
return map == null  ? null : map.getValue$S(key);
});

Clazz.newMeth(C$, 'remove$S', function (key) {
var map=this.localMap.get$();
if (map != null ) {
map.remove$S(key);
}});

Clazz.newMeth(C$, 'removeAll$Iterable', function (keys) {
var map=this.localMap.get$();
if (map != null ) {
for (var key, $key = keys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
map.remove$S(key);
}
}});

Clazz.newMeth(C$, 'clear$', function () {
var map=this.localMap.get$();
if (map != null ) {
map.clear$();
}});

Clazz.newMeth(C$, 'containsKey$S', function (key) {
var map=this.localMap.get$();
return map != null  && map.containsKey$S(key) ;
});

Clazz.newMeth(C$, 'getCopy$', function () {
var map=this.localMap.get$();
return map == null  ? Clazz.new_(1,{V:"String",K:"String"},$I$(5,1)) : map.toMap$();
});

Clazz.newMeth(C$, 'getReadOnlyContextData$', function () {
var map=this.localMap.get$();
if (map == null ) {
map=this.createStringMap$();
this.localMap.set$TT(map);
}return map;
});

Clazz.newMeth(C$, 'getImmutableMapOrNull$', function () {
var map=this.localMap.get$();
return map == null  ? null : $I$(6).unmodifiableMap$java_util_Map(map.toMap$());
});

Clazz.newMeth(C$, 'isEmpty$', function () {
var map=this.localMap.get$();
return map == null  || map.size$() == 0 ;
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
return result;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (this === obj ) {
return true;
}if (obj == null ) {
return false;
}if (!(Clazz.instanceOf(obj, "org.apache.logging.log4j.spi.ThreadContextMap"))) {
return false;
}var other=obj;
var map=this.getImmutableMapOrNull$();
var otherMap=other.getImmutableMapOrNull$();
if (map == null ) {
if (otherMap != null ) {
return false;
}} else if (!map.equals$O(otherMap)) {
return false;
}return true;
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:56 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
