(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'java.util.stream.DoubleStream','java.util.LinkedList','org.rcsb.cif.binary.data.EncodedDataFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedPointCodec");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_FloatArray$org_rcsb_cif_binary_encoding_FixedPointEncoding', function (data, encoding) {
var srcType=data.getType$();
var factor=encoding.getFactor$();
var outputArray=$I$(1).of$DA(data.getData$()).mapToInt$java_util_function_DoubleToIntFunction(((P$.FixedPointCodec$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FixedPointCodec$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleToIntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (d) { return ((Math.round(d * this.$finals$.factor)|0));});
})()
), Clazz.new_(P$.FixedPointCodec$lambda1.$init$, [this, {factor:factor}]))).toArray$();
var enc=Clazz.new_($I$(2,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setSrcType$I(srcType);
enc.add$TE(encoding);
return $I$(3).int32Array$IA$java_util_LinkedList(outputArray, enc);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_FixedPointEncoding', function (data, encoding) {
var input=data.getData$();
var srcType=encoding.getSrcType$();
var f=1.0 / encoding.getFactor$();
var outputArray;
outputArray=Clazz.array(Double.TYPE, [input.length]);
for (var i=input.length; --i >= 0; ) outputArray[i]=f * input[i];

return srcType == 32 ? $I$(3).float32Array$DA$java_util_LinkedList(outputArray, data.getEncoding$()) : $I$(3).float64Array$DA$java_util_LinkedList(outputArray, data.getEncoding$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
