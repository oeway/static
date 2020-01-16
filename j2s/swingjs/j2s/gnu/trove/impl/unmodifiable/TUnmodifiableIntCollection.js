(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableIntCollection", null, null, ['gnu.trove.TIntCollection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','gnu.trove.TIntCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_TIntCollection', function (c) {
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

Clazz.newMeth(C$, 'contains$I', function (o) {
return this.c.contains$I(o);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.c.toArray$();
});

Clazz.newMeth(C$, 'toArray$IA', function (a) {
return this.c.toArray$IA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.c.toString();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return this.c.getNoEntryValue$();
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TIntProcedure', function (procedure) {
return this.c.forEach$gnu_trove_procedure_TIntProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableIntCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableIntCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TIntIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableIntCollection'].c.iterator$();
}, 1);

C$.$fields$=[['O',['i','gnu.trove.iterator.TIntIterator']]]

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
), Clazz.new_(P$.TUnmodifiableIntCollection$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'add$I', function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I', function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
return this.c.containsAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TIntCollection', function (coll) {
return this.c.containsAll$gnu_trove_TIntCollection(coll);
});

Clazz.newMeth(C$, 'containsAll$IA', function (array) {
return this.c.containsAll$IA(array);
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TIntCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$IA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TIntCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$IA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TIntCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$IA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
