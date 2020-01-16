(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),p$1={},I$=[[0,'net.imglib2.realtransform.InterpolatedRealTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClippedTransitionRealTransform", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['transitionOffset','transitionScale'],'I',['maxN'],'O',['interpolant','net.imglib2.realtransform.InterpolatedRealTransform']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_InterpolatedRealTransform$D$D', function (interpolant, transitionOffset, transitionScale) {
;C$.$init$.apply(this);
this.interpolant=interpolant;
this.transitionOffset=transitionOffset;
this.transitionScale=transitionScale;
this.maxN=interpolant.numSourceDimensions$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransform$net_imglib2_realtransform_RealTransform$D$D', function (a, b, min, max) {
C$.c$$net_imglib2_realtransform_InterpolatedRealTransform$D$D.apply(this, [Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_RealTransform$net_imglib2_realtransform_RealTransform$D,[a, b, 1.0]), min, 1.0 / (max - min)]);
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.interpolant.numSourceDimensions$() + 1;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.numSourceDimensions$();
});

Clazz.newMeth(C$, 'lambda$D', function (position) {
return Math.max(0.0, Math.min(1.0, 1.0 - (position - this.transitionOffset) * this.transitionScale));
}, p$1);

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.interpolant.setLambda$D(p$1.lambda$D.apply(this, [source[this.maxN]]));
this.interpolant.apply$DA$DA(source, target);
target[this.maxN]=source[this.maxN];
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
this.interpolant.setLambda$D(p$1.lambda$D.apply(this, [source[this.maxN]]));
this.interpolant.apply$FA$FA(source, target);
target[this.maxN]=source[this.maxN];
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
var z=source.getDoublePosition$I(this.maxN);
this.interpolant.setLambda$D(p$1.lambda$D.apply(this, [z]));
this.interpolant.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, target);
target.setPosition$D$I(z, this.maxN);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_InterpolatedRealTransform$D$D,[this.interpolant.copy$(), this.transitionOffset, this.transitionScale]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
