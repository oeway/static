(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamShape','java.util.stream.Nodes',['java.util.stream.StreamSpliterators','.WrappingSpliterator'],['java.util.stream.StreamSpliterators','.DelegatingSpliterator'],'java.util.Spliterators',['java.util.stream.ReferencePipeline','.StatelessOp'],'java.util.stream.StreamOpFlag','java.util.Objects',['java.util.stream.Sink','.ChainedReference'],['java.util.stream.IntPipeline','.StatelessOp'],['java.util.stream.LongPipeline','.StatelessOp'],['java.util.stream.DoublePipeline','.StatelessOp'],'java.util.stream.DistinctOps','java.util.stream.SortedOps','java.util.stream.SliceOps','java.util.stream.ForEachOps','java.util.stream.MatchOps',['java.util.stream.MatchOps','.MatchKind'],'java.util.stream.FindOps','java.util.stream.ReduceOps',['java.util.stream.Collector','.Characteristics'],'java.util.function.BinaryOperator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReferencePipeline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractPipeline', 'java.util.stream.Stream');
C$.$classes$=[['Head',8],['StatelessOp',1032],['StatefulOp',1032]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z', function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_function_Supplier$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z', function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_Spliterator$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$I', function (upstream, opFlags) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this,[upstream, opFlags]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getOutputShape$', function () {
return $I$(1).REFERENCE;
});

Clazz.newMeth(C$, 'evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction', function (helper, spliterator, flattenTree, generator) {
return $I$(2).collect$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction(helper, spliterator, flattenTree, generator);
});

Clazz.newMeth(C$, 'wrap$java_util_stream_PipelineHelper$java_util_function_Supplier$Z', function (ph, supplier, isParallel) {
return Clazz.new_(1,{P_IN:"Object",P_OUT:"Object"},$I$(3,1).c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z,[ph, supplier, isParallel]);
});

Clazz.newMeth(C$, 'lazySpliterator$java_util_function_Supplier', function (supplier) {
return Clazz.new_(1,{T:"Object",T_SPLITR:""},$I$(4,1).c$$java_util_function_Supplier,[supplier]);
});

Clazz.newMeth(C$, 'forEachWithCancel$java_util_Spliterator$java_util_stream_Sink', function (spliterator, sink) {
do {
} while (!sink.cancellationRequested$() && spliterator.tryAdvance$java_util_function_Consumer(sink) );
});

Clazz.newMeth(C$, 'makeNodeBuilder$J$java_util_function_IntFunction', function (exactSizeIfKnown, generator) {
return $I$(2).builder$J$java_util_function_IntFunction(exactSizeIfKnown, generator);
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(5).iterator$java_util_Spliterator(this.spliterator$());
});

Clazz.newMeth(C$, 'unordered$', function () {
if (!this.isOrdered$()) return this;
return ((P$.ReferencePipeline$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return sink;
});
})()
), Clazz.new_(1,{E_IN:"Object",E_OUT:"Object"},$I$(6,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(1).REFERENCE, $I$(7).NOT_ORDERED],P$.ReferencePipeline$1));
});

Clazz.newMeth(C$, 'filter$java_util_function_Predicate', function (predicate) {
$I$(8).requireNonNull$TT(predicate);
return ((P$.ReferencePipeline$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
if (this.$finals$.predicate.test$(u)) this.downstream.accept$(u);
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Object"},$I$(9,1).c$$java_util_stream_Sink, [this, {predicate:this.$finals$.predicate}, sink],P$.ReferencePipeline$2$1));
});
})()
), Clazz.new_(1,{E_IN:"Object",E_OUT:"Object"},$I$(6,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {predicate:predicate}, this, $I$(1).REFERENCE, $I$(7).NOT_SIZED],P$.ReferencePipeline$2));
});

Clazz.newMeth(C$, 'map$java_util_function_Function', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
this.downstream.accept$(this.$finals$.mapper.apply$(u));
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Object"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$3$1));
});
})()
), Clazz.new_(1,{E_IN:"Object",E_OUT:"Object"},$I$(6,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT],P$.ReferencePipeline$3));
});

