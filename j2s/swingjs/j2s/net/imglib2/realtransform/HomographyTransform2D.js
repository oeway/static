(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),p$1={},I$=[[0,'net.imglib2.util.LinAlgHelpers']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HomographyTransform2D", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m00=1;
this.m01=0;
this.m02=0;
this.m10=0;
this.m11=1;
this.m12=0;
this.m20=0;
this.m21=0;
this.m22=1;
this.i00=1;
this.i01=0;
this.i02=0;
this.i10=0;
this.i11=1;
this.i12=0;
this.i20=0;
this.i21=0;
this.i22=1;
}, 1);

C$.$fields$=[['D',['m00','m01','m02','m10','m11','m12','m20','m21','m22','i00','i01','i02','i10','i11','i12','i20','i21','i22']]]

Clazz.newMeth(C$, 'set$D$D$D$D$D$D$D$D$D', function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
this.m00=m00;
this.m01=m01;
this.m02=m02;
this.m10=m10;
this.m11=m11;
this.m12=m12;
this.m20=m20;
this.m21=m21;
this.m22=m22;
p$1.invert.apply(this, []);
});

Clazz.newMeth(C$, 'invert', function () {
var det=$I$(1).det3x3$D$D$D$D$D$D$D$D$D(this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m20, this.m21, this.m22);
this.i00=(this.m11 * this.m22 - this.m12 * this.m21) / det;
this.i01=(this.m02 * this.m21 - this.m01 * this.m22) / det;
this.i02=(this.m01 * this.m12 - this.m02 * this.m11) / det;
this.i10=(this.m12 * this.m20 - this.m10 * this.m22) / det;
this.i11=(this.m00 * this.m22 - this.m02 * this.m20) / det;
this.i12=(this.m02 * this.m10 - this.m00 * this.m12) / det;
this.i20=(this.m10 * this.m21 - this.m11 * this.m20) / det;
this.i21=(this.m01 * this.m20 - this.m00 * this.m21) / det;
this.i22=(this.m00 * this.m11 - this.m01 * this.m10) / det;
}, p$1);

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && source.length >= 2 }, function(){return "2d homographies can be applied to 2d points only."});
var s=this.m20 * source[0] + this.m21 * source[1] + this.m22;
var t0=this.m00 * source[0] + this.m01 * source[1] + this.m02;
var t1=this.m10 * source[0] + this.m11 * source[1] + this.m12;
target[0]=t0 / s;
target[1]=t1 / s;
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && source.length >= 2 }, function(){return "2d homographies can be applied to 2d points only."});
var s=this.m20 * source[0] + this.m21 * source[1] + this.m22;
var t0=this.m00 * source[0] + this.m01 * source[1] + this.m02;
var t1=this.m10 * source[0] + this.m11 * source[1] + this.m12;
target[0]=(t0 / s);
target[1]=(t1 / s);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 2 && source.numDimensions$() >= 2 }, function(){return "2d homographies can be applied to 2d points only."});
var s=this.m20 * source.getDoublePosition$I(0) + this.m21 * source.getDoublePosition$I(1) + this.m22;
var t0=this.m00 * source.getDoublePosition$I(0) + this.m01 * source.getDoublePosition$I(1) + this.m02;
var t1=this.m10 * source.getDoublePosition$I(0) + this.m11 * source.getDoublePosition$I(1) + this.m12;
target.setPosition$D$I(t0 / s, 0);
target.setPosition$D$I(t1 / s, 1);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && source.length >= 2 }, function(){return "2d homographies can be applied to 2d points only."});
var s=this.i20 * target[0] + this.i21 * target[1] + this.i22;
var t0=this.i00 * target[0] + this.i01 * target[1] + this.i02;
var t1=this.i10 * target[0] + this.i11 * target[1] + this.i12;
source[0]=t0 / s;
source[1]=t1 / s;
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && source.length >= 2 }, function(){return "2d homographies can be applied to 2d points only."});
var s=this.i20 * target[0] + this.i21 * target[1] + this.i22;
var t0=this.i00 * target[0] + this.i01 * target[1] + this.i02;
var t1=this.i10 * target[0] + this.i11 * target[1] + this.i12;
source[0]=(t0 / s);
source[1]=(t1 / s);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 2 && source.numDimensions$() >= 2 }, function(){return "2d homographies can be applied to 2d points only."});
var s=this.i20 * target.getDoublePosition$I(0) + this.i21 * target.getDoublePosition$I(1) + this.i22;
var t0=this.i00 * target.getDoublePosition$I(0) + this.i01 * target.getDoublePosition$I(1) + this.i02;
var t1=this.i10 * target.getDoublePosition$I(0) + this.i11 * target.getDoublePosition$I(1) + this.i12;
source.setPosition$D$I(t0 / s, 0);
source.setPosition$D$I(t1 / s, 1);
});

Clazz.newMeth(C$, 'set$net_imglib2_realtransform_HomographyTransform2D', function (m) {
this.m00=m.m00;
this.m01=m.m01;
this.m02=m.m02;
this.m10=m.m10;
this.m11=m.m11;
this.m12=m.m12;
this.m20=m.m20;
this.m21=m.m21;
this.m22=m.m22;
this.i00=m.i00;
this.i01=m.i01;
this.i02=m.i02;
this.i10=m.i10;
this.i11=m.i11;
this.i12=m.i12;
this.i20=m.i20;
this.i21=m.i21;
this.i22=m.i22;
});

Clazz.newMeth(C$, 'copy$', function () {
var m=Clazz.new_(C$);
m.m00=this.m00;
m.m01=this.m01;
m.m02=this.m02;
m.m10=this.m10;
m.m11=this.m11;
m.m12=this.m12;
m.m20=this.m20;
m.m21=this.m21;
m.m22=this.m22;
m.i00=this.i00;
m.i01=this.i01;
m.i02=this.i02;
m.i10=this.i10;
m.i11=this.i11;
m.i12=this.i12;
m.i20=this.i20;
m.i21=this.i21;
m.i22=this.i22;
return m;
});

Clazz.newMeth(C$, 'toString', function () {
return "[[ " + new Double(this.m00).toString() + " " + new Double(this.m01).toString() + " " + new Double(this.m02).toString() + " ], " + "[ " + new Double(this.m10).toString() + " " + new Double(this.m11).toString() + " " + new Double(this.m12).toString() + " ], " + "[ " + new Double(this.m20).toString() + " " + new Double(this.m21).toString() + " " + new Double(this.m22).toString() + " ]]" ;
});

Clazz.newMeth(C$, 'inverse$', function () {
var m=Clazz.new_(C$);
m.m00=this.i00;
m.m01=this.i01;
m.m02=this.i02;
m.m10=this.i00;
m.m11=this.i11;
m.m12=this.i12;
m.m20=this.i20;
m.m21=this.i21;
m.m22=this.i22;
m.i00=this.m00;
m.i01=this.m01;
m.i02=this.m02;
m.i10=this.m00;
m.i11=this.m11;
m.i12=this.m12;
m.i20=this.m20;
m.i21=this.m21;
m.i22=this.m22;
return m;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 2;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
