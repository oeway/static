(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer.shear"),I$=[[0,'net.imglib2.transform.integer.shear.InverseShearTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ShearTransform", null, 'net.imglib2.transform.integer.shear.AbstractShearTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (nDim, shearDimension, referenceDimension) {
;C$.superclazz.c$$I$I$I.apply(this,[nDim, shearDimension, referenceDimension]);C$.$init$.apply(this);
this.inverse=Clazz.new_($I$(1,1).c$$I$I$I$net_imglib2_transform_integer_shear_AbstractShearTransform,[nDim, shearDimension, referenceDimension, this]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$net_imglib2_transform_integer_shear_AbstractShearTransform', function (nDim, shearDimension, referenceDimension, inverse) {
;C$.superclazz.c$$I$I$I$net_imglib2_transform_integer_shear_AbstractShearTransform.apply(this,[nDim, shearDimension, referenceDimension, inverse]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.nDim && target.length >= this.nDim });
System.arraycopy$O$I$O$I$I(source, 0, target, 0, source.length);
target[this.shearDimension]+=target[this.referenceDimension];
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.nDim && target.length >= this.nDim });
System.arraycopy$O$I$O$I$I(source, 0, target, 0, source.length);
target[this.shearDimension]+=target[this.referenceDimension];
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.nDim && target.numDimensions$() >= this.nDim });
target.setPosition$net_imglib2_Localizable(source);
target.setPosition$J$I(source.getLongPosition$I(this.shearDimension) + source.getLongPosition$I(this.referenceDimension), this.shearDimension);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$I$I$I,[this.nDim, this.shearDimension, this.referenceDimension]);
});

Clazz.newMeth(C$, 'getShear$', function () {
var shear=Clazz.array(Long.TYPE, [this.nDim]);
shear[this.shearDimension]=1;
return shear;
});

Clazz.newMeth(C$, ['transform$net_imglib2_transform_integer_BoundingBox','transform$'], function (bb) {
bb.orderMinMax$();
var c=bb.corner2;
var diff=c[this.referenceDimension] - bb.corner1[this.referenceDimension];
c[this.shearDimension]+=diff;
return bb;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
