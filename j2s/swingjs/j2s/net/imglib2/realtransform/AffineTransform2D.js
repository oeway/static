(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,['net.imglib2.realtransform.AffineTransform2D','.AffineMatrix2D'],'net.imglib2.RealPoint','net.imglib2.realtransform.AffineGet','net.imglib2.realtransform.RealViewsSimplifyUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AffineTransform2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['net.imglib2.realtransform.AffineGet', 'net.imglib2.realtransform.AffineSet', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);
C$.$classes$=[['AffineMatrix2D',28]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['a','net.imglib2.realtransform.AffineTransform2D.AffineMatrix2D','d0','net.imglib2.RealPoint','+d1','ds','net.imglib2.RealPoint[]','inverse','net.imglib2.realtransform.AffineTransform2D']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imglib2_realtransform_AffineTransform2D_AffineMatrix2D.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_AffineTransform2D_AffineMatrix2D', function (a) {
;C$.$init$.apply(this);
this.a=a;
this.d0=Clazz.new_($I$(2,1).c$$I,[2]);
this.d1=Clazz.new_($I$(2,1).c$$I,[2]);
this.ds=Clazz.array($I$(2), -1, [this.d0, this.d1]);
this.updateDs$();
this.inverse=Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform2D,[this]);
this.invert$();
this.inverse.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_AffineTransform2D', function (inverse) {
;C$.$init$.apply(this);
this.inverse=inverse;
this.a=Clazz.new_($I$(1,1));
this.d0=Clazz.new_($I$(2,1).c$$I,[2]);
this.d1=Clazz.new_($I$(2,1).c$$I,[2]);
this.ds=Clazz.array($I$(2), -1, [this.d0, this.d1]);
}, 1);

Clazz.newMeth(C$, 'invert$', function () {
var det=this.a.det$();
if (det == 0 ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Matrix is singular."]);
var idet=1.0 / det;
this.inverse.a.m00=this.a.m11 * idet;
this.inverse.a.m01=-this.a.m01 * idet;
this.inverse.a.m02=(this.a.m01 * this.a.m12 - this.a.m02 * this.a.m11) * idet;
this.inverse.a.m10=-this.a.m10 * idet;
this.inverse.a.m11=this.a.m00 * idet;
this.inverse.a.m12=(this.a.m02 * this.a.m10 - this.a.m00 * this.a.m12) * idet;
});

Clazz.newMeth(C$, 'updateDs$', function () {
this.d0.setPosition$D$I(this.a.m00, 0);
this.d0.setPosition$D$I(this.a.m10, 1);
this.d1.setPosition$D$I(this.a.m01, 0);
this.d1.setPosition$D$I(this.a.m11, 1);
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && target.length >= 2 }, function(){return "2d affine transformations can be applied to 2d coordinates only."});
var tmp=source[0] * this.a.m00 + source[1] * this.a.m01 + this.a.m02;
target[1]=source[0] * this.a.m10 + source[1] * this.a.m11 + this.a.m12;
target[0]=tmp;
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && target.length >= 2 }, function(){return "2d affine transformations can be applied to 2d coordinates only."});
var tmp=(source[0] * this.a.m00 + source[1] * this.a.m01 + this.a.m02);
target[1]=(source[0] * this.a.m10 + source[1] * this.a.m11 + this.a.m12);
target[0]=tmp;
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 2 && target.numDimensions$() >= 2 }, function(){return "2d affine transformations can be applied to 2d coordinates only."});
var s0=source.getDoublePosition$I(0);
var s1=source.getDoublePosition$I(1);
target.setPosition$D$I(s0 * this.a.m00 + s1 * this.a.m01 + this.a.m02, 0);
target.setPosition$D$I(s0 * this.a.m10 + s1 * this.a.m11 + this.a.m12, 1);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && target.length >= 2 }, function(){return "2d affine transformations can be applied to 2d coordinates only."});
var tmp=target[0] * this.inverse.a.m00 + target[1] * this.inverse.a.m01 + this.inverse.a.m02;
source[1]=target[0] * this.inverse.a.m10 + target[1] * this.inverse.a.m11 + this.inverse.a.m12;
source[0]=tmp;
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 2 && target.length >= 2 }, function(){return "2d affine transformations can be applied to 2d coordinates only."});
var tmp=(target[0] * this.inverse.a.m00 + target[1] * this.inverse.a.m01 + this.inverse.a.m02);
source[1]=(target[0] * this.inverse.a.m10 + target[1] * this.inverse.a.m11 + this.inverse.a.m12);
source[0]=tmp;
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 2 && target.numDimensions$() >= 2 }, function(){return "2d affine transformations can be applied to 2d coordinates only."});
var t0=target.getDoublePosition$I(0);
var t1=target.getDoublePosition$I(1);
source.setPosition$D$I(t0 * this.inverse.a.m00 + t1 * this.inverse.a.m01 + this.inverse.a.m02, 0);
source.setPosition$D$I(t0 * this.inverse.a.m10 + t1 * this.inverse.a.m11 + this.inverse.a.m12, 1);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_AffineGet','concatenate$TA'], function (affine) {
Clazz.assert(C$, this, function(){return affine.numSourceDimensions$() >= 2}, function(){return "Only >=2d affine transformations can be concatenated to a 2d affine transformation."});
var am00=affine.get$I$I(0, 0);
var am01=affine.get$I$I(0, 1);
var am02=affine.get$I$I(0, 2);
var am10=affine.get$I$I(1, 0);
var am11=affine.get$I$I(1, 1);
var am12=affine.get$I$I(1, 2);
var a00=this.a.m00 * am00 + this.a.m01 * am10;
var a01=this.a.m00 * am01 + this.a.m01 * am11;
var a02=this.a.m00 * am02 + this.a.m01 * am12 + this.a.m02;
var a10=this.a.m10 * am00 + this.a.m11 * am10;
var a11=this.a.m10 * am01 + this.a.m11 * am11;
var a12=this.a.m10 * am02 + this.a.m11 * am12 + this.a.m12;
this.a.m00=a00;
this.a.m01=a01;
this.a.m02=a02;
this.a.m10=a10;
this.a.m11=a11;
this.a.m12=a12;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_AffineTransform2D','concatenatenull'], function (model) {
var a00=this.a.m00 * model.a.m00 + this.a.m01 * model.a.m10;
var a01=this.a.m00 * model.a.m01 + this.a.m01 * model.a.m11;
var a02=this.a.m00 * model.a.m02 + this.a.m01 * model.a.m12 + this.a.m02;
var a10=this.a.m10 * model.a.m00 + this.a.m11 * model.a.m10;
var a11=this.a.m10 * model.a.m01 + this.a.m11 * model.a.m11;
var a12=this.a.m10 * model.a.m02 + this.a.m11 * model.a.m12 + this.a.m12;
this.a.m00=a00;
this.a.m01=a01;
this.a.m02=a02;
this.a.m10=a10;
this.a.m11=a11;
this.a.m12=a12;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, 'copy$', function () {
var ma=Clazz.new_($I$(1,1));
ma.m00=this.a.m00;
ma.m10=this.a.m10;
ma.m01=this.a.m01;
ma.m11=this.a.m11;
ma.m02=this.a.m02;
ma.m12=this.a.m12;
return Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform2D_AffineMatrix2D,[ma]);
});

