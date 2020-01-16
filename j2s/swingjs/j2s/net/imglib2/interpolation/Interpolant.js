(function(){var P$=Clazz.newPackage("net.imglib2.interpolation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Interpolant", null, null, ['net.imglib2.RealRandomAccessible', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','<F extends net.imglib2.EuclideanSpace>','factory','net.imglib2.interpolation.InterpolatorFactory']]]

Clazz.newMeth(C$, ['c$$TF$net_imglib2_interpolation_InterpolatorFactory'], function (source, factory) {
;C$.$init$.apply(this);
this.source=source;
this.factory=factory;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.source.numDimensions$();
});

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return this.factory.create$TF(this.source);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.factory.create$TF$net_imglib2_RealInterval(this.source, interval);
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getInterpolatorFactory$', function () {
return this.factory;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
