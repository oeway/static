(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},p$2={},p$3={},I$=[[0,'IllegalAccessError','java.util.Arrays',['net.imglib2.roi.AbstractIterableRegionOfInterest','.AROIIterationOrder'],['net.imglib2.roi.AbstractIterableRegionOfInterest','.AROIIterableInterval','.AROICursor'],['net.imglib2.roi.AbstractIterableRegionOfInterest','.AROIClippedIterableInterval'],['net.imglib2.roi.AbstractIterableRegionOfInterest','.AROIIterableInterval']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractIterableRegionOfInterest", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.roi.AbstractRegionOfInterest', 'net.imglib2.roi.IterableRegionOfInterest');
C$.$classes$=[['AROIIterationOrder',4],['AROIIterableInterval',4],['AROIClippedIterableInterval',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cached_size=-1;
}, 1);

C$.$fields$=[['L',['cached_size'],'O',['cached_min','long[]','+cached_max']]]

Clazz.newMeth(C$, 'c$$I', function (nDimensions) {
;C$.superclazz.c$$I.apply(this,[nDimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'nextRaster$JA$JA$net_imglib2_Interval', function (position, end, interval) {
 loop : while (this.nextRaster$JA$JA(position, end)){
for (var i=0; i < position.length; i++) {
if (position[i] > interval.max$I(i)) continue loop;
}
for (var i=1; i < position.length; i++) {
if (position[i] < interval.min$I(i)) continue loop;
}
if (end[0] <= interval.min$I(0)) continue;
position[0]=Math.max(position[0], interval.min$I(0));
end[0]=Math.min(end[0], interval.max$I(0) + 1);
return true;
}
return false;
});

Clazz.newMeth(C$, 'jumpFwd$J$JA$JA$net_imglib2_Interval', function (totalSteps, position, end, interval) {
var steps=totalSteps;
while (true){
if (position[0] + steps < end[0]) {
position[0]+=steps;
return true;
}steps-=end[0] - position[0];
position[0]=end[0];
if (interval != null ) {
if (!this.nextRaster$JA$JA$net_imglib2_Interval(position, end, interval)) return false;
} else if (!this.nextRaster$JA$JA(position, end)) return false;
}
});

Clazz.newMeth(C$, 'getIterableIntervalOverROI$net_imglib2_RandomAccessible', function (src) {
if (Clazz.instanceOf(src, "net.imglib2.RandomAccessibleInterval")) return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$net_imglib2_RandomAccessibleInterval, [this, null, src]);
return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$net_imglib2_RandomAccessible, [this, null, src]);
});

Clazz.newMeth(C$, 'size$', function () {
var position=Clazz.array(Long.TYPE, [this.numDimensions$()]);
var end=Clazz.array(Long.TYPE, [this.numDimensions$()]);
$I$(2).fill$JA$J(position, -9223372036854775808);
var accumulator=0;
while (this.nextRaster$JA$JA(position, end)){
accumulator+=end[0] - position[0];
position[0]=end[0];
}
return accumulator;
});

Clazz.newMeth(C$, 'getExtrema$JA$JA', function (minima, maxima) {
var position=Clazz.array(Long.TYPE, [this.numDimensions$()]);
var end=Clazz.array(Long.TYPE, [this.numDimensions$()]);
$I$(2).fill$JA$J(position, -9223372036854775808);
$I$(2).fill$JA$J(minima, 9223372036854775807);
$I$(2).fill$JA$J(maxima, -9223372036854775808);
while (this.nextRaster$JA$JA(position, end)){
for (var i=0; i < position.length; i++) {
minima[i]=Math.min(minima[i], position[i]);
if (i == 0) {
maxima[i]=Math.max(maxima[i], end[i] - 1);
} else {
maxima[i]=Math.max(maxima[i], position[i]);
}}
position[0]=end[0];
}
});

Clazz.newMeth(C$, 'invalidateCachedState$', function () {
C$.superclazz.prototype.invalidateCachedState$.apply(this, []);
this.cached_min=null;
this.cached_max=null;
this.cached_size=-1;
});

Clazz.newMeth(C$, 'getRealExtrema$DA$DA', function (minima, maxima) {
p$3.validateExtremaCache.apply(this, []);
for (var i=0; i < this.numDimensions$(); i++) {
minima[i]=this.cached_min[i];
maxima[i]=this.cached_max[i];
}
});

Clazz.newMeth(C$, 'remove$JA', function (position) {
});

Clazz.newMeth(C$, 'validateExtremaCache', function () {
if (this.cached_max == null ) {
var min=Clazz.array(Long.TYPE, [this.numDimensions$()]);
var max=Clazz.array(Long.TYPE, [this.numDimensions$()]);
this.getExtrema$JA$JA(min, max);
this.cached_min=min;
this.cached_max=max;
}}, p$3);

Clazz.newMeth(C$, 'getCachedSize$', function () {
if (this.cached_size == -1) {
this.cached_size=this.size$();
}return this.cached_size;
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
p$3.validateExtremaCache.apply(this, []);
return this.cached_max[d] - this.cached_min[d] + 1;
});

Clazz.newMeth(C$, 'dimensions$JA', function (d) {
for (var i=0; i < d.length; i++) {
d[i]=this.dimension$I(i);
}
});

Clazz.newMeth(C$, 'max$JA', function (max) {
p$3.validateExtremaCache.apply(this, []);
for (var i=0; i < max.length; i++) {
max[i]=this.cached_max[i];
}
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
p$3.validateExtremaCache.apply(this, []);
max.setPosition$JA(this.cached_max);
});

Clazz.newMeth(C$, 'max$I', function (d) {
p$3.validateExtremaCache.apply(this, []);
return this.cached_max[d];
});

Clazz.newMeth(C$, 'min$JA', function (min) {
p$3.validateExtremaCache.apply(this, []);
for (var i=0; i < min.length; i++) {
min[i]=this.cached_min[i];
}
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
p$3.validateExtremaCache.apply(this, []);
min.setPosition$JA(this.cached_min);
});

Clazz.newMeth(C$, 'min$I', function (d) {
p$3.validateExtremaCache.apply(this, []);
return this.cached_min[d];
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractIterableRegionOfInterest, "AROIIterationOrder", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getEnclosingClass', function () {
return this.this$0;
}, p$1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "net.imglib2.roi.AbstractIterableRegionOfInterest.AROIIterationOrder"))) return false;
var o=obj;
return p$1.getEnclosingClass.apply(o, []) === p$1.getEnclosingClass.apply(this, []) ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractIterableRegionOfInterest, "AROIIterableInterval", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.IterableInterval');
C$.$classes$=[['AROICursor',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['src','net.imglib2.RandomAccessible','cached_first_element','<T extends Type<T>>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (src) {
;C$.$init$.apply(this);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.this$0.getCachedSize$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'firstElement$', function () {
if (this.cached_first_element == null ) {
var r=this.src.randomAccess$();
var position=Clazz.array(Long.TYPE, [this.numDimensions$()]);
var raster_end=Clazz.array(Long.TYPE, [this.numDimensions$()]);
$I$(2).fill$JA$J(position, -9223372036854775808);
$I$(2).fill$JA$J(raster_end, -9223372036854775808);
var hasNext;
if (Clazz.instanceOf(this.src, "net.imglib2.Interval")) {
hasNext=this.this$0.nextRaster$JA$JA$net_imglib2_Interval.apply(this.this$0, [position, raster_end, this.src]);
} else {
hasNext=this.this$0.nextRaster$JA$JA.apply(this.this$0, [position, raster_end]);
}if (!hasNext) {
throw Clazz.new_($I$(1,1).c$$S,["Tried to get first element, but ROI has no elements"]);
}r.setPosition$JA(position);
this.cached_first_element=r.get$();
}return this.cached_first_element;
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.this$0.realMin$I.apply(this.this$0, [d]);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
this.this$0.realMin$DA.apply(this.this$0, [min]);
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.this$0.realMin$net_imglib2_RealPositionable.apply(this.this$0, [min]);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.this$0.realMax$I.apply(this.this$0, [d]);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
this.this$0.realMax$DA.apply(this.this$0, [max]);
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.this$0.realMax$net_imglib2_RealPositionable.apply(this.this$0, [max]);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.this$0.numDimensions$.apply(this.this$0, []);
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(4,1), [this, null]);
});

Clazz.newMeth(C$, 'min$I', function (d) {
return this.this$0.min$I.apply(this.this$0, [d]);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
this.this$0.min$JA.apply(this.this$0, [min]);
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
this.this$0.min$net_imglib2_Positionable.apply(this.this$0, [min]);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return this.this$0.max$I.apply(this.this$0, [d]);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
this.this$0.max$JA.apply(this.this$0, [max]);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
this.this$0.max$net_imglib2_Positionable.apply(this.this$0, [max]);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
this.this$0.dimensions$JA.apply(this.this$0, [dimensions]);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.this$0.dimension$I.apply(this.this$0, [d]);
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_($I$(4,1), [this, null]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_($I$(4,1), [this, null]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractIterableRegionOfInterest.AROIIterableInterval, "AROICursor", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.randomAccess=this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest.AROIIterableInterval'].src.randomAccess$();
this.position=Clazz.array(Long.TYPE, [this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].numDimensions$.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [])]);
this.next_position=Clazz.array(Long.TYPE, [this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].numDimensions$.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [])]);
this.raster_end=Clazz.array(Long.TYPE, [this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].numDimensions$.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [])]);
this.next_raster_end=Clazz.array(Long.TYPE, [this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].numDimensions$.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [])]);
this.next_is_valid=false;
this.src_is_valid=false;
}, 1);

