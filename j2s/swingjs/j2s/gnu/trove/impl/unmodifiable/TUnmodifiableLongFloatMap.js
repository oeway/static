(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[[0,'gnu.trove.TCollections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableLongFloatMap", null, null, ['gnu.trove.map.TLongFloatMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TLongFloatMap','keySet','gnu.trove.set.TLongSet','values','gnu.trove.TFloatCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TLongFloatMap', function (m) {
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

Clazz.newMeth(C$, 'containsKey$J', function (key) {
return this.m.containsKey$J(key);
});

Clazz.newMeth(C$, 'containsValue$F', function (val) {
return this.m.containsValue$F(val);
});

Clazz.newMeth(C$, 'get$J', function (key) {
return this.m.get$J(key);
});

Clazz.newMeth(C$, 'put$J$F', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$J', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TLongFloatMap', function (m) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'keySet$', function () {
if (this.keySet == null ) this.keySet=$I$(1).unmodifiableSet$gnu_trove_set_TLongSet(this.m.keySet$());
return this.keySet;
});

Clazz.newMeth(C$, 'keys$', function () {
return this.m.keys$();
});

Clazz.newMeth(C$, 'keys$JA', function (array) {
return this.m.keys$JA(array);
});

Clazz.newMeth(C$, 'valueCollection$', function () {
if (this.values == null ) this.values=$I$(1).unmodifiableCollection$gnu_trove_TFloatCollection(this.m.valueCollection$());
return this.values;
});

Clazz.newMeth(C$, 'values$', function () {
return this.m.values$();
});

Clazz.newMeth(C$, 'values$FA', function (array) {
return this.m.values$FA(array);
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
return this.m.getNoEntryValue$();
});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TLongProcedure', function (procedure) {
return this.m.forEachKey$gnu_trove_procedure_TLongProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TFloatProcedure', function (procedure) {
return this.m.forEachValue$gnu_trove_procedure_TFloatProcedure(procedure);
});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TLongFloatProcedure', function (procedure) {
return this.m.forEachEntry$gnu_trove_procedure_TLongFloatProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableLongFloatMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableLongFloatMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TLongFloatIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iter=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableLongFloatMap'].m.iterator$();
}, 1);

C$.$fields$=[['O',['iter','gnu.trove.iterator.TLongFloatIterator']]]

Clazz.newMeth(C$, 'key$', function () {
return this.iter.key$();
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

Clazz.newMeth(C$, 'setValue$F', function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.TUnmodifiableLongFloatMap$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'putIfAbsent$J$F', function (key, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TFloatFunction', function ($function) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TLongFloatProcedure', function (procedure) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'increment$J', function (key) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'adjustValue$J$F', function (key, amount) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'adjustOrPutValue$J$F$F', function (key, adjust_amount, put_amount) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1