(function(){var P$=java.util,I$=[[0,'java.util.Tripwire']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Spliterator", function(){
});
C$.$classes$=[['OfPrimitive',9],['OfInt',9],['OfLong',9],['OfDouble',9]];
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
do {
} while (this.tryAdvance$java_util_function_Consumer(action));
});

Clazz.newMeth(C$, 'getExactSizeIfKnown$', function () {
return (this.characteristics$() & 64) == 0 ? -1 : this.estimateSize$();
});

Clazz.newMeth(C$, 'hasCharacteristics$I', function (characteristics) {
return (this.characteristics$() & characteristics) == characteristics;
});

Clazz.newMeth(C$, 'getComparator$', function () {
throw Clazz.new_(Clazz.load('IllegalStateException'));
});
};;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfPrimitive", function(){
}, null, 'java.util.Spliterator');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$TC(action));
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfInt", function(){
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$java_util_function_IntConsumer(action));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer','tryAdvancenull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
return this.tryAdvance$java_util_function_IntConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfInt.tryAdvance((IntConsumer) action::accept)");
return this.tryAdvance$java_util_function_IntConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfInt$lambda1.$init$, [this, null])})(action));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
this.forEachRemaining$java_util_function_IntConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfInt.forEachRemaining((IntConsumer) action::accept)");
this.forEachRemaining$java_util_function_IntConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfInt$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfInt$lambda2.$init$, [this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfLong", function(){
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$java_util_function_LongConsumer(action));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer','tryAdvancenull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
return this.tryAdvance$java_util_function_LongConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfLong.tryAdvance((LongConsumer) action::accept)");
return this.tryAdvance$java_util_function_LongConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfLong$lambda1.$init$, [this, null])})(action));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
this.forEachRemaining$java_util_function_LongConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfLong.forEachRemaining((LongConsumer) action::accept)");
this.forEachRemaining$java_util_function_LongConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfLong$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfLong$lambda2.$init$, [this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfDouble", function(){
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$java_util_function_DoubleConsumer(action));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer','tryAdvancenull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
return this.tryAdvance$java_util_function_DoubleConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfDouble.tryAdvance((DoubleConsumer) action::accept)");
return this.tryAdvance$java_util_function_DoubleConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfDouble$lambda1.$init$, [this, null])})(action));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
this.forEachRemaining$java_util_function_DoubleConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfDouble.forEachRemaining((DoubleConsumer) action::accept)");
this.forEachRemaining$java_util_function_DoubleConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfDouble$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfDouble$lambda2.$init$, [this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfPrimitive", function(){
}, null, 'java.util.Spliterator');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$TC(action));
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfInt", function(){
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$java_util_function_IntConsumer(action));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer','tryAdvancenull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
return this.tryAdvance$java_util_function_IntConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfInt.tryAdvance((IntConsumer) action::accept)");
return this.tryAdvance$java_util_function_IntConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfInt$lambda1.$init$, [this, null])})(action));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
this.forEachRemaining$java_util_function_IntConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfInt.forEachRemaining((IntConsumer) action::accept)");
this.forEachRemaining$java_util_function_IntConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfInt$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfInt$lambda2.$init$, [this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfLong", function(){
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$java_util_function_LongConsumer(action));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer','tryAdvancenull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
return this.tryAdvance$java_util_function_LongConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfLong.tryAdvance((LongConsumer) action::accept)");
return this.tryAdvance$java_util_function_LongConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfLong$lambda1.$init$, [this, null])})(action));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
this.forEachRemaining$java_util_function_LongConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfLong.forEachRemaining((LongConsumer) action::accept)");
this.forEachRemaining$java_util_function_LongConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfLong$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfLong$lambda2.$init$, [this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Spliterator, "OfDouble", function(){
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TC'], function (action) {
do {
} while (this.tryAdvance$java_util_function_DoubleConsumer(action));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_Consumer','tryAdvancenull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
return this.tryAdvance$java_util_function_DoubleConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfDouble.tryAdvance((DoubleConsumer) action::accept)");
return this.tryAdvance$java_util_function_DoubleConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfDouble$lambda1.$init$, [this, null])})(action));
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_Consumer','forEachRemainingnull'], function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
this.forEachRemaining$java_util_function_DoubleConsumer(action);
} else {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Spliterator.OfDouble.forEachRemaining((DoubleConsumer) action::accept)");
this.forEachRemaining$java_util_function_DoubleConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Spliterator$OfDouble$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $$.accept$.apply($$,[t])});
})()
)); return Clazz.new_(P$.Spliterator$OfDouble$lambda2.$init$, [this, null])})(action));
}});
};})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
