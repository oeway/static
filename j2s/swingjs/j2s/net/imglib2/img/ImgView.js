(function(){var P$=Clazz.newPackage("net.imglib2.img"),I$=[[0,'net.imglib2.view.Views','net.imglib2.FlatIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgView", null, 'net.imglib2.view.IterableRandomAccessibleInterval', ['net.imglib2.img.Img', 'net.imglib2.view.iteration.SubIntervalIterable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['factory','net.imglib2.img.ImgFactory','ii','net.imglib2.IterableInterval']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$net_imglib2_img_ImgFactory', function ($in, fac) {
;C$.superclazz.c$$net_imglib2_RandomAccessibleInterval.apply(this,[$in]);C$.$init$.apply(this);
this.factory=fac;
this.ii=$I$(1).flatIterable$net_imglib2_RandomAccessibleInterval($in);
}, 1);

Clazz.newMeth(C$, 'factory$', function () {
return this.factory;
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.factory.create$net_imglib2_Dimensions(this);
var srcCursor=this.localizingCursor$();
var resAccess=copy.randomAccess$();
while (srcCursor.hasNext$()){
srcCursor.fwd$();
resAccess.setPosition$net_imglib2_Localizable(srcCursor);
resAccess.get$().set$TT(srcCursor.get$());
}
return copy;
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.ii.cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.ii.localizingCursor$();
});

Clazz.newMeth(C$, 'supportsOptimizedCursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).supportsOptimizedCursor$net_imglib2_Interval(interval);
 else return false;
});

Clazz.newMeth(C$, 'subIntervalIterationOrder$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).subIntervalIterationOrder$net_imglib2_Interval(interval);
 else return Clazz.new_($I$(2,1).c$$net_imglib2_Interval,[interval]);
});

Clazz.newMeth(C$, 'cursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).cursor$net_imglib2_Interval(interval);
 else return $I$(1).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.sourceInterval, interval).cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$net_imglib2_Interval', function (interval) {
if (Clazz.instanceOf(this.sourceInterval, "net.imglib2.view.iteration.SubIntervalIterable")) return (this.sourceInterval).localizingCursor$net_imglib2_Interval(interval);
 else return $I$(1).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.sourceInterval, interval).localizingCursor$();
});

Clazz.newMeth(C$, 'wrap$net_imglib2_RandomAccessibleInterval$net_imglib2_img_ImgFactory', function (accessible, factory) {
if (Clazz.instanceOf(accessible, "net.imglib2.img.Img")) {
return accessible;
} else {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RandomAccessibleInterval$net_imglib2_img_ImgFactory,[accessible, factory]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
