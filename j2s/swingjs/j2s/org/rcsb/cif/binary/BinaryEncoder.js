(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary"),p$1={},I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.StringArrayEncoding','org.rcsb.cif.binary.codec.Classifier','org.rcsb.cif.binary.encoding.ByteArrayEncoding','org.rcsb.cif.binary.encoding.FixedPointEncoding','org.rcsb.cif.EncodingStrategyHint','org.rcsb.cif.model.ValueKind','org.rcsb.cif.Platform','org.rcsb.cif.binary.encoding.RunLengthEncoding','java.util.stream.Stream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BinaryEncoder");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.options=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_rcsb_cif_CifOptions', function (options) {
;C$.$init$.apply(this);
this.options=options;
}, 1);

Clazz.newMeth(C$, 'encodeColumn$S$org_rcsb_cif_model_Column', function (categoryName, cifColumn) {
if (Clazz.instanceOf(cifColumn, "org.rcsb.cif.model.FloatColumn")) {
var floatCol=cifColumn;
var array=floatCol.getBinaryData$() != null  ? floatCol.getBinaryData$() : floatCol.values$().toArray$();
var byteArray=p$1.encode$S$S$org_rcsb_cif_binary_data_Float64Array.apply(this, [categoryName, cifColumn.getColumnName$(), $I$(1).float64Array$DA(array)]);
return p$1.encodeColumn$org_rcsb_cif_model_Column$org_rcsb_cif_binary_data_ByteArray.apply(this, [cifColumn, byteArray]);
} else if (Clazz.instanceOf(cifColumn, "org.rcsb.cif.model.IntColumn")) {
var intCol=cifColumn;
var array=intCol.getBinaryData$() != null  ? intCol.getBinaryData$() : intCol.values$().toArray$();
var byteArray=p$1.encode$S$S$org_rcsb_cif_binary_data_Int32Array.apply(this, [categoryName, cifColumn.getColumnName$(), $I$(1).int32Array$IA(array)]);
return p$1.encodeColumn$org_rcsb_cif_model_Column$org_rcsb_cif_binary_data_ByteArray.apply(this, [cifColumn, byteArray]);
} else {
var strCol=cifColumn;
var array=strCol.getBinaryData$() != null  ? strCol.getBinaryData$() : strCol.values$().toArray$java_util_function_IntFunction(((P$.BinaryEncoder$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(String, [t.intValue()])});
})()
), Clazz.new_(P$.BinaryEncoder$lambda1.$init$, [this, null])));
var byteArray=$I$(1).stringArray$SA(array).encode$org_rcsb_cif_binary_encoding_StringArrayEncoding(Clazz.new_($I$(2,1)));
return p$1.encodeColumn$org_rcsb_cif_model_Column$org_rcsb_cif_binary_data_ByteArray.apply(this, [cifColumn, byteArray]);
}});

Clazz.newMeth(C$, 'encode$S$S$org_rcsb_cif_binary_data_Float64Array', function (categoryName, columnName, column) {
var optional=this.options.getEncodingStrategyHint$S$S(categoryName, columnName);
var hint=optional.orElseGet$java_util_function_Supplier((function($$){((P$.BinaryEncoder$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'get$', function () { return /*addmeth isclasstarget false classIsTarget=true ivarbinding=true exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.binary.data.Float64Array*/$$.classify$.apply($$,[])});
})()
)); return Clazz.new_(P$.BinaryEncoder$lambda2.$init$, [this, null])})(column));
var encoding=hint.getEncoding$() != null  ? hint.getEncoding$() : $I$(3).classify$org_rcsb_cif_binary_data_Float64Array(column).getEncoding$();
var precisionClassification=$I$(3).classifyPrecision$org_rcsb_cif_binary_data_Float64Array(column);
if ("byte".equals$O(precisionClassification.getEncoding$())) {
return column.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(4,1).c$$I,[column.getType$()]));
}var multiplier=C$.getMultiplier$I((hint.getPrecision$() != null  ? hint.getPrecision$() : precisionClassification.getPrecision$()).intValue$());
var fixedPoint=column.encode$org_rcsb_cif_binary_encoding_FixedPointEncoding(Clazz.new_($I$(5,1).c$$I,[multiplier]));
return $I$(3).encode$org_rcsb_cif_binary_data_Int32Array$S(fixedPoint, encoding);
}, p$1);

Clazz.newMeth(C$, 'getMultiplier$I', function (mantissaDigits) {
var m=1;
for (var i=0; i < mantissaDigits; i++) {
m*=10;
}
return m;
}, 1);

Clazz.newMeth(C$, 'encode$S$S$org_rcsb_cif_binary_data_Int32Array', function (categoryName, columnName, column) {
var optional=this.options.getEncodingStrategyHint$S$S(categoryName, columnName).map$java_util_function_Function((function($$){((P$.BinaryEncoder$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.EncodingStrategyHint*/t.getEncoding$.apply(t,[])});
})()
)); return Clazz.new_(P$.BinaryEncoder$lambda3.$init$, [this, null])})($I$(6)));
var encoding=optional.orElseGet$java_util_function_Supplier(((P$.BinaryEncoder$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return ($I$(3).classify$org_rcsb_cif_binary_data_Int32Array(this.$finals$.column).getEncoding$());});
})()
), Clazz.new_(P$.BinaryEncoder$lambda4.$init$, [this, {column:column}])));
return $I$(3).encode$org_rcsb_cif_binary_data_Int32Array$S(column, encoding);
}, p$1);

