(function(){var P$=Clazz.newPackage("net.imglib2.transform.integer"),I$=[[0,'net.imglib2.transform.integer.ComponentMapping']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ComponentMappingTransform", null, 'net.imglib2.transform.integer.AbstractMixedTransform', ['net.imglib2.transform.integer.ComponentMapping', 'net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['component','int[]']]]

Clazz.newMeth(C$, 'c$$I', function (targetDim) {
;C$.superclazz.c$$I.apply(this,[targetDim]);C$.$init$.apply(this);
this.component=Clazz.array(Integer.TYPE, [targetDim]);
for (var d=0; d < targetDim; ++d) this.component[d]=d;

}, 1);

Clazz.newMeth(C$, 'c$$IA', function (component) {
;C$.superclazz.c$$I.apply(this,[component.length]);C$.$init$.apply(this);
this.component=component.clone$();
}, 1);

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

Clazz.newMeth(C$, 'getMatrix$', function () {
var mat=Clazz.array(Double.TYPE, [this.numTargetDimensions + 1, this.numTargetDimensions + 1]);
mat[this.numTargetDimensions][this.numTargetDimensions]=1;
for (var d=0; d < this.numTargetDimensions; ++d) {
mat[d][this.component[d]]=1;
}
return mat;
});

Clazz.newMeth(C$, 'apply$JA$JA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=source[this.component[d]];

});

Clazz.newMeth(C$, 'apply$IA$IA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.length >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target[d]=source[this.component[d]];

});

Clazz.newMeth(C$, 'apply$net_imglib2_Localizable$net_imglib2_Positionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= this.numTargetDimensions});
Clazz.assert(C$, this, function(){return target.numDimensions$() >= this.numTargetDimensions});
for (var d=0; d < this.numTargetDimensions; ++d) target.setPosition$J$I(source.getLongPosition$I(this.component[d]), d);

});

Clazz.newMeth(C$, ['concatenate$net_imglib2_transform_integer_ComponentMapping','concatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return this.numTargetDimensions == t.numTargetDimensions$()});
var result=Clazz.new_(C$.c$$I,[this.numTargetDimensions]);
for (var d=0; d < this.numTargetDimensions; ++d) result.component[d]=t.getComponentMapping$I(this.component[d]);

return result;
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(1),[]);
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_transform_integer_ComponentMapping','preConcatenate$TA'], function (t) {
Clazz.assert(C$, this, function(){return this.numTargetDimensions == t.numTargetDimensions$()});
var result=Clazz.new_(C$.c$$I,[this.numTargetDimensions]);
for (var d=0; d < this.numTargetDimensions; ++d) result.component[d]=this.component[t.getComponentMapping$I(d)];

return result;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(1),[]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
