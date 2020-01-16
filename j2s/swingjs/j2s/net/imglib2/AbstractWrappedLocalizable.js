(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractWrappedLocalizable", null, null, 'net.imglib2.Localizable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','<L extends net.imglib2.Localizable>']]]

Clazz.newMeth(C$, 'c$$TL', function (source) {
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
