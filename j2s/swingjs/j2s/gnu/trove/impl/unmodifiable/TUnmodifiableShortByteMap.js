(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[[0,'gnu.trove.TCollections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableShortByteMap", null, null, ['gnu.trove.map.TShortByteMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TShortByteMap','keySet','gnu.trove.set.TShortSet','values','gnu.trove.TByteCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TShortByteMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'containsKey$H', function (key) {
return this.m.containsKey$H(key);
});

Clazz.newMeth(C$, 'containsValue$B', function (val) {
return this.m.containsValue$B(($b$[0] = val, $b$[0]));
});

Clazz.newMeth(C$, 'get$H', function (key) {
return $b$[0] = this.m.get$H(key), $b$[0];
});

Clazz.newMeth(C$, 'put$H$B', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$H', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TShortByteMap', function (m) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'keySet$', function () {
if (this.keySet == null ) this.keySet=$I$(1).unmodifiableSet$gnu_trove_set_TShortSet(this.m.keySet$());
return this.keySet;
});

Clazz.newMeth(C$, 'keys$', function () {
return this.m.keys$();
});

Clazz.newMeth(C$, 'keys$HA', function (array) {
return this.m.keys$HA(array);
});

Clazz.newMeth(C$, 'valueCollection$', function () {
if (this.values == null ) this.values=$I$(1).unmodifiableCollection$gnu_trove_TByteCollection(this.m.valueCollection$());
return this.values;
});

Clazz.newMeth(C$, 'values$', function () {
return this.m.values$();
});

Clazz.newMeth(C$, 'values$BA', function (array) {
return this.m.values$BA(array);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.m.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.m.hashCode$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.m.toString();
});

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return this.m.getNoEntryKey$();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.m.getNoEntryValue$(), $b$[0];
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TShortProcedure', function (procedure) {
return this.m.forEachKey$gnu_trove_procedure_TShortProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.m.forEachValue$gnu_trove_procedure_TByteProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TShortByteProcedure', function (procedure) {
return this.m.forEachEntry$gnu_trove_procedure_TShortByteProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableShortByteMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableShortByteMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TShortByteIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iter=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableShortByteMap'].m.iterator$();
}, 1);

C$.$fields$=[['O',['iter','gnu.trove.iterator.TShortByteIterator']]]

Clazz.newMeth(C$, 'key$', function () {
return this.iter.key$();
});

Clazz.newMeth(C$, 'value$', function () {
return $b$[0] = this.iter.value$(), $b$[0];
});

Clazz.newMeth(C$, 'advance$', function () {
this.iter.advance$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'setValue$B', function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TUnmodifiableShortByteMap$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'putIfAbsent$H$B', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TByteFunction', function ($function) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TShortByteProcedure', function (procedure) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'increment$H', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'adjustValue$H$B', function (key, amount) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'adjustOrPutValue$H$B$B', function (key, adjust_amount, put_amount) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
