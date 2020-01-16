(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableDoubleCollection", null, null, ['gnu.trove.TDoubleCollection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','gnu.trove.TDoubleCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_TDoubleCollection', function (c) {
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

Clazz.newMeth(C$, 'contains$D', function (o) {
return this.c.contains$D(o);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.c.toArray$();
});

Clazz.newMeth(C$, 'toArray$DA', function (a) {
return this.c.toArray$DA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.c.toString();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.c.getNoEntryValue$();
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TDoubleProcedure', function (procedure) {
return this.c.forEach$gnu_trove_procedure_TDoubleProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableDoubleCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableDoubleCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TDoubleIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableDoubleCollection'].c.iterator$();
}, 1);

C$.$fields$=[['O',['i','gnu.trove.iterator.TDoubleIterator']]]

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
), Clazz.new_(P$.TUnmodifiableDoubleCollection$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'add$D', function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$D', function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
return this.c.containsAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TDoubleCollection', function (coll) {
return this.c.containsAll$gnu_trove_TDoubleCollection(coll);
});

Clazz.newMeth(C$, 'containsAll$DA', function (array) {
return this.c.containsAll$DA(array);
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TDoubleCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$DA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TDoubleCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$DA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TDoubleCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$DA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
