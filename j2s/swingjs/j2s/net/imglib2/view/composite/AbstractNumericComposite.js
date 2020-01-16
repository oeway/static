(function(){var P$=Clazz.newPackage("net.imglib2.view.composite"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractNumericComposite", null, 'net.imglib2.view.composite.AbstractComposite', ['net.imglib2.type.numeric.NumericType', 'Iterable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iterator=((P$.AbstractNumericComposite$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractNumericComposite$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.b$['net.imglib2.view.composite.AbstractNumericComposite'].sourceAccess.getIntPosition$I(this.b$['net.imglib2.view.composite.AbstractNumericComposite'].d) + 1 < this.b$['net.imglib2.view.composite.AbstractNumericComposite'].length;
});

Clazz.newMeth(C$, 'next$', function () {
this.b$['net.imglib2.view.composite.AbstractNumericComposite'].sourceAccess.fwd$I(this.b$['net.imglib2.view.composite.AbstractNumericComposite'].d);
var t=this.b$['net.imglib2.view.composite.AbstractNumericComposite'].sourceAccess.get$();
return t;
});

Clazz.newMeth(C$, 'remove$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.AbstractNumericComposite$1.$init$, [this, null]));
}, 1);

C$.$fields$=[['I',['length'],'O',['iterator','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$I', function (sourceAccess, length) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[sourceAccess]);C$.$init$.apply(this);
this.length=length;
}, 1);

Clazz.newMeth(C$, ['set$TC','set$TT'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
c.sourceAccess.setPosition$I$I(0, c.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().set$TT(c.sourceAccess.get$());
this.sourceAccess.fwd$I(this.d);
c.sourceAccess.fwd$I(c.d);
}
});

Clazz.newMeth(C$, ['add$TC','add$','add$TT'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
c.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().add$(c.sourceAccess.get$());
this.sourceAccess.fwd$I(this.d);
c.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, ['sub$TC','sub$','sub$TT'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
c.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().sub$(c.sourceAccess.get$());
this.sourceAccess.fwd$I(this.d);
c.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, ['mul$TC','mul$','mul$TT'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
c.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().mul$(c.sourceAccess.get$());
this.sourceAccess.fwd$I(this.d);
c.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, ['div$TC','div$','div$TT'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
c.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().div$(c.sourceAccess.get$());
this.sourceAccess.fwd$I(this.d);
c.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, 'setZero$', function () {
this.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().setZero$();
this.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, 'setOne$', function () {
this.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().setOne$();
this.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().mul$F(c);
this.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.sourceAccess.setPosition$I$I(0, this.d);
while (this.sourceAccess.getLongPosition$I(this.d) < this.length){
this.sourceAccess.get$().mul$D(c);
this.sourceAccess.fwd$I(this.d);
}
});

Clazz.newMeth(C$, 'iterator$', function () {
this.sourceAccess.setPosition$I$I(-1, this.d);
return this.iterator;
});

Clazz.newMeth(C$, ['valueEquals$TC','valueEquals$','valueEquals$TT'], function (t) {
if (t.length == this.length) {
var a=this.iterator$();
var b=t.iterator$();
while (a.hasNext$())if (!a.next$().valueEquals$(b.next$())) return false;

return true;
} else return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
