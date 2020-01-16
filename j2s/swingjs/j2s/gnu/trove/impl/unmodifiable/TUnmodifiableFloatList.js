(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),p$1={},I$=[[0,'gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessFloatList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableFloatList", null, 'gnu.trove.impl.unmodifiable.TUnmodifiableFloatCollection', 'gnu.trove.list.TFloatList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TFloatList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TFloatList', function (list) {
;C$.superclazz.c$$gnu_trove_TFloatCollection.apply(this,[list]);C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'indexOf$F', function (o) {
return this.list.indexOf$F(o);
});

Clazz.newMeth(C$, 'lastIndexOf$F', function (o) {
return this.list.lastIndexOf$F(o);
});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
return this.list.toArray$I$I(offset, len);
});

Clazz.newMeth(C$, 'toArray$FA$I$I', function (dest, offset, len) {
return this.list.toArray$FA$I$I(dest, offset, len);
});

Clazz.newMeth(C$, 'toArray$FA$I$I$I', function (dest, source_pos, dest_pos, len) {
return this.list.toArray$FA$I$I$I(dest, source_pos, dest_pos, len);
});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TFloatProcedure', function (procedure) {
return this.list.forEachDescending$gnu_trove_procedure_TFloatProcedure(procedure);
});

Clazz.newMeth(C$, 'binarySearch$F', function (value) {
return this.list.binarySearch$F(value);
});

Clazz.newMeth(C$, 'binarySearch$F$I$I', function (value, fromIndex, toIndex) {
return this.list.binarySearch$F$I$I(value, fromIndex, toIndex);
});

Clazz.newMeth(C$, 'indexOf$I$F', function (offset, value) {
return this.list.indexOf$I$F(offset, value);
});

Clazz.newMeth(C$, 'lastIndexOf$I$F', function (offset, value) {
return this.list.lastIndexOf$I$F(offset, value);
});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TFloatProcedure', function (condition) {
return this.list.grep$gnu_trove_procedure_TFloatProcedure(condition);
});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TFloatProcedure', function (condition) {
return this.list.inverseGrep$gnu_trove_procedure_TFloatProcedure(condition);
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
return Clazz.new_(C$.c$$gnu_trove_list_TFloatList,[this.list.subList$I$I(fromIndex, toIndex)]);
});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TFloatList,[this.list]) : this);
}, p$1);

Clazz.newMeth(C$, 'add$FA', function (vals) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'add$FA$I$I', function (vals, offset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$F', function (offset, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$FA', function (offset, values) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$FA$I$I', function (offset, values, valOffset, len) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$F', function (offset, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$FA', function (offset, values) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$FA$I$I', function (offset, values, valOffset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'replace$I$F', function (offset, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TFloatFunction', function ($function) {
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

Clazz.newMeth(C$, 'fill$F', function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'fill$I$I$F', function (fromIndex, toIndex, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
