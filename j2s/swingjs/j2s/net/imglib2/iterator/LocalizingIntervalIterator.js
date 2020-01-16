(function(){var P$=Clazz.newPackage("net.imglib2.iterator"),I$=[[0,'net.imglib2.util.Util','net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LocalizingIntervalIterator", null, 'net.imglib2.iterator.IntervalIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['position','long[]']]]

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
this.position=Clazz.array(Long.TYPE, [this.n]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (dimensions) {
C$.c$$JA.apply(this, [$I$(1).int2long$IA(dimensions)]);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (min, max) {
;C$.superclazz.c$$JA$JA.apply(this,[min, max]);C$.$init$.apply(this);
this.position=Clazz.array(Long.TYPE, [this.n]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$IA$IA', function (min, max) {
C$.c$$JA$JA.apply(this, [$I$(1).int2long$IA(min), $I$(1).int2long$IA(max)]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
this.position=Clazz.array(Long.TYPE, [this.n]);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'fwd$', function () {
++this.index;
for (var d=0; d < this.n; ++d) {
if (++this.position[d] > this.max[d]) this.position[d]=this.min[d];
 else break;
}
});

Clazz.newMeth(C$, 'jumpFwd$J', function (i) {
this.index+=i;
$I$(2).indexToPositionWithOffset$J$JA$JA$JA(this.index, this.dimensions, this.min, this.position);
});

Clazz.newMeth(C$, 'reset$', function () {
this.index=-1;
this.position[0]=this.min[0] - 1;
for (var d=1; d < this.n; ++d) this.position[d]=this.min[d];

});

Clazz.newMeth(C$, 'localize$FA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$DA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'localize$IA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=(this.position[d]|0);

});

Clazz.newMeth(C$, 'localize$JA', function (pos) {
for (var d=0; d < this.n; ++d) pos[d]=this.position[d];

});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.position[d];
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.position[d];
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return (this.position[d]|0);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.position[d];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
