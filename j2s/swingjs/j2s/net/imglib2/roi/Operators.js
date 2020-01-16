(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'net.imglib2.roi.BoundaryType',['net.imglib2.roi.Bounds','.IntBounds'],'net.imglib2.roi.composite.DefaultBinaryCompositeMask','net.imglib2.roi.composite.DefaultBinaryCompositeMaskInterval',['net.imglib2.roi.Bounds','.RealBounds'],'net.imglib2.roi.composite.DefaultBinaryCompositeRealMask','net.imglib2.roi.composite.DefaultBinaryCompositeRealMaskRealInterval','net.imglib2.roi.composite.DefaultUnaryCompositeMask','net.imglib2.roi.composite.DefaultUnaryCompositeMaskInterval','net.imglib2.roi.composite.DefaultUnaryCompositeRealMask','net.imglib2.roi.composite.DefaultUnaryCompositeRealMaskRealInterval','ThreadLocal','net.imglib2.RealPoint','java.util.function.UnaryOperator','net.imglib2.roi.composite.RealTransformUnaryCompositeRealMaskRealInterval',['net.imglib2.roi.Bounds','.RealTransformRealInterval'],'net.imglib2.roi.composite.RealTransformUnaryCompositeRealMask',['net.imglib2.roi.Operators','.BinaryMaskOperator'],'net.imglib2.roi.Bounds','net.imglib2.roi.KnownConstant',['net.imglib2.roi.Operators','.UnaryMaskOperator'],'java.util.Arrays','net.imglib2.EuclideanSpace']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Operators", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MaskOperator',9],['BinaryMaskOperator',1033],['UnaryMaskOperator',1033],['RealTransformMaskOperator',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.AND=((P$.Operators$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Operators$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['net.imglib2.roi.Operators','.BinaryMaskOperator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'predicate$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
return ((P$.Operators$1$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$1$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (this.$finals$.left.test$(t) && this.$finals$.right.test$(t) );});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$1$lambda1.$init$, [this, {left:left,right:right}]));
});
})()
), Clazz.new_($I$(18,1).c$$java_util_function_BinaryOperator$net_imglib2_roi_Bounds_BinaryBoundsOperator$java_util_function_BinaryOperator, [this, null, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.and$net_imglib2_roi_BoundaryType.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.BoundaryType"},P$.Operators$lambda2.$init$, [this, null])})($I$(1)), $I$(19).AND, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.and$net_imglib2_roi_KnownConstant.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.KnownConstant"},P$.Operators$lambda3.$init$, [this, null])})($I$(20))],P$.Operators$1));
C$.OR=((P$.Operators$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Operators$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['net.imglib2.roi.Operators','.BinaryMaskOperator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'predicate$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
return ((P$.Operators$2$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$2$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (this.$finals$.left.test$(t) || this.$finals$.right.test$(t) );});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$2$lambda4.$init$, [this, {left:left,right:right}]));
});
})()
), Clazz.new_($I$(18,1).c$$java_util_function_BinaryOperator$net_imglib2_roi_Bounds_BinaryBoundsOperator$java_util_function_BinaryOperator, [this, null, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.or$net_imglib2_roi_BoundaryType.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.BoundaryType"},P$.Operators$lambda5.$init$, [this, null])})($I$(1)), $I$(19).OR, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.or$net_imglib2_roi_KnownConstant.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.KnownConstant"},P$.Operators$lambda6.$init$, [this, null])})($I$(20))],P$.Operators$2));
C$.XOR=((P$.Operators$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Operators$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['net.imglib2.roi.Operators','.BinaryMaskOperator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'predicate$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
if (left.equals$O(right)) return (P$.Operators$3$lambda7$||(P$.Operators$3$lambda7$=(((P$.Operators$3$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$3$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (false);});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$3$lambda7.$init$, [this, null])))));
return ((P$.Operators$3$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$3$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (!!(this.$finals$.left.test$(t) ^ this.$finals$.right.test$(t)));});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$3$lambda8.$init$, [this, {left:left,right:right}]));
});
})()
), Clazz.new_($I$(18,1).c$$java_util_function_BinaryOperator$net_imglib2_roi_Bounds_BinaryBoundsOperator$java_util_function_BinaryOperator, [this, null, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.xor$net_imglib2_roi_BoundaryType.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.BoundaryType"},P$.Operators$lambda9.$init$, [this, null])})($I$(1)), $I$(19).XOR, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.xor$net_imglib2_roi_KnownConstant.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.KnownConstant"},P$.Operators$lambda10.$init$, [this, null])})($I$(20))],P$.Operators$3));
C$.MINUS=((P$.Operators$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Operators$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['net.imglib2.roi.Operators','.BinaryMaskOperator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'predicate$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
if (left.equals$O(right)) return (P$.Operators$4$lambda11$||(P$.Operators$4$lambda11$=(((P$.Operators$4$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$4$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (false);});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$4$lambda11.$init$, [this, null])))));
return ((P$.Operators$4$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$4$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (this.$finals$.left.test$(t) && !this.$finals$.right.test$(t) );});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$4$lambda12.$init$, [this, {left:left,right:right}]));
});
})()
), Clazz.new_($I$(18,1).c$$java_util_function_BinaryOperator$net_imglib2_roi_Bounds_BinaryBoundsOperator$java_util_function_BinaryOperator, [this, null, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.minus$net_imglib2_roi_BoundaryType.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.BoundaryType"},P$.Operators$lambda13.$init$, [this, null])})($I$(1)), $I$(19).MINUS, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t,u) { return t.minus$net_imglib2_roi_KnownConstant.apply(t,[u])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.KnownConstant"},P$.Operators$lambda14.$init$, [this, null])})($I$(20))],P$.Operators$4));
C$.NEGATE=((P$.Operators$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Operators$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['net.imglib2.roi.Operators','.UnaryMaskOperator']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'predicate$java_util_function_Predicate', function (arg) {
return ((P$.Operators$5$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$5$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (t) { return (!this.$finals$.arg.test$(t));});
})()
), Clazz.new_(1,{T:"Object"},P$.Operators$5$lambda15.$init$, [this, {arg:arg}]));
});
})()
), Clazz.new_($I$(21,1).c$$java_util_function_UnaryOperator$net_imglib2_roi_Bounds_UnaryBoundsOperator$java_util_function_UnaryOperator, [this, null, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.UnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t) { return t.negate$.apply(t,[])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.BoundaryType"},P$.Operators$lambda16.$init$, [this, null])})($I$(1)), $I$(19).NEGATE, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.UnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t) { return t.negate$.apply(t,[])});
})()
)); return Clazz.new_(1,{T:"net.imglib2.roi.KnownConstant"},P$.Operators$lambda17.$init$, [this, null])})($I$(20))],P$.Operators$5));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['AND','net.imglib2.roi.Operators.BinaryMaskOperator','+OR','+XOR','+MINUS','NEGATE','net.imglib2.roi.Operators.UnaryMaskOperator']]]

