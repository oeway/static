(function(){var P$=Clazz.newPackage("net.imglib2.roi.boundary"),I$=[[0,'java.util.Arrays','net.imglib2.iterator.IntervalIterator','net.imglib2.FinalInterval','net.imglib2.type.logic.BoolType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoundaryRandomAccess8", null, 'net.imglib2.converter.AbstractConvertedRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['min','long[]','+max','offsets','long[][]','+resets','type','net.imglib2.type.logic.BoolType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (sourceInterval) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[sourceInterval.randomAccess$()]);C$.$init$.apply(this);
this.n=sourceInterval.numDimensions$();
this.min=Clazz.array(Long.TYPE, [this.n]);
this.max=Clazz.array(Long.TYPE, [this.n]);
sourceInterval.min$JA(this.min);
sourceInterval.max$JA(this.max);
this.offsets=Clazz.array(Long.TYPE, [(Math.pow(3, this.n)|0) - 1, null]);
this.resets=Clazz.array(Long.TYPE, [this.offsets.length, null]);
var omin=Clazz.array(Long.TYPE, [this.n]);
$I$(1).fill$JA$J(omin, -1);
var omax=Clazz.array(Long.TYPE, [this.n]);
$I$(1).fill$JA$J(omax, 1);
var idx=Clazz.new_($I$(2,1).c$$net_imglib2_Interval,[Clazz.new_($I$(3,1).c$$JA$JA,[omin, omax])]);
var center=((this.offsets.length - 1)/2|0);
var pos=Clazz.array(Long.TYPE, [this.n]);
for (var i=0; i < this.offsets.length; ++i) {
this.offsets[i]=Clazz.array(Long.TYPE, [this.n]);
this.resets[i]=Clazz.array(Long.TYPE, [this.n]);
if (i == center) idx.fwd$();
idx.fwd$();
idx.localize$JA(this.offsets[i]);
for (var d=0; d < this.n; ++d) {
this.offsets[i][d]-=pos[d];
pos[d]+=this.offsets[i][d];
this.resets[i][d]=-pos[d];
}
}
this.type=Clazz.new_($I$(4,1));
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_boundary_BoundaryRandomAccess8', function (ba) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[ba.source.copyRandomAccess$()]);C$.$init$.apply(this);
this.n=ba.n;
this.min=ba.min;
this.max=ba.max;
this.offsets=ba.offsets;
this.resets=ba.resets;
this.type=ba.type.copy$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
if (this.source.get$().get$()) {
for (var d=0; d < this.n; ++d) {
var pos=this.getLongPosition$I(d);
if (pos <= this.min[d] || pos >= this.max[d] ) {
this.type.set$Z(true);
return this.type;
}}
for (var i=0; i < this.offsets.length; ++i) {
this.source.move$JA(this.offsets[i]);
if (!this.source.get$().get$()) {
this.source.move$JA(this.resets[i]);
this.type.set$Z(true);
return this.type;
}}
this.source.move$JA(this.resets[this.resets.length - 1]);
}this.type.set$Z(false);
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_roi_boundary_BoundaryRandomAccess8,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
