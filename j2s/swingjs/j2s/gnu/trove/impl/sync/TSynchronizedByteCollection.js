(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TSynchronizedByteCollection", null, null, ['gnu.trove.TByteCollection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','gnu.trove.TByteCollection','mutex','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$gnu_trove_TByteCollection', function (c) {
;C$.$init$.apply(this);
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.c=c;
this.mutex=this;
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_TByteCollection$O', function (c, mutex) {
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

Clazz.newMeth(C$, 'contains$B', function (o) {
{
return this.c.contains$B(($b$[0] = o, $b$[0]));
}});

Clazz.newMeth(C$, 'toArray$', function () {
{
return this.c.toArray$();
}});

Clazz.newMeth(C$, 'toArray$BA', function (a) {
{
return this.c.toArray$BA(a);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.c.iterator$();
});

Clazz.newMeth(C$, 'add$B', function (e) {
{
return this.c.add$B(($b$[0] = e, $b$[0]));
}});

Clazz.newMeth(C$, 'remove$B', function (o) {
{
return this.c.remove$B(($b$[0] = o, $b$[0]));
}});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
{
return this.c.containsAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TByteCollection', function (coll) {
{
return this.c.containsAll$gnu_trove_TByteCollection(coll);
}});

Clazz.newMeth(C$, 'containsAll$BA', function (array) {
{
return this.c.containsAll$BA(array);
}});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
{
return this.c.addAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'addAll$gnu_trove_TByteCollection', function (coll) {
{
return this.c.addAll$gnu_trove_TByteCollection(coll);
}});

Clazz.newMeth(C$, 'addAll$BA', function (array) {
{
return this.c.addAll$BA(array);
}});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
{
return this.c.removeAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TByteCollection', function (coll) {
{
return this.c.removeAll$gnu_trove_TByteCollection(coll);
}});

Clazz.newMeth(C$, 'removeAll$BA', function (array) {
{
return this.c.removeAll$BA(array);
}});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
{
return this.c.retainAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TByteCollection', function (coll) {
{
return this.c.retainAll$gnu_trove_TByteCollection(coll);
}});

Clazz.newMeth(C$, 'retainAll$BA', function (array) {
{
return this.c.retainAll$BA(array);
}});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.c.getNoEntryValue$(), $b$[0];
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TByteProcedure', function (procedure) {
{
return this.c.forEach$gnu_trove_procedure_TByteProcedure(procedure);
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
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
