(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),I$=[[0,'net.imglib2.realtransform.AffineTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealTransformFiniteDerivatives", null, 'net.imglib2.realtransform.inverse.AbstractDifferentiableRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['step'],'O',['transform','net.imglib2.realtransform.RealTransform','jacobian','net.imglib2.realtransform.AffineTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransform', function (transform) {
Clazz.super_(C$, this);
this.transform=transform;
var srcD=transform.numSourceDimensions$();
var tgtD=transform.numTargetDimensions$();
this.jacobian=Clazz.new_($I$(1,1).c$$I,[srcD > tgtD ? srcD : tgtD]);
this.step=0.01;
}, 1);

Clazz.newMeth(C$, 'setStep$D', function (step) {
this.step=step;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.transform.numSourceDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.transform.numTargetDimensions$();
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.transform.apply$DA$DA(source, target);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.transform.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, target);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_RealTransform,[this.transform]);
});

Clazz.newMeth(C$, 'jacobian$DA', function (x) {
var ndims=this.numSourceDimensions$();
var p=Clazz.array(Double.TYPE, [ndims]);
var q=Clazz.array(Double.TYPE, [ndims]);
var qc=Clazz.array(Double.TYPE, [ndims]);
var newjac=Clazz.array(Double.TYPE, [ndims, ndims + 1]);
this.transform.apply$DA$DA(x, qc);
for (var i=0; i < ndims; i++) {
for (var j=0; j < ndims; j++) if (j == i) p[j]=x[j] + this.step;
 else p[j]=x[j];

this.transform.apply$DA$DA(p, q);
for (var j=0; j < ndims; j++) {
newjac[j][i]=(q[j] - qc[j]) / this.step;
}
}
this.jacobian.set$DAA(newjac);
return this.jacobian;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
