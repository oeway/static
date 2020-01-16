(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer.shear"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractShearTransform", null, null, ['net.imglib2.transform.InvertibleTransform', 'net.imglib2.transform.integer.BoundingBoxTransform']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['nDim','shearDimension','referenceDimension'],'O',['inverse','net.imglib2.transform.integer.shear.AbstractShearTransform']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (nDim, shearDimension, referenceDimension) {
C$.c$$I$I$I$net_imglib2_transform_integer_shear_AbstractShearTransform.apply(this, [nDim, shearDimension, referenceDimension, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$net_imglib2_transform_integer_shear_AbstractShearTransform', function (nDim, shearDimension, referenceDimension, inverse) {
;C$.$init$.apply(this);
this.nDim=nDim;
this.shearDimension=shearDimension;
this.referenceDimension=referenceDimension;
this.inverse=inverse;
}, 1);

Clazz.newMeth(C$, 'getReferenceDimension$', function () {
return this.referenceDimension;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numDimensions$();
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.nDim;
});

Clazz.newMeth(C$, 'getShearDimension$', function () {
return this.shearDimension;
});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
this.inverse.apply$JA$JA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
this.inverse.apply$IA$IA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
this.inverse.apply$net_imglib2_Localizable$net_imglib2_Positionable(target, source);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
