(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'java.util.LinkedList','org.rcsb.cif.binary.data.EncodedDataFactory','java.util.stream.IntStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntervalQuantizationCodec");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_FloatArray$org_rcsb_cif_binary_encoding_IntervalQuantizationEncoding', function (data, encoding) {
var input=data.getData$();
var min=encoding.getMin$();
var max=encoding.getMax$();
var numSteps=encoding.getNumSteps$();
var srcType=data.getType$();
if (input.length == 0) {
var enc=Clazz.new_($I$(1,1).c$$java_util_Collection,[data.getEncoding$()]);
enc.add$TE(encoding);
encoding.setSrcType$I(3);
return $I$(2).int32Array$IA$java_util_LinkedList(Clazz.array(Integer.TYPE, [0]), enc);
}if (max < min) {
var t=min;
min=max;
max=t;
}var delta=(max - min) / (numSteps - 1.0);
var output=Clazz.array(Integer.TYPE, [input.length]);
for (var i=0; i < input.length; i++) {
var v=input[i];
if (v <= min ) {
output[i]=0;
} else if (v >= max ) {
output[i]=numSteps - 1;
} else {
output[i]=delta == 0  ? 0 : (Math.round((v - min) / delta)|0);
}}
var enc=Clazz.new_($I$(1,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setSrcType$I(srcType);
enc.add$TE(encoding);
return $I$(2).int32Array$IA$java_util_LinkedList(output, enc);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_IntervalQuantizationEncoding', function (data, encoding) {
var min=encoding.getMin$();
var max=encoding.getMax$();
var numSteps=encoding.getNumSteps$();
var srcType=encoding.getSrcType$();
var delta=(max - min) / (numSteps - 1.0);
var output=$I$(3).of$IA(data.getData$()).mapToDouble$java_util_function_IntToDoubleFunction(((P$.IntervalQuantizationCodec$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntervalQuantizationCodec$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntToDoubleFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (i) { return (this.$finals$.min + this.$finals$.delta * i);});
})()
), Clazz.new_(P$.IntervalQuantizationCodec$lambda1.$init$, [this, {delta:delta,min:min}]))).toArray$();
return srcType == 32 ? $I$(2).float32Array$DA$java_util_LinkedList(output, data.getEncoding$()) : $I$(2).float64Array$DA$java_util_LinkedList(output, data.getEncoding$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
