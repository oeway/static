(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeomHbond", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAngleDHA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_DHA", ((P$.GeomHbond$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("angle_DHA"));
});

Clazz.newMeth(C$, 'getAngleDHAEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_DHA_esd", ((P$.GeomHbond$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("angle_DHA_esd"));
});

Clazz.newMeth(C$, 'getAtomSiteIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_A", ((P$.GeomHbond$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_A", ((P$.GeomHbond$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_A", ((P$.GeomHbond$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_A", ((P$.GeomHbond$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_A", ((P$.GeomHbond$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_A", ((P$.GeomHbond$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_D", ((P$.GeomHbond$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_D", ((P$.GeomHbond$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_D", ((P$.GeomHbond$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_D", ((P$.GeomHbond$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_D", ((P$.GeomHbond$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_D", ((P$.GeomHbond$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_id_H", ((P$.GeomHbond$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAltIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_alt_id_H", ((P$.GeomHbond$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_alt_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAsymIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_asym_id_H", ((P$.GeomHbond$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_asym_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelAtomIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_atom_id_H", ((P$.GeomHbond$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_atom_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelCompIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_comp_id_H", ((P$.GeomHbond$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_comp_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteLabelSeqIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_label_seq_id_H", ((P$.GeomHbond$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_label_seq_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_A", ((P$.GeomHbond$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_A", ((P$.GeomHbond$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_A", ((P$.GeomHbond$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqIdA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_A", ((P$.GeomHbond$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_A"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_D", ((P$.GeomHbond$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_D", ((P$.GeomHbond$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_D", ((P$.GeomHbond$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqIdD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_D", ((P$.GeomHbond$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_D"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAsymIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_asym_id_H", ((P$.GeomHbond$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_asym_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthAtomIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_atom_id_H", ((P$.GeomHbond$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_atom_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthCompIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_comp_id_H", ((P$.GeomHbond$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_comp_id_H"));
});

Clazz.newMeth(C$, 'getAtomSiteAuthSeqIdH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_site_auth_seq_id_H", ((P$.GeomHbond$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("atom_site_auth_seq_id_H"));
});

Clazz.newMeth(C$, 'getDistDA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_DA", ((P$.GeomHbond$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("dist_DA"));
});

Clazz.newMeth(C$, 'getDistDAEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_DA_esd", ((P$.GeomHbond$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("dist_DA_esd"));
});

Clazz.newMeth(C$, 'getDistDH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_DH", ((P$.GeomHbond$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("dist_DH"));
});

Clazz.newMeth(C$, 'getDistDHEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_DH_esd", ((P$.GeomHbond$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("dist_DH_esd"));
});

Clazz.newMeth(C$, 'getDistHA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_HA", ((P$.GeomHbond$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("dist_HA"));
});

Clazz.newMeth(C$, 'getDistHAEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dist_HA_esd", ((P$.GeomHbond$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("dist_HA_esd"));
});

Clazz.newMeth(C$, 'getPublFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("publ_flag", ((P$.GeomHbond$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("publ_flag"));
});

Clazz.newMeth(C$, 'getSiteSymmetryA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_A", ((P$.GeomHbond$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_A"));
});

Clazz.newMeth(C$, 'getSiteSymmetryD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_D", ((P$.GeomHbond$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_D"));
});

Clazz.newMeth(C$, 'getSiteSymmetryH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_symmetry_H", ((P$.GeomHbond$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "GeomHbond$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.GeomHbond$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("site_symmetry_H"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
