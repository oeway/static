(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructConn", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getConnTypeId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conn_type_id", ((P$.StructConn$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("conn_type_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructConn$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructConn$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_alt_id", ((P$.StructConn$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_asym_id", ((P$.StructConn$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_atom_id", ((P$.StructConn$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_comp_id", ((P$.StructConn$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_seq_id", ((P$.StructConn$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_asym_id", ((P$.StructConn$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_atom_id", ((P$.StructConn$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_comp_id", ((P$.StructConn$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr1AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_auth_seq_id", ((P$.StructConn$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr1Role$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_role", ((P$.StructConn$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_role"));
});

Clazz.newMeth(C$, 'getPtnr1Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_symmetry", ((P$.StructConn$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_symmetry"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_alt_id", ((P$.StructConn$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_asym_id", ((P$.StructConn$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_atom_id", ((P$.StructConn$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_comp_id", ((P$.StructConn$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_seq_id", ((P$.StructConn$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_asym_id", ((P$.StructConn$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_atom_id", ((P$.StructConn$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_comp_id", ((P$.StructConn$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr2AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_auth_seq_id", ((P$.StructConn$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr2Role$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_role", ((P$.StructConn$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_role"));
});

Clazz.newMeth(C$, 'getPtnr2Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_symmetry", ((P$.StructConn$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_symmetry"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_PDB_ins_code", ((P$.StructConn$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1AuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_auth_alt_id", ((P$.StructConn$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_label_alt_id", ((P$.StructConn$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_label_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1StandardCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_standard_comp_id", ((P$.StructConn$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_standard_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr2PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr2_PDB_ins_code", ((P$.StructConn$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr2_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPtnr2AuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr2_auth_alt_id", ((P$.StructConn$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr2_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr2LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr2_label_alt_id", ((P$.StructConn$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr2_label_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3AuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_auth_alt_id", ((P$.StructConn$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_auth_asym_id", ((P$.StructConn$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_auth_atom_id", ((P$.StructConn$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_auth_comp_id", ((P$.StructConn$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_PDB_ins_code", ((P$.StructConn$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_auth_seq_id", ((P$.StructConn$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_label_alt_id", ((P$.StructConn$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_label_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_label_asym_id", ((P$.StructConn$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_label_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_label_atom_id", ((P$.StructConn$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_label_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_label_comp_id", ((P$.StructConn$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_label_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_label_seq_id", ((P$.StructConn$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_label_seq_id"));
});

Clazz.newMeth(C$, 'getPdbxPDBId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_id", ((P$.StructConn$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_id"));
});

Clazz.newMeth(C$, 'getPdbxDistValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_dist_value", ((P$.StructConn$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_dist_value"));
});

Clazz.newMeth(C$, 'getPdbxValueOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_value_order", ((P$.StructConn$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_value_order"));
});

Clazz.newMeth(C$, 'getPdbxLeavingAtomFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_leaving_atom_flag", ((P$.StructConn$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_leaving_atom_flag"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1ModName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_mod_name", ((P$.StructConn$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_mod_name"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1SugarName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_sugar_name", ((P$.StructConn$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_sugar_name"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1ReplacedAtom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_replaced_atom", ((P$.StructConn$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_replaced_atom"));
});

Clazz.newMeth(C$, 'getPdbxPtnr3AuthInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr3_auth_ins_code", ((P$.StructConn$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr3_auth_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1AtomStereoConfig$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_atom_stereo_config", ((P$.StructConn$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_atom_stereo_config"));
});

Clazz.newMeth(C$, 'getPdbxPtnr1LeavingAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr1_leaving_atom_id", ((P$.StructConn$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr1_leaving_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxPtnr2AtomStereoConfig$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr2_atom_stereo_config", ((P$.StructConn$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr2_atom_stereo_config"));
});

Clazz.newMeth(C$, 'getPdbxPtnr2LeavingAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ptnr2_leaving_atom_id", ((P$.StructConn$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ptnr2_leaving_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxRole$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_role", ((P$.StructConn$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConn$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConn$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_role"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
