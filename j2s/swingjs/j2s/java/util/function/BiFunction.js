(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "BiFunction");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'andThen$java_util_function_Function', function (after) {
$I$(1).requireNonNull$TT(after);
return ((P$.BiFunction$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BiFunction$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (t, u) { return (this.$finals$.after.apply$(this.apply$(t, u)));});
})()
), Clazz.new_(1,{T:"Object",U:"Object",R:"Object"},P$.BiFunction$lambda1.$init$, [this, {after:after}]));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
