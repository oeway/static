(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'java.util.ArrayList','net.imglib2.type.numeric.ARGBType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SourceOptimizedCompositeXYProjector", null, 'net.imglib2.display.projector.composite.CompositeXYProjector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$dimIndex=0;
this.raTarget=null;
this.iraSource=null;
}, 1);

C$.$fields$=[['I',['$dimIndex'],'O',['raTarget','<T extends RandomAccessibleInterval<net.imglib2.type.numeric.ARGBType> & IterableInterval<net.imglib2.type.numeric.ARGBType>>','iraSource','<S extends RandomAccessibleInterval<A> & IterableInterval<A>>']]]

Clazz.newMeth(C$, ['c$$TS$TT$java_util_ArrayList$I'], function (source, target, converters, dimIndex) {
;C$.superclazz.c$$net_imglib2_RandomAccessibleInterval$net_imglib2_IterableInterval$java_util_ArrayList$I.apply(this,[source, target, converters, dimIndex]);C$.$init$.apply(this);
this.$dimIndex=dimIndex;
this.raTarget=target;
this.iraSource=source;
}, 1);

Clazz.newMeth(C$, 'map$', function () {
var noComposite=this.$dimIndex < 0;
var size=-1;
if (!noComposite) size=this.updateCurrentArrays$();
if (noComposite || size == 1 ) {
C$.superclazz.prototype.map$.apply(this, []);
return;
}for (var d=2; d < this.position.length; ++d) this.min[d]=this.max[d]=this.position[d];

this.min[0]=this.raTarget.min$I(0);
this.min[1]=this.raTarget.min$I(1);
this.max[0]=this.raTarget.max$I(0);
this.max[1]=this.raTarget.max$I(1);
var sourceRandomAccess=Clazz.new_(1,{E:"net.imglib2.RandomAccess"},$I$(1,1));
var leadCursor=this.iraSource.localizingCursor$();
var steps=1;
for (var i=0; i < this.min.length; i++) steps*=(this.max[i] + 1 - this.min[i]);

for (var i=0; i < size; ++i) {
var randomAccess=this.iraSource.randomAccess$();
this.min[this.$dimIndex]=this.max[this.$dimIndex]=this.currentPositions[i];
randomAccess.setPosition$JA(this.min);
sourceRandomAccess.add$TE(randomAccess);
}
var targetCursor=this.raTarget.randomAccess$();
var bi=Clazz.new_($I$(2,1));
while (leadCursor.hasNext$() && (--steps) >= 0 ){
var aSum=0;
var rSum=0;
var gSum=0;
var bSum=0;
leadCursor.fwd$();
for (var i=0; i < size; i++) {
var randomAccess=sourceRandomAccess.get$I(i);
randomAccess.setPosition$J$I(leadCursor.getLongPosition$I(0), 0);
randomAccess.setPosition$J$I(leadCursor.getLongPosition$I(1), 1);
randomAccess.setPosition$J$I(this.currentPositions[i], this.$dimIndex);
this.currentConverters[i].convert$(randomAccess.get$(), bi);
var value=bi.get$();
var a=$I$(2).alpha$I(value);
var r=$I$(2).red$I(value);
var g=$I$(2).green$I(value);
var b=$I$(2).blue$I(value);
aSum+=a;
rSum+=r;
gSum+=g;
bSum+=b;
}
if (aSum > 255) aSum=255;
if (rSum > 255) rSum=255;
if (gSum > 255) gSum=255;
if (bSum > 255) bSum=255;
targetCursor.setPosition$J$I(leadCursor.getLongPosition$I(0), 0);
targetCursor.setPosition$J$I(leadCursor.getLongPosition$I(1), 1);
targetCursor.get$().set$I($I$(2).rgba$I$I$I$I(rSum, gSum, bSum, aSum));
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
