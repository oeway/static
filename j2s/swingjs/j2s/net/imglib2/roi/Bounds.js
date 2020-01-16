(function(){var P$=Clazz.newPackage("net.imglib2.roi"),p$1={},I$=[[0,'net.imglib2.util.Intervals',['net.imglib2.roi.Bounds','.SmallestContainingInterval'],['net.imglib2.roi.Bounds','.IntersectionInterval'],['net.imglib2.roi.Bounds','.UnionInterval'],['net.imglib2.roi.Bounds','.IntersectionRealInterval'],['net.imglib2.roi.Bounds','.UnionRealInterval'],'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Bounds", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['BinaryBoundsOperator',9],['UnaryBoundsOperator',9],['AbstractAdaptingInterval',1033],['SmallestContainingInterval',9],['IntersectionInterval',9],['UnionInterval',9],['IntBounds',9],['AbstractAdaptingRealInterval',1033],['IntersectionRealInterval',9],['UnionRealInterval',9],['RealBounds',9],['RealTransformRealInterval',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.AND=((P$.Bounds$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Bounds$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['net.imglib2.roi.Bounds','net.imglib2.roi.Bounds.BinaryBoundsOperator']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['apply$TB$TB','apply$'], function (left, right) {
return left.and$TB(right);
});
})()
), Clazz.new_(P$.Bounds$1.$init$, [this, null]));
C$.OR=((P$.Bounds$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Bounds$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['net.imglib2.roi.Bounds','net.imglib2.roi.Bounds.BinaryBoundsOperator']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['apply$TB$TB','apply$'], function (left, right) {
return left.or$TB(right);
});
})()
), Clazz.new_(P$.Bounds$2.$init$, [this, null]));
C$.NEGATE=((P$.Bounds$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Bounds$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['net.imglib2.roi.Bounds','net.imglib2.roi.Bounds.UnaryBoundsOperator']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['apply$TB','apply$'], function (arg) {
return arg.negate$();
});
})()
), Clazz.new_(P$.Bounds$3.$init$, [this, null]));
C$.XOR=((P$.Bounds$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Bounds$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['net.imglib2.roi.Bounds','net.imglib2.roi.Bounds.BinaryBoundsOperator']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['apply$TB$TB','apply$'], function (left, right) {
return left.xor$TB(right);
});
})()
), Clazz.new_(P$.Bounds$4.$init$, [this, null]));
C$.MINUS=((P$.Bounds$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Bounds$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['net.imglib2.roi.Bounds','net.imglib2.roi.Bounds.BinaryBoundsOperator']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, ['apply$TB$TB','apply$'], function (left, right) {
return left.minus$TB(right);
});
})()
), Clazz.new_(P$.Bounds$5.$init$, [this, null]));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['interval','<I extends net.imglib2.RealInterval>']]
,['O',['AND','net.imglib2.roi.Bounds.BinaryBoundsOperator','+OR','NEGATE','net.imglib2.roi.Bounds.UnaryBoundsOperator','XOR','net.imglib2.roi.Bounds.BinaryBoundsOperator','+MINUS']]]

Clazz.newMeth(C$, 'c$$TI', function (interval) {
;C$.$init$.apply(this);
this.interval=interval;
}, 1);

Clazz.newMeth(C$, 'isUnbounded$', function () {
return this.interval == null ;
});

Clazz.newMeth(C$, 'interval$', function () {
return this.interval;
});

Clazz.newMeth(C$, 'and$TB', function (that) {
if (this.isUnbounded$()) return that;
if (that.isUnbounded$()) return this;
return this.intersectBounded$TB$TB(this, that);
});

Clazz.newMeth(C$, 'or$TB', function (that) {
if (this.isUnbounded$() || that.isUnbounded$() ) return this.unbounded$();
return this.unionBounded$TB$TB(this, that);
});

Clazz.newMeth(C$, 'negate$', function () {
return this.unbounded$();
});

Clazz.newMeth(C$, 'xor$TB', function (that) {
return this.or$TB(that);
});

Clazz.newMeth(C$, 'minus$TB', function (that) {
return this;
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Bounds, "BinaryBoundsOperator", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Bounds, "UnaryBoundsOperator", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "AbstractAdaptingInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.Interval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (realMin) {
for (var d=0; d < this.n; ++d) realMin[d]=this.realMin$I(d);

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (realMin) {
for (var d=0; d < this.n; ++d) realMin.setPosition$D$I(this.realMin$I(d), d);

});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (realMax) {
for (var d=0; d < this.n; ++d) realMax[d]=this.realMax$I(d);

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (realMax) {
for (var d=0; d < this.n; ++d) realMax.setPosition$D$I(this.realMax$I(d), d);

});

Clazz.newMeth(C$, 'min$JA', function (min) {
for (var d=0; d < this.n; ++d) min[d]=this.min$I(d);

});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
for (var d=0; d < this.n; ++d) min.setPosition$J$I(this.min$I(d), d);

});

