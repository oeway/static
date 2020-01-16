(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxValidateRmsdBond$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPDBModelNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_model_num", ((P$.PdbxValidateRmsdBond$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_model_num"));
});

Clazz.newMeth(C$, 'getAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_1", ((P$.PdbxValidateRmsdBond$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_1", ((P$.PdbxValidateRmsdBond$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_1", ((P$.PdbxValidateRmsdBond$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_1", ((P$.PdbxValidateRmsdBond$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_2", ((P$.PdbxValidateRmsdBond$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_2", ((P$.PdbxValidateRmsdBond$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_2", ((P$.PdbxValidateRmsdBond$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_2", ((P$.PdbxValidateRmsdBond$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getPDBInsCode1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code_1", ((P$.PdbxValidateRmsdBond$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code_1"));
});

Clazz.newMeth(C$, 'getPDBInsCode2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code_2", ((P$.PdbxValidateRmsdBond$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code_2"));
});

Clazz.newMeth(C$, 'getLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_1", ((P$.PdbxValidateRmsdBond$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_1"));
});

Clazz.newMeth(C$, 'getLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_2", ((P$.PdbxValidateRmsdBond$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_2"));
});

Clazz.newMeth(C$, 'getBondDeviation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_deviation", ((P$.PdbxValidateRmsdBond$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("bond_deviation"));
});

Clazz.newMeth(C$, 'getBondValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_value", ((P$.PdbxValidateRmsdBond$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("bond_value"));
});

Clazz.newMeth(C$, 'getBondTargetValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_target_value", ((P$.PdbxValidateRmsdBond$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("bond_target_value"));
});

Clazz.newMeth(C$, 'getBondStandardDeviation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_standard_deviation", ((P$.PdbxValidateRmsdBond$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("bond_standard_deviation"));
});

Clazz.newMeth(C$, 'getLinkerFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("linker_flag", ((P$.PdbxValidateRmsdBond$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValidateRmsdBond$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValidateRmsdBond$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("linker_flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2