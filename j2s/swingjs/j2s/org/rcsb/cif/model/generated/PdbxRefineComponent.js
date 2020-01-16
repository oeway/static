(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxRefineComponent", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxRefineComponent$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.PdbxRefineComponent$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.PdbxRefineComponent$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.PdbxRefineComponent$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxRefineComponent$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.PdbxRefineComponent$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxRefineComponent$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code", ((P$.PdbxRefineComponent$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code"));
});

Clazz.newMeth(C$, 'getBIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_iso", ((P$.PdbxRefineComponent$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("B_iso"));
});

Clazz.newMeth(C$, 'getBIsoMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_iso_main_chain", ((P$.PdbxRefineComponent$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("B_iso_main_chain"));
});

Clazz.newMeth(C$, 'getBIsoSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_iso_side_chain", ((P$.PdbxRefineComponent$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("B_iso_side_chain"));
});

Clazz.newMeth(C$, 'getShift$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift", ((P$.PdbxRefineComponent$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("shift"));
});

Clazz.newMeth(C$, 'getShiftSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift_side_chain", ((P$.PdbxRefineComponent$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("shift_side_chain"));
});

Clazz.newMeth(C$, 'getShiftMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift_main_chain", ((P$.PdbxRefineComponent$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("shift_main_chain"));
});

Clazz.newMeth(C$, 'getCorrelation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation", ((P$.PdbxRefineComponent$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("correlation"));
});

Clazz.newMeth(C$, 'getCorrelationSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation_side_chain", ((P$.PdbxRefineComponent$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("correlation_side_chain"));
});

Clazz.newMeth(C$, 'getCorrelationMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation_main_chain", ((P$.PdbxRefineComponent$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("correlation_main_chain"));
});

Clazz.newMeth(C$, 'getRealSpaceR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_R", ((P$.PdbxRefineComponent$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_R"));
});

Clazz.newMeth(C$, 'getRealSpaceRSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_R_side_chain", ((P$.PdbxRefineComponent$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_R_side_chain"));
});

Clazz.newMeth(C$, 'getRealSpaceRMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_R_main_chain", ((P$.PdbxRefineComponent$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_R_main_chain"));
});

Clazz.newMeth(C$, 'getConnect$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("connect", ((P$.PdbxRefineComponent$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("connect"));
});

Clazz.newMeth(C$, 'getDensityIndex$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_index", ((P$.PdbxRefineComponent$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("density_index"));
});

Clazz.newMeth(C$, 'getDensityIndexMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_index_main_chain", ((P$.PdbxRefineComponent$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("density_index_main_chain"));
});

Clazz.newMeth(C$, 'getDensityIndexSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_index_side_chain", ((P$.PdbxRefineComponent$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("density_index_side_chain"));
});

Clazz.newMeth(C$, 'getDensityRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_ratio", ((P$.PdbxRefineComponent$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("density_ratio"));
});

Clazz.newMeth(C$, 'getDensityRatioMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_ratio_main_chain", ((P$.PdbxRefineComponent$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("density_ratio_main_chain"));
});

Clazz.newMeth(C$, 'getDensityRatioSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_ratio_side_chain", ((P$.PdbxRefineComponent$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineComponent$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineComponent$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("density_ratio_side_chain"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
