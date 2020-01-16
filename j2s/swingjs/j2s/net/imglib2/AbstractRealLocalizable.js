(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractRealLocalizable", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RealLocalizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['position','double[]']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.position=Clazz.array(Double.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (position) {
;C$.superclazz.c$$I.apply(this,[position.length]);C$.$init$.apply(this);
this.position=position;
}, 1);

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.position[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.position[d];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
