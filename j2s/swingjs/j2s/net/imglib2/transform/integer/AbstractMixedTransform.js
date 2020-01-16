(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[[0,'net.imglib2.transform.integer.BoundingBox']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractMixedTransform", null, null, 'net.imglib2.transform.integer.Mixed');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numTargetDimensions']]]

Clazz.newMeth(C$, 'c$$I', function (numTargetDimensions) {
;C$.$init$.apply(this);
this.numTargetDimensions=numTargetDimensions;
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numTargetDimensions;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numTargetDimensions;
});

Clazz.newMeth(C$, 'getTranslation$JA', function (translation) {
Clazz.assert(C$, this, function(){return translation.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) translation[d]=0;

});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
return 0;
});

Clazz.newMeth(C$, 'getComponentZero$ZA', function (zero) {
Clazz.assert(C$, this, function(){return zero.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) zero[d]=false;

});

Clazz.newMeth(C$, 'getComponentZero$I', function (d) {
return false;
});

Clazz.newMeth(C$, 'getComponentMapping$IA', function (component) {
Clazz.assert(C$, this, function(){return component.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) component[d]=d;

});

Clazz.newMeth(C$, 'getComponentMapping$I', function (d) {
return d;
});

Clazz.newMeth(C$, 'getComponentInversion$ZA', function (invert) {
Clazz.assert(C$, this, function(){return invert.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) invert[d]=false;

});

Clazz.newMeth(C$, 'getComponentInversion$I', function (d) {
return false;
});

Clazz.newMeth(C$, ['transform$net_imglib2_transform_integer_BoundingBox','transform$'], function (boundingBox) {
Clazz.assert(C$, this, function(){return boundingBox.numDimensions$() == this.numSourceDimensions$()});
if (this.numSourceDimensions$() == this.numTargetDimensions) {
var tmp=Clazz.array(Long.TYPE, [this.numTargetDimensions]);
boundingBox.corner1$JA(tmp);
this.apply$JA$JA(tmp, boundingBox.corner1);
boundingBox.corner2$JA(tmp);
this.apply$JA$JA(tmp, boundingBox.corner2);
return boundingBox;
}var b=Clazz.new_($I$(1,1).c$$I,[this.numTargetDimensions]);
this.apply$JA$JA(boundingBox.corner1, b.corner1);
this.apply$JA$JA(boundingBox.corner2, b.corner2);
return b;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