Clazz.newMeth(C$, 'encodeColumn$org_rcsb_cif_model_Column$org_rcsb_cif_binary_data_ByteArray', function (cifField, byteArray) {
var name=cifField.getColumnName$();
var maskArray=Clazz.array(Integer.TYPE, [cifField.getRowCount$()]);
var mask=$I$(1).uint8Array$IA(maskArray);
var allPresent=true;
for (var row=0; row < maskArray.length; row++) {
var kind=cifField.getValueKind$I(row);
if (kind !== $I$(7).PRESENT ) {
maskArray[row]=(kind.ordinal$()|0);
allPresent=false;
} else {
maskArray[row]=($I$(7).PRESENT.ordinal$()|0);
}}
var encodedMap=$I$(8).getMap$();
encodedMap.put$TK$TV("encoding", byteArray.getEncoding$().stream$().map$java_util_function_Function((function($$){((P$.BinaryEncoder$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return p$1./*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.binary.BinaryEncoder*/$$.wrap$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.BinaryEncoder$lambda5.$init$, [this, null])})(this)).toArray$java_util_function_IntFunction(((P$.BinaryEncoder$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(java.lang.Object, [t.intValue()])});
})()
), Clazz.new_(P$.BinaryEncoder$lambda6.$init$, [this, null]))));
encodedMap.put$TK$TV("data", byteArray.getData$());
var maskData=$I$(8).getMap$();
if (!allPresent) {
var maskRLE=mask.encode$org_rcsb_cif_binary_encoding_RunLengthEncoding(Clazz.new_($I$(9,1))).encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(4,1)));
if (maskRLE.getData$().length < mask.getData$().length) {
var rle=maskRLE.getEncoding$().get$I(0);
var encoding1=$I$(8).getMap$();
encoding1.put$TK$TV("kind", "RunLength");
encoding1.put$TK$TV("srcType", new Integer(rle.getSrcType$()));
encoding1.put$TK$TV("srcSize", new Integer(rle.getSrcSize$()));
var encoding2=$I$(8).getMap$();
encoding2.put$TK$TV("kind", "ByteArray");
encoding2.put$TK$TV("type", new Integer(3));
maskData.put$TK$TV("encoding", Clazz.array(java.lang.Object, -1, [encoding1, encoding2]));
maskData.put$TK$TV("data", maskRLE.getData$());
} else {
var encodedMask=mask.encode$org_rcsb_cif_binary_encoding_ByteArrayEncoding(Clazz.new_($I$(4,1).c$$I,[4]));
var encoding=$I$(8).getMap$();
encoding.put$TK$TV("kind", "ByteArray");
encoding.put$TK$TV("type", new Integer(4));
maskData.put$TK$TV("encoding", Clazz.array(java.lang.Object, -1, [encoding]));
maskData.put$TK$TV("data", encodedMask.getData$());
}}var map=$I$(8).getMap$();
map.put$TK$TV("name", name);
map.put$TK$TV("data", encodedMap);
map.put$TK$TV("mask", maskData);
return map;
}, p$1);

Clazz.newMeth(C$, 'wrap$O', function (object) {
try {
var out=$I$(8).getMap$();
for (var field, $field = 0, $$field = object.getClass$().getDeclaredFields$(); $field<$$field.length&&((field=($$field[$field])),1);$field++) {
field.setAccessible$Z(true);
var content=field.get$O(object);
if (Clazz.instanceOf(content, "java.util.Map")) {
content=p$1.wrap$O.apply(this, [content]);
} else if (Clazz.instanceOf(content, "java.util.List")) {
content=(content).stream$().map$java_util_function_Function((function($$){((P$.BinaryEncoder$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return p$1./*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.binary.BinaryEncoder*/$$.wrap$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.BinaryEncoder$lambda7.$init$, [this, null])})(this)).toArray$java_util_function_IntFunction(((P$.BinaryEncoder$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(java.lang.Object, [t.intValue()])});
})()
), Clazz.new_(P$.BinaryEncoder$lambda8.$init$, [this, null])));
} else if (p$1.isObjectArray$O.apply(this, [content])) {
content=$I$(10).of$TTA(content).map$java_util_function_Function((function($$){((P$.BinaryEncoder$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return p$1./*addmeth isclasstarget false classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.ThisExpression org.rcsb.cif.binary.BinaryEncoder*/$$.wrap$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.BinaryEncoder$lambda9.$init$, [this, null])})(this)).toArray$java_util_function_IntFunction(((P$.BinaryEncoder$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryEncoder$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(java.lang.Object, [t.intValue()])});
})()
), Clazz.new_(P$.BinaryEncoder$lambda10.$init$, [this, null])));
}out.put$TK$TV(field.getName$(), content);
}
return out;
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S$Throwable,["Could not convert Encoding to Map representation", e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'isObjectArray$O', function (content) {
if (content == null ) {
return false;
} else if (!content.getClass$().isArray$()) {
return false;
} else {
return !(Clazz.instanceOf(content, Clazz.array(Integer.TYPE, -1)) || Clazz.instanceOf(content, Clazz.array(Double.TYPE, -1)) || Clazz.instanceOf(content, Clazz.array(Byte.TYPE, -1)) || Clazz.instanceOf(content, Clazz.array(Character.TYPE, -1))  );
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:26 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
