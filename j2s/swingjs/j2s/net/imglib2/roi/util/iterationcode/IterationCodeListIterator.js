(function(){var P$=Clazz.newPackage("net.imglib2.roi.util.iterationcode"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "IterationCodeListIterator", null, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['hasNextRaster'],'I',['itcodesListIndex','itcodeIndex','itcodeOffsetX'],'L',['maxX'],'O',['itcodesList','java.util.List','offset','long[]','position','<P extends net.imglib2.Positionable & net.imglib2.Localizable>','itcode','gnu.trove.list.array.TIntArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_List$JA$TP', function (itcodesList, offset, position) {
;C$.superclazz.c$$I.apply(this,[position.numDimensions$()]);C$.$init$.apply(this);
this.position=position;
this.itcodesList=itcodesList;
this.offset=offset;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_util_iterationcode_IterationCodeListIterator$TP', function (copyFrom, position) {
;C$.superclazz.c$$I.apply(this,[position.numDimensions$()]);C$.$init$.apply(this);
this.itcodesList=copyFrom.itcodesList;
this.offset=copyFrom.offset;
this.position=position;
this.position.setPosition$net_imglib2_Localizable(copyFrom.position);
this.itcodesListIndex=copyFrom.itcodesListIndex;
this.itcode=copyFrom.itcode;
this.itcodeIndex=copyFrom.itcodeIndex;
this.itcodeOffsetX=copyFrom.itcodeOffsetX;
this.maxX=copyFrom.maxX;
this.hasNextRaster=copyFrom.hasNextRaster;
}, 1);

Clazz.newMeth(C$, 'probeNextItcode', function () {
while (this.itcodesListIndex < this.itcodesList.size$()){
if (this.itcodesList.get$I(this.itcodesListIndex).isEmpty$()) ++this.itcodesListIndex;
 else return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'initNextItcode', function () {
this.itcode=this.itcodesList.get$I(this.itcodesListIndex++);
this.itcodeIndex=0;
this.itcodeOffsetX=this.itcode.get$I(this.itcodeIndex++);
for (var d=1; d < this.n; ++d) this.position.setPosition$J$I(this.itcode.get$I(this.itcodeIndex++) + this.offset[d], d);

p$1.nextRasterStretch.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'nextRasterStretch', function () {
if (this.itcodeIndex >= this.itcode.size$()) p$1.initNextItcode.apply(this, []);
 else {
var minItcodeX=this.itcode.get$I(this.itcodeIndex++);
if (minItcodeX < 0) {
for (var d=1; d <= -minItcodeX; ++d) this.position.setPosition$J$I(this.itcode.get$I(this.itcodeIndex++) + this.offset[d], d);

minItcodeX=this.itcode.get$I(this.itcodeIndex++);
}this.position.setPosition$J$I(minItcodeX + this.itcodeOffsetX + this.offset[0] , 0);
this.maxX=this.itcode.get$I(this.itcodeIndex++) + this.itcodeOffsetX + this.offset[0] ;
this.hasNextRaster=(this.itcodeIndex < this.itcode.size$()) || p$1.probeNextItcode.apply(this, []) ;
}}, p$1);

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
for (var j=0; j < steps; ++j) this.fwd$();

});

Clazz.newMeth(C$, 'fwd$', function () {
this.position.fwd$I(0);
if (this.position.getLongPosition$I(0) > this.maxX) p$1.nextRasterStretch.apply(this, []);
});

Clazz.newMeth(C$, 'reset$', function () {
this.itcodesListIndex=0;
if (p$1.probeNextItcode.apply(this, [])) {
p$1.initNextItcode.apply(this, []);
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
