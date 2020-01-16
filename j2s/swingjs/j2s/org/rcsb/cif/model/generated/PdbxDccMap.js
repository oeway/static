(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDccMap", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxDccMap$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.PdbxDccMap$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$, 'getPdbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_id", ((P$.PdbxDccMap$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_id"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxDccMap$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.PdbxDccMap$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxDccMap$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxDccMap$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_ins_code", ((P$.PdbxDccMap$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("label_ins_code"));
});

Clazz.newMeth(C$, 'getRSCC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC", ((P$.PdbxDccMap$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC"));
});

Clazz.newMeth(C$, 'getRSR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR", ((P$.PdbxDccMap$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("RSR"));
});

Clazz.newMeth(C$, 'getWeightedRSR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weighted_RSR", ((P$.PdbxDccMap$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("weighted_RSR"));
});

Clazz.newMeth(C$, 'getRSRZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSRZ", ((P$.PdbxDccMap$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("RSRZ"));
});

Clazz.newMeth(C$, 'getWeightedRSRZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weighted_RSRZ", ((P$.PdbxDccMap$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("weighted_RSRZ"));
});

Clazz.newMeth(C$, 'getBisoMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_mean", ((P$.PdbxDccMap$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_mean"));
});

Clazz.newMeth(C$, 'getOccupancyMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_mean", ((P$.PdbxDccMap$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_mean"));
});

Clazz.newMeth(C$, 'getRSCCMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_main_chain", ((P$.PdbxDccMap$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_main_chain"));
});

Clazz.newMeth(C$, 'getRSRMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_main_chain", ((P$.PdbxDccMap$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_main_chain"));
});

Clazz.newMeth(C$, 'getWRSRMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wRSR_main_chain", ((P$.PdbxDccMap$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("wRSR_main_chain"));
});

Clazz.newMeth(C$, 'getRSRZMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSRZ_main_chain", ((P$.PdbxDccMap$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("RSRZ_main_chain"));
});

Clazz.newMeth(C$, 'getWRSRZMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wRSRZ_main_chain", ((P$.PdbxDccMap$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("wRSRZ_main_chain"));
});

Clazz.newMeth(C$, 'getBisoMeanMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_mean_main_chain", ((P$.PdbxDccMap$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_mean_main_chain"));
});

Clazz.newMeth(C$, 'getOccupancyMeanMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_mean_main_chain", ((P$.PdbxDccMap$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_mean_main_chain"));
});

Clazz.newMeth(C$, 'getRSCCSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_side_chain", ((P$.PdbxDccMap$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_side_chain"));
});

Clazz.newMeth(C$, 'getRSRSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_side_chain", ((P$.PdbxDccMap$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_side_chain"));
});

Clazz.newMeth(C$, 'getWRSRSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wRSR_side_chain", ((P$.PdbxDccMap$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("wRSR_side_chain"));
});

Clazz.newMeth(C$, 'getRSRZSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSRZ_side_chain", ((P$.PdbxDccMap$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("RSRZ_side_chain"));
});

Clazz.newMeth(C$, 'getWRSRZSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wRSRZ_side_chain", ((P$.PdbxDccMap$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("wRSRZ_side_chain"));
});

Clazz.newMeth(C$, 'getBisoMeanSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_mean_side_chain", ((P$.PdbxDccMap$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_mean_side_chain"));
});

Clazz.newMeth(C$, 'getOccupancyMeanSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_mean_side_chain", ((P$.PdbxDccMap$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_mean_side_chain"));
});

Clazz.newMeth(C$, 'getRSCCPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_phosphate_group", ((P$.PdbxDccMap$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_phosphate_group"));
});

Clazz.newMeth(C$, 'getRSRPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_phosphate_group", ((P$.PdbxDccMap$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_phosphate_group"));
});

Clazz.newMeth(C$, 'getWRSRPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wRSR_phosphate_group", ((P$.PdbxDccMap$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("wRSR_phosphate_group"));
});

Clazz.newMeth(C$, 'getRSRZPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSRZ_phosphate_group", ((P$.PdbxDccMap$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("RSRZ_phosphate_group"));
});

Clazz.newMeth(C$, 'getWRSRZPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wRSRZ_phosphate_group", ((P$.PdbxDccMap$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("wRSRZ_phosphate_group"));
});

Clazz.newMeth(C$, 'getBisoMeanPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_mean_phosphate_group", ((P$.PdbxDccMap$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_mean_phosphate_group"));
});

Clazz.newMeth(C$, 'getOccupancyMeanPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_mean_phosphate_group", ((P$.PdbxDccMap$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_mean_phosphate_group"));
});

Clazz.newMeth(C$, 'getShift$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift", ((P$.PdbxDccMap$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("shift"));
});

Clazz.newMeth(C$, 'getShiftMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift_main_chain", ((P$.PdbxDccMap$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("shift_main_chain"));
});

Clazz.newMeth(C$, 'getShiftSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shift_side_chain", ((P$.PdbxDccMap$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("shift_side_chain"));
});

Clazz.newMeth(C$, 'getDensityConnectivity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_connectivity", ((P$.PdbxDccMap$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("density_connectivity"));
});

Clazz.newMeth(C$, 'getDensityIndexMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_index_main_chain", ((P$.PdbxDccMap$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("density_index_main_chain"));
});

Clazz.newMeth(C$, 'getDensityIndexSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_index_side_chain", ((P$.PdbxDccMap$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("density_index_side_chain"));
});

Clazz.newMeth(C$, 'getRSZD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZD", ((P$.PdbxDccMap$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("RSZD"));
});

Clazz.newMeth(C$, 'getRSZO$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZO", ((P$.PdbxDccMap$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("RSZO"));
});

Clazz.newMeth(C$, 'getRSZOZscore$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZO_Zscore", ((P$.PdbxDccMap$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("RSZO_Zscore"));
});

Clazz.newMeth(C$, 'getLLDF$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("LLDF", ((P$.PdbxDccMap$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("LLDF"));
});

Clazz.newMeth(C$, 'getRSZDMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZD_main_chain", ((P$.PdbxDccMap$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("RSZD_main_chain"));
});

Clazz.newMeth(C$, 'getRSZOMainChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZO_main_chain", ((P$.PdbxDccMap$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("RSZO_main_chain"));
});

Clazz.newMeth(C$, 'getRSZDSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZD_side_chain", ((P$.PdbxDccMap$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("RSZD_side_chain"));
});

Clazz.newMeth(C$, 'getRSZOSideChain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZO_side_chain", ((P$.PdbxDccMap$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("RSZO_side_chain"));
});

Clazz.newMeth(C$, 'getRSZDPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZD_phosphate_group", ((P$.PdbxDccMap$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("RSZD_phosphate_group"));
});

Clazz.newMeth(C$, 'getRSZOPhosphateGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSZO_phosphate_group", ((P$.PdbxDccMap$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("RSZO_phosphate_group"));
});

Clazz.newMeth(C$, 'getQualityIndicator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("quality_indicator", ((P$.PdbxDccMap$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccMap$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccMap$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("quality_indicator"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
