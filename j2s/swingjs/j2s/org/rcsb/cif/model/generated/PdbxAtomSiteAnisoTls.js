(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxAtomSiteAnisoTls$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_symbol", ((P$.PdbxAtomSiteAnisoTls$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("type_symbol"));
});

Clazz.newMeth(C$, 'getTlsGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tls_group_id", ((P$.PdbxAtomSiteAnisoTls$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("tls_group_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.PdbxAtomSiteAnisoTls$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxAtomSiteAnisoTls$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id", ((P$.PdbxAtomSiteAnisoTls$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxAtomSiteAnisoTls$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code", ((P$.PdbxAtomSiteAnisoTls$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxAtomSiteAnisoTls$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.PdbxAtomSiteAnisoTls$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id", ((P$.PdbxAtomSiteAnisoTls$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.PdbxAtomSiteAnisoTls$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.PdbxAtomSiteAnisoTls$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getUTls11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_tls[1][1]", ((P$.PdbxAtomSiteAnisoTls$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("U_tls[1][1]"));
});

Clazz.newMeth(C$, 'getUTls22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_tls[2][2]", ((P$.PdbxAtomSiteAnisoTls$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("U_tls[2][2]"));
});

Clazz.newMeth(C$, 'getUTls33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_tls[3][3]", ((P$.PdbxAtomSiteAnisoTls$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("U_tls[3][3]"));
});

Clazz.newMeth(C$, 'getUTls12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_tls[1][2]", ((P$.PdbxAtomSiteAnisoTls$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("U_tls[1][2]"));
});

Clazz.newMeth(C$, 'getUTls13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_tls[1][3]", ((P$.PdbxAtomSiteAnisoTls$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("U_tls[1][3]"));
});

Clazz.newMeth(C$, 'getUTls23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_tls[2][3]", ((P$.PdbxAtomSiteAnisoTls$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxAtomSiteAnisoTls$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxAtomSiteAnisoTls$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("U_tls[2][3]"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
