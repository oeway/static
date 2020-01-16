(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,['net.imglib2.realtransform.AffineTransform3D','.AffineMatrix3D'],'net.imglib2.RealPoint','net.imglib2.realtransform.AffineGet','net.imglib2.util.Util','net.imglib2.FinalRealInterval','net.imglib2.realtransform.RealViewsSimplifyUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AffineTransform3D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['net.imglib2.realtransform.AffineGet', 'net.imglib2.realtransform.AffineSet', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);
C$.$classes$=[['AffineMatrix3D',28]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.realtransform.AffineTransform3D.AffineMatrix3D','d0','net.imglib2.RealPoint','+d1','+d2','ds','net.imglib2.RealPoint[]','inverse','net.imglib2.realtransform.AffineTransform3D']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D', function (a) {
;C$.$init$.apply(this);
this.a=a;
this.d0=Clazz.new_($I$(2,1).c$$I,[3]);
this.d1=Clazz.new_($I$(2,1).c$$I,[3]);
this.d2=Clazz.new_($I$(2,1).c$$I,[3]);
this.ds=Clazz.array($I$(2), -1, [this.d0, this.d1, this.d2]);
this.updateDs$();
this.inverse=Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform3D,[this]);
this.invert$();
this.inverse.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_AffineTransform3D', function (inverse) {
;C$.$init$.apply(this);
this.inverse=inverse;
this.a=Clazz.new_($I$(1,1));
this.d0=Clazz.new_($I$(2,1).c$$I,[3]);
this.d1=Clazz.new_($I$(2,1).c$$I,[3]);
this.d2=Clazz.new_($I$(2,1).c$$I,[3]);
this.ds=Clazz.array($I$(2), -1, [this.d0, this.d1, this.d2]);
}, 1);

