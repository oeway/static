(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.EncodingStrategyHint','org.rcsb.cif.binary.encoding.ByteArrayEncoding','org.rcsb.cif.binary.encoding.IntegerPackingEncoding','org.rcsb.cif.binary.encoding.RunLengthEncoding','org.rcsb.cif.binary.encoding.DeltaEncoding',['org.rcsb.cif.binary.codec.Classifier','.ByteSize'],['org.rcsb.cif.binary.codec.Classifier','.SizeInfo'],['org.rcsb.cif.binary.codec.Classifier','.EncodingSize'],['org.rcsb.cif.binary.codec.Classifier','.IntColumnInfo'],'java.util.ArrayList','java.util.Comparator','java.util.stream.DoubleStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Classifier", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'classify$org_rcsb_cif_binary_data_Int32Array', function (data) {
var hint=Clazz.new_($I$(1,1));
if (data.getData$().length < 2) {
hint.setEncoding$S("byte");
return hint;
}var size=C$.getSize$org_rcsb_cif_binary_data_IntArray(data);
hint.setEncoding$S(size.kind);
return hint;
}, 1);

Clazz.newMeth(C$, 'packSize$I$I', function (value, upperLimit) {
return (Math.ceil((value + 1) / (value >= 0 ? upperLimit : -upperLimit - 1))|0);
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_Int32Array$S', function (column, encoding) {
switch (encoding) {
case "byte":
return column.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(2,1).c$$I,[column.getType$()]));
case "pack":
return column.encode$org_rcsb_cif_binary_encoding_IntegerPackingEncoding(Clazz.new_($I$(3,1))).encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(2,1)));
case "rle":
return column.encode$org_rcsb_cif_binary_encoding_RunLengthEncoding(Clazz.new_($I$(4,1))).encode$org_rcsb_cif_binary_encoding_IntegerPackingEncoding(Clazz.new_($I$(3,1))).encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(2,1)));
case "delta":
return column.encode$org_rcsb_cif_binary_encoding_DeltaEncoding(Clazz.new_($I$(5,1))).encode$org_rcsb_cif_binary_encoding_IntegerPackingEncoding(Clazz.new_($I$(3,1))).encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(2,1)));
case "delta-rle":
return column.encode$org_rcsb_cif_binary_encoding_DeltaEncoding(Clazz.new_($I$(5,1))).encode$org_rcsb_cif_binary_encoding_RunLengthEncoding(Clazz.new_($I$(4,1))).encode$org_rcsb_cif_binary_encoding_IntegerPackingEncoding(Clazz.new_($I$(3,1))).encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(2,1)));
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Determined encoding type is unknown. " + encoding]);
}
}, 1);

Clazz.newMeth(C$, 'incSize$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I', function (intColumnInfo, sizeInfo, value) {
sizeInfo.pack8+=C$.packSize$I$I(value, intColumnInfo.limit8);
sizeInfo.pack16+=C$.packSize$I$I(value, intColumnInfo.limit16);
sizeInfo.count+=1;
}, 1);

Clazz.newMeth(C$, 'incSizeSigned$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I', function (sizeInfo, value) {
sizeInfo.pack8+=C$.packSize$I$I(value, 127);
sizeInfo.pack16+=C$.packSize$I$I(value, 32767);
sizeInfo.count+=1;
}, 1);

Clazz.newMeth(C$, 'byteSize$org_rcsb_cif_binary_codec_Classifier_SizeInfo', function (sizeInfo) {
if (sizeInfo.count * 4 < sizeInfo.pack16 * 2) {
return Clazz.new_($I$(6,1).c$$I$I,[sizeInfo.count * 4, 4]);
} else if (sizeInfo.pack16 * 2 < sizeInfo.pack8) {
return Clazz.new_($I$(6,1).c$$I$I,[sizeInfo.pack16 * 2, 2]);
} else {
return Clazz.new_($I$(6,1).c$$I$I,[sizeInfo.pack8, 1]);
}}, 1);

