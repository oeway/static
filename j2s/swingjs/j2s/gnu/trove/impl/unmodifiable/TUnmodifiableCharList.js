(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),p$1={},I$=[[0,'gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessCharList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableCharList", null, 'gnu.trove.impl.unmodifiable.TUnmodifiableCharCollection', 'gnu.trove.list.TCharList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TCharList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TCharList', function (list) {
;C$.superclazz.c$$gnu_trove_TCharCollection.apply(this,[list]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.list.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.list.hashCode$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.list.get$I(index);
});

Clazz.newMeth(C$, 'indexOf$C', function (o) {
return this.list.indexOf$C(o);
});

Clazz.newMeth(C$, 'lastIndexOf$C', function (o) {
return this.list.lastIndexOf$C(o);
});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
return this.list.toArray$I$I(offset, len);
});

Clazz.newMeth(C$, 'toArray$CA$I$I', function (dest, offset, len) {
return this.list.toArray$CA$I$I(dest, offset, len);
});

Clazz.newMeth(C$, 'toArray$CA$I$I$I', function (dest, source_pos, dest_pos, len) {
return this.list.toArray$CA$I$I$I(dest, source_pos, dest_pos, len);
});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TCharProcedure', function (procedure) {
return this.list.forEachDescending$gnu_trove_procedure_TCharProcedure(procedure);
});

Clazz.newMeth(C$, 'binarySearch$C', function (value) {
return this.list.binarySearch$C(value);
});

Clazz.newMeth(C$, 'binarySearch$C$I$I', function (value, fromIndex, toIndex) {
return this.list.binarySearch$C$I$I(value, fromIndex, toIndex);
});

Clazz.newMeth(C$, 'indexOf$I$C', function (offset, value) {
return this.list.indexOf$I$C(offset, value);
});

Clazz.newMeth(C$, 'lastIndexOf$I$C', function (offset, value) {
return this.list.lastIndexOf$I$C(offset, value);
});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TCharProcedure', function (condition) {
return this.list.grep$gnu_trove_procedure_TCharProcedure(condition);
});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TCharProcedure', function (condition) {
return this.list.inverseGrep$gnu_trove_procedure_TCharProcedure(condition);
});

Clazz.newMeth(C$, 'max$', function () {
return this.list.max$();
});

Clazz.newMeth(C$, 'min$', function () {
return this.list.min$();
});

Clazz.newMeth(C$, 'sum$', function () {
return this.list.sum$();
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$gnu_trove_list_TCharList,[this.list.subList$I$I(fromIndex, toIndex)]);
});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TCharList,[this.list]) : this);
}, p$1);

Clazz.newMeth(C$, 'add$CA', function (vals) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'add$CA$I$I', function (vals, offset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$C', function (offset, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$CA', function (offset, values) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$CA$I$I', function (offset, values, valOffset, len) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$C', function (offset, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$CA', function (offset, values) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$CA$I$I', function (offset, values, valOffset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'replace$I$C', function (offset, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TCharFunction', function ($function) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'reverse$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'reverse$I$I', function (from, to) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'shuffle$java_util_Random', function (rand) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'sort$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'sort$I$I', function (fromIndex, toIndex) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'fill$C', function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'fill$I$I$C', function (fromIndex, toIndex, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
