(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.ReduceOps','.ReduceTask'],'java.util.Objects',['java.util.stream.ReduceOps','.Box'],['java.util.stream.ReduceOps','.ReduceOp'],'java.util.stream.StreamShape','java.util.Optional',['java.util.stream.Collector','.Characteristics'],'java.util.stream.StreamOpFlag','java.util.OptionalInt','java.util.OptionalLong','java.util.OptionalDouble']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReduceOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AccumulatingSink',10],['Box',1034],['ReduceOp',1034],['ReduceTask',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$TU$java_util_function_BiFunction$java_util_function_BinaryOperator', function (seed, reducer, combiner) {
$I$(2).requireNonNull$TT(reducer);
$I$(2).requireNonNull$TT(combiner);
return ((P$.ReduceOps$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(1,{U:"Object"},$I$(3,1), [this, {seed:this.$finals$.seed,combiner:this.$finals$.combiner,reducer:this.$finals$.reducer}],P$.ReduceOps$1ReducingSink);
});
})()
), Clazz.new_(1,{T:"Object",R:"Object",S:"java.util.stream.ReduceOps$1ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {seed:seed,combiner:combiner,reducer:reducer}, $I$(5).REFERENCE],P$.ReduceOps$1));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_function_BinaryOperator', function (operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$2ReducingSink.$init$, [this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_(1,{T:"Object",R:"java.util.Optional",S:"java.util.stream.ReduceOps$2ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator}, $I$(5).REFERENCE],P$.ReduceOps$2));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_Collector', function (collector) {
var supplier=$I$(2).requireNonNull$TT(collector).supplier$();
var accumulator=collector.accumulator$();
var combiner=collector.combiner$();
return ((P$.ReduceOps$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(1,{U:"Object"},$I$(3,1), [this, {supplier:this.$finals$.supplier,accumulator:this.$finals$.accumulator,combiner:this.$finals$.combiner}],P$.ReduceOps$3ReducingSink);
});

Clazz.newMeth(C$, 'getOpFlags$', function () {
return this.$finals$.collector.characteristics$().contains$O($I$(7).UNORDERED) ? $I$(8).NOT_ORDERED : 0;
});
})()
), Clazz.new_(1,{T:"Object",R:"Object",S:"java.util.stream.ReduceOps$3ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {supplier:supplier,accumulator:accumulator,combiner:combiner,collector:collector}, $I$(5).REFERENCE],P$.ReduceOps$3));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BiConsumer', function (seedFactory, accumulator, reducer) {
$I$(2).requireNonNull$TT(seedFactory);
$I$(2).requireNonNull$TT(accumulator);
$I$(2).requireNonNull$TT(reducer);
return ((P$.ReduceOps$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(1,{U:"Object"},$I$(3,1), [this, {accumulator:this.$finals$.accumulator,reducer:this.$finals$.reducer,seedFactory:this.$finals$.seedFactory}],P$.ReduceOps$4ReducingSink);
});
})()
), Clazz.new_(1,{T:"Object",R:"Object",S:"java.util.stream.ReduceOps$4ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {accumulator:accumulator,reducer:reducer,seedFactory:seedFactory}, $I$(5).REFERENCE],P$.ReduceOps$4));
}, 1);

Clazz.newMeth(C$, 'makeInt$I$java_util_function_IntBinaryOperator', function (identity, operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$5ReducingSink.$init$, [this, {operator:this.$finals$.operator,identity:this.$finals$.identity}]);
});
})()
), Clazz.new_(1,{T:"Integer",R:"Integer",S:"java.util.stream.ReduceOps$5ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator,identity:identity}, $I$(5).INT_VALUE],P$.ReduceOps$5));
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_function_IntBinaryOperator', function (operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$6ReducingSink.$init$, [this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_(1,{T:"Integer",R:"java.util.OptionalInt",S:"java.util.stream.ReduceOps$6ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator}, $I$(5).INT_VALUE],P$.ReduceOps$6));
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BinaryOperator', function (supplier, accumulator, combiner) {
$I$(2).requireNonNull$TT(supplier);
$I$(2).requireNonNull$TT(accumulator);
$I$(2).requireNonNull$TT(combiner);
return ((P$.ReduceOps$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(1,{U:"Object"},$I$(3,1), [this, {combiner:this.$finals$.combiner,supplier:this.$finals$.supplier,accumulator:this.$finals$.accumulator}],P$.ReduceOps$7ReducingSink);
});
})()
), Clazz.new_(1,{T:"Integer",R:"Object",S:"java.util.stream.ReduceOps$7ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {combiner:combiner,supplier:supplier,accumulator:accumulator}, $I$(5).INT_VALUE],P$.ReduceOps$7));
}, 1);

