(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamShape','java.util.stream.StreamOpFlag','java.util.Comparator','java.util.Objects',['java.util.stream.SortedOps','.SizedRefSortingSink'],['java.util.stream.SortedOps','.RefSortingSink'],'java.util.Arrays','java.util.stream.Nodes',['java.util.stream.SortedOps','.SizedIntSortingSink'],['java.util.stream.SortedOps','.IntSortingSink'],['java.util.stream.SortedOps','.SizedLongSortingSink'],['java.util.stream.SortedOps','.LongSortingSink'],['java.util.stream.SortedOps','.SizedDoubleSortingSink'],['java.util.stream.SortedOps','.DoubleSortingSink'],'java.util.ArrayList',['java.util.stream.SpinedBuffer','.OfInt'],['java.util.stream.SpinedBuffer','.OfLong'],['java.util.stream.SpinedBuffer','.OfDouble'],['java.util.stream.SortedOps','.OfRef'],['java.util.stream.SortedOps','.OfInt'],['java.util.stream.SortedOps','.OfLong'],['java.util.stream.SortedOps','.OfDouble']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SortedOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['OfRef',26],['OfInt',26],['OfLong',26],['OfDouble',26],['AbstractRefSortingSink',1034],['SizedRefSortingSink',26],['RefSortingSink',26],['AbstractIntSortingSink',1034],['SizedIntSortingSink',26],['IntSortingSink',26],['AbstractLongSortingSink',1034],['SizedLongSortingSink',26],['LongSortingSink',26],['AbstractDoubleSortingSink',1034],['SizedDoubleSortingSink',26],['DoubleSortingSink',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_AbstractPipeline', function (upstream) {
return Clazz.new_(1,{T:"Object"},$I$(19,1).c$$java_util_stream_AbstractPipeline,[upstream]);
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_AbstractPipeline$java_util_Comparator', function (upstream, comparator) {
return Clazz.new_(1,{T:"Object"},$I$(19,1).c$$java_util_stream_AbstractPipeline$java_util_Comparator,[upstream, comparator]);
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_stream_AbstractPipeline', function (upstream) {
return Clazz.new_($I$(20,1).c$$java_util_stream_AbstractPipeline,[upstream]);
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_stream_AbstractPipeline', function (upstream) {
return Clazz.new_($I$(21,1).c$$java_util_stream_AbstractPipeline,[upstream]);
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_stream_AbstractPipeline', function (upstream) {
return Clazz.new_($I$(22,1).c$$java_util_stream_AbstractPipeline,[upstream]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.ReferencePipeline','.StatefulOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isNaturalSort'],'O',['comparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline', function (upstream) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I.apply(this,[upstream, $I$(1).REFERENCE, $I$(2).IS_ORDERED | $I$(2).IS_SORTED]);C$.$init$.apply(this);
this.isNaturalSort=true;
var comp=$I$(3).naturalOrder$();
this.comparator=comp;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_Comparator', function (upstream, comparator) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I.apply(this,[upstream, $I$(1).REFERENCE, $I$(2).IS_ORDERED | $I$(2).NOT_SORTED]);C$.$init$.apply(this);
this.isNaturalSort=false;
this.comparator=$I$(4).requireNonNull$TT(comparator);
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
$I$(4).requireNonNull$TT(sink);
if ($I$(2).SORTED.isKnown$I(flags) && this.isNaturalSort ) return sink;
 else if ($I$(2).SIZED.isKnown$I(flags)) return Clazz.new_(1,{T:"Object"},$I$(5,1).c$$java_util_stream_Sink$java_util_Comparator,[sink, this.comparator]);
 else return Clazz.new_(1,{T:"Object"},$I$(6,1).c$$java_util_stream_Sink$java_util_Comparator,[sink, this.comparator]);
});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
if ($I$(2).SORTED.isKnown$I(helper.getStreamAndOpFlags$()) && this.isNaturalSort ) {
return helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, false, generator);
} else {
var flattenedData=helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, true, generator).asArray$java_util_function_IntFunction(generator);
$I$(7).parallelSort$TTA$java_util_Comparator(flattenedData, this.comparator);
return $I$(8).node$TTA(flattenedData);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.IntPipeline','.StatefulOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline', function (upstream) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I.apply(this,[upstream, $I$(1).INT_VALUE, $I$(2).IS_ORDERED | $I$(2).IS_SORTED]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
$I$(4).requireNonNull$TT(sink);
if ($I$(2).SORTED.isKnown$I(flags)) return sink;
 else if ($I$(2).SIZED.isKnown$I(flags)) return Clazz.new_($I$(9,1).c$$java_util_stream_Sink,[sink]);
 else return Clazz.new_($I$(10,1).c$$java_util_stream_Sink,[sink]);
});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
if ($I$(2).SORTED.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, false, generator);
} else {
var n=helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, true, generator);
var content=n.asPrimitiveArray$();
$I$(7).parallelSort$IA(content);
return $I$(8).node$IA(content);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.LongPipeline','.StatefulOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline', function (upstream) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I.apply(this,[upstream, $I$(1).LONG_VALUE, $I$(2).IS_ORDERED | $I$(2).IS_SORTED]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
$I$(4).requireNonNull$TT(sink);
if ($I$(2).SORTED.isKnown$I(flags)) return sink;
 else if ($I$(2).SIZED.isKnown$I(flags)) return Clazz.new_($I$(11,1).c$$java_util_stream_Sink,[sink]);
 else return Clazz.new_($I$(12,1).c$$java_util_stream_Sink,[sink]);
});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
if ($I$(2).SORTED.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, false, generator);
} else {
var n=helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, true, generator);
var content=n.asPrimitiveArray$();
$I$(7).parallelSort$JA(content);
return $I$(8).node$JA(content);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.DoublePipeline','.StatefulOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline', function (upstream) {
;C$.superclazz.c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I.apply(this,[upstream, $I$(1).DOUBLE_VALUE, $I$(2).IS_ORDERED | $I$(2).IS_SORTED]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
$I$(4).requireNonNull$TT(sink);
if ($I$(2).SORTED.isKnown$I(flags)) return sink;
 else if ($I$(2).SIZED.isKnown$I(flags)) return Clazz.new_($I$(13,1).c$$java_util_stream_Sink,[sink]);
 else return Clazz.new_($I$(14,1).c$$java_util_stream_Sink,[sink]);
});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
if ($I$(2).SORTED.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, false, generator);
} else {
var n=helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, true, generator);
var content=n.asPrimitiveArray$();
$I$(7).parallelSort$DA(content);
return $I$(8).node$DA(content);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "AbstractRefSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Sink','.ChainedReference']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['cancellationWasRequested'],'O',['comparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink$java_util_Comparator', function (downstream, comparator) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
this.comparator=comparator;
}, 1);

