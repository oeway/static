(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructRefSeq", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("align_id", ((P$.StructRefSeq$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("align_id"));
});

Clazz.newMeth(C$, 'getDbAlignBeg$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_align_beg", ((P$.StructRefSeq$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("db_align_beg"));
});

Clazz.newMeth(C$, 'getDbAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_align_end", ((P$.StructRefSeq$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("db_align_end"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructRefSeq$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getRefId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_id", ((P$.StructRefSeq$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ref_id"));
});

Clazz.newMeth(C$, 'getSeqAlignBeg$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_align_beg", ((P$.StructRefSeq$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("seq_align_beg"));
});

Clazz.newMeth(C$, 'getSeqAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_align_end", ((P$.StructRefSeq$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("seq_align_end"));
});

Clazz.newMeth(C$, 'getPdbxStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_strand_id", ((P$.StructRefSeq$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_strand_id"));
});

Clazz.newMeth(C$, 'getPdbxDbAccession$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_db_accession", ((P$.StructRefSeq$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_db_accession"));
});

Clazz.newMeth(C$, 'getPdbxDbAlignBegInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_db_align_beg_ins_code", ((P$.StructRefSeq$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_db_align_beg_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxDbAlignEndInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_db_align_end_ins_code", ((P$.StructRefSeq$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_db_align_end_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPDBIdCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_id_code", ((P$.StructRefSeq$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_id_code"));
});

Clazz.newMeth(C$, 'getPdbxAuthSeqAlignBeg$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_seq_align_beg", ((P$.StructRefSeq$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_seq_align_beg"));
});

Clazz.newMeth(C$, 'getPdbxAuthSeqAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_seq_align_end", ((P$.StructRefSeq$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_seq_align_end"));
});

Clazz.newMeth(C$, 'getPdbxSeqAlignBegInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_align_beg_ins_code", ((P$.StructRefSeq$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_align_beg_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxSeqAlignEndInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_align_end_ins_code", ((P$.StructRefSeq$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructRefSeq$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructRefSeq$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_align_end_ins_code"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
