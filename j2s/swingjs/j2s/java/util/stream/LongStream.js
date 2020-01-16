(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.LongStreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfLong'],['java.util.stream.Streams','.RangeLongSpliterator'],['java.util.stream.Streams','.ConcatSpliterator','.OfLong'],'java.util.stream.Streams']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "LongStream", function(){
}, null, 'java.util.stream.BaseStream');
C$.$classes$=[['Builder',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'empty$', function () {
return $I$(2).longStream$java_util_Spliterator_OfLong$Z($I$(3).emptyLongSpliterator$(), false);
}, 1);

Clazz.newMeth(C$, 'of$J', function (t) {
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(1,1).c$$J,[t]), false);
}, 1);

Clazz.newMeth(C$, 'of$JA', function (values) {
return $I$(4).stream$JA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$J$java_util_function_LongUnaryOperator', function (seed, f) {
$I$(5).requireNonNull$TT(f);
var iterator=((P$.LongStream$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LongStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfLong']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=this.$finals$.seed;
}, 1);

C$.$fields$=[['L',['t']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return true;
});

Clazz.newMeth(C$, 'nextLong$', function () {
var v=this.t;
this.t=this.$finals$.f.applyAsLong$(this.t);
return v;
});
})()
), Clazz.new_(P$.LongStream$1.$init$, [this, {seed:seed,f:f}]));
return $I$(2).longStream$java_util_Spliterator_OfLong$Z($I$(3).spliteratorUnknownSize$java_util_PrimitiveIterator_OfLong$I(iterator, 1296), false);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_LongSupplier', function (s) {
$I$(5).requireNonNull$TT(s);
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(6,1).c$$J$java_util_function_LongSupplier,[9223372036854775807, s]), false);
}, 1);

Clazz.newMeth(C$, 'range$J$J', function (startInclusive, endExclusive) {
if (startInclusive >= endExclusive) {
return C$.empty$();
} else if (endExclusive - startInclusive < 0) {
var m=startInclusive + Long.divideUnsigned$J$J(endExclusive - startInclusive, 2) + 1 ;
return C$.concat$java_util_stream_LongStream$java_util_stream_LongStream(C$.range$J$J(startInclusive, m), C$.range$J$J(m, endExclusive));
} else {
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(7,1).c$$J$J$Z,[startInclusive, endExclusive, false]), false);
}}, 1);

Clazz.newMeth(C$, 'rangeClosed$J$J', function (startInclusive, endInclusive) {
if (startInclusive > endInclusive) {
return C$.empty$();
} else if (endInclusive - startInclusive + 1 <= 0) {
var m=startInclusive + Long.divideUnsigned$J$J(endInclusive - startInclusive, 2) + 1 ;
return C$.concat$java_util_stream_LongStream$java_util_stream_LongStream(C$.range$J$J(startInclusive, m), C$.rangeClosed$J$J(m, endInclusive));
} else {
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(7,1).c$$J$J$Z,[startInclusive, endInclusive, true]), false);
}}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_LongStream$java_util_stream_LongStream', function (a, b) {
$I$(5).requireNonNull$TT(a);
$I$(5).requireNonNull$TT(b);
var split=Clazz.new_($I$(8,1).c$$java_util_Spliterator_OfLong$java_util_Spliterator_OfLong,[a.spliterator$(), b.spliterator$()]);
var stream=$I$(2).longStream$java_util_Spliterator_OfLong$Z(split, a.isParallel$() || b.isParallel$() );
return stream.onClose$Runnable($I$(9).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LongStream, "Builder", function(){
}, null, 'java.util.function.LongConsumer');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$J', function (t) {
this.accept$J(t);
return this;
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LongStream, "Builder", function(){
}, null, 'java.util.function.LongConsumer');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$J', function (t) {
this.accept$J(t);
return this;
});
};})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
