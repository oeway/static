(function(){var P$=Clazz.newPackage("net.imglib2.histogram"),p$1={},I$=[[0,'net.imglib2.histogram.DiscreteFrequencyDistribution']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Histogram1d", null, null, 'net.imglib2.img.Img');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['ignoredCount'],'O',['firstValue','<T>','mapper','net.imglib2.histogram.BinMapper1d','distrib','net.imglib2.histogram.DiscreteFrequencyDistribution','pos','long[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_histogram_BinMapper1d', function (mapper) {
;C$.$init$.apply(this);
this.mapper=mapper;
this.distrib=Clazz.new_($I$(1,1).c$$JA,[Clazz.array(Long.TYPE, -1, [mapper.getBinCount$()])]);
this.pos=Clazz.array(Long.TYPE, [1]);
this.ignoredCount=0;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_histogram_Histogram1d', function (other) {
;C$.$init$.apply(this);
this.mapper=other.mapper.copy$();
this.distrib=other.distrib.copy$();
this.pos=other.pos.clone$();
p$1.reset.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$Iterable$net_imglib2_histogram_BinMapper1d', function (data, mapper) {
C$.c$$net_imglib2_histogram_BinMapper1d.apply(this, [mapper]);
p$1.init$Iterable.apply(this, [data]);
}, 1);

Clazz.newMeth(C$, 'firstDataValue$', function () {
return this.firstValue;
});

Clazz.newMeth(C$, 'hasTails$', function () {
return this.mapper.hasTails$();
});

Clazz.newMeth(C$, 'lowerTailCount$', function () {
if (!this.hasTails$()) return 0;
this.pos[0]=0;
return this.distrib.frequency$JA(this.pos);
});

Clazz.newMeth(C$, 'upperTailCount$', function () {
if (!this.hasTails$()) return 0;
this.pos[0]=this.mapper.getBinCount$() - 1;
return this.distrib.frequency$JA(this.pos);
});

Clazz.newMeth(C$, 'valueCount$', function () {
return this.distributionCount$() - this.lowerTailCount$() - this.upperTailCount$() ;
});

Clazz.newMeth(C$, 'distributionCount$', function () {
return this.distrib.totalValues$();
});

Clazz.newMeth(C$, 'ignoredCount$', function () {
return this.ignoredCount;
});

Clazz.newMeth(C$, 'totalCount$', function () {
return this.distributionCount$() + this.ignoredCount$();
});

Clazz.newMeth(C$, ['frequency$TT'], function (value) {
var bin=this.mapper.map$TT(value);
return this.frequency$J(bin);
});

Clazz.newMeth(C$, ['frequency$J','frequencynull'], function (binPos) {
if (binPos < 0 || binPos >= this.mapper.getBinCount$() ) return 0;
this.pos[0]=binPos;
return this.distrib.frequency$JA(this.pos);
});

Clazz.newMeth(C$, ['relativeFrequency$TT$Z'], function (value, includeTails) {
var bin=this.mapper.map$TT(value);
return this.relativeFrequency$J$Z(bin, includeTails);
});

Clazz.newMeth(C$, ['relativeFrequency$J$Z','relativeFrequencynull'], function (binPos, includeTails) {
var numer=this.frequency$J(binPos);
var denom=includeTails ? this.distributionCount$() : this.valueCount$();
return numer / denom;
});

Clazz.newMeth(C$, 'getBinCount$', function () {
return this.mapper.getBinCount$();
});

Clazz.newMeth(C$, ['map$TT'], function (value) {
return this.mapper.map$TT(value);
});

Clazz.newMeth(C$, ['getCenterValue$J$TT'], function (binPos, value) {
this.mapper.getCenterValue$J$TT(binPos, value);
});

Clazz.newMeth(C$, ['getLowerBound$J$TT'], function (binPos, value) {
this.mapper.getLowerBound$J$TT(binPos, value);
});

Clazz.newMeth(C$, ['getUpperBound$J$TT'], function (binPos, value) {
this.mapper.getUpperBound$J$TT(binPos, value);
});

Clazz.newMeth(C$, 'includesUpperBound$J', function (binPos) {
return this.mapper.includesUpperBound$J(binPos);
});

Clazz.newMeth(C$, 'includesLowerBound$J', function (binPos) {
return this.mapper.includesLowerBound$J(binPos);
});

Clazz.newMeth(C$, ['isInLowerTail$TT'], function (value) {
if (!this.hasTails$()) return false;
var bin=this.mapper.map$TT(value);
return bin == 0;
});

Clazz.newMeth(C$, ['isInUpperTail$TT'], function (value) {
if (!this.hasTails$()) return false;
var bin=this.mapper.map$TT(value);
return bin == this.getBinCount$() - 1;
});

Clazz.newMeth(C$, ['isInMiddle$TT'], function (value) {
if (!this.hasTails$()) return true;
var bin=this.mapper.map$TT(value);
return (bin > 0) && (bin < this.getBinCount$() - 1) ;
});

Clazz.newMeth(C$, ['isOutside$TT'], function (value) {
var bin=this.mapper.map$TT(value);
return (bin == -9223372036854775808) || (bin == 9223372036854775807) ;
});

Clazz.newMeth(C$, 'dfd$', function () {
return this.distrib;
});

Clazz.newMeth(C$, 'countData$Iterable', function (data) {
p$1.init$Iterable.apply(this, [data]);
});

Clazz.newMeth(C$, 'addData$Iterable', function (data) {
p$1.add$Iterable.apply(this, [data]);
});

Clazz.newMeth(C$, 'subtractData$Iterable', function (data) {
p$1.subtract$Iterable.apply(this, [data]);
});

Clazz.newMeth(C$, ['increment$J','incrementnull'], function (binPos) {
this.pos[0]=binPos;
this.distrib.increment$JA(this.pos);
});

Clazz.newMeth(C$, ['decrement$J','decrementnull'], function (binPos) {
this.pos[0]=binPos;
this.distrib.decrement$JA(this.pos);
});

Clazz.newMeth(C$, ['increment$TT'], function (value) {
var bin=this.mapper.map$TT(value);
if (bin == -9223372036854775808 || bin == 9223372036854775807 ) {
this.ignoredCount++;
} else {
this.pos[0]=bin;
this.distrib.increment$JA(this.pos);
}});

Clazz.newMeth(C$, ['decrement$TT'], function (value) {
var bin=this.mapper.map$TT(value);
if (bin == -9223372036854775808 || bin == 9223372036854775807 ) {
this.ignoredCount--;
} else {
this.pos[0]=bin;
this.distrib.decrement$JA(this.pos);
}});

Clazz.newMeth(C$, 'resetCounters$', function () {
p$1.reset.apply(this, []);
});

Clazz.newMeth(C$, 'toLongArray$', function () {
var result=Clazz.array(Long.TYPE, [(this.getBinCount$()|0)]);
var cursor=this.cursor$();
var i=0;
while (cursor.hasNext$()){
result[i++]=cursor.next$().get$();
}
return result;
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.distrib.numDimensions$();
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.distrib.dimension$I(d);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dims) {
this.distrib.dimensions$JA(dims);
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.distrib.randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.distrib.randomAccess$net_imglib2_Interval(interval);
});

Clazz.newMeth(C$, 'min$', function () {
return this.min$I(0);
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.distrib.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.distrib.min$JA(min);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.distrib.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'max$', function () {
return this.max$I(0);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.distrib.max$I(d);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.distrib.max$JA(max);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.distrib.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$, 'realMin$', function () {
return this.realMin$I(0);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.distrib.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.distrib.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.distrib.realMin$net_imglib2_RealPositionable(min);
});

Clazz.newMeth(C$, 'realMax$', function () {
return this.realMax$I(0);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.distrib.realMax$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.distrib.realMax$DA(max);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.distrib.realMax$net_imglib2_RealPositionable(max);
});

Clazz.newMeth(C$, 'cursor$', function () {
return this.distrib.cursor$();
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.distrib.localizingCursor$();
});

Clazz.newMeth(C$, 'size$', function () {
return this.distrib.size$();
});

Clazz.newMeth(C$, 'firstElement$', function () {
return this.distrib.firstElement$();
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return this.distrib.iterationOrder$();
});

Clazz.newMeth(C$, 'iterator$', function () {
return this.distrib.iterator$();
});

Clazz.newMeth(C$, 'factory$', function () {
return this.distrib.factory$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_histogram_Histogram1d,[this]);
});

Clazz.newMeth(C$, 'reset', function () {
this.distrib.resetCounters$();
this.ignoredCount=0;
this.firstValue=null;
}, p$1);

Clazz.newMeth(C$, 'init$Iterable', function (data) {
p$1.reset.apply(this, []);
var iter=data.iterator$();
if (iter.hasNext$()) {
this.firstValue=iter.next$();
this.increment$TT(this.firstValue);
}while (iter.hasNext$()){
this.increment$TT(iter.next$());
}
}, p$1);

Clazz.newMeth(C$, 'add$Iterable', function (data) {
for (var value, $value = data.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
this.increment$TT(value);
}
}, p$1);

Clazz.newMeth(C$, 'subtract$Iterable', function (data) {
for (var value, $value = data.iterator$(); $value.hasNext$()&&((value=($value.next$())),1);) {
this.decrement$TT(value);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