Clazz.newMeth(C$, 'invert$', function () {
var det=this.a.det$();
if (det == 0 ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is singular."]);
var idet=1.0 / det;
this.inverse.a.m00=(this.a.m11 * this.a.m22 - this.a.m12 * this.a.m21) * idet;
this.inverse.a.m01=(this.a.m02 * this.a.m21 - this.a.m01 * this.a.m22) * idet;
this.inverse.a.m02=(this.a.m01 * this.a.m12 - this.a.m02 * this.a.m11) * idet;
this.inverse.a.m10=(this.a.m12 * this.a.m20 - this.a.m10 * this.a.m22) * idet;
this.inverse.a.m11=(this.a.m00 * this.a.m22 - this.a.m02 * this.a.m20) * idet;
this.inverse.a.m12=(this.a.m02 * this.a.m10 - this.a.m00 * this.a.m12) * idet;
this.inverse.a.m20=(this.a.m10 * this.a.m21 - this.a.m11 * this.a.m20) * idet;
this.inverse.a.m21=(this.a.m01 * this.a.m20 - this.a.m00 * this.a.m21) * idet;
this.inverse.a.m22=(this.a.m00 * this.a.m11 - this.a.m01 * this.a.m10) * idet;
this.inverse.a.m03=-this.inverse.a.m00 * this.a.m03 - this.inverse.a.m01 * this.a.m13 - this.inverse.a.m02 * this.a.m23;
this.inverse.a.m13=-this.inverse.a.m10 * this.a.m03 - this.inverse.a.m11 * this.a.m13 - this.inverse.a.m12 * this.a.m23;
this.inverse.a.m23=-this.inverse.a.m20 * this.a.m03 - this.inverse.a.m21 * this.a.m13 - this.inverse.a.m22 * this.a.m23;
});

Clazz.newMeth(C$, 'updateDs$', function () {
this.d0.setPosition$D$I(this.a.m00, 0);
this.d0.setPosition$D$I(this.a.m10, 1);
this.d0.setPosition$D$I(this.a.m20, 2);
this.d1.setPosition$D$I(this.a.m01, 0);
this.d1.setPosition$D$I(this.a.m11, 1);
this.d1.setPosition$D$I(this.a.m21, 2);
this.d2.setPosition$D$I(this.a.m02, 0);
this.d2.setPosition$D$I(this.a.m12, 1);
this.d2.setPosition$D$I(this.a.m22, 2);
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "3d affine transformations can be applied to 3d coordinates only."});
var t0=source[0] * this.a.m00 + source[1] * this.a.m01 + source[2] * this.a.m02 + this.a.m03;
var t1=source[0] * this.a.m10 + source[1] * this.a.m11 + source[2] * this.a.m12 + this.a.m13;
target[2]=source[0] * this.a.m20 + source[1] * this.a.m21 + source[2] * this.a.m22 + this.a.m23;
target[0]=t0;
target[1]=t1;
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "3d affine transformations can be applied to 3d coordinates only."});
var t0=(source[0] * this.a.m00 + source[1] * this.a.m01 + source[2] * this.a.m02 + this.a.m03);
var t1=(source[0] * this.a.m10 + source[1] * this.a.m11 + source[2] * this.a.m12 + this.a.m13);
target[2]=(source[0] * this.a.m20 + source[1] * this.a.m21 + source[2] * this.a.m22 + this.a.m23);
target[0]=t0;
target[1]=t1;
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 3 && target.numDimensions$() >= 3 }, function(){return "3d affine transformations can be applied to 3d coordinates only."});
var s0=source.getDoublePosition$I(0);
var s1=source.getDoublePosition$I(1);
var s2=source.getDoublePosition$I(2);
target.setPosition$D$I(s0 * this.a.m00 + s1 * this.a.m01 + s2 * this.a.m02 + this.a.m03, 0);
target.setPosition$D$I(s0 * this.a.m10 + s1 * this.a.m11 + s2 * this.a.m12 + this.a.m13, 1);
target.setPosition$D$I(s0 * this.a.m20 + s1 * this.a.m21 + s2 * this.a.m22 + this.a.m23, 2);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "3d affine transformations can be applied to 3d coordinates only."});
var s0=target[0] * this.inverse.a.m00 + target[1] * this.inverse.a.m01 + target[2] * this.inverse.a.m02 + this.inverse.a.m03;
var s1=target[0] * this.inverse.a.m10 + target[1] * this.inverse.a.m11 + target[2] * this.inverse.a.m12 + this.inverse.a.m13;
source[2]=target[0] * this.inverse.a.m20 + target[1] * this.inverse.a.m21 + target[2] * this.inverse.a.m22 + this.inverse.a.m23;
source[0]=s0;
source[1]=s1;
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "3d affine transformations can be applied to 3d coordinates only."});
var s0=(target[0] * this.inverse.a.m00 + target[1] * this.inverse.a.m01 + target[2] * this.inverse.a.m02 + this.inverse.a.m03);
var s1=(target[0] * this.inverse.a.m10 + target[1] * this.inverse.a.m11 + target[2] * this.inverse.a.m12 + this.inverse.a.m13);
source[2]=(target[0] * this.inverse.a.m20 + target[1] * this.inverse.a.m21 + target[2] * this.inverse.a.m22 + this.inverse.a.m23);
source[0]=s0;
source[1]=s1;
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 3 && target.numDimensions$() >= 3 }, function(){return "3d affine transformations can be applied to 3d coordinates only."});
var t0=target.getDoublePosition$I(0);
var t1=target.getDoublePosition$I(1);
var t2=target.getDoublePosition$I(2);
source.setPosition$D$I(t0 * this.inverse.a.m00 + t1 * this.inverse.a.m01 + t2 * this.inverse.a.m02 + this.inverse.a.m03, 0);
source.setPosition$D$I(t0 * this.inverse.a.m10 + t1 * this.inverse.a.m11 + t2 * this.inverse.a.m12 + this.inverse.a.m13, 1);
source.setPosition$D$I(t0 * this.inverse.a.m20 + t1 * this.inverse.a.m21 + t2 * this.inverse.a.m22 + this.inverse.a.m23, 2);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_AffineTransform3D','concatenatenull'], function (affine) {
this.a.concatenate$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D(affine.a);
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_AffineGet','concatenate$TA'], function (affine) {
Clazz.assert(C$, this, function(){return affine.numSourceDimensions$() >= 3}, function(){return "Only >=3d affine transformations can be concatenated to a 3d affine transformation."});
this.a.concatenate$DA(affine.getRowPackedCopy$());
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, 'copy$', function () {
var ma=Clazz.new_($I$(1,1));
ma.m00=this.a.m00;
ma.m10=this.a.m10;
ma.m20=this.a.m20;
ma.m01=this.a.m01;
ma.m11=this.a.m11;
ma.m21=this.a.m21;
ma.m02=this.a.m02;
ma.m12=this.a.m12;
ma.m22=this.a.m22;
ma.m03=this.a.m03;
ma.m13=this.a.m13;
ma.m23=this.a.m23;
return Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D,[ma]);
});

