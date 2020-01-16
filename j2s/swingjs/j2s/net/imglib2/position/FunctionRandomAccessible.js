(function(){var P$=Clazz.newPackage("net.imglib2.position"),I$=[[0,['net.imglib2.position.FunctionRandomAccessible','.FunctionRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FunctionRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.position.AbstractFunctionEuclideanSpace', 'net.imglib2.RandomAccessible');
C$.$classes$=[['FunctionRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_function_BiConsumer$java_util_function_Supplier', function (n, $function, typeSupplier) {
;C$.superclazz.c$$I$java_util_function_BiConsumer$java_util_function_Supplier.apply(this,[n, $function, typeSupplier]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_function_Supplier$java_util_function_Supplier', function (n, functionSupplier, typeSupplier) {
;C$.superclazz.c$$I$java_util_function_Supplier$java_util_function_Supplier.apply(this,[n, functionSupplier, typeSupplier]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FunctionRandomAccessible, "FunctionRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.Point', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.t=this.this$0.typeSupplier.get$();
this.$function=this.this$0.functionSupplier.get$();
}, 1);

C$.$fields$=[['O',['t','<T>','$function','java.util.function.BiConsumer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.b$['net.imglib2.position.FunctionRandomAccessible'].n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.$function.accept$(this, this.t);
return this.t;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$, [this, null]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
