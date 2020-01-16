(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),p$1={},I$=[[0,'java.util.stream.IntStream','java.util.stream.Collectors','StringBuilder','org.rcsb.cif.model.ModelFactory','java.util.ArrayList','org.rcsb.cif.model.Column','org.rcsb.cif.model.ValueKind']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TextCifWriter");
C$.PADDING_SPACES=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.PADDING_SPACES=$I$(1).range$I$I(0, 80).mapToObj$java_util_function_IntFunction(/*addLambdaReuse org.rcsb.cif.generic.TextCifWriter$lambda1*/(P$.TextCifWriter$lambda1$||(P$.TextCifWriter$lambda1$=((function($$){((P$.TextCifWriter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TextCifWriter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget true classIsTarget=true ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.generic.TextCifWriter*/$$.whitespaceString$I.apply(null,[t])});
})()
)); return Clazz.new_(P$.TextCifWriter$lambda1.$init$, [this, null])})(C$))))).collect$java_util_stream_Collector($I$(2).toList$());
}

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

Clazz.newMeth(C$, 'write$org_rcsb_cif_generic_CifFile', function (cifFile) {
var output=Clazz.new_($I$(3,1));
for (var block, $block = cifFile.getBlocks$().iterator$(); $block.hasNext$()&&((block=($block.next$())),1);) {
var blockHeader=block.getBlockHeader$();
var header=blockHeader != null  ? blockHeader.replaceAll$S$S("[ \n\t]", "").toUpperCase$() : "UNKNOWN";
output.append$S("data_").append$S(header).append$S("\n#\n");
for (var categoryName, $categoryName = block.getCategoryNames$().iterator$(); $categoryName.hasNext$()&&((categoryName=($categoryName.next$())),1);) {
if (!this.options.filterCategory$S(categoryName)) {
continue;
}var cifCategory=block.getCategory$S(categoryName);
var rowCount=cifCategory.getRowCount$();
if (rowCount == 0) {
continue;
}$I$(4).ensureModelPropertiesLoaded$S(categoryName);
var columns=Clazz.new_($I$(5,1));
for (var name, $name = cifCategory.getColumnNamesEncoded$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
if (this.options.filterColumn$S$S(categoryName, name)) {
columns.add$TE(cifCategory.getColumn$S(name));
}}
if (columns.isEmpty$()) {
continue;
}if (rowCount == 1) {
p$1.writeCifSingleRecord$StringBuilder$org_rcsb_cif_model_Category$java_util_List.apply(this, [output, cifCategory, columns]);
} else {
p$1.writeCifLoop$StringBuilder$org_rcsb_cif_model_Category$java_util_List.apply(this, [output, cifCategory, columns]);
}}
}
output.append$S("\n");
try {
return output.toString().getBytes$S("UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeCifSingleRecord$StringBuilder$org_rcsb_cif_model_Category$java_util_List', function (output, cifCategory, columns) {
var width=columns.stream$().map$java_util_function_Function((function($$){((P$.TextCifWriter$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "TextCifWriter$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName org.rcsb.cif.model.Column*/t.getColumnName$.apply(t,[])});
})()
)); return Clazz.new_(P$.TextCifWriter$lambda2.$init$, [this, null])})($I$(6))).mapToInt$java_util_function_ToIntFunction((function($$){((P$.TextCifWriter$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "TextCifWriter$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$', function (t) { return /*addmeth isclasstarget false classIsTarget=false ivarbinding=false exp=org.eclipse.jdt.core.dom.SimpleName java.lang.String*/t.length$.apply(t,[])});
})()
)); return Clazz.new_(P$.TextCifWriter$lambda3.$init$, [this, null])})(String)).max$().orElseThrow$java_util_function_Supplier(/*addLambdaReuse org.rcsb.cif.generic.TextCifWriter$lambda4*/(P$.TextCifWriter$lambda4$||(P$.TextCifWriter$lambda4$=(((P$.TextCifWriter$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "TextCifWriter$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["not able to determine column width"]));});
})()
), Clazz.new_(P$.TextCifWriter$lambda4.$init$, [this, null])))))) + 6 + cifCategory.getCategoryName$().length$() ;
for (var cifField, $cifField = columns.iterator$(); $cifField.hasNext$()&&((cifField=($cifField.next$())),1);) {
p$1.writePadRight$StringBuilder$S$I.apply(this, [output, "_" + cifCategory.getCategoryName$() + "." + cifField.getColumnName$() , width]);
for (var row=0; row < cifField.getRowCount$(); row++) {
var multiline=p$1.writeValue$StringBuilder$org_rcsb_cif_model_Column$I.apply(this, [output, cifField, row]);
if (!multiline) {
output.append$S("\n");
}}
}
output.append$S("#\n");
}, p$1);

Clazz.newMeth(C$, 'writeCifLoop$StringBuilder$org_rcsb_cif_model_Category$java_util_List', function (output, cifCategory, columns) {
output.append$S("loop_").append$S("\n");
for (var cifField, $cifField = columns.iterator$(); $cifField.hasNext$()&&((cifField=($cifField.next$())),1);) {
var c=cifCategory.getColumn$S(cifField.getColumnName$());
output.append$S("_").append$S(cifCategory.getCategoryName$()).append$S(".").append$S(c.getColumnName$()).append$S("\n");
}
for (var row=0, n=cifCategory.getRowCount$(); row < n; row++) {
var multiline=false;
for (var cifField, $cifField = columns.iterator$(); $cifField.hasNext$()&&((cifField=($cifField.next$())),1);) {
multiline=p$1.writeValue$StringBuilder$org_rcsb_cif_model_Column$I.apply(this, [output, cifField, row]);
}
if (!multiline) {
output.append$S("\n");
}}
output.append$S("#\n");
}, p$1);

