(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmExternalFiles", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmExternalFiles$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getReferenceId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reference_id", ((P$.IhmExternalFiles$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("reference_id"));
});

Clazz.newMeth(C$, 'getFilePath$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_path", ((P$.IhmExternalFiles$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("file_path"));
});

Clazz.newMeth(C$, 'getFileFormat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_format", ((P$.IhmExternalFiles$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("file_format"));
});

Clazz.newMeth(C$, 'getContentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("content_type", ((P$.IhmExternalFiles$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("content_type"));
});

Clazz.newMeth(C$, 'getFileSizeBytes$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file_size_bytes", ((P$.IhmExternalFiles$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("file_size_bytes"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.IhmExternalFiles$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmExternalFiles$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmExternalFiles$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