Clazz.newMeth(C$, 'max$JA', function (max) {
for (var d=0; d < this.n; ++d) max[d]=this.max$I(d);

});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
for (var d=0; d < this.n; ++d) max.setPosition$J$I(this.max$I(d), d);

});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
for (var d=0; d < this.n; ++d) dimensions[d]=this.dimension$I(d);

});

Clazz.newMeth(C$, 'dimension$I', function (d) {
return this.max$I(d) - this.min$I(d) + 1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "SmallestContainingInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['net.imglib2.roi.Bounds','.AbstractAdaptingInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RealInterval']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (source) {
;C$.superclazz.c$$I.apply(this,[source.numDimensions$()]);C$.$init$.apply(this);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'min$I', function (d) {
return (Math.floor(this.source.realMin$I(d))|0);
});

Clazz.newMeth(C$, 'max$I', function (d) {
return (Math.ceil(this.source.realMax$I(d))|0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "IntersectionInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['net.imglib2.roi.Bounds','.AbstractAdaptingInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['i1','net.imglib2.Interval','+i2']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Interval$net_imglib2_Interval', function (i1, i2) {
;C$.superclazz.c$$I.apply(this,[i1.numDimensions$()]);C$.$init$.apply(this);
this.i1=i1;
this.i2=i2;
Clazz.assert(C$, this, function(){return (i1.numDimensions$() == i2.numDimensions$())});
}, 1);

Clazz.newMeth(C$, 'min$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_Interval(this.i1) || $I$(1).isEmpty$net_imglib2_Interval(this.i2) ) return 9223372036854775807;
return Math.max(this.i1.min$I(d), this.i2.min$I(d));
});

Clazz.newMeth(C$, 'max$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_Interval(this.i1) || $I$(1).isEmpty$net_imglib2_Interval(this.i2) ) return -9223372036854775808;
return Math.min(this.i1.max$I(d), this.i2.max$I(d));
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "UnionInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['net.imglib2.roi.Bounds','.AbstractAdaptingInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['i1','net.imglib2.Interval','+i2']]]

Clazz.newMeth(C$, 'c$$net_imglib2_Interval$net_imglib2_Interval', function (i1, i2) {
;C$.superclazz.c$$I.apply(this,[i1.numDimensions$()]);C$.$init$.apply(this);
this.i1=i1;
this.i2=i2;
Clazz.assert(C$, this, function(){return (i1.numDimensions$() == i2.numDimensions$())});
}, 1);

Clazz.newMeth(C$, 'min$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_Interval(this.i1)) {
if ($I$(1).isEmpty$net_imglib2_Interval(this.i2)) return 9223372036854775807;
return this.i2.min$I(d);
}if ($I$(1).isEmpty$net_imglib2_Interval(this.i2)) return this.i1.min$I(d);
return Math.min(this.i1.min$I(d), this.i2.min$I(d));
});

Clazz.newMeth(C$, 'max$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_Interval(this.i1)) {
if ($I$(1).isEmpty$net_imglib2_Interval(this.i2)) return -9223372036854775808;
return this.i2.max$I(d);
}if ($I$(1).isEmpty$net_imglib2_Interval(this.i2)) return this.i1.max$I(d);
return Math.max(this.i1.max$I(d), this.i2.max$I(d));
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "IntBounds", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.roi.Bounds');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.UNBOUNDED=Clazz.new_(C$.c$$net_imglib2_Interval,[null]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['UNBOUNDED','net.imglib2.roi.Bounds.IntBounds']]]

Clazz.newMeth(C$, 'of$java_util_function_Predicate', function (predicate) {
if (Clazz.instanceOf(predicate, "net.imglib2.Interval")) return C$.of$net_imglib2_Interval(predicate);
 else if (Clazz.instanceOf(predicate, "net.imglib2.RealInterval")) return C$.of$net_imglib2_Interval(Clazz.new_($I$(2,1).c$$net_imglib2_RealInterval,[predicate]));
 else return C$.UNBOUNDED;
}, 1);

