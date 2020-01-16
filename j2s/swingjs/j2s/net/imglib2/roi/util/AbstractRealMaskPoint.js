(function(){var P$=Clazz.newPackage("net.imglib2.roi.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractRealMaskPoint", null, 'net.imglib2.RealPoint', 'net.imglib2.roi.util.RealLocalizableRealPositionable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (pos) {
;C$.superclazz.c$$DA$Z.apply(this,[pos, false]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealLocalizable', function (pos) {
;C$.superclazz.c$$net_imglib2_RealLocalizable.apply(this,[pos]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
C$.superclazz.prototype.move$F$I.apply(this, [distance, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
C$.superclazz.prototype.move$D$I.apply(this, [distance, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (distance) {
C$.superclazz.prototype.move$net_imglib2_RealLocalizable.apply(this, [distance]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
C$.superclazz.prototype.move$FA.apply(this, [distance]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
C$.superclazz.prototype.move$DA.apply(this, [distance]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (position) {
C$.superclazz.prototype.setPosition$net_imglib2_RealLocalizable.apply(this, [position]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$FA', function (position) {
C$.superclazz.prototype.setPosition$FA.apply(this, [position]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
C$.superclazz.prototype.setPosition$DA.apply(this, [position]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, d) {
C$.superclazz.prototype.setPosition$F$I.apply(this, [position, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, d) {
C$.superclazz.prototype.setPosition$D$I.apply(this, [position, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
C$.superclazz.prototype.fwd$I.apply(this, [d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'bck$I', function (d) {
C$.superclazz.prototype.bck$I.apply(this, [d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
C$.superclazz.prototype.move$I$I.apply(this, [distance, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
C$.superclazz.prototype.move$J$I.apply(this, [distance, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
C$.superclazz.prototype.move$net_imglib2_Localizable.apply(this, [localizable]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
C$.superclazz.prototype.move$IA.apply(this, [distance]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
C$.superclazz.prototype.move$JA.apply(this, [distance]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
C$.superclazz.prototype.setPosition$net_imglib2_Localizable.apply(this, [localizable]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
C$.superclazz.prototype.setPosition$IA.apply(this, [position]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
C$.superclazz.prototype.setPosition$JA.apply(this, [position]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
C$.superclazz.prototype.setPosition$I$I.apply(this, [position, d]);
this.updateBounds$();
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
C$.superclazz.prototype.setPosition$J$I.apply(this, [position, d]);
this.updateBounds$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
