(function(){var P$=Clazz.newPackage("net.imglib2.histogram"),p$1={},I$=[[0,['net.imglib2.histogram.HistogramNd','.Incrementer'],['net.imglib2.histogram.HistogramNd','.Decrementer'],'net.imglib2.histogram.DiscreteFrequencyDistribution','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HistogramNd", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.img.Img');
C$.$classes$=[['Counter',10],['Decrementer',2],['Incrementer',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.incrementer=Clazz.new_($I$(1,1), [this, null]);
this.decrementer=Clazz.new_($I$(2,1), [this, null]);
}, 1);

C$.$fields$=[['L',['ignoredCount'],'O',['mappers','java.util.List','distrib','net.imglib2.histogram.DiscreteFrequencyDistribution','pos','long[]','incrementer','net.imglib2.histogram.HistogramNd.Incrementer','decrementer','net.imglib2.histogram.HistogramNd.Decrementer']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (mappers) {
;C$.$init$.apply(this);
this.mappers=mappers;
var dims=Clazz.array(Long.TYPE, [mappers.size$()]);
for (var i=0; i < mappers.size$(); i++) {
dims[i]=mappers.get$I(i).getBinCount$();
}
this.distrib=Clazz.new_($I$(3,1).c$$JA,[dims]);
this.pos=Clazz.array(Long.TYPE, [mappers.size$()]);
this.ignoredCount=0;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_histogram_HistogramNd', function (other) {
;C$.$init$.apply(this);
var mappersCopy=Clazz.new_(1,{E:"net.imglib2.histogram.BinMapper1d"},$I$(4,1));
for (var m, $m = this.mappers.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
mappersCopy.add$TE(m.copy$());
}
this.mappers=mappersCopy;
this.distrib=other.distrib.copy$();
this.pos=other.pos.clone$();
this.ignoredCount=0;
}, 1);

Clazz.newMeth(C$, 'c$$Iterable$java_util_List', function (data, mappers) {
C$.c$$java_util_List.apply(this, [mappers]);
p$1.init$Iterable.apply(this, [data]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$java_util_List', function (data, mappers) {
C$.c$$java_util_List.apply(this, [mappers]);
p$1.init$java_util_List.apply(this, [data]);
}, 1);

Clazz.newMeth(C$, 'hasTails$I', function (dim) {
return this.mappers.get$I(dim).hasTails$();
});

Clazz.newMeth(C$, 'hasTails$', function () {
for (var i=0; i < this.mappers.size$(); i++) {
if (this.hasTails$I(i)) return true;
}
return false;
});

Clazz.newMeth(C$, 'lowerTailCount$I', function (dim) {
if (!this.hasTails$I(dim)) return 0;
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
if (binPos[dim] == 0) sum+=this.distrib.frequency$JA(binPos);
}
return sum;
});

Clazz.newMeth(C$, 'lowerTailCount$', function () {
if (!this.hasTails$()) return 0;
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
for (var i=0; i < this.mappers.size$(); i++) {
if (binPos[i] == 0) {
sum+=this.distrib.frequency$JA(binPos);
break;
}}
}
return sum;
});

Clazz.newMeth(C$, 'upperTailCount$I', function (dim) {
if (!this.hasTails$I(dim)) return 0;
var dimSize=this.mappers.get$I(dim).getBinCount$();
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
if (binPos[dim] == dimSize - 1) sum+=this.distrib.frequency$JA(binPos);
}
return sum;
});

Clazz.newMeth(C$, 'upperTailCount$', function () {
if (!this.hasTails$()) return 0;
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
for (var i=0; i < this.mappers.size$(); i++) {
if (binPos[i] == this.mappers.get$I(i).getBinCount$() - 1) {
sum+=this.distrib.frequency$JA(binPos);
break;
}}
}
return sum;
});

Clazz.newMeth(C$, 'valueCount$I', function (dim) {
var hasTails=this.hasTails$I(dim);
var dimSize=this.mappers.get$I(dim).getBinCount$();
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
var inTail=false;
if (hasTails && (binPos[dim] == 0)  || (binPos[dim] == dimSize - 1) ) {
inTail=true;
}if (!inTail) sum+=this.distrib.frequency$JA(binPos);
}
return sum;
});

