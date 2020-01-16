(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractWrappedRealInterval", null, null, 'net.imglib2.RealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceInterval','<I extends net.imglib2.RealInterval>']]]

Clazz.newMeth(C$, 'c$$TI', function (source) {
;C$.$init$.apply(this);
this.sourceInterval=source;
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.sourceInterval.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.sourceInterval.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.sourceInterval.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.sourceInterval.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.sourceInterval.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.sourceInterval.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.sourceInterval.numDimensions$();
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.sourceInterval;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
