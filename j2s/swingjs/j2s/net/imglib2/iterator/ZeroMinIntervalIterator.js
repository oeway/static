(function(){var P$=Clazz.newPackage("net.imglib2.iterator"),I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ZeroMinIntervalIterator", null, 'net.imglib2.iterator.IntervalIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return $I$(1).indexToPosition$J$JA$JA$I(this.index, this.dimensions, this.steps, d);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
$I$(1).indexToPosition$J$JA$JA(this.index, this.dimensions, position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return ($I$(1).indexToPosition$J$JA$JA$I(this.index, this.dimensions, this.steps, d)|0);
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
$I$(1).indexToPosition$J$JA$IA(this.index, this.dimensions, position);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return $I$(1).indexToPosition$J$JA$JA$I(this.index, this.dimensions, this.steps, d);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
$I$(1).indexToPosition$J$JA$DA(this.index, this.dimensions, position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return $I$(1).indexToPosition$J$JA$JA$I(this.index, this.dimensions, this.steps, d);
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
$I$(1).indexToPosition$J$JA$FA(this.index, this.dimensions, position);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
