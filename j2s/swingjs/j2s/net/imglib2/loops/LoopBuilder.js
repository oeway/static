(function(){var P$=Clazz.newPackage("net.imglib2.loops"),p$1={},I$=[[0,'java.util.Arrays','net.imglib2.loops.ClassCopyProvider',['net.imglib2.loops.LoopBuilder','.RunnableFactory','.ConsumerRunnable'],['net.imglib2.loops.LoopBuilder','.RunnableFactory','.BiConsumerRunnable'],['net.imglib2.loops.LoopBuilder','.RunnableFactory','.TriConsumerRunnable'],['net.imglib2.loops.LoopBuilder','.RunnableFactory','.FourConsumerRunnable'],['net.imglib2.loops.LoopBuilder','.RunnableFactory','.FiveConsumerRunnable'],['net.imglib2.loops.LoopBuilder','.RunnableFactory','.SixConsumerRunnable'],'java.util.stream.Stream','java.util.stream.Collectors','net.imglib2.FinalInterval','net.imglib2.util.Intervals','java.util.Objects','net.imglib2.loops.SyncedPositionables','net.imglib2.loops.LoopUtils',['net.imglib2.loops.LoopBuilder','.RunnableFactory']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoopBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TriConsumer',9],['FourConsumer',9],['FiveConsumer',9],['SixConsumer',9],['RunnableFactory',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dimensions','net.imglib2.Dimensions','images','net.imglib2.RandomAccessibleInterval[]']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessibleIntervalA', function (images) {
;C$.$init$.apply(this);
this.images=images;
this.dimensions=Clazz.new_($I$(11,1).c$$net_imglib2_Interval,[images[0]]);
$I$(1).asList$TTA(images).forEach$java_util_function_Consumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "LoopBuilder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return p$1.$$.checkDimensions$net_imglib2_Interval.apply($$,[t])});
})()
)); return Clazz.new_(1,{T:"? super net.imglib2.RandomAccessibleInterval"},P$.LoopBuilder$lambda1.$init$, [this, null])})(this));
}, 1);

Clazz.newMeth(C$, 'checkDimensions$net_imglib2_Interval', function (interval) {
var a=$I$(12).dimensionsAsLongArray$net_imglib2_Dimensions(this.dimensions);
var b=$I$(12).dimensionsAsLongArray$net_imglib2_Dimensions(interval);
if (!$I$(1).equals$JA$JA(a, b)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Dimensions do not fit."]);
}, p$1);

Clazz.newMeth(C$, 'setImages$net_imglib2_RandomAccessibleInterval', function (a) {
return Clazz.new_(1,{T:"java.util.function.Consumer"},C$.c$$net_imglib2_RandomAccessibleIntervalA,[[a]]);
}, 1);

Clazz.newMeth(C$, 'setImages$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval', function (a, b) {
return Clazz.new_(1,{T:"java.util.function.BiConsumer"},C$.c$$net_imglib2_RandomAccessibleIntervalA,[[a, b]]);
}, 1);

Clazz.newMeth(C$, 'setImages$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval', function (a, b, c) {
return Clazz.new_(1,{T:"net.imglib2.loops.LoopBuilder.TriConsumer"},C$.c$$net_imglib2_RandomAccessibleIntervalA,[[a, b, c]]);
}, 1);

Clazz.newMeth(C$, 'setImages$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval', function (a, b, c, d) {
return Clazz.new_(1,{T:"net.imglib2.loops.LoopBuilder.FourConsumer"},C$.c$$net_imglib2_RandomAccessibleIntervalA,[[a, b, c, d]]);
}, 1);

Clazz.newMeth(C$, 'setImages$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval', function (a, b, c, d, e) {
return Clazz.new_(1,{T:"net.imglib2.loops.LoopBuilder.FiveConsumer"},C$.c$$net_imglib2_RandomAccessibleIntervalA,[[a, b, c, d, e]]);
}, 1);

Clazz.newMeth(C$, 'setImages$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval$net_imglib2_RandomAccessibleInterval', function (a, b, c, d, e, f) {
return Clazz.new_(1,{T:"net.imglib2.loops.LoopBuilder.SixConsumer"},C$.c$$net_imglib2_RandomAccessibleIntervalA,[[a, b, c, d, e, f]]);
}, 1);

Clazz.newMeth(C$, 'forEachPixel$TT', function (action) {
$I$(13).requireNonNull$TT(action);
var samplers=$I$(9).of$TTA(this.images).map$java_util_function_Function((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "LoopBuilder$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return p$1.$$.initRandomAccess$net_imglib2_RandomAccessibleInterval.apply($$,[t])});
})()
)); return Clazz.new_(1,{T:"? super net.imglib2.RandomAccessibleInterval",R:"? extends net.imglib2.RandomAccess"},P$.LoopBuilder$lambda2.$init$, [this, null])})(this)).collect$java_util_stream_Collector($I$(10).toList$());
var synced=$I$(14).create$java_util_List(samplers);
$I$(15).createIntervalLoop$net_imglib2_Positionable$net_imglib2_Dimensions$Runnable(synced, this.dimensions, $I$(16).bindActionToSamplers$O$java_util_List(action, samplers)).run$();
});

