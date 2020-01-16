(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[[0,'net.imglib2.FinalInterval','net.imglib2.FinalRealInterval','net.imglib2.FinalDimensions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Intervals");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createMinSize$JA', function (minsize) {
return $I$(1).createMinSize$JA(minsize);
}, 1);

Clazz.newMeth(C$, 'createMinMax$JA', function (minmax) {
return $I$(1).createMinMax$JA(minmax);
}, 1);

Clazz.newMeth(C$, 'createMinSizeReal$DA', function (minsize) {
return $I$(2).createMinSize$DA(minsize);
}, 1);

Clazz.newMeth(C$, 'createMinMaxReal$DA', function (minmax) {
return $I$(2).createMinMax$DA(minmax);
}, 1);

Clazz.newMeth(C$, 'expand$net_imglib2_Interval$J', function (interval, border) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
for (var d=0; d < n; ++d) {
min[d]-=border;
max[d]+=border;
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'expand$net_imglib2_Interval$JA', function (interval, border) {
return C$.expand$net_imglib2_Interval$net_imglib2_Dimensions(interval, Clazz.new_($I$(3,1).c$$JA,[border]));
}, 1);

Clazz.newMeth(C$, 'expand$net_imglib2_Interval$net_imglib2_Dimensions', function (interval, border) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
for (var d=0; d < n; ++d) {
min[d]-=border.dimension$I(d);
max[d]+=border.dimension$I(d);
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'expand$net_imglib2_Interval$J$I', function (interval, border, d) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
min[d]-=border;
max[d]+=border;
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'translate$net_imglib2_Interval$J$I', function (interval, t, d) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
min[d]+=t;
max[d]+=t;
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'translate$net_imglib2_Interval$JA', function (interval, translation) {
var n=interval.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
interval.min$JA(min);
interval.max$JA(max);
for (var d=0; d < n; ++d) {
min[d]+=translation[d];
max[d]+=translation[d];
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'intersect$net_imglib2_Interval$net_imglib2_Interval', function (intervalA, intervalB) {
Clazz.assert(C$, this, function(){return intervalA.numDimensions$() == intervalB.numDimensions$()});
var n=intervalA.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=Math.max(intervalA.min$I(d), intervalB.min$I(d));
max[d]=Math.min(intervalA.max$I(d), intervalB.max$I(d));
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'intersect$net_imglib2_RealInterval$net_imglib2_RealInterval', function (intervalA, intervalB) {
Clazz.assert(C$, this, function(){return intervalA.numDimensions$() == intervalB.numDimensions$()});
var n=intervalA.numDimensions$();
var min=Clazz.array(Double.TYPE, [n]);
var max=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=Math.max(intervalA.realMin$I(d), intervalB.realMin$I(d));
max[d]=Math.min(intervalA.realMax$I(d), intervalB.realMax$I(d));
}
return Clazz.new_($I$(2,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'union$net_imglib2_Interval$net_imglib2_Interval', function (intervalA, intervalB) {
Clazz.assert(C$, this, function(){return intervalA.numDimensions$() == intervalB.numDimensions$()});
var n=intervalA.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=Math.min(intervalA.min$I(d), intervalB.min$I(d));
max[d]=Math.max(intervalA.max$I(d), intervalB.max$I(d));
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'union$net_imglib2_RealInterval$net_imglib2_RealInterval', function (intervalA, intervalB) {
Clazz.assert(C$, this, function(){return intervalA.numDimensions$() == intervalB.numDimensions$()});
var n=intervalA.numDimensions$();
var min=Clazz.array(Double.TYPE, [n]);
var max=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=Math.min(intervalA.realMin$I(d), intervalB.realMin$I(d));
max[d]=Math.max(intervalA.realMax$I(d), intervalB.realMax$I(d));
}
return Clazz.new_($I$(2,1).c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'smallestContainingInterval$net_imglib2_RealInterval', function (ri) {
var n=ri.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=(Math.floor(ri.realMin$I(d))|0);
max[d]=(Math.ceil(ri.realMax$I(d))|0);
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'largestContainedInterval$net_imglib2_RealInterval', function (ri) {
var n=ri.numDimensions$();
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=(Math.ceil(ri.realMin$I(d))|0);
max[d]=(Math.floor(ri.realMax$I(d))|0);
}
return Clazz.new_($I$(1,1).c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'isEmpty$net_imglib2_Interval', function (interval) {
var n=interval.numDimensions$();
for (var d=0; d < n; ++d) if (interval.min$I(d) > interval.max$I(d)) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'isEmpty$net_imglib2_RealInterval', function (interval) {
var n=interval.numDimensions$();
for (var d=0; d < n; ++d) if (interval.realMin$I(d) > interval.realMax$I(d) ) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'contains$net_imglib2_Interval$net_imglib2_Localizable', function (containing, contained) {
Clazz.assert(C$, this, function(){return containing.numDimensions$() == contained.numDimensions$()});
var n=containing.numDimensions$();
for (var d=0; d < n; ++d) {
var p=contained.getLongPosition$I(d);
if (p < containing.min$I(d) || p > containing.max$I(d) ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'contains$net_imglib2_RealInterval$net_imglib2_RealLocalizable', function (containing, contained) {
Clazz.assert(C$, this, function(){return containing.numDimensions$() == contained.numDimensions$()});
var n=containing.numDimensions$();
for (var d=0; d < n; ++d) {
var p=contained.getDoublePosition$I(d);
if (p < containing.realMin$I(d)  || p > containing.realMax$I(d)  ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'contains$net_imglib2_Interval$net_imglib2_Interval', function (containing, contained) {
Clazz.assert(C$, this, function(){return containing.numDimensions$() == contained.numDimensions$()});
var n=containing.numDimensions$();
for (var d=0; d < n; ++d) {
if (containing.min$I(d) > contained.min$I(d) || containing.max$I(d) < contained.max$I(d) ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'contains$net_imglib2_RealInterval$net_imglib2_RealInterval', function (containing, contained) {
Clazz.assert(C$, this, function(){return containing.numDimensions$() == contained.numDimensions$()});
var n=containing.numDimensions$();
for (var d=0; d < n; ++d) {
if (containing.realMin$I(d) > contained.realMin$I(d)  || containing.realMax$I(d) < contained.realMax$I(d)  ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'numElements$net_imglib2_Dimensions', function (interval) {
var numPixels=interval.dimension$I(0);
var n=interval.numDimensions$();
for (var d=1; d < n; ++d) numPixels*=interval.dimension$I(d);

return numPixels;
}, 1);

Clazz.newMeth(C$, 'numElements$IA', function (dimensions) {
var numPixels=dimensions[0];
for (var d=1; d < dimensions.length; ++d) numPixels*=dimensions[d];

return numPixels;
}, 1);

Clazz.newMeth(C$, 'numElements$JA', function (dimensions) {
var numPixels=dimensions[0];
for (var d=1; d < dimensions.length; ++d) numPixels*=dimensions[d];

return numPixels;
}, 1);

Clazz.newMeth(C$, 'equals$net_imglib2_Interval$net_imglib2_Interval', function (a, b) {
if (a.numDimensions$() != b.numDimensions$()) return false;
for (var d=0; d < a.numDimensions$(); ++d) if (a.min$I(d) != b.min$I(d) || a.max$I(d) != b.max$I(d) ) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'equalDimensions$net_imglib2_Interval$net_imglib2_Interval', function (a, b) {
if (a.numDimensions$() != b.numDimensions$()) return false;
for (var d=0; d < a.numDimensions$(); ++d) if (a.dimension$I(d) != b.dimension$I(d)) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'dimensionsAsLongArray$net_imglib2_Dimensions', function (dimensions) {
var dims=Clazz.array(Long.TYPE, [dimensions.numDimensions$()]);
dimensions.dimensions$JA(dims);
return dims;
}, 1);

Clazz.newMeth(C$, 'dimensionsAsIntArray$net_imglib2_Dimensions', function (dimensions) {
var n=dimensions.numDimensions$();
var dims=Clazz.array(Integer.TYPE, [n]);
for (var d=0; d < n; ++d) dims[d]=(dimensions.dimension$I(d)|0);

return dims;
}, 1);

Clazz.newMeth(C$, 'minAsLongArray$net_imglib2_Interval', function (interval) {
var min=Clazz.array(Long.TYPE, [interval.numDimensions$()]);
interval.min$JA(min);
return min;
}, 1);

Clazz.newMeth(C$, 'minAsIntArray$net_imglib2_Interval', function (interval) {
var n=interval.numDimensions$();
var min=Clazz.array(Integer.TYPE, [n]);
for (var d=0; d < n; ++d) min[d]=(interval.min$I(d)|0);

return min;
}, 1);

Clazz.newMeth(C$, 'maxAsLongArray$net_imglib2_Interval', function (interval) {
var max=Clazz.array(Long.TYPE, [interval.numDimensions$()]);
interval.max$JA(max);
return max;
}, 1);

Clazz.newMeth(C$, 'maxAsIntArray$net_imglib2_Interval', function (interval) {
var n=interval.numDimensions$();
var max=Clazz.array(Integer.TYPE, [n]);
for (var d=0; d < n; ++d) max[d]=(interval.max$I(d)|0);

return max;
}, 1);

Clazz.newMeth(C$, 'maxAsDoubleArray$net_imglib2_RealInterval', function (interval) {
var max=Clazz.array(Double.TYPE, [interval.numDimensions$()]);
interval.realMax$DA(max);
return max;
}, 1);

Clazz.newMeth(C$, 'minAsDoubleArray$net_imglib2_RealInterval', function (interval) {
var min=Clazz.array(Double.TYPE, [interval.numDimensions$()]);
interval.realMin$DA(min);
return min;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
