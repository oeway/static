(function(){var P$=Clazz.newPackage("net.imglib2.converter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractConvertedCursor", null, null, 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.Cursor']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Cursor', function (source) {
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

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.source.jumpFwd$J(steps);
});

Clazz.newMeth(C$, 'fwd$', function () {
this.source.fwd$();
});

Clazz.newMeth(C$, 'reset$', function () {
this.source.reset$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.source.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.source.remove$();
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:05 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
