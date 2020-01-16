(function(){var P$=Clazz.newPackage("org.rcsb.cif"),I$=[[0,'com.google.gson.Gson','com.google.gson.reflect.TypeToken','java.util.ArrayList','java.util.Arrays','java.util.stream.Collectors','java.nio.file.Files',['org.rcsb.cif.CifOptions','.CifOptionsBuilder','.GsonHolder'],['org.rcsb.cif.CifOptions','.CifOptionsBuilder','.ListTypeHolder'],'org.rcsb.cif.EncodingStrategyHint','org.rcsb.cif.CifOptions',['org.rcsb.cif.CifOptions','.CifOptionsBuilder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CifOptions", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gzip=false;
this.encoder=null;
this.fetchUrl=null;
this.categoryWhitelist=null;
this.categoryBlacklist=null;
this.columnWhitelist=null;
this.columnBlacklist=null;
this.encodingStrategyHints=null;
this.fileFormat=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_rcsb_cif_CifOptions_CifOptionsBuilder', function (builder) {
;C$.$init$.apply(this);
this.gzip=builder.gzip;
this.encoder=builder.encoder;
this.fetchUrl=builder.fetchUrl;
this.categoryWhitelist=builder.categoryWhitelist;
this.categoryBlacklist=builder.categoryBlacklist;
this.columnWhitelist=builder.columnWhitelist;
this.columnBlacklist=builder.columnBlacklist;
this.fileFormat=builder.fileFormat;
var categoriesToAdd=this.columnWhitelist.stream$().map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.CifOptions$lambda1*/(P$.CifOptions$lambda1$||(P$.CifOptions$lambda1$=(((P$.CifOptions$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptions$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (fullColumnName) { return (fullColumnName.split$S("\\.")[0]);});
})()
), Clazz.new_(P$.CifOptions$lambda1.$init$, [this, null])))))).distinct$().filter$java_util_function_Predicate(/*addLambdaReuse org.rcsb.cif.CifOptions$lambda2*/(P$.CifOptions$lambda2$||(P$.CifOptions$lambda2$=(((P$.CifOptions$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptions$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (categoryName) { return (!this.b$['org.rcsb.cif.CifOptions'].columnWhitelist.contains$O(categoryName));});
})()
), Clazz.new_(P$.CifOptions$lambda2.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(5).toList$());
this.categoryWhitelist.addAll$java_util_Collection(categoriesToAdd);
this.encodingStrategyHints=builder.encodingStrategyHints;
}, 1);

Clazz.newMeth(C$, 'isGzip$', function () {
return this.gzip;
});

Clazz.newMeth(C$, 'getEncoder$', function () {
return this.encoder;
});

Clazz.newMeth(C$, 'getFetchUrl$', function () {
return this.fetchUrl;
});

Clazz.newMeth(C$, 'filterCategory$S', function (categoryName) {
if (this.categoryBlacklist.contains$O(categoryName)) {
return false;
} else return this.categoryWhitelist.size$() <= 0 || this.categoryWhitelist.contains$O(categoryName) ;
});

Clazz.newMeth(C$, 'filterColumn$S$S', function (categoryName, columnName) {
var fullColumnName=categoryName + "." + columnName ;
if (this.columnBlacklist.contains$O(fullColumnName)) {
return false;
} else if (this.columnWhitelist.stream$().anyMatch$java_util_function_Predicate(((P$.CifOptions$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptions$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (fcn) { return (fcn.split$S("\\.")[0].equals$O(this.$finals$.categoryName));});
})()
), Clazz.new_(P$.CifOptions$lambda3.$init$, [this, {categoryName:categoryName}]))) && !this.columnWhitelist.contains$O(fullColumnName) ) {
return false;
} else {
return true;
}});

Clazz.newMeth(C$, 'getEncodingStrategyHint$S$S', function (categoryName, columnName) {
return this.encodingStrategyHints.stream$().filter$java_util_function_Predicate(((P$.CifOptions$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptions$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$', function (encodingStrategyHint) { return (encodingStrategyHint.getCategoryName$().equals$O(this.$finals$.categoryName) && encodingStrategyHint.getColumnName$().equals$O(this.$finals$.columnName) );});
})()
), Clazz.new_(P$.CifOptions$lambda4.$init$, [this, {categoryName:categoryName,columnName:columnName}]))).findFirst$();
});

Clazz.newMeth(C$, 'getFileFormat$', function () {
return this.fileFormat;
});

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(11,1));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.CifOptions, "CifOptionsBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gzip=false;
this.encoder=null;
this.fetchUrl=null;
this.categoryWhitelist=null;
this.categoryBlacklist=null;
this.columnWhitelist=null;
this.columnBlacklist=null;
this.encodingStrategyHints=null;
this.fileFormat=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.gzip=false;
this.encoder="ciftools-java";
this.fetchUrl="https://models.rcsb.org/%s.bcif";
this.categoryWhitelist=Clazz.new_($I$(3,1));
this.categoryBlacklist=Clazz.new_($I$(3,1));
this.columnWhitelist=Clazz.new_($I$(3,1));
this.columnBlacklist=Clazz.new_($I$(3,1));
this.encodingStrategyHints=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'gzip$Z', function (gzip) {
this.gzip=gzip;
return this;
});

