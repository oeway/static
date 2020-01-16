(function(){var P$=Clazz.newPackage("net.imglib2.position"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractFunctionEuclideanSpace", null, null, 'net.imglib2.EuclideanSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['functionSupplier','java.util.function.Supplier','+typeSupplier']]]

Clazz.newMeth(C$, 'c$$I$java_util_function_Supplier$java_util_function_Supplier', function (n, functionSupplier, typeSupplier) {
;C$.$init$.apply(this);
this.n=n;
this.functionSupplier=functionSupplier;
this.typeSupplier=typeSupplier;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_function_BiConsumer$java_util_function_Supplier', function (n, $function, typeSupplier) {
C$.c$$I$java_util_function_Supplier$java_util_function_Supplier.apply(this, [n, ((P$.AbstractFunctionEuclideanSpace$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AbstractFunctionEuclideanSpace$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (this.$finals$.$function);});
})()
), Clazz.new_(1,{T:"java.util.function.BiConsumer"},P$.AbstractFunctionEuclideanSpace$lambda1.$init$, [this, {$function:$function}])), typeSupplier]);
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
