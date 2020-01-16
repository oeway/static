(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.view.TransformBuilder','net.imglib2.view.iteration.IterableTransformBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntervalView", null, 'net.imglib2.AbstractInterval', ['net.imglib2.RandomAccessibleInterval', 'net.imglib2.IterableInterval', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RandomAccessible','+fullViewRandomAccessible','fullViewIterableInterval','net.imglib2.IterableInterval']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$net_imglib2_Interval', function (source, interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return (source.numDimensions$() == interval.numDimensions$())});
this.source=source;
this.fullViewRandomAccessible=null;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$JA$JA', function (source, min, max) {
;C$.superclazz.c$$JA$JA.apply(this,[min, max]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return (source.numDimensions$() == min.length)});
this.source=source;
this.fullViewRandomAccessible=null;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return $I$(1).getEfficientRandomAccessible$net_imglib2_Interval$net_imglib2_RandomAccessible(interval, this).randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
if (this.fullViewRandomAccessible == null ) this.fullViewRandomAccessible=$I$(1).getEfficientRandomAccessible$net_imglib2_Interval$net_imglib2_RandomAccessible(this, this);
return this.fullViewRandomAccessible.randomAccess$();
});

Clazz.newMeth(C$, 'getFullViewIterableInterval$', function () {
if (this.fullViewIterableInterval == null ) this.fullViewIterableInterval=$I$(2).getEfficientIterableInterval$net_imglib2_Interval$net_imglib2_RandomAccessible(this, this);
return this.fullViewIterableInterval;
});

Clazz.newMeth(C$, 'size$', function () {
return this.getFullViewIterableInterval$().size$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.getFullViewIterableInterval$().firstElement$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.getFullViewIterableInterval$().iterationOrder$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.getFullViewIterableInterval$().iterator$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.getFullViewIterableInterval$().cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.getFullViewIterableInterval$().localizingCursor$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
