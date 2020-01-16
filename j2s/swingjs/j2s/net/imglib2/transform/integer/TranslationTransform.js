(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[[0,'net.imglib2.transform.integer.TranslationTransform','net.imglib2.transform.integer.Translation',['net.imglib2.transform.integer.TranslationTransform','.InverseTranslationTransform']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TranslationTransform", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.transform.integer.AbstractMixedTransform', ['net.imglib2.transform.integer.Translation', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);
C$.$classes$=[['InverseTranslationTransform',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['translation','long[]','inverse','net.imglib2.transform.integer.TranslationTransform.InverseTranslationTransform']]]

Clazz.newMeth(C$, 'c$$I', function (targetDim) {
;C$.superclazz.c$$I.apply(this,[targetDim]);C$.$init$.apply(this);
this.translation=Clazz.array(Long.TYPE, [targetDim]);
this.inverse=Clazz.new_($I$(3,1).c$$I, [this, null, targetDim]);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (translation) {
;C$.superclazz.c$$I.apply(this,[translation.length]);C$.$init$.apply(this);
this.translation=translation.clone$();
this.inverse=Clazz.new_($I$(3,1).c$$I, [this, null, this.numTargetDimensions]);
}, 1);

Clazz.newMeth(C$, 'getTranslation$JA', function (t) {
Clazz.assert(C$, this, function(){return t.length == this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) t[d]=this.translation[d];

});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.translation[d];
});

Clazz.newMeth(C$, 'setTranslation$JA', function (t) {
Clazz.assert(C$, this, function(){return t.length == this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) this.translation[d]=t[d];

});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=source[d] + this.translation[d];

});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=source[d] + (this.translation[d]|0);

});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target.setPosition$J$I(source.getLongPosition$I(d) + this.translation[d], d);

});

Clazz.newMeth(C$, ['concatenate$net_imglib2_transform_integer_Translation','concatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return this.numTargetDimensions == t.numTargetDimensions$()});
var result=Clazz.new_(C$.c$$I,[this.numTargetDimensions]);
for (var d=0; d < this.numTargetDimensions; ++d) result.translation[d]=this.translation[d] + t.getTranslation$I(d);

return result;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),[]);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_transform_integer_Translation','preConcatenate$TA'], function (t) {
return this.concatenate$net_imglib2_transform_integer_Translation(t);
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),[]);
});

Clazz.newMeth(C$, 'set$net_imglib2_transform_integer_Translation', function (transform) {
Clazz.assert(C$, this, function(){return this.numTargetDimensions == transform.numTargetDimensions$()});
transform.getTranslation$JA(this.translation);
});

Clazz.newMeth(C$, 'getMatrix$', function () {
var mat=Clazz.array(Double.TYPE, [this.numTargetDimensions + 1, this.numTargetDimensions + 1]);
mat[this.numTargetDimensions][this.numTargetDimensions]=1;
for (var d=0; d < this.numTargetDimensions; ++d) {
mat[d][this.numTargetDimensions]=this.translation[d];
mat[d][d]=1;
}
return mat;
});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) source[d]=target[d] - this.translation[d];

});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) source[d]=target[d] - (this.translation[d]|0);

});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) source.setPosition$J$I(target.getLongPosition$I(d) - this.translation[d], d);

});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TranslationTransform, "InverseTranslationTransform", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.transform.integer.AbstractMixedTransform', ['net.imglib2.transform.integer.Translation', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (targetDim) {
;C$.superclazz.c$$I.apply(this,[targetDim]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
this.this$0.applyInverse$JA$JA.apply(this.this$0, [target, source]);
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
this.this$0.applyInverse$IA$IA.apply(this.this$0, [target, source]);
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
this.this$0.applyInverse$net_imglib2_Positionable$net_imglib2_Localizable.apply(this.this$0, [target, source]);
});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
this.this$0.apply$JA$JA.apply(this.this$0, [target, source]);
});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
this.this$0.apply$IA$IA.apply(this.this$0, [target, source]);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
this.this$0.apply$net_imglib2_Localizable$net_imglib2_Positionable.apply(this.this$0, [target, source]);
});

Clazz.newMeth(C$, 'getMatrix$', function () {
var mat=Clazz.array(Double.TYPE, [this.numTargetDimensions + 1, this.numTargetDimensions + 1]);
mat[this.numTargetDimensions][this.numTargetDimensions]=1;
for (var d=0; d < this.numTargetDimensions; ++d) {
mat[d][this.numTargetDimensions]=-this.this$0.translation[d];
mat[d][d]=1;
}
return mat;
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.this$0;
});

Clazz.newMeth(C$, 'getTranslation$JA', function (t) {
Clazz.assert(C$, this, function(){return t.length == this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) t[d]=-this.this$0.translation[d];

});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return -this.this$0.translation[d];
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_transform_integer_Translation','concatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return this.numTargetDimensions == t.numTargetDimensions$()});
var result=Clazz.new_($I$(1,1).c$$I,[this.numTargetDimensions]);
for (var d=0; d < this.numTargetDimensions; ++d) result.translation[d]=t.getTranslation$I(d) - this.this$0.translation[d];

return result;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(2),[]);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_transform_integer_Translation','preConcatenate$TA'], function (t) {
return this.concatenate$net_imglib2_transform_integer_Translation(t);
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(2),[]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