Clazz.newMeth(C$, 'cancellationRequested$', function () {
this.cancellationWasRequested=true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "SizedRefSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractRefSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset'],'O',['array','_.T[]']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink$java_util_Comparator', function (sink, comparator) {
;C$.superclazz.c$$java_util_stream_Sink$java_util_Comparator.apply(this,[sink, comparator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(java.lang.Object, [(size|0)]);
});

Clazz.newMeth(C$, 'end$', function () {
$I$(7).sort$TTA$I$I$java_util_Comparator(this.array, 0, this.offset, this.comparator);
this.downstream.begin$J(this.offset);
if (!this.cancellationWasRequested) {
for (var i=0; i < this.offset; i++) this.downstream.accept$(this.array[i]);

} else {
for (var i=0; i < this.offset && !this.downstream.cancellationRequested$() ; i++) this.downstream.accept$(this.array[i]);

}this.downstream.end$();
this.array=null;
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
this.array[this.offset++]=t;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "RefSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractRefSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink$java_util_Comparator', function (sink, comparator) {
;C$.superclazz.c$$java_util_stream_Sink$java_util_Comparator.apply(this,[sink, comparator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.list=(size >= 0) ? Clazz.new_(1,{E:"Object"},$I$(15,1).c$$I,[(size|0)]) : Clazz.new_(1,{E:"Object"},$I$(15,1));
});

Clazz.newMeth(C$, 'end$', function () {
this.list.sort$java_util_Comparator(this.comparator);
this.downstream.begin$J(this.list.size$());
if (!this.cancellationWasRequested) {
this.list.forEach$java_util_function_Consumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "SortedOps$RefSortingSink$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(1,{T:"_.? super T"},P$.SortedOps$RefSortingSink$lambda1.$init$, [this, null])})(this.downstream));
} else {
for (var t, $t = this.list.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
if (this.downstream.cancellationRequested$()) break;
this.downstream.accept$(t);
}
}this.downstream.end$();
this.list=null;
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
this.list.add$TE(t);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "AbstractIntSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Sink','.ChainedInt']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['cancellationWasRequested']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'cancellationRequested$', function () {
this.cancellationWasRequested=true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "SizedIntSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractIntSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset'],'O',['array','int[]']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(Integer.TYPE, [(size|0)]);
});

Clazz.newMeth(C$, 'end$', function () {
$I$(7).sort$IA$I$I(this.array, 0, this.offset);
this.downstream.begin$J(this.offset);
if (!this.cancellationWasRequested) {
for (var i=0; i < this.offset; i++) this.downstream.accept$(this.array[i]);

} else {
for (var i=0; i < this.offset && !this.downstream.cancellationRequested$() ; i++) this.downstream.accept$(this.array[i]);

}this.downstream.end$();
this.array=null;
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.array[this.offset++]=t;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "IntSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractIntSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['b','java.util.stream.SpinedBuffer.OfInt']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (sink) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[sink]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.b=(size > 0) ? Clazz.new_($I$(16,1).c$$I,[(size|0)]) : Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'end$', function () {
var ints=this.b.asPrimitiveArray$();
$I$(7).sort$IA(ints);
this.downstream.begin$J(ints.length);
if (!this.cancellationWasRequested) {
for (var anInt, $anInt = 0, $$anInt = ints; $anInt<$$anInt.length&&((anInt=($$anInt[$anInt])),1);$anInt++) this.downstream.accept$(anInt);

} else {
for (var anInt, $anInt = 0, $$anInt = ints; $anInt<$$anInt.length&&((anInt=($$anInt[$anInt])),1);$anInt++) {
if (this.downstream.cancellationRequested$()) break;
this.downstream.accept$(anInt);
}
}this.downstream.end$();
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.b.accept$I(t);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "AbstractLongSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Sink','.ChainedLong']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['cancellationWasRequested']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'cancellationRequested$', function () {
this.cancellationWasRequested=true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "SizedLongSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractLongSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset'],'O',['array','long[]']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(Long.TYPE, [(size|0)]);
});

Clazz.newMeth(C$, 'end$', function () {
$I$(7).sort$JA$I$I(this.array, 0, this.offset);
this.downstream.begin$J(this.offset);
if (!this.cancellationWasRequested) {
for (var i=0; i < this.offset; i++) this.downstream.accept$(this.array[i]);

} else {
for (var i=0; i < this.offset && !this.downstream.cancellationRequested$() ; i++) this.downstream.accept$(this.array[i]);

}this.downstream.end$();
this.array=null;
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.array[this.offset++]=t;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "LongSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractLongSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['b','java.util.stream.SpinedBuffer.OfLong']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (sink) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[sink]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.b=(size > 0) ? Clazz.new_($I$(17,1).c$$I,[(size|0)]) : Clazz.new_($I$(17,1));
});

Clazz.newMeth(C$, 'end$', function () {
var longs=this.b.asPrimitiveArray$();
$I$(7).sort$JA(longs);
this.downstream.begin$J(longs.length);
if (!this.cancellationWasRequested) {
for (var aLong, $aLong = 0, $$aLong = longs; $aLong<$$aLong.length&&((aLong=($$aLong[$aLong])),1);$aLong++) this.downstream.accept$(aLong);

} else {
for (var aLong, $aLong = 0, $$aLong = longs; $aLong<$$aLong.length&&((aLong=($$aLong[$aLong])),1);$aLong++) {
if (this.downstream.cancellationRequested$()) break;
this.downstream.accept$(aLong);
}
}this.downstream.end$();
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.b.accept$J(t);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "AbstractDoubleSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Sink','.ChainedDouble']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['cancellationWasRequested']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'cancellationRequested$', function () {
this.cancellationWasRequested=true;
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "SizedDoubleSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractDoubleSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['offset'],'O',['array','double[]']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[downstream]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.array=Clazz.array(Double.TYPE, [(size|0)]);
});

Clazz.newMeth(C$, 'end$', function () {
$I$(7).sort$DA$I$I(this.array, 0, this.offset);
this.downstream.begin$J(this.offset);
if (!this.cancellationWasRequested) {
for (var i=0; i < this.offset; i++) this.downstream.accept$(this.array[i]);

} else {
for (var i=0; i < this.offset && !this.downstream.cancellationRequested$() ; i++) this.downstream.accept$(this.array[i]);

}this.downstream.end$();
this.array=null;
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.array[this.offset++]=t;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SortedOps, "DoubleSortingSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SortedOps','.AbstractDoubleSortingSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['b','java.util.stream.SpinedBuffer.OfDouble']]]

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (sink) {
;C$.superclazz.c$$java_util_stream_Sink.apply(this,[sink]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
this.b=(size > 0) ? Clazz.new_($I$(18,1).c$$I,[(size|0)]) : Clazz.new_($I$(18,1));
});

Clazz.newMeth(C$, 'end$', function () {
var doubles=this.b.asPrimitiveArray$();
$I$(7).sort$DA(doubles);
this.downstream.begin$J(doubles.length);
if (!this.cancellationWasRequested) {
for (var aDouble, $aDouble = 0, $$aDouble = doubles; $aDouble<$$aDouble.length&&((aDouble=($$aDouble[$aDouble])),1);$aDouble++) this.downstream.accept$(aDouble);

} else {
for (var aDouble, $aDouble = 0, $$aDouble = doubles; $aDouble<$$aDouble.length&&((aDouble=($$aDouble[$aDouble])),1);$aDouble++) {
if (this.downstream.cancellationRequested$()) break;
this.downstream.accept$(aDouble);
}
}this.downstream.end$();
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.b.accept$D(t);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
