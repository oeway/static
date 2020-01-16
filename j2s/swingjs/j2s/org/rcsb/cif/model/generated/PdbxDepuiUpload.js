(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload", null, 'org.rcsb.cif.model.BaseCategory');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map', function (name, columns) {
;C$.superclazz.c$$S$java_util_Map.apply(this, [name, columns]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$OA', function (name, rowCount, encodedColumns) {
;C$.superclazz.c$$S$I$OA.apply(this, [name, rowCount, encodedColumns]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this, [name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxDepuiUpload$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getFileContentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_content_type", ((P$.PdbxDepuiUpload$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("file_content_type"));
});

Clazz.newMeth(C$, 'getFileType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_type", ((P$.PdbxDepuiUpload$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("file_type"));
});

Clazz.newMeth(C$, 'getFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_name", ((P$.PdbxDepuiUpload$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("file_name"));
});

Clazz.newMeth(C$, 'getFileSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_size", ((P$.PdbxDepuiUpload$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("file_size"));
});

Clazz.newMeth(C$, 'getValidFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("valid_flag", ((P$.PdbxDepuiUpload$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("valid_flag"));
});

Clazz.newMeth(C$, 'getDiagnosticMessage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diagnostic_message", ((P$.PdbxDepuiUpload$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("diagnostic_message"));
});

Clazz.newMeth(C$, 'getSequenceAlign$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sequence_align", ((P$.PdbxDepuiUpload$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiUpload$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiUpload$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("sequence_align"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
