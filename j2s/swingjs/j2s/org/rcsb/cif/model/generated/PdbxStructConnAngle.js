(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxStructConnAngle$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_alt_id", ((P$.PdbxStructConnAngle$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_asym_id", ((P$.PdbxStructConnAngle$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_atom_id", ((P$.PdbxStructConnAngle$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_comp_id", ((P$.PdbxStructConnAngle$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_seq_id", ((P$.PdbxStructConnAngle$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_asym_id", ((P$.PdbxStructConnAngle$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_atom_id", ((P$.PdbxStructConnAngle$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_comp_id", ((P$.PdbxStructConnAngle$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_seq_id", ((P$.PdbxStructConnAngle$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr1Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_symmetry", ((P$.PdbxStructConnAngle$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_symmetry"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_alt_id", ((P$.PdbxStructConnAngle$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_asym_id", ((P$.PdbxStructConnAngle$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_atom_id", ((P$.PdbxStructConnAngle$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_comp_id", ((P$.PdbxStructConnAngle$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_seq_id", ((P$.PdbxStructConnAngle$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_asym_id", ((P$.PdbxStructConnAngle$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_atom_id", ((P$.PdbxStructConnAngle$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_comp_id", ((P$.PdbxStructConnAngle$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_seq_id", ((P$.PdbxStructConnAngle$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr2Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_symmetry", ((P$.PdbxStructConnAngle$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_symmetry"));
});

Clazz.newMeth(C$, 'getPtnr1PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_PDB_ins_code", ((P$.PdbxStructConnAngle$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPtnr1AuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_alt_id", ((P$.PdbxStructConnAngle$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr2PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_PDB_ins_code", ((P$.PdbxStructConnAngle$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPtnr2AuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_alt_id", ((P$.PdbxStructConnAngle$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr3AuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_auth_alt_id", ((P$.PdbxStructConnAngle$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr3AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_auth_asym_id", ((P$.PdbxStructConnAngle$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr3AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_auth_atom_id", ((P$.PdbxStructConnAngle$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr3AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_auth_comp_id", ((P$.PdbxStructConnAngle$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr3PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_PDB_ins_code", ((P$.PdbxStructConnAngle$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPtnr3AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_auth_seq_id", ((P$.PdbxStructConnAngle$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr3LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_label_alt_id", ((P$.PdbxStructConnAngle$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr3LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_label_asym_id", ((P$.PdbxStructConnAngle$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr3LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_label_atom_id", ((P$.PdbxStructConnAngle$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr3LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_label_comp_id", ((P$.PdbxStructConnAngle$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr3LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_label_seq_id", ((P$.PdbxStructConnAngle$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr3Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr3_symmetry", ((P$.PdbxStructConnAngle$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr3_symmetry"));
});

Clazz.newMeth(C$, 'getValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value", ((P$.PdbxStructConnAngle$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("value"));
});

Clazz.newMeth(C$, 'getValueEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_esd", ((P$.PdbxStructConnAngle$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructConnAngle$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructConnAngle$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("value_esd"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
