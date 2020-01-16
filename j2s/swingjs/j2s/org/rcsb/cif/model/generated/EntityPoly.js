(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EntityPoly", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.EntityPoly$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getNstdChirality$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nstd_chirality", ((P$.EntityPoly$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("nstd_chirality"));
});

Clazz.newMeth(C$, 'getNstdLinkage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nstd_linkage", ((P$.EntityPoly$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("nstd_linkage"));
});

Clazz.newMeth(C$, 'getNstdMonomer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nstd_monomer", ((P$.EntityPoly$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("nstd_monomer"));
});

Clazz.newMeth(C$, 'getNumberOfMonomers$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_of_monomers", ((P$.EntityPoly$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number_of_monomers"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.EntityPoly$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getTypeDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_details", ((P$.EntityPoly$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("type_details"));
});

Clazz.newMeth(C$, 'getPdbxStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_strand_id", ((P$.EntityPoly$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_strand_id"));
});

Clazz.newMeth(C$, 'getPdbxSeqOneLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_one_letter_code", ((P$.EntityPoly$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_one_letter_code"));
});

Clazz.newMeth(C$, 'getPdbxSeqOneLetterCodeCan$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_one_letter_code_can", ((P$.EntityPoly$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_one_letter_code_can"));
});

Clazz.newMeth(C$, 'getPdbxTargetIdentifier$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_target_identifier", ((P$.EntityPoly$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_target_identifier"));
});

Clazz.newMeth(C$, 'getPdbxSeqOneLetterCodeSample$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_one_letter_code_sample", ((P$.EntityPoly$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_one_letter_code_sample"));
});

Clazz.newMeth(C$, 'getPdbxExplicitLinkingFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_explicit_linking_flag", ((P$.EntityPoly$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_explicit_linking_flag"));
});

Clazz.newMeth(C$, 'getPdbxSequenceEvidenceCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_sequence_evidence_code", ((P$.EntityPoly$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_sequence_evidence_code"));
});

Clazz.newMeth(C$, 'getPdbxBuildSelfReference$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_build_self_reference", ((P$.EntityPoly$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_build_self_reference"));
});

Clazz.newMeth(C$, 'getPdbxNTerminalSeqOneLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_N_terminal_seq_one_letter_code", ((P$.EntityPoly$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_N_terminal_seq_one_letter_code"));
});

Clazz.newMeth(C$, 'getPdbxCTerminalSeqOneLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_C_terminal_seq_one_letter_code", ((P$.EntityPoly$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_C_terminal_seq_one_letter_code"));
});

Clazz.newMeth(C$, 'getPdbxSeqThreeLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_three_letter_code", ((P$.EntityPoly$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_three_letter_code"));
});

Clazz.newMeth(C$, 'getPdbxSeqDbName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_db_name", ((P$.EntityPoly$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_db_name"));
});

Clazz.newMeth(C$, 'getPdbxSeqDbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_db_id", ((P$.EntityPoly$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_db_id"));
});

Clazz.newMeth(C$, 'getPdbxSeqAlignBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_align_begin", ((P$.EntityPoly$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_align_begin"));
});

Clazz.newMeth(C$, 'getPdbxSeqAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_align_end", ((P$.EntityPoly$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntityPoly$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntityPoly$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_align_end"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