Clazz.newMeth(C$, 'initRandomAccess$net_imglib2_RandomAccessibleInterval', function (image) {
var ra=image.randomAccess$();
ra.setPosition$JA($I$(12).minAsLongArray$net_imglib2_Interval(image));
return ra;
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LoopBuilder, "TriConsumer", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LoopBuilder, "FourConsumer", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LoopBuilder, "FiveConsumer", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LoopBuilder, "SixConsumer", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder, "RunnableFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['ConsumerRunnable',9],['BiConsumerRunnable',9],['TriConsumerRunnable',9],['FourConsumerRunnable',9],['FiveConsumerRunnable',9],['SixConsumerRunnable',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.factories=$I$(1).asList$TTA([Clazz.new_(1,{T:"Runnable"},$I$(2,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(3)), Clazz.getClass(Runnable,['run$']), []]), Clazz.new_(1,{T:"Runnable"},$I$(2,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(4)), Clazz.getClass(Runnable,['run$']), []]), Clazz.new_(1,{T:"Runnable"},$I$(2,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(5)), Clazz.getClass(Runnable,['run$']), []]), Clazz.new_(1,{T:"Runnable"},$I$(2,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(6)), Clazz.getClass(Runnable,['run$']), []]), Clazz.new_(1,{T:"Runnable"},$I$(2,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(7)), Clazz.getClass(Runnable,['run$']), []]), Clazz.new_(1,{T:"Runnable"},$I$(2,1).c$$Class$Class$ClassA,[Clazz.getClass($I$(8)), Clazz.getClass(Runnable,['run$']), []])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['factories','java.util.List']]]

Clazz.newMeth(C$, 'bindActionToSamplers$O$java_util_List', function (action, samplers) {
var $arguments=$I$(9).concat$java_util_stream_Stream$java_util_stream_Stream($I$(9).of$TT(action), samplers.stream$()).toArray$();
for (var factory, $factory = C$.factories.iterator$(); $factory.hasNext$()&&((factory=($factory.next$())),1);) if (factory.matches$OA($arguments)) {
var key=$I$(9).of$TTA($arguments).map$java_util_function_Function((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "LoopBuilder$RunnableFactory$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return t.getClass$.apply(t,[])});
})()
)); return Clazz.new_(1,{T:"? super java.lang.Object",R:"? extends java.lang.Class"},P$.LoopBuilder$RunnableFactory$lambda1.$init$, [this, null])})(java.lang.Object)).collect$java_util_stream_Collector($I$(10).toList$());
return factory.newInstanceForKey$O$OA(key, $arguments);
}
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder.RunnableFactory, "ConsumerRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['action','java.util.function.Consumer','samplerA','net.imglib2.Sampler']]]

