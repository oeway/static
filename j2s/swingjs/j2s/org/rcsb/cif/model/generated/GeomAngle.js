(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeomAngle", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_1", ((P$.GeomAngle$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_1", ((P$.GeomAngle$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_1", ((P$.GeomAngle$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_1", ((P$.GeomAngle$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_1", ((P$.GeomAngle$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_1", ((P$.GeomAngle$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_2", ((P$.GeomAngle$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_2", ((P$.GeomAngle$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_2", ((P$.GeomAngle$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_2", ((P$.GeomAngle$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_2", ((P$.GeomAngle$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_2", ((P$.GeomAngle$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_3", ((P$.GeomAngle$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_3", ((P$.GeomAngle$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_3", ((P$.GeomAngle$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_3", ((P$.GeomAngle$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_3", ((P$.GeomAngle$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_3", ((P$.GeomAngle$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_1", ((P$.GeomAngle$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_1", ((P$.GeomAngle$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_1", ((P$.GeomAngle$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_1", ((P$.GeomAngle$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_1"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_2", ((P$.GeomAngle$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_2", ((P$.GeomAngle$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_2", ((P$.GeomAngle$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_2", ((P$.GeomAngle$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_3", ((P$.GeomAngle$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_3", ((P$.GeomAngle$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_3", ((P$.GeomAngle$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_3"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_3", ((P$.GeomAngle$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_3"));
});

Clazz.newMeth(C$, 'getPublFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("publ_flag", ((P$.GeomAngle$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("publ_flag"));
});

Clazz.newMeth(C$, 'getSiteSymmetry1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_1", ((P$.GeomAngle$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_1"));
});

Clazz.newMeth(C$, 'getSiteSymmetry2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_2", ((P$.GeomAngle$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_2"));
});

Clazz.newMeth(C$, 'getSiteSymmetry3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_3", ((P$.GeomAngle$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_3"));
});

Clazz.newMeth(C$, 'getValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value", ((P$.GeomAngle$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("value"));
});

Clazz.newMeth(C$, 'getValueEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_esd", ((P$.GeomAngle$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("value_esd"));
});

Clazz.newMeth(C$, 'getPdbxAtomSitePDBInsCode1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_site_PDB_ins_code_1", ((P$.GeomAngle$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_site_PDB_ins_code_1"));
});

Clazz.newMeth(C$, 'getPdbxAtomSitePDBInsCode2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_site_PDB_ins_code_2", ((P$.GeomAngle$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_site_PDB_ins_code_2"));
});

Clazz.newMeth(C$, 'getPdbxAtomSitePDBInsCode3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_site_PDB_ins_code_3", ((P$.GeomAngle$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_site_PDB_ins_code_3"));
});

Clazz.newMeth(C$, 'getPdbxPDBModelNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_model_num", ((P$.GeomAngle$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomAngle$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomAngle$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_model_num"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
