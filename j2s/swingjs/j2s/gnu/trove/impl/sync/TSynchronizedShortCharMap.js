(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedShortSet','gnu.trove.impl.sync.TSynchronizedCharCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedShortCharMap", null, null, ['gnu.trove.map.TShortCharMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TShortCharMap','mutex','java.lang.Object','keySet','gnu.trove.set.TShortSet','values','gnu.trove.TCharCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TShortCharMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TShortCharMap$O', function (m, mutex) {
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

Clazz.newMeth(C$, 'containsKey$H', function (key) {
{
return this.m.containsKey$H(key);
}});

Clazz.newMeth(C$, 'containsValue$C', function (value) {
{
return this.m.containsValue$C(value);
}});

Clazz.newMeth(C$, 'get$H', function (key) {
{
return this.m.get$H(key);
}});

Clazz.newMeth(C$, 'put$H$C', function (key, value) {
{
return this.m.put$H$C(key, value);
}});

Clazz.newMeth(C$, 'remove$H', function (key) {
{
return this.m.remove$H(key);
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TShortCharMap', function (map) {
{
this.m.putAll$gnu_trove_map_TShortCharMap(map);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.m.clear$();
}});

Clazz.newMeth(C$, 'keySet$', function () {
{
if (this.keySet == null ) this.keySet=Clazz.new_($I$(1,1).c$$gnu_trove_set_TShortSet$O,[this.m.keySet$(), this.mutex]);
return this.keySet;
}});

Clazz.newMeth(C$, 'keys$', function () {
{
return this.m.keys$();
}});

Clazz.newMeth(C$, 'keys$HA', function (array) {
{
return this.m.keys$HA(array);
}});

Clazz.newMeth(C$, 'valueCollection$', function () {
{
if (this.values == null ) this.values=Clazz.new_($I$(2,1).c$$gnu_trove_TCharCollection$O,[this.m.valueCollection$(), this.mutex]);
return this.values;
}});

Clazz.newMeth(C$, 'values$', function () {
{
return this.m.values$();
}});

Clazz.newMeth(C$, 'values$CA', function (array) {
{
return this.m.values$CA(array);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.iterator$();
});

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return this.m.getNoEntryKey$();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.m.getNoEntryValue$();
});

Clazz.newMeth(C$, 'putIfAbsent$H$C', function (key, value) {
{
return this.m.putIfAbsent$H$C(key, value);
}});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TShortProcedure', function (procedure) {
{
return this.m.forEachKey$gnu_trove_procedure_TShortProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TCharProcedure', function (procedure) {
{
return this.m.forEachValue$gnu_trove_procedure_TCharProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TShortCharProcedure', function (procedure) {
{
return this.m.forEachEntry$gnu_trove_procedure_TShortCharProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TCharFunction', function ($function) {
{
this.m.transformValues$gnu_trove_function_TCharFunction($function);
}});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TShortCharProcedure', function (procedure) {
{
return this.m.retainEntries$gnu_trove_procedure_TShortCharProcedure(procedure);
}});

Clazz.newMeth(C$, 'increment$H', function (key) {
{
return this.m.increment$H(key);
}});

Clazz.newMeth(C$, 'adjustValue$H$C', function (key, amount) {
{
return this.m.adjustValue$H$C(key, amount);
}});

Clazz.newMeth(C$, 'adjustOrPutValue$H$C$C', function (key, adjust_amount, put_amount) {
{
return this.m.adjustOrPutValue$H$C$C(key, adjust_amount, put_amount);
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
