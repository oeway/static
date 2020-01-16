(function(){var P$=Clazz.newPackage("gnu.trove.impl.sync"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "SynchronizedCollection", null, null, ['java.util.Collection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','java.util.Collection','mutex','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_util_Collection$O', function (c, mutex) {
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

Clazz.newMeth(C$, 'contains$O', function (o) {
{
return this.c.contains$O(o);
}});

Clazz.newMeth(C$, 'toArray$', function () {
{
return this.c.toArray$();
}});

Clazz.newMeth(C$, ['toArray$TTA'], function (a) {
{
return this.c.toArray$TTA(a);
}});

Clazz.newMeth(C$, 'iterator$', function () {
return this.c.iterator$();
});

Clazz.newMeth(C$, ['add$TE'], function (e) {
{
return this.c.add$TE(e);
}});

Clazz.newMeth(C$, 'remove$O', function (o) {
{
return this.c.remove$O(o);
}});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
{
return this.c.containsAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
{
return this.c.addAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
{
return this.c.removeAll$java_util_Collection(coll);
}});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
{
return this.c.retainAll$java_util_Collection(coll);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
