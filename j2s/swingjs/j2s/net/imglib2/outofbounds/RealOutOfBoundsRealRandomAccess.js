(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RealOutOfBoundsRealRandomAccess", null, 'net.imglib2.AbstractEuclideanSpace', ['net.imglib2.RealRandomAccess', 'net.imglib2.outofbounds.Bounded']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['outOfBounds','net.imglib2.outofbounds.RealOutOfBounds']]]

Clazz.newMeth(C$, 'c$$net_imglib2_outofbounds_RealOutOfBoundsRealRandomAccess', function (realOutOfBoundsRealRandomAccess) {
;C$.superclazz.c$$I.apply(this,[realOutOfBoundsRealRandomAccess.n]);C$.$init$.apply(this);
this.outOfBounds=realOutOfBoundsRealRandomAccess.outOfBounds.copy$();
}, 1);

Clazz.newMeth(C$, 'c$$I$net_imglib2_outofbounds_RealOutOfBounds', function (n, outOfBounds) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.outOfBounds=outOfBounds;
}, 1);

Clazz.newMeth(C$, 'isOutOfBounds$', function () {
return this.outOfBounds.isOutOfBounds$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.outOfBounds.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_outofbounds_RealOutOfBoundsRealRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.outOfBounds.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.outOfBounds.localize$DA(position);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (dim) {
return this.outOfBounds.getDoublePosition$I(dim);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (dim) {
return this.outOfBounds.getFloatPosition$I(dim);
});

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
this.outOfBounds.move$F$I(distance, d);
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
this.outOfBounds.move$D$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (localizable) {
this.outOfBounds.move$net_imglib2_RealLocalizable(localizable);
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
this.outOfBounds.move$FA(distance);
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
this.outOfBounds.move$DA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (localizable) {
this.outOfBounds.setPosition$net_imglib2_RealLocalizable(localizable);
});

Clazz.newMeth(C$, 'setPosition$FA', function (position) {
this.outOfBounds.setPosition$FA(position);
});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
this.outOfBounds.setPosition$DA(position);
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, d) {
this.outOfBounds.setPosition$F$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, d) {
this.outOfBounds.setPosition$D$I(position, d);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.outOfBounds.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.outOfBounds.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.outOfBounds.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.outOfBounds.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
this.outOfBounds.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.outOfBounds.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.outOfBounds.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
this.outOfBounds.setPosition$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.outOfBounds.setPosition$IA(position);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.outOfBounds.setPosition$JA(position);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.outOfBounds.setPosition$I$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.outOfBounds.setPosition$J$I(position, d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