Clazz.newMeth(C$, 'valueCount$', function () {
if (!this.hasTails$()) return this.distributionCount$();
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
var inTail=false;
for (var i=0; i < binPos.length; i++) {
if ((binPos[i] == 0) || (binPos[i] == this.mappers.get$I(i).getBinCount$() - 1) ) {
inTail=true;
break;
}}
if (!inTail) sum+=this.distrib.frequency$JA(binPos);
}
return sum;
});

Clazz.newMeth(C$, 'distributionCount$I$J', function (dim, dimVal) {
var sum=0;
var cursor=this.distrib.localizingCursor$();
var binPos=Clazz.array(Long.TYPE, [this.distrib.numDimensions$()]);
while (cursor.hasNext$()){
cursor.next$();
cursor.localize$JA(binPos);
if (binPos[dim] != dimVal) continue;
sum+=this.distrib.frequency$JA(binPos);
}
return sum;
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

Clazz.newMeth(C$, 'frequency$java_util_List', function (values) {
this.map$java_util_List$JA(values, this.pos);
return this.frequency$JA(this.pos);
});

Clazz.newMeth(C$, 'frequency$JA', function (binPos) {
return this.distrib.frequency$JA(binPos);
});

Clazz.newMeth(C$, 'relativeFrequency$java_util_List$Z', function (values, includeTails) {
this.map$java_util_List$JA(values, this.pos);
return this.relativeFrequency$JA$Z(this.pos, includeTails);
});

Clazz.newMeth(C$, 'relativeFrequency$JA$Z', function (binPos, includeTails) {
var numer=this.frequency$JA(binPos);
var denom=includeTails ? this.totalCount$() : this.valueCount$();
return numer / denom;
});

Clazz.newMeth(C$, 'getBinCount$', function () {
if (this.mappers.size$() == 0) return 0;
var count=1;
for (var i=0; i < this.mappers.size$(); i++) {
count*=this.mappers.get$I(i).getBinCount$();
}
return count;
});

Clazz.newMeth(C$, 'map$java_util_List$JA', function (values, binPos) {
for (var i=0; i < this.mappers.size$(); i++) {
binPos[i]=this.mappers.get$I(i).map$TT(values.get$I(i));
}
});

Clazz.newMeth(C$, 'getCenterValues$JA$java_util_List', function (binPos, values) {
for (var i=0; i < this.mappers.size$(); i++) {
var value=values.get$I(i);
this.mappers.get$I(i).getCenterValue$J$TT(binPos[i], value);
}
});

Clazz.newMeth(C$, 'getLowerBounds$JA$java_util_List', function (binPos, values) {
for (var i=0; i < this.mappers.size$(); i++) {
var value=values.get$I(i);
this.mappers.get$I(i).getLowerBound$J$TT(binPos[i], value);
}
});

Clazz.newMeth(C$, 'getUpperBounds$JA$java_util_List', function (binPos, values) {
for (var i=0; i < this.mappers.size$(); i++) {
var value=values.get$I(i);
this.mappers.get$I(i).getUpperBound$J$TT(binPos[i], value);
}
});

Clazz.newMeth(C$, 'includesUpperBounds$JA', function (binPos) {
for (var i=0; i < this.mappers.size$(); i++) {
if (!this.mappers.get$I(i).includesUpperBound$J(binPos[i])) return false;
}
return true;
});

Clazz.newMeth(C$, 'includesLowerBounds$JA', function (binPos) {
for (var i=0; i < this.mappers.size$(); i++) {
if (!this.mappers.get$I(i).includesLowerBound$J(binPos[i])) return false;
}
return true;
});

Clazz.newMeth(C$, 'includesUpperBound$I$J', function (dim, binPos) {
return this.mappers.get$I(dim).includesUpperBound$J(binPos);
});

Clazz.newMeth(C$, 'includesLowerBound$I$J', function (dim, binPos) {
return this.mappers.get$I(dim).includesLowerBound$J(binPos);
});

Clazz.newMeth(C$, 'isInLowerTail$java_util_List', function (values) {
for (var i=0; i < this.mappers.size$(); i++) {
if (this.isInLowerTail$I$TT(i, values.get$I(i))) {
return true;
}}
return false;
});

Clazz.newMeth(C$, ['isInLowerTail$I$TT'], function (dim, value) {
if (this.hasTails$I(dim)) {
var binPos=this.mappers.get$I(dim).map$TT(value);
if (binPos == 0) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'isInUpperTail$java_util_List', function (values) {
for (var i=0; i < this.mappers.size$(); i++) {
if (this.isInUpperTail$I$TT(i, values.get$I(i))) {
return true;
}}
return false;
});

Clazz.newMeth(C$, ['isInUpperTail$I$TT'], function (dim, value) {
if (this.hasTails$I(dim)) {
var binPos=this.mappers.get$I(dim).map$TT(value);
if (binPos == this.mappers.get$I(dim).getBinCount$() - 1) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'isInMiddle$java_util_List', function (values) {
for (var i=0; i < this.mappers.size$(); i++) {
if (!this.isInMiddle$I$TT(i, values.get$I(i))) {
return false;
}}
return true;
});

Clazz.newMeth(C$, ['isInMiddle$I$TT'], function (dim, value) {
if (this.hasTails$I(dim)) {
var binPos=this.mappers.get$I(dim).map$TT(value);
if ((binPos == 0) || (binPos == this.mappers.get$I(dim).getBinCount$() - 1) ) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'isOutside$java_util_List', function (values) {
for (var i=0; i < this.mappers.size$(); i++) {
if (this.isOutside$I$TT(i, values.get$I(i))) {
return true;
}}
return false;
});

Clazz.newMeth(C$, ['isOutside$I$TT'], function (dim, value) {
var binPos=this.mappers.get$I(dim).map$TT(value);
if ((binPos == -9223372036854775808) || (binPos == 9223372036854775807) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'dfd$', function () {
return this.distrib;
});

Clazz.newMeth(C$, 'countData$Iterable', function (data) {
p$1.init$Iterable.apply(this, [data]);
});

Clazz.newMeth(C$, 'countData$java_util_List', function (data) {
p$1.init$java_util_List.apply(this, [data]);
});

Clazz.newMeth(C$, 'addData$Iterable', function (data) {
p$1.add$Iterable.apply(this, [data]);
});

Clazz.newMeth(C$, 'addData$java_util_List', function (data) {
p$1.add$java_util_List.apply(this, [data]);
});

Clazz.newMeth(C$, 'subtractData$Iterable', function (data) {
p$1.subtract$Iterable.apply(this, [data]);
});

Clazz.newMeth(C$, 'subtractData$java_util_List', function (data) {
p$1.subtract$java_util_List.apply(this, [data]);
});

Clazz.newMeth(C$, 'increment$JA', function (binPos) {
this.distrib.increment$JA(binPos);
});

Clazz.newMeth(C$, 'decrement$JA', function (binPos) {
this.distrib.decrement$JA(binPos);
});

Clazz.newMeth(C$, 'increment$java_util_List', function (values) {
p$1.count$java_util_List$net_imglib2_histogram_HistogramNd_Counter.apply(this, [values, this.incrementer]);
});

Clazz.newMeth(C$, 'decrement$java_util_List', function (values) {
p$1.count$java_util_List$net_imglib2_histogram_HistogramNd_Counter.apply(this, [values, this.decrementer]);
});

Clazz.newMeth(C$, 'resetCounters$', function () {
p$1.reset.apply(this, []);
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

Clazz.newMeth(C$, 'min$I', function (d) {
return this.distrib.min$I(d);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.distrib.min$JA(min);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.distrib.min$net_imglib2_Positionable(min);
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

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.distrib.realMin$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.distrib.realMin$DA(min);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.distrib.realMin$net_imglib2_RealPositionable(min);
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
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_histogram_HistogramNd,[this]);
});

Clazz.newMeth(C$, 'reset', function () {
this.distrib.resetCounters$();
this.ignoredCount=0;
}, p$1);

Clazz.newMeth(C$, 'init$Iterable', function (data) {
p$1.reset.apply(this, []);
p$1.add$Iterable.apply(this, [data]);
}, p$1);

Clazz.newMeth(C$, 'init$java_util_List', function (data) {
p$1.reset.apply(this, []);
p$1.add$java_util_List.apply(this, [data]);
}, p$1);

Clazz.newMeth(C$, 'add$Iterable', function (data) {
p$1.modifyCounts$Iterable$net_imglib2_histogram_HistogramNd_Counter.apply(this, [data, this.incrementer]);
}, p$1);

Clazz.newMeth(C$, 'add$java_util_List', function (data) {
p$1.modifyCounts$java_util_List$net_imglib2_histogram_HistogramNd_Counter.apply(this, [data, this.incrementer]);
}, p$1);

Clazz.newMeth(C$, 'subtract$Iterable', function (data) {
p$1.modifyCounts$Iterable$net_imglib2_histogram_HistogramNd_Counter.apply(this, [data, this.decrementer]);
}, p$1);

Clazz.newMeth(C$, 'subtract$java_util_List', function (data) {
p$1.modifyCounts$java_util_List$net_imglib2_histogram_HistogramNd_Counter.apply(this, [data, this.decrementer]);
}, p$1);

Clazz.newMeth(C$, 'modifyCounts$Iterable$net_imglib2_histogram_HistogramNd_Counter', function (data, counter) {
var iter=data.iterator$();
while (iter.hasNext$()){
p$1.count$java_util_List$net_imglib2_histogram_HistogramNd_Counter.apply(this, [iter.next$(), counter]);
}
}, p$1);

Clazz.newMeth(C$, 'modifyCounts$java_util_List$net_imglib2_histogram_HistogramNd_Counter', function (data, counter) {
var vals=Clazz.new_(1,{E:"Object"},$I$(4,1).c$$I,[this.mappers.size$()]);
var iters=Clazz.new_(1,{E:"java.util.Iterator"},$I$(4,1));
for (var i=0; i < data.size$(); i++) {
iters.add$TE(data.get$I(i).iterator$());
vals.add$TE(null);
}
var hasNext=true;
do {
for (var i=0; i < iters.size$(); i++) {
if (!iters.get$I(i).hasNext$()) hasNext=false;
}
if (hasNext) {
for (var i=0; i < iters.size$(); i++) {
vals.set$I$TE(i, iters.get$I(i).next$());
}
p$1.count$java_util_List$net_imglib2_histogram_HistogramNd_Counter.apply(this, [vals, counter]);
}} while (hasNext);
}, p$1);

Clazz.newMeth(C$, 'count$java_util_List$net_imglib2_histogram_HistogramNd_Counter', function (values, counter) {
this.map$java_util_List$JA(values, this.pos);
var ignored=false;
for (var i=0; i < this.pos.length; i++) {
if (this.pos[i] == -9223372036854775808 || this.pos[i] == 9223372036854775807 ) {
ignored=true;
break;
}}
counter.count$(this.pos, ignored);
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HistogramNd, "Counter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HistogramNd, "Decrementer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['net.imglib2.histogram.HistogramNd','net.imglib2.histogram.HistogramNd.Counter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['count$JA$Z','count$'], function (position, ignored) {
if (ignored) this.this$0.ignoredCount--;
 else this.this$0.distrib.decrement$JA(position);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HistogramNd, "Incrementer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['net.imglib2.histogram.HistogramNd','net.imglib2.histogram.HistogramNd.Counter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['count$JA$Z','count$'], function (position, ignored) {
if (ignored) this.this$0.ignoredCount++;
 else this.this$0.distrib.increment$JA(position);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
