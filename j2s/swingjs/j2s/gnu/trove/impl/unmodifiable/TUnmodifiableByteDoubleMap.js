(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[[0,'gnu.trove.TCollections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableByteDoubleMap", null, null, ['gnu.trove.map.TByteDoubleMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TByteDoubleMap','keySet','gnu.trove.set.TByteSet','values','gnu.trove.TDoubleCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TByteDoubleMap', function (m) {
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

Clazz.newMeth(C$, 'containsKey$B', function (key) {
return this.m.containsKey$B(($b$[0] = key, $b$[0]));
});

Clazz.newMeth(C$, 'containsValue$D', function (val) {
return this.m.containsValue$D(val);
});

Clazz.newMeth(C$, 'get$B', function (key) {
return this.m.get$B(($b$[0] = key, $b$[0]));
});

Clazz.newMeth(C$, 'put$B$D', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$B', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TByteDoubleMap', function (m) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'keySet$', function () {
if (this.keySet == null ) this.keySet=$I$(1).unmodifiableSet$gnu_trove_set_TByteSet(this.m.keySet$());
return this.keySet;
});

Clazz.newMeth(C$, 'keys$', function () {
return this.m.keys$();
});

Clazz.newMeth(C$, 'keys$BA', function (array) {
return this.m.keys$BA(array);
});

Clazz.newMeth(C$, 'valueCollection$', function () {
if (this.values == null ) this.values=$I$(1).unmodifiableCollection$gnu_trove_TDoubleCollection(this.m.valueCollection$());
return this.values;
});

Clazz.newMeth(C$, 'values$', function () {
return this.m.values$();
});

Clazz.newMeth(C$, 'values$DA', function (array) {
return this.m.values$DA(array);
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
return $b$[0] = this.m.getNoEntryKey$(), $b$[0];
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.m.getNoEntryValue$();
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.m.forEachKey$gnu_trove_procedure_TByteProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TDoubleProcedure', function (procedure) {
return this.m.forEachValue$gnu_trove_procedure_TDoubleProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TByteDoubleProcedure', function (procedure) {
return this.m.forEachEntry$gnu_trove_procedure_TByteDoubleProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableByteDoubleMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableByteDoubleMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TByteDoubleIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iter=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableByteDoubleMap'].m.iterator$();
}, 1);

C$.$fields$=[['O',['iter','gnu.trove.iterator.TByteDoubleIterator']]]

Clazz.newMeth(C$, 'key$', function () {
return $b$[0] = this.iter.key$(), $b$[0];
});

Clazz.newMeth(C$, 'value$', function () {
return this.iter.value$();
});

Clazz.newMeth(C$, 'advance$', function () {
this.iter.advance$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'setValue$D', function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TUnmodifiableByteDoubleMap$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'putIfAbsent$B$D', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TDoubleFunction', function ($function) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TByteDoubleProcedure', function (procedure) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'increment$B', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'adjustValue$B$D', function (key, amount) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'adjustOrPutValue$B$D$D', function (key, adjust_amount, put_amount) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
