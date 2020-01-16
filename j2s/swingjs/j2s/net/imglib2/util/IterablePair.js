(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IterablePair", null, null, 'Iterable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['iter1','Iterable','+iter2']]]

Clazz.newMeth(C$, 'c$$Iterable$Iterable', function (iter1, iter2) {
;C$.$init$.apply(this);
this.iter1=iter1;
this.iter2=iter2;
}, 1);

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.IterablePair$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IterablePair$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i1=this.b$['net.imglib2.util.IterablePair'].iter1.iterator$();
this.i2=this.b$['net.imglib2.util.IterablePair'].iter2.iterator$();
this.value=((P$.IterablePair$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "IterablePair$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.util.Pair', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'getA$', function () {
return this.b$['net.imglib2.util.IterablePair$1'].e1;
});

Clazz.newMeth(C$, 'getB$', function () {
return this.b$['net.imglib2.util.IterablePair$1'].e2;
});

Clazz.newMeth(C$, 'toString', function () {
return this.b$['net.imglib2.util.IterablePair$1'].e1 + ", " + this.b$['net.imglib2.util.IterablePair$1'].e2 ;
});
})()
), Clazz.new_(P$.IterablePair$1$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['O',['i1','java.util.Iterator','+i2','e1','<A>','e2','<B>','value','net.imglib2.util.Pair']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.i1.hasNext$() && this.i2.hasNext$() ;
});

Clazz.newMeth(C$, 'next$', function () {
this.e1=this.i1.next$();
this.e2=this.i2.next$();
return this.value;
});
})()
), Clazz.new_(P$.IterablePair$1.$init$, [this, null]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
