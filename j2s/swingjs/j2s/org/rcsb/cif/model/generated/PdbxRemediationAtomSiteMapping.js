(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxRemediationAtomSiteMapping$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getGroupPDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_PDB", ((P$.PdbxRemediationAtomSiteMapping$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("group_PDB"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxRemediationAtomSiteMapping$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.PdbxRemediationAtomSiteMapping$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id", ((P$.PdbxRemediationAtomSiteMapping$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.PdbxRemediationAtomSiteMapping$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.PdbxRemediationAtomSiteMapping$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getPdbxAlign$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_align", ((P$.PdbxRemediationAtomSiteMapping$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_align"));
});

Clazz.newMeth(C$, 'getPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code", ((P$.PdbxRemediationAtomSiteMapping$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPreAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_asym_id", ((P$.PdbxRemediationAtomSiteMapping$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPreAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_atom_id", ((P$.PdbxRemediationAtomSiteMapping$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPreAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_comp_id", ((P$.PdbxRemediationAtomSiteMapping$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPreAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_seq_id", ((P$.PdbxRemediationAtomSiteMapping$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPrePDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_PDB_ins_code", ((P$.PdbxRemediationAtomSiteMapping$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pre_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPreGroupPDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_group_PDB", ((P$.PdbxRemediationAtomSiteMapping$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pre_group_PDB"));
});

Clazz.newMeth(C$, 'getPreAuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_auth_alt_id", ((P$.PdbxRemediationAtomSiteMapping$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pre_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPrePdbxAlign$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_pdbx_align", ((P$.PdbxRemediationAtomSiteMapping$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pre_pdbx_align"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxRemediationAtomSiteMapping$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id", ((P$.PdbxRemediationAtomSiteMapping$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.PdbxRemediationAtomSiteMapping$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxRemediationAtomSiteMapping$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getAuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_alt_id", ((P$.PdbxRemediationAtomSiteMapping$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("auth_alt_id"));
});

Clazz.newMeth(C$, 'getOccupancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy", ((P$.PdbxRemediationAtomSiteMapping$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy"));
});

Clazz.newMeth(C$, 'getPreOccupancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pre_occupancy", ((P$.PdbxRemediationAtomSiteMapping$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRemediationAtomSiteMapping$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRemediationAtomSiteMapping$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pre_occupancy"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
