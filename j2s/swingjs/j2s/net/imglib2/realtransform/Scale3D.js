(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint','net.imglib2.realtransform.ScaleGet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Scale3D", null, 'net.imglib2.realtransform.AbstractScale', ['net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.Scale3D']]]

Clazz.newMeth(C$, 'c$$DA$net_imglib2_realtransform_Scale3D$net_imglib2_RealPointA', function (s, inverse, ds) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[s, ds]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return s.length == this.numDimensions$()}, function(){return "Input dimensions do not match or are not 3."});
this.inverse=inverse;
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D', function (sx, sy, sz) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[Clazz.array(Double.TYPE, [3]), Clazz.array($I$(1), [3])]);C$.$init$.apply(this);
this.s[0]=sx;
this.s[1]=sy;
this.s[2]=sz;
this.ds[0]=Clazz.new_($I$(1,1).c$$DA,[[sx, 0, 0]]);
this.ds[1]=Clazz.new_($I$(1,1).c$$DA,[[0, sy, 0]]);
this.ds[2]=Clazz.new_($I$(1,1).c$$DA,[[0, 0, sz]]);
var si=Clazz.array(Double.TYPE, [3]);
si[0]=1.0 / this.s[0];
si[1]=1.0 / this.s[1];
si[2]=1.0 / this.s[2];
var dis=Clazz.array($I$(1), [3]);
dis[0]=Clazz.new_($I$(1,1).c$$DA,[[si[0], 0, 0]]);
dis[1]=Clazz.new_($I$(1,1).c$$DA,[[0, si[1], 0]]);
dis[2]=Clazz.new_($I$(1,1).c$$DA,[[0, 0, si[2]]]);
this.inverse=Clazz.new_(C$.c$$DA$net_imglib2_realtransform_Scale3D$net_imglib2_RealPointA,[si, this, dis]);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (s) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[s.clone$(), Clazz.array($I$(1), [s.length])]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return s.length == this.numDimensions$()}, function(){return "Input dimensions do not match or are not 3."});
this.ds[0]=Clazz.new_($I$(1,1).c$$DA,[[s[0], 0, 0]]);
this.ds[1]=Clazz.new_($I$(1,1).c$$DA,[[0, s[1], 0]]);
this.ds[2]=Clazz.new_($I$(1,1).c$$DA,[[0, 0, s[2]]]);
var si=Clazz.array(Double.TYPE, [3]);
si[0]=1.0 / s[0];
si[1]=1.0 / s[1];
si[2]=1.0 / s[2];
var dis=Clazz.array($I$(1), [3]);
dis[0]=Clazz.new_($I$(1,1).c$$DA,[[si[0], 0, 0]]);
dis[1]=Clazz.new_($I$(1,1).c$$DA,[[0, si[1], 0]]);
dis[2]=Clazz.new_($I$(1,1).c$$DA,[[0, 0, si[2]]]);
this.inverse=Clazz.new_(C$.c$$DA$net_imglib2_realtransform_Scale3D$net_imglib2_RealPointA,[si, this, dis]);
}, 1);

Clazz.newMeth(C$, 'set$D$D$D', function (sx, sy, sz) {
this.s[0]=sx;
this.s[1]=sy;
this.s[2]=sz;
this.inverse.s[0]=1.0 / sx;
this.inverse.s[1]=1.0 / sy;
this.inverse.s[2]=1.0 / sz;
this.ds[0].setPosition$D$I(sx, 0);
this.ds[1].setPosition$D$I(sy, 1);
this.ds[2].setPosition$D$I(sz, 2);
this.inverse.ds[0].setPosition$D$I(this.inverse.s[0], 0);
this.inverse.ds[1].setPosition$D$I(this.inverse.s[1], 1);
this.inverse.ds[2].setPosition$D$I(this.inverse.s[2], 2);
});

Clazz.newMeth(C$, 'set$DA', function (s) {
Clazz.assert(C$, this, function(){return s.length == this.numDimensions$()}, function(){return "Input dimensions do not match or are not 3."});
this.s[0]=s[0];
this.s[1]=s[1];
this.s[2]=s[2];
this.inverse.s[0]=1.0 / s[0];
this.inverse.s[1]=1.0 / s[1];
this.inverse.s[2]=1.0 / s[2];
this.ds[0].setPosition$D$I(s[0], 0);
this.ds[1].setPosition$D$I(s[1], 1);
this.ds[2].setPosition$D$I(s[2], 2);
this.inverse.ds[0].setPosition$D$I(this.inverse.s[0], 0);
this.inverse.ds[1].setPosition$D$I(this.inverse.s[1], 1);
this.inverse.ds[2].setPosition$D$I(this.inverse.s[2], 2);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
source[0]=target[0] / this.s[0];
source[1]=target[1] / this.s[1];
source[2]=target[2] / this.s[2];
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
source[0]=(target[0] / this.s[0]);
source[1]=(target[1] / this.s[1]);
source[2]=(target[2] / this.s[2]);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numDimensions$() && target.numDimensions$() >= this.numDimensions$() }, function(){return "Input dimensions too small."});
source.setPosition$D$I(target.getDoublePosition$I(0) / this.s[0], 0);
source.setPosition$D$I(target.getDoublePosition$I(1) / this.s[1], 1);
source.setPosition$D$I(target.getDoublePosition$I(2) / this.s[2], 2);
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
target[0]=source[0] * this.s[0];
target[1]=source[1] * this.s[1];
target[2]=source[2] * this.s[2];
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
target[0]=(source[0] * this.s[0]);
target[1]=(source[1] * this.s[1]);
target[2]=(source[2] * this.s[2]);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numDimensions$() && target.numDimensions$() >= this.numDimensions$() }, function(){return "Input dimensions too small."});
target.setPosition$D$I(source.getDoublePosition$I(0) * this.s[0], 0);
target.setPosition$D$I(source.getDoublePosition$I(1) * this.s[1], 1);
target.setPosition$D$I(source.getDoublePosition$I(2) * this.s[2], 2);
});

Clazz.newMeth(C$, 'get$I$I', function (row, column) {
Clazz.assert(C$, this, function(){return row >= 0 && row < this.numDimensions$() }, function(){return "Dimension index out of bounds."});
return row == column ? this.s[row] : 0;
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
var matrix=Clazz.array(Double.TYPE, [12]);
matrix[0]=this.s[0];
matrix[5]=this.s[1];
matrix[10]=this.s[2];
return matrix;
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$DA,[this.s]);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_ScaleGet','preConcatenate$TA'], function (a) {
this.set$D$D$D(this.s[0] * a.getScale$I(0), this.s[1] * a.getScale$I(1), this.s[2] * a.getScale$I(2));
return this;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','inverse$']);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_ScaleGet','concatenate$TA'], function (a) {
return this.preConcatenate$net_imglib2_realtransform_ScaleGet(a);
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','inverse$']);
});

Clazz.newMeth(C$, 'isIdentity$', function () {
return this.s[0] == 1  && this.s[1] == 1   && this.s[2] == 1  ;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
