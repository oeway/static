(function(){var P$=Clazz.newPackage("net.imagej.interval"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CombinedCalibratedRealInterval", null, 'net.imagej.interval.CombinedRealInterval', 'net.imagej.interval.CalibratedRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'averageScale$I', function (d) {
return this.axis$I(d).averageScale$D$D(this.realMin$I(d), this.realMax$I(d));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
