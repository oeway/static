(function(){var P$=Clazz.newPackage("net.imglib2.display"),I$=[[0,'net.imglib2.display.projector.IterableIntervalProjector2D','net.imglib2.util.BenchmarkHelper','net.imglib2.display.projector.RandomAccessibleProjector2D','net.imglib2.img.array.ArrayImgs','net.imglib2.converter.RealFloatConverter','net.imglib2.realtransform.AffineTransform3D','net.imglib2.view.Views','net.imglib2.realtransform.RealViews','net.imglib2.interpolation.randomaccess.NearestNeighborInterpolatorFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProjectorBenchmark");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'benchmarkIterableIntervalProjector2D$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$net_imglib2_converter_Converter', function (source, target, converter) {
var projector=Clazz.new_(1,{B:"Object",A:"Object"},$I$(1,1).c$$I$I$net_imglib2_RandomAccessible$net_imglib2_IterableInterval$net_imglib2_converter_Converter,[0, 1, source, target, converter]);
$I$(2).benchmarkAndPrint$I$Z$Runnable(100, false, ((P$._.ProjectorBenchmark$2965||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.ProjectorBenchmark$2965", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
for (var z=0; z < this.$finals$.source.dimension$I(2); ++z) {
this.$finals$.projector.setPosition$I$I(z, 2);
this.$finals$.projector.map$();
}
});
})()
), Clazz.new_(_.ProjectorBenchmark$2965.$init$, [this, {source:source,projector:projector}])));
}, 1);

Clazz.newMeth(C$, 'benchmarkRandomAccessibleProjector2D$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter', function (source, target, converter) {
var projector=Clazz.new_(1,{B:"Object",A:"Object"},$I$(3,1).c$$I$I$net_imglib2_RandomAccessible$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter,[0, 1, source, target, converter]);
$I$(2).benchmarkAndPrint$I$Z$Runnable(100, false, ((P$._.ProjectorBenchmark$3547||
(function(){/*a*/var C$=Clazz.newClass(P$, "_.ProjectorBenchmark$3547", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
for (var z=0; z < this.$finals$.source.dimension$I(2); ++z) {
this.$finals$.projector.setPosition$I$I(z, 2);
this.$finals$.projector.map$();
}
});
})()
), Clazz.new_(_.ProjectorBenchmark$3547.$init$, [this, {source:source,projector:projector}])));
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var source=$I$(4).floats$JA([1000, 1000, 10]);
var target=$I$(4).floats$JA([1000, 1000]);
var converter=Clazz.new_(1,{R:"net.imglib2.type.numeric.real.FloatType"},$I$(5,1));
var t=Clazz.new_($I$(6,1));
var view=$I$(7).interval$net_imglib2_RandomAccessible$net_imglib2_Interval($I$(8).affine$net_imglib2_RealRandomAccessible$net_imglib2_realtransform_AffineGet($I$(7).interpolate$TF$net_imglib2_interpolation_InterpolatorFactory(source, Clazz.new_(1,{T:"net.imglib2.type.numeric.real.FloatType"},$I$(9,1))), t), source);
for (var i=0; i < 10; ++i) {
System.out.println$S("IterableIntervalProjector2D Img");
_.ProjectorBenchmark.benchmarkIterableIntervalProjector2D$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$net_imglib2_converter_Converter(source, target, converter);
System.out.println$S("IterableIntervalProjector2D Affine");
_.ProjectorBenchmark.benchmarkIterableIntervalProjector2D$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$net_imglib2_converter_Converter(view, target, converter);
System.out.println$S("--------------------------------");
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:40:29 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
