(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ExplicitInvertibleRealTransform", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['forwardTransform','net.imglib2.realtransform.RealTransform','+inverseTransform','inverse','net.imglib2.realtransform.ExplicitInvertibleRealTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransform$net_imglib2_realtransform_RealTransform', function (forwardTransform, inverseTransform) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return forwardTransform.numTargetDimensions$() == inverseTransform.numSourceDimensions$() && forwardTransform.numSourceDimensions$() == inverseTransform.numTargetDimensions$() }, function(){return "number of target and source dimensions not compatible"});
this.forwardTransform=forwardTransform;
this.inverseTransform=inverseTransform;
this.inverse=Clazz.new_(C$.c$$net_imglib2_realtransform_ExplicitInvertibleRealTransform,[this]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_ExplicitInvertibleRealTransform', function (inverse) {
;C$.$init$.apply(this);
this.forwardTransform=inverse.inverseTransform;
this.inverseTransform=inverse.forwardTransform;
this.inverse=inverse;
}, 1);

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
return this.inverse;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_RealTransform$net_imglib2_realtransform_RealTransform,[this.forwardTransform.copy$(), this.inverseTransform.copy$()]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
