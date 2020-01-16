(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnReflns", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAvREquivalents$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("av_R_equivalents", ((P$.DiffrnReflns$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("av_R_equivalents"));
});

Clazz.newMeth(C$, 'getAvSigmaIOverNetI$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("av_sigmaI_over_netI", ((P$.DiffrnReflns$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("av_sigmaI_over_netI"));
});

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnReflns$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getLimitHMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_h_max", ((P$.DiffrnReflns$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("limit_h_max"));
});

Clazz.newMeth(C$, 'getLimitHMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_h_min", ((P$.DiffrnReflns$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("limit_h_min"));
});

Clazz.newMeth(C$, 'getLimitKMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_k_max", ((P$.DiffrnReflns$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("limit_k_max"));
});

Clazz.newMeth(C$, 'getLimitKMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_k_min", ((P$.DiffrnReflns$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("limit_k_min"));
});

Clazz.newMeth(C$, 'getLimitLMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_l_max", ((P$.DiffrnReflns$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("limit_l_max"));
});

Clazz.newMeth(C$, 'getLimitLMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_l_min", ((P$.DiffrnReflns$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("limit_l_min"));
});

Clazz.newMeth(C$, 'getNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number", ((P$.DiffrnReflns$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("number"));
});

Clazz.newMeth(C$, 'getReductionProcess$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reduction_process", ((P$.DiffrnReflns$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("reduction_process"));
});

Clazz.newMeth(C$, 'getThetaMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("theta_max", ((P$.DiffrnReflns$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("theta_max"));
});

Clazz.newMeth(C$, 'getThetaMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("theta_min", ((P$.DiffrnReflns$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("theta_min"));
});

Clazz.newMeth(C$, 'getTransfMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[1][1]", ((P$.DiffrnReflns$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getTransfMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[1][2]", ((P$.DiffrnReflns$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getTransfMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[1][3]", ((P$.DiffrnReflns$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getTransfMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[2][1]", ((P$.DiffrnReflns$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getTransfMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[2][2]", ((P$.DiffrnReflns$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getTransfMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[2][3]", ((P$.DiffrnReflns$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getTransfMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[3][1]", ((P$.DiffrnReflns$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getTransfMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[3][2]", ((P$.DiffrnReflns$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getTransfMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transf_matrix[3][3]", ((P$.DiffrnReflns$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("transf_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getAvUnetI_netI$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("av_unetI/netI", ((P$.DiffrnReflns$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("av_unetI/netI"));
});

Clazz.newMeth(C$, 'getPdbxDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_low", ((P$.DiffrnReflns$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_low"));
});

Clazz.newMeth(C$, 'getPdbxDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_high", ((P$.DiffrnReflns$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_high"));
});

Clazz.newMeth(C$, 'getPdbxPercentPossibleObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_percent_possible_obs", ((P$.DiffrnReflns$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_percent_possible_obs"));
});

Clazz.newMeth(C$, 'getPdbxRmergeIObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rmerge_I_obs", ((P$.DiffrnReflns$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rmerge_I_obs"));
});

Clazz.newMeth(C$, 'getPdbxRsymValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rsym_value", ((P$.DiffrnReflns$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rsym_value"));
});

Clazz.newMeth(C$, 'getPdbxChiSquared$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_chi_squared", ((P$.DiffrnReflns$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_chi_squared"));
});

Clazz.newMeth(C$, 'getPdbxRedundancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_redundancy", ((P$.DiffrnReflns$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_redundancy"));
});

Clazz.newMeth(C$, 'getPdbxRejects$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_rejects", ((P$.DiffrnReflns$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_rejects"));
});

Clazz.newMeth(C$, 'getPdbxObservedCriterion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_observed_criterion", ((P$.DiffrnReflns$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_observed_criterion"));
});

Clazz.newMeth(C$, 'getPdbxNumberObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_obs", ((P$.DiffrnReflns$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnReflns$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnReflns$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_obs"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
