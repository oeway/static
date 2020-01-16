(function(){var P$=Clazz.newPackage("net.imglib2.roi.util"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleRegionCursor", null, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['empty'],'I',['n'],'L',['index','maxIndex','lineIndex','maxLineIndex'],'O',['randomAccess','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$J', function (interval, size) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
this.randomAccess=interval.randomAccess$();
this.n=this.numDimensions$();
this.maxLineIndex=this.dimension$I(0) - 1;
this.maxIndex=size;
this.empty=size == 0;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_util_RandomAccessibleRegionCursor', function (cursor) {
;C$.superclazz.c$$TI.apply(this,[cursor.sourceInterval]);C$.$init$.apply(this);
this.randomAccess=cursor.randomAccess.copyRandomAccess$();
this.n=cursor.n;
this.lineIndex=cursor.lineIndex;
this.maxIndex=cursor.maxIndex;
this.maxLineIndex=cursor.maxLineIndex;
this.empty=cursor.empty;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return null;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var i=0; i < steps; ++i) this.fwd$();

});

Clazz.newMeth(C$, 'fwd$', function () {
if (this.empty) return;
do {
this.randomAccess.fwd$I(0);
if (++this.lineIndex > this.maxLineIndex) p$1.nextLine.apply(this, []);
} while (!this.randomAccess.get$().get$());
++this.index;
});

Clazz.newMeth(C$, 'nextLine', function () {
this.lineIndex=0;
this.randomAccess.setPosition$J$I(this.min$I(0), 0);
for (var d=1; d < this.n; ++d) {
this.randomAccess.fwd$I(d);
if (this.randomAccess.getLongPosition$I(d) > this.max$I(d)) this.randomAccess.setPosition$J$I(this.min$I(d), d);
 else break;
}
}, p$1);

Clazz.newMeth(C$, 'reset$', function () {
this.index=0;
this.lineIndex=-1;
this.min$net_imglib2_Positionable(this.randomAccess);
this.randomAccess.bck$I(0);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.maxIndex;
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_roi_util_RandomAccessibleRegionCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.randomAccess.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.randomAccess.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.randomAccess.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.randomAccess.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
this.randomAccess.localize$IA(position);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
this.randomAccess.localize$JA(position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.randomAccess.getIntPosition$I(d);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.randomAccess.getLongPosition$I(d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
