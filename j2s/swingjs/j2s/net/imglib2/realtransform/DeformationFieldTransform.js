(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.view.Views','net.imglib2.interpolation.randomaccess.NLinearInterpolatorFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DeformationFieldTransform", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numDim'],'O',['defFieldReal','net.imglib2.RealRandomAccessible']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleInterval', function (def) {
C$.c$$net_imglib2_RealRandomAccessible.apply(this, [$I$(1).interpolate$TF$net_imglib2_interpolation_InterpolatorFactory($I$(1).extendZero$TF(def), Clazz.new_(1,{T:"Object"},$I$(2,1)))]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessible', function (defFieldReal) {
;C$.$init$.apply(this);
this.defFieldReal=defFieldReal;
this.numDim=defFieldReal.numDimensions$() - 1;
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numDim;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numDim;
});

Clazz.newMeth(C$, 'getDefFieldAcess$', function () {
return this.defFieldReal;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
var defFieldAccess=this.defFieldReal.realRandomAccess$().copyRealRandomAccess$();
for (var d=0; d < this.numDim; d++) defFieldAccess.setPosition$D$I(source[d], d);

defFieldAccess.setPosition$D$I(0.0, this.numDim);
System.arraycopy$O$I$O$I$I(source, 0, target, 0, this.numDim);
for (var d=0; d < this.numDim; d++) {
target[d] += defFieldAccess.get$().getRealDouble$();
defFieldAccess.fwd$I(this.numDim);
}
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
var defFieldAccess=this.defFieldReal.realRandomAccess$().copyRealRandomAccess$();
for (var d=0; d < this.numDim; d++) defFieldAccess.setPosition$D$I(source.getDoublePosition$I(d), d);

defFieldAccess.setPosition$D$I(0.0, this.numDim);
var newpos=0;
for (var d=0; d < this.numDim; d++) {
newpos=source.getDoublePosition$I(d) + defFieldAccess.get$().getRealDouble$();
target.setPosition$D$I(newpos, d);
defFieldAccess.fwd$I(this.numDim);
}
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RealRandomAccessible,[this.defFieldReal]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
