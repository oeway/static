(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDbref", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPdbIdCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_id_code", ((P$.PdbxDbref$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_id_code"));
});

Clazz.newMeth(C$, 'getChainId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chain_id", ((P$.PdbxDbref$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("chain_id"));
});

Clazz.newMeth(C$, 'getBeginResNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("begin_res_number", ((P$.PdbxDbref$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("begin_res_number"));
});

Clazz.newMeth(C$, 'getBeginInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("begin_ins_code", ((P$.PdbxDbref$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("begin_ins_code"));
});

Clazz.newMeth(C$, 'getEndResNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_res_number", ((P$.PdbxDbref$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("end_res_number"));
});

Clazz.newMeth(C$, 'getEndInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_ins_code", ((P$.PdbxDbref$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("end_ins_code"));
});

Clazz.newMeth(C$, 'getDatabaseName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_name", ((P$.PdbxDbref$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("database_name"));
});

Clazz.newMeth(C$, 'getDatabaseAccession$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_accession", ((P$.PdbxDbref$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("database_accession"));
});

Clazz.newMeth(C$, 'getDatabaseIdCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_id_code", ((P$.PdbxDbref$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("database_id_code"));
});

Clazz.newMeth(C$, 'getDatabaseBeginResNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_begin_res_number", ((P$.PdbxDbref$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("database_begin_res_number"));
});

Clazz.newMeth(C$, 'getDatabaseBeginInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_begin_ins_code", ((P$.PdbxDbref$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("database_begin_ins_code"));
});

Clazz.newMeth(C$, 'getDatabaseEndResNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_end_res_number", ((P$.PdbxDbref$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("database_end_res_number"));
});

Clazz.newMeth(C$, 'getDatabaseEndInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_end_ins_code", ((P$.PdbxDbref$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDbref$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDbref$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("database_end_ins_code"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