Clazz.newMeth(C$, 'mapToInt$java_util_function_ToIntFunction', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$4$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
this.downstream.accept$(this.$finals$.mapper.applyAsInt$(u));
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Integer"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$4$1));
});
})()
), Clazz.new_(1,{E_IN:"Object"},$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT],P$.ReferencePipeline$4));
});

Clazz.newMeth(C$, 'mapToLong$java_util_function_ToLongFunction', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$5$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
this.downstream.accept$(this.$finals$.mapper.applyAsLong$(u));
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Long"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$5$1));
});
})()
), Clazz.new_(1,{E_IN:"Object"},$I$(11,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT],P$.ReferencePipeline$5));
});

Clazz.newMeth(C$, 'mapToDouble$java_util_function_ToDoubleFunction', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$6$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
this.downstream.accept$(this.$finals$.mapper.applyAsDouble$(u));
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Double"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$6$1));
});
})()
), Clazz.new_(1,{E_IN:"Object"},$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT],P$.ReferencePipeline$6));
});

Clazz.newMeth(C$, 'flatMap$java_util_function_Function', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$7$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
try {
var result=this.$finals$.mapper.apply$(u);
/*try*/ {
if (result != null ) result.sequential$().forEach$java_util_function_Consumer(this.downstream);
}
}finally{/*res*/
try{result&&result.close$&&result.close$()}catch(_){}}
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Object"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$7$1));
});
})()
), Clazz.new_(1,{E_IN:"Object",E_OUT:"Object"},$I$(6,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT | $I$(7).NOT_SIZED ],P$.ReferencePipeline$7));
});

Clazz.newMeth(C$, 'flatMapToInt$java_util_function_Function', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$8$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.downstreamAsInt=(function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ReferencePipeline$8$1$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.ReferencePipeline$8$1$lambda1.$init$, [this, null])})(this.downstream);
}, 1);

C$.$fields$=[['O',['downstreamAsInt','java.util.function.IntConsumer']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
try {
var result=this.$finals$.mapper.apply$(u);
/*try*/ {
if (result != null ) result.sequential$().forEach$java_util_function_IntConsumer(this.downstreamAsInt);
}
}finally{/*res*/
try{result&&result.close$&&result.close$()}catch(_){}}
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Integer"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$8$1));
});
})()
), Clazz.new_(1,{E_IN:"Object"},$I$(10,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT | $I$(7).NOT_SIZED ],P$.ReferencePipeline$8));
});

Clazz.newMeth(C$, 'flatMapToDouble$java_util_function_Function', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$9$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$9$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.downstreamAsDouble=(function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ReferencePipeline$9$1$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.ReferencePipeline$9$1$lambda2.$init$, [this, null])})(this.downstream);
}, 1);

C$.$fields$=[['O',['downstreamAsDouble','java.util.function.DoubleConsumer']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
try {
var result=this.$finals$.mapper.apply$(u);
/*try*/ {
if (result != null ) result.sequential$().forEach$java_util_function_DoubleConsumer(this.downstreamAsDouble);
}
}finally{/*res*/
try{result&&result.close$&&result.close$()}catch(_){}}
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Double"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$9$1));
});
})()
), Clazz.new_(1,{E_IN:"Object"},$I$(12,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT | $I$(7).NOT_SIZED ],P$.ReferencePipeline$9));
});

Clazz.newMeth(C$, 'flatMapToLong$java_util_function_Function', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.ReferencePipeline$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$10$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$10$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.downstreamAsLong=(function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ReferencePipeline$10$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.ReferencePipeline$10$1$lambda3.$init$, [this, null])})(this.downstream);
}, 1);

