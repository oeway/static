(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxValAngle", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxValAngle$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxValAngle$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_1", ((P$.PdbxValAngle$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_1", ((P$.PdbxValAngle$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_1", ((P$.PdbxValAngle$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_1", ((P$.PdbxValAngle$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_2", ((P$.PdbxValAngle$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_2", ((P$.PdbxValAngle$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_2", ((P$.PdbxValAngle$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_2", ((P$.PdbxValAngle$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getAuthAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id_3", ((P$.PdbxValAngle$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id_3"));
});

Clazz.newMeth(C$, 'getAuthAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_3", ((P$.PdbxValAngle$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_3"));
});

Clazz.newMeth(C$, 'getAuthCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id_3", ((P$.PdbxValAngle$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id_3"));
});

Clazz.newMeth(C$, 'getAuthSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id_3", ((P$.PdbxValAngle$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id_3"));
});

Clazz.newMeth(C$, 'getAuthPDBInsertId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_PDB_insert_id_1", ((P$.PdbxValAngle$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("auth_PDB_insert_id_1"));
});

Clazz.newMeth(C$, 'getAuthPDBInsertId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_PDB_insert_id_2", ((P$.PdbxValAngle$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("auth_PDB_insert_id_2"));
});

Clazz.newMeth(C$, 'getAuthPDBInsertId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_PDB_insert_id_3", ((P$.PdbxValAngle$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("auth_PDB_insert_id_3"));
});

Clazz.newMeth(C$, 'getLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_1", ((P$.PdbxValAngle$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_1"));
});

Clazz.newMeth(C$, 'getLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id_1", ((P$.PdbxValAngle$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id_1"));
});

Clazz.newMeth(C$, 'getLabelAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id_1", ((P$.PdbxValAngle$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id_1"));
});

Clazz.newMeth(C$, 'getLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id_1", ((P$.PdbxValAngle$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id_1"));
});

Clazz.newMeth(C$, 'getLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id_1", ((P$.PdbxValAngle$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id_1"));
});

Clazz.newMeth(C$, 'getLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_2", ((P$.PdbxValAngle$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_2"));
});

Clazz.newMeth(C$, 'getLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id_2", ((P$.PdbxValAngle$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id_2"));
});

Clazz.newMeth(C$, 'getLabelAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id_2", ((P$.PdbxValAngle$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id_2"));
});

Clazz.newMeth(C$, 'getLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id_2", ((P$.PdbxValAngle$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id_2"));
});

Clazz.newMeth(C$, 'getLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id_2", ((P$.PdbxValAngle$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id_2"));
});

Clazz.newMeth(C$, 'getLabelAltId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id_3", ((P$.PdbxValAngle$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id_3"));
});

Clazz.newMeth(C$, 'getLabelAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id_3", ((P$.PdbxValAngle$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id_3"));
});

Clazz.newMeth(C$, 'getLabelAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id_3", ((P$.PdbxValAngle$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id_3"));
});

Clazz.newMeth(C$, 'getLabelCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id_3", ((P$.PdbxValAngle$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id_3"));
});

Clazz.newMeth(C$, 'getLabelSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id_3", ((P$.PdbxValAngle$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id_3"));
});

Clazz.newMeth(C$, 'getAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle", ((P$.PdbxValAngle$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("angle"));
});

Clazz.newMeth(C$, 'getAngleDeviation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_deviation", ((P$.PdbxValAngle$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxValAngle$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxValAngle$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("angle_deviation"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