Clazz.newMeth(C$, 'd$I', function (d) {
return this.ds[d];
});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < 2  && column >= 0  && column < 3 }, function(){return "Index out of bounds, a 3d affine matrix is a 2x3 matrix."});
switch (row) {
case 0:
switch (column) {
case 0:
return this.a.m00;
case 1:
return this.a.m01;
default:
return this.a.m02;
}
default:
switch (column) {
case 0:
return this.a.m10;
case 1:
return this.a.m11;
default:
return this.a.m12;
}
}
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
return Clazz.array(Double.TYPE, -1, [this.a.m00, this.a.m01, this.a.m02, this.a.m10, this.a.m11, this.a.m12]);
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
return 2;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_AffineGet','preConcatenate$TA'], function (affine) {
Clazz.assert(C$, this, function(){return affine.numSourceDimensions$() >= 2}, function(){return "Only >=2d affine transformations can be pre-concatenated to a 2d affine transformation."});
var am00=affine.get$I$I(0, 0);
var am01=affine.get$I$I(0, 1);
var am02=affine.get$I$I(0, 2);
var am10=affine.get$I$I(1, 0);
var am11=affine.get$I$I(1, 1);
var am12=affine.get$I$I(1, 2);
var a00=am00 * this.a.m00 + am01 * this.a.m10;
var a01=am00 * this.a.m01 + am01 * this.a.m11;
var a02=am00 * this.a.m02 + am01 * this.a.m12 + am02;
var a10=am10 * this.a.m00 + am11 * this.a.m10;
var a11=am10 * this.a.m01 + am11 * this.a.m11;
var a12=am10 * this.a.m02 + am11 * this.a.m12 + am12;
this.a.m00=a00;
this.a.m01=a01;
this.a.m02=a02;
this.a.m10=a10;
this.a.m11=a11;
this.a.m12=a12;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_AffineTransform2D','preConcatenatenull'], function (affine) {
var a00=affine.a.m00 * this.a.m00 + affine.a.m01 * this.a.m10;
var a01=affine.a.m00 * this.a.m01 + affine.a.m01 * this.a.m11;
var a02=affine.a.m00 * this.a.m02 + affine.a.m01 * this.a.m12 + affine.a.m02;
var a10=affine.a.m10 * this.a.m00 + affine.a.m11 * this.a.m10;
var a11=affine.a.m10 * this.a.m01 + affine.a.m11 * this.a.m11;
var a12=affine.a.m10 * this.a.m02 + affine.a.m11 * this.a.m12 + affine.a.m12;
this.a.m00=a00;
this.a.m01=a01;
this.a.m02=a02;
this.a.m10=a10;
this.a.m11=a11;
this.a.m12=a12;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, 'rotate$D', function (d) {
var dcos=Math.cos(d);
var dsin=Math.sin(d);
var a00=dcos * this.a.m00 - dsin * this.a.m10;
var a01=dcos * this.a.m01 - dsin * this.a.m11;
var a02=dcos * this.a.m02 - dsin * this.a.m12;
var a10=dsin * this.a.m00 + dcos * this.a.m10;
var a11=dsin * this.a.m01 + dcos * this.a.m11;
var a12=dsin * this.a.m02 + dcos * this.a.m12;
this.a.m00=a00;
this.a.m01=a01;
this.a.m02=a02;
this.a.m10=a10;
this.a.m11=a11;
this.a.m12=a12;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'translate$DA', function (t) {
Clazz.assert(C$, this, function(){return t.length == 2}, function(){return "2d affine transformations can be translated by 2d vector only."});
this.a.m02 += t[0];
this.a.m12 += t[1];
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'scale$D', function (d) {
this.a.m00 *= d;
this.a.m01 *= d;
this.a.m02 *= d;
this.a.m10 *= d;
this.a.m11 *= d;
this.a.m12 *= d;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'scale$D$D', function (s0, s1) {
this.a.m00 *= s0;
this.a.m01 *= s0;
this.a.m02 *= s0;
this.a.m10 *= s1;
this.a.m11 *= s1;
this.a.m12 *= s1;
this.invert$();
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$net_imglib2_realtransform_AffineTransform2D', function (m) {
this.a.m00=m.a.m00;
this.a.m10=m.a.m10;
this.a.m01=m.a.m01;
this.a.m11=m.a.m11;
this.a.m02=m.a.m02;
this.a.m12=m.a.m12;
this.inverse.a.m00=m.inverse.a.m00;
this.inverse.a.m10=m.inverse.a.m10;
this.inverse.a.m01=m.inverse.a.m01;
this.inverse.a.m11=m.inverse.a.m11;
this.inverse.a.m02=m.inverse.a.m02;
this.inverse.a.m12=m.inverse.a.m12;
this.updateDs$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'toArray$DA', function (data) {
data[0]=this.a.m00;
data[1]=this.a.m01;
data[3]=this.a.m02;
data[4]=this.a.m10;
data[6]=this.a.m11;
data[7]=this.a.m12;
});

Clazz.newMeth(C$, 'toMatrix$DAA', function (data) {
data[0][0]=this.a.m00;
data[0][1]=this.a.m01;
data[0][2]=this.a.m02;
data[1][0]=this.a.m10;
data[1][1]=this.a.m11;
data[1][2]=this.a.m12;
});

Clazz.newMeth(C$, 'toString', function () {
return "2d-affine: (" + new Double(this.a.m00).toString() + ", " + new Double(this.a.m01).toString() + ", " + new Double(this.a.m02).toString() + ", " + new Double(this.a.m10).toString() + ", " + new Double(this.a.m11).toString() + ", " + new Double(this.a.m12).toString() + ")" ;
});

Clazz.newMeth(C$, 'set$D$I$I', function (value, row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < 2  && column >= 0  && column < 3 }, function(){return "Index out of bounds, a 2d affine matrix is a 2x3 matrix."});
switch (row) {
case 0:
switch (column) {
case 0:
this.a.m00=value;
break;
case 1:
this.a.m01=value;
break;
default:
this.a.m02=value;
}
break;
default:
switch (column) {
case 0:
this.a.m10=value;
break;
case 1:
this.a.m11=value;
break;
default:
this.a.m12=value;
break;
}
}
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$DA', function (values) {
Clazz.assert(C$, this, function(){return values.length >= 6}, function(){return "Input dimensions do not match.  A 2d affine matrix is a 2x3 matrix."});
this.a.m00=values[0];
this.a.m01=values[1];
this.a.m02=values[2];
this.a.m10=values[3];
this.a.m11=values[4];
this.a.m12=values[5];
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$DAA', function (values) {
Clazz.assert(C$, this, function(){return values.length >= 2 && values[0].length >= 3  && values[1].length == 3 }, function(){return "Input dimensions do not match.  A 2d affine matrix is a 2x3 matrix."});
this.a.m00=values[0][0];
this.a.m01=values[0][1];
this.a.m02=values[0][2];
this.a.m10=values[1][0];
this.a.m11=values[1][1];
this.a.m12=values[1][2];
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'isIdentity$', function () {
return $I$(4).isIdentity$net_imglib2_realtransform_AffineGet(this);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AffineTransform2D, "AffineMatrix2D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m00=1.0;
this.m01=0.0;
this.m02=0.0;
this.m10=0.0;
this.m11=1.0;
this.m12=0.0;
}, 1);

C$.$fields$=[['D',['m00','m01','m02','m10','m11','m12']]]

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$);
copy.m00=this.m00;
copy.m01=this.m01;
copy.m02=this.m02;
copy.m10=this.m10;
copy.m11=this.m11;
copy.m12=this.m12;
return copy;
});

Clazz.newMeth(C$, 'det$', function () {
return this.m00 * this.m11 - this.m01 * this.m10;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
