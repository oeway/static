(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "LongPredicate");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_LongPredicate', function (other) {
$I$(1).requireNonNull$TT(other);
return (P$.LongPredicate$lambda1$||(P$.LongPredicate$lambda1$=(((P$.LongPredicate$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongPredicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (value) { return (this.test$(value) && other.test$(value) );});
})()
), Clazz.new_(P$.LongPredicate$lambda1.$init$, [this, null])))));
});

Clazz.newMeth(C$, 'negate$', function () {
return (P$.LongPredicate$lambda2$||(P$.LongPredicate$lambda2$=(((P$.LongPredicate$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongPredicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (value) { return (!this.test$(value));});
})()
), Clazz.new_(P$.LongPredicate$lambda2.$init$, [this, null])))));
});

Clazz.newMeth(C$, 'or$java_util_function_LongPredicate', function (other) {
$I$(1).requireNonNull$TT(other);
return (P$.LongPredicate$lambda3$||(P$.LongPredicate$lambda3$=(((P$.LongPredicate$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "LongPredicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (value) { return (this.test$(value) || other.test$(value) );});
})()
), Clazz.new_(P$.LongPredicate$lambda3.$init$, [this, null])))));
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
