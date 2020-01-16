(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.composite"),I$=[[0,'net.imglib2.converter.Converter','net.imglib2.FinalInterval','net.imglib2.type.numeric.ARGBType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CompositeXYProjector", null, 'net.imglib2.display.projector.AbstractProjector2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['dimIndex'],'L',['positionCount','positionMin'],'O',['converters','java.util.ArrayList','composite','boolean[]','currentPositions','long[]','currentConverters','net.imglib2.converter.Converter[]','target','net.imglib2.IterableInterval','source','net.imglib2.RandomAccessibleInterval']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$java_util_ArrayList$I', function (source, target, converters, dimIndex) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.source=source;
this.target=target;
this.converters=converters;
this.dimIndex=dimIndex;
this.positionCount=dimIndex < 0 ? 1 : source.dimension$I(dimIndex);
this.positionMin=dimIndex < 0 ? 0 : source.min$I(dimIndex);
var converterCount=converters.size$();
if (this.positionCount != converterCount) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected " + this.positionCount + " converters but got " + converterCount ]);
}this.composite=Clazz.array(Boolean.TYPE, [converterCount]);
this.composite[0]=true;
this.currentPositions=Clazz.array(Long.TYPE, [converterCount]);
this.currentConverters=Clazz.array($I$(1), [converterCount]);
}, 1);

Clazz.newMeth(C$, 'setComposite$I$Z', function (index, on) {
this.composite[index]=on;
});

Clazz.newMeth(C$, 'isComposite$I', function (index) {
return this.composite[index];
});

Clazz.newMeth(C$, 'setComposite$Z', function (on) {
for (var i=0; i < this.composite.length; i++) this.composite[i]=on;

});

Clazz.newMeth(C$, 'isComposite$', function () {
for (var i=0; i < this.composite.length; i++) if (!this.composite[i]) return false;

return true;
});

Clazz.newMeth(C$, 'map$', function () {
for (var d=2; d < this.position.length; ++d) this.min[d]=this.max[d]=this.position[d];

this.min[0]=this.target.min$I(0);
this.min[1]=this.target.min$I(1);
this.max[0]=this.target.max$I(0);
this.max[1]=this.target.max$I(1);
if (this.dimIndex < 0) {
var sourceRandomAccess=this.source.randomAccess$net_imglib2_Interval(Clazz.new_($I$(2,1).c$$JA$JA,[this.min, this.max]));
sourceRandomAccess.setPosition$JA(this.min);
this.mapSingle$net_imglib2_RandomAccess$net_imglib2_converter_Converter(sourceRandomAccess, this.converters.get$I(0));
return;
}var size=this.updateCurrentArrays$();
this.min[this.dimIndex]=this.max[this.dimIndex]=this.currentPositions[0];
for (var i=1; i < size; ++i) if (this.currentPositions[i] < this.min[this.dimIndex]) this.min[this.dimIndex]=this.currentPositions[i];
 else if (this.currentPositions[i] > this.max[this.dimIndex]) this.max[this.dimIndex]=this.currentPositions[i];

var sourceRandomAccess=this.source.randomAccess$net_imglib2_Interval(Clazz.new_($I$(2,1).c$$JA$JA,[this.min, this.max]));
sourceRandomAccess.setPosition$JA(this.min);
if (size == 1) {
this.mapSingle$net_imglib2_RandomAccess$net_imglib2_converter_Converter(sourceRandomAccess, this.currentConverters[0]);
return;
}var targetCursor=this.target.localizingCursor$();
var bi=Clazz.new_($I$(3,1));
while (targetCursor.hasNext$()){
targetCursor.fwd$();
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(0), 0);
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(1), 1);
var aSum=0;
var rSum=0;
var gSum=0;
var bSum=0;
for (var i=0; i < size; i++) {
sourceRandomAccess.setPosition$J$I(this.currentPositions[i], this.dimIndex);
this.currentConverters[i].convert$(sourceRandomAccess.get$(), bi);
var value=bi.get$();
var a=$I$(3).alpha$I(value);
var r=$I$(3).red$I(value);
var g=$I$(3).green$I(value);
var b=$I$(3).blue$I(value);
aSum+=a;
rSum+=r;
gSum+=g;
bSum+=b;
}
if (aSum > 255) aSum=255;
if (rSum > 255) rSum=255;
if (gSum > 255) gSum=255;
if (bSum > 255) bSum=255;
targetCursor.get$().set$I($I$(3).rgba$I$I$I$I(rSum, gSum, bSum, aSum));
}
});

Clazz.newMeth(C$, 'updateCurrentArrays$', function () {
var currentSize=0;
for (var i=0; i < this.composite.length; i++) if (this.composite[i]) ++currentSize;

if (currentSize == 0) {
this.currentPositions[0]=this.position[this.dimIndex];
this.currentConverters[0]=this.converters.get$I(((this.position[this.dimIndex] - this.positionMin)|0));
return 1;
}var j=0;
for (var i=0; i < this.composite.length; i++) if (this.composite[i]) {
this.currentPositions[j]=this.positionMin + i;
this.currentConverters[j]=this.converters.get$I(i);
++j;
}
return currentSize;
});

Clazz.newMeth(C$, 'mapSingle$net_imglib2_RandomAccess$net_imglib2_converter_Converter', function (sourceRandomAccess, conv) {
var targetCursor=this.target.localizingCursor$();
while (targetCursor.hasNext$()){
targetCursor.fwd$();
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(0), 0);
sourceRandomAccess.setPosition$J$I(targetCursor.getLongPosition$I(1), 1);
conv.convert$(sourceRandomAccess.get$(), targetCursor.get$());
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