Clazz.newMeth(C$, 'checkDimensions$OA', function (args) {
var dimensionalities=$I$(22).stream$TTA(args).filter$java_util_function_Predicate((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$', function (t) { return $$.isInstance$O.apply($$,[t])});
})()
)); return Clazz.new_(1,{T:"? super java.lang.Object"},P$.Operators$lambda18.$init$, [this, null])})(Clazz.getClass($I$(23),['numDimensions$']))).mapToInt$java_util_function_ToIntFunction((P$.Operators$lambda19$||(P$.Operators$lambda19$=(((P$.Operators$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (arg) { return ((arg).numDimensions$());});
})()
), Clazz.new_(1,{T:"? super java.lang.Object"},P$.Operators$lambda19.$init$, [this, null])))))).distinct$().toArray$();
switch (dimensionalities.length) {
case 0:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["couldn\'t find dimensionality"]);
case 1:
return dimensionalities[0];
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["incompatible dimensionalities"]);
}
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Operators, "MaskOperator", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Operators, "BinaryMaskOperator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.roi.Operators','net.imglib2.roi.Operators.MaskOperator']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['boundaryTypeOp','java.util.function.BinaryOperator','boundsOp','net.imglib2.roi.Bounds.BinaryBoundsOperator','knownConstantOp','java.util.function.BinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_function_BinaryOperator$net_imglib2_roi_Bounds_BinaryBoundsOperator$java_util_function_BinaryOperator', function (boundaryTypeOp, boundsOp, knownConstantOp) {
;C$.$init$.apply(this);
this.boundaryTypeOp=boundaryTypeOp;
this.boundsOp=boundsOp;
this.knownConstantOp=knownConstantOp;
}, 1);

