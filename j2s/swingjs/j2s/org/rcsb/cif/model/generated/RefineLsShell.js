(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RefineLsShell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPdbxRefineId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.RefineLsShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.RefineLsShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.RefineLsShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getNumberReflnsAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_all", ((P$.RefineLsShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_all"));
});

Clazz.newMeth(C$, 'getNumberReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_obs", ((P$.RefineLsShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_obs"));
});

Clazz.newMeth(C$, 'getNumberReflnsRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_R_free", ((P$.RefineLsShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_R_free"));
});

Clazz.newMeth(C$, 'getNumberReflnsRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_R_work", ((P$.RefineLsShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_R_work"));
});

Clazz.newMeth(C$, 'getPercentReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_reflns_obs", ((P$.RefineLsShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("percent_reflns_obs"));
});

Clazz.newMeth(C$, 'getPercentReflnsRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_reflns_R_free", ((P$.RefineLsShell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("percent_reflns_R_free"));
});

Clazz.newMeth(C$, 'getRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all", ((P$.RefineLsShell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all"));
});

Clazz.newMeth(C$, 'getRFactorObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_obs", ((P$.RefineLsShell$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_obs"));
});

Clazz.newMeth(C$, 'getRFactorRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_R_free", ((P$.RefineLsShell$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_R_free"));
});

Clazz.newMeth(C$, 'getRFactorRFreeError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_R_free_error", ((P$.RefineLsShell$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_R_free_error"));
});

Clazz.newMeth(C$, 'getRFactorRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_R_work", ((P$.RefineLsShell$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_R_work"));
});

Clazz.newMeth(C$, 'getRedundancyReflnsAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("redundancy_reflns_all", ((P$.RefineLsShell$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("redundancy_reflns_all"));
});

Clazz.newMeth(C$, 'getRedundancyReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("redundancy_reflns_obs", ((P$.RefineLsShell$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("redundancy_reflns_obs"));
});

Clazz.newMeth(C$, 'getWRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wR_factor_all", ((P$.RefineLsShell$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("wR_factor_all"));
});

Clazz.newMeth(C$, 'getWRFactorObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wR_factor_obs", ((P$.RefineLsShell$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("wR_factor_obs"));
});

Clazz.newMeth(C$, 'getWRFactorRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wR_factor_R_free", ((P$.RefineLsShell$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("wR_factor_R_free"));
});

Clazz.newMeth(C$, 'getWRFactorRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wR_factor_R_work", ((P$.RefineLsShell$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("wR_factor_R_work"));
});

Clazz.newMeth(C$, 'getPdbxTotalNumberOfBinsUsed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_total_number_of_bins_used", ((P$.RefineLsShell$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_total_number_of_bins_used"));
});

Clazz.newMeth(C$, 'getPdbxPhaseError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_phase_error", ((P$.RefineLsShell$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_phase_error"));
});

Clazz.newMeth(C$, 'getPdbxFscWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fsc_work", ((P$.RefineLsShell$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fsc_work"));
});

Clazz.newMeth(C$, 'getPdbxFscFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fsc_free", ((P$.RefineLsShell$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsShell$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsShell$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fsc_free"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
