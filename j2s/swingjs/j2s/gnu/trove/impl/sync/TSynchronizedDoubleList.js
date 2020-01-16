(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedRandomAccessDoubleList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedDoubleList", null, 'gnu.trove.impl.sync.TSynchronizedDoubleCollection', 'gnu.trove.list.TDoubleList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','gnu.trove.list.TDoubleList']]]

Clazz.newMeth(C$, 'c$$gnu_trove_list_TDoubleList', function (list) {
;C$.superclazz.c$$gnu_trove_TDoubleCollection.apply(this,[list]);C$.$init$.apply(this);
this.list=list;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_TDoubleList$O', function (list, mutex) {
;C$.superclazz.c$$gnu_trove_TDoubleCollection$O.apply(this,[list, mutex]);C$.$init$.apply(this);
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

Clazz.newMeth(C$, 'set$I$D', function (index, element) {
{
return this.list.set$I$D(index, element);
}});

Clazz.newMeth(C$, 'set$I$DA', function (offset, values) {
{
this.list.set$I$DA(offset, values);
}});

Clazz.newMeth(C$, 'set$I$DA$I$I', function (offset, values, valOffset, length) {
{
this.list.set$I$DA$I$I(offset, values, valOffset, length);
}});

Clazz.newMeth(C$, 'replace$I$D', function (offset, val) {
{
return this.list.replace$I$D(offset, val);
}});

Clazz.newMeth(C$, 'remove$I$I', function (offset, length) {
{
this.list.remove$I$I(offset, length);
}});

Clazz.newMeth(C$, 'removeAt$I', function (offset) {
{
return this.list.removeAt$I(offset);
}});

Clazz.newMeth(C$, 'add$DA', function (vals) {
{
this.list.add$DA(vals);
}});

Clazz.newMeth(C$, 'add$DA$I$I', function (vals, offset, length) {
{
this.list.add$DA$I$I(vals, offset, length);
}});

Clazz.newMeth(C$, 'insert$I$D', function (offset, value) {
{
this.list.insert$I$D(offset, value);
}});

Clazz.newMeth(C$, 'insert$I$DA', function (offset, values) {
{
this.list.insert$I$DA(offset, values);
}});

Clazz.newMeth(C$, 'insert$I$DA$I$I', function (offset, values, valOffset, len) {
{
this.list.insert$I$DA$I$I(offset, values, valOffset, len);
}});

Clazz.newMeth(C$, 'indexOf$D', function (o) {
{
return this.list.indexOf$D(o);
}});

Clazz.newMeth(C$, 'lastIndexOf$D', function (o) {
{
return this.list.lastIndexOf$D(o);
}});

Clazz.newMeth(C$, 'subList$I$I', function (fromIndex, toIndex) {
{
return Clazz.new_(C$.c$$gnu_trove_list_TDoubleList$O,[this.list.subList$I$I(fromIndex, toIndex), this.mutex]);
}});

Clazz.newMeth(C$, 'toArray$I$I', function (offset, len) {
{
return this.list.toArray$I$I(offset, len);
}});

Clazz.newMeth(C$, 'toArray$DA$I$I', function (dest, offset, len) {
{
return this.list.toArray$DA$I$I(dest, offset, len);
}});

Clazz.newMeth(C$, 'toArray$DA$I$I$I', function (dest, source_pos, dest_pos, len) {
{
return this.list.toArray$DA$I$I$I(dest, source_pos, dest_pos, len);
}});

Clazz.newMeth(C$, 'indexOf$I$D', function (offset, value) {
{
return this.list.indexOf$I$D(offset, value);
}});

Clazz.newMeth(C$, 'lastIndexOf$I$D', function (offset, value) {
{
return this.list.lastIndexOf$I$D(offset, value);
}});

Clazz.newMeth(C$, 'fill$D', function (val) {
{
this.list.fill$D(val);
}});

Clazz.newMeth(C$, 'fill$I$I$D', function (fromIndex, toIndex, val) {
{
this.list.fill$I$I$D(fromIndex, toIndex, val);
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

Clazz.newMeth(C$, 'binarySearch$D', function (value) {
{
return this.list.binarySearch$D(value);
}});

Clazz.newMeth(C$, 'binarySearch$D$I$I', function (value, fromIndex, toIndex) {
{
return this.list.binarySearch$D$I$I(value, fromIndex, toIndex);
}});

Clazz.newMeth(C$, 'grep$gnu_trove_procedure_TDoubleProcedure', function (condition) {
{
return this.list.grep$gnu_trove_procedure_TDoubleProcedure(condition);
}});

Clazz.newMeth(C$, 'inverseGrep$gnu_trove_procedure_TDoubleProcedure', function (condition) {
{
return this.list.inverseGrep$gnu_trove_procedure_TDoubleProcedure(condition);
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

Clazz.newMeth(C$, 'forEachDescending$gnu_trove_procedure_TDoubleProcedure', function (procedure) {
{
return this.list.forEachDescending$gnu_trove_procedure_TDoubleProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TDoubleFunction', function ($function) {
{
this.list.transformValues$gnu_trove_function_TDoubleFunction($function);
}});

Clazz.newMeth(C$, 'readResolve', function () {
return (Clazz.instanceOf(this.list, "java.util.RandomAccess") ? Clazz.new_($I$(1,1).c$$gnu_trove_list_TDoubleList,[this.list]) : this);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1