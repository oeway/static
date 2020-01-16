(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RefineAnalyze", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.RefineAnalyze$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getPdbxRefineId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.RefineAnalyze$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getLuzzatiCoordinateErrorFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_coordinate_error_free", ((P$.RefineAnalyze$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_coordinate_error_free"));
});

Clazz.newMeth(C$, 'getLuzzatiCoordinateErrorObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_coordinate_error_obs", ((P$.RefineAnalyze$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_coordinate_error_obs"));
});

Clazz.newMeth(C$, 'getLuzzatiDResLowFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_d_res_low_free", ((P$.RefineAnalyze$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_d_res_low_free"));
});

Clazz.newMeth(C$, 'getLuzzatiDResLowObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_d_res_low_obs", ((P$.RefineAnalyze$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_d_res_low_obs"));
});

Clazz.newMeth(C$, 'getLuzzatiSigmaAFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_sigma_a_free", ((P$.RefineAnalyze$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_sigma_a_free"));
});

Clazz.newMeth(C$, 'getLuzzatiSigmaAFreeDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_sigma_a_free_details", ((P$.RefineAnalyze$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_sigma_a_free_details"));
});

Clazz.newMeth(C$, 'getLuzzatiSigmaAObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_sigma_a_obs", ((P$.RefineAnalyze$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_sigma_a_obs"));
});

Clazz.newMeth(C$, 'getLuzzatiSigmaAObsDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Luzzati_sigma_a_obs_details", ((P$.RefineAnalyze$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("Luzzati_sigma_a_obs_details"));
});

Clazz.newMeth(C$, 'getNumberDisorderedResidues$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_disordered_residues", ((P$.RefineAnalyze$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("number_disordered_residues"));
});

Clazz.newMeth(C$, 'getOccupancySumHydrogen$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_sum_hydrogen", ((P$.RefineAnalyze$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_sum_hydrogen"));
});

Clazz.newMeth(C$, 'getOccupancySumNonHydrogen$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_sum_non_hydrogen", ((P$.RefineAnalyze$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_sum_non_hydrogen"));
});

Clazz.newMeth(C$, 'getRGDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RG_d_res_high", ((P$.RefineAnalyze$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("RG_d_res_high"));
});

Clazz.newMeth(C$, 'getRGDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RG_d_res_low", ((P$.RefineAnalyze$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("RG_d_res_low"));
});

Clazz.newMeth(C$, 'getRGFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RG_free", ((P$.RefineAnalyze$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("RG_free"));
});

Clazz.newMeth(C$, 'getRGWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RG_work", ((P$.RefineAnalyze$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("RG_work"));
});

Clazz.newMeth(C$, 'getRGFreeWorkRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RG_free_work_ratio", ((P$.RefineAnalyze$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("RG_free_work_ratio"));
});

Clazz.newMeth(C$, 'getPdbxLuzzatiDResHighObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Luzzati_d_res_high_obs", ((P$.RefineAnalyze$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineAnalyze$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineAnalyze$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Luzzati_d_res_high_obs"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
