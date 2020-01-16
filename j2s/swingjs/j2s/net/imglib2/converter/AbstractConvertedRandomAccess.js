(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractConvertedRandomAccess", null, null, 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess', function (source) {
;C$.$init$.apply(this);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'localize$IA', function (position) {
this.source.localize$IA(position);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
this.source.localize$JA(position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.source.getIntPosition$I(d);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.source.getLongPosition$I(d);
});

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

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.source.numDimensions$();
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

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
