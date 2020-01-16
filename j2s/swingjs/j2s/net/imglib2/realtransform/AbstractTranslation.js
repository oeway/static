(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractTranslation", null, null, 'net.imglib2.realtransform.TranslationGet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['t','double[]','ds','net.imglib2.RealPoint[]']]]

Clazz.newMeth(C$, 'c$$DA$net_imglib2_RealPointA', function (t, ds) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return t.length == ds.length}, function(){return "Input dimensions do not match."});
this.t=t;
this.ds=ds;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.$init$.apply(this);
this.t=Clazz.array(Double.TYPE, [n]);
this.ds=Clazz.array($I$(1), [n]);
for (var d=0; d < n; ++d) {
this.ds[d]=Clazz.new_($I$(1,1).c$$I,[n]);
this.ds[d].setPosition$I$I(1, d);
}
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (t) {
C$.c$$I.apply(this, [t.length]);
this.set$DA(t);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.t.length;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.t.length;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.t.length;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.t.length && target.length >= this.t.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.t.length; ++d) target[d]=source[d] + this.t[d];

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.t.length && target.length >= this.t.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.t.length; ++d) target[d]=(source[d] + this.t[d]);

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.t.length && target.numDimensions$() >= this.t.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.t.length; ++d) target.setPosition$D$I(source.getDoublePosition$I(d) + this.t[d], d);

});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.t.length && target.length >= this.t.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.t.length; ++d) source[d]=target[d] - this.t[d];

});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.t.length && target.length >= this.t.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.t.length; ++d) source[d]=(target[d] - this.t[d]);

});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.t.length && target.numDimensions$() >= this.t.length }, function(){return "Input dimensions too small."});
for (var d=0; d < this.t.length; ++d) source.setPosition$D$I(target.getDoublePosition$I(d) - this.t[d], d);

});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
return column == this.t.length ? this.t[row] : row == column ? 1 : 0;
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
var stepT=this.t.length + 1;
var stepI=stepT + 1;
var matrix=Clazz.array(Double.TYPE, [this.t.length * this.t.length + this.t.length]);
for (var d=0; d < this.t.length; ++d) {
matrix[d * stepI]=1;
matrix[d * stepT + this.t.length]=this.t[d];
}
return matrix;
});

Clazz.newMeth(C$, 'd$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0 && d < this.numDimensions$() }, function(){return "Dimension index out of bounds."});
return this.ds[d];
});

Clazz.newMeth(C$, 'getScale$I', function (d) {
return 0.0;
});

Clazz.newMeth(C$, 'getScaleCopy$', function () {
return Clazz.array(Double.TYPE, [this.t.length]);
});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
Clazz.assert(C$, this, function(){return d >= 0 && d < this.numDimensions$() }, function(){return "Dimension index out of bounds."});
return this.t[d];
});

Clazz.newMeth(C$, 'getTranslationCopy$', function () {
return this.t.clone$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
