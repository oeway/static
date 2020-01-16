(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableShortCollection", null, null, ['gnu.trove.TShortCollection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','gnu.trove.TShortCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_TShortCollection', function (c) {
;C$.$init$.apply(this);
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.c=c;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.c.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.c.isEmpty$();
});

Clazz.newMeth(C$, 'contains$H', function (o) {
return this.c.contains$H(o);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.c.toArray$();
});

Clazz.newMeth(C$, 'toArray$HA', function (a) {
return this.c.toArray$HA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.c.toString();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.c.getNoEntryValue$();
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TShortProcedure', function (procedure) {
return this.c.forEach$gnu_trove_procedure_TShortProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableShortCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableShortCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TShortIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableShortCollection'].c.iterator$();
}, 1);

C$.$fields$=[['O',['i','gnu.trove.iterator.TShortIterator']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.i.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.TUnmodifiableShortCollection$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'add$H', function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$H', function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
return this.c.containsAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TShortCollection', function (coll) {
return this.c.containsAll$gnu_trove_TShortCollection(coll);
});

Clazz.newMeth(C$, 'containsAll$HA', function (array) {
return this.c.containsAll$HA(array);
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TShortCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$HA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TShortCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$HA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TShortCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$HA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:44 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
