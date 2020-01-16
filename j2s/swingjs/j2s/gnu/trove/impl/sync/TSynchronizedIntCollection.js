(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedIntCollection", null, null, ['gnu.trove.TIntCollection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','gnu.trove.TIntCollection','mutex','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$gnu_trove_TIntCollection', function (c) {
;C$.$init$.apply(this);
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.c=c;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_TIntCollection$O', function (c, mutex) {
;C$.$init$.apply(this);
this.c=c;
this.mutex=mutex;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
{
return this.c.size$();
}});

Clazz.newMeth(C$, 'isEmpty$', function () {
{
return this.c.isEmpty$();
}});

Clazz.newMeth(C$, 'contains$I', function (o) {
{
return this.c.contains$I(o);
}});

Clazz.newMeth(C$, 'toArray$', function () {
{
return this.c.toArray$();
}});

Clazz.newMeth(C$, 'toArray$IA', function (a) {
{
return this.c.toArray$IA(a);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.c.iterator$();
});

Clazz.newMeth(C$, 'add$I', function (e) {
{
return this.c.add$I(e);
}});

Clazz.newMeth(C$, 'remove$I', function (o) {
{
return this.c.remove$I(o);
}});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
{
return this.c.containsAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TIntCollection', function (coll) {
{
return this.c.containsAll$gnu_trove_TIntCollection(coll);
}});

Clazz.newMeth(C$, 'containsAll$IA', function (array) {
{
return this.c.containsAll$IA(array);
}});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
{
return this.c.addAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'addAll$gnu_trove_TIntCollection', function (coll) {
{
return this.c.addAll$gnu_trove_TIntCollection(coll);
}});

Clazz.newMeth(C$, 'addAll$IA', function (array) {
{
return this.c.addAll$IA(array);
}});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
{
return this.c.removeAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TIntCollection', function (coll) {
{
return this.c.removeAll$gnu_trove_TIntCollection(coll);
}});

Clazz.newMeth(C$, 'removeAll$IA', function (array) {
{
return this.c.removeAll$IA(array);
}});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
{
return this.c.retainAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TIntCollection', function (coll) {
{
return this.c.retainAll$gnu_trove_TIntCollection(coll);
}});

Clazz.newMeth(C$, 'retainAll$IA', function (array) {
{
return this.c.retainAll$IA(array);
}});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.c.getNoEntryValue$();
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TIntProcedure', function (procedure) {
{
return this.c.forEach$gnu_trove_procedure_TIntProcedure(procedure);
}});

Clazz.newMeth(C$, 'clear$', function () {
{
this.c.clear$();
}});

Clazz.newMeth(C$, 'toString', function () {
{
return this.c.toString();
}});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
{
s.defaultWriteObject$();
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
