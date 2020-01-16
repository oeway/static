(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getModelNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_number", ((P$.NdbStructNaBasePairStep$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("model_number"));
});

Clazz.newMeth(C$, 'getStepNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_number", ((P$.NdbStructNaBasePairStep$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("step_number"));
});

Clazz.newMeth(C$, 'getStepName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_name", ((P$.NdbStructNaBasePairStep$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("step_name"));
});

Clazz.newMeth(C$, 'getILabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_asym_id_1", ((P$.NdbStructNaBasePairStep$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_asym_id_1"));
});

Clazz.newMeth(C$, 'getILabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_comp_id_1", ((P$.NdbStructNaBasePairStep$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_comp_id_1"));
});

Clazz.newMeth(C$, 'getILabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_seq_id_1", ((P$.NdbStructNaBasePairStep$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_seq_id_1"));
});

Clazz.newMeth(C$, 'getISymmetry1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_symmetry_1", ((P$.NdbStructNaBasePairStep$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("i_symmetry_1"));
});

Clazz.newMeth(C$, 'getJLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_asym_id_1", ((P$.NdbStructNaBasePairStep$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_asym_id_1"));
});

Clazz.newMeth(C$, 'getJLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_comp_id_1", ((P$.NdbStructNaBasePairStep$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_comp_id_1"));
});

Clazz.newMeth(C$, 'getJLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_seq_id_1", ((P$.NdbStructNaBasePairStep$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_seq_id_1"));
});

Clazz.newMeth(C$, 'getJSymmetry1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_symmetry_1", ((P$.NdbStructNaBasePairStep$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("j_symmetry_1"));
});

Clazz.newMeth(C$, 'getILabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_asym_id_2", ((P$.NdbStructNaBasePairStep$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_asym_id_2"));
});

Clazz.newMeth(C$, 'getILabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_comp_id_2", ((P$.NdbStructNaBasePairStep$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_comp_id_2"));
});

Clazz.newMeth(C$, 'getILabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_seq_id_2", ((P$.NdbStructNaBasePairStep$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_seq_id_2"));
});

Clazz.newMeth(C$, 'getISymmetry2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_symmetry_2", ((P$.NdbStructNaBasePairStep$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("i_symmetry_2"));
});

Clazz.newMeth(C$, 'getJLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_asym_id_2", ((P$.NdbStructNaBasePairStep$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_asym_id_2"));
});

Clazz.newMeth(C$, 'getJLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_comp_id_2", ((P$.NdbStructNaBasePairStep$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_comp_id_2"));
});

Clazz.newMeth(C$, 'getJLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_seq_id_2", ((P$.NdbStructNaBasePairStep$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_seq_id_2"));
});

Clazz.newMeth(C$, 'getJSymmetry2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_symmetry_2", ((P$.NdbStructNaBasePairStep$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("j_symmetry_2"));
});

Clazz.newMeth(C$, 'getIAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_auth_asym_id_1", ((P$.NdbStructNaBasePairStep$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("i_auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getIAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_auth_seq_id_1", ((P$.NdbStructNaBasePairStep$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("i_auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getIPDBInsCode1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_PDB_ins_code_1", ((P$.NdbStructNaBasePairStep$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("i_PDB_ins_code_1"));
});

Clazz.newMeth(C$, 'getJAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_auth_asym_id_1", ((P$.NdbStructNaBasePairStep$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("j_auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getJAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_auth_seq_id_1", ((P$.NdbStructNaBasePairStep$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("j_auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getJPDBInsCode1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_PDB_ins_code_1", ((P$.NdbStructNaBasePairStep$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("j_PDB_ins_code_1"));
});

Clazz.newMeth(C$, 'getIAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_auth_asym_id_2", ((P$.NdbStructNaBasePairStep$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("i_auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getIAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_auth_seq_id_2", ((P$.NdbStructNaBasePairStep$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("i_auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getIPDBInsCode2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_PDB_ins_code_2", ((P$.NdbStructNaBasePairStep$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("i_PDB_ins_code_2"));
});

Clazz.newMeth(C$, 'getJAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_auth_asym_id_2", ((P$.NdbStructNaBasePairStep$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("j_auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getJAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_auth_seq_id_2", ((P$.NdbStructNaBasePairStep$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("j_auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getJPDBInsCode2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_PDB_ins_code_2", ((P$.NdbStructNaBasePairStep$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("j_PDB_ins_code_2"));
});

Clazz.newMeth(C$, 'getShift$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift", ((P$.NdbStructNaBasePairStep$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("shift"));
});

Clazz.newMeth(C$, 'getSlide$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("slide", ((P$.NdbStructNaBasePairStep$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("slide"));
});

Clazz.newMeth(C$, 'getRise$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rise", ((P$.NdbStructNaBasePairStep$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("rise"));
});

Clazz.newMeth(C$, 'getTilt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tilt", ((P$.NdbStructNaBasePairStep$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("tilt"));
});

Clazz.newMeth(C$, 'getRoll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("roll", ((P$.NdbStructNaBasePairStep$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("roll"));
});

Clazz.newMeth(C$, 'getTwist$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twist", ((P$.NdbStructNaBasePairStep$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("twist"));
});

Clazz.newMeth(C$, 'getXDisplacement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("x_displacement", ((P$.NdbStructNaBasePairStep$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("x_displacement"));
});

Clazz.newMeth(C$, 'getYDisplacement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("y_displacement", ((P$.NdbStructNaBasePairStep$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("y_displacement"));
});

Clazz.newMeth(C$, 'getHelicalRise$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("helical_rise", ((P$.NdbStructNaBasePairStep$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("helical_rise"));
});

Clazz.newMeth(C$, 'getInclination$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("inclination", ((P$.NdbStructNaBasePairStep$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("inclination"));
});

Clazz.newMeth(C$, 'getTip$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tip", ((P$.NdbStructNaBasePairStep$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("tip"));
});

Clazz.newMeth(C$, 'getHelicalTwist$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("helical_twist", ((P$.NdbStructNaBasePairStep$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePairStep$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePairStep$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("helical_twist"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
