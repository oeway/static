(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedRandomAccessByteList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedByteList", null, 'gnu.trove.impl.sync.TSynchronizedByteCollection', 'gnu.trove.list.TByteList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TByteList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TByteList', function (list) {
;C$.superclazz.c$$gnu_trove_TByteCollection.apply(this,[list]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TByteList$O', function (list, mutex) {
;C$.superclazz.c$$gnu_trove_TByteCollection$O.apply(this,[list, mutex]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
{
return this.list.equals$O(o);
}});

Clazz.newMeth(C$, 'hashCode$', function () {
{
return this.list.hashCode$();
}});

Clazz.newMeth(C$, 'get$I', function (index) {
{
return $b$[0] = this.list.get$I(index), $b$[0];
}});

Clazz.newMeth(C$, 'set$I$B', function (index, element) {
{
return $b$[0] = this.list.set$I$B(index, (element|0)), $b$[0];
}});

Clazz.newMeth(C$, 'set$I$BA', function (offset, values) {
{
this.list.set$I$BA(offset, values);
}});

Clazz.newMeth(C$, 'set$I$BA$I$I', function (offset, values, valOffset, length) {
{
this.list.set$I$BA$I$I(offset, values, valOffset, length);
}});

Clazz.newMeth(C$, 'replace$I$B', function (offset, val) {
{
return $b$[0] = this.list.replace$I$B(offset, (val|0)), $b$[0];
}});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
{
this.list.remove$I$I(offset, length);
}});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
{
return $b$[0] = this.list.removeAt$I(offset), $b$[0];
}});

Clazz.newMeth(C$, 'add$BA', function (vals) {
{
this.list.add$BA(vals);
}});

Clazz.newMeth(C$, 'add$BA$I$I', function (vals, offset, length) {
{
this.list.add$BA$I$I(vals, offset, length);
}});

Clazz.newMeth(C$, 'insert$I$B', function (offset, value) {
{
this.list.insert$I$B(offset, ($b$[0] = value, $b$[0]));
}});

Clazz.newMeth(C$, 'insert$I$BA', function (offset, values) {
{
this.list.insert$I$BA(offset, values);
}});

Clazz.newMeth(C$, 'insert$I$BA$I$I', function (offset, values, valOffset, len) {
{
this.list.insert$I$BA$I$I(offset, values, valOffset, len);
}});

Clazz.newMeth(C$, 'indexOf$B', function (o) {
{
return this.list.indexOf$B(($b$[0] = o, $b$[0]));
}});

Clazz.newMeth(C$, 'lastIndexOf$B', function (o) {
{
return this.list.lastIndexOf$B(($b$[0] = o, $b$[0]));
}});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$gnu_trove_list_TByteList$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
{
return this.list.toArray$I$I(offset, len);
}});

Clazz.newMeth(C$, 'toArray$BA$I$I', function (dest, offset, len) {
{
return this.list.toArray$BA$I$I(dest, offset, len);
}});

Clazz.newMeth(C$, 'toArray$BA$I$I$I', function (dest, source_pos, dest_pos, len) {
{
return this.list.toArray$BA$I$I$I(dest, source_pos, dest_pos, len);
}});

Clazz.newMeth(C$, 'indexOf$I$B', function (offset, value) {
{
return this.list.indexOf$I$B(offset, ($b$[0] = value, $b$[0]));
}});

Clazz.newMeth(C$, 'lastIndexOf$I$B', function (offset, value) {
{
return this.list.lastIndexOf$I$B(offset, ($b$[0] = value, $b$[0]));
}});

Clazz.newMeth(C$, 'fill$B', function (val) {
{
this.list.fill$B(($b$[0] = val, $b$[0]));
}});

Clazz.newMeth(C$, 'fill$I$I$B', function (fromIndex, toIndex, val) {
{
this.list.fill$I$I$B(fromIndex, toIndex, ($b$[0] = val, $b$[0]));
}});

Clazz.newMeth(C$, 'reverse$', function () {
{
this.list.reverse$();
}});

Clazz.newMeth(C$, 'reverse$I$I', function (from, to) {
{
this.list.reverse$I$I(from, to);
}});

Clazz.newMeth(C$, 'shuffle$java_util_Random', function (rand) {
{
this.list.shuffle$java_util_Random(rand);
}});

Clazz.newMeth(C$, 'sort$', function () {
{
this.list.sort$();
}});

Clazz.newMeth(C$, 'sort$I$I', function (fromIndex, toIndex) {
{
this.list.sort$I$I(fromIndex, toIndex);
}});

Clazz.newMeth(C$, 'binarySearch$B', function (value) {
{
return this.list.binarySearch$B(($b$[0] = value, $b$[0]));
}});

Clazz.newMeth(C$, 'binarySearch$B$I$I', function (value, fromIndex, toIndex) {
{
return this.list.binarySearch$B$I$I(($b$[0] = value, $b$[0]), fromIndex, toIndex);
}});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TByteProcedure', function (condition) {
{
return this.list.grep$gnu_trove_procedure_TByteProcedure(condition);
}});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TByteProcedure', function (condition) {
{
return this.list.inverseGrep$gnu_trove_procedure_TByteProcedure(condition);
}});

Clazz.newMeth(C$, 'max$', function () {
{
return $b$[0] = this.list.max$(), $b$[0];
}});

Clazz.newMeth(C$, 'min$', function () {
{
return $b$[0] = this.list.min$(), $b$[0];
}});

Clazz.newMeth(C$, 'sum$', function () {
{
return $b$[0] = this.list.sum$(), $b$[0];
}});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TByteProcedure', function (procedure) {
{
return this.list.forEachDescending$gnu_trove_procedure_TByteProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TByteFunction', function ($function) {
{
this.list.transformValues$gnu_trove_function_TByteFunction($function);
}});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TByteList,[this.list]) : this);
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
