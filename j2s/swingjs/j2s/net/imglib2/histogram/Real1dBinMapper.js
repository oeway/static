(function(){var P$=Clazz.newPackage("net.imglib2.histogram"),p$1={},I$=[[0,'java.util.ArrayList','net.imglib2.histogram.HistogramNd']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Real1dBinMapper", null, null, 'net.imglib2.histogram.BinMapper1d');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['tailBins'],'D',['minVal','maxVal','binWidth'],'L',['bins','interiorBins']]]

Clazz.newMeth(C$, 'c$$D$D$J$Z', function (minVal, maxVal, numBins, tailBins) {
;C$.$init$.apply(this);
this.bins=numBins;
this.minVal=minVal;
this.maxVal=maxVal;
this.tailBins=tailBins;
if (numBins <= 0 || (tailBins && numBins <= 2 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid Real1dBinMapper: no data bins specified"]);
}if (minVal > maxVal ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid Real1dBinMapper: invalid data range specified (min > max)"]);
}if (tailBins) {
this.interiorBins=this.bins - 2;
} else {
this.interiorBins=this.bins;
}if (minVal == maxVal ) this.binWidth=1.0 / this.interiorBins;
 else this.binWidth=(maxVal - minVal) / (this.interiorBins);
}, 1);

Clazz.newMeth(C$, 'getBinCount$', function () {
return this.bins;
});

Clazz.newMeth(C$, ['map$TT'], function (value) {
var val=value.getRealDouble$();
var pos;
if (val >= this.minVal  && val <= this.maxVal  ) {
var bin=(val - this.minVal) / this.binWidth;
pos=(Math.floor(bin)|0);
if (pos >= this.interiorBins) pos=this.interiorBins - 1;
if (this.tailBins) pos++;
} else if (this.tailBins) {
if (val < this.minVal ) pos=0;
 else pos=this.bins - 1;
} else {
if (val < this.minVal ) pos=-9223372036854775808;
 else pos=9223372036854775807;
}return pos;
});

Clazz.newMeth(C$, ['getCenterValue$J$TT'], function (binPos, value) {
value.setReal$D(p$1.center$J.apply(this, [binPos]));
});

Clazz.newMeth(C$, ['getLowerBound$J$TT'], function (binPos, value) {
value.setReal$D(p$1.min$J.apply(this, [binPos]));
});

Clazz.newMeth(C$, ['getUpperBound$J$TT'], function (binPos, value) {
value.setReal$D(p$1.max$J.apply(this, [binPos]));
});

Clazz.newMeth(C$, 'includesLowerBound$J', function (binPos) {
if (this.tailBins && binPos == this.bins - 1 ) return false;
return true;
});

Clazz.newMeth(C$, 'includesUpperBound$J', function (binPos) {
if (this.tailBins) {
if (binPos >= this.bins - 2) return true;
} else {
if (binPos == this.bins - 1) return true;
}return false;
});

Clazz.newMeth(C$, 'hasTails$', function () {
return this.tailBins;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$D$D$J$Z,[this.minVal, this.maxVal, this.bins, this.tailBins]);
});

Clazz.newMeth(C$, 'histogramNd$DA$DA$JA$ZA', function (minVals, maxVals, numBins, tailBins) {
if ((minVals.length != numBins.length) || (minVals.length != tailBins.length) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["multiDimMappers: differing input array sizes"]);
}var binMappers=Clazz.new_(1,{E:"net.imglib2.histogram.BinMapper1d"},$I$(1,1));
for (var i=0; i < minVals.length; i++) {
var mapper=Clazz.new_(1,{T:"Object"},C$.c$$D$D$J$Z,[minVals[i], maxVals[i], numBins[i], tailBins[i]]);
binMappers.add$TE(mapper);
}
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$java_util_List,[binMappers]);
}, 1);

Clazz.newMeth(C$, 'min$J', function (pos) {
if (pos < 0 || pos > this.bins - 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid bin position specified"]);
}if (this.tailBins) {
if (pos == 0) return -Infinity;
if (pos == this.bins - 1) return this.maxVal;
return this.minVal + (1.0 * (pos - 1) / (this.bins - 2)) * (this.maxVal - this.minVal);
}return this.minVal + (1.0 * pos / (this.bins)) * (this.maxVal - this.minVal);
}, p$1);

Clazz.newMeth(C$, 'max$J', function (pos) {
if (pos < 0 || pos > this.bins - 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid bin position specified"]);
}if (this.tailBins) {
if (pos == 0) return this.minVal;
if (pos == this.bins - 1) return Infinity;
return this.minVal + (1.0 * pos / (this.bins - 2)) * (this.maxVal - this.minVal);
}return this.minVal + (1.0 * (pos + 1) / (this.bins)) * (this.maxVal - this.minVal);
}, p$1);

Clazz.newMeth(C$, 'center$J', function (pos) {
return (p$1.min$J.apply(this, [pos]) + p$1.max$J.apply(this, [pos])) / 2;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
