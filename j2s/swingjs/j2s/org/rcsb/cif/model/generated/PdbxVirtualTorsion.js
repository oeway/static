(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxVirtualTorsion$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getAtomSiteId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_1", ((P$.PdbxVirtualTorsion$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_1", ((P$.PdbxVirtualTorsion$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_1", ((P$.PdbxVirtualTorsion$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_1", ((P$.PdbxVirtualTorsion$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_1", ((P$.PdbxVirtualTorsion$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_1", ((P$.PdbxVirtualTorsion$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_2", ((P$.PdbxVirtualTorsion$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_2", ((P$.PdbxVirtualTorsion$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_2", ((P$.PdbxVirtualTorsion$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_2", ((P$.PdbxVirtualTorsion$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_2", ((P$.PdbxVirtualTorsion$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_2", ((P$.PdbxVirtualTorsion$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_3", ((P$.PdbxVirtualTorsion$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_3", ((P$.PdbxVirtualTorsion$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_3", ((P$.PdbxVirtualTorsion$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_3", ((P$.PdbxVirtualTorsion$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_3", ((P$.PdbxVirtualTorsion$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_3", ((P$.PdbxVirtualTorsion$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_4", ((P$.PdbxVirtualTorsion$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_4", ((P$.PdbxVirtualTorsion$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_4", ((P$.PdbxVirtualTorsion$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_4", ((P$.PdbxVirtualTorsion$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_4", ((P$.PdbxVirtualTorsion$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_4", ((P$.PdbxVirtualTorsion$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_1", ((P$.PdbxVirtualTorsion$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_1", ((P$.PdbxVirtualTorsion$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_1", ((P$.PdbxVirtualTorsion$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_1", ((P$.PdbxVirtualTorsion$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_2", ((P$.PdbxVirtualTorsion$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_2", ((P$.PdbxVirtualTorsion$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_2", ((P$.PdbxVirtualTorsion$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_2", ((P$.PdbxVirtualTorsion$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_3", ((P$.PdbxVirtualTorsion$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_3", ((P$.PdbxVirtualTorsion$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_3", ((P$.PdbxVirtualTorsion$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_3", ((P$.PdbxVirtualTorsion$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_4", ((P$.PdbxVirtualTorsion$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_4", ((P$.PdbxVirtualTorsion$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_4", ((P$.PdbxVirtualTorsion$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_4"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_4", ((P$.PdbxVirtualTorsion$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_4"));
});

Clazz.newMeth(C$, 'getSiteSymmetry1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_1", ((P$.PdbxVirtualTorsion$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_1"));
});

Clazz.newMeth(C$, 'getSiteSymmetry2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_2", ((P$.PdbxVirtualTorsion$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_2"));
});

Clazz.newMeth(C$, 'getSiteSymmetry3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_3", ((P$.PdbxVirtualTorsion$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_3"));
});

Clazz.newMeth(C$, 'getSiteSymmetry4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_4", ((P$.PdbxVirtualTorsion$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_4"));
});

Clazz.newMeth(C$, 'getValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value", ((P$.PdbxVirtualTorsion$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("value"));
});

Clazz.newMeth(C$, 'getValueEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_esd", ((P$.PdbxVirtualTorsion$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxVirtualTorsion$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxVirtualTorsion$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("value_esd"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
