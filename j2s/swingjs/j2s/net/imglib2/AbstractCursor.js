(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractCursor", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['tmp','long[]']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.tmp=Clazz.array(Long.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var j=0; j < steps; ++j) this.fwd$();

});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
this.localize$JA(this.tmp);
for (var d=0; d < this.n; d++) pos[d]=this.tmp[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
this.localize$JA(this.tmp);
for (var d=0; d < this.n; d++) pos[d]=this.tmp[d];

});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
this.localize$JA(this.tmp);
for (var d=0; d < this.n; d++) pos[d]=(this.tmp[d]|0);

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.getLongPosition$I(d);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return (this.getLongPosition$I(d)|0);
});

Clazz.newMeth(C$, 'toString', function () {
this.localize$JA(this.tmp);
return $I$(1).printCoordinates$JA(this.tmp) + " = " + this.get$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
