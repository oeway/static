(function(){var P$=Clazz.newPackage("net.imglib2.roi.util"),I$=[[0,'net.imglib2.roi.util.SamplingCursor']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SamplingIterableInterval", null, 'net.imglib2.AbstractWrappedInterval', 'net.imglib2.IterableInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['target','net.imglib2.RandomAccessible']]]

Clazz.newMeth(C$, 'create$net_imglib2_IterableInterval$net_imglib2_RandomAccessible', function (region, target) {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_IterableInterval$net_imglib2_RandomAccessible,[region, target]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_IterableInterval$net_imglib2_RandomAccessible', function (region, target) {
;C$.superclazz.c$$TI.apply(this,[region]);C$.$init$.apply(this);
this.target=target;
}, 1);

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_Cursor$net_imglib2_RandomAccess,[this.sourceInterval.cursor$(), this.target.randomAccess$net_imglib2_Interval(this.sourceInterval)]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_Cursor$net_imglib2_RandomAccess,[this.sourceInterval.localizingCursor$(), this.target.randomAccess$net_imglib2_Interval(this.sourceInterval)]);
});

Clazz.newMeth(C$, 'size$', function () {
return this.sourceInterval.size$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.cursor$().next$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.sourceInterval.iterationOrder$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.cursor$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
