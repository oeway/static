(function(){var P$=Clazz.newPackage("net.imglib2.labeling"),I$=[[0,'java.util.Arrays','net.imglib2.labeling.LabelingOutOfBoundsRandomAccess','java.util.HashMap',['net.imglib2.labeling.DefaultROIStrategy','.LabelStatistics'],['net.imglib2.labeling.DefaultROIStrategy','.DefaultRegionOfInterest']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultROIStrategy", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.labeling.LabelingROIStrategy');
C$.$classes$=[['LabelStatistics',2],['DefaultRegionOfInterest',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['generation'],'O',['labeling','<L extends Labeling<T>>','statistics','java.util.Map']]]

Clazz.newMeth(C$, ['c$$TL'], function (labeling) {
;C$.$init$.apply(this);
this.labeling=labeling;
this.generation=-9223372036854775808;
}, 1);

Clazz.newMeth(C$, 'computeStatistics$', function () {
var type=this.labeling.firstElement$();
if ((type == null ) || (type.getGeneration$() != this.generation) ) {
this.statistics=Clazz.new_(1,{K:"Object",V:"net.imglib2.labeling.DefaultROIStrategy.LabelStatistics"},$I$(3,1));
var position=Clazz.array(Long.TYPE, [this.labeling.numDimensions$()]);
var last=null;
var lastLabel=null;
var c=this.labeling.localizingCursor$();
while (c.hasNext$()){
type=c.next$();
c.localize$JA(position);
for (var label, $label = type.getLabeling$().iterator$(); $label.hasNext$()&&((label=($label.next$())),1);) {
if ((last == null ) || (!label.equals$O(lastLabel)) ) {
lastLabel=label;
last=this.statistics.get$O(label);
if (last == null ) {
last=Clazz.new_($I$(4,1).c$$I, [this, null, this.labeling.numDimensions$()]);
this.statistics.put$TK$TV(label, last);
}}last.update$JA(position);
}
}
this.generation=type.getGeneration$();
}});

Clazz.newMeth(C$, ['getExtents$TT$JA$JA'], function (label, minExtents, maxExtents) {
this.computeStatistics$();
var stats=this.statistics.get$O(label);
if (stats == null ) {
if (minExtents != null ) $I$(1).fill$JA$J(minExtents, 0);
if (maxExtents != null ) $I$(1).fill$JA$J(maxExtents, 0);
return false;
}stats.getExtents$JA$JA(minExtents, maxExtents);
return true;
});

Clazz.newMeth(C$, ['getRasterStart$TT$JA'], function (label, start) {
this.computeStatistics$();
var stats=this.statistics.get$O(label);
if (stats == null ) {
$I$(1).fill$JA$J(start, 0);
return false;
}stats.getRasterStart$JA(start);
return true;
});

Clazz.newMeth(C$, ['getArea$TT'], function (label) {
this.computeStatistics$();
var stats=this.statistics.get$O(label);
if (stats == null ) {
return 0;
}return stats.getArea$();
});

Clazz.newMeth(C$, 'getLabels$', function () {
this.computeStatistics$();
return this.statistics.keySet$();
});

Clazz.newMeth(C$, ['createRegionOfInterest$TT'], function (label) {
return Clazz.new_($I$(5,1).c$$TT, [this, null, label]);
});

Clazz.newMeth(C$, ['createIterableRegionOfInterest$TT'], function (label) {
return Clazz.new_($I$(5,1).c$$TT, [this, null, label]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultROIStrategy, "LabelStatistics", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.labeling.BoundingBox');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.area=0;
}, 1);

C$.$fields$=[['L',['area'],'O',['rasterStart','long[]']]]

Clazz.newMeth(C$, 'c$$I', function (dimensions) {
;C$.superclazz.c$$I.apply(this,[dimensions]);C$.$init$.apply(this);
this.rasterStart=Clazz.array(Long.TYPE, [dimensions]);
$I$(1).fill$JA$J(this.rasterStart, 2147483647);
}, 1);

Clazz.newMeth(C$, 'getRasterStart$JA', function (start) {
System.arraycopy$O$I$O$I$I(this.rasterStart, 0, start, 0, this.rasterStart.length);
});

Clazz.newMeth(C$, 'getArea$', function () {
return this.area;
});

Clazz.newMeth(C$, 'update$JA', function (position) {
C$.superclazz.prototype.update$JA.apply(this, [position]);
this.area++;
for (var i=0; i < this.rasterStart.length; i++) {
if (this.rasterStart[i] > position[i]) {
System.arraycopy$O$I$O$I$I(position, 0, this.rasterStart, 0, this.rasterStart.length);
return;
} else if (this.rasterStart[i] < position[i]) {
return;
}}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultROIStrategy, "DefaultRegionOfInterest", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.roi.AbstractIterableRegionOfInterest');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['label','<T extends Comparable<T>>','randomAccess','net.imglib2.RandomAccess','labelStats','net.imglib2.labeling.DefaultROIStrategy.LabelStatistics','min','long[]','+max','+firstRaster','real_min','double[]','+real_max']]]

Clazz.newMeth(C$, 'c$$TT', function (label) {
;C$.superclazz.c$$I.apply(this,[this.this$0.labeling.numDimensions$()]);C$.$init$.apply(this);
this.label=label;
this.randomAccess=Clazz.new_(1,{T:"Object"},$I$(2,1).c$$TI,[this.this$0.labeling]);
this.b$['net.imglib2.labeling.DefaultROIStrategy'].computeStatistics$.apply(this.b$['net.imglib2.labeling.DefaultROIStrategy'], []);
this.labelStats=this.this$0.statistics.get$O(label);
this.min=Clazz.array(Long.TYPE, [this.this$0.labeling.numDimensions$()]);
this.max=Clazz.array(Long.TYPE, [this.this$0.labeling.numDimensions$()]);
this.firstRaster=Clazz.array(Long.TYPE, [this.this$0.labeling.numDimensions$()]);
this.labelStats.getExtents$JA$JA(this.min, this.max);
this.labelStats.getRasterStart$JA(this.firstRaster);
this.real_min=Clazz.array(Double.TYPE, [this.this$0.labeling.numDimensions$()]);
this.real_max=Clazz.array(Double.TYPE, [this.this$0.labeling.numDimensions$()]);
this.labelStats.getExtents$JA$JA(this.min, this.max);
for (var i=0; i < this.this$0.labeling.numDimensions$(); i++) {
this.real_min[i]=this.min[i];
this.real_max[i]=this.max[i];
}
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.labelStats.getArea$();
});

Clazz.newMeth(C$, 'contains$DA', function (position) {
for (var i=0; i < position.length; i++) {
this.randomAccess.setPosition$I$I((position[i]|0), i);
}
return this.randomAccess.get$().getLabeling$().contains$O(this.label);
});

Clazz.newMeth(C$, 'getExtrema$JA$JA', function (minima, maxima) {
System.arraycopy$O$I$O$I$I(this.min, 0, minima, 0, this.numDimensions$());
System.arraycopy$O$I$O$I$I(this.max, 0, maxima, 0, this.numDimensions$());
});

Clazz.newMeth(C$, 'nextRaster$JA$JA', function (position, end) {
for (var i=this.numDimensions$() - 1; i >= 0; i--) {
if (position[i] < this.min[i]) {
System.arraycopy$O$I$O$I$I(this.min, 0, position, 0, i + 1);
position[0]--;
break;
}}
do {
var i;
for (i=0; i < this.numDimensions$(); i++) {
if (position[i] >= this.max[i]) {
position[i]=this.min[i];
} else {
position[i]++;
break;
}}
if (i == this.numDimensions$()) return false;
this.randomAccess.setPosition$JA(position);
} while (!this.randomAccess.get$().getLabeling$().contains$O(this.label));
System.arraycopy$O$I$O$I$I(position, 0, end, 0, this.numDimensions$());
do {
end[0]++;
this.randomAccess.setPosition$JA(end);
} while ((end[0] <= this.max[0]) && (this.randomAccess.get$().getLabeling$().contains$O(this.label)) );
return true;
});

Clazz.newMeth(C$, 'move$D$I', function (displacement, d) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["yet to be implemented"]);
});

Clazz.newMeth(C$, 'move$DA', function (displacement) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["yet to be implemented"]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
