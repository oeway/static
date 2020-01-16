(function(){var P$=Clazz.newPackage("net.imglib2.roi.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RealLocalizableRealPositionableWrapper", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.util.RealLocalizableRealPositionable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','<T extends net.imglib2.RealLocalizable & net.imglib2.RealPositionable>']]]

Clazz.newMeth(C$, 'c$$TT', function (source) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.source.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.source.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.source.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.source.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'move$F$I', function (distance, d) {
this.source.move$F$I(distance, d);
});

Clazz.newMeth(C$, 'move$D$I', function (distance, d) {
this.source.move$D$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_RealLocalizable', function (distance) {
this.source.move$net_imglib2_RealLocalizable(distance);
});

Clazz.newMeth(C$, 'move$FA', function (distance) {
this.source.move$FA(distance);
});

Clazz.newMeth(C$, 'move$DA', function (distance) {
this.source.move$DA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_RealLocalizable', function (position) {
this.source.setPosition$net_imglib2_RealLocalizable(position);
});

Clazz.newMeth(C$, 'setPosition$FA', function (position) {
this.source.setPosition$FA(position);
});

Clazz.newMeth(C$, 'setPosition$DA', function (position) {
this.source.setPosition$DA(position);
});

Clazz.newMeth(C$, 'setPosition$F$I', function (position, d) {
this.source.setPosition$F$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$D$I', function (position, d) {
this.source.setPosition$D$I(position, d);
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.source.fwd$I(d);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.source.bck$I(d);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.source.move$I$I(distance, d);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.source.move$J$I(distance, d);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
this.source.move$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
this.source.move$IA(distance);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
this.source.move$JA(distance);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
this.source.setPosition$net_imglib2_Localizable(localizable);
});

Clazz.newMeth(C$, 'setPosition$IA', function (position) {
this.source.setPosition$IA(position);
});

Clazz.newMeth(C$, 'setPosition$JA', function (position) {
this.source.setPosition$JA(position);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (position, d) {
this.source.setPosition$I$I(position, d);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (position, d) {
this.source.setPosition$J$I(position, d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
