(function(){var P$=Clazz.newPackage("net.imglib2.view.iteration"),I$=[[0,'net.imglib2.util.Intervals','net.imglib2.FlatIterationOrder','net.imglib2.view.iteration.SlicingCursor','net.imglib2.view.iteration.SubIntervalIterable',['net.imglib2.view.iteration.IterableTransformBuilder','.SubInterval'],'net.imglib2.transform.integer.SlicingTransform','java.util.Arrays','net.imglib2.transform.integer.BoundingBox',['net.imglib2.view.iteration.IterableTransformBuilder','.Slice'],'net.imglib2.view.IterableRandomAccessibleInterval','net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IterableTransformBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.view.TransformBuilder');
C$.$classes$=[['SubInterval',2],['Slice',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['interval','net.imglib2.Interval']]]

Clazz.newMeth(C$, 'getEfficientIterableInterval$net_imglib2_Interval$net_imglib2_RandomAccessible', function (interval, randomAccessible) {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_Interval$net_imglib2_RandomAccessible,[interval, randomAccessible]).buildIterableInterval$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval$net_imglib2_RandomAccessible', function (interval, randomAccessible) {
;C$.superclazz.c$$net_imglib2_Interval$net_imglib2_RandomAccessible.apply(this,[interval, randomAccessible]);C$.$init$.apply(this);
this.interval=interval;
}, 1);

Clazz.newMeth(C$, 'buildIterableInterval$', function () {
if (this.boundingBox != null  && Clazz.getClass($I$(4),['cursor$net_imglib2_Interval','localizingCursor$net_imglib2_Interval','subIntervalIterationOrder$net_imglib2_Interval','supportsOptimizedCursor$net_imglib2_Interval']).isInstance$O(this.source) ) {
var iterableSource=this.source;
if (this.transforms.isEmpty$()) {
if (iterableSource.supportsOptimizedCursor$net_imglib2_Interval(this.interval)) return Clazz.new_($I$(5,1).c$$net_imglib2_view_iteration_SubIntervalIterable, [this, null, iterableSource]);
} else if (this.transforms.size$() == 1 && Clazz.getClass($I$(6)).isInstance$O(this.transforms.get$I(0)) ) {
var t=this.transforms.get$I(0);
var m=t.numTargetDimensions$();
var n=t.numSourceDimensions$();
var optimizable=true;
var firstZeroDim=0;
for (; firstZeroDim < m && !t.getComponentZero$I(firstZeroDim) ; ++firstZeroDim) ;
for (var d=firstZeroDim + 1; d < m && optimizable ; ++d) if (!t.getComponentZero$I(d)) optimizable=false;

var sourceComponent=Clazz.array(Integer.TYPE, [n]);
if (optimizable) {
$I$(7).fill$IA$I(sourceComponent, -1);
for (var d=0; d < m; ++d) if (!t.getComponentZero$I(d)) sourceComponent[t.getComponentMapping$I(d)]=d;

for (var d=0; d < n && optimizable ; ++d) if (sourceComponent[d] < 0) optimizable=false;

}if (optimizable) {
var sliceInterval=t.transform$net_imglib2_transform_integer_BoundingBox(Clazz.new_($I$(8,1).c$$net_imglib2_Interval,[this.interval])).getInterval$();
if (iterableSource.supportsOptimizedCursor$net_imglib2_Interval(sliceInterval)) {
var flat=Clazz.getClass($I$(2)).isInstance$O(iterableSource.subIntervalIterationOrder$net_imglib2_Interval(sliceInterval));
for (var d=0; d < n - 1; ++d) if (sourceComponent[d + 1] <= sourceComponent[d]) flat=false;

return Clazz.new_($I$(9,1).c$$net_imglib2_view_iteration_SubIntervalIterable$net_imglib2_Interval$net_imglib2_transform_integer_SlicingTransform$Z, [this, null, iterableSource, sliceInterval, t, flat]);
}}}}return Clazz.new_(1,{T:"Object"},$I$(10,1).c$$net_imglib2_RandomAccessibleInterval,[$I$(11).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.build$(), this.interval)]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.IterableTransformBuilder, "SubInterval", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.IterableInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['numElements'],'O',['iterableSource','net.imglib2.view.iteration.SubIntervalIterable']]]

Clazz.newMeth(C$, 'c$$net_imglib2_view_iteration_SubIntervalIterable', function (iterableSource) {
;C$.superclazz.c$$TI.apply(this,[this.this$0.interval]);C$.$init$.apply(this);
this.numElements=$I$(1).numElements$net_imglib2_Dimensions(this.this$0.interval);
this.iterableSource=iterableSource;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.numElements;
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.iterableSource.subIntervalIterationOrder$net_imglib2_Interval(this.this$0.interval);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.iterableSource.cursor$net_imglib2_Interval(this.this$0.interval);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.iterableSource.localizingCursor$net_imglib2_Interval(this.this$0.interval);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.IterableTransformBuilder, "Slice", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.IterableInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['hasFlatIterationOrder'],'L',['numElements'],'O',['iterableSource','net.imglib2.view.iteration.SubIntervalIterable','$sourceInterval','net.imglib2.Interval','transformToSource','net.imglib2.transform.integer.SlicingTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_view_iteration_SubIntervalIterable$net_imglib2_Interval$net_imglib2_transform_integer_SlicingTransform$Z', function (iterableSource, sourceInterval, transformToSource, hasFlatIterationOrder) {
;C$.superclazz.c$$TI.apply(this,[this.this$0.interval]);C$.$init$.apply(this);
this.numElements=$I$(1).numElements$net_imglib2_Dimensions(this.this$0.interval);
this.iterableSource=iterableSource;
this.$sourceInterval=sourceInterval;
this.transformToSource=transformToSource;
this.hasFlatIterationOrder=hasFlatIterationOrder;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.numElements;
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.hasFlatIterationOrder ? Clazz.new_($I$(2,1).c$$net_imglib2_Interval,[this.this$0.interval]) : this;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_Cursor$net_imglib2_transform_integer_Slicing,[this.iterableSource.cursor$net_imglib2_Interval(this.$sourceInterval), this.transformToSource]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_Cursor$net_imglib2_transform_integer_Slicing,[this.iterableSource.localizingCursor$net_imglib2_Interval(this.$sourceInterval), this.transformToSource]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
