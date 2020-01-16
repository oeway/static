(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.RealPoint']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InterpolatedRealTransform", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['lambda'],'O',['a','net.imglib2.realtransform.RealTransform','+b','targetPositionA','double[]','+targetPositionB','targetPositionableA','net.imglib2.RealPoint','+targetPositionableB']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransform$net_imglib2_realtransform_RealTransform$D', function (a, b, lambda) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return a.numSourceDimensions$() == b.numSourceDimensions$() && a.numTargetDimensions$() == b.numTargetDimensions$() }, function(){return "Number of dimensions do not match."});
this.a=a;
this.b=b;
this.lambda=lambda;
this.targetPositionA=Clazz.array(Double.TYPE, [a.numTargetDimensions$()]);
this.targetPositionB=Clazz.array(Double.TYPE, [b.numTargetDimensions$()]);
this.targetPositionableA=$I$(1).wrap$DA(this.targetPositionA);
this.targetPositionableB=$I$(1).wrap$DA(this.targetPositionB);
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.a.numSourceDimensions$();
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.targetPositionA.length;
});

Clazz.newMeth(C$, 'setLambda$D', function (lambda) {
this.lambda=lambda;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
this.a.apply$DA$DA(source, this.targetPositionA);
this.b.apply$DA$DA(source, this.targetPositionB);
for (var d=0; d < this.targetPositionA.length; d++) target[d]=(this.targetPositionA[d] - this.targetPositionB[d]) * this.lambda + this.targetPositionB[d];

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
for (var d=0; d < this.targetPositionA.length; d++) {
this.targetPositionA[d]=source[d];
this.targetPositionB[d]=source[d];
}
this.a.apply$DA$DA(this.targetPositionA, this.targetPositionA);
this.b.apply$DA$DA(this.targetPositionB, this.targetPositionB);
for (var d=0; d < this.targetPositionA.length; d++) target[d]=((this.targetPositionA[d] - this.targetPositionB[d]) * this.lambda + this.targetPositionB[d]);

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
this.a.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, this.targetPositionableA);
this.b.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(source, this.targetPositionableB);
for (var d=0; d < this.numTargetDimensions$(); d++) target.setPosition$D$I((this.targetPositionA[d] - this.targetPositionB[d]) * this.lambda + this.targetPositionB[d], d);

});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_RealTransform$net_imglib2_realtransform_RealTransform$D,[this.a.copy$(), this.b.copy$(), this.lambda]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
