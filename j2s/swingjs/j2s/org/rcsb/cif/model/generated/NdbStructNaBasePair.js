(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getModelNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_number", ((P$.NdbStructNaBasePair$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("model_number"));
});

Clazz.newMeth(C$, 'getPairNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pair_number", ((P$.NdbStructNaBasePair$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pair_number"));
});

Clazz.newMeth(C$, 'getPairName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pair_name", ((P$.NdbStructNaBasePair$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pair_name"));
});

Clazz.newMeth(C$, 'getILabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_asym_id", ((P$.NdbStructNaBasePair$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_asym_id"));
});

Clazz.newMeth(C$, 'getILabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_comp_id", ((P$.NdbStructNaBasePair$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_comp_id"));
});

Clazz.newMeth(C$, 'getILabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_label_seq_id", ((P$.NdbStructNaBasePair$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("i_label_seq_id"));
});

Clazz.newMeth(C$, 'getISymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_symmetry", ((P$.NdbStructNaBasePair$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("i_symmetry"));
});

Clazz.newMeth(C$, 'getJLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_asym_id", ((P$.NdbStructNaBasePair$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_asym_id"));
});

Clazz.newMeth(C$, 'getJLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_comp_id", ((P$.NdbStructNaBasePair$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_comp_id"));
});

Clazz.newMeth(C$, 'getJLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_label_seq_id", ((P$.NdbStructNaBasePair$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("j_label_seq_id"));
});

Clazz.newMeth(C$, 'getJSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_symmetry", ((P$.NdbStructNaBasePair$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("j_symmetry"));
});

Clazz.newMeth(C$, 'getIAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_auth_asym_id", ((P$.NdbStructNaBasePair$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("i_auth_asym_id"));
});

Clazz.newMeth(C$, 'getIAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_auth_seq_id", ((P$.NdbStructNaBasePair$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("i_auth_seq_id"));
});

Clazz.newMeth(C$, 'getIPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("i_PDB_ins_code", ((P$.NdbStructNaBasePair$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("i_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getJAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_auth_asym_id", ((P$.NdbStructNaBasePair$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("j_auth_asym_id"));
});

Clazz.newMeth(C$, 'getJAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_auth_seq_id", ((P$.NdbStructNaBasePair$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("j_auth_seq_id"));
});

Clazz.newMeth(C$, 'getJPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("j_PDB_ins_code", ((P$.NdbStructNaBasePair$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("j_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getShear$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shear", ((P$.NdbStructNaBasePair$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("shear"));
});

Clazz.newMeth(C$, 'getStretch$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("stretch", ((P$.NdbStructNaBasePair$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("stretch"));
});

Clazz.newMeth(C$, 'getStagger$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("stagger", ((P$.NdbStructNaBasePair$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("stagger"));
});

Clazz.newMeth(C$, 'getBuckle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("buckle", ((P$.NdbStructNaBasePair$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("buckle"));
});

Clazz.newMeth(C$, 'getPropeller$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("propeller", ((P$.NdbStructNaBasePair$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("propeller"));
});

Clazz.newMeth(C$, 'getOpening$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("opening", ((P$.NdbStructNaBasePair$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("opening"));
});

Clazz.newMeth(C$, 'getHbondType12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hbond_type_12", ((P$.NdbStructNaBasePair$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("hbond_type_12"));
});

Clazz.newMeth(C$, 'getHbondType28$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hbond_type_28", ((P$.NdbStructNaBasePair$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "NdbStructNaBasePair$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.NdbStructNaBasePair$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("hbond_type_28"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
