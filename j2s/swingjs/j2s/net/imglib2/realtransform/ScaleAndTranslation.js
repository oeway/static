(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint','net.imglib2.realtransform.ScaleAndTranslationGet','net.imglib2.realtransform.RealViewsSimplifyUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScaleAndTranslation", null, null, ['net.imglib2.realtransform.ScaleAndTranslationGet', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['inverse','net.imglib2.realtransform.ScaleAndTranslation','scales','double[]','+translations','ds','net.imglib2.RealPoint[]']]]

Clazz.newMeth(C$, 'c$$DA$DA', function (scales, translations) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return translations.length == scales.length});
this.scales=scales.clone$();
this.translations=translations.clone$();
this.n=translations.length;
this.inverse=this.createInverse$();
this.ds=C$.createDs$DA(scales);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_ScaleAndTranslation$DA$DA', function (inverse, scales, translations) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return translations.length == scales.length});
this.inverse=inverse;
this.scales=scales.clone$();
this.translations=translations.clone$();
this.n=inverse.n;
this.ds=C$.createDs$DA(scales);
}, 1);

Clazz.newMeth(C$, 'createDs$DA', function (scales) {
var n=scales.length;
var ds=Clazz.array($I$(1), [n]);
for (var d=0; d < n; ++d) {
var rp=Clazz.new_($I$(1,1).c$$I,[n]);
rp.setPosition$D$I(scales[d], d);
ds[d]=rp;
}
return ds;
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numDimensions$();
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.n && target.length >= this.n });
for (var i=0; i < this.n; i++) target[i]=this.scales[i] * source[i] + this.translations[i];

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.n && target.length >= this.n });
for (var i=0; i < this.n; i++) target[i]=(this.scales[i] * source[i] + this.translations[i]);

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.n && target.numDimensions$() >= this.n });
for (var d=0; d < this.n; ++d) target.setPosition$D$I(this.scales[d] * source.getDoublePosition$I(d) + this.translations[d], d);

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

Clazz.newMeth(C$, 'createInverse$', function () {
var invertedShifts=Clazz.array(Double.TYPE, [this.n]);
var invertedScales=Clazz.array(Double.TYPE, [this.n]);
for (var i=0; i < this.n; i++) {
invertedScales[i]=1.0 / this.scales[i];
invertedShifts[i]=-this.translations[i] * invertedScales[i];
}
return Clazz.new_(C$.c$$net_imglib2_realtransform_ScaleAndTranslation$DA$DA,[this, invertedScales, invertedShifts]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_ScaleAndTranslation$DA$DA,[this.inverse, this.scales, this.translations]);
});

Clazz.newMeth(C$, 'getScale$I', function (d) {
return this.scales[d];
});

Clazz.newMeth(C$, 'getScaleCopy$', function () {
return this.scales.clone$();
});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
if (column == row) return this.scales[row];
 else if (column == this.scales.length) return this.translations[row];
 else return 0.0;
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
var m=this.n + 1;
var result=Clazz.array(Double.TYPE, [this.n * m]);
for (var i=0; i < this.n; ++i) {
var firstElementInRowIndex=i * m;
var lastElementInRowIndex=firstElementInRowIndex + this.n;
var diagonalIndex=firstElementInRowIndex + i;
result[diagonalIndex]=this.scales[i];
result[lastElementInRowIndex]=this.translations[i];
}
return result;
});

Clazz.newMeth(C$, 'd$I', function (d) {
return this.ds[d];
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
return this.translations[d];
});

Clazz.newMeth(C$, 'getTranslationCopy$', function () {
return this.translations.clone$();
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_ScaleAndTranslationGet','preConcatenate$TA'], function (a) {
Clazz.assert(C$, this, function(){return a.numDimensions$() == this.n}, function(){return "Dimensions do not match."});
for (var d=0; d < this.n; ++d) {
var scale=a.getScale$I(d);
var translation=this.translations[d];
this.scales[d] *= scale;
this.translations[d]=a.getTranslation$I(d) + scale * translation;
}
return this;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','getScale$I','getScaleCopy$','getTranslation$I','getTranslationCopy$','inverse$']);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_ScaleAndTranslationGet','concatenate$TA'], function (a) {
Clazz.assert(C$, this, function(){return a.numDimensions$() == this.n}, function(){return "Dimensions do not match."});
for (var d=0; d < this.n; ++d) {
var scale=this.scales[d];
this.scales[d] *= a.getScale$I(d);
this.translations[d] += a.getTranslation$I(d) * scale;
}
return this;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','getScale$I','getScaleCopy$','getTranslation$I','getTranslationCopy$','inverse$']);
});

Clazz.newMeth(C$, 'isIdentity$', function () {
return $I$(3).isIdentity$net_imglib2_realtransform_AffineGet(this);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
