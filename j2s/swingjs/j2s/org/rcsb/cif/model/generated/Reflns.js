(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Reflns", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getBIsoWilsonEstimate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_iso_Wilson_estimate", ((P$.Reflns$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("B_iso_Wilson_estimate"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Reflns$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getDataReductionDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_reduction_details", ((P$.Reflns$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("data_reduction_details"));
});

Clazz.newMeth(C$, 'getDataReductionMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_reduction_method", ((P$.Reflns$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("data_reduction_method"));
});

Clazz.newMeth(C$, 'getDResolutionHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_resolution_high", ((P$.Reflns$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("d_resolution_high"));
});

Clazz.newMeth(C$, 'getDResolutionLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_resolution_low", ((P$.Reflns$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("d_resolution_low"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Reflns$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getLimitHMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_h_max", ((P$.Reflns$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("limit_h_max"));
});

Clazz.newMeth(C$, 'getLimitHMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_h_min", ((P$.Reflns$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("limit_h_min"));
});

Clazz.newMeth(C$, 'getLimitKMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_k_max", ((P$.Reflns$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("limit_k_max"));
});

Clazz.newMeth(C$, 'getLimitKMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_k_min", ((P$.Reflns$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("limit_k_min"));
});

Clazz.newMeth(C$, 'getLimitLMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_l_max", ((P$.Reflns$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("limit_l_max"));
});

Clazz.newMeth(C$, 'getLimitLMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_l_min", ((P$.Reflns$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("limit_l_min"));
});

Clazz.newMeth(C$, 'getNumberAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_all", ((P$.Reflns$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("number_all"));
});

Clazz.newMeth(C$, 'getNumberObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_obs", ((P$.Reflns$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("number_obs"));
});

Clazz.newMeth(C$, 'getObservedCriterion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion", ((P$.Reflns$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion"));
});

Clazz.newMeth(C$, 'getObservedCriterionFMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion_F_max", ((P$.Reflns$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion_F_max"));
});

Clazz.newMeth(C$, 'getObservedCriterionFMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion_F_min", ((P$.Reflns$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion_F_min"));
});

Clazz.newMeth(C$, 'getObservedCriterionIMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion_I_max", ((P$.Reflns$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion_I_max"));
});

Clazz.newMeth(C$, 'getObservedCriterionIMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion_I_min", ((P$.Reflns$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion_I_min"));
});

Clazz.newMeth(C$, 'getObservedCriterionSigmaF$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion_sigma_F", ((P$.Reflns$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion_sigma_F"));
});

Clazz.newMeth(C$, 'getObservedCriterionSigmaI$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed_criterion_sigma_I", ((P$.Reflns$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("observed_criterion_sigma_I"));
});

Clazz.newMeth(C$, 'getPercentPossibleObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_possible_obs", ((P$.Reflns$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("percent_possible_obs"));
});

Clazz.newMeth(C$, 'getRFreeDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_free_details", ((P$.Reflns$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("R_free_details"));
});

Clazz.newMeth(C$, 'getRmergeFAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_F_all", ((P$.Reflns$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_F_all"));
});

Clazz.newMeth(C$, 'getRmergeFObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_F_obs", ((P$.Reflns$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_F_obs"));
});

Clazz.newMeth(C$, 'getFriedelCoverage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Friedel_coverage", ((P$.Reflns$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("Friedel_coverage"));
});

Clazz.newMeth(C$, 'getNumberGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_gt", ((P$.Reflns$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("number_gt"));
});

Clazz.newMeth(C$, 'getThresholdExpression$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("threshold_expression", ((P$.Reflns$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("threshold_expression"));
});

Clazz.newMeth(C$, 'getPdbxRedundancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_redundancy", ((P$.Reflns$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_redundancy"));
});

Clazz.newMeth(C$, 'getPdbxRmergeIObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rmerge_I_obs", ((P$.Reflns$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rmerge_I_obs"));
});

Clazz.newMeth(C$, 'getPdbxRmergeIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rmerge_I_all", ((P$.Reflns$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rmerge_I_all"));
});

Clazz.newMeth(C$, 'getPdbxRsymValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rsym_value", ((P$.Reflns$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rsym_value"));
});

Clazz.newMeth(C$, 'getPdbxNetIOverAvSigmaI$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_netI_over_av_sigmaI", ((P$.Reflns$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_netI_over_av_sigmaI"));
});

Clazz.newMeth(C$, 'getPdbxNetIOverSigmaI$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_netI_over_sigmaI", ((P$.Reflns$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_netI_over_sigmaI"));
});

Clazz.newMeth(C$, 'getPdbxResNetIOverAvSigmaI2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_res_netI_over_av_sigmaI_2", ((P$.Reflns$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_res_netI_over_av_sigmaI_2"));
});

Clazz.newMeth(C$, 'getPdbxResNetIOverSigmaI2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_res_netI_over_sigmaI_2", ((P$.Reflns$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_res_netI_over_sigmaI_2"));
});

Clazz.newMeth(C$, 'getPdbxChiSquared$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_chi_squared", ((P$.Reflns$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_chi_squared"));
});

Clazz.newMeth(C$, 'getPdbxScalingRejects$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_scaling_rejects", ((P$.Reflns$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_scaling_rejects"));
});

Clazz.newMeth(C$, 'getPdbxDResHighOpt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_high_opt", ((P$.Reflns$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_high_opt"));
});

Clazz.newMeth(C$, 'getPdbxDResLowOpt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_low_opt", ((P$.Reflns$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_low_opt"));
});

Clazz.newMeth(C$, 'getPdbxDResOptMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_opt_method", ((P$.Reflns$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_opt_method"));
});

Clazz.newMeth(C$, 'getPhaseCalculationDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_calculation_details", ((P$.Reflns$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("phase_calculation_details"));
});

Clazz.newMeth(C$, 'getPdbxRrimIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rrim_I_all", ((P$.Reflns$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rrim_I_all"));
});

Clazz.newMeth(C$, 'getPdbxRpimIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rpim_I_all", ((P$.Reflns$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rpim_I_all"));
});

Clazz.newMeth(C$, 'getPdbxDOpt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_opt", ((P$.Reflns$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_opt"));
});

Clazz.newMeth(C$, 'getPdbxNumberMeasuredAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_measured_all", ((P$.Reflns$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_measured_all"));
});

Clazz.newMeth(C$, 'getPdbxDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_diffrn_id", ((P$.Reflns$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_diffrn_id"));
});

Clazz.newMeth(C$, 'getPdbxOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ordinal", ((P$.Reflns$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ordinal"));
});

Clazz.newMeth(C$, 'getPdbxCCHalf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_CC_half", ((P$.Reflns$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_CC_half"));
});

Clazz.newMeth(C$, 'getPdbxRSplit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_split", ((P$.Reflns$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_split"));
});

Clazz.newMeth(C$, 'getPdbxRedundancyReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_redundancy_reflns_obs", ((P$.Reflns$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_redundancy_reflns_obs"));
});

Clazz.newMeth(C$, 'getPdbxNumberAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_anomalous", ((P$.Reflns$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_anomalous"));
});

Clazz.newMeth(C$, 'getPdbxRrimIAllAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rrim_I_all_anomalous", ((P$.Reflns$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rrim_I_all_anomalous"));
});

Clazz.newMeth(C$, 'getPdbxRpimIAllAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rpim_I_all_anomalous", ((P$.Reflns$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rpim_I_all_anomalous"));
});

Clazz.newMeth(C$, 'getPdbxRmergeIAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rmerge_I_anomalous", ((P$.Reflns$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "Reflns$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Reflns$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rmerge_I_anomalous"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
