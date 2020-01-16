(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructRefSeqDif", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAlignId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("align_id", ((P$.StructRefSeqDif$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("align_id"));
});

Clazz.newMeth(C$, 'getDbMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_mon_id", ((P$.StructRefSeqDif$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("db_mon_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructRefSeqDif$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_id", ((P$.StructRefSeqDif$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("mon_id"));
});

Clazz.newMeth(C$, 'getSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_num", ((P$.StructRefSeqDif$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("seq_num"));
});

Clazz.newMeth(C$, 'getPdbxPdbIdCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_pdb_id_code", ((P$.StructRefSeqDif$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_pdb_id_code"));
});

Clazz.newMeth(C$, 'getPdbxPdbStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_pdb_strand_id", ((P$.StructRefSeqDif$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_pdb_strand_id"));
});

Clazz.newMeth(C$, 'getPdbxPdbInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_pdb_ins_code", ((P$.StructRefSeqDif$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_pdb_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxAuthSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_seq_num", ((P$.StructRefSeqDif$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxSeqDbName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_db_name", ((P$.StructRefSeqDif$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_db_name"));
});

Clazz.newMeth(C$, 'getPdbxSeqDbAccessionCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_db_accession_code", ((P$.StructRefSeqDif$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_db_accession_code"));
});

Clazz.newMeth(C$, 'getPdbxSeqDbSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_db_seq_num", ((P$.StructRefSeqDif$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_db_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ordinal", ((P$.StructRefSeqDif$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeqDif$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeqDif$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ordinal"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