Clazz.newMeth(C$, 'c$$java_util_function_Consumer$net_imglib2_Sampler', function (action, samplerA) {
;C$.$init$.apply(this);
this.action=action;
this.samplerA=samplerA;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.action.accept$(this.samplerA.get$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder.RunnableFactory, "BiConsumerRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['action','java.util.function.BiConsumer','samplerA','net.imglib2.Sampler','+samplerB']]]

Clazz.newMeth(C$, 'c$$java_util_function_BiConsumer$net_imglib2_Sampler$net_imglib2_Sampler', function (action, samplerA, samplerB) {
;C$.$init$.apply(this);
this.action=action;
this.samplerA=samplerA;
this.samplerB=samplerB;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.action.accept$(this.samplerA.get$(), this.samplerB.get$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder.RunnableFactory, "TriConsumerRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['action','net.imglib2.loops.LoopBuilder.TriConsumer','samplerA','net.imglib2.Sampler','+samplerB','+samplerC']]]

Clazz.newMeth(C$, 'c$$net_imglib2_loops_LoopBuilder_TriConsumer$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler', function (action, samplerA, samplerB, samplerC) {
;C$.$init$.apply(this);
this.action=action;
this.samplerA=samplerA;
this.samplerB=samplerB;
this.samplerC=samplerC;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.action.accept$(this.samplerA.get$(), this.samplerB.get$(), this.samplerC.get$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder.RunnableFactory, "FourConsumerRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['action','net.imglib2.loops.LoopBuilder.FourConsumer','samplerA','net.imglib2.Sampler','+samplerB','+samplerC','+samplerD']]]

Clazz.newMeth(C$, 'c$$net_imglib2_loops_LoopBuilder_FourConsumer$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler', function (action, samplerA, samplerB, samplerC, samplerD) {
;C$.$init$.apply(this);
this.action=action;
this.samplerA=samplerA;
this.samplerB=samplerB;
this.samplerC=samplerC;
this.samplerD=samplerD;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.action.accept$(this.samplerA.get$(), this.samplerB.get$(), this.samplerC.get$(), this.samplerD.get$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder.RunnableFactory, "FiveConsumerRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['action','net.imglib2.loops.LoopBuilder.FiveConsumer','samplerA','net.imglib2.Sampler','+samplerB','+samplerC','+samplerD','+samplerE']]]

Clazz.newMeth(C$, 'c$$net_imglib2_loops_LoopBuilder_FiveConsumer$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler', function (action, samplerA, samplerB, samplerC, samplerD, samplerE) {
;C$.$init$.apply(this);
this.action=action;
this.samplerA=samplerA;
this.samplerB=samplerB;
this.samplerC=samplerC;
this.samplerD=samplerD;
this.samplerE=samplerE;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.action.accept$(this.samplerA.get$(), this.samplerB.get$(), this.samplerC.get$(), this.samplerD.get$(), this.samplerE.get$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LoopBuilder.RunnableFactory, "SixConsumerRunnable", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['action','net.imglib2.loops.LoopBuilder.SixConsumer','samplerA','net.imglib2.Sampler','+samplerB','+samplerC','+samplerD','+samplerE','+samplerF']]]

Clazz.newMeth(C$, 'c$$net_imglib2_loops_LoopBuilder_SixConsumer$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler$net_imglib2_Sampler', function (action, samplerA, samplerB, samplerC, samplerD, samplerE, samplerF) {
;C$.$init$.apply(this);
this.action=action;
this.samplerA=samplerA;
this.samplerB=samplerB;
this.samplerC=samplerC;
this.samplerD=samplerD;
this.samplerE=samplerE;
this.samplerF=samplerF;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.action.accept$(this.samplerA.get$(), this.samplerB.get$(), this.samplerC.get$(), this.samplerD.get$(), this.samplerE.get$(), this.samplerF.get$());
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
