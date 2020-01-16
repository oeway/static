(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.view.Views']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SubsampleIntervalView", null, 'net.imglib2.view.SubsampleView', 'net.imglib2.RandomAccessibleInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dimensions','long[]','+max']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$J', function (source, step) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$J.apply(this,[$I$(1).zeroMin$net_imglib2_RandomAccessibleInterval(source), step]);C$.$init$.apply(this);
this.dimensions=Clazz.array(Long.TYPE, [this.steps.length]);
this.max=Clazz.array(Long.TYPE, [this.steps.length]);
for (var d=0; d < this.steps.length; ++d) {
this.steps[d]=step;
this.dimensions[d]=(Math.ceil(source.dimension$I(d) / step)|0);
this.max[d]=this.dimensions[d] - 1;
}
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$JA', function (source, steps) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$JA.apply(this,[$I$(1).zeroMin$net_imglib2_RandomAccessibleInterval(source), steps]);C$.$init$.apply(this);
this.dimensions=Clazz.array(Long.TYPE, [steps.length]);
this.max=Clazz.array(Long.TYPE, [steps.length]);
for (var d=0; d < steps.length; ++d) {
this.steps[d]=steps[d];
this.dimensions[d]=(Math.ceil(source.dimension$I(d) / steps[d])|0);
this.max[d]=this.dimensions[d] - 1;
}
}, 1);

Clazz.newMeth(C$, 'min$I', function (d) {
return 0;
});

Clazz.newMeth(C$, 'min$JA', function (min) {
for (var d=0; d < this.steps.length; ++d) min[d]=0;

});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
for (var d=0; d < this.steps.length; ++d) min.setPosition$I$I(0, d);

});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'max$JA', function (m) {
for (var d=0; d < this.steps.length; ++d) m[d]=this.max[d];

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (m) {
for (var d=0; d < this.steps.length; ++d) m.setPosition$J$I(this.max[d], d);

});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return 0;
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
for (var d=0; d < this.steps.length; ++d) min[d]=0;

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
for (var d=0; d < this.steps.length; ++d) min.setPosition$I$I(0, d);

});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max[d];
});

Clazz.newMeth(C$, 'realMax$DA', function (m) {
for (var d=0; d < this.steps.length; ++d) m[d]=this.max[d];

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (m) {
for (var d=0; d < this.steps.length; ++d) m.setPosition$J$I(this.max[d], d);

});

Clazz.newMeth(C$, 'dimensions$JA', function (dim) {
for (var d=0; d < this.steps.length; ++d) dim[d]=this.dimensions[d];

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.dimensions[d];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
