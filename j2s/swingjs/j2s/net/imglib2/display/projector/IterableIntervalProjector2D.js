(function(){var P$=Clazz.newPackage("net.imglib2.display.projector"),I$=[[0,'net.imglib2.view.Views','net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IterableIntervalProjector2D", null, 'net.imglib2.display.projector.AbstractProjector2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numDimensions','dimX','dimY'],'O',['converter','net.imglib2.converter.Converter','source','net.imglib2.RandomAccessible','target','net.imglib2.IterableInterval']]]

Clazz.newMeth(C$, 'c$$I$I$net_imglib2_RandomAccessible$net_imglib2_IterableInterval$net_imglib2_converter_Converter', function (dimX, dimY, source, target, converter) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.dimX=dimX;
this.dimY=dimY;
this.target=target;
this.source=source;
this.converter=converter;
this.numDimensions=source.numDimensions$();
}, 1);

Clazz.newMeth(C$, 'map$', function () {
for (var d=0; d < this.position.length; ++d) this.min[d]=this.max[d]=this.position[d];

this.min[this.dimX]=this.target.min$I(0);
this.min[this.dimY]=this.target.min$I(1);
this.max[this.dimX]=this.target.max$I(0);
this.max[this.dimY]=this.target.max$I(1);
var ii=$I$(1).iterable$net_imglib2_RandomAccessibleInterval($I$(1).interval$net_imglib2_RandomAccessible$net_imglib2_Interval(this.source, Clazz.new_($I$(2,1).c$$JA$JA,[this.min, this.max])));
var sourceCursor=ii.cursor$();
if (this.target.iterationOrder$().equals$O(ii.iterationOrder$()) && !(Clazz.instanceOf(sourceCursor, "net.imglib2.view.RandomAccessibleIntervalCursor")) ) {
var targetCursor=this.target.cursor$();
while (targetCursor.hasNext$()){
this.converter.convert$(sourceCursor.next$(), targetCursor.next$());
}
} else if (Clazz.instanceOf(this.target.iterationOrder$(), "net.imglib2.FlatIterationOrder")) {
var targetCursor=this.target.cursor$();
targetCursor.fwd$();
var sourceInterval=Clazz.new_($I$(2,1).c$$JA$JA,[this.min, this.max]);
var sourceRandomAccess=this.source.randomAccess$net_imglib2_Interval(sourceInterval);
sourceRandomAccess.setPosition$JA(this.position);
var cr=-this.target.dimension$I(0);
var width=this.target.dimension$I(0);
var height=this.target.dimension$I(1);
sourceRandomAccess.setPosition$JA(this.min);
for (var y=0; y < height; ++y) {
for (var x=0; x < width; ++x) {
this.converter.convert$(sourceRandomAccess.get$(), targetCursor.get$());
sourceRandomAccess.fwd$I(this.dimX);
targetCursor.fwd$();
}
sourceRandomAccess.move$J$I(cr, this.dimX);
sourceRandomAccess.fwd$I(this.dimY);
}
} else {
var targetCursor=this.target.localizingCursor$();
var sourceRandomAccess=this.source.randomAccess$();
sourceRandomAccess.setPosition$JA(this.position);
while (targetCursor.hasNext$()){
var b=targetCursor.next$();
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(0), this.dimX);
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(1), this.dimY);
this.converter.convert$(sourceRandomAccess.get$(), b);
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
