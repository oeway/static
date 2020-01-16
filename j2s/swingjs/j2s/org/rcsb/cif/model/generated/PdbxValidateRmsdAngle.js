(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxValidateRmsdAngle$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPDBModelNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_model_num", ((P$.PdbxValidateRmsdAngle$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_model_num"));
});

Clazz.newMeth(C$, 'getAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_1", ((P$.PdbxValidateRmsdAngle$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_1", ((P$.PdbxValidateRmsdAngle$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_1", ((P$.PdbxValidateRmsdAngle$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_1", ((P$.PdbxValidateRmsdAngle$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_2", ((P$.PdbxValidateRmsdAngle$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_2", ((P$.PdbxValidateRmsdAngle$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_2", ((P$.PdbxValidateRmsdAngle$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_2", ((P$.PdbxValidateRmsdAngle$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getAuthAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_3", ((P$.PdbxValidateRmsdAngle$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_3"));
});

Clazz.newMeth(C$, 'getAuthAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_3", ((P$.PdbxValidateRmsdAngle$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_3"));
});

Clazz.newMeth(C$, 'getAuthCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_3", ((P$.PdbxValidateRmsdAngle$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_3"));
});

Clazz.newMeth(C$, 'getAuthSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_3", ((P$.PdbxValidateRmsdAngle$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_3"));
});

Clazz.newMeth(C$, 'getPDBInsCode1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code_1", ((P$.PdbxValidateRmsdAngle$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code_1"));
});

Clazz.newMeth(C$, 'getPDBInsCode2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code_2", ((P$.PdbxValidateRmsdAngle$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code_2"));
});

Clazz.newMeth(C$, 'getPDBInsCode3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code_3", ((P$.PdbxValidateRmsdAngle$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code_3"));
});

Clazz.newMeth(C$, 'getLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_1", ((P$.PdbxValidateRmsdAngle$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_1"));
});

Clazz.newMeth(C$, 'getLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_2", ((P$.PdbxValidateRmsdAngle$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_2"));
});

Clazz.newMeth(C$, 'getLabelAltId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_3", ((P$.PdbxValidateRmsdAngle$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_3"));
});

Clazz.newMeth(C$, 'getAngleDeviation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_deviation", ((P$.PdbxValidateRmsdAngle$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("angle_deviation"));
});

Clazz.newMeth(C$, 'getAngleValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_value", ((P$.PdbxValidateRmsdAngle$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("angle_value"));
});

Clazz.newMeth(C$, 'getAngleTargetValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_target_value", ((P$.PdbxValidateRmsdAngle$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("angle_target_value"));
});

Clazz.newMeth(C$, 'getAngleStandardDeviation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_standard_deviation", ((P$.PdbxValidateRmsdAngle$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("angle_standard_deviation"));
});

Clazz.newMeth(C$, 'getLinkerFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("linker_flag", ((P$.PdbxValidateRmsdAngle$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdAngle$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdAngle$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("linker_flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
