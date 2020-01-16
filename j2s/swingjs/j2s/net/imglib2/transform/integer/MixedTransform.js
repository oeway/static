(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[[0,'net.imglib2.transform.integer.Mixed']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MixedTransform", null, 'net.imglib2.transform.integer.AbstractMixedTransform', ['net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSourceDimensions'],'O',['translation','long[]','zero','boolean[]','+invert','component','int[]']]]

Clazz.newMeth(C$, 'c$$I$I', function (sourceDim, targetDim) {
;C$.superclazz.c$$I.apply(this,[targetDim]);C$.$init$.apply(this);
this.numSourceDimensions=sourceDim;
this.translation=Clazz.array(Long.TYPE, [targetDim]);
this.zero=Clazz.array(Boolean.TYPE, [targetDim]);
this.invert=Clazz.array(Boolean.TYPE, [targetDim]);
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

Clazz.newMeth(C$, 'setInverseTranslation$JA', function (tinv) {
Clazz.assert(C$, this, function(){return tinv.length == this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) this.translation[d]=-tinv[d];

});

Clazz.newMeth(C$, 'getComponentZero$ZA', function (zero) {
Clazz.assert(C$, this, function(){return zero.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
zero[d]=this.zero[d];
}
});

Clazz.newMeth(C$, 'getComponentZero$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.zero[d];
});

Clazz.newMeth(C$, 'setComponentZero$ZA', function (zero) {
Clazz.assert(C$, this, function(){return zero.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
this.zero[d]=zero[d];
}
});

Clazz.newMeth(C$, 'getComponentMapping$IA', function (component) {
Clazz.assert(C$, this, function(){return component.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
component[d]=this.component[d];
}
});

Clazz.newMeth(C$, 'getComponentMapping$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.component[d];
});

Clazz.newMeth(C$, 'setComponentMapping$IA', function (component) {
Clazz.assert(C$, this, function(){return component.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
this.component[d]=component[d];
}
});

Clazz.newMeth(C$, 'getComponentInversion$ZA', function (invert) {
Clazz.assert(C$, this, function(){return invert.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
invert[d]=this.invert[d];
}
});

Clazz.newMeth(C$, 'getComponentInversion$I', function (d) {
Clazz.assert(C$, this, function(){return d <= this.numTargetDimensions});
return this.invert[d];
});

Clazz.newMeth(C$, 'setComponentInversion$ZA', function (invert) {
Clazz.assert(C$, this, function(){return invert.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
this.invert[d]=invert[d];
}
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
target[d]=this.translation[d];
if (!this.zero[d]) {
var v=source[this.component[d]];
if (this.invert[d]) target[d]-=v;
 else target[d]+=v;
}}
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
target[d]=(this.translation[d]|0);
if (!this.zero[d]) {
var v=source[this.component[d]];
if (this.invert[d]) target[d]-=v;
 else target[d]+=v;
}}
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) {
var pos=this.translation[d];
if (!this.zero[d]) {
var v=source.getLongPosition$I(this.component[d]);
if (this.invert[d]) pos-=v;
 else pos+=v;
}target.setPosition$J$I(pos, d);
}
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_transform_integer_Mixed','concatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return this.numSourceDimensions == t.numTargetDimensions$()});
var result=Clazz.new_(C$.c$$I$I,[t.numSourceDimensions$(), this.numTargetDimensions]);
for (var d=0; d < result.numTargetDimensions; ++d) {
result.translation[d]=this.translation[d];
if (this.zero[d]) {
result.zero[d]=true;
result.invert[d]=false;
result.component[d]=0;
} else {
var c=this.component[d];
var v=t.getTranslation$I(c);
if (this.invert[d]) result.translation[d]-=v;
 else result.translation[d]+=v;
if (t.getComponentZero$I(c)) {
result.zero[d]=true;
result.invert[d]=false;
result.component[d]=0;
} else {
result.zero[d]=false;
result.invert[d]=(this.invert[d] != t.getComponentInversion$I(c) );
result.component[d]=t.getComponentMapping$I(c);
}}}
return result;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(1),['getComponentInversion$ZA','getComponentInversion$I','getComponentMapping$IA','getComponentMapping$I','getComponentZero$ZA','getComponentZero$I','getMatrix$','getTranslation$JA','getTranslation$I']);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_transform_integer_Mixed','preConcatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return t.numSourceDimensions$() == this.numTargetDimensions});
var result=Clazz.new_(C$.c$$I$I,[this.numSourceDimensions, t.numTargetDimensions$()]);
for (var d=0; d < result.numTargetDimensions; ++d) {
result.translation[d]=t.getTranslation$I(d);
if (t.getComponentZero$I(d)) {
result.zero[d]=true;
result.invert[d]=false;
result.component[d]=0;
} else {
var c=t.getComponentMapping$I(d);
var v=this.translation[c];
if (t.getComponentInversion$I(d)) result.translation[d]-=v;
 else result.translation[d]+=v;
if (this.zero[c]) {
result.zero[d]=true;
result.invert[d]=false;
result.component[d]=0;
} else {
result.zero[d]=false;
result.invert[d]=(t.getComponentInversion$I(d) != this.invert[c] );
result.component[d]=this.component[c];
}}}
return result;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(1),['getComponentInversion$ZA','getComponentInversion$I','getComponentMapping$IA','getComponentMapping$I','getComponentZero$ZA','getComponentZero$I','getMatrix$','getTranslation$JA','getTranslation$I']);
});

Clazz.newMeth(C$, 'set$net_imglib2_transform_integer_Mixed', function (transform) {
Clazz.assert(C$, this, function(){return this.numSourceDimensions == transform.numSourceDimensions$()});
Clazz.assert(C$, this, function(){return this.numTargetDimensions == transform.numTargetDimensions$()});
transform.getTranslation$JA(this.translation);
transform.getComponentZero$ZA(this.zero);
transform.getComponentMapping$IA(this.component);
transform.getComponentInversion$ZA(this.invert);
});

Clazz.newMeth(C$, 'getMatrix$', function () {
var mat=Clazz.array(Double.TYPE, [this.numTargetDimensions + 1, this.numSourceDimensions + 1]);
mat[this.numTargetDimensions][this.numSourceDimensions]=1;
for (var d=0; d < this.numTargetDimensions; ++d) {
mat[d][this.numSourceDimensions]=this.translation[d];
}
for (var d=0; d < this.numTargetDimensions; ++d) {
if (this.zero[d] == false ) {
mat[d][this.component[d]]=this.invert[d] ? -1 : 1;
}}
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