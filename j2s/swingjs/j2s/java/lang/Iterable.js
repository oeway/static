(function(){var P$=java.lang,I$=[[0,'java.util.Objects','java.util.Spliterators']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "Iterable");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$TT(action);
for (var t, $t = this.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
action.accept$(t);
}
});

Clazz.newMeth(C$, 'spliterator$', function () {
return $I$(2).spliteratorUnknownSize$java_util_Iterator$I(this.iterator$(), 0);
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
