(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxStructAssemblyDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxStructAssemblyDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getMethodDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method_details", ((P$.PdbxStructAssemblyDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("method_details"));
});

Clazz.newMeth(C$, 'getOligomericDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oligomeric_details", ((P$.PdbxStructAssemblyDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("oligomeric_details"));
});

Clazz.newMeth(C$, 'getOligomericCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oligomeric_count", ((P$.PdbxStructAssemblyDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("oligomeric_count"));
});

Clazz.newMeth(C$, 'getMatrixFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix_flag", ((P$.PdbxStructAssemblyDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("matrix_flag"));
});

Clazz.newMeth(C$, 'getUploadFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("upload_file_name", ((P$.PdbxStructAssemblyDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("upload_file_name"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