C$.$fields$=[['Z',['next_is_valid','has_next','src_is_valid'],'O',['randomAccess','net.imglib2.RandomAccess','position','long[]','+next_position','+raster_end','+next_raster_end']]]

Clazz.newMeth(C$, 'mark_dirty', function () {
this.next_is_valid=false;
this.src_is_valid=false;
}, p$2);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_AbstractIterableRegionOfInterest_AROIIterableInterval_AROICursor', function (cursor) {
;C$.$init$.apply(this);
this.randomAccess=cursor.randomAccess.copyRandomAccess$();
for (var d=0; d < this.position.length; ++d) {
this.position[d]=cursor.position[d];
this.next_position[d]=cursor.next_position[d];
this.raster_end[d]=cursor.raster_end[d];
this.next_raster_end[d]=cursor.next_raster_end[d];
this.next_is_valid=cursor.next_is_valid;
this.has_next=cursor.has_next;
this.src_is_valid=cursor.src_is_valid;
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < pos.length; d++) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < pos.length; d++) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
for (var d=0; d < pos.length; d++) pos[d]=(this.position[d]|0);

});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
for (var d=0; d < pos.length; d++) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'getIntPosition$I', function (dim) {
return (this.position[dim]|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (dim) {
return this.position[dim];
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].numDimensions$.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], []);
});

