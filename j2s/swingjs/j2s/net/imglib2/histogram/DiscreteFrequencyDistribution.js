(function(){var P$=Clazz.newPackage("net.imglib2.histogram"),I$=[[0,'net.imglib2.img.array.ArrayImgFactory','net.imglib2.type.numeric.integer.LongType','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiscreteFrequencyDistribution", null, null, 'net.imglib2.img.Img');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['totalValues'],'O',['counts','net.imglib2.img.Img','accessor','net.imglib2.RandomAccess']]]

Clazz.newMeth(C$, 'c$$JA', function (binCounts) {
;C$.$init$.apply(this);
for (var i=0; i < binCounts.length; i++) {
if (binCounts[i] <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid bin count (<= 0)"]);
}}
this.counts=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.LongType"},$I$(1,1).c$$TT,[Clazz.new_($I$(2,1))]).create$JA(binCounts);
this.accessor=this.counts.randomAccess$();
this.totalValues=0;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img', function (img) {
;C$.$init$.apply(this);
this.counts=img;
this.accessor=this.counts.randomAccess$();
this.resetCounters$();
}, 1);

Clazz.newMeth(C$, 'resetCounters$', function () {
var cursor=this.counts.cursor$();
while (cursor.hasNext$()){
cursor.next$().setZero$();
}
this.totalValues=0;
});

Clazz.newMeth(C$, 'frequency$JA', function (binPos) {
for (var i=0; i < this.accessor.numDimensions$(); i++) {
if (binPos[i] < 0 || binPos[i] >= this.dimension$I(i) ) return 0;
}
this.accessor.setPosition$JA(binPos);
return this.accessor.get$().get$();
});

Clazz.newMeth(C$, 'setFrequency$JA$J', function (binPos, value) {
if (value < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["frequency count must be >= 0"]);
}this.accessor.setPosition$JA(binPos);
var currentValue=this.accessor.get$().get$();
this.totalValues+=(value - currentValue);
this.accessor.get$().set$J(value);
});

Clazz.newMeth(C$, 'relativeFrequency$JA', function (binPos) {
if (this.totalValues == 0) return 0;
return 1.0 * this.frequency$JA(binPos) / this.totalValues;
});

Clazz.newMeth(C$, 'increment$JA', function (binPos) {
this.accessor.setPosition$JA(binPos);
this.accessor.get$().inc$();
this.totalValues++;
});

Clazz.newMeth(C$, 'decrement$JA', function (binPos) {
this.accessor.setPosition$JA(binPos);
this.accessor.get$().dec$();
this.totalValues--;
});

Clazz.newMeth(C$, 'totalValues$', function () {
return this.totalValues;
});

Clazz.newMeth(C$, 'modeCount$', function () {
var modes=this.modePositions$();
return this.frequency$JA(modes.get$I(0));
});

Clazz.newMeth(C$, 'modePositions$', function () {
var commonValue=0;
var modePositions=Clazz.new_(1,{E:"long[]"},$I$(3,1));
var cursor=this.localizingCursor$();
while (cursor.hasNext$()){
var val=cursor.next$().get$();
if (val > commonValue) {
commonValue=val;
modePositions.clear$();
var pos=Clazz.array(Long.TYPE, [this.numDimensions$()]);
cursor.localize$JA(pos);
modePositions.add$TE(pos);
} else if (val == commonValue) {
var pos=Clazz.array(Long.TYPE, [this.numDimensions$()]);
cursor.localize$JA(pos);
modePositions.add$TE(pos);
}}
return modePositions;
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.counts.randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.counts.randomAccess$net_imglib2_Interval(interval);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.counts.numDimensions$();
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.counts.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.counts.min$JA(min);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.counts.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.counts.max$I(d);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.counts.max$JA(max);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.counts.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.counts.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.counts.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.counts.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.counts.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.counts.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.counts.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
this.counts.dimensions$JA(dimensions);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.counts.dimension$I(d);
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.counts.cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.counts.localizingCursor$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.counts.size$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.counts.firstElement$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.counts.iterationOrder$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.counts.iterator$();
});

Clazz.newMeth(C$, 'factory$', function () {
return this.counts.factory$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_Img,[this.counts.copy$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
