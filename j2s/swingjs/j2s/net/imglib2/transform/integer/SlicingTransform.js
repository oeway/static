(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[[0,'net.imglib2.transform.integer.Slicing']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SlicingTransform", null, 'net.imglib2.transform.integer.AbstractMixedTransform', ['net.imglib2.transform.integer.Slicing', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSourceDimensions'],'O',['zero','boolean[]','translation','long[]','component','int[]']]]

Clazz.newMeth(C$, 'c$$I$I', function (sourceDim, targetDim) {
;C$.superclazz.c$$I.apply(this,[targetDim]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return sourceDim <= targetDim});
this.numSourceDimensions=sourceDim;
this.translation=Clazz.array(Long.TYPE, [targetDim]);
this.zero=Clazz.array(Boolean.TYPE, [targetDim]);
this.component=Clazz.array(Integer.TYPE, [targetDim]);
for (var d=0; d < targetDim; ++d) {
if (d < sourceDim) {
this.component[d]=d;
} else {
this.component[d]=0;
this.zero[d]=true;
}}
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numSourceDimensions;
});

Clazz.newMeth(C$, 'getTranslation$JA', function (t) {
Clazz.assert(C$, this, function(){return t.length == this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) t[d]=this.zero[d] ? this.translation[d] : 0;

});

Clazz.newMeth(C$, 'getTranslation$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.zero[d] ? this.translation[d] : 0;
});

Clazz.newMeth(C$, 'setTranslation$JA', function (t) {
Clazz.assert(C$, this, function(){return t.length == this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) this.translation[d]=t[d];

});

Clazz.newMeth(C$, 'getComponentZero$ZA', function (zero) {
Clazz.assert(C$, this, function(){return zero.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) zero[d]=this.zero[d];

});

Clazz.newMeth(C$, 'getComponentZero$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.zero[d];
});

Clazz.newMeth(C$, 'setComponentZero$ZA', function (zero) {
Clazz.assert(C$, this, function(){return zero.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) this.zero[d]=zero[d];

});

Clazz.newMeth(C$, 'getComponentMapping$IA', function (component) {
Clazz.assert(C$, this, function(){return component.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) component[d]=this.component[d];

});

Clazz.newMeth(C$, 'getComponentMapping$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.component[d];
});

Clazz.newMeth(C$, 'setComponentMapping$IA', function (component) {
Clazz.assert(C$, this, function(){return component.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) this.component[d]=component[d];

});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=this.zero[d] ? this.translation[d] : source[this.component[d]];

});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=this.zero[d] ? (this.translation[d]|0) : source[this.component[d]];

});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target.setPosition$J$I(this.zero[d] ? (this.translation[d]|0) : source.getLongPosition$I(this.component[d]), d);

});

Clazz.newMeth(C$, ['concatenate$net_imglib2_transform_integer_Slicing','concatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return this.numSourceDimensions == t.numTargetDimensions$()});
var result=Clazz.new_(C$.c$$I$I,[t.numSourceDimensions$(), this.numTargetDimensions]);
for (var d=0; d < result.numTargetDimensions; ++d) {
if (this.zero[d]) {
result.zero[d]=true;
result.translation[d]=this.translation[d];
} else {
var c=this.component[d];
if (t.getComponentZero$I(c)) {
result.zero[d]=true;
result.translation[d]=t.getTranslation$I(c);
} else {
result.zero[d]=false;
result.component[d]=t.getComponentMapping$I(c);
}}}
return result;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(1),[]);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_transform_integer_Slicing','preConcatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return t.numSourceDimensions$() == this.numTargetDimensions});
var result=Clazz.new_(C$.c$$I$I,[this.numSourceDimensions, t.numTargetDimensions$()]);
for (var d=0; d < result.numTargetDimensions; ++d) {
if (t.getComponentZero$I(d)) {
result.zero[d]=true;
result.translation[d]=t.getTranslation$I(d);
} else {
var c=t.getComponentMapping$I(d);
if (this.zero[c]) {
result.zero[d]=true;
result.translation[d]=this.translation[c];
} else {
result.zero[d]=false;
result.component[d]=this.component[c];
}}}
return result;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(1),[]);
});

Clazz.newMeth(C$, 'set$net_imglib2_transform_integer_Slicing', function (transform) {
Clazz.assert(C$, this, function(){return this.numSourceDimensions == transform.numSourceDimensions$()});
Clazz.assert(C$, this, function(){return this.numTargetDimensions == transform.numTargetDimensions$()});
transform.getTranslation$JA(this.translation);
transform.getComponentZero$ZA(this.zero);
transform.getComponentMapping$IA(this.component);
});

Clazz.newMeth(C$, 'getMatrix$', function () {
var mat=Clazz.array(Double.TYPE, [this.numTargetDimensions + 1, this.numSourceDimensions + 1]);
mat[this.numTargetDimensions][this.numSourceDimensions]=1;
for (var d=0; d < this.numTargetDimensions; ++d) mat[d][this.numSourceDimensions]=this.getTranslation$I(d);

for (var d=0; d < this.numTargetDimensions; ++d) if (this.zero[d] == false ) mat[d][this.component[d]]=1;

return mat;
});

Clazz.newMeth(C$, 'hasFullSourceMapping$', function () {
var sourceMapped=Clazz.array(Boolean.TYPE, [this.numSourceDimensions]);
for (var d=0; d < this.numTargetDimensions; ++d) {
if (!this.zero[d]) {
sourceMapped[this.component[d]]=true;
}}
for (var d=0; d < this.numSourceDimensions; ++d) {
if (!sourceMapped[d]) {
return false;
}}
return true;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
