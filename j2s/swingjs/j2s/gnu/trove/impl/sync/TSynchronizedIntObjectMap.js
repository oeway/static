(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedIntSet','gnu.trove.impl.sync.SynchronizedCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedIntObjectMap", null, null, ['gnu.trove.map.TIntObjectMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TIntObjectMap','mutex','java.lang.Object','keySet','gnu.trove.set.TIntSet','values','java.util.Collection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TIntObjectMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TIntObjectMap$O', function (m, mutex) {
;C$.$init$.apply(this);
this.m=m;
this.mutex=mutex;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
{
return this.m.size$();
}});

Clazz.newMeth(C$, 'isEmpty$', function () {
{
return this.m.isEmpty$();
}});

Clazz.newMeth(C$, 'containsKey$I', function (key) {
{
return this.m.containsKey$I(key);
}});

Clazz.newMeth(C$, 'containsValue$O', function (value) {
{
return this.m.containsValue$O(value);
}});

Clazz.newMeth(C$, 'get$I', function (key) {
{
return this.m.get$I(key);
}});

Clazz.newMeth(C$, ['put$I$TV'], function (key, value) {
{
return this.m.put$I$TV(key, value);
}});

Clazz.newMeth(C$, 'remove$I', function (key) {
{
return this.m.remove$I(key);
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TIntObjectMap', function (map) {
{
this.m.putAll$gnu_trove_map_TIntObjectMap(map);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.m.clear$();
}});

Clazz.newMeth(C$, 'keySet$', function () {
{
if (this.keySet == null ) this.keySet=Clazz.new_($I$(1,1).c$$gnu_trove_set_TIntSet$O,[this.m.keySet$(), this.mutex]);
return this.keySet;
}});

Clazz.newMeth(C$, 'keys$', function () {
{
return this.m.keys$();
}});

Clazz.newMeth(C$, 'keys$IA', function (array) {
{
return this.m.keys$IA(array);
}});

Clazz.newMeth(C$, 'valueCollection$', function () {
{
if (this.values == null ) {
this.values=Clazz.new_(1,{E:"Object"},$I$(2,1).c$$java_util_Collection$O,[this.m.valueCollection$(), this.mutex]);
}return this.values;
}});

Clazz.newMeth(C$, 'values$', function () {
{
return this.m.values$();
}});

Clazz.newMeth(C$, ['values$TVA'], function (array) {
{
return this.m.values$TVA(array);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.iterator$();
});

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return this.m.getNoEntryKey$();
});

Clazz.newMeth(C$, ['putIfAbsent$I$TV'], function (key, value) {
{
return this.m.putIfAbsent$I$TV(key, value);
}});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TIntProcedure', function (procedure) {
{
return this.m.forEachKey$gnu_trove_procedure_TIntProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TObjectProcedure', function (procedure) {
{
return this.m.forEachValue$gnu_trove_procedure_TObjectProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TIntObjectProcedure', function (procedure) {
{
return this.m.forEachEntry$gnu_trove_procedure_TIntObjectProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TObjectFunction', function ($function) {
{
this.m.transformValues$gnu_trove_function_TObjectFunction($function);
}});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TIntObjectProcedure', function (procedure) {
{
return this.m.retainEntries$gnu_trove_procedure_TIntObjectProcedure(procedure);
}});

Clazz.newMeth(C$, 'equals$O', function (o) {
{
return this.m.equals$O(o);
}});

Clazz.newMeth(C$, 'hashCode$', function () {
{
return this.m.hashCode$();
}});

Clazz.newMeth(C$, 'toString', function () {
{
return this.m.toString();
}});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
{
s.defaultWriteObject$();
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