C$.$fields$=[['O',['downstreamAsLong','java.util.function.LongConsumer']]]

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
try {
var result=this.$finals$.mapper.apply$(u);
/*try*/ {
if (result != null ) result.sequential$().forEach$java_util_function_LongConsumer(this.downstreamAsLong);
}
}finally{/*res*/
try{result&&result.close$&&result.close$()}catch(_){}}
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Long"},$I$(9,1).c$$java_util_stream_Sink, [this, {mapper:this.$finals$.mapper}, sink],P$.ReferencePipeline$10$1));
});
})()
), Clazz.new_(1,{E_IN:"Object"},$I$(11,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper:mapper}, this, $I$(1).REFERENCE, $I$(7).NOT_SORTED | $I$(7).NOT_DISTINCT | $I$(7).NOT_SIZED ],P$.ReferencePipeline$10));
});

Clazz.newMeth(C$, 'peek$java_util_function_Consumer', function (action) {
$I$(8).requireNonNull$TT(action);
return ((P$.ReferencePipeline$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.ReferencePipeline$11$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ReferencePipeline$11$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$TP_OUT','accept$','accept$TT'], function (u) {
this.$finals$.action.accept$(u);
this.downstream.accept$(u);
});
})()
), Clazz.new_(1,{T:"Object",E_OUT:"Object"},$I$(9,1).c$$java_util_stream_Sink, [this, {action:this.$finals$.action}, sink],P$.ReferencePipeline$11$1));
});
})()
), Clazz.new_(1,{E_IN:"Object",E_OUT:"Object"},$I$(6,1).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {action:action}, this, $I$(1).REFERENCE, 0],P$.ReferencePipeline$11));
});

Clazz.newMeth(C$, 'distinct$', function () {
return $I$(13).makeRef$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'sorted$', function () {
return $I$(14).makeRef$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'sorted$java_util_Comparator', function (comparator) {
return $I$(14).makeRef$java_util_stream_AbstractPipeline$java_util_Comparator(this, comparator);
});

Clazz.newMeth(C$, 'limit$J', function (maxSize) {
if (maxSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(maxSize)]);
return $I$(15).makeRef$java_util_stream_AbstractPipeline$J$J(this, 0, maxSize);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(n)]);
if (n == 0) return this;
 else return $I$(15).makeRef$java_util_stream_AbstractPipeline$J$J(this, n, -1);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(16).makeRef$java_util_function_Consumer$Z(action, false));
});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_Consumer', function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(16).makeRef$java_util_function_Consumer$Z(action, true));
});

Clazz.newMeth(C$, 'toArray$java_util_function_IntFunction', function (generator) {
var rawGenerator=generator;
return $I$(2).flatten$java_util_stream_Node$java_util_function_IntFunction(this.evaluateToArrayNode$java_util_function_IntFunction(rawGenerator), rawGenerator).asArray$java_util_function_IntFunction(rawGenerator);
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.toArray$java_util_function_IntFunction(((P$.ReferencePipeline$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReferencePipeline$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(java.lang.Object, [t.intValue()])});
})()
), Clazz.new_(1,{R:"Object[]"},P$.ReferencePipeline$lambda4.$init$, [this, null])));
});

Clazz.newMeth(C$, 'anyMatch$java_util_function_Predicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(17).makeRef$java_util_function_Predicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(18).ANY))).valueOf();
});

Clazz.newMeth(C$, 'allMatch$java_util_function_Predicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(17).makeRef$java_util_function_Predicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(18).ALL))).valueOf();
});

Clazz.newMeth(C$, 'noneMatch$java_util_function_Predicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(17).makeRef$java_util_function_Predicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(18).NONE))).valueOf();
});

Clazz.newMeth(C$, 'findFirst$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(19).makeRef$Z(true));
});

Clazz.newMeth(C$, 'findAny$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(19).makeRef$Z(false));
});

Clazz.newMeth(C$, ['reduce$TP_OUT$java_util_function_BinaryOperator','reduce$TT$java_util_function_BinaryOperator'], function (identity, accumulator) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeRef$TU$java_util_function_BiFunction$java_util_function_BinaryOperator(identity, accumulator, accumulator));
});

