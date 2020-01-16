(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedRandomAccessLongList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedLongList", null, 'gnu.trove.impl.sync.TSynchronizedLongCollection', 'gnu.trove.list.TLongList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TLongList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TLongList', function (list) {
;C$.superclazz.c$$gnu_trove_TLongCollection.apply(this,[list]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TLongList$O', function (list, mutex) {
;C$.superclazz.c$$gnu_trove_TLongCollection$O.apply(this,[list, mutex]);C$.$init$.apply(this);
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
return this.list.get$I(index);
}});

Clazz.newMeth(C$, 'set$I$J', function (index, element) {
{
return this.list.set$I$J(index, element);
}});

Clazz.newMeth(C$, 'set$I$JA', function (offset, values) {
{
this.list.set$I$JA(offset, values);
}});

Clazz.newMeth(C$, 'set$I$JA$I$I', function (offset, values, valOffset, length) {
{
this.list.set$I$JA$I$I(offset, values, valOffset, length);
}});

Clazz.newMeth(C$, 'replace$I$J', function (offset, val) {
{
return this.list.replace$I$J(offset, val);
}});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
{
this.list.remove$I$I(offset, length);
}});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
{
return this.list.removeAt$I(offset);
}});

Clazz.newMeth(C$, 'add$JA', function (vals) {
{
this.list.add$JA(vals);
}});

Clazz.newMeth(C$, 'add$JA$I$I', function (vals, offset, length) {
{
this.list.add$JA$I$I(vals, offset, length);
}});

Clazz.newMeth(C$, 'insert$I$J', function (offset, value) {
{
this.list.insert$I$J(offset, value);
}});

Clazz.newMeth(C$, 'insert$I$JA', function (offset, values) {
{
this.list.insert$I$JA(offset, values);
}});

Clazz.newMeth(C$, 'insert$I$JA$I$I', function (offset, values, valOffset, len) {
{
this.list.insert$I$JA$I$I(offset, values, valOffset, len);
}});

Clazz.newMeth(C$, 'indexOf$J', function (o) {
{
return this.list.indexOf$J(o);
}});

Clazz.newMeth(C$, 'lastIndexOf$J', function (o) {
{
return this.list.lastIndexOf$J(o);
}});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$gnu_trove_list_TLongList$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
{
return this.list.toArray$I$I(offset, len);
}});

Clazz.newMeth(C$, 'toArray$JA$I$I', function (dest, offset, len) {
{
return this.list.toArray$JA$I$I(dest, offset, len);
}});

Clazz.newMeth(C$, 'toArray$JA$I$I$I', function (dest, source_pos, dest_pos, len) {
{
return this.list.toArray$JA$I$I$I(dest, source_pos, dest_pos, len);
}});

Clazz.newMeth(C$, 'indexOf$I$J', function (offset, value) {
{
return this.list.indexOf$I$J(offset, value);
}});

Clazz.newMeth(C$, 'lastIndexOf$I$J', function (offset, value) {
{
return this.list.lastIndexOf$I$J(offset, value);
}});

Clazz.newMeth(C$, 'fill$J', function (val) {
{
this.list.fill$J(val);
}});

Clazz.newMeth(C$, 'fill$I$I$J', function (fromIndex, toIndex, val) {
{
this.list.fill$I$I$J(fromIndex, toIndex, val);
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

Clazz.newMeth(C$, 'binarySearch$J', function (value) {
{
return this.list.binarySearch$J(value);
}});

Clazz.newMeth(C$, 'binarySearch$J$I$I', function (value, fromIndex, toIndex) {
{
return this.list.binarySearch$J$I$I(value, fromIndex, toIndex);
}});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TLongProcedure', function (condition) {
{
return this.list.grep$gnu_trove_procedure_TLongProcedure(condition);
}});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TLongProcedure', function (condition) {
{
return this.list.inverseGrep$gnu_trove_procedure_TLongProcedure(condition);
}});

Clazz.newMeth(C$, 'max$', function () {
{
return this.list.max$();
}});

Clazz.newMeth(C$, 'min$', function () {
{
return this.list.min$();
}});

Clazz.newMeth(C$, 'sum$', function () {
{
return this.list.sum$();
}});

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TLongProcedure', function (procedure) {
{
return this.list.forEachDescending$gnu_trove_procedure_TLongProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TLongFunction', function ($function) {
{
this.list.transformValues$gnu_trove_function_TLongFunction($function);
}});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TLongList,[this.list]) : this);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
