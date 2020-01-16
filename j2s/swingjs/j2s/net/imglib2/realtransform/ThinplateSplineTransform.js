(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'jitk.spline.ThinPlateR2LogRSplineKernelTransform','net.imglib2.RealPoint','net.imglib2.realtransform.AffineTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThinplateSplineTransform", null, 'net.imglib2.realtransform.inverse.AbstractDifferentiableRealTransform', 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['tps','jitk.spline.ThinPlateR2LogRSplineKernelTransform','a','double[]','+b','+tmp','rpa','net.imglib2.RealPoint','estimateXfm','double[]','jacobian','net.imglib2.realtransform.AffineTransform']]]

Clazz.newMeth(C$, 'init$DAA$DAA', function (p, q) {
Clazz.assert(C$, this, function(){return p.length == q.length});
var tps=Clazz.new_($I$(1,1).c$$I$DAA$DAA,[p.length, p, q]);
return tps;
}, 1);

Clazz.newMeth(C$, 'c$$jitk_spline_ThinPlateR2LogRSplineKernelTransform', function (tps) {
Clazz.super_(C$, this);
this.tps=tps;
this.a=Clazz.array(Double.TYPE, [tps.getNumDims$()]);
this.b=Clazz.array(Double.TYPE, [this.a.length]);
this.tmp=Clazz.array(Double.TYPE, [this.a.length]);
this.rpa=$I$(2).wrap$DA(this.a);
this.estimateXfm=Clazz.array(Double.TYPE, [tps.getNumDims$()]);
}, 1);

Clazz.newMeth(C$, 'c$$DAA$DAA', function (p, q) {
C$.c$$jitk_spline_ThinPlateR2LogRSplineKernelTransform.apply(this, [C$.init$DAA$DAA(p, q)]);
}, 1);

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
if (source === target ) {
System.arraycopy$O$I$O$I$I(source, 0, this.tmp, 0, source.length);
this.tps.apply$DA$DA(this.tmp, target);
} else {
this.tps.apply$DA$DA(source, target);
}});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.rpa.setPosition$net_imglib2_RealLocalizable(source);
this.tps.apply$DA$DA(this.a, this.b);
for (var d=0; d < this.a.length; ++d) target.setPosition$D$I(this.b[d], d);

});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$jitk_spline_ThinPlateR2LogRSplineKernelTransform,[this.tps]);
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.tps.getNumDims$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.tps.getNumDims$();
});

Clazz.newMeth(C$, 'jacobian$DA', function (x) {
var jac=this.tps.jacobian$DA(x);
var jflat=Clazz.array(Double.TYPE, [x.length * (x.length + 1)]);
var k=0;
for (var i=0; i < x.length; i++) for (var j=0; j < (x.length + 1); j++) if (j < x.length) jflat[k++]=jac[i][j];
 else k++;


this.jacobian=Clazz.new_($I$(3,1).c$$I,[x.length]);
this.jacobian.set$DA(jflat);
return this.jacobian;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
