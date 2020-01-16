(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedRandomAccessShortList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedShortList", null, 'gnu.trove.impl.sync.TSynchronizedShortCollection', 'gnu.trove.list.TShortList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TShortList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TShortList', function (list) {
;C$.superclazz.c$$gnu_trove_TShortCollection.apply(this,[list]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TShortList$O', function (list, mutex) {
;C$.superclazz.c$$gnu_trove_TShortCollection$O.apply(this,[list, mutex]);C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'set$I$H', function (index, element) {
{
return this.list.set$I$H(index, element);
}});

Clazz.newMeth(C$, 'set$I$HA', function (offset, values) {
{
this.list.set$I$HA(offset, values);
}});

Clazz.newMeth(C$, 'set$I$HA$I$I', function (offset, values, valOffset, length) {
{
this.list.set$I$HA$I$I(offset, values, valOffset, length);
}});

Clazz.newMeth(C$, 'replace$I$H', function (offset, val) {
{
return this.list.replace$I$H(offset, val);
}});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
{
this.list.remove$I$I(offset, length);
}});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
{
return this.list.removeAt$I(offset);
}});

Clazz.newMeth(C$, 'add$HA', function (vals) {
{
this.list.add$HA(vals);
}});

Clazz.newMeth(C$, 'add$HA$I$I', function (vals, offset, length) {
{
this.list.add$HA$I$I(vals, offset, length);
}});

Clazz.newMeth(C$, 'insert$I$H', function (offset, value) {
{
this.list.insert$I$H(offset, value);
}});

Clazz.newMeth(C$, 'insert$I$HA', function (offset, values) {
{
this.list.insert$I$HA(offset, values);
}});

Clazz.newMeth(C$, 'insert$I$HA$I$I', function (offset, values, valOffset, len) {
{
this.list.insert$I$HA$I$I(offset, values, valOffset, len);
}});

Clazz.newMeth(C$, 'indexOf$H', function (o) {
{
return this.list.indexOf$H(o);
}});

Clazz.newMeth(C$, 'lastIndexOf$H', function (o) {
{
return this.list.lastIndexOf$H(o);
}});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$gnu_trove_list_TShortList$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
{
return this.list.toArray$I$I(offset, len);
}});

Clazz.newMeth(C$, 'toArray$HA$I$I', function (dest, offset, len) {
{
return this.list.toArray$HA$I$I(dest, offset, len);
}});

Clazz.newMeth(C$, 'toArray$HA$I$I$I', function (dest, source_pos, dest_pos, len) {
{
return this.list.toArray$HA$I$I$I(dest, source_pos, dest_pos, len);
}});

Clazz.newMeth(C$, 'indexOf$I$H', function (offset, value) {
{
return this.list.indexOf$I$H(offset, value);
}});

Clazz.newMeth(C$, 'lastIndexOf$I$H', function (offset, value) {
{
return this.list.lastIndexOf$I$H(offset, value);
}});

Clazz.newMeth(C$, 'fill$H', function (val) {
{
this.list.fill$H(val);
}});

Clazz.newMeth(C$, 'fill$I$I$H', function (fromIndex, toIndex, val) {
{
this.list.fill$I$I$H(fromIndex, toIndex, val);
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

Clazz.newMeth(C$, 'binarySearch$H', function (value) {
{
return this.list.binarySearch$H(value);
}});

Clazz.newMeth(C$, 'binarySearch$H$I$I', function (value, fromIndex, toIndex) {
{
return this.list.binarySearch$H$I$I(value, fromIndex, toIndex);
}});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TShortProcedure', function (condition) {
{
return this.list.grep$gnu_trove_procedure_TShortProcedure(condition);
}});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TShortProcedure', function (condition) {
{
return this.list.inverseGrep$gnu_trove_procedure_TShortProcedure(condition);
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

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TShortProcedure', function (procedure) {
{
return this.list.forEachDescending$gnu_trove_procedure_TShortProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TShortFunction', function ($function) {
{
this.list.transformValues$gnu_trove_function_TShortFunction($function);
}});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TShortList,[this.list]) : this);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
