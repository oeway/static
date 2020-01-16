(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractWrappedInterval", null, 'net.imglib2.AbstractWrappedRealInterval', 'net.imglib2.Interval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TI'], function (source) {
;C$.superclazz.c$$TI.apply(this,[source]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
this.sourceInterval.dimensions$JA(dimensions);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.sourceInterval.dimension$I(d);
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.sourceInterval.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.sourceInterval.min$JA(min);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.sourceInterval.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.sourceInterval.max$I(d);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.sourceInterval.max$JA(max);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.sourceInterval.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