Clazz.newMeth(C$, 'writeValue$StringBuilder$org_rcsb_cif_model_Column$I', function (output, cifField, row) {
var kind=cifField.getValueKind$I(row);
if (kind !== $I$(7).PRESENT ) {
if (kind === $I$(7).NOT_PRESENT ) {
p$1.writeNotPresent$StringBuilder.apply(this, [output]);
} else {
p$1.writeUnknown$StringBuilder.apply(this, [output]);
}} else {
if (Clazz.instanceOf(cifField, "org.rcsb.cif.model.IntColumn")) {
p$1.writeInteger$StringBuilder$I.apply(this, [output, (cifField).get$I(row)]);
} else if (Clazz.instanceOf(cifField, "org.rcsb.cif.model.FloatColumn")) {
p$1.writeFloat$StringBuilder$S.apply(this, [output, cifField.getStringData$I(row)]);
} else {
var val=cifField.getStringData$I(row);
if (p$1.isMultiline$S.apply(this, [val])) {
p$1.writeMultiline$StringBuilder$S.apply(this, [output, val]);
return true;
} else {
return p$1.writeChecked$StringBuilder$S.apply(this, [output, val]);
}}}return false;
}, p$1);

Clazz.newMeth(C$, 'writeChecked$StringBuilder$S', function (output, val) {
if (val == null  || val.isEmpty$() ) {
output.append$S(". ");
return false;
}var escape=val.charAt$I(0) == "_";
var escapeCharStart="\'";
var escapeCharEnd="\' ";
var hasWhitespace=false;
var hasSingle=false;
var hasDouble=false;
for (var i=0; i < val.length$(); i++) {
var c=val.charAt$I(i);
switch (c.$c()) {
case 9:
case 32:
hasWhitespace=true;
break;
case 10:
p$1.writeMultiline$StringBuilder$S.apply(this, [output, val]);
return true;
case 34:
if (hasSingle) {
p$1.writeMultiline$StringBuilder$S.apply(this, [output, val]);
return true;
}hasDouble=true;
escape=true;
escapeCharStart="\'";
escapeCharEnd="\' ";
break;
case 39:
if (hasDouble) {
p$1.writeMultiline$StringBuilder$S.apply(this, [output, val]);
return true;
}escape=true;
hasSingle=true;
escapeCharStart="\"";
escapeCharEnd="\" ";
break;
}
}
var fst=val.charAt$I(0);
if (!escape && (fst == "#" || fst == "$"  || fst == ";"  || fst == "["  || fst == "]"  || hasWhitespace ) ) {
escapeCharStart="\'";
escapeCharEnd="\' ";
escape=true;
}if (escape) {
output.append$S(escapeCharStart).append$S(val).append$S(escapeCharEnd);
} else {
output.append$S(val).append$S(" ");
}return false;
}, p$1);

Clazz.newMeth(C$, 'writeMultiline$StringBuilder$S', function (output, val) {
output.append$S("\n;").append$S(val).append$S("\n;\n");
}, p$1);

Clazz.newMeth(C$, 'isMultiline$S', function (val) {
return val.contains$CharSequence("\n");
}, p$1);

Clazz.newMeth(C$, 'writeInteger$StringBuilder$I', function (output, val) {
output.append$I(val);
output.append$S(" ");
}, p$1);

Clazz.newMeth(C$, 'writeFloat$StringBuilder$S', function (output, val) {
output.append$S(val).append$S(" ");
}, p$1);

Clazz.newMeth(C$, 'writeNotPresent$StringBuilder', function (output) {
output.append$S(". ");
}, p$1);

Clazz.newMeth(C$, 'writeUnknown$StringBuilder', function (output) {
output.append$S("? ");
}, p$1);

Clazz.newMeth(C$, 'writePadRight$StringBuilder$S$I', function (output, val, width) {
if (val == null  || val.isEmpty$() ) {
p$1.whitespace$StringBuilder$I.apply(this, [output, width]);
return;
}var padding=width - val.length$();
output.append$S(val);
p$1.whitespace$StringBuilder$I.apply(this, [output, padding]);
}, p$1);

Clazz.newMeth(C$, 'whitespaceString$I', function (width) {
return $I$(1).range$I$I(0, width).mapToObj$java_util_function_IntFunction(/*addLambdaReuse org.rcsb.cif.generic.TextCifWriter$lambda5*/(P$.TextCifWriter$lambda5$||(P$.TextCifWriter$lambda5$=(((P$.TextCifWriter$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "TextCifWriter$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return (" ");});
})()
), Clazz.new_(P$.TextCifWriter$lambda5.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(2).joining$());
}, 1);

Clazz.newMeth(C$, 'getPaddingSpaces$I', function (width) {
if (width < C$.PADDING_SPACES.size$()) return C$.PADDING_SPACES.get$I(width);
var pad=null;
for (var i=C$.PADDING_SPACES.size$(); i <= width; i++) C$.PADDING_SPACES.set$I$TE(i, pad=C$.whitespaceString$I(i));

return pad;
}, 1);

Clazz.newMeth(C$, 'whitespace$StringBuilder$I', function (output, width) {
if (width > 0) {
output.append$S(C$.getPaddingSpaces$I(width));
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
