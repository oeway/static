(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),I$=[[0,'net.imglib2.realtransform.inverse.RealTransformFiniteDerivatives','net.imglib2.realtransform.inverse.InverseRealTransformGradientDescent','net.imglib2.realtransform.InverseRealTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WrappedIterativeInvertibleRealTransform", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['forwardTransform','<T extends net.imglib2.realtransform.RealTransform>','differentiableTransform','net.imglib2.realtransform.inverse.DifferentiableRealTransform','inverseTransform','net.imglib2.realtransform.inverse.InverseRealTransformGradientDescent']]]

Clazz.newMeth(C$, 'c$$TT', function (xfm) {
;C$.$init$.apply(this);
this.forwardTransform=xfm;
if (Clazz.instanceOf(xfm, "net.imglib2.realtransform.inverse.DifferentiableRealTransform")) {
this.differentiableTransform=xfm;
} else {
this.differentiableTransform=Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_RealTransform,[xfm]);
}this.inverseTransform=Clazz.new_($I$(2,1).c$$I$net_imglib2_realtransform_inverse_DifferentiableRealTransform,[xfm.numSourceDimensions$(), this.differentiableTransform]);
}, 1);

Clazz.newMeth(C$, 'c$$TT$net_imglib2_realtransform_inverse_InverseRealTransformGradientDescent', function (xfm, inverse) {
;C$.$init$.apply(this);
this.forwardTransform=xfm;
if (Clazz.instanceOf(xfm, "net.imglib2.realtransform.inverse.DifferentiableRealTransform")) {
this.differentiableTransform=xfm;
} else {
this.differentiableTransform=Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_RealTransform,[xfm]);
}this.inverseTransform=inverse;
}, 1);

Clazz.newMeth(C$, 'getTransform$', function () {
return this.forwardTransform;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.forwardTransform.numSourceDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.forwardTransform.numTargetDimensions$();
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.forwardTransform.apply$DA$DA(source, target);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.forwardTransform.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, target);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
this.inverseTransform.apply$DA$DA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
this.inverseTransform.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(target, source);
});

Clazz.newMeth(C$, 'inverse$', function () {
return Clazz.new_($I$(3,1).c$$net_imglib2_realtransform_InvertibleRealTransform,[this]);
});

Clazz.newMeth(C$, 'getOptimzer$', function () {
return this.inverseTransform;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$TT$net_imglib2_realtransform_inverse_InverseRealTransformGradientDescent,[this.forwardTransform.copy$(), this.inverseTransform.copy$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
