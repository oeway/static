(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "LongUnaryOperator");

Clazz.newMeth(C$, 'identity$', function () {
return (P$.LongUnaryOperator$lambda3$||(P$.LongUnaryOperator$lambda3$=(((P$.LongUnaryOperator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (t) { return (t);});
})()
), Clazz.new_(P$.LongUnaryOperator$lambda3.$init$, [this, null])))));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_LongUnaryOperator', function (before) {
$I$(1).requireNonNull$TT(before);
return (P$.LongUnaryOperator$lambda1$||(P$.LongUnaryOperator$lambda1$=(((P$.LongUnaryOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (v) { return (this.applyAsLong$(before.applyAsLong$(v)));});
})()
), Clazz.new_(P$.LongUnaryOperator$lambda1.$init$, [this, null])))));
});

Clazz.newMeth(C$, 'andThen$java_util_function_LongUnaryOperator', function (after) {
$I$(1).requireNonNull$TT(after);
return (P$.LongUnaryOperator$lambda2$||(P$.LongUnaryOperator$lambda2$=(((P$.LongUnaryOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (t) { return (after.applyAsLong$(this.applyAsLong$(t)));});
})()
), Clazz.new_(P$.LongUnaryOperator$lambda2.$init$, [this, null])))));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
