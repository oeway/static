(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Tripwire','java.util.stream.Nodes','java.util.stream.StreamShape']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Node", function(){
});
C$.$classes$=[['Builder',9],['OfPrimitive',9],['OfInt',9],['OfLong',9],['OfDouble',9]];
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getChildCount$', function () {
return 0;
});

Clazz.newMeth(C$, 'getChild$I', function (i) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var spliterator=this.spliterator$();
var size=to - from;
var nodeBuilder=$I$(2).builder$J$java_util_function_IntFunction(size, generator);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_Consumer((P$.Node$lambda1$||(P$.Node$lambda1$=(((P$.Node$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(1,{T:"_.? super T"},P$.Node$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_Consumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).REFERENCE;
});
};;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "Builder", function(){
}, null, 'java.util.stream.Sink');
C$.$classes$=[['OfInt',9],['OfLong',9],['OfDouble',9]];

C$.$clinit$=2;
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;
})()
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfPrimitive", function(){
}, null, 'java.util.stream.Node');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getChild$I', function (i) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (generator) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfPrimitive.asArray");
var size=this.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var boxed=generator.apply$((this.count$()|0));
this.copyInto$TTA$I(boxed, 0);
return boxed;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.IntConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfInt.forEachRemaining(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$IntegerA$I','copyIntonull'], function (boxed, offset) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfInt.copyInto(Integer[], int)");
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=new Integer(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var size=to - from;
var spliterator=this.spliterator$();
var nodeBuilder=$I$(2).intBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_IntConsumer((P$.Node$OfInt$lambda1$||(P$.Node$OfInt$lambda1$=(((P$.Node$OfInt$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(P$.Node$OfInt$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_IntConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I', function (count) {
return Clazz.array(Integer.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).INT_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.LongConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfLong.forEachRemaining(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$LongA$I','copyIntonull'], function (boxed, offset) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfInt.copyInto(Long[], int)");
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=new Long(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var size=to - from;
var spliterator=this.spliterator$();
var nodeBuilder=$I$(2).longBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_LongConsumer((P$.Node$OfLong$lambda1$||(P$.Node$OfLong$lambda1$=(((P$.Node$OfLong$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(P$.Node$OfLong$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_LongConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I', function (count) {
return Clazz.array(Long.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).LONG_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.DoubleConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfLong.forEachRemaining(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$DoubleA$I','copyIntonull'], function (boxed, offset) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfDouble.copyInto(Double[], int)");
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=new Double(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var size=to - from;
var spliterator=this.spliterator$();
var nodeBuilder=$I$(2).doubleBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_DoubleConsumer((P$.Node$OfDouble$lambda1$||(P$.Node$OfDouble$lambda1$=(((P$.Node$OfDouble$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(P$.Node$OfDouble$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_DoubleConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I', function (count) {
return Clazz.array(Double.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).DOUBLE_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "Builder", function(){
}, null, 'java.util.stream.Sink');
C$.$classes$=[['OfInt',9],['OfLong',9],['OfDouble',9]];

C$.$clinit$=2;
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node.Builder, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.Builder'], ['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;
})()
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfPrimitive", function(){
}, null, 'java.util.stream.Node');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getChild$I', function (i) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction', function (generator) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfPrimitive.asArray");
var size=this.count$();
if (size >= 2147483639) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var boxed=generator.apply$((this.count$()|0));
this.copyInto$TTA$I(boxed, 0);
return boxed;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfInt", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.IntConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfInt.forEachRemaining(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$IntegerA$I','copyIntonull'], function (boxed, offset) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfInt.copyInto(Integer[], int)");
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=new Integer(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var size=to - from;
var spliterator=this.spliterator$();
var nodeBuilder=$I$(2).intBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_IntConsumer((P$.Node$OfInt$lambda1$||(P$.Node$OfInt$lambda1$=(((P$.Node$OfInt$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(P$.Node$OfInt$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_IntConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I', function (count) {
return Clazz.array(Integer.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).INT_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfLong", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.LongConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfLong.forEachRemaining(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$LongA$I','copyIntonull'], function (boxed, offset) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfInt.copyInto(Long[], int)");
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=new Long(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var size=to - from;
var spliterator=this.spliterator$();
var nodeBuilder=$I$(2).longBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_LongConsumer((P$.Node$OfLong$lambda1$||(P$.Node$OfLong$lambda1$=(((P$.Node$OfLong$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(P$.Node$OfLong$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_LongConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I', function (count) {
return Clazz.array(Long.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).LONG_VALUE;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Node, "OfDouble", function(){
}, null, [['java.util.stream.Node','java.util.stream.Node.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEach$java_util_function_Consumer','forEachnull'], function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.DoubleConsumer")) {
this.forEach$TT_CONS(consumer);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfLong.forEachRemaining(Consumer)");
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, ['copyInto$DoubleA$I','copyIntonull'], function (boxed, offset) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Node.OfDouble.copyInto(Double[], int)");
var array=this.asPrimitiveArray$();
for (var i=0; i < array.length; i++) {
boxed[offset + i]=new Double(array[i]);
}
});

Clazz.newMeth(C$, 'truncate$J$J$java_util_function_IntFunction', function (from, to, generator) {
if (from == 0 && to == this.count$() ) return this;
var size=to - from;
var spliterator=this.spliterator$();
var nodeBuilder=$I$(2).doubleBuilder$J(size);
nodeBuilder.begin$J(size);
for (var i=0; i < from && spliterator.tryAdvance$java_util_function_DoubleConsumer((P$.Node$OfDouble$lambda1$||(P$.Node$OfDouble$lambda1$=(((P$.Node$OfDouble$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Node$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (e) {
});
})()
), Clazz.new_(P$.Node$OfDouble$lambda1.$init$, [this, null])))))) ; i++) {
}
for (var i=0; (i < size) && spliterator.tryAdvance$java_util_function_DoubleConsumer(nodeBuilder) ; i++) {
}
nodeBuilder.end$();
return nodeBuilder.build$();
});

Clazz.newMeth(C$, 'newArray$I', function (count) {
return Clazz.array(Double.TYPE, [count]);
});

Clazz.newMeth(C$, 'getShape$', function () {
return $I$(3).DOUBLE_VALUE;
});
};})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
