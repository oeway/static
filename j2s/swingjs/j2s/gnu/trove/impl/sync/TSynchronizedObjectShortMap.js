(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.SynchronizedSet','gnu.trove.impl.sync.TSynchronizedShortCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedObjectShortMap", null, null, ['gnu.trove.map.TObjectShortMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TObjectShortMap','mutex','java.lang.Object','keySet','java.util.Set','values','gnu.trove.TShortCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectShortMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TObjectShortMap$O', function (m, mutex) {
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

Clazz.newMeth(C$, 'containsValue$H', function (value) {
{
return this.m.containsValue$H(value);
}});

Clazz.newMeth(C$, 'get$O', function (key) {
{
return this.m.get$O(key);
}});

Clazz.newMeth(C$, ['put$TK$H'], function (key, value) {
{
return this.m.put$TK$H(key, value);
}});

Clazz.newMeth(C$, 'remove$O', function (key) {
{
return this.m.remove$O(key);
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TObjectShortMap', function (map) {
{
this.m.putAll$gnu_trove_map_TObjectShortMap(map);
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
if (this.values == null ) this.values=Clazz.new_($I$(2,1).c$$gnu_trove_TShortCollection$O,[this.m.valueCollection$(), this.mutex]);
return this.values;
}});

Clazz.newMeth(C$, 'values$', function () {
{
return this.m.values$();
}});

Clazz.newMeth(C$, 'values$HA', function (array) {
{
return this.m.values$HA(array);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.iterator$();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.m.getNoEntryValue$();
});

Clazz.newMeth(C$, ['putIfAbsent$TK$H'], function (key, value) {
{
return this.m.putIfAbsent$TK$H(key, value);
}});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TObjectProcedure', function (procedure) {
{
return this.m.forEachKey$gnu_trove_procedure_TObjectProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TShortProcedure', function (procedure) {
{
return this.m.forEachValue$gnu_trove_procedure_TShortProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TObjectShortProcedure', function (procedure) {
{
return this.m.forEachEntry$gnu_trove_procedure_TObjectShortProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TShortFunction', function ($function) {
{
this.m.transformValues$gnu_trove_function_TShortFunction($function);
}});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TObjectShortProcedure', function (procedure) {
{
return this.m.retainEntries$gnu_trove_procedure_TObjectShortProcedure(procedure);
}});

Clazz.newMeth(C$, ['increment$TK'], function (key) {
{
return this.m.increment$TK(key);
}});

Clazz.newMeth(C$, ['adjustValue$TK$H'], function (key, amount) {
{
return this.m.adjustValue$TK$H(key, amount);
}});

Clazz.newMeth(C$, ['adjustOrPutValue$TK$H$H'], function (key, adjust_amount, put_amount) {
{
return this.m.adjustOrPutValue$TK$H$H(key, adjust_amount, put_amount);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
