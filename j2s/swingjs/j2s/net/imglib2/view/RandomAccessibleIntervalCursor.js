(function(){var P$=Clazz.newPackage("net.imglib2.view"),p$1={},I$=[[0,'net.imglib2.util.IntervalIndexer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessibleIntervalCursor", null, 'net.imglib2.AbstractInterval', 'net.imglib2.Cursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['index','maxIndex','maxIndexOnLine'],'O',['randomAccess','net.imglib2.RandomAccess','dimensions','long[]','+tmp']]]

Clazz.newMeth(C$, ['c$$TI'], function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
this.randomAccess=interval.randomAccess$();
this.dimensions=Clazz.array(Long.TYPE, [this.n]);
this.dimensions$JA(this.dimensions);
this.tmp=Clazz.array(Long.TYPE, [this.n]);
var size=this.dimensions[0];
for (var d=1; d < this.n; ++d) size*=this.dimensions[d];

this.maxIndex=size - 1;
this.reset$();
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_view_RandomAccessibleIntervalCursor'], function (cursor) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[cursor]);C$.$init$.apply(this);
this.randomAccess=cursor.randomAccess.copyRandomAccess$();
this.dimensions=cursor.dimensions.clone$();
this.tmp=Clazz.array(Long.TYPE, [this.n]);
this.index=cursor.index;
this.maxIndex=cursor.maxIndex;
this.maxIndexOnLine=cursor.maxIndexOnLine;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.randomAccess.get$();
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
this.index+=steps;
var l=(this.index/this.dimensions[0]|0);
this.maxIndexOnLine=(l < 0) ? (l * this.dimensions[0]) : ((1 + l) * this.dimensions[0] - 1);
$I$(1).indexToPositionWithOffset$J$JA$JA$JA(this.index, this.dimensions, this.min, this.tmp);
this.randomAccess.setPosition$JA(this.tmp);
});

Clazz.newMeth(C$, 'fwd$', function () {
if (++this.index > this.maxIndexOnLine) p$1.nextLine.apply(this, []);
 else this.randomAccess.fwd$I(0);
});

Clazz.newMeth(C$, 'nextLine', function () {
this.randomAccess.setPosition$J$I(this.min[0], 0);
this.maxIndexOnLine+=this.dimensions[0];
for (var d=1; d < this.n; ++d) {
this.randomAccess.fwd$I(d);
if (this.randomAccess.getLongPosition$I(d) > this.max[d]) this.randomAccess.setPosition$J$I(this.min[d], d);
 else break;
}
}, p$1);

Clazz.newMeth(C$, 'reset$', function () {
this.index=-1;
this.maxIndexOnLine=this.dimensions[0] - 1;
this.randomAccess.setPosition$JA(this.min);
this.randomAccess.bck$I(0);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.index < this.maxIndex;
});

Clazz.newMeth(C$, 'next$', function () {
this.fwd$();
return this.get$();
});

Clazz.newMeth(C$, 'remove$', function () {
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_view_RandomAccessibleIntervalCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'localize$FA', function (position) {
this.randomAccess.localize$FA(position);
});

Clazz.newMeth(C$, 'localize$DA', function (position) {
this.randomAccess.localize$DA(position);
});

Clazz.newMeth(C$, 'getFloatPosition$I', function (d) {
return this.randomAccess.getFloatPosition$I(d);
});

Clazz.newMeth(C$, 'getDoublePosition$I', function (d) {
return this.randomAccess.getDoublePosition$I(d);
});

Clazz.newMeth(C$, 'localize$IA', function (position) {
this.randomAccess.localize$IA(position);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
this.randomAccess.localize$JA(position);
});

Clazz.newMeth(C$, 'getIntPosition$I', function (d) {
return this.randomAccess.getIntPosition$I(d);
});

Clazz.newMeth(C$, 'getLongPosition$I', function (d) {
return this.randomAccess.getLongPosition$I(d);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
