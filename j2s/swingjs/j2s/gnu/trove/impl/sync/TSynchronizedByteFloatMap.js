(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={},I$=[[0,'gnu.trove.impl.sync.TSynchronizedByteSet','gnu.trove.impl.sync.TSynchronizedFloatCollection']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedByteFloatMap", null, null, ['gnu.trove.map.TByteFloatMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.keySet=null;
this.values=null;
}, 1);

C$.$fields$=[['O',['m','gnu.trove.map.TByteFloatMap','mutex','java.lang.Object','keySet','gnu.trove.set.TByteSet','values','gnu.trove.TFloatCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_map_TByteFloatMap', function (m) {
;C$.$init$.apply(this);
if (m == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.m=m;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_map_TByteFloatMap$O', function (m, mutex) {
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

Clazz.newMeth(C$, 'containsKey$B', function (key) {
{
return this.m.containsKey$B(($b$[0] = key, $b$[0]));
}});

Clazz.newMeth(C$, 'containsValue$F', function (value) {
{
return this.m.containsValue$F(value);
}});

Clazz.newMeth(C$, 'get$B', function (key) {
{
return this.m.get$B(($b$[0] = key, $b$[0]));
}});

Clazz.newMeth(C$, 'put$B$F', function (key, value) {
{
return this.m.put$B$F(($b$[0] = key, $b$[0]), value);
}});

Clazz.newMeth(C$, 'remove$B', function (key) {
{
return this.m.remove$B(($b$[0] = key, $b$[0]));
}});

Clazz.newMeth(C$, 'putAll$java_util_Map', function (map) {
{
this.m.putAll$java_util_Map(map);
}});

Clazz.newMeth(C$, 'putAll$gnu_trove_map_TByteFloatMap', function (map) {
{
this.m.putAll$gnu_trove_map_TByteFloatMap(map);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.m.clear$();
}});

Clazz.newMeth(C$, 'keySet$', function () {
{
if (this.keySet == null ) this.keySet=Clazz.new_($I$(1,1).c$$gnu_trove_set_TByteSet$O,[this.m.keySet$(), this.mutex]);
return this.keySet;
}});

Clazz.newMeth(C$, 'keys$', function () {
{
return this.m.keys$();
}});

Clazz.newMeth(C$, 'keys$BA', function (array) {
{
return this.m.keys$BA(array);
}});

Clazz.newMeth(C$, 'valueCollection$', function () {
{
if (this.values == null ) this.values=Clazz.new_($I$(2,1).c$$gnu_trove_TFloatCollection$O,[this.m.valueCollection$(), this.mutex]);
return this.values;
}});

Clazz.newMeth(C$, 'values$', function () {
{
return this.m.values$();
}});

Clazz.newMeth(C$, 'values$FA', function (array) {
{
return this.m.values$FA(array);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.m.iterator$();
});

Clazz.newMeth(C$, 'getNoEntryKey$', function () {
return $b$[0] = this.m.getNoEntryKey$(), $b$[0];
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.m.getNoEntryValue$();
});

Clazz.newMeth(C$, 'putIfAbsent$B$F', function (key, value) {
{
return this.m.putIfAbsent$B$F(($b$[0] = key, $b$[0]), value);
}});

Clazz.newMeth(C$, 'forEachKey$gnu_trove_procedure_TByteProcedure', function (procedure) {
{
return this.m.forEachKey$gnu_trove_procedure_TByteProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachValue$gnu_trove_procedure_TFloatProcedure', function (procedure) {
{
return this.m.forEachValue$gnu_trove_procedure_TFloatProcedure(procedure);
}});

Clazz.newMeth(C$, 'forEachEntry$gnu_trove_procedure_TByteFloatProcedure', function (procedure) {
{
return this.m.forEachEntry$gnu_trove_procedure_TByteFloatProcedure(procedure);
}});

Clazz.newMeth(C$, 'transformValues$gnu_trove_function_TFloatFunction', function ($function) {
{
this.m.transformValues$gnu_trove_function_TFloatFunction($function);
}});

Clazz.newMeth(C$, 'retainEntries$gnu_trove_procedure_TByteFloatProcedure', function (procedure) {
{
return this.m.retainEntries$gnu_trove_procedure_TByteFloatProcedure(procedure);
}});

Clazz.newMeth(C$, 'increment$B', function (key) {
{
return this.m.increment$B(($b$[0] = key, $b$[0]));
}});

Clazz.newMeth(C$, 'adjustValue$B$F', function (key, amount) {
{
return this.m.adjustValue$B$F(($b$[0] = key, $b$[0]), amount);
}});

Clazz.newMeth(C$, 'adjustOrPutValue$B$F$F', function (key, adjust_amount, put_amount) {
{
return this.m.adjustOrPutValue$B$F$F(($b$[0] = key, $b$[0]), adjust_amount, put_amount);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
