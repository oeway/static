(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "DoubleUnaryOperator");

Clazz.newMeth(C$, 'identity$', function () {
return (P$.DoubleUnaryOperator$lambda3$||(P$.DoubleUnaryOperator$lambda3$=(((P$.DoubleUnaryOperator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (t) { return (t);});
})()
), Clazz.new_(P$.DoubleUnaryOperator$lambda3.$init$, [this, null])))));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_DoubleUnaryOperator', function (before) {
$I$(1).requireNonNull$TT(before);
return (P$.DoubleUnaryOperator$lambda1$||(P$.DoubleUnaryOperator$lambda1$=(((P$.DoubleUnaryOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (v) { return (this.applyAsDouble$(before.applyAsDouble$(v)));});
})()
), Clazz.new_(P$.DoubleUnaryOperator$lambda1.$init$, [this, null])))));
});

Clazz.newMeth(C$, 'andThen$java_util_function_DoubleUnaryOperator', function (after) {
$I$(1).requireNonNull$TT(after);
return (P$.DoubleUnaryOperator$lambda2$||(P$.DoubleUnaryOperator$lambda2$=(((P$.DoubleUnaryOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (t) { return (after.applyAsDouble$(this.applyAsDouble$(t)));});
})()
), Clazz.new_(P$.DoubleUnaryOperator$lambda2.$init$, [this, null])))));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
