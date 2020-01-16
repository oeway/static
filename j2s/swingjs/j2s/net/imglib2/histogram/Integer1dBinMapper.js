(function(){var P$=Clazz.newPackage("net.imglib2.histogram"),I$=[[0,'java.util.ArrayList','net.imglib2.histogram.HistogramNd']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Integer1dBinMapper", null, null, 'net.imglib2.histogram.BinMapper1d');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['tailBins'],'L',['bins','minVal','maxVal']]]

Clazz.newMeth(C$, 'c$$J$J$Z', function (minVal, numBins, tailBins) {
;C$.$init$.apply(this);
this.bins=numBins;
this.tailBins=tailBins;
this.minVal=minVal;
if (tailBins) {
this.maxVal=minVal + numBins - 1 - 2;
} else {
this.maxVal=minVal + numBins - 1;
}if ((this.bins <= 0) || (tailBins && this.bins <= 2 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid Integer1dBinMapper: no data bins specified"]);
}}, 1);

Clazz.newMeth(C$, 'getBinCount$', function () {
return this.bins;
});

Clazz.newMeth(C$, ['map$TT'], function (value) {
var val=value.getIntegerLong$();
var pos;
if (val >= this.minVal && val <= this.maxVal ) {
pos=val - this.minVal;
if (this.tailBins) pos++;
} else if (this.tailBins) {
if (val < this.minVal) pos=0;
 else pos=this.bins - 1;
} else {
if (val < this.minVal) pos=-9223372036854775808;
 else pos=9223372036854775807;
}return pos;
});

Clazz.newMeth(C$, ['getCenterValue$J$TT'], function (binPos, value) {
var val;
if (this.tailBins) {
if (binPos == 0) val=this.minVal - 1;
 else if (binPos == this.bins - 1) val=this.maxVal + 1;
 else val=this.minVal + binPos - 1;
} else {
val=this.minVal + binPos;
}value.setInteger$J(val);
});

Clazz.newMeth(C$, ['getLowerBound$J$TT'], function (binPos, value) {
if (this.tailBins && (binPos == 0 || binPos == this.bins - 1 ) ) {
if (binPos == 0) value.setInteger$J(-9223372036854775807);
 else value.setInteger$J(this.maxVal + 1);
} else {
this.getCenterValue$J$TT(binPos, value);
}});

Clazz.newMeth(C$, ['getUpperBound$J$TT'], function (binPos, value) {
if (this.tailBins && (binPos == 0 || binPos == this.bins - 1 ) ) {
if (binPos == 0) value.setInteger$J(this.minVal - 1);
 else value.setInteger$J(9223372036854775806);
} else {
this.getCenterValue$J$TT(binPos, value);
}});

Clazz.newMeth(C$, 'includesLowerBound$J', function (binPos) {
return true;
});

Clazz.newMeth(C$, 'includesUpperBound$J', function (binPos) {
return true;
});

Clazz.newMeth(C$, 'hasTails$', function () {
return this.tailBins;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$J$J$Z,[this.minVal, this.bins, this.tailBins]);
});

Clazz.newMeth(C$, 'histogramNd$JA$JA$ZA', function (minVals, numBins, tailBins) {
if ((minVals.length != numBins.length) || (minVals.length != tailBins.length) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["multiDimMapper: differing input array sizes"]);
}var binMappers=Clazz.new_(1,{E:"net.imglib2.histogram.BinMapper1d"},$I$(1,1));
for (var i=0; i < minVals.length; i++) {
var mapper=Clazz.new_(1,{T:"Object"},C$.c$$J$J$Z,[minVals[i], numBins[i], tailBins[i]]);
binMappers.add$TE(mapper);
}
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$java_util_List,[binMappers]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
