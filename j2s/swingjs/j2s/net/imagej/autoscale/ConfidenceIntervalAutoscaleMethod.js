(function(){var P$=Clazz.newPackage("net.imagej.autoscale"),I$=[[0,'net.imglib2.histogram.Real1dBinMapper','net.imglib2.histogram.Histogram1d','net.imagej.autoscale.DataRange']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConfidenceIntervalAutoscaleMethod", null, 'net.imagej.autoscale.AbstractAutoscaleMethod');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['lowerTail','upperTail'],'O',['autoscaleService','net.imagej.autoscale.AutoscaleService']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$D$D.apply(this, [0.025, 0.025]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (lowerTailProportion, upperTailProportion) {
Clazz.super_(C$, this);
this.setTailProportions$D$D(lowerTailProportion, upperTailProportion);
}, 1);

Clazz.newMeth(C$, 'getLowerTailProportion$', function () {
return this.lowerTail;
});

Clazz.newMeth(C$, 'getUpperTailProportion$', function () {
return this.upperTail;
});

Clazz.newMeth(C$, 'setTailProportions$D$D', function (lower, upper) {
if (lower < 0  || lower > 1  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["lower tail fraction must be between 0 and 1"]);
}if (upper < 0  || upper > 1  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["upper tail fraction must be between 0 and 1"]);
}if (lower + upper >= 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tails must not span whole data range"]);
}this.lowerTail=lower;
this.upperTail=upper;
});

Clazz.newMeth(C$, 'getRange$net_imglib2_IterableInterval', function (interval) {
var range=this.autoscaleService.getDefaultIntervalRange$net_imglib2_IterableInterval(interval);
var mapper=Clazz.new_(1,{T:"Object"},$I$(1,1).c$$D$D$J$Z,[range.getMin$(), range.getMax$(), 1000, false]);
var histogram=Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_histogram_BinMapper1d,[mapper]);
histogram.countData$Iterable(interval);
var totValues=histogram.distributionCount$();
var lowerSize=(Math.floor(this.lowerTail * totValues)|0);
var upperSize=(Math.floor(this.upperTail * totValues)|0);
var soFar=0;
var bottom=0;
while (soFar < lowerSize){
soFar+=histogram.frequency$J(bottom++);
}
while (histogram.frequency$J(bottom) == 0){
bottom++;
}
soFar=0;
var top=999;
while (soFar < upperSize){
soFar+=histogram.frequency$J(top--);
}
while (histogram.frequency$J(top) == 0){
top--;
}
var approxMin=interval.firstElement$().createVariable$();
var approxMax=approxMin.createVariable$();
histogram.getLowerBound$J$TT(bottom, approxMin);
histogram.getUpperBound$J$TT(top, approxMax);
var min=approxMin.getRealDouble$();
var max=approxMax.getRealDouble$();
return Clazz.new_($I$(3,1).c$$D$D,[min, max]);
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.autoscale.ConfidenceIntervalAutoscaleMethod',null,['org.scijava.plugin.Plugin']],['type="net.imagej.autoscale.AutoscaleMethod.class" name="Confidence Interval" ']],
  [['autoscaleService','net.imagej.autoscale.AutoscaleService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