Clazz.newMeth(C$, 'of$net_imglib2_Interval', function (i) {
if (i == null ) return C$.UNBOUNDED;
return Clazz.new_(C$.c$$net_imglib2_Interval,[i]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['intersectBounded$net_imglib2_roi_Bounds_IntBounds$net_imglib2_roi_Bounds_IntBounds','intersectBounded$TB$TB'], function (arg0, arg1) {
return Clazz.new_(C$.c$$net_imglib2_Interval,[Clazz.new_($I$(3,1).c$$net_imglib2_Interval$net_imglib2_Interval,[arg0.interval$(), arg1.interval$()])]);
});

Clazz.newMeth(C$, ['unionBounded$net_imglib2_roi_Bounds_IntBounds$net_imglib2_roi_Bounds_IntBounds','unionBounded$TB$TB'], function (arg0, arg1) {
return Clazz.new_(C$.c$$net_imglib2_Interval,[Clazz.new_($I$(4,1).c$$net_imglib2_Interval$net_imglib2_Interval,[arg0.interval$(), arg1.interval$()])]);
});

Clazz.newMeth(C$, 'unbounded$', function () {
return C$.UNBOUNDED;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "AbstractAdaptingRealInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.RealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (n) {
;C$.superclazz.c$$I.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'realMin$DA', function (realMin) {
for (var d=0; d < this.n; ++d) realMin[d]=this.realMin$I(d);

});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (realMin) {
for (var d=0; d < this.n; ++d) realMin.setPosition$D$I(this.realMin$I(d), d);

});

Clazz.newMeth(C$, 'realMax$DA', function (realMax) {
for (var d=0; d < this.n; ++d) realMax[d]=this.realMax$I(d);

});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (realMax) {
for (var d=0; d < this.n; ++d) realMax.setPosition$D$I(this.realMax$I(d), d);

});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "IntersectionRealInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['net.imglib2.roi.Bounds','.AbstractAdaptingRealInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['i1','net.imglib2.RealInterval','+i2']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval$net_imglib2_RealInterval', function (i1, i2) {
;C$.superclazz.c$$I.apply(this,[i1.numDimensions$()]);C$.$init$.apply(this);
this.i1=i1;
this.i2=i2;
Clazz.assert(C$, this, function(){return (i1.numDimensions$() == i2.numDimensions$())});
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i1) || $I$(1).isEmpty$net_imglib2_RealInterval(this.i2) ) return Infinity;
return Math.max(this.i1.realMin$I(d), this.i2.realMin$I(d));
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i1) || $I$(1).isEmpty$net_imglib2_RealInterval(this.i2) ) return -Infinity;
return Math.min(this.i1.realMax$I(d), this.i2.realMax$I(d));
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "UnionRealInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['net.imglib2.roi.Bounds','.AbstractAdaptingRealInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['i1','net.imglib2.RealInterval','+i2']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval$net_imglib2_RealInterval', function (i1, i2) {
;C$.superclazz.c$$I.apply(this,[i1.numDimensions$()]);C$.$init$.apply(this);
this.i1=i1;
this.i2=i2;
Clazz.assert(C$, this, function(){return (i1.numDimensions$() == i2.numDimensions$())});
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i1)) {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i2)) return Infinity;
return this.i2.realMin$I(d);
}if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i2)) return this.i1.realMin$I(d);
return Math.min(this.i1.realMin$I(d), this.i2.realMin$I(d));
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i1)) {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i2)) return -Infinity;
return this.i2.realMax$I(d);
}if ($I$(1).isEmpty$net_imglib2_RealInterval(this.i2)) return this.i1.realMax$I(d);
return Math.max(this.i1.realMax$I(d), this.i2.realMax$I(d));
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "RealBounds", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.roi.Bounds');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.UNBOUNDED=Clazz.new_(C$.c$$net_imglib2_RealInterval,[null]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['UNBOUNDED','net.imglib2.roi.Bounds.RealBounds']]]

Clazz.newMeth(C$, 'of$java_util_function_Predicate', function (predicate) {
if (Clazz.instanceOf(predicate, "net.imglib2.RealInterval")) return C$.of$net_imglib2_RealInterval(predicate);
return C$.UNBOUNDED;
}, 1);

