(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "InvertibleRealTransform", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions$() && target.length >= this.numTargetDimensions$() }, function(){return "Input dimensions too small."});
var doubleSource=Clazz.array(Double.TYPE, [source.length]);
var doubleTarget=Clazz.array(Double.TYPE, [target.length]);
for (var d=0; d < target.length; ++d) doubleTarget[d]=target[d];

this.applyInverse$DA$DA(doubleSource, doubleTarget);
for (var d=0; d < source.length; ++d) source[d]=doubleSource[d];

});
};C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
