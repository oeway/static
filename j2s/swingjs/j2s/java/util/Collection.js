(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Spliterators','java.util.stream.StreamSupport']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Collection", null, null, 'Iterable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate', function (filter) {
$I$(1).requireNonNull$TT(filter);
var removed=false;
var each=this.iterator$();
while (each.hasNext$()){
if (filter.test$(each.next$())) {
each.remove$();
removed=true;
}}
return removed;
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliterator$java_util_Collection$I(this, 0);
});

Clazz.newMeth(C$, 'stream$', function () {
return $I$(3).stream$java_util_Spliterator$Z(this.spliterator$(), false);
});

Clazz.newMeth(C$, 'parallelStream$', function () {
return $I$(3).stream$java_util_Spliterator$Z(this.spliterator$(), true);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