Clazz.newMeth(C$, 'apply$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
var n=P$.Operators.checkDimensions$OA([left, right]);
var boundaryType=this.boundaryTypeOp.apply$($I$(1).of$java_util_function_Predicate(left), $I$(1).of$java_util_function_Predicate(right));
var bounds=this.boundsOp.apply$($I$(2).of$java_util_function_Predicate(left), $I$(2).of$java_util_function_Predicate(right));
if (bounds.isUnbounded$()) return Clazz.new_($I$(3,1).c$$net_imglib2_roi_Operators_BinaryMaskOperator$java_util_function_Predicate$java_util_function_Predicate$I$net_imglib2_roi_BoundaryType$java_util_function_BinaryOperator,[this, left, right, n, boundaryType, this.knownConstantOp]);
return Clazz.new_($I$(4,1).c$$net_imglib2_roi_Operators_BinaryMaskOperator$java_util_function_Predicate$java_util_function_Predicate$net_imglib2_Interval$net_imglib2_roi_BoundaryType$java_util_function_BinaryOperator,[this, left, right, bounds.interval$(), boundaryType, this.knownConstantOp]);
});

Clazz.newMeth(C$, 'applyReal$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
var n=P$.Operators.checkDimensions$OA([left, right]);
var boundaryType=this.boundaryTypeOp.apply$($I$(1).of$java_util_function_Predicate(left), $I$(1).of$java_util_function_Predicate(right));
var bounds=this.boundsOp.apply$($I$(5).of$java_util_function_Predicate(left), $I$(5).of$java_util_function_Predicate(right));
if (bounds.isUnbounded$()) return Clazz.new_($I$(6,1).c$$net_imglib2_roi_Operators_BinaryMaskOperator$java_util_function_Predicate$java_util_function_Predicate$I$net_imglib2_roi_BoundaryType$java_util_function_BinaryOperator,[this, left, right, n, boundaryType, this.knownConstantOp]);
return Clazz.new_($I$(7,1).c$$net_imglib2_roi_Operators_BinaryMaskOperator$java_util_function_Predicate$java_util_function_Predicate$net_imglib2_RealInterval$net_imglib2_roi_BoundaryType$java_util_function_BinaryOperator,[this, left, right, bounds.interval$(), boundaryType, this.knownConstantOp]);
});

Clazz.newMeth(C$, 'applyInterval$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
var mask=this.apply$java_util_function_Predicate$java_util_function_Predicate(left, right);
if (Clazz.instanceOf(mask, "net.imglib2.roi.MaskInterval")) return mask;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["result is not an interval"]);
});

Clazz.newMeth(C$, 'applyRealInterval$java_util_function_Predicate$java_util_function_Predicate', function (left, right) {
var mask=this.applyReal$java_util_function_Predicate$java_util_function_Predicate(left, right);
if (Clazz.instanceOf(mask, "net.imglib2.roi.RealMaskRealInterval")) return mask;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["result is not an interval"]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Operators, "UnaryMaskOperator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.roi.Operators','net.imglib2.roi.Operators.MaskOperator']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['boundaryTypeOp','java.util.function.UnaryOperator','boundsOp','net.imglib2.roi.Bounds.UnaryBoundsOperator','knownConstantOp','java.util.function.UnaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_function_UnaryOperator$net_imglib2_roi_Bounds_UnaryBoundsOperator$java_util_function_UnaryOperator', function (boundaryTypeOp, boundsOp, knownConstantOp) {
;C$.$init$.apply(this);
this.boundaryTypeOp=boundaryTypeOp;
this.boundsOp=boundsOp;
this.knownConstantOp=knownConstantOp;
}, 1);

