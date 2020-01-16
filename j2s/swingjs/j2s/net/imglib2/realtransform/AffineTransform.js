(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'Jama.Matrix','net.imglib2.realtransform.AffineGet','net.imglib2.realtransform.RealViewsSimplifyUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AffineTransform", null, 'net.imglib2.realtransform.AbstractAffineTransform', ['net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.AffineTransform']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.inverse=Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform,[this]);
this.invert$();
this.inverse.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$Jama_Matrix$DA', function (a, t) {
;C$.superclazz.c$$Jama_Matrix$DA.apply(this,[a, t]);C$.$init$.apply(this);
this.inverse=Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform,[this]);
this.invert$();
this.inverse.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$Jama_Matrix', function (matrix) {
;C$.superclazz.c$$Jama_Matrix.apply(this,[matrix]);C$.$init$.apply(this);
this.inverse=Clazz.new_(C$.c$$net_imglib2_realtransform_AffineTransform,[this]);
this.invert$();
this.inverse.updateDs$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_AffineTransform', function (inverse) {
;C$.superclazz.c$$I.apply(this,[inverse.n]);C$.$init$.apply(this);
this.inverse=inverse;
}, 1);

Clazz.newMeth(C$, 'invertT$', function () {
for (var r=0; r < this.n; ++r) {
var tir=-this.inverse.a.get$I$I(r, 0) * this.t[0];
for (var c=1; c < this.n; ++c) tir -= this.inverse.a.get$I$I(r, c) * this.t[c];

this.inverse.t[r]=tir;
}
});

Clazz.newMeth(C$, 'invert$', function () {
var ii=this.a.inverse$();
this.inverse.a.setMatrix$I$I$I$I$Jama_Matrix(0, this.n - 1, 0, this.n - 1, ii);
this.invertT$();
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.n && target.length >= this.n }, function(){return "Source or target vector dimensions do not match with the transformation."});
this.inverse.apply$DA$DA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.n && target.length >= this.n }, function(){return "Source or target vector dimensions do not match with the transformation."});
this.inverse.apply$FA$FA(target, source);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.n && target.numDimensions$() >= this.n }, function(){return "Source or target vector dimensions do not match with the transformation."});
this.inverse.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(target, source);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'set$net_imglib2_realtransform_AffineGet', function (affine) {
Clazz.assert(C$, this, function(){return this.n == affine.numSourceDimensions$()}, function(){return "Dimensions do not match."});
for (var r=0; r < this.n; ++r) {
for (var c=0; c < this.n; ++c) this.a.set$I$I$D(r, c, affine.get$I$I(r, c));

this.t[r]=affine.get$I$I(r, this.n);
}
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$DAA', function (affine) {
Clazz.assert(C$, this, function(){return this.n == affine.length}, function(){return "Dimensions do not match."});
for (var r=0; r < this.n; ++r) {
Clazz.assert(C$, this, function(){return this.n + 1 == affine[r].length}, function(){return "Dimensions do not match."});
for (var c=0; c < this.n; ++c) this.a.set$I$I$D(r, c, affine[r][c]);

this.t[r]=affine[r][this.n];
}
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_AffineGet','concatenate$TA'], function (affine) {
Clazz.assert(C$, this, function(){return affine.numSourceDimensions$() == this.n}, function(){return "Dimensions do not match."});
var matrix=Clazz.new_($I$(1,1).c$$I$I,[this.n, this.n]);
var translation=Clazz.array(Double.TYPE, [this.n]);
for (var r=0; r < this.n; ++r) {
for (var c=0; c < this.n; ++c) {
var ar=this.get$I$I(r, 0) * affine.get$I$I(0, c);
for (var k=1; k < this.n; ++k) ar += this.get$I$I(r, k) * affine.get$I$I(k, c);

matrix.set$I$I$D(r, c, ar);
}
var tr=this.get$I$I(r, this.n) + this.get$I$I(r, 0) * affine.get$I$I(0, this.n);
for (var k=1; k < this.n; ++k) tr += this.get$I$I(r, k) * affine.get$I$I(k, this.n);

translation[r]=tr;
}
this.a.setMatrix$I$I$I$I$Jama_Matrix(0, this.n - 1, 0, this.n - 1, matrix);
System.arraycopy$O$I$O$I$I(translation, 0, this.t, 0, this.t.length);
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','d$I','get$I$I','getRowPackedCopy$','inverse$']);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_AffineGet','preConcatenate$TA'], function (affine) {
Clazz.assert(C$, this, function(){return affine.numSourceDimensions$() == this.n}, function(){return "Dimensions do not match."});
var matrix=Clazz.new_($I$(1,1).c$$I$I,[this.n, this.n]);
var translation=Clazz.array(Double.TYPE, [this.n]);
for (var r=0; r < this.n; ++r) {
for (var c=0; c < this.n; ++c) {
var ar=affine.get$I$I(r, 0) * this.get$I$I(0, c);
for (var k=1; k < this.n; ++k) ar += affine.get$I$I(r, k) * this.get$I$I(k, c);

matrix.set$I$I$D(r, c, ar);
}
var tr=affine.get$I$I(r, this.n) + affine.get$I$I(r, 0) * this.get$I$I(0, this.n);
for (var k=1; k < this.n; ++k) tr += affine.get$I$I(r, k) * this.get$I$I(k, this.n);

translation[r]=tr;
}
this.a.setMatrix$I$I$I$I$Jama_Matrix(0, this.n - 1, 0, this.n - 1, matrix);
System.arraycopy$O$I$O$I$I(translation, 0, this.t, 0, this.t.length);
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
return this;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','d$I','get$I$I','getRowPackedCopy$','inverse$']);
});

Clazz.newMeth(C$, 'set$D$I$I', function (value, row, column) {
if (column == this.n) this.t[row]=value;
 else this.a.set$I$I$D(row, column, value);
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'set$DA', function (values) {
Clazz.assert(C$, this, function(){return values.length == this.n * this.n + this.n}, function(){return "Input dimensions do not match dimensions of this affine transform."});
var i=0;
for (var r=0; r < this.n; ++r) {
for (var c=0; c < this.n; ++c, ++i) this.a.set$I$I$D(r, c, values[i]);

this.t[r]=values[i++];
}
this.updateDs$();
this.invert$();
this.inverse.updateDs$();
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$.c$$I,[this.n]);
copy.set$net_imglib2_realtransform_AffineGet(this);
return copy;
});

Clazz.newMeth(C$, 'isIdentity$', function () {
return $I$(3).isIdentity$net_imglib2_realtransform_AffineGet(this);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
