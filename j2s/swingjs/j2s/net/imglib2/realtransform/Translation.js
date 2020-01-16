(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.realtransform.TranslationGet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Translation", null, 'net.imglib2.realtransform.AbstractTranslation', ['net.imglib2.concatenate.Concatenable', 'net.imglib2.concatenate.PreConcatenable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.Translation']]]

Clazz.newMeth(C$, 'c$$DA$net_imglib2_realtransform_Translation', function (t, inverse) {
;C$.superclazz.c$$DA$net_imglib2_RealPointA.apply(this,[t, inverse.ds]);C$.$init$.apply(this);
this.inverse=inverse;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
this.inverse=Clazz.new_(C$.c$$DA$net_imglib2_realtransform_Translation,[Clazz.array(Double.TYPE, [n]), this]);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (t) {
C$.c$$I.apply(this, [t.length]);
this.set$DA(t);
}, 1);

Clazz.newMeth(C$, 'set$DA', function (t) {
Clazz.assert(C$, this, function(){return t.length <= this.t.length}, function(){return "Too many inputs."});
for (var d=0; d < t.length; ++d) {
this.t[d]=t[d];
this.inverse.t[d]=-t[d];
}
});

Clazz.newMeth(C$, 'set$D$I', function (t, d) {
Clazz.assert(C$, this, function(){return d >= 0 && d < this.numDimensions$() }, function(){return "Dimension index out of bounds."});
this.t[d]=t;
this.inverse.t[d]=-t;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$DA,[this.t]);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, ['preConcatenate$net_imglib2_realtransform_TranslationGet','preConcatenate$TA'], function (a) {
for (var d=0; d < this.numDimensions$(); ++d) this.set$DA([this.t[d] + a.getTranslation$I(d)]);

return this;
});

Clazz.newMeth(C$, 'getPreConcatenableClass$', function () {
return Clazz.getClass($I$(1),['copy$','inverse$']);
});

Clazz.newMeth(C$, ['concatenate$net_imglib2_realtransform_TranslationGet','concatenate$TA'], function (a) {
return this.preConcatenate$net_imglib2_realtransform_TranslationGet(a);
});

Clazz.newMeth(C$, 'getConcatenableClass$', function () {
return Clazz.getClass($I$(1),['copy$','inverse$']);
});

Clazz.newMeth(C$, 'isIdentity$', function () {
for (var i=0; i < this.t.length; i++) {
if (this.t[i] != 0.0 ) {
return false;
}}
return true;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
