(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_id", ((P$.PdbxDepositGroupIndex$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("group_id"));
});

Clazz.newMeth(C$, 'getOrdinalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.PdbxDepositGroupIndex$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getDepSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_set_id", ((P$.PdbxDepositGroupIndex$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("dep_set_id"));
});

Clazz.newMeth(C$, 'getPdbIdCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_id_code", ((P$.PdbxDepositGroupIndex$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_id_code"));
});

Clazz.newMeth(C$, 'getGroupFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_file_name", ((P$.PdbxDepositGroupIndex$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("group_file_name"));
});

Clazz.newMeth(C$, 'getGroupFileTimestamp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_file_timestamp", ((P$.PdbxDepositGroupIndex$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("group_file_timestamp"));
});

Clazz.newMeth(C$, 'getAuthFileLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_file_label", ((P$.PdbxDepositGroupIndex$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_file_label"));
});

Clazz.newMeth(C$, 'getAuthFileContentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_file_content_type", ((P$.PdbxDepositGroupIndex$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("auth_file_content_type"));
});

Clazz.newMeth(C$, 'getAuthFileFormatType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_file_format_type", ((P$.PdbxDepositGroupIndex$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("auth_file_format_type"));
});

Clazz.newMeth(C$, 'getAuthFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_file_name", ((P$.PdbxDepositGroupIndex$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("auth_file_name"));
});

Clazz.newMeth(C$, 'getAuthFileSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_file_size", ((P$.PdbxDepositGroupIndex$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositGroupIndex$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositGroupIndex$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("auth_file_size"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
