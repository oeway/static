(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),p$1={},I$=[[0,'gnu.trove.impl.unmodifiable.TUnmodifiableRandomAccessByteList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableByteList", null, 'gnu.trove.impl.unmodifiable.TUnmodifiableByteCollection', 'gnu.trove.list.TByteList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TByteList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TByteList', function (list) {
;C$.superclazz.c$$gnu_trove_TByteCollection.apply(this,[list]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this  || this.list.equals$O(o) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.list.hashCode$();
});

Clazz.newMeth(C$, 'get$I', function (index) {
return $b$[0] = this.list.get$I(index), $b$[0];
});

Clazz.newMeth(C$, 'indexOf$B', function (o) {
return this.list.indexOf$B(($b$[0] = o, $b$[0]));
});

Clazz.newMeth(C$, 'lastIndexOf$B', function (o) {
return this.list.lastIndexOf$B(($b$[0] = o, $b$[0]));
});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
return this.list.toArray$I$I(offset, len);
});

Clazz.newMeth(C$, 'toArray$BA$I$I', function (dest, offset, len) {
return this.list.toArray$BA$I$I(dest, offset, len);
});

Clazz.newMeth(C$, 'toArray$BA$I$I$I', function (dest, source_pos, dest_pos, len) {
return this.list.toArray$BA$I$I$I(dest, source_pos, dest_pos, len);
});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.list.forEachDescending$gnu_trove_procedure_TByteProcedure(procedure);
});

Clazz.newMeth(C$, 'binarySearch$B', function (value) {
return this.list.binarySearch$B(($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'binarySearch$B$I$I', function (value, fromIndex, toIndex) {
return this.list.binarySearch$B$I$I(($b$[0] = value, $b$[0]), fromIndex, toIndex);
});

Clazz.newMeth(C$, 'indexOf$I$B', function (offset, value) {
return this.list.indexOf$I$B(offset, ($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'lastIndexOf$I$B', function (offset, value) {
return this.list.lastIndexOf$I$B(offset, ($b$[0] = value, $b$[0]));
});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TByteProcedure', function (condition) {
return this.list.grep$gnu_trove_procedure_TByteProcedure(condition);
});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TByteProcedure', function (condition) {
return this.list.inverseGrep$gnu_trove_procedure_TByteProcedure(condition);
});

Clazz.newMeth(C$, 'max$', function () {
return $b$[0] = this.list.max$(), $b$[0];
});

Clazz.newMeth(C$, 'min$', function () {
return $b$[0] = this.list.min$(), $b$[0];
});

Clazz.newMeth(C$, 'sum$', function () {
return $b$[0] = this.list.sum$(), $b$[0];
});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
return Clazz.new_(C$.c$$gnu_trove_list_TByteList,[this.list.subList$I$I(fromIndex, toIndex)]);
});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TByteList,[this.list]) : this);
}, p$1);

Clazz.newMeth(C$, 'add$BA', function (vals) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'add$BA$I$I', function (vals, offset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$B', function (offset, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$BA', function (offset, values) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'insert$I$BA$I$I', function (offset, values, valOffset, len) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$B', function (offset, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$BA', function (offset, values) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'set$I$BA$I$I', function (offset, values, valOffset, length) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'replace$I$B', function (offset, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TByteFunction', function ($function) {
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

Clazz.newMeth(C$, 'fill$B', function (val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'fill$I$I$B', function (fromIndex, toIndex, val) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
