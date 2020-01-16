(function(){var P$=Clazz.newPackage("net.imglib2.roi.util"),I$=[[0,'net.imglib2.roi.Regions','net.imglib2.roi.util.RandomAccessibleRegionCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IterableRandomAccessibleRegion", null, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.roi.IterableRegion');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['size']]]

Clazz.newMeth(C$, 'create$net_imglib2_RandomAccessibleInterval', function (interval) {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RandomAccessibleInterval$J,[interval, $I$(1).countTrue$net_imglib2_RandomAccessibleInterval(interval)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$J', function (interval, size) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
this.size=size;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'firstElement$', function () {
if (this.size$() == 0) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this;
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_RandomAccessibleInterval$J,[this.sourceInterval, this.size]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.sourceInterval.randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.sourceInterval.randomAccess$net_imglib2_Interval(interval);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