Clazz.newMeth(C$, 'reduce$java_util_function_BinaryOperator', function (accumulator) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeRef$java_util_function_BinaryOperator(accumulator));
});

Clazz.newMeth(C$, ['reduce$TR$java_util_function_BiFunction$java_util_function_BinaryOperator'], function (identity, accumulator, combiner) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeRef$TU$java_util_function_BiFunction$java_util_function_BinaryOperator(identity, accumulator, combiner));
});

Clazz.newMeth(C$, 'collect$java_util_stream_Collector', function (collector) {
var container;
if (this.isParallel$() && (collector.characteristics$().contains$O($I$(21).CONCURRENT)) && (!this.isOrdered$() || collector.characteristics$().contains$O($I$(21).UNORDERED) )  ) {
container=collector.supplier$().get$();
var accumulator=collector.accumulator$();
this.forEach$java_util_function_Consumer(((P$.ReferencePipeline$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReferencePipeline$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (u) { return (this.$finals$.accumulator.accept$(this.$finals$.container, u));});
})()
), Clazz.new_(1,{T:"_.? super P_OUT"},P$.ReferencePipeline$lambda5.$init$, [this, {container:container,accumulator:accumulator}])));
} else {
container=this.evaluate$java_util_stream_TerminalOp($I$(20).makeRef$java_util_stream_Collector(collector));
}return collector.characteristics$().contains$O($I$(21).IDENTITY_FINISH) ? container : collector.finisher$().apply$(container);
});

Clazz.newMeth(C$, 'collect$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BiConsumer', function (supplier, accumulator, combiner) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeRef$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BiConsumer(supplier, accumulator, combiner));
});

Clazz.newMeth(C$, 'max$java_util_Comparator', function (comparator) {
return this.reduce$java_util_function_BinaryOperator($I$(22).maxBy$java_util_Comparator(comparator));
});

Clazz.newMeth(C$, 'min$java_util_Comparator', function (comparator) {
return this.reduce$java_util_function_BinaryOperator($I$(22).minBy$java_util_Comparator(comparator));
});

Clazz.newMeth(C$, 'count$', function () {
return this.mapToLong$java_util_function_ToLongFunction((P$.ReferencePipeline$lambda6$||(P$.ReferencePipeline$lambda6$=(((P$.ReferencePipeline$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReferencePipeline$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToLongFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (e) { return (1);});
})()
), Clazz.new_(1,{T:"_.? super P_OUT"},P$.ReferencePipeline$lambda6.$init$, [this, null])))))).sum$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReferencePipeline, "Head", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.ReferencePipeline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z', function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_function_Supplier$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z', function (source, sourceFlags, parallel) {
;C$.superclazz.c$$java_util_Spliterator$I$Z.apply(this,[source, sourceFlags, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'opIsStateful$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
if (!this.isParallel$()) {
this.sourceStageSpliterator$().forEachRemaining$java_util_function_Consumer(action);
} else {
C$.superclazz.prototype.forEach$java_util_function_Consumer.apply(this, [action]);
}});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_Consumer', function (action) {
if (!this.isParallel$()) {
this.sourceStageSpliterator$().forEachRemaining$java_util_function_Consumer(action);
} else {
C$.superclazz.prototype.forEachOrdered$java_util_function_Consumer.apply(this, [action]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReferencePipeline, "StatelessOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.ReferencePipeline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I', function (upstream, inputShape, opFlags) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this,[upstream, opFlags]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upstream.getOutputShape$() === inputShape });
}, 1);

Clazz.newMeth(C$, 'opIsStateful$', function () {
return false;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReferencePipeline, "StatefulOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.ReferencePipeline');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I', function (upstream, inputShape, opFlags) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this,[upstream, opFlags]);C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upstream.getOutputShape$() === inputShape });
}, 1);

Clazz.newMeth(C$, 'opIsStateful$', function () {
return true;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
