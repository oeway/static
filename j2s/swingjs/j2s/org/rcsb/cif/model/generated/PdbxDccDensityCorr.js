(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxDccDensityCorr$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getProgram$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("program", ((P$.PdbxDccDensityCorr$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("program"));
});

Clazz.newMeth(C$, 'getLsDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_d_res_high", ((P$.PdbxDccDensityCorr$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ls_d_res_high"));
});

Clazz.newMeth(C$, 'getLsDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_d_res_low", ((P$.PdbxDccDensityCorr$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ls_d_res_low"));
});

Clazz.newMeth(C$, 'getLsRFactorRAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_R_factor_R_all", ((P$.PdbxDccDensityCorr$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ls_R_factor_R_all"));
});

Clazz.newMeth(C$, 'getLsRFactorRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_R_factor_R_work", ((P$.PdbxDccDensityCorr$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ls_R_factor_R_work"));
});

Clazz.newMeth(C$, 'getLsRFactorRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_R_factor_R_free", ((P$.PdbxDccDensityCorr$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ls_R_factor_R_free"));
});

Clazz.newMeth(C$, 'getLsNumberReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_number_reflns_obs", ((P$.PdbxDccDensityCorr$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ls_number_reflns_obs"));
});

Clazz.newMeth(C$, 'getLsPercentReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_percent_reflns_obs", ((P$.PdbxDccDensityCorr$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ls_percent_reflns_obs"));
});

Clazz.newMeth(C$, 'getLsNumberReflnsRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_number_reflns_R_free", ((P$.PdbxDccDensityCorr$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ls_number_reflns_R_free"));
});

Clazz.newMeth(C$, 'getCorrelationCoeffFoToFc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation_coeff_Fo_to_Fc", ((P$.PdbxDccDensityCorr$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("correlation_coeff_Fo_to_Fc"));
});

Clazz.newMeth(C$, 'getRealSpaceR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_R", ((P$.PdbxDccDensityCorr$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_R"));
});

Clazz.newMeth(C$, 'getCorrelation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation", ((P$.PdbxDccDensityCorr$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("correlation"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxDccDensityCorr$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensityCorr$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensityCorr$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
