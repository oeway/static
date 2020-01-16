(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'java.util.LinkedList','java.nio.ByteBuffer','java.nio.ByteOrder','java.util.stream.DoubleStream','java.util.Arrays','org.rcsb.cif.binary.codec.Classifier']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Float64Array", null, 'org.rcsb.cif.binary.data.AbstractEncodedData', 'org.rcsb.cif.binary.data.FloatArray');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (data) {
C$.c$$DA$java_util_LinkedList.apply(this, [data, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$DA$java_util_LinkedList', function (data, encoding) {
;C$.superclazz.c$$O$java_util_LinkedList.apply(this, [data, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'length$', function () {
return this.getData$().length;
});

Clazz.newMeth(C$, 'toByteArray$', function () {
var buffer=$I$(2).allocate$I(this.length$() * 8);
buffer.order$java_nio_ByteOrder($I$(3).LITTLE_ENDIAN);
$I$(4).of$DA(this.getData$()).forEach$java_util_function_DoubleConsumer((function($$){((P$.Float64Array$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Float64Array$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.SimpleName java.nio.ByteBuffer*/$$.putDouble$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.Float64Array$lambda1.$init$, [this, null])})(buffer));
return buffer.array$();
});

Clazz.newMeth(C$, 'getNumberOfBytes$', function () {
return 8;
});

Clazz.newMeth(C$, 'getType$', function () {
return 33;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getSimpleName$() + ": " + $I$(5).toString$DA(this.getData$()) ;
});

Clazz.newMeth(C$, 'classify$', function () {
return $I$(6).classify$org_rcsb_cif_binary_data_Float64Array(this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
