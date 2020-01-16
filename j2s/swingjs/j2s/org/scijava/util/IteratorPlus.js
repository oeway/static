(function(){var P$=Clazz.newPackage("org.scijava.util"),I$=[[0,['org.scijava.util.IteratorPlus','.EnumerationIterator']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IteratorPlus", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.Enumeration', 'java.util.Iterator', 'Iterable']);
C$.$classes$=[['EnumerationIterator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['iterator','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$Iterable', function (iterable) {
C$.c$$java_util_Iterator.apply(this, [iterable.iterator$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Enumeration', function (enumeration) {
C$.c$$java_util_Iterator.apply(this, [Clazz.new_(1,{E:"Object"},$I$(1,1).c$$java_util_Enumeration,[enumeration])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Iterator', function (iterator) {
;C$.$init$.apply(this);
this.iterator=iterator;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$', function () {
return this.hasNext$();
});

Clazz.newMeth(C$, 'nextElement$', function () {
return this.next$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.iterator.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.iterator.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.iterator.remove$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.IteratorPlus, "EnumerationIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['enumeration','java.util.Enumeration']]]

Clazz.newMeth(C$, 'c$$java_util_Enumeration', function (enumeration) {
;C$.$init$.apply(this);
this.enumeration=enumeration;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.enumeration.hasMoreElements$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.enumeration.nextElement$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
