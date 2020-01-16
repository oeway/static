(function(){var P$=Clazz.newPackage("net.imglib2.iterator"),I$=[[0,'net.imglib2.util.Util','net.imglib2.iterator.ZeroMinIntervalIterator','net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntervalIterator", null, 'net.imglib2.AbstractInterval', ['net.imglib2.Iterator', 'net.imglib2.Localizable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
}, 1);

C$.$fields$=[['L',['lastIndex','index'],'O',['dimensions','long[]','+steps']]]

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
this.dimensions=Clazz.array(Long.TYPE, [this.n]);
this.steps=Clazz.array(Long.TYPE, [this.n]);
var m=this.n - 1;
var k=this.steps[0]=1;
for (var d=0; d < m; ) {
var dimd=dimensions[d];
this.dimensions[d]=dimd;
k*=dimd;
this.steps[++d]=k;
}
var dimm=dimensions[m];
this.dimensions[m]=dimm;
this.lastIndex=k * dimm - 1;
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (dimensions) {
C$.c$$JA.apply(this, [$I$(1).int2long$IA(dimensions)]);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (min, max) {
;C$.superclazz.c$$JA$JA.apply(this,[min, max]);C$.$init$.apply(this);
this.dimensions=Clazz.array(Long.TYPE, [this.n]);
this.steps=Clazz.array(Long.TYPE, [this.n]);
var m=this.n - 1;
var k=this.steps[0]=1;
for (var d=0; d < m; ) {
var s=max[d] - min[d] + 1;
this.dimensions[d]=s;
k*=s;
this.steps[++d]=k;
}
var sizem=max[m] - min[m] + 1;
this.dimensions[m]=sizem;
this.lastIndex=k * sizem - 1;
}, 1);

Clazz.newMeth(C$, 'c$$IA$IA', function (min, max) {
C$.c$$JA$JA.apply(this, [$I$(1).int2long$IA(min), $I$(1).int2long$IA(max)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
this.dimensions=Clazz.array(Long.TYPE, [this.n]);
this.steps=Clazz.array(Long.TYPE, [this.n]);
var m=this.n - 1;
var k=this.steps[0]=1;
for (var d=0; d < m; ) {
var dimd=interval.dimension$I(d);
this.dimensions[d]=dimd;
k*=dimd;
this.steps[++d]=k;
}
var dimm=interval.dimension$I(m);
this.dimensions[m]=dimm;
this.lastIndex=k * dimm - 1;
}, 1);

Clazz.newMeth(C$, 'create$net_imglib2_Interval', function (interval) {
var n=interval.numDimensions$();
for (var d=0; d < n; ++d) if (interval.min$I(d) != 0) return Clazz.new_(C$.c$$net_imglib2_Interval,[interval]);

return Clazz.new_($I$(2,1).c$$net_imglib2_Interval,[interval]);
}, 1);

Clazz.newMeth(C$, 'jumpFwd$J', function (i) {
this.index+=i;
});

Clazz.newMeth(C$, 'fwd$', function () {
++this.index;
});

Clazz.newMeth(C$, 'reset$', function () {
this.index=-1;
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.lastIndex;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'getLongPosition$I', function (dim) {
return $I$(3).indexToPositionWithOffset$J$JA$JA$JA$I(this.index, this.dimensions, this.steps, this.min, dim);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
$I$(3).indexToPositionWithOffset$J$JA$JA$JA(this.index, this.dimensions, this.min, position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (dim) {
return ($I$(3).indexToPositionWithOffset$J$JA$JA$JA$I(this.index, this.dimensions, this.steps, this.min, dim)|0);
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
$I$(3).indexToPositionWithOffset$J$JA$JA$IA(this.index, this.dimensions, this.min, position);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (dim) {
return $I$(3).indexToPositionWithOffset$J$JA$JA$JA$I(this.index, this.dimensions, this.steps, this.min, dim);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (dim) {
return $I$(3).indexToPositionWithOffset$J$JA$JA$JA$I(this.index, this.dimensions, this.steps, this.min, dim);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
$I$(3).indexToPositionWithOffset$J$JA$JA$FA(this.index, this.dimensions, this.min, position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
$I$(3).indexToPositionWithOffset$J$JA$JA$DA(this.index, this.dimensions, this.min, position);
});

Clazz.newMeth(C$, 'toString', function () {
var l=Clazz.array(Integer.TYPE, [this.dimensions.length]);
this.localize$IA(l);
return $I$(1).printCoordinates$IA(l);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.dimensions[d];
});

Clazz.newMeth(C$, 'dimensions$JA', function (dim) {
for (var d=0; d < this.n; ++d) dim[d]=this.dimensions[d];

});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
