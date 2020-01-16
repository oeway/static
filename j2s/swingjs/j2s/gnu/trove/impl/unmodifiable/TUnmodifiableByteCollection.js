(function(){var P$=Clazz.newPackage("gnu.trove.impl.unmodifiable"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TUnmodifiableByteCollection", null, null, ['gnu.trove.TByteCollection', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','gnu.trove.TByteCollection']]]

Clazz.newMeth(C$, 'c$$gnu_trove_TByteCollection', function (c) {
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

Clazz.newMeth(C$, 'contains$B', function (o) {
return this.c.contains$B(($b$[0] = o, $b$[0]));
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.c.toArray$();
});

Clazz.newMeth(C$, 'toArray$BA', function (a) {
return this.c.toArray$BA(a);
});

Clazz.newMeth(C$, 'toString', function () {
return this.c.toString();
});

Clazz.newMeth(C$, 'getNoEntryValue$', function () {
return $b$[0] = this.c.getNoEntryValue$(), $b$[0];
});

Clazz.newMeth(C$, 'forEach$gnu_trove_procedure_TByteProcedure', function (procedure) {
return this.c.forEach$gnu_trove_procedure_TByteProcedure(procedure);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.TUnmodifiableByteCollection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TUnmodifiableByteCollection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'gnu.trove.iterator.TByteIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=this.b$['gnu.trove.impl.unmodifiable.TUnmodifiableByteCollection'].c.iterator$();
}, 1);

C$.$fields$=[['O',['i','gnu.trove.iterator.TByteIterator']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return $b$[0] = this.i.next$(), $b$[0];
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);
})()
), Clazz.new_(P$.TUnmodifiableByteCollection$1.$init$, [this, null]));
});

Clazz.newMeth(C$, 'add$B', function (e) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$B', function (o) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (coll) {
return this.c.containsAll$java_util_Collection(coll);
});

Clazz.newMeth(C$, 'containsAll$gnu_trove_TByteCollection', function (coll) {
return this.c.containsAll$gnu_trove_TByteCollection(coll);
});

Clazz.newMeth(C$, 'containsAll$BA', function (array) {
return this.c.containsAll$BA(array);
});

Clazz.newMeth(C$, 'addAll$gnu_trove_TByteCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'addAll$BA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$gnu_trove_TByteCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'removeAll$BA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$gnu_trove_TByteCollection', function (coll) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'retainAll$BA', function (array) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
