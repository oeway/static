(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPhasingMR", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxPhasingMR$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getMethodRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method_rotation", ((P$.PdbxPhasingMR$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("method_rotation"));
});

Clazz.newMeth(C$, 'getDResHighRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high_rotation", ((P$.PdbxPhasingMR$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high_rotation"));
});

Clazz.newMeth(C$, 'getDResLowRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low_rotation", ((P$.PdbxPhasingMR$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low_rotation"));
});

Clazz.newMeth(C$, 'getSigmaFRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sigma_F_rotation", ((P$.PdbxPhasingMR$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("sigma_F_rotation"));
});

Clazz.newMeth(C$, 'getSigmaIRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sigma_I_rotation", ((P$.PdbxPhasingMR$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sigma_I_rotation"));
});

Clazz.newMeth(C$, 'getReflnsPercentRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_percent_rotation", ((P$.PdbxPhasingMR$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_percent_rotation"));
});

Clazz.newMeth(C$, 'getMethodTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method_translation", ((P$.PdbxPhasingMR$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("method_translation"));
});

Clazz.newMeth(C$, 'getDResHighTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high_translation", ((P$.PdbxPhasingMR$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high_translation"));
});

Clazz.newMeth(C$, 'getDResLowTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low_translation", ((P$.PdbxPhasingMR$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low_translation"));
});

Clazz.newMeth(C$, 'getSigmaFTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sigma_F_translation", ((P$.PdbxPhasingMR$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("sigma_F_translation"));
});

Clazz.newMeth(C$, 'getSigmaITranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sigma_I_translation", ((P$.PdbxPhasingMR$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("sigma_I_translation"));
});

Clazz.newMeth(C$, 'getReflnsPercentTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_percent_translation", ((P$.PdbxPhasingMR$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_percent_translation"));
});

Clazz.newMeth(C$, 'getCorrelationCoeffIoToIc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation_coeff_Io_to_Ic", ((P$.PdbxPhasingMR$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("correlation_coeff_Io_to_Ic"));
});

Clazz.newMeth(C$, 'getCorrelationCoeffFoToFc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation_coeff_Fo_to_Fc", ((P$.PdbxPhasingMR$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("correlation_coeff_Fo_to_Fc"));
});

Clazz.newMeth(C$, 'getRFactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor", ((P$.PdbxPhasingMR$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor"));
});

Clazz.newMeth(C$, 'getRRigidBody$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_rigid_body", ((P$.PdbxPhasingMR$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("R_rigid_body"));
});

Clazz.newMeth(C$, 'getPacking$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("packing", ((P$.PdbxPhasingMR$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("packing"));
});

Clazz.newMeth(C$, 'getModelDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_details", ((P$.PdbxPhasingMR$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("model_details"));
});

Clazz.newMeth(C$, 'getNativeSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("native_set_id", ((P$.PdbxPhasingMR$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("native_set_id"));
});

Clazz.newMeth(C$, 'getDResHighFit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high_fit", ((P$.PdbxPhasingMR$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high_fit"));
});

Clazz.newMeth(C$, 'getDResLowFit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low_fit", ((P$.PdbxPhasingMR$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low_fit"));
});

Clazz.newMeth(C$, 'getZscoreRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("zscore_rotation", ((P$.PdbxPhasingMR$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("zscore_rotation"));
});

Clazz.newMeth(C$, 'getLLGainRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("LL_gain_rotation", ((P$.PdbxPhasingMR$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("LL_gain_rotation"));
});

Clazz.newMeth(C$, 'getZscoreTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("zscore_translation", ((P$.PdbxPhasingMR$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("zscore_translation"));
});

Clazz.newMeth(C$, 'getLLGainTranslation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("LL_gain_translation", ((P$.PdbxPhasingMR$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMR$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMR$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("LL_gain_translation"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
