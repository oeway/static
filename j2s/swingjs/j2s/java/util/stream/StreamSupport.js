(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Objects',['java.util.stream.ReferencePipeline','.Head'],'java.util.stream.StreamOpFlag',['java.util.stream.IntPipeline','.Head'],['java.util.stream.LongPipeline','.Head'],['java.util.stream.DoublePipeline','.Head']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StreamSupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'stream$java_util_Spliterator$Z', function (spliterator, parallel) {
$I$(1).requireNonNull$TT(spliterator);
return Clazz.new_(1,{E_IN:"java.lang.Object",E_OUT:"Object"},$I$(2,1).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'stream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
$I$(1).requireNonNull$TT(supplier);
return Clazz.new_(1,{E_IN:"java.lang.Object",E_OUT:"Object"},$I$(2,1).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);

Clazz.newMeth(C$, 'intStream$java_util_Spliterator_OfInt$Z', function (spliterator, parallel) {
return Clazz.new_(1,{E_IN:"java.lang.Object"},$I$(4,1).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'intStream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
return Clazz.new_(1,{E_IN:"java.lang.Object"},$I$(4,1).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);

Clazz.newMeth(C$, 'longStream$java_util_Spliterator_OfLong$Z', function (spliterator, parallel) {
return Clazz.new_(1,{E_IN:"java.lang.Object"},$I$(5,1).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'longStream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
return Clazz.new_(1,{E_IN:"java.lang.Object"},$I$(5,1).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);

Clazz.newMeth(C$, 'doubleStream$java_util_Spliterator_OfDouble$Z', function (spliterator, parallel) {
return Clazz.new_(1,{E_IN:"java.lang.Object"},$I$(6,1).c$$java_util_Spliterator$I$Z,[spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel]);
}, 1);

Clazz.newMeth(C$, 'doubleStream$java_util_function_Supplier$I$Z', function (supplier, characteristics, parallel) {
return Clazz.new_(1,{E_IN:"java.lang.Object"},$I$(6,1).c$$java_util_function_Supplier$I$Z,[supplier, $I$(3).fromCharacteristics$I(characteristics), parallel]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
