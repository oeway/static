(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxVirtualBond", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxVirtualBond$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getAtomSiteId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_1", ((P$.PdbxVirtualBond$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_1", ((P$.PdbxVirtualBond$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_1", ((P$.PdbxVirtualBond$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_1", ((P$.PdbxVirtualBond$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_1", ((P$.PdbxVirtualBond$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_1", ((P$.PdbxVirtualBond$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_2", ((P$.PdbxVirtualBond$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_2", ((P$.PdbxVirtualBond$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_2", ((P$.PdbxVirtualBond$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_2", ((P$.PdbxVirtualBond$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_2", ((P$.PdbxVirtualBond$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_2", ((P$.PdbxVirtualBond$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_1", ((P$.PdbxVirtualBond$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_1", ((P$.PdbxVirtualBond$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_1", ((P$.PdbxVirtualBond$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_1", ((P$.PdbxVirtualBond$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_2", ((P$.PdbxVirtualBond$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_2", ((P$.PdbxVirtualBond$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_2", ((P$.PdbxVirtualBond$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_2", ((P$.PdbxVirtualBond$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getDist$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist", ((P$.PdbxVirtualBond$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("dist"));
});

Clazz.newMeth(C$, 'getDistEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_esd", ((P$.PdbxVirtualBond$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("dist_esd"));
});

Clazz.newMeth(C$, 'getSiteSymmetry1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_1", ((P$.PdbxVirtualBond$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_1"));
});

Clazz.newMeth(C$, 'getSiteSymmetry2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_2", ((P$.PdbxVirtualBond$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualBond$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualBond$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_2"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
