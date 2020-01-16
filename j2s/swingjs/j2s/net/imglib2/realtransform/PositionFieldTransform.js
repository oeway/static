(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'java.util.Arrays','net.imglib2.RealRandomAccess']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PositionFieldTransform", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['positionAccesses','net.imglib2.RealRandomAccess[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessA', function (positionAccesses) {
;C$.$init$.apply(this);
this.positionAccesses=positionAccesses;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealRandomAccessibleA', function (positions) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return ($I$(1).stream$TTA(positions).allMatch$java_util_function_Predicate(((P$.PositionFieldTransform$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PositionFieldTransform$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (p) { return (p.numDimensions$() == this.$finals$.positions.length);});
})()
), Clazz.new_(1,{T:"? super net.imglib2.RealRandomAccessible"},P$.PositionFieldTransform$lambda1.$init$, [this, {positions:positions}]))))}, function(){return "Dimensions do not match."});
this.positionAccesses=Clazz.array($I$(2), [positions.length]);
$I$(1).setAll$TTA$java_util_function_IntFunction(this.positionAccesses, ((P$.PositionFieldTransform$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PositionFieldTransform$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return (this.$finals$.positions[i].realRandomAccess$());});
})()
), Clazz.new_(1,{R:"? extends net.imglib2.RealRandomAccess"},P$.PositionFieldTransform$lambda2.$init$, [this, {positions:positions}])));
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.positionAccesses.length;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.positionAccesses.length;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
for (var d=0; d < this.positionAccesses.length; d++) this.positionAccesses[d].setPosition$DA(source);

for (var d=0; d < this.positionAccesses.length; d++) target[d]=this.positionAccesses[d].get$().getRealDouble$();

});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
for (var d=0; d < this.positionAccesses.length; d++) this.positionAccesses[d].setPosition$FA(source);

for (var d=0; d < this.positionAccesses.length; d++) target[d]=this.positionAccesses[d].get$().getRealDouble$();

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
for (var d=0; d < this.positionAccesses.length; d++) this.positionAccesses[d].setPosition$net_imglib2_RealLocalizable(source);

for (var d=0; d < this.positionAccesses.length; d++) target.setPosition$D$I(this.positionAccesses[d].get$().getRealDouble$(), d);

});

Clazz.newMeth(C$, 'copy$', function () {
var accessCopies=Clazz.array($I$(2), [this.positionAccesses.length]);
$I$(1).setAll$TTA$java_util_function_IntFunction(accessCopies, (P$.PositionFieldTransform$lambda3$||(P$.PositionFieldTransform$lambda3$=(((P$.PositionFieldTransform$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PositionFieldTransform$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return (this.b$['net.imglib2.realtransform.PositionFieldTransform'].positionAccesses[i].copyRealRandomAccess$());});
})()
), Clazz.new_(1,{R:"? extends net.imglib2.RealRandomAccess"},P$.PositionFieldTransform$lambda3.$init$, [this, null]))))));
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RealRandomAccessA,[accessCopies]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
