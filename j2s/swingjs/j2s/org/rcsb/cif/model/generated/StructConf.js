(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructConf", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getBegLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_asym_id", ((P$.StructConf$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_asym_id"));
});

Clazz.newMeth(C$, 'getBegLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_comp_id", ((P$.StructConf$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_comp_id"));
});

Clazz.newMeth(C$, 'getBegLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_seq_id", ((P$.StructConf$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_seq_id"));
});

Clazz.newMeth(C$, 'getBegAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_asym_id", ((P$.StructConf$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_asym_id"));
});

Clazz.newMeth(C$, 'getBegAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_comp_id", ((P$.StructConf$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_comp_id"));
});

Clazz.newMeth(C$, 'getBegAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_seq_id", ((P$.StructConf$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_seq_id"));
});

Clazz.newMeth(C$, 'getConfTypeId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conf_type_id", ((P$.StructConf$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("conf_type_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructConf$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEndLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_asym_id", ((P$.StructConf$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_asym_id"));
});

Clazz.newMeth(C$, 'getEndLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_comp_id", ((P$.StructConf$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_comp_id"));
});

Clazz.newMeth(C$, 'getEndLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_seq_id", ((P$.StructConf$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_seq_id"));
});

Clazz.newMeth(C$, 'getEndAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_asym_id", ((P$.StructConf$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_asym_id"));
});

Clazz.newMeth(C$, 'getEndAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_comp_id", ((P$.StructConf$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_comp_id"));
});

Clazz.newMeth(C$, 'getEndAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_seq_id", ((P$.StructConf$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_seq_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructConf$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPdbxBegPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_beg_PDB_ins_code", ((P$.StructConf$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_beg_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxEndPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_end_PDB_ins_code", ((P$.StructConf$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_end_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPDBHelixClass$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_helix_class", ((P$.StructConf$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_helix_class"));
});

Clazz.newMeth(C$, 'getPdbxPDBHelixLength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_helix_length", ((P$.StructConf$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_helix_length"));
});

Clazz.newMeth(C$, 'getPdbxPDBHelixId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_helix_id", ((P$.StructConf$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructConf$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructConf$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_helix_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
