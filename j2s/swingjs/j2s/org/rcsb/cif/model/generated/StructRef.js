(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructRef", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getBiolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("biol_id", ((P$.StructRef$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("biol_id"));
});

Clazz.newMeth(C$, 'getDbCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_code", ((P$.StructRef$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("db_code"));
});

Clazz.newMeth(C$, 'getDbName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_name", ((P$.StructRef$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("db_name"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructRef$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.StructRef$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructRef$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getSeqAlign$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_align", ((P$.StructRef$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("seq_align"));
});

Clazz.newMeth(C$, 'getSeqDif$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_dif", ((P$.StructRef$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("seq_dif"));
});

Clazz.newMeth(C$, 'getPdbxDbAccession$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_db_accession", ((P$.StructRef$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_db_accession"));
});

Clazz.newMeth(C$, 'getPdbxDbIsoform$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_db_isoform", ((P$.StructRef$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_db_isoform"));
});

Clazz.newMeth(C$, 'getPdbxSeqOneLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_one_letter_code", ((P$.StructRef$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_one_letter_code"));
});

Clazz.newMeth(C$, 'getPdbxAlignBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_align_begin", ((P$.StructRef$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_align_begin"));
});

Clazz.newMeth(C$, 'getPdbxAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_align_end", ((P$.StructRef$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRef$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRef$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_align_end"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
