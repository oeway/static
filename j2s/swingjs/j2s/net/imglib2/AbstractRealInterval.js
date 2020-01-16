(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractRealInterval", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['min','double[]','+max']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.min=Clazz.array(Double.TYPE, [n]);
this.max=Clazz.array(Double.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
C$.c$$I.apply(this, [interval.numDimensions$()]);
interval.realMin$DA(this.min);
interval.realMax$DA(this.max);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (min, max) {
;C$.superclazz.c$$I.apply(this,[min.length]);C$.$init$.apply(this);
this.min=min.clone$();
this.max=max.clone$();
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min[d];
});

Clazz.newMeth(C$, 'realMin$DA', function (realMin) {
for (var d=0; d < this.n; ++d) realMin[d]=this.min[d];

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (realMin) {
for (var d=0; d < this.n; ++d) realMin.setPosition$D$I(this.min[d], d);

});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (realMax) {
for (var d=0; d < this.n; ++d) realMax[d]=this.max[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (realMax) {
for (var d=0; d < this.n; ++d) realMax.setPosition$D$I(this.max[d], d);

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