Clazz.newMeth(C$, 'd$I', function (d) {
return this.ds[d];
});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < 3  && column >= 0  && column < 4 }, function(){return "Index out of bounds, a 3d affine matrix is a 3x4 matrix."});
switch (row) {
case 0:
switch (column) {
case 0:
return this.a.m00;
case 1:
return this.a.m01;
case 2:
return this.a.m02;
default:
return this.a.m03;
}
case 1:
switch (column) {
case 0:
return this.a.m10;
case 1:
return this.a.m11;
case 2:
return this.a.m12;
default:
return this.a.m13;
}
default:
switch (column) {
case 0:
return this.a.m20;
case 1:
return this.a.m21;
case 2:
return this.a.m22;
default:
return this.a.m23;
}
}
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
return Clazz.array(Double.TYPE, -1, [this.a.m00, this.a.m01, this.a.m02, this.a.m03, this.a.m10, this.a.m11, this.a.m12, this.a.m13, this.a.m20, this.a.m21, this.a.m22, this.a.m23]);
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(3),['copy$','d$I','get$I$I','getRowPackedCopy$','inverse$']);
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(3),['copy$','d$I','get$I$I','getRowPackedCopy$','inverse$']);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_AffineTransform3D','preConcatenatenull'], function (affine) {
this.a.preConcatenate$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D(affine.a);
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_AffineGet','preConcatenate$TA'], function (affine) {
Clazz.assert(C$, this, function(){return affine.numSourceDimensions$() == 3}, function(){return "Only 3d affine transformations can be preconcatenated to a 3d affine transformation."});
this.a.preConcatenate$DA(affine.getRowPackedCopy$());
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, 'rotate$I$D', function (axis, d) {
var dcos=Math.cos(d);
var dsin=Math.sin(d);
switch (axis) {
case 0:
this.a.rotateX$D$D(dcos, dsin);
break;
case 1:
this.a.rotateY$D$D(dcos, dsin);
break;
default:
this.a.rotateZ$D$D(dcos, dsin);
break;
}
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'scale$D', function (s) {
this.a.scale$D(s);
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'scale$D$D$D', function (s0, s1, s2) {
this.a.scale$D$D$D(s0, s1, s2);
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'translate$DA', function (translationVector) {
this.a.m03 += translationVector[0];
this.a.m13 += translationVector[1];
this.a.m23 += translationVector[2];
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'getTranslation$', function () {
return Clazz.array(Double.TYPE, -1, [this.a.m03, this.a.m13, this.a.m23]);
});

Clazz.newMeth(C$, 'setTranslation$DA', function (translationVector) {
this.a.m03=translationVector[0];
this.a.m13=translationVector[1];
this.a.m23=translationVector[2];
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'identity$', function () {
this.set$D$D$D$D$D$D$D$D$D$D$D$D(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0);
});

Clazz.newMeth(C$, 'set$net_imglib2_realtransform_AffineTransform3D', function (m) {
this.a.m00=m.a.m00;
this.a.m10=m.a.m10;
this.a.m20=m.a.m20;
this.a.m01=m.a.m01;
this.a.m11=m.a.m11;
this.a.m21=m.a.m21;
this.a.m02=m.a.m02;
this.a.m12=m.a.m12;
this.a.m22=m.a.m22;
this.a.m03=m.a.m03;
this.a.m13=m.a.m13;
this.a.m23=m.a.m23;
this.inverse.a.m00=m.inverse.a.m00;
this.inverse.a.m10=m.inverse.a.m10;
this.inverse.a.m20=m.inverse.a.m20;
this.inverse.a.m01=m.inverse.a.m01;
this.inverse.a.m11=m.inverse.a.m11;
this.inverse.a.m21=m.inverse.a.m21;
this.inverse.a.m02=m.inverse.a.m02;
this.inverse.a.m12=m.inverse.a.m12;
this.inverse.a.m22=m.inverse.a.m22;
this.inverse.a.m03=m.inverse.a.m03;
this.inverse.a.m13=m.inverse.a.m13;
this.inverse.a.m23=m.inverse.a.m23;
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$D$D$D$D$D$D$D$D$D$D$D$D', function (m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23) {
this.a.m00=m00;
this.a.m01=m01;
this.a.m02=m02;
this.a.m03=m03;
this.a.m10=m10;
this.a.m11=m11;
this.a.m12=m12;
this.a.m13=m13;
this.a.m20=m20;
this.a.m21=m21;
this.a.m22=m22;
this.a.m23=m23;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'toArray$DA', function (data) {
data[0]=this.a.m00;
data[1]=this.a.m01;
data[2]=this.a.m02;
data[3]=this.a.m03;
data[4]=this.a.m10;
data[5]=this.a.m11;
data[6]=this.a.m12;
data[7]=this.a.m13;
data[8]=this.a.m20;
data[9]=this.a.m21;
data[10]=this.a.m22;
data[11]=this.a.m23;
});

Clazz.newMeth(C$, 'toMatrix$DAA', function (data) {
data[0][0]=this.a.m00;
data[0][1]=this.a.m01;
data[0][2]=this.a.m02;
data[0][3]=this.a.m03;
data[1][0]=this.a.m10;
data[1][1]=this.a.m11;
data[1][2]=this.a.m12;
data[1][3]=this.a.m13;
data[2][0]=this.a.m20;
data[2][1]=this.a.m21;
data[2][2]=this.a.m22;
data[2][3]=this.a.m23;
});

Clazz.newMeth(C$, 'toString', function () {
return "3d-affine: (" + new Double(this.a.m00).toString() + ", " + new Double(this.a.m01).toString() + ", " + new Double(this.a.m02).toString() + ", " + new Double(this.a.m03).toString() + ", " + new Double(this.a.m10).toString() + ", " + new Double(this.a.m11).toString() + ", " + new Double(this.a.m12).toString() + ", " + new Double(this.a.m13).toString() + ", " + new Double(this.a.m20).toString() + ", " + new Double(this.a.m21).toString() + ", " + new Double(this.a.m22).toString() + ", " + new Double(this.a.m23).toString() + ")" ;
});

Clazz.newMeth(C$, 'set$D$I$I', function (value, row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < 3  && column >= 0  && column < 4 }, function(){return "Index out of bounds, a 3d affine matrix is a 3x4 matrix."});
switch (row) {
case 0:
switch (column) {
case 0:
this.a.m00=value;
break;
case 1:
this.a.m01=value;
break;
case 2:
this.a.m02=value;
break;
default:
this.a.m03=value;
}
break;
case 1:
switch (column) {
case 0:
this.a.m10=value;
break;
case 1:
this.a.m11=value;
break;
case 2:
this.a.m12=value;
break;
default:
this.a.m13=value;
}
break;
default:
switch (column) {
case 0:
this.a.m20=value;
break;
case 1:
this.a.m21=value;
break;
case 2:
this.a.m22=value;
break;
default:
this.a.m23=value;
}
break;
}
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$DA', function (values) {
Clazz.assert(C$, this, function(){return values.length >= 12}, function(){return "Input dimensions do not match.  A 3d affine matrix is a 3x4 matrix."});
this.a.m00=values[0];
this.a.m01=values[1];
this.a.m02=values[2];
this.a.m03=values[3];
this.a.m10=values[4];
this.a.m11=values[5];
this.a.m12=values[6];
this.a.m13=values[7];
this.a.m20=values[8];
this.a.m21=values[9];
this.a.m22=values[10];
this.a.m23=values[11];
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$DAA', function (values) {
Clazz.assert(C$, this, function(){return values.length >= 3 && values[0].length >= 4  && values[1].length >= 4  && values[2].length >= 4 }, function(){return "Input dimensions do not match.  A 3d affine matrix is a 3x4 matrix."});
this.a.m00=values[0][0];
this.a.m01=values[0][1];
this.a.m02=values[0][2];
this.a.m03=values[0][3];
this.a.m10=values[1][0];
this.a.m11=values[1][1];
this.a.m12=values[1][2];
this.a.m13=values[1][3];
this.a.m20=values[2][0];
this.a.m21=values[2][1];
this.a.m22=values[2][2];
this.a.m23=values[2][3];
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'estimateBounds$net_imglib2_RealInterval', function (interval) {
Clazz.assert(C$, this, function(){return interval.numDimensions$() >= 3}, function(){return "Interval dimensions do not match."});
var min=Clazz.array(Double.TYPE, [interval.numDimensions$()]);
var max=Clazz.array(Double.TYPE, [min.length]);
var rMin=Clazz.array(Double.TYPE, [min.length]);
var rMax=Clazz.array(Double.TYPE, [min.length]);
min[0]=interval.realMin$I(0);
min[1]=interval.realMin$I(1);
min[2]=interval.realMin$I(2);
max[0]=interval.realMax$I(0);
max[1]=interval.realMax$I(1);
max[2]=interval.realMax$I(2);
rMin[0]=rMin[1]=rMin[2]=1.7976931348623157E308;
rMax[0]=rMax[1]=rMax[2]=-1.7976931348623157E308;
for (var d=3; d < rMin.length; ++d) {
rMin[d]=interval.realMin$I(d);
rMax[d]=interval.realMax$I(d);
min[d]=interval.realMin$I(d);
max[d]=interval.realMax$I(d);
}
var f=Clazz.array(Double.TYPE, [3]);
var g=Clazz.array(Double.TYPE, [3]);
this.apply$DA$DA(min, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=max[0];
f[1]=min[1];
f[2]=min[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=min[0];
f[1]=max[1];
f[2]=min[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=max[0];
f[1]=max[1];
f[2]=min[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=min[0];
f[1]=min[1];
f[2]=max[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=max[0];
f[1]=min[1];
f[2]=max[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=min[0];
f[1]=max[1];
f[2]=max[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
f[0]=max[0];
f[1]=max[1];
f[2]=max[2];
this.apply$DA$DA(f, g);
$I$(4).min$DA$DA(rMin, g);
$I$(4).max$DA$DA(rMax, g);
return Clazz.new_($I$(5,1).c$$DA$DA,[rMin, rMax]);
});

Clazz.newMeth(C$, 'isIdentity$', function () {
return $I$(6).isIdentity$net_imglib2_realtransform_AffineGet(this);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AffineTransform3D, "AffineMatrix3D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['m00','m01','m02','m03','m10','m11','m12','m13','m20','m21','m22','m23']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.m00=1.0;
this.m01=0.0;
this.m02=0.0;
this.m03=0.0;
this.m10=0.0;
this.m11=1.0;
this.m12=0.0;
this.m13=0.0;
this.m20=0.0;
this.m21=0.0;
this.m22=1.0;
this.m23=0.0;
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (m) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return m.length == 12});
this.m00=m[0];
this.m01=m[1];
this.m02=m[2];
this.m03=m[3];
this.m10=m[4];
this.m11=m[5];
this.m12=m[6];
this.m13=m[7];
this.m20=m[8];
this.m21=m[9];
this.m22=m[10];
this.m23=m[11];
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$DA,[[this.m00, this.m01, this.m02, this.m03, this.m10, this.m11, this.m12, this.m13, this.m20, this.m21, this.m22, this.m23]]);
});

Clazz.newMeth(C$, 'det$', function () {
return this.m00 * this.m11 * this.m22  + this.m10 * this.m21 * this.m02  + this.m20 * this.m01 * this.m12  - this.m02 * this.m11 * this.m20  - this.m12 * this.m21 * this.m00  - this.m22 * this.m01 * this.m10 ;
});

Clazz.newMeth(C$, 'concatenate$D$D$D$D$D$D$D$D$D$D$D$D', function (mm00, mm01, mm02, mm03, mm10, mm11, mm12, mm13, mm20, mm21, mm22, mm23) {
var a00=this.m00 * mm00 + this.m01 * mm10 + this.m02 * mm20;
var a01=this.m00 * mm01 + this.m01 * mm11 + this.m02 * mm21;
var a02=this.m00 * mm02 + this.m01 * mm12 + this.m02 * mm22;
var a03=this.m00 * mm03 + this.m01 * mm13 + this.m02 * mm23 + this.m03;
var a10=this.m10 * mm00 + this.m11 * mm10 + this.m12 * mm20;
var a11=this.m10 * mm01 + this.m11 * mm11 + this.m12 * mm21;
var a12=this.m10 * mm02 + this.m11 * mm12 + this.m12 * mm22;
var a13=this.m10 * mm03 + this.m11 * mm13 + this.m12 * mm23 + this.m13;
var a20=this.m20 * mm00 + this.m21 * mm10 + this.m22 * mm20;
var a21=this.m20 * mm01 + this.m21 * mm11 + this.m22 * mm21;
var a22=this.m20 * mm02 + this.m21 * mm12 + this.m22 * mm22;
var a23=this.m20 * mm03 + this.m21 * mm13 + this.m22 * mm23 + this.m23;
this.m00=a00;
this.m01=a01;
this.m02=a02;
this.m03=a03;
this.m10=a10;
this.m11=a11;
this.m12=a12;
this.m13=a13;
this.m20=a20;
this.m21=a21;
this.m22=a22;
this.m23=a23;
});

Clazz.newMeth(C$, 'concatenate$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D', function (m) {
this.concatenate$D$D$D$D$D$D$D$D$D$D$D$D(m.m00, m.m01, m.m02, m.m03, m.m10, m.m11, m.m12, m.m13, m.m20, m.m21, m.m22, m.m23);
});

Clazz.newMeth(C$, 'concatenate$DA', function (mm) {
Clazz.assert(C$, this, function(){return mm.length >= 12}, function(){return "Not enough parameters for a 3d affine."});
this.concatenate$D$D$D$D$D$D$D$D$D$D$D$D(mm[0], mm[1], mm[2], mm[3], mm[4], mm[5], mm[6], mm[7], mm[8], mm[9], mm[10], mm[11]);
});

Clazz.newMeth(C$, 'preConcatenate$D$D$D$D$D$D$D$D$D$D$D$D', function (mm00, mm01, mm02, mm03, mm10, mm11, mm12, mm13, mm20, mm21, mm22, mm23) {
var a00=mm00 * this.m00 + mm01 * this.m10 + mm02 * this.m20;
var a01=mm00 * this.m01 + mm01 * this.m11 + mm02 * this.m21;
var a02=mm00 * this.m02 + mm01 * this.m12 + mm02 * this.m22;
var a03=mm00 * this.m03 + mm01 * this.m13 + mm02 * this.m23 + mm03;
var a10=mm10 * this.m00 + mm11 * this.m10 + mm12 * this.m20;
var a11=mm10 * this.m01 + mm11 * this.m11 + mm12 * this.m21;
var a12=mm10 * this.m02 + mm11 * this.m12 + mm12 * this.m22;
var a13=mm10 * this.m03 + mm11 * this.m13 + mm12 * this.m23 + mm13;
var a20=mm20 * this.m00 + mm21 * this.m10 + mm22 * this.m20;
var a21=mm20 * this.m01 + mm21 * this.m11 + mm22 * this.m21;
var a22=mm20 * this.m02 + mm21 * this.m12 + mm22 * this.m22;
var a23=mm20 * this.m03 + mm21 * this.m13 + mm22 * this.m23 + mm23;
this.m00=a00;
this.m01=a01;
this.m02=a02;
this.m03=a03;
this.m10=a10;
this.m11=a11;
this.m12=a12;
this.m13=a13;
this.m20=a20;
this.m21=a21;
this.m22=a22;
this.m23=a23;
});

Clazz.newMeth(C$, 'preConcatenate$net_imglib2_realtransform_AffineTransform3D_AffineMatrix3D', function (m) {
this.preConcatenate$D$D$D$D$D$D$D$D$D$D$D$D(m.m00, m.m01, m.m02, m.m03, m.m10, m.m11, m.m12, m.m13, m.m20, m.m21, m.m22, m.m23);
});

Clazz.newMeth(C$, 'preConcatenate$DA', function (mm) {
Clazz.assert(C$, this, function(){return mm.length >= 12}, function(){return "Not enough parameters for a 3d affine."});
this.preConcatenate$D$D$D$D$D$D$D$D$D$D$D$D(mm[0], mm[1], mm[2], mm[3], mm[4], mm[5], mm[6], mm[7], mm[8], mm[9], mm[10], mm[11]);
});

Clazz.newMeth(C$, 'rotateX$D$D', function (dcos, dsin) {
var a10=dcos * this.m10 - dsin * this.m20;
var a11=dcos * this.m11 - dsin * this.m21;
var a12=dcos * this.m12 - dsin * this.m22;
var a13=dcos * this.m13 - dsin * this.m23;
var a20=dsin * this.m10 + dcos * this.m20;
var a21=dsin * this.m11 + dcos * this.m21;
var a22=dsin * this.m12 + dcos * this.m22;
var a23=dsin * this.m13 + dcos * this.m23;
this.m10=a10;
this.m11=a11;
this.m12=a12;
this.m13=a13;
this.m20=a20;
this.m21=a21;
this.m22=a22;
this.m23=a23;
});

Clazz.newMeth(C$, 'rotateY$D$D', function (dcos, dsin) {
var a00=dcos * this.m00 + dsin * this.m20;
var a01=dcos * this.m01 + dsin * this.m21;
var a02=dcos * this.m02 + dsin * this.m22;
var a03=dcos * this.m03 + dsin * this.m23;
var a20=dcos * this.m20 - dsin * this.m00;
var a21=dcos * this.m21 - dsin * this.m01;
var a22=dcos * this.m22 - dsin * this.m02;
var a23=dcos * this.m23 - dsin * this.m03;
this.m00=a00;
this.m01=a01;
this.m02=a02;
this.m03=a03;
this.m20=a20;
this.m21=a21;
this.m22=a22;
this.m23=a23;
});

Clazz.newMeth(C$, 'rotateZ$D$D', function (dcos, dsin) {
var a00=dcos * this.m00 - dsin * this.m10;
var a01=dcos * this.m01 - dsin * this.m11;
var a02=dcos * this.m02 - dsin * this.m12;
var a03=dcos * this.m03 - dsin * this.m13;
var a10=dsin * this.m00 + dcos * this.m10;
var a11=dsin * this.m01 + dcos * this.m11;
var a12=dsin * this.m02 + dcos * this.m12;
var a13=dsin * this.m03 + dcos * this.m13;
this.m00=a00;
this.m01=a01;
this.m02=a02;
this.m03=a03;
this.m10=a10;
this.m11=a11;
this.m12=a12;
this.m13=a13;
});

Clazz.newMeth(C$, 'scale$D$D$D', function (s0, s1, s2) {
this.m00 *= s0;
this.m01 *= s0;
this.m02 *= s0;
this.m03 *= s0;
this.m10 *= s1;
this.m11 *= s1;
this.m12 *= s1;
this.m13 *= s1;
this.m20 *= s2;
this.m21 *= s2;
this.m22 *= s2;
this.m23 *= s2;
});

Clazz.newMeth(C$, 'scale$D', function (s) {
this.m00 *= s;
this.m01 *= s;
this.m02 *= s;
this.m03 *= s;
this.m10 *= s;
this.m11 *= s;
this.m12 *= s;
this.m13 *= s;
this.m20 *= s;
this.m21 *= s;
this.m22 *= s;
this.m23 *= s;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
