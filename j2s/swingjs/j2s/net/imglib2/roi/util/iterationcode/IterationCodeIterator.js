(function(){var P$=Clazz.newPackage("net.imglib2.roi.util.iterationcode"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "IterationCodeIterator", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['hasNextRaster'],'I',['itcodeIndex','itcodeOffsetX'],'L',['maxX'],'O',['itcode','gnu.trove.list.array.TIntArrayList','offset','long[]','position','<P extends net.imglib2.Positionable & net.imglib2.Localizable>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_roi_util_iterationcode_IterationCode$JA$TP', function (iterationCode, offset, position) {
C$.c$$gnu_trove_list_array_TIntArrayList$JA$TP.apply(this, [iterationCode.getItcode$(), offset, position]);
}, 1);

Clazz.newMeth(C$, 'c$$gnu_trove_list_array_TIntArrayList$JA$TP', function (itcode, offset, position) {
;C$.superclazz.c$$I.apply(this,[position.numDimensions$()]);C$.$init$.apply(this);
this.position=position;
this.itcode=itcode;
this.offset=offset;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_util_iterationcode_IterationCodeIterator$TP', function (copyFrom, position) {
;C$.superclazz.c$$I.apply(this,[position.numDimensions$()]);C$.$init$.apply(this);
this.itcode=copyFrom.itcode;
this.offset=copyFrom.offset;
this.position=position;
this.position.setPosition$net_imglib2_Localizable(copyFrom.position);
this.itcodeIndex=copyFrom.itcodeIndex;
this.itcodeOffsetX=copyFrom.itcodeOffsetX;
this.maxX=copyFrom.maxX;
this.hasNextRaster=copyFrom.hasNextRaster;
}, 1);

Clazz.newMeth(C$, 'nextRasterStretch', function () {
var minItcodeX=this.itcode.get$I(this.itcodeIndex++);
if (minItcodeX < 0) {
for (var d=1; d <= -minItcodeX; ++d) this.position.setPosition$J$I(this.itcode.get$I(this.itcodeIndex++) + this.offset[d], d);

minItcodeX=this.itcode.get$I(this.itcodeIndex++);
}this.position.setPosition$J$I(minItcodeX + this.itcodeOffsetX + this.offset[0] , 0);
this.maxX=this.itcode.get$I(this.itcodeIndex++) + this.itcodeOffsetX + this.offset[0] ;
this.hasNextRaster=this.itcodeIndex < this.itcode.size$();
}, p$1);

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var j=0; j < steps; ++j) this.fwd$();

});

Clazz.newMeth(C$, 'fwd$', function () {
this.position.fwd$I(0);
if (this.position.getLongPosition$I(0) > this.maxX) p$1.nextRasterStretch.apply(this, []);
});

Clazz.newMeth(C$, 'reset$', function () {
this.itcodeIndex=0;
if (!this.itcode.isEmpty$()) {
this.itcodeOffsetX=this.itcode.get$I(this.itcodeIndex++);
for (var d=1; d < this.n; ++d) this.position.setPosition$J$I(this.itcode.get$I(this.itcodeIndex++) + this.offset[d], d);

p$1.nextRasterStretch.apply(this, []);
this.position.bck$I(0);
} else {
this.hasNextRaster=false;
this.position.setPosition$I$I(0, 0);
this.maxX=0;
}});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.hasNextRaster || (this.position.getLongPosition$I(0) < this.maxX) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