Clazz.newMeth(C$, 'makeLong$J$java_util_function_LongBinaryOperator', function (identity, operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$8ReducingSink.$init$, [this, {operator:this.$finals$.operator,identity:this.$finals$.identity}]);
});
})()
), Clazz.new_(1,{T:"Long",R:"Long",S:"java.util.stream.ReduceOps$8ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator,identity:identity}, $I$(5).LONG_VALUE],P$.ReduceOps$8));
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_function_LongBinaryOperator', function (operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$9ReducingSink.$init$, [this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_(1,{T:"Long",R:"java.util.OptionalLong",S:"java.util.stream.ReduceOps$9ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator}, $I$(5).LONG_VALUE],P$.ReduceOps$9));
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_function_Supplier$java_util_function_ObjLongConsumer$java_util_function_BinaryOperator', function (supplier, accumulator, combiner) {
$I$(2).requireNonNull$TT(supplier);
$I$(2).requireNonNull$TT(accumulator);
$I$(2).requireNonNull$TT(combiner);
return ((P$.ReduceOps$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(1,{U:"Object"},$I$(3,1), [this, {accumulator:this.$finals$.accumulator,supplier:this.$finals$.supplier,combiner:this.$finals$.combiner}],P$.ReduceOps$10ReducingSink);
});
})()
), Clazz.new_(1,{T:"Long",R:"Object",S:"java.util.stream.ReduceOps$10ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {accumulator:accumulator,supplier:supplier,combiner:combiner}, $I$(5).LONG_VALUE],P$.ReduceOps$10));
}, 1);

Clazz.newMeth(C$, 'makeDouble$D$java_util_function_DoubleBinaryOperator', function (identity, operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$11ReducingSink.$init$, [this, {operator:this.$finals$.operator,identity:this.$finals$.identity}]);
});
})()
), Clazz.new_(1,{T:"Double",R:"Double",S:"java.util.stream.ReduceOps$11ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator,identity:identity}, $I$(5).DOUBLE_VALUE],P$.ReduceOps$11));
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_function_DoubleBinaryOperator', function (operator) {
$I$(2).requireNonNull$TT(operator);
return ((P$.ReduceOps$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(P$.ReduceOps$12ReducingSink.$init$, [this, {operator:this.$finals$.operator}]);
});
})()
), Clazz.new_(1,{T:"Double",R:"java.util.OptionalDouble",S:"java.util.stream.ReduceOps$12ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {operator:operator}, $I$(5).DOUBLE_VALUE],P$.ReduceOps$12));
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BinaryOperator', function (supplier, accumulator, combiner) {
$I$(2).requireNonNull$TT(supplier);
$I$(2).requireNonNull$TT(accumulator);
$I$(2).requireNonNull$TT(combiner);
return ((P$.ReduceOps$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReduceOps$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReduceOps','.ReduceOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSink$', function () {
return Clazz.new_(1,{U:"Object"},$I$(3,1), [this, {accumulator:this.$finals$.accumulator,combiner:this.$finals$.combiner,supplier:this.$finals$.supplier}],P$.ReduceOps$13ReducingSink);
});
})()
), Clazz.new_(1,{T:"Double",R:"Object",S:"java.util.stream.ReduceOps$13ReducingSink"},$I$(4,1).c$$java_util_stream_StreamShape, [this, {accumulator:accumulator,combiner:combiner,supplier:supplier}, $I$(5).DOUBLE_VALUE],P$.ReduceOps$13));
}, 1);
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$1ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.seed;
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
this.state=this.$finals$.reducer.apply$(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$1ReducingSink','combine$TK'], function (other) {
this.state=this.$finals$.combiner.apply$(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$2ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['empty'],'O',['state','<T>']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.empty=true;
this.state=null;
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.apply$(this.state, t);
}});

