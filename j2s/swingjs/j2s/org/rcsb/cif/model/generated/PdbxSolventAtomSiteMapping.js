(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxSolventAtomSiteMapping$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxSolventAtomSiteMapping$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.PdbxSolventAtomSiteMapping$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id", ((P$.PdbxSolventAtomSiteMapping$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.PdbxSolventAtomSiteMapping$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.PdbxSolventAtomSiteMapping$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code", ((P$.PdbxSolventAtomSiteMapping$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPreAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_asym_id", ((P$.PdbxSolventAtomSiteMapping$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPreAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_atom_id", ((P$.PdbxSolventAtomSiteMapping$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPreAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_comp_id", ((P$.PdbxSolventAtomSiteMapping$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPreAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_seq_id", ((P$.PdbxSolventAtomSiteMapping$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPrePDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_PDB_ins_code", ((P$.PdbxSolventAtomSiteMapping$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pre_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPreAuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_alt_id", ((P$.PdbxSolventAtomSiteMapping$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_alt_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxSolventAtomSiteMapping$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id", ((P$.PdbxSolventAtomSiteMapping$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.PdbxSolventAtomSiteMapping$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxSolventAtomSiteMapping$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getAuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_alt_id", ((P$.PdbxSolventAtomSiteMapping$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("auth_alt_id"));
});

Clazz.newMeth(C$, 'getOccupancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy", ((P$.PdbxSolventAtomSiteMapping$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy"));
});

Clazz.newMeth(C$, 'getCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_x", ((P$.PdbxSolventAtomSiteMapping$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_x"));
});

Clazz.newMeth(C$, 'getCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_y", ((P$.PdbxSolventAtomSiteMapping$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_y"));
});

Clazz.newMeth(C$, 'getCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_z", ((P$.PdbxSolventAtomSiteMapping$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_z"));
});

Clazz.newMeth(C$, 'getPreCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_Cartn_x", ((P$.PdbxSolventAtomSiteMapping$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pre_Cartn_x"));
});

Clazz.newMeth(C$, 'getPreCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_Cartn_y", ((P$.PdbxSolventAtomSiteMapping$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pre_Cartn_y"));
});

Clazz.newMeth(C$, 'getPreCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_Cartn_z", ((P$.PdbxSolventAtomSiteMapping$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pre_Cartn_z"));
});

Clazz.newMeth(C$, 'getSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry", ((P$.PdbxSolventAtomSiteMapping$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry"));
});

Clazz.newMeth(C$, 'getSymmetryAsXyz$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_as_xyz", ((P$.PdbxSolventAtomSiteMapping$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolventAtomSiteMapping$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolventAtomSiteMapping$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_as_xyz"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
