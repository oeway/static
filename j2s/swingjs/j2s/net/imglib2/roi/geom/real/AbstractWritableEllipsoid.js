(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractWritableEllipsoid", null, 'net.imglib2.roi.geom.real.AbstractWritableSuperEllipsoid', 'net.imglib2.roi.geom.real.WritableEllipsoid');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (center, semiAxisLengths) {
;C$.superclazz.c$$DA$DA$D.apply(this,[center, semiAxisLengths, 2]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setExponent$D', function (exponent) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["setExponent: can only have an exponent of 2"]);
});

Clazz.newMeth(C$, 'distancePowered$net_imglib2_RealLocalizable', function (l) {
Clazz.assert(C$, this, function(){return (l.numDimensions$() >= this.n)}, function(){return "l must have no less than " + this.n + " dimensions" });
var distancePowered=0;
for (var d=0; d < this.n; d++) distancePowered += ((l.getDoublePosition$I(d) - this.center[d]) / this.semiAxisLengths[d]) * ((l.getDoublePosition$I(d) - this.center[d]) / this.semiAxisLengths[d]);

return distancePowered;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
