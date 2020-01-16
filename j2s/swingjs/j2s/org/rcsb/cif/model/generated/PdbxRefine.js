(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxRefine", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxRefine$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getPdbxRefineId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.PdbxRefine$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getRFactorAllNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all_no_cutoff", ((P$.PdbxRefine$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all_no_cutoff"));
});

Clazz.newMeth(C$, 'getRFactorObsNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_obs_no_cutoff", ((P$.PdbxRefine$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_obs_no_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRFactor4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_factor_4sig_cutoff", ((P$.PdbxRefine$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_factor_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRFactorNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_factor_no_cutoff", ((P$.PdbxRefine$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_factor_no_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRErrorNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_error_no_cutoff", ((P$.PdbxRefine$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_error_no_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRValTestSetSizePercNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_val_test_set_size_perc_no_cutoff", ((P$.PdbxRefine$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_val_test_set_size_perc_no_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRValTestSetCtNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_val_test_set_ct_no_cutoff", ((P$.PdbxRefine$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_val_test_set_ct_no_cutoff"));
});

Clazz.newMeth(C$, 'getNumberReflnsObsNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_obs_no_cutoff", ((P$.PdbxRefine$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_obs_no_cutoff"));
});

Clazz.newMeth(C$, 'getRFactorAll4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all_4sig_cutoff", ((P$.PdbxRefine$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getRFactorObs4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_obs_4sig_cutoff", ((P$.PdbxRefine$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_obs_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRVal4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_val_4sig_cutoff", ((P$.PdbxRefine$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_val_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRValTestSetSizePerc4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_val_test_set_size_perc_4sig_cutoff", ((P$.PdbxRefine$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_val_test_set_size_perc_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRValTestSetCt4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_val_test_set_ct_4sig_cutoff", ((P$.PdbxRefine$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_val_test_set_ct_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getNumberReflnsObs4sigCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_obs_4sig_cutoff", ((P$.PdbxRefine$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_obs_4sig_cutoff"));
});

Clazz.newMeth(C$, 'getFreeRValNoCutoff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_R_val_no_cutoff", ((P$.PdbxRefine$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefine$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefine$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("free_R_val_no_cutoff"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
