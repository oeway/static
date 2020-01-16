(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),I$=[[0,'net.imglib2.realtransform.inverse.BacktrackingLineSearch']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InvertibleTransformByGradientDescent", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isInverse'],'O',['forwardTransform','net.imglib2.realtransform.inverse.DifferentiableRealTransform','inverseTransform','net.imglib2.realtransform.inverse.BacktrackingLineSearch']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform', function (forwardTransform) {
C$.c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$Z.apply(this, [forwardTransform, false]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$Z', function (forwardTransform, isInverse) {
C$.c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$net_imglib2_realtransform_inverse_BacktrackingLineSearch$Z.apply(this, [forwardTransform, Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform,[forwardTransform]), isInverse]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$net_imglib2_realtransform_inverse_BacktrackingLineSearch$Z', function (forwardTransform, inverseTransform, isInverse) {
;C$.$init$.apply(this);
this.forwardTransform=forwardTransform;
this.inverseTransform=inverseTransform;
this.isInverse=isInverse;
}, 1);

Clazz.newMeth(C$, 'apply$DA$DA', function (p, q) {
if (this.isInverse) this.inverseTransform.iterativeInverse$DA$DA(p, q);
 else this.forwardTransform.apply$DA$DA(p, q);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (p, q) {
if (this.isInverse) {
var pd=Clazz.array(Double.TYPE, [p.numDimensions$()]);
var qd=Clazz.array(Double.TYPE, [p.numDimensions$()]);
p.localize$DA(pd);
this.inverseTransform.iterativeInverse$DA$DA(pd, qd);
q.setPosition$DA(qd);
} else this.forwardTransform.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(p, q);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (p, q) {
if (this.isInverse) this.forwardTransform.apply$DA$DA(p, q);
 else this.inverseTransform.iterativeInverse$DA$DA(p, q);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (p, q) {
if (this.isInverse) this.forwardTransform.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(q, p);
 else {
var pd=Clazz.array(Double.TYPE, [p.numDimensions$()]);
var qd=Clazz.array(Double.TYPE, [p.numDimensions$()]);
q.localize$DA(qd);
this.inverseTransform.iterativeInverse$DA$DA(qd, pd);
p.setPosition$DA(pd);
}});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$Z,[this.forwardTransform, this.isInverse]);
});

Clazz.newMeth(C$, 'inverse$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$Z,[this.forwardTransform, !this.isInverse]);
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.forwardTransform.numSourceDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.forwardTransform.numTargetDimensions$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
