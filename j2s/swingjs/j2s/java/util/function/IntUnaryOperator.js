(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "IntUnaryOperator");

Clazz.newMeth(C$, 'identity$', function () {
return (P$.IntUnaryOperator$lambda3$||(P$.IntUnaryOperator$lambda3$=(((P$.IntUnaryOperator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return (t);});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda3.$init$, [this, null])))));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_IntUnaryOperator', function (before) {
$I$(1).requireNonNull$TT(before);
return (P$.IntUnaryOperator$lambda1$||(P$.IntUnaryOperator$lambda1$=(((P$.IntUnaryOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (v) { return (this.applyAsInt$(before.applyAsInt$(v)));});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda1.$init$, [this, null])))));
});

Clazz.newMeth(C$, 'andThen$java_util_function_IntUnaryOperator', function (after) {
$I$(1).requireNonNull$TT(after);
return (P$.IntUnaryOperator$lambda2$||(P$.IntUnaryOperator$lambda2$=(((P$.IntUnaryOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return (after.applyAsInt$(this.applyAsInt$(t)));});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda2.$init$, [this, null])))));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