Clazz.newMeth(C$, 'apply$java_util_function_Predicate', function (arg) {
var n=P$.Operators.checkDimensions$OA([arg]);
var boundaryType=this.boundaryTypeOp.apply$($I$(1).of$java_util_function_Predicate(arg));
var bounds=this.boundsOp.apply$($I$(2).of$java_util_function_Predicate(arg));
if (bounds.isUnbounded$()) return Clazz.new_($I$(8,1).c$$net_imglib2_roi_Operators_UnaryMaskOperator$java_util_function_Predicate$I$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator,[this, arg, n, boundaryType, this.knownConstantOp]);
return Clazz.new_($I$(9,1).c$$net_imglib2_roi_Operators_UnaryMaskOperator$java_util_function_Predicate$net_imglib2_Interval$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator,[this, arg, bounds.interval$(), boundaryType, this.knownConstantOp]);
});

Clazz.newMeth(C$, 'applyReal$java_util_function_Predicate', function (arg) {
var n=P$.Operators.checkDimensions$OA([arg]);
var boundaryType=this.boundaryTypeOp.apply$($I$(1).of$java_util_function_Predicate(arg));
var bounds=this.boundsOp.apply$($I$(5).of$java_util_function_Predicate(arg));
if (bounds.isUnbounded$()) return Clazz.new_($I$(10,1).c$$net_imglib2_roi_Operators_UnaryMaskOperator$java_util_function_Predicate$I$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator,[this, arg, n, boundaryType, this.knownConstantOp]);
return Clazz.new_($I$(11,1).c$$net_imglib2_roi_Operators_UnaryMaskOperator$java_util_function_Predicate$net_imglib2_RealInterval$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator,[this, arg, bounds.interval$(), boundaryType, this.knownConstantOp]);
});

Clazz.newMeth(C$, 'applyInterval$java_util_function_Predicate', function (arg) {
var mask=this.apply$java_util_function_Predicate(arg);
if (Clazz.instanceOf(mask, "net.imglib2.roi.MaskInterval")) return mask;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["result is not an interval"]);
});

Clazz.newMeth(C$, 'applyRealInterval$java_util_function_Predicate', function (arg) {
var mask=this.applyReal$java_util_function_Predicate(arg);
if (Clazz.instanceOf(mask, "net.imglib2.roi.RealMaskRealInterval")) return mask;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["result is not an interval"]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Operators, "RealTransformMaskOperator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['net.imglib2.roi.Operators','net.imglib2.roi.Operators.MaskOperator']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','m'],'O',['transformToSource','net.imglib2.realtransform.RealTransform','pt','ThreadLocal','boundaryTypeOp','java.util.function.UnaryOperator','+knownConstantOp']]]

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransform', function (transformToSource) {
;C$.$init$.apply(this);
this.transformToSource=transformToSource;
this.n=transformToSource.numSourceDimensions$();
this.m=transformToSource.numTargetDimensions$();
this.pt=$I$(12).withInitial$java_util_function_Supplier((P$.Operators$RealTransformMaskOperator$lambda1$||(P$.Operators$RealTransformMaskOperator$lambda1$=(((P$.Operators$RealTransformMaskOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$RealTransformMaskOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.new_($I$(13,1).c$$I,[this.b$['net.imglib2.roi.Operators.RealTransformMaskOperator'].m]));});
})()
), Clazz.new_(1,{T:"? extends net.imglib2.RealPoint"},P$.Operators$RealTransformMaskOperator$lambda1.$init$, [this, null]))))));
this.boundaryTypeOp=(C$.willPreserveBounds$net_imglib2_realtransform_RealTransform(transformToSource) && C$.isContinuous$net_imglib2_realtransform_RealTransform(transformToSource) ) ? $I$(14).identity$() : (P$.Operators$RealTransformMaskOperator$lambda2$||(P$.Operators$RealTransformMaskOperator$lambda2$=(((P$.Operators$RealTransformMaskOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$RealTransformMaskOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.UnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (t) { return ($I$(1).UNSPECIFIED);});
})()
), Clazz.new_(1,{T:"net.imglib2.roi.BoundaryType"},P$.Operators$RealTransformMaskOperator$lambda2.$init$, [this, null])))));
this.knownConstantOp=$I$(14).identity$();
}, 1);