Clazz.newMeth(C$, 'packingSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo', function (data, info) {
var size=Clazz.new_($I$(7,1));
for (var datum, $datum = 0, $$datum = data; $datum<$$datum.length&&((datum=($$datum[$datum])),1);$datum++) {
C$.incSize$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(info, size, datum);
}
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_binary_codec_Classifier_ByteSize$S,[C$.byteSize$org_rcsb_cif_binary_codec_Classifier_SizeInfo(size), "pack"]);
}, 1);

Clazz.newMeth(C$, 'deltaSize$IA', function (data) {
var size=Clazz.new_($I$(7,1));
var prev=data[0];
for (var i=1; i < data.length; i++) {
C$.incSizeSigned$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(size, data[i] - prev);
prev=data[i];
}
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_binary_codec_Classifier_ByteSize$S,[C$.byteSize$org_rcsb_cif_binary_codec_Classifier_SizeInfo(size), "delta"]);
}, 1);

Clazz.newMeth(C$, 'rleSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo', function (data, info) {
var size=Clazz.new_($I$(7,1));
var run=1;
for (var i=1; i < data.length; i++) {
if (data[i - 1] != data[i]) {
C$.incSize$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(info, size, data[i - 1]);
C$.incSize$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(info, size, run);
run=1;
} else {
run++;
}}
C$.incSize$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(info, size, data[data.length - 1]);
C$.incSize$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(info, size, run);
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_binary_codec_Classifier_ByteSize$S,[C$.byteSize$org_rcsb_cif_binary_codec_Classifier_SizeInfo(size), "rle"]);
}, 1);

Clazz.newMeth(C$, 'deltaRleSize$IA', function (data) {
var size=Clazz.new_($I$(7,1));
var run=1;
var prev=0;
var prevValue=0;
for (var i=1; i < data.length; i++) {
var v=data[i] - prev;
if (prevValue != v) {
C$.incSizeSigned$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(size, prevValue);
C$.incSizeSigned$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(size, run);
run=1;
} else {
run++;
}prevValue=v;
prev=data[i];
}
C$.incSizeSigned$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(size, prevValue);
C$.incSizeSigned$org_rcsb_cif_binary_codec_Classifier_SizeInfo$I(size, run);
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_binary_codec_Classifier_ByteSize$S,[C$.byteSize$org_rcsb_cif_binary_codec_Classifier_SizeInfo(size), "delta-rle"]);
}, 1);

Clazz.newMeth(C$, 'getInfo$org_rcsb_cif_binary_data_IntArray', function (data) {
var signed=data.isSigned$();
return signed ? $I$(9).SIGNED_INFO : $I$(9).UNSIGNED_INFO;
}, 1);

Clazz.newMeth(C$, 'getSize$org_rcsb_cif_binary_data_IntArray', function (data) {
return C$.getSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo(data.getData$(), C$.getInfo$org_rcsb_cif_binary_data_IntArray(data));
}, 1);

Clazz.newMeth(C$, 'getSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo', function (array, info) {
var sizes=Clazz.new_($I$(10,1));
sizes.add$TE(C$.packingSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo(array, info));
sizes.add$TE(C$.rleSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo(array, info));
sizes.add$TE(C$.deltaSize$IA(array));
sizes.add$TE(C$.deltaRleSize$IA(array));
sizes.sort$java_util_Comparator($I$(11).comparingInt$java_util_function_ToIntFunction(/*addLambdaReuse org.rcsb.cif.binary.codec.Classifier$lambda1*/(P$.Classifier$lambda1$||(P$.Classifier$lambda1$=(((P$.Classifier$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Classifier$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (encodingSize) { return (encodingSize.length);});
})()
), Clazz.new_(P$.Classifier$lambda1.$init$, [this, null])))))));
return sizes.get$I(0);
}, 1);

