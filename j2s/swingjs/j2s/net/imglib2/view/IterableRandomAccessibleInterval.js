(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.FlatIterationOrder','net.imglib2.view.RandomAccessibleIntervalCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IterableRandomAccessibleInterval", null, 'net.imglib2.AbstractWrappedInterval', ['net.imglib2.IterableInterval', 'net.imglib2.RandomAccessibleInterval', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['size']]]

Clazz.newMeth(C$, 'create$net_imglib2_RandomAccessibleInterval', function (interval) {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RandomAccessibleInterval,[interval]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (interval) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
var n=this.numDimensions$();
var s=interval.dimension$I(0);
for (var d=1; d < n; ++d) s*=interval.dimension$I(d);

this.size=s;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(1,1).c$$net_imglib2_Interval,[this.sourceInterval]);
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$TI,[this.sourceInterval]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.sourceInterval.randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (i) {
return this.sourceInterval.randomAccess$net_imglib2_Interval(i);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
