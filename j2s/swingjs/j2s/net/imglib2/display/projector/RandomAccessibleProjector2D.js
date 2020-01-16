(function(){var P$=Clazz.newPackage("net.imglib2.display.projector"),I$=[[0,'net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleProjector2D", null, 'net.imglib2.display.projector.AbstractProjector2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.X=0;
this.Y=1;
}, 1);

C$.$fields$=[['I',['numDimensions','dimX','dimY','X','Y'],'O',['converter','net.imglib2.converter.Converter','target','net.imglib2.RandomAccessibleInterval','source','net.imglib2.RandomAccessible']]]

Clazz.newMeth(C$, 'c$$I$I$net_imglib2_RandomAccessible$net_imglib2_RandomAccessibleInterval$net_imglib2_converter_Converter', function (dimX, dimY, source, target, converter) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.dimX=dimX;
this.dimY=dimY;
this.target=target;
this.source=source;
this.converter=converter;
this.numDimensions=source.numDimensions$();
}, 1);

Clazz.newMeth(C$, 'map$', function () {
for (var d=2; d < this.position.length; ++d) this.min[d]=this.max[d]=this.position[d];

this.min[this.dimX]=this.target.min$I(this.dimX);
this.min[this.dimY]=this.target.min$I(this.dimY);
this.max[this.dimX]=this.target.max$I(this.dimX);
this.max[this.dimY]=this.target.max$I(this.dimY);
var sourceInterval=Clazz.new_($I$(1,1).c$$JA$JA,[this.min, this.max]);
var cr=-this.target.dimension$I(this.dimX);
var targetRandomAccess=this.target.randomAccess$net_imglib2_Interval(this.target);
var sourceRandomAccess=this.source.randomAccess$net_imglib2_Interval(sourceInterval);
var width=this.target.dimension$I(this.dimX);
var height=this.target.dimension$I(this.dimY);
sourceRandomAccess.setPosition$JA(this.min);
targetRandomAccess.setPosition$J$I(this.min[this.dimX], this.dimX);
targetRandomAccess.setPosition$J$I(this.min[this.dimY], this.dimY);
for (var y=0; y < height; ++y) {
for (var x=0; x < width; ++x) {
this.converter.convert$(sourceRandomAccess.get$(), targetRandomAccess.get$());
sourceRandomAccess.fwd$I(this.dimX);
targetRandomAccess.fwd$I(this.dimX);
}
sourceRandomAccess.move$J$I(cr, this.dimX);
targetRandomAccess.move$J$I(cr, this.dimX);
sourceRandomAccess.fwd$I(this.dimY);
targetRandomAccess.fwd$I(this.dimY);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
