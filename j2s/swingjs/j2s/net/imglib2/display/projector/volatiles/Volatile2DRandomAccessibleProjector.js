(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.volatiles"),I$=[[0,'net.imglib2.view.Views','net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Volatile2DRandomAccessibleProjector", null, 'net.imglib2.display.projector.IterableIntervalProjector2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.valid=false;
}, 1);

C$.$fields$=[['Z',['valid']]]

Clazz.newMeth(C$, 'c$$I$I$net_imglib2_RandomAccessible$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter', function (dimX, dimY, source, target, converter) {
;C$.superclazz.c$$I$I$net_imglib2_RandomAccessible$net_imglib2_IterableInterval$net_imglib2_converter_Converter.apply(this,[dimX, dimY, source, $I$(1).iterable$net_imglib2_RandomAccessibleInterval(target), converter]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isValid$', function () {
return this.valid;
});

Clazz.newMeth(C$, 'map$', function () {
for (var d=0; d < this.position.length; ++d) this.min[d]=this.max[d]=this.position[d];

this.min[0]=this.target.min$I(0);
this.min[1]=this.target.min$I(1);
this.max[0]=this.target.max$I(0);
this.max[1]=this.target.max$I(1);
var srcIterable=$I$(1).iterable$net_imglib2_RandomAccessibleInterval($I$(1).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.source, Clazz.new_($I$(2,1).c$$JA$JA,[this.min, this.max])));
var targetCursor=this.target.localizingCursor$();
if (this.target.iterationOrder$().equals$O(srcIterable.iterationOrder$())) {
var sourceCursor=srcIterable.cursor$();
while (targetCursor.hasNext$()){
this.converter.convert$(sourceCursor.next$(), targetCursor.next$());
}
} else {
var sourceRandomAccess=this.source.randomAccess$();
while (targetCursor.hasNext$()){
var b=targetCursor.next$();
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(0), 0);
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(1), 1);
this.converter.convert$(sourceRandomAccess.get$(), b);
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
