(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InverseRealTransform", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.InvertibleRealTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_InvertibleRealTransform', function (transform) {
;C$.$init$.apply(this);
this.inverse=transform;
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.inverse.numTargetDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.inverse.numSourceDimensions$();
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.inverse.applyInverse$DA$DA(target, source);
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
this.inverse.applyInverse$FA$FA(target, source);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.inverse.applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable(target, source);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
this.inverse.apply$DA$DA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
this.inverse.apply$FA$FA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
this.inverse.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(target, source);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_InvertibleRealTransform,[this.inverse.copy$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
