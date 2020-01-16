(function(){var P$=Clazz.newPackage("net.imglib2.view.composite"),I$=[[0,'net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CompositeIntervalView", null, 'net.imglib2.view.composite.CompositeView', ['net.imglib2.RandomAccessibleInterval', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['interval','net.imglib2.Interval']]]

Clazz.newMeth(C$, 'zeroMinN$net_imglib2_RandomAccessibleInterval', function (source) {
var min=Clazz.array(Long.TYPE, [source.numDimensions$()]);
var n=min.length - 1;
min[n]=source.min$I(n);
return $I$(1).offset$net_imglib2_RandomAccessibleInterval$JA(source, min);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$net_imglib2_view_composite_CompositeFactory', function (source, compositeFactory) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$net_imglib2_view_composite_CompositeFactory.apply(this,[C$.zeroMinN$net_imglib2_RandomAccessibleInterval(source), compositeFactory]);C$.$init$.apply(this);
this.interval=source;
}, 1);

Clazz.newMeth(C$, 'min$I', function (d) {
return this.interval.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
for (var d=0; d < this.n; ++d) min[d]=this.min$I(d);

});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
for (var d=0; d < this.n; ++d) min.setPosition$J$I(this.min$I(d), d);

});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.interval.max$I(d);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
for (var d=0; d < this.n; ++d) max[d]=this.max$I(d);

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
for (var d=0; d < this.n; ++d) max.setPosition$J$I(this.max$I(d), d);

});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
for (var d=0; d < this.n; ++d) min[d]=this.min$I(d);

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
for (var d=0; d < this.n; ++d) max[d]=this.max$I(d);

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
for (var d=0; d < this.n; ++d) dimensions[d]=this.interval.dimension$I(d);

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.interval.dimension$I(d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
