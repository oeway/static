(function(){var P$=Clazz.newPackage("net.imglib2.roi.boundary"),I$=[[0,'net.imglib2.type.logic.BoolType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BoundaryRandomAccess4", null, 'net.imglib2.converter.AbstractConvertedRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['min','long[]','+max','type','net.imglib2.type.logic.BoolType']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (sourceInterval) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[sourceInterval.randomAccess$()]);C$.$init$.apply(this);
this.n=sourceInterval.numDimensions$();
this.min=Clazz.array(Long.TYPE, [this.n]);
this.max=Clazz.array(Long.TYPE, [this.n]);
sourceInterval.min$JA(this.min);
sourceInterval.max$JA(this.max);
this.type=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_boundary_BoundaryRandomAccess4', function (ba) {
;C$.superclazz.c$$net_imglib2_RandomAccess.apply(this,[ba.source.copyRandomAccess$()]);C$.$init$.apply(this);
this.n=ba.n;
this.min=ba.min;
this.max=ba.max;
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
for (var d=0; d < this.n; ++d) {
this.bck$I(d);
if (!this.source.get$().get$()) {
this.fwd$I(d);
this.type.set$Z(true);
return this.type;
}this.fwd$I(d);
this.fwd$I(d);
if (!this.source.get$().get$()) {
this.bck$I(d);
this.type.set$Z(true);
return this.type;
}this.bck$I(d);
}
}this.type.set$Z(false);
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_roi_boundary_BoundaryRandomAccess4,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
