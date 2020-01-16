(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractScale", null, null, 'net.imglib2.realtransform.ScaleGet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['s','double[]','ds','net.imglib2.RealPoint[]']]]

Clazz.newMeth(C$, 'c$$DA$net_imglib2_RealPointA', function (s, ds) {
;C$.$init$.apply(this);
this.s=s;
this.ds=ds;
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (s) {
;C$.$init$.apply(this);
this.s=s.clone$();
this.ds=Clazz.array($I$(1), [s.length]);
}, 1);

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.s.length && target.length >= this.s.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.s.length; ++d) source[d]=target[d] / this.s[d];

});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.s.length && target.length >= this.s.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.s.length; ++d) source[d]=(target[d] / this.s[d]);

});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.s.length && target.numDimensions$() >= this.s.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.s.length; ++d) source.setPosition$D$I(target.getDoublePosition$I(d) / this.s[d], d);

});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.s.length;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.s.length;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.s.length;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.s.length && target.length >= this.s.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.s.length; ++d) target[d]=source[d] * this.s[d];

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.s.length && target.length >= this.s.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.s.length; ++d) target[d]=(source[d] * this.s[d]);

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.s.length && target.numDimensions$() >= this.s.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.s.length; ++d) target.setPosition$D$I(source.getDoublePosition$I(d) * this.s[d], d);

});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < this.numDimensions$() }, function(){return "Dimension index out of bounds."});
return row == column ? this.s[row] : 0;
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
var step=this.s.length + 2;
var matrix=Clazz.array(Double.TYPE, [this.s.length * this.s.length + this.s.length]);
for (var d=0; d < this.s.length; ++d) matrix[d * step]=this.s[d];

return matrix;
});

Clazz.newMeth(C$, 'd$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0 && d < this.numDimensions$() }, function(){return "Dimension index out of bounds."});
return this.ds[d];
});

Clazz.newMeth(C$, 'getScale$I', function (d) {
return this.s[d];
});

Clazz.newMeth(C$, 'getScaleCopy$', function () {
return this.s.clone$();
});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
return 0.0;
});

Clazz.newMeth(C$, 'getTranslationCopy$', function () {
return Clazz.array(Double.TYPE, [this.s.length]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