Clazz.newMeth(C$, 'isContinuous$net_imglib2_realtransform_RealTransform', function (transform) {
return Clazz.instanceOf(transform, "net.imglib2.realtransform.AffineGet");
}, 1);

Clazz.newMeth(C$, 'willPreserveBounds$net_imglib2_realtransform_RealTransform', function (transform) {
return Clazz.instanceOf(transform, "net.imglib2.realtransform.AffineGet");
}, 1);

Clazz.newMeth(C$, 'getTransformToSource$', function () {
return this.transformToSource;
});

Clazz.newMeth(C$, 'predicate$java_util_function_Predicate', function (arg) {
return ((P$.Operators$RealTransformMaskOperator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Operators$RealTransformMaskOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$'], function (pos) {
var sourcePos=this.b$['net.imglib2.roi.Operators.RealTransformMaskOperator'].pt.get$();
this.b$['net.imglib2.roi.Operators.RealTransformMaskOperator'].transformToSource.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(pos, sourcePos);
return this.$finals$.arg.test$(sourcePos);
});
})()
), Clazz.new_(1,{T:"net.imglib2.RealLocalizable"},P$.Operators$RealTransformMaskOperator$lambda3.$init$, [this, {arg:arg}]));
});

Clazz.newMeth(C$, 'applyReal$java_util_function_Predicate', function (arg) {
p$1.checkDimensions$O.apply(this, [arg]);
var boundaryType=this.boundaryTypeOp.apply$($I$(1).of$java_util_function_Predicate(arg));
if (Clazz.instanceOf(arg, "net.imglib2.RealInterval") && C$.willPreserveBounds$net_imglib2_realtransform_RealTransform(this.transformToSource) ) return Clazz.new_($I$(15,1).c$$net_imglib2_roi_Operators_RealTransformMaskOperator$java_util_function_Predicate$net_imglib2_RealInterval$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator,[this, arg, Clazz.new_($I$(16,1).c$$net_imglib2_RealInterval$net_imglib2_realtransform_InvertibleRealTransform,[arg, this.transformToSource]), boundaryType, this.knownConstantOp]);
return Clazz.new_($I$(17,1).c$$net_imglib2_roi_Operators_RealTransformMaskOperator$java_util_function_Predicate$I$net_imglib2_roi_BoundaryType$java_util_function_UnaryOperator,[this, arg, this.n, boundaryType, this.knownConstantOp]);
});

Clazz.newMeth(C$, 'applyRealInterval$java_util_function_Predicate', function (arg) {
var mask=this.applyReal$java_util_function_Predicate(arg);
if (Clazz.instanceOf(mask, "net.imglib2.roi.RealMaskRealInterval")) return mask;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["result is not an interval"]);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "net.imglib2.roi.Operators.RealTransformMaskOperator")) {
return this.transformToSource.equals$O((obj).getTransformToSource$());
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.transformToSource.hashCode$() * 23;
});

Clazz.newMeth(C$, 'checkDimensions$O', function (source) {
if (Clazz.instanceOf(source, "net.imglib2.EuclideanSpace")) {
if ((source).numDimensions$() != this.m) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["incompatible dimensionalities"]);
} else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["couldn\'t find dimensionality"]);
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
