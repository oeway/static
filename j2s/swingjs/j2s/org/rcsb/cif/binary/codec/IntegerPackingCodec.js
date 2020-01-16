(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),p$1={},I$=[[0,'java.util.LinkedList','org.rcsb.cif.binary.data.EncodedDataFactory','java.util.stream.IntStream',['org.rcsb.cif.binary.codec.IntegerPackingCodec','.Packing']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntegerPackingCodec", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_IntegerPackingEncoding', function (data, encoding) {
var input=data.getData$();
var packing=p$1.determinePacking$IA.apply(this, [input]);
if (packing.bytesPerElement == 4) {
var enc=Clazz.new_($I$(1,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setByteCount$I(4);
encoding.setUnsigned$Z(false);
encoding.setSrcSize$I(input.length);
enc.add$TE(encoding);
return $I$(2).int32Array$IA$java_util_LinkedList(input, enc);
}var upperLimit=packing.signed ? packing.bytesPerElement == 1 ? 127 : 32767 : packing.bytesPerElement == 1 ? 255 : 65535;
var lowerLimit=-upperLimit - 1;
var outputArray=Clazz.array(Integer.TYPE, [packing.size]);
var j=0;
for (var i1, $i1 = 0, $$i1 = input; $i1<$$i1.length&&((i1=($$i1[$i1])),1);$i1++) {
var value=i1;
if (value >= 0) {
while (value >= upperLimit){
outputArray[j]=upperLimit;
++j;
value-=upperLimit;
}
} else {
while (value <= lowerLimit){
outputArray[j]=lowerLimit;
++j;
value-=lowerLimit;
}
}outputArray[j]=value;
++j;
}
var output;
if (packing.signed) {
if (packing.bytesPerElement == 1) {
output=$I$(2).int8Array$IA(outputArray);
} else {
output=$I$(2).int16Array$IA(outputArray);
}} else {
if (packing.bytesPerElement == 1) {
output=$I$(2).uint8Array$IA(outputArray);
} else {
output=$I$(2).uint16Array$IA(outputArray);
}}var enc=Clazz.new_($I$(1,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setByteCount$I(packing.bytesPerElement);
encoding.setUnsigned$Z(!packing.signed);
encoding.setSrcSize$I(data.length$());
enc.add$TE(encoding);
output.setEncoding$java_util_LinkedList(enc);
return output;
});

Clazz.newMeth(C$, 'determinePacking$IA', function (input) {
var signed=$I$(3).of$IA(input).anyMatch$java_util_function_IntPredicate(/*addLambdaReuse org.rcsb.cif.binary.codec.IntegerPackingCodec$lambda1*/(P$.IntegerPackingCodec$lambda1$||(P$.IntegerPackingCodec$lambda1$=(((P$.IntegerPackingCodec$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntegerPackingCodec$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (i) { return (i < 0);});
})()
), Clazz.new_(P$.IntegerPackingCodec$lambda1.$init$, [this, null]))))));
var size8=p$1.packingSize$IA$I.apply(this, [input, signed ? 127 : 255]);
var size16=p$1.packingSize$IA$I.apply(this, [input, signed ? 32767 : 65535]);
if (input.length * 4 < size16 * 2) {
return Clazz.new_($I$(4,1).c$$Z$I$I, [this, null, signed, input.length, 4]);
} else if (size16 * 2 < size8) {
return Clazz.new_($I$(4,1).c$$Z$I$I, [this, null, signed, size16, 2]);
} else {
return Clazz.new_($I$(4,1).c$$Z$I$I, [this, null, signed, size8, 1]);
}}, p$1);

Clazz.newMeth(C$, 'packingSize$IA$I', function (input, upperLimit) {
var lowerLimit=-upperLimit - 1;
var size=0;
for (var value, $value = 0, $$value = input; $value<$$value.length&&((value=($$value[$value])),1);$value++) {
if (value == 0) {
size+=1;
} else if (value > 0) {
size=(size+(Math.ceil(value / upperLimit))|0);
if (value % upperLimit == 0) {
size+=1;
}} else {
size=(size+(Math.ceil(value / lowerLimit))|0);
if (value % lowerLimit == 0) {
size+=1;
}}}
return size;
}, p$1);

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_IntArray$org_rcsb_cif_binary_encoding_IntegerPackingEncoding', function (data, encoding) {
var input=data.getData$();
var byteCount=encoding.getByteCount$();
var unsigned=encoding.isUnsigned$();
var srcSize=encoding.getSrcSize$();
if (input.length == srcSize && byteCount == 4 ) {
var output=$I$(2).int32Array$IA$java_util_LinkedList(input, data.getEncoding$());
output.setEncoding$java_util_LinkedList(data.getEncoding$());
return output;
}var upperLimit;
var lowerLimit=0;
if (unsigned) {
upperLimit=byteCount == 1 ? 255 : 65535;
} else {
upperLimit=byteCount == 1 ? 127 : 32767;
lowerLimit=-upperLimit - 1;
}var n=input.length;
var output=Clazz.array(Integer.TYPE, [srcSize]);
var i=0;
var j=0;
while (i < n){
var value=0;
var t=input[i];
while (unsigned ? t == upperLimit : t == upperLimit || t == lowerLimit ){
value+=t;
i++;
t=input[i];
}
value+=t;
output[j]=value;
i++;
j++;
}
return $I$(2).int32Array$IA$java_util_LinkedList(output, data.getEncoding$());
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.IntegerPackingCodec, "Packing", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.signed=false;
this.size=0;
this.bytesPerElement=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I', function (signed, size, bytesPerElement) {
;C$.$init$.apply(this);
this.signed=signed;
this.size=size;
this.bytesPerElement=bytesPerElement;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
