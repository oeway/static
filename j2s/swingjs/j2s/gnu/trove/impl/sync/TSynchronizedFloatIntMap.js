(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedFloatSet','gnu.trove.impl.sync.TSynchronizedIntCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedFloatIntMap", null, null, ['gnu.trove.map.TFloatIntMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TFloatIntMap','mutex','java.lang.Object','keySet','gnu.trove.set.TFloatSet','values','gnu.trove.TIntCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TFloatIntMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TFloatIntMap$O', function (m, mutex) {
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

Clazz.newMeth(C$, 'containsKey$F', function (key) {
{
return this.m.containsKey$F(key);
}});

Clazz.newMeth(C$, 'containsValue$I', function (value) {
{
return this.m.containsValue$I(value);
}});

Clazz.newMeth(C$, 'get$F', function (key) {
{
return this.m.get$F(key);
}});

Clazz.newMeth(C$, 'put$F$I', function (key, value) {
{
return this.m.put$F$I(key, value);
}});

Clazz.newMeth(C$, 'remove$F', function (key) {
{
return this.m.remove$F(key);
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TFloatIntMap', function (map) {
{
this.m.putAll$gnu_trove_map_TFloatIntMap(map);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.m.clear$();
}});

Clazz.newMeth(C$, 'keySet$', function () {
{
if (this.keySet == null ) this.keySet=Clazz.new_($I$(1,1).c$$gnu_trove_set_TFloatSet$O,[this.m.keySet$(), this.mutex]);
return this.keySet;
}});

Clazz.newMeth(C$, 'keys$', function () {
{
return this.m.keys$();
}});

Clazz.newMeth(C$, 'keys$FA', function (array) {
{
return this.m.keys$FA(array);
}});

Clazz.newMeth(C$, 'valueCollection$', function () {
{
if (this.values == null ) this.values=Clazz.new_($I$(2,1).c$$gnu_trove_TIntCollection$O,[this.m.valueCollection$(), this.mutex]);
return this.values;
}});

Clazz.newMeth(C$, 'values$', function () {
{
return this.m.values$();
}});

Clazz.newMeth(C$, 'values$IA', function (array) {
{
return this.m.values$IA(array);
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

Clazz.newMeth(C$, 'putIfAbsent$F$I', function (key, value) {
{
return this.m.putIfAbsent$F$I(key, value);
}});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TFloatProcedure', function (procedure) {
{
return this.m.forEachKey$gnu_trove_procedure_TFloatProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TIntProcedure', function (procedure) {
{
return this.m.forEachValue$gnu_trove_procedure_TIntProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TFloatIntProcedure', function (procedure) {
{
return this.m.forEachEntry$gnu_trove_procedure_TFloatIntProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TIntFunction', function ($function) {
{
this.m.transformValues$gnu_trove_function_TIntFunction($function);
}});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TFloatIntProcedure', function (procedure) {
{
return this.m.retainEntries$gnu_trove_procedure_TFloatIntProcedure(procedure);
}});

Clazz.newMeth(C$, 'increment$F', function (key) {
{
return this.m.increment$F(key);
}});

Clazz.newMeth(C$, 'adjustValue$F$I', function (key, amount) {
{
return this.m.adjustValue$F$I(key, amount);
}});

Clazz.newMeth(C$, 'adjustOrPutValue$F$I$I', function (key, adjust_amount, put_amount) {
{
return this.m.adjustOrPutValue$F$I$I(key, adjust_amount, put_amount);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1