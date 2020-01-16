(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.realtransform.InversePerspective3D']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Perspective3D", null, null, ['net.imglib2.realtransform.InvertibleRealTransform', 'net.imglib2.EuclideanSpace']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['instance','net.imglib2.realtransform.Perspective3D']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "Input dimensions too small."});
target[0]=source[0] / source[2];
target[1]=source[1] / source[2];
target[2]=source[2];
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "Input dimensions too small."});
target[0]=source[0] / source[2];
target[1]=source[1] / source[2];
target[2]=source[2];
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 3 && target.numDimensions$() >= 3 }, function(){return "Input dimensions too small."});
var z=source.getDoublePosition$I(2);
target.setPosition$D$I(source.getDoublePosition$I(0) / z, 0);
target.setPosition$D$I(source.getDoublePosition$I(1) / z, 1);
target.setPosition$D$I(source.getDoublePosition$I(2), 2);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "Input dimensions too small."});
source[0]=target[0] * target[2];
source[1]=target[1] * target[2];
source[2]=target[2];
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= 3 && target.length >= 3 }, function(){return "Input dimensions too small."});
source[0]=target[0] * target[2];
source[1]=target[1] * target[2];
source[2]=target[2];
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
Clazz.assert(C$, this, function(){return source.numDimensions$() >= 3 && target.numDimensions$() >= 3 }, function(){return "Input dimensions too small."});
var z=target.getDoublePosition$I(2);
source.setPosition$D$I(target.getDoublePosition$I(0) * z, 0);
source.setPosition$D$I(target.getDoublePosition$I(1) * z, 1);
source.setPosition$D$I(target.getDoublePosition$I(2), 2);
});

Clazz.newMeth(C$, 'inverse$', function () {
return $I$(1).getInstance$();
});

Clazz.newMeth(C$, 'copy$', function () {
return this;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
