(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "RealTransform");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
Clazz.assert(C$, this, function(){return source.length >= this.numSourceDimensions$() && target.length >= this.numTargetDimensions$() }, function(){return "Input dimensions too small."});
var doubleSource=Clazz.array(Double.TYPE, [source.length]);
var doubleTarget=Clazz.array(Double.TYPE, [target.length]);
for (var d=0; d < source.length; ++d) doubleSource[d]=source[d];

this.apply$DA$DA(doubleSource, doubleTarget);
for (var d=0; d < target.length; ++d) target[d]=doubleTarget[d];

});

Clazz.newMeth(C$, 'isIdentity$', function () {
return false;
});
};C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