Clazz.newMeth(C$, 'get$', function () {
return this.empty ? $I$(6).empty$() : $I$(6).of$TT(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$2ReducingSink','combine$TK'], function (other) {
if (!other.empty) this.accept$TT(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$3ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
this.$finals$.accumulator.accept$(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$3ReducingSink','combine$TK'], function (other) {
this.state=this.$finals$.combiner.apply$(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$4ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.seedFactory.get$();
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
this.$finals$.accumulator.accept$(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$4ReducingSink','combine$TK'], function (other) {
this.$finals$.reducer.accept$(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$5ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['state']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.identity;
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.state=this.$finals$.operator.applyAsInt$(this.state, t);
});

Clazz.newMeth(C$, 'get$', function () {
return new Integer(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$5ReducingSink','combine$TK'], function (other) {
this.accept$I(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$6ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['empty'],'I',['state']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.empty=true;
this.state=0;
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.applyAsInt$(this.state, t);
}});

Clazz.newMeth(C$, 'get$', function () {
return this.empty ? $I$(9).empty$() : $I$(9).of$I(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$6ReducingSink','combine$TK'], function (other) {
if (!other.empty) this.accept$I(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$7ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.$finals$.accumulator.accept$(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$7ReducingSink','combine$TK'], function (other) {
this.state=this.$finals$.combiner.apply$(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$8ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['state']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.identity;
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.state=this.$finals$.operator.applyAsLong$(this.state, t);
});

Clazz.newMeth(C$, 'get$', function () {
return new Long(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$8ReducingSink','combine$TK'], function (other) {
this.accept$J(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$9ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['empty'],'L',['state']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.empty=true;
this.state=0;
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.applyAsLong$(this.state, t);
}});

Clazz.newMeth(C$, 'get$', function () {
return this.empty ? $I$(10).empty$() : $I$(10).of$J(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$9ReducingSink','combine$TK'], function (other) {
if (!other.empty) this.accept$J(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$10ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.$finals$.accumulator.accept$(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$10ReducingSink','combine$TK'], function (other) {
this.state=this.$finals$.combiner.apply$(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$11ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['state']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.identity;
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.state=this.$finals$.operator.applyAsDouble$(this.state, t);
});

Clazz.newMeth(C$, 'get$', function () {
return new Double(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$11ReducingSink','combine$TK'], function (other) {
this.accept$D(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$12ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['empty'],'D',['state']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.empty=true;
this.state=0;
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
if (this.empty) {
this.empty=false;
this.state=t;
} else {
this.state=this.$finals$.operator.applyAsDouble$(this.state, t);
}});

Clazz.newMeth(C$, 'get$', function () {
return this.empty ? $I$(11).empty$() : $I$(11).of$D(this.state);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$12ReducingSink','combine$TK'], function (other) {
if (!other.empty) this.accept$D(other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*l*/var C$=Clazz.newClass(P$, "ReduceOps$13ReducingSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.ReduceOps','.Box'], [['java.util.stream.ReduceOps','java.util.stream.ReduceOps.AccumulatingSink'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.state=this.$finals$.supplier.get$();
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.$finals$.accumulator.accept$(this.state, t);
});

Clazz.newMeth(C$, ['combine$java_util_stream_ReduceOps$13ReducingSink','combine$TK'], function (other) {
this.state=this.$finals$.combiner.apply$(this.state, other.state);
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ReduceOps, "AccumulatingSink", function(){
}, null, 'java.util.stream.TerminalSink');

C$.$clinit$=2;
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReduceOps, "Box", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['state','<U>']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.state;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReduceOps, "ReduceOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inputShape','java.util.stream.StreamShape']]]

Clazz.newMeth(C$, 'c$$java_util_stream_StreamShape', function (shape) {
;C$.$init$.apply(this);
this.inputShape=shape;
}, 1);

Clazz.newMeth(C$, 'inputShape$', function () {
return this.inputShape;
});

Clazz.newMeth(C$, ['evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator','evaluateSequential$'], function (helper, spliterator) {
return helper.wrapAndCopyInto$TS$java_util_Spliterator(this.makeSink$(), spliterator).get$();
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
return Clazz.new_(1,{P_IN:"Object",P_OUT:"Object",R:"Object",S:"Object"},$I$(1,1).c$$java_util_stream_ReduceOps_ReduceOp$java_util_stream_PipelineHelper$java_util_Spliterator,[this, helper, spliterator]).invoke$().get$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReduceOps, "ReduceTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['op','java.util.stream.ReduceOps.ReduceOp']]]

Clazz.newMeth(C$, 'c$$java_util_stream_ReduceOps_ReduceOp$java_util_stream_PipelineHelper$java_util_Spliterator', function (op, helper, spliterator) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this,[helper, spliterator]);C$.$init$.apply(this);
this.op=op;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_ReduceOps_ReduceTask$java_util_Spliterator', function (parent, spliterator) {
;C$.superclazz.c$$TK$java_util_Spliterator.apply(this,[parent, spliterator]);C$.$init$.apply(this);
this.op=parent.op;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator', function (spliterator) {
return Clazz.new_(1,{P_IN:"Object",P_OUT:"Object",R:"Object",S:"Object"},C$.c$$java_util_stream_ReduceOps_ReduceTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'doLeaf$', function () {
return this.helper.wrapAndCopyInto$TS$java_util_Spliterator(this.op.makeSink$(), this.spliterator);
});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter', function ($caller) {
if (!this.isLeaf$()) {
var leftResult=this.leftChild.getLocalResult$();
leftResult.combine$TK(this.rightChild.getLocalResult$());
this.setLocalResult$TR(leftResult);
}C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
