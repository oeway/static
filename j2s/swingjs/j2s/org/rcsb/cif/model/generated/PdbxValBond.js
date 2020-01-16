(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxValBond", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxValBond$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxValBond$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_1", ((P$.PdbxValBond$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_1", ((P$.PdbxValBond$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_1", ((P$.PdbxValBond$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_1", ((P$.PdbxValBond$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_2", ((P$.PdbxValBond$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_2", ((P$.PdbxValBond$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_2", ((P$.PdbxValBond$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_2", ((P$.PdbxValBond$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getAuthPDBInsertId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_PDB_insert_id_1", ((P$.PdbxValBond$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("auth_PDB_insert_id_1"));
});

Clazz.newMeth(C$, 'getAuthPDBInsertId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_PDB_insert_id_2", ((P$.PdbxValBond$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("auth_PDB_insert_id_2"));
});

Clazz.newMeth(C$, 'getLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_1", ((P$.PdbxValBond$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_1"));
});

Clazz.newMeth(C$, 'getLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id_1", ((P$.PdbxValBond$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id_1"));
});

Clazz.newMeth(C$, 'getLabelAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id_1", ((P$.PdbxValBond$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id_1"));
});

Clazz.newMeth(C$, 'getLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id_1", ((P$.PdbxValBond$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id_1"));
});

Clazz.newMeth(C$, 'getLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id_1", ((P$.PdbxValBond$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id_1"));
});

Clazz.newMeth(C$, 'getLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_2", ((P$.PdbxValBond$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_2"));
});

Clazz.newMeth(C$, 'getLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id_2", ((P$.PdbxValBond$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id_2"));
});

Clazz.newMeth(C$, 'getLabelAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id_2", ((P$.PdbxValBond$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id_2"));
});

Clazz.newMeth(C$, 'getLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id_2", ((P$.PdbxValBond$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id_2"));
});

Clazz.newMeth(C$, 'getLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id_2", ((P$.PdbxValBond$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id_2"));
});

Clazz.newMeth(C$, 'getBond$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond", ((P$.PdbxValBond$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("bond"));
});

Clazz.newMeth(C$, 'getBondDeviation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_deviation", ((P$.PdbxValBond$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValBond$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValBond$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("bond_deviation"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2