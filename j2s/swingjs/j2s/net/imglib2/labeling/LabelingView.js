(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'net.imglib2.labeling.DefaultROIStrategy','net.imglib2.view.Views','net.imglib2.FlatIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LabelingView", null, 'net.imglib2.view.IterableRandomAccessibleInterval', ['net.imglib2.labeling.Labeling', 'net.imglib2.view.iteration.SubIntervalIterable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['m_strategy','net.imglib2.labeling.LabelingROIStrategy','m_fac','net.imglib2.labeling.LabelingFactory','m_ii','net.imglib2.IterableInterval']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$net_imglib2_labeling_LabelingFactory', function ($in, fac) {
;C$.superclazz.c$$net_imglib2_RandomAccessibleInterval.apply(this,[$in]);C$.$init$.apply(this);
this.m_fac=fac;
this.m_strategy=Clazz.new_(1,{T:"Object",L:"net.imglib2.labeling.Labeling"},$I$(1,1).c$$TL,[this]);
this.m_ii=$I$(2).flatIterable$net_imglib2_RandomAccessibleInterval($in);
}, 1);

Clazz.newMeth(C$, ['getExtents$TL$JA$JA','getExtents$TT$JA$JA'], function (label, minExtents, maxExtents) {
return this.m_strategy.getExtents$TT$JA$JA(label, minExtents, maxExtents);
});

Clazz.newMeth(C$, ['getRasterStart$TL$JA','getRasterStart$TT$JA'], function (label, start) {
return this.m_strategy.getRasterStart$TT$JA(label, start);
});

Clazz.newMeth(C$, ['getArea$TL','getArea$TT'], function (label) {
return this.m_strategy.getArea$TT(label);
});

Clazz.newMeth(C$, 'getLabels$', function () {
return this.m_strategy.getLabels$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.m_ii.cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.m_ii.localizingCursor$();
});

Clazz.newMeth(C$, ['getRegionOfInterest$TL','getRegionOfInterest$TT'], function (label) {
return this.m_strategy.createRegionOfInterest$TT(label);
});

Clazz.newMeth(C$, ['getIterableRegionOfInterest$TL','getIterableRegionOfInterest$TT'], function (label) {
return this.m_strategy.createIterableRegionOfInterest$TT(label);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.m_fac.create$net_imglib2_Interval(this);
var cursor=copy.cursor$();
var srcAccess=this.randomAccess$();
while (cursor.hasNext$()){
cursor.fwd$();
srcAccess.setPosition$net_imglib2_Localizable(cursor);
cursor.get$().set$net_imglib2_labeling_LabelingType(srcAccess.get$());
}
return copy;
});

Clazz.newMeth(C$, 'factory$', function () {
return this.m_fac;
});

Clazz.newMeth(C$, 'supportsOptimizedCursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).supportsOptimizedCursor$net_imglib2_Interval(interval);
 else return false;
});

Clazz.newMeth(C$, 'subIntervalIterationOrder$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).subIntervalIterationOrder$net_imglib2_Interval(interval);
 else return Clazz.new_($I$(3,1).c$$net_imglib2_Interval,[interval]);
});

Clazz.newMeth(C$, 'cursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).cursor$net_imglib2_Interval(interval);
 else return $I$(2).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.sourceInterval, interval).cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).localizingCursor$net_imglib2_Interval(interval);
 else return $I$(2).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.sourceInterval, interval).localizingCursor$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
