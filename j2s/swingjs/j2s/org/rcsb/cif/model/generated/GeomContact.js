(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeomContact", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAtomSiteId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_1", ((P$.GeomContact$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_1", ((P$.GeomContact$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_1", ((P$.GeomContact$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_1", ((P$.GeomContact$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_1", ((P$.GeomContact$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_1", ((P$.GeomContact$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_2", ((P$.GeomContact$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_2", ((P$.GeomContact$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_2", ((P$.GeomContact$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_2", ((P$.GeomContact$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_2", ((P$.GeomContact$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_2", ((P$.GeomContact$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_1", ((P$.GeomContact$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_1", ((P$.GeomContact$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_1", ((P$.GeomContact$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_1", ((P$.GeomContact$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_2", ((P$.GeomContact$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_2", ((P$.GeomContact$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_2", ((P$.GeomContact$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_2", ((P$.GeomContact$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getDist$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist", ((P$.GeomContact$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("dist"));
});

Clazz.newMeth(C$, 'getDistEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_esd", ((P$.GeomContact$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("dist_esd"));
});

Clazz.newMeth(C$, 'getPublFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("publ_flag", ((P$.GeomContact$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("publ_flag"));
});

Clazz.newMeth(C$, 'getSiteSymmetry1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_1", ((P$.GeomContact$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_1"));
});

Clazz.newMeth(C$, 'getSiteSymmetry2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_2", ((P$.GeomContact$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_2"));
});

Clazz.newMeth(C$, 'getPdbxAtomSitePDBInsCode1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_site_PDB_ins_code_1", ((P$.GeomContact$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_site_PDB_ins_code_1"));
});

Clazz.newMeth(C$, 'getPdbxAtomSitePDBInsCode2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_site_PDB_ins_code_2", ((P$.GeomContact$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_site_PDB_ins_code_2"));
});

Clazz.newMeth(C$, 'getPdbxPDBModelNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_model_num", ((P$.GeomContact$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomContact$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomContact$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_model_num"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
