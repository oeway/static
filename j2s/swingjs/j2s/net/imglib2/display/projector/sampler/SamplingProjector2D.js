(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.sampler"),I$=[[0,'net.imglib2.display.projector.sampler.SelectiveSampler','net.imglib2.display.projector.sampler.IntervalSampler','net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SamplingProjector2D", null, 'net.imglib2.display.projector.AbstractProjector2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['dimX','dimY','projectedDimension'],'L',['projectedDimMinPos','projectedDimMaxPos'],'O',['converter','net.imglib2.converter.Converter','target','net.imglib2.IterableInterval','source','net.imglib2.RandomAccessible','projectionSampler','net.imglib2.display.projector.sampler.ProjectedSampler']]]

Clazz.newMeth(C$, 'c$$I$I$net_imglib2_RandomAccessible$net_imglib2_IterableInterval$net_imglib2_converter_Converter$I$JA', function (dimX, dimY, source, target, converter, projectedDimension, projectedPositions) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.dimX=dimX;
this.dimY=dimY;
this.target=target;
this.source=source;
this.converter=converter;
this.projectedDimension=projectedDimension;
this.projectedDimMinPos=9223372036854775807;
this.projectedDimMaxPos=-9223372036854775808;
for (var pos, $pos = 0, $$pos = projectedPositions; $pos<$$pos.length&&((pos=($$pos[$pos])),1);$pos++) {
if (pos < this.projectedDimMinPos) {
this.projectedDimMinPos=pos;
}if (pos > this.projectedDimMaxPos) {
this.projectedDimMaxPos=pos;
}}
this.projectionSampler=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$I$JA,[projectedDimension, projectedPositions]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$net_imglib2_converter_Converter$I', function (dimX, dimY, source, target, converter, projectedDimension) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.dimX=dimX;
this.dimY=dimY;
this.target=target;
this.source=source;
this.converter=converter;
this.projectedDimension=projectedDimension;
this.projectedDimMinPos=source.min$I(projectedDimension);
this.projectedDimMaxPos=source.max$I(projectedDimension);
this.projectionSampler=Clazz.new_(1,{T:"Object"},$I$(2,1).c$$I$J$J,[projectedDimension, this.projectedDimMinPos, this.projectedDimMaxPos]);
}, 1);

Clazz.newMeth(C$, 'map$', function () {
for (var d=0; d < this.position.length; ++d) this.min[d]=this.max[d]=this.position[d];

this.min[this.dimX]=this.target.min$I(0);
this.min[this.dimY]=this.target.min$I(1);
this.max[this.dimX]=this.target.max$I(0);
this.max[this.dimY]=this.target.max$I(1);
this.min[this.projectedDimension]=this.projectedDimMinPos;
this.max[this.projectedDimension]=this.projectedDimMaxPos;
var sourceInterval=Clazz.new_($I$(3,1).c$$JA$JA,[this.min, this.max]);
var targetCursor=this.target.localizingCursor$();
var sourceRandomAccess=this.source.randomAccess$net_imglib2_Interval(sourceInterval);
sourceRandomAccess.setPosition$JA(this.position);
this.projectionSampler.setRandomAccess$net_imglib2_RandomAccess(sourceRandomAccess);
if (this.n > 1) while (targetCursor.hasNext$()){
this.projectionSampler.reset$();
var b=targetCursor.next$();
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(0), this.dimX);
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(1), this.dimY);
this.converter.convert$(this.projectionSampler, b);
}
 else while (targetCursor.hasNext$()){
this.projectionSampler.reset$();
var b=targetCursor.next$();
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(0), this.dimX);
this.converter.convert$(this.projectionSampler, b);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