Clazz.newMeth(C$, 'of$net_imglib2_RealInterval', function (i) {
if (i == null ) return C$.UNBOUNDED;
return Clazz.new_(C$.c$$net_imglib2_RealInterval,[i]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
;C$.superclazz.c$$TI.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['intersectBounded$net_imglib2_roi_Bounds_RealBounds$net_imglib2_roi_Bounds_RealBounds','intersectBounded$TB$TB'], function (arg0, arg1) {
return Clazz.new_(C$.c$$net_imglib2_RealInterval,[Clazz.new_($I$(5,1).c$$net_imglib2_RealInterval$net_imglib2_RealInterval,[arg0.interval$(), arg1.interval$()])]);
});

Clazz.newMeth(C$, ['unionBounded$net_imglib2_roi_Bounds_RealBounds$net_imglib2_roi_Bounds_RealBounds','unionBounded$TB$TB'], function (arg0, arg1) {
return Clazz.new_(C$.c$$net_imglib2_RealInterval,[Clazz.new_($I$(6,1).c$$net_imglib2_RealInterval$net_imglib2_RealInterval,[arg0.interval$(), arg1.interval$()])]);
});

Clazz.newMeth(C$, 'unbounded$', function () {
return C$.UNBOUNDED;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bounds, "RealTransformRealInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['net.imglib2.roi.Bounds','.AbstractAdaptingRealInterval']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RealInterval','transformToSource','net.imglib2.realtransform.InvertibleRealTransform','cachedSourceMin','double[]','+cachedSourceMax','+min','+max']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval$net_imglib2_realtransform_InvertibleRealTransform', function (source, transformToSource) {
;C$.superclazz.c$$I.apply(this,[transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
this.source=source;
this.transformToSource=transformToSource;
this.cachedSourceMin=Clazz.array(Double.TYPE, [this.transformToSource.numTargetDimensions$()]);
this.cachedSourceMax=Clazz.array(Double.TYPE, [this.transformToSource.numTargetDimensions$()]);
this.min=Clazz.array(Double.TYPE, [this.n]);
this.max=Clazz.array(Double.TYPE, [this.n]);
this.source.realMax$DA(this.cachedSourceMax);
this.source.realMin$DA(this.cachedSourceMin);
p$1.updateMinMax.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
if (p$1.updateNeeded.apply(this, [])) p$1.updateMinMax.apply(this, []);
return this.min[d];
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
if (p$1.updateNeeded.apply(this, [])) p$1.updateMinMax.apply(this, []);
return this.max[d];
});

Clazz.newMeth(C$, 'updateNeeded', function () {
for (var d=0; d < this.transformToSource.numTargetDimensions$(); d++) {
if (this.cachedSourceMin[d] != this.source.realMin$I(d)  || this.cachedSourceMax[d] != this.source.realMax$I(d)  ) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'updateMinMax', function () {
if ($I$(1).isEmpty$net_imglib2_RealInterval(this.source)) {
$I$(7).fill$DA$D(this.max, -Infinity);
$I$(7).fill$DA$D(this.min, Infinity);
}var sMx=Clazz.array(Double.TYPE, [this.transformToSource.numTargetDimensions$()]);
var sMn=Clazz.array(Double.TYPE, [sMx.length]);
while (!$I$(7).equals$DA$DA(sMx, this.cachedSourceMax) || !$I$(7).equals$DA$DA(sMn, this.cachedSourceMin) ){
this.source.realMax$DA(sMx);
this.source.realMin$DA(sMn);
var transformedCorners=p$1.createCorners.apply(this, []);
var numTransformedCorners=transformedCorners.length;
for (var d=0; d < this.n; d++) {
var mx=transformedCorners[0][d];
var mn=transformedCorners[0][d];
for (var i=1; i < numTransformedCorners; i++) {
if (transformedCorners[i][d] > mx ) mx=transformedCorners[i][d];
if (transformedCorners[i][d] < mn ) mn=transformedCorners[i][d];
}
this.min[d]=mn;
this.max[d]=mx;
}
this.source.realMax$DA(this.cachedSourceMax);
this.source.realMin$DA(this.cachedSourceMin);
}
}, p$1);

Clazz.newMeth(C$, 'createCorners', function () {
var numCorners=(Math.pow(2, this.transformToSource.numTargetDimensions$())|0);
var numSourceDims=this.transformToSource.numTargetDimensions$();
var cornersTransformed=Clazz.array(Double.TYPE, [numCorners, numSourceDims]);
var s=(numCorners/2|0);
var mn=false;
for (var d=0; d < numSourceDims; d++) {
for (var i=0; i < numCorners; i++) {
if (i % s == 0) {
mn=!mn;
}if (mn) cornersTransformed[i][d]=this.source.realMin$I(d);
 else cornersTransformed[i][d]=this.source.realMax$I(d);
}
s=(s/2|0);
}
var points=Clazz.array(Double.TYPE, [numCorners, this.n]);
for (var i=0; i < points.length; i++) this.transformToSource.inverse$().apply$DA$DA(cornersTransformed[i], points[i]);

return points;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