Clazz.newMeth(C$, 'classify$org_rcsb_cif_binary_data_Float64Array', function (data) {
var hint=C$.classifyPrecision$org_rcsb_cif_binary_data_Float64Array(data);
if ("byte".equals$O(hint.getEncoding$())) {
return hint;
}var multiplier=C$.getMultiplier$I((hint.getPrecision$()).intValue$());
var intArray=$I$(12).of$DA(data.getData$()).mapToInt$java_util_function_DoubleToIntFunction(((P$.Classifier$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Classifier$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleToIntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (d) { return ((Math.round(this.$finals$.multiplier * d)|0));});
})()
), Clazz.new_(P$.Classifier$lambda2.$init$, [this, {multiplier:multiplier}]))).toArray$();
var size=C$.getSize$IA$org_rcsb_cif_binary_codec_Classifier_IntColumnInfo(intArray, $I$(9).SIGNED_INFO);
hint.setEncoding$S(size.kind);
return hint;
}, 1);

Clazz.newMeth(C$, 'classifyPrecision$org_rcsb_cif_binary_data_Float64Array', function (data) {
var hint=Clazz.new_($I$(1,1));
var maxDigits=4;
var arrayDigitCount=C$.getArrayDigitCount$DA$I(data.getData$(), maxDigits);
var mantissaDigits=arrayDigitCount[0];
var integerDigits=arrayDigitCount[1];
if (mantissaDigits < 0 || mantissaDigits + integerDigits > 10 ) {
hint.setEncoding$S("byte");
return hint;
}if (mantissaDigits == 0) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["cannot handle yet, impl me"]);
}hint.setPrecision$Integer(new Integer(mantissaDigits));
return hint;
}, 1);

Clazz.newMeth(C$, 'getMultiplier$I', function (mantissaDigits) {
var m=1;
for (var i=0; i < mantissaDigits; i++) {
m*=10;
}
return m;
}, 1);

Clazz.newMeth(C$, 'getArrayDigitCount$DA$I', function (xs, maxDigits) {
var mantissaDigits=1;
var integerDigits=0;
for (var x, $x = 0, $$x = xs; $x<$$x.length&&((x=($$x[$x])),1);$x++) {
if (mantissaDigits >= 0) {
var t=C$.getMantissaMultiplier$D$I(x, maxDigits);
if (t < 0) {
mantissaDigits=-1;
} else if (t > mantissaDigits) {
mantissaDigits=t;
}}var abs=Math.abs(x);
if (abs > 1.0E-6 ) {
var d=((Math.floor(Math.log10(Math.abs(abs))) + 1)|0);
if (d > integerDigits) {
integerDigits=d;
}}}
return Clazz.array(Integer.TYPE, -1, [mantissaDigits, integerDigits]);
}, 1);

Clazz.newMeth(C$, 'getMantissaMultiplier$D$I', function (v, maxDigits) {
var m=1;
var i;
for (i=0; i < maxDigits; i++) {
var mv=m * v;
if (Math.abs(Math.round(mv) - mv) <= 1.0E-6 ) {
return i;
}m*=10;
}
return -1;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Classifier, "SizeInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pack8=0;
this.pack16=0;
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Classifier, "ByteSize", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.length=0;
this.elem=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (length, elem) {
;C$.$init$.apply(this);
this.length=length;
this.elem=elem;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Classifier, "EncodingSize", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.rcsb.cif.binary.codec.Classifier','.ByteSize']);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.kind=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_rcsb_cif_binary_codec_Classifier_ByteSize$S', function (byteSize, kind) {
;C$.superclazz.c$$I$I.apply(this, [byteSize.length, byteSize.elem]);C$.$init$.apply(this);
this.kind=kind;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "{kind=\'" + this.kind + "\', " + "length=" + this.length + '}' ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Classifier, "IntColumnInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.SIGNED_INFO=null;
C$.UNSIGNED_INFO=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.SIGNED_INFO=Clazz.new_(C$.c$$Z$I$I,[true, 127, 32767]);
C$.UNSIGNED_INFO=Clazz.new_(C$.c$$Z$I$I,[false, 255, 65535]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.signed=false;
this.limit8=0;
this.limit16=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I', function (signed, limit8, limit16) {
;C$.$init$.apply(this);
this.signed=signed;
this.limit8=limit8;
this.limit16=limit16;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:26 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