Clazz.newMeth(C$, 'get$', function () {
if (!this.src_is_valid) {
this.randomAccess.setPosition$JA(this.position);
}return this.randomAccess.get$();
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
var interval=(Clazz.instanceOf(this.this$0.src, "net.imglib2.Interval")) ? this.this$0.src : null;
if (!this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].jumpFwd$J$JA$JA$net_imglib2_Interval.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [steps, this.position, this.raster_end, interval])) {
throw Clazz.new_($I$(1,1).c$$S,["Jumped past end of sequence"]);
}p$2.mark_dirty.apply(this, []);
});

Clazz.newMeth(C$, 'fwd$', function () {
if (!this.hasNext$()) {
throw Clazz.new_($I$(1,1).c$$S,["fwd called at end of sequence"]);
}for (var i=0; i < this.position.length; i++) {
this.position[i]=this.next_position[i];
this.raster_end[i]=this.next_raster_end[i];
}
p$2.mark_dirty.apply(this, []);
});

Clazz.newMeth(C$, 'reset$', function () {
for (var a, $a = 0, $$a = Clazz.array(Long.TYPE, -2, [this.position, this.next_position, this.raster_end, this.next_raster_end]); $a<$$a.length&&((a=($$a[$a])),1);$a++) {
$I$(2).fill$JA$J(a, -9223372036854775808);
}
this.next_raster_end[0]++;
p$2.mark_dirty.apply(this, []);
});

Clazz.newMeth(C$, 'hasNext$', function () {
if (!this.next_is_valid) {
var interval=(Clazz.instanceOf(this.this$0.src, "net.imglib2.Interval")) ? this.this$0.src : null;
this.has_next=this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].jumpFwd$J$JA$JA$net_imglib2_Interval.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [1, this.next_position, this.next_raster_end, interval]);
}this.next_is_valid=true;
return this.has_next;
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'].remove$JA.apply(this.b$['net.imglib2.roi.AbstractIterableRegionOfInterest'], [this.position]);
p$2.mark_dirty.apply(this, []);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_roi_AbstractIterableRegionOfInterest_AROIIterableInterval_AROICursor, [this, null, this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractIterableRegionOfInterest, "AROIClippedIterableInterval", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['net.imglib2.roi.AbstractIterableRegionOfInterest','.AROIIterableInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (src) {
;C$.superclazz.c$$net_imglib2_RandomAccessible.apply(this,[src]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getSrcInterval$', function () {
return this.src;
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return Math.max(C$.superclazz.prototype.realMin$I.apply(this, [d]), this.getSrcInterval$().realMin$I(d));
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
for (var i=0; i < min.length; i++) {
min[i]=this.realMin$I(i);
}
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
for (var i=0; i < min.numDimensions$(); i++) {
min.setPosition$D$I(this.realMin$I(i), i);
}
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return Math.min(C$.superclazz.prototype.realMax$I.apply(this, [d]), this.getSrcInterval$().realMax$I(d));
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
for (var i=0; i < max.length; i++) {
max[i]=this.realMax$I(i);
}
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
for (var i=0; i < max.numDimensions$(); i++) {
max.setPosition$D$I(this.realMax$I(i), i);
}
});

Clazz.newMeth(C$, 'min$I', function (d) {
return Math.max(C$.superclazz.prototype.min$I.apply(this, [d]), this.getSrcInterval$().min$I(d));
});

Clazz.newMeth(C$, 'min$JA', function (min) {
for (var i=0; i < min.length; i++) {
min[i]=this.min$I(i);
}
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
for (var i=0; i < min.numDimensions$(); i++) {
min.setPosition$J$I(this.min$I(i), i);
}
});

Clazz.newMeth(C$, 'max$I', function (d) {
return Math.min(C$.superclazz.prototype.max$I.apply(this, [d]), this.getSrcInterval$().max$I(d));
});

Clazz.newMeth(C$, 'max$JA', function (max) {
for (var i=0; i < max.length; i++) {
max[i]=this.max$I(i);
}
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
for (var i=0; i < max.numDimensions$(); i++) {
max.setPosition$J$I(this.max$I(i), i);
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
