(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.SynchronizedSet','gnu.trove.impl.sync.TSynchronizedByteCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedObjectByteMap", null, null, ['gnu.trove.map.TObjectByteMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TObjectByteMap','mutex','java.lang.Object','keySet','java.util.Set','values','gnu.trove.TByteCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectByteMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectByteMap$O', function (m, mutex) {
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

Clazz.newMeth(C$, 'containsKey$O', function (key) {
{
return this.m.containsKey$O(key);
}});

Clazz.newMeth(C$, 'containsValue$B', function (value) {
{
return this.m.containsValue$B(($b$[0] = value, $b$[0]));
}});

Clazz.newMeth(C$, 'get$O', function (key) {
{
return $b$[0] = this.m.get$O(key), $b$[0];
}});

Clazz.newMeth(C$, ['put$TK$B'], function (key, value) {
{
return $b$[0] = this.m.put$TK$B(key, (value|0)), $b$[0];
}});

Clazz.newMeth(C$, 'remove$O', function (key) {
{
return $b$[0] = this.m.remove$O(key), $b$[0];
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TObjectByteMap', function (map) {
{
this.m.putAll$gnu_trove_map_TObjectByteMap(map);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.m.clear$();
}});

Clazz.newMeth(C$, 'keySet$', function () {
{
if (this.keySet == null ) {
this.keySet=Clazz.new_(1,{E:"Object"},$I$(1,1).c$$java_util_Set$O,[this.m.keySet$(), this.mutex]);
}return this.keySet;
}});

Clazz.newMeth(C$, 'keys$', function () {
{
return this.m.keys$();
}});

Clazz.newMeth(C$, ['keys$TKA'], function (array) {
{
return this.m.keys$TKA(array);
}});

Clazz.newMeth(C$, 'valueCollection$', function () {
{
if (this.values == null ) this.values=Clazz.new_($I$(2,1).c$$gnu_trove_TByteCollection$O,[this.m.valueCollection$(), this.mutex]);
return this.values;
}});

Clazz.newMeth(C$, 'values$', function () {
{
return this.m.values$();
}});

Clazz.newMeth(C$, 'values$BA', function (array) {
{
return this.m.values$BA(array);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.iterator$();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.m.getNoEntryValue$(), $b$[0];
});

Clazz.newMeth(C$, ['putIfAbsent$TK$B'], function (key, value) {
{
return $b$[0] = this.m.putIfAbsent$TK$B(key, (value|0)), $b$[0];
}});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TObjectProcedure', function (procedure) {
{
return this.m.forEachKey$gnu_trove_procedure_TObjectProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TByteProcedure', function (procedure) {
{
return this.m.forEachValue$gnu_trove_procedure_TByteProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TObjectByteProcedure', function (procedure) {
{
return this.m.forEachEntry$gnu_trove_procedure_TObjectByteProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TByteFunction', function ($function) {
{
this.m.transformValues$gnu_trove_function_TByteFunction($function);
}});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TObjectByteProcedure', function (procedure) {
{
return this.m.retainEntries$gnu_trove_procedure_TObjectByteProcedure(procedure);
}});

Clazz.newMeth(C$, ['increment$TK'], function (key) {
{
return this.m.increment$TK(key);
}});

Clazz.newMeth(C$, ['adjustValue$TK$B'], function (key, amount) {
{
return this.m.adjustValue$TK$B(key, ($b$[0] = amount, $b$[0]));
}});

Clazz.newMeth(C$, ['adjustOrPutValue$TK$B$B'], function (key, adjust_amount, put_amount) {
{
return $b$[0] = this.m.adjustOrPutValue$TK$B$B(key, (adjust_amount|0), (put_amount|0)), $b$[0];
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
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
