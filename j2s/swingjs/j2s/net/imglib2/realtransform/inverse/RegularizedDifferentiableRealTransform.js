(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RegularizedDifferentiableRealTransform", null, 'net.imglib2.realtransform.inverse.AbstractDifferentiableRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['epsilon'],'O',['dxfm','net.imglib2.realtransform.inverse.DifferentiableRealTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform$D', function (dxfm, epsilon) {
Clazz.super_(C$, this);
this.dxfm=dxfm;
this.epsilon=epsilon;
}, 1);

Clazz.newMeth(C$, 'jacobian$DA', function (x) {
var jac=this.dxfm.jacobian$DA(x);
for (var i=0; i < jac.numSourceDimensions$(); i++) jac.set$D$I$I(this.epsilon + (1 - this.epsilon) * jac.get$I$I(i, i), i, i);

return jac;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.dxfm.numSourceDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.dxfm.numTargetDimensions$();
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.dxfm.apply$DA$DA(source, target);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.dxfm.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, target);
});

Clazz.newMeth(C$, 'copy$', function () {
return this.dxfm.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
