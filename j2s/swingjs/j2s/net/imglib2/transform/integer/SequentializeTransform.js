(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequentializeTransform", null, null, 'net.imglib2.transform.InvertibleTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numSourceDimensions','numTargetDimensions','maxSourceDimension','maxTargetDimension'],'O',['seqDimensions','long[]','inverse','net.imglib2.transform.InvertibleTransform']]]

Clazz.newMeth(C$, 'c$$JA$I', function (sourceDimensions, numTargetDimensions) {
;C$.$init$.apply(this);
this.numSourceDimensions=sourceDimensions.length;
this.numTargetDimensions=numTargetDimensions;
this.maxTargetDimension=numTargetDimensions - 1;
this.maxSourceDimension=this.numSourceDimensions - 1;
Clazz.assert(C$, this, function(){return this.numSourceDimensions > this.numTargetDimensions});
this.seqDimensions=Clazz.array(Long.TYPE, [this.numSourceDimensions]);
for (var d=this.maxTargetDimension; d < this.numSourceDimensions; ++d) {
this.seqDimensions[d]=sourceDimensions[d];
}
this.inverse=((P$.SequentializeTransform$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SequentializeTransform$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'net.imglib2.transform.InvertibleTransform', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.b$['net.imglib2.transform.integer.SequentializeTransform'].numTargetDimensions$.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], []);
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.b$['net.imglib2.transform.integer.SequentializeTransform'].numSourceDimensions$.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], []);
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
this.b$['net.imglib2.transform.integer.SequentializeTransform'].applyInverse$JA$JA.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], [target, source]);
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
this.b$['net.imglib2.transform.integer.SequentializeTransform'].applyInverse$IA$IA.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], [target, source]);
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
this.b$['net.imglib2.transform.integer.SequentializeTransform'].applyInverse$net_imglib2_Positionable$net_imglib2_Localizable.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], [target, source]);
});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
this.b$['net.imglib2.transform.integer.SequentializeTransform'].apply$JA$JA.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], [target, source]);
});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
this.b$['net.imglib2.transform.integer.SequentializeTransform'].apply$IA$IA.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], [target, source]);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
this.b$['net.imglib2.transform.integer.SequentializeTransform'].apply$net_imglib2_Localizable$net_imglib2_Positionable.apply(this.b$['net.imglib2.transform.integer.SequentializeTransform'], [target, source]);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.b$['net.imglib2.transform.integer.SequentializeTransform'];
});
})()
), Clazz.new_(P$.SequentializeTransform$1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.numSourceDimensions;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numTargetDimensions;
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.maxTargetDimension; ++d) target[d]=source[d];

var i=source[this.maxSourceDimension];
for (var d=this.maxSourceDimension - 1; d >= this.maxTargetDimension; --d) i=i * this.seqDimensions[d] + source[d];

target[this.maxTargetDimension]=i;
});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.maxTargetDimension; ++d) target[d]=source[d];

var i=source[this.maxSourceDimension];
for (var d=this.maxSourceDimension - 1; d >= this.maxTargetDimension; --d) i=i * (this.seqDimensions[d]|0) + source[d];

target[this.maxTargetDimension]=i;
});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.maxTargetDimension; ++d) target.setPosition$J$I(source.getLongPosition$I(d), d);

var i=source.getLongPosition$I(this.maxSourceDimension);
for (var d=this.maxSourceDimension - 1; d >= this.maxTargetDimension; --d) i=i * this.seqDimensions[d] + source.getLongPosition$I(d);

target.setPosition$J$I(i, this.maxTargetDimension);
});

Clazz.newMeth(C$, 'applyInverse$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.maxTargetDimension; ++d) source[d]=target[d];

var i=target[this.maxTargetDimension];
for (var d=this.maxTargetDimension; d < this.maxSourceDimension; ++d) {
var j=(i/this.seqDimensions[d]|0);
source[d]=i - j * this.seqDimensions[d];
i=j;
}
source[this.maxSourceDimension]=i;
});

Clazz.newMeth(C$, 'applyInverse$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.maxTargetDimension; ++d) source[d]=target[d];

var i=target[this.maxTargetDimension];
for (var d=this.maxTargetDimension; d < this.maxSourceDimension; ++d) {
var j=(((i/this.seqDimensions[d]|0))|0);
source[d]=((i - j * this.seqDimensions[d])|0);
i=j;
}
source[this.maxSourceDimension]=i;
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_Positionable$net_imglib2_Localizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numSourceDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.maxTargetDimension; ++d) source.setPosition$J$I(target.getLongPosition$I(d), d);

var i=target.getLongPosition$I(this.maxTargetDimension);
for (var d=this.maxTargetDimension; d < this.maxSourceDimension; ++d) {
var j=((i/this.seqDimensions[d]|0));
source.setPosition$J$I(i - j * this.seqDimensions[d], d);
i=j;
}
source.setPosition$J$I(i, this.maxSourceDimension);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
