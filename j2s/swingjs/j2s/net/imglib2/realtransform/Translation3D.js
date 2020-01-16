(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint','net.imglib2.realtransform.TranslationGet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Translation3D", null, 'net.imglib2.realtransform.AbstractTranslation', ['net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.constDs=Clazz.array($I$(1), [3]);
}

Clazz.newMeth(C$, '$init$', function () {
{
C$.constDs[0]=Clazz.new_($I$(1,1).c$$DA,[[1.0, 0.0, 0.0]]);
C$.constDs[1]=Clazz.new_($I$(1,1).c$$DA,[[0.0, 1.0, 0.0]]);
C$.constDs[2]=Clazz.new_($I$(1,1).c$$DA,[[0.0, 0.0, 1.0]]);
}
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.Translation3D']]
,['O',['constDs','net.imglib2.RealPoint[]']]]

Clazz.newMeth(C$, 'c$$DA$net_imglib2_realtransform_Translation3D', function (t, inverse) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[t, C$.constDs]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return t.length == this.numDimensions$()}, function(){return "Input dimensions do not match or are not 3."});
this.inverse=inverse;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[Clazz.array(Double.TYPE, [3]), C$.constDs]);C$.$init$.apply(this);
this.inverse=Clazz.new_(C$.c$$DA$net_imglib2_realtransform_Translation3D,[Clazz.array(Double.TYPE, [3]), this]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D', function (tx, ty, tz) {
C$.c$.apply(this, []);
this.set$D$D$D(tx, ty, tz);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (t) {
C$.c$.apply(this, []);
this.set$DA(t);
}, 1);

Clazz.newMeth(C$, 'set$D$D$D', function (tx, ty, tz) {
this.t[0]=tx;
this.t[1]=ty;
this.t[2]=tz;
this.inverse.t[0]=-tx;
this.inverse.t[1]=-ty;
this.inverse.t[2]=-tz;
});

Clazz.newMeth(C$, 'set$DA', function (t) {
Clazz.assert(C$, this, function(){return t.length <= 3}, function(){return "Too many inputs."});
try {
this.t[0]=t[0];
this.t[1]=t[1];
this.t[2]=t[2];
this.inverse.t[0]=-t[0];
this.inverse.t[1]=-t[1];
this.inverse.t[2]=-t[2];
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'set$D$I', function (t, d) {
Clazz.assert(C$, this, function(){return d >= 0 && d < this.numDimensions$() }, function(){return "Dimensions index out of bounds."});
this.t[d]=t;
this.inverse.t[d]=-t;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
target[0]=source[0] + this.t[0];
target[1]=source[1] + this.t[1];
target[2]=source[2] + this.t[2];
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
target[0]=(source[0] + this.t[0]);
target[1]=(source[1] + this.t[1]);
target[2]=(source[2] + this.t[2]);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numDimensions$() && target.numDimensions$() >= this.numDimensions$() }, function(){return "Input dimensions too small."});
target.setPosition$D$I(source.getDoublePosition$I(0) + this.t[0], 0);
target.setPosition$D$I(source.getDoublePosition$I(1) + this.t[1], 1);
target.setPosition$D$I(source.getDoublePosition$I(2) + this.t[2], 2);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
source[0]=target[0] - this.t[0];
source[1]=target[1] - this.t[1];
source[2]=target[2] - this.t[2];
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numDimensions$() && target.length >= this.numDimensions$() }, function(){return "Input dimensions too small."});
source[0]=(target[0] - this.t[0]);
source[1]=(target[1] - this.t[1]);
source[2]=(target[2] - this.t[2]);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numDimensions$() && target.numDimensions$() >= this.numDimensions$() }, function(){return "Input dimensions too small."});
source.setPosition$D$I(target.getDoublePosition$I(0) - this.t[0], 0);
source.setPosition$D$I(target.getDoublePosition$I(1) - this.t[1], 1);
source.setPosition$D$I(target.getDoublePosition$I(2) - this.t[2], 2);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$DA,[this.t]);
});

Clazz.newMeth(C$, 'getRowPackedCopy$', function () {
var matrix=Clazz.array(Double.TYPE, [12]);
matrix[0]=1;
matrix[5]=1;
matrix[10]=1;
matrix[3]=this.t[0];
matrix[7]=this.t[1];
matrix[11]=this.t[2];
return matrix;
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_TranslationGet','preConcatenate$TA'], function (a) {
this.set$D$D$D(this.t[0] + a.getTranslation$I(0), this.t[1] + a.getTranslation$I(1), this.t[2] + a.getTranslation$I(2));
return this;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','inverse$']);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_TranslationGet','concatenate$TA'], function (a) {
return this.preConcatenate$net_imglib2_realtransform_TranslationGet(a);
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),['copy$','inverse$']);
});

Clazz.newMeth(C$, 'isIdentity$', function () {
return this.t[0] == 0  && this.t[1] == 0   && this.t[2] == 0  ;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