Clazz.newMeth(C$, 'encoder$S', function (encoder) {
this.encoder=encoder;
return this;
});

Clazz.newMeth(C$, 'fetchUrl$S', function (fetchUrl) {
this.fetchUrl=fetchUrl;
return this;
});

Clazz.newMeth(C$, 'categoryWhitelist$SA', function (categoryWhitelist) {
return this.categoryWhitelist$java_util_List($I$(4).asList$TTA(categoryWhitelist));
});

Clazz.newMeth(C$, 'categoryWhitelist$java_util_List', function (categoryWhitelist) {
this.categoryWhitelist.addAll$java_util_Collection(categoryWhitelist);
return this;
});

Clazz.newMeth(C$, 'categoryBlacklist$SA', function (categoryBlacklist) {
return this.categoryBlacklist$java_util_List($I$(4).asList$TTA(categoryBlacklist));
});

Clazz.newMeth(C$, 'categoryBlacklist$java_util_List', function (categoryBlacklist) {
this.categoryBlacklist.addAll$java_util_Collection(categoryBlacklist);
return this;
});

Clazz.newMeth(C$, 'columnWhitelist$SA', function (columnWhitelist) {
return this.columnWhitelist$java_util_List($I$(4).asList$TTA(columnWhitelist));
});

Clazz.newMeth(C$, 'columnWhitelist$java_util_List', function (columnWhitelist) {
this.columnWhitelist.addAll$java_util_Collection(columnWhitelist);
return this;
});

Clazz.newMeth(C$, 'columnBlacklist$SA', function (columnBlacklist) {
return this.columnBlacklist$java_util_List($I$(4).asList$TTA(columnBlacklist));
});

Clazz.newMeth(C$, 'columnBlacklist$java_util_List', function (columnBlacklist) {
this.columnBlacklist.addAll$java_util_Collection(columnBlacklist);
return this;
});

Clazz.newMeth(C$, 'encodingStrategyHint$java_nio_file_Path', function (path) {
try {
var bufferedReader=$I$(6).newBufferedReader$java_nio_file_Path(path);
try {
return this.encodingStrategyHint$S(bufferedReader.lines$().collect$java_util_stream_Collector($I$(5).joining$()));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('java.io.UncheckedIOException').c$$java_io_IOException,[e]);
} else {
throw e;
}
}
}finally{/*res*/
try{bufferedReader&&bufferedReader.close$&&bufferedReader.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'encodingStrategyHint$S', function (json) {
this.encodingStrategyHints.addAll$java_util_Collection($I$(7).instance.fromJson$S$reflect_Type(json, $I$(8).instance));
return this;
});

Clazz.newMeth(C$, 'encodingStrategyHint$S$S$S$I', function (categoryName, columnName, encoding, precision) {
this.encodingStrategyHints.add$TE(Clazz.new_($I$(9,1).c$$S$S$S$Integer,[categoryName, columnName, encoding, new Integer(precision)]));
return this;
});

Clazz.newMeth(C$, 'encodingStrategyHint$org_rcsb_cif_EncodingStrategyHintA', function (encodingStrategyHints) {
return this.encodingStrategyHint$java_util_List($I$(4).asList$TTA(encodingStrategyHints));
});

Clazz.newMeth(C$, 'encodingStrategyHint$java_util_List', function (encodingStrategyHints) {
this.encodingStrategyHints.addAll$java_util_Collection(encodingStrategyHints);
return this;
});

Clazz.newMeth(C$, 'fileFormatHint$org_rcsb_cif_CifOptions_CifOptionsBuilder_FileFormat', function (fileFormat) {
this.fileFormat=fileFormat;
return this;
});

Clazz.newMeth(C$, 'build$', function () {
return Clazz.new_($I$(10,1).c$$org_rcsb_cif_CifOptions_CifOptionsBuilder,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CifOptions.CifOptionsBuilder, "GsonHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.instance=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.instance=Clazz.new_($I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CifOptions.CifOptionsBuilder, "ListTypeHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.instance=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.instance=((P$.CifOptions$CifOptionsBuilder$ListTypeHolder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CifOptions$CifOptionsBuilder$ListTypeHolder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('com.google.gson.reflect.TypeToken'), null, 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
})()
), Clazz.new_($I$(2,1), [this, null],P$.CifOptions$CifOptionsBuilder$ListTypeHolder$1)).getType$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.CifOptions.CifOptionsBuilder, "FileFormat", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "BCIF_PLAIN", 0, []);
Clazz.newEnumConst($vals, C$.c$, "BCIF_GZIPPED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CIF_PLAIN", 2, []);
Clazz.newEnumConst($vals, C$.c$, "CIF_GZIPPED", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:23 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
