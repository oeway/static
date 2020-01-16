(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReflnsShell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.ReflnsShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.ReflnsShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getMeanIOverSigIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("meanI_over_sigI_all", ((P$.ReflnsShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("meanI_over_sigI_all"));
});

Clazz.newMeth(C$, 'getMeanIOverSigIObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("meanI_over_sigI_obs", ((P$.ReflnsShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("meanI_over_sigI_obs"));
});

Clazz.newMeth(C$, 'getNumberMeasuredAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_measured_all", ((P$.ReflnsShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number_measured_all"));
});

Clazz.newMeth(C$, 'getNumberMeasuredObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_measured_obs", ((P$.ReflnsShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number_measured_obs"));
});

Clazz.newMeth(C$, 'getNumberPossible$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_possible", ((P$.ReflnsShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("number_possible"));
});

Clazz.newMeth(C$, 'getNumberUniqueAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_unique_all", ((P$.ReflnsShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("number_unique_all"));
});

Clazz.newMeth(C$, 'getNumberUniqueObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_unique_obs", ((P$.ReflnsShell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("number_unique_obs"));
});

Clazz.newMeth(C$, 'getPercentPossibleAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_possible_all", ((P$.ReflnsShell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("percent_possible_all"));
});

Clazz.newMeth(C$, 'getPercentPossibleObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_possible_obs", ((P$.ReflnsShell$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("percent_possible_obs"));
});

Clazz.newMeth(C$, 'getRmergeFAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_F_all", ((P$.ReflnsShell$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_F_all"));
});

Clazz.newMeth(C$, 'getRmergeFObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_F_obs", ((P$.ReflnsShell$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_F_obs"));
});

Clazz.newMeth(C$, 'getRmergeIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_I_all", ((P$.ReflnsShell$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_I_all"));
});

Clazz.newMeth(C$, 'getRmergeIObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_I_obs", ((P$.ReflnsShell$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_I_obs"));
});

Clazz.newMeth(C$, 'getMeanIOverSigIGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("meanI_over_sigI_gt", ((P$.ReflnsShell$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("meanI_over_sigI_gt"));
});

Clazz.newMeth(C$, 'getMeanIOverUIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("meanI_over_uI_all", ((P$.ReflnsShell$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("meanI_over_uI_all"));
});

Clazz.newMeth(C$, 'getMeanIOverUIGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("meanI_over_uI_gt", ((P$.ReflnsShell$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("meanI_over_uI_gt"));
});

Clazz.newMeth(C$, 'getNumberMeasuredGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_measured_gt", ((P$.ReflnsShell$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("number_measured_gt"));
});

Clazz.newMeth(C$, 'getNumberUniqueGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_unique_gt", ((P$.ReflnsShell$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("number_unique_gt"));
});

Clazz.newMeth(C$, 'getPercentPossibleGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_possible_gt", ((P$.ReflnsShell$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("percent_possible_gt"));
});

Clazz.newMeth(C$, 'getRmergeFGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_F_gt", ((P$.ReflnsShell$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_F_gt"));
});

Clazz.newMeth(C$, 'getRmergeIGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_I_gt", ((P$.ReflnsShell$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_I_gt"));
});

Clazz.newMeth(C$, 'getPdbxRedundancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_redundancy", ((P$.ReflnsShell$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_redundancy"));
});

Clazz.newMeth(C$, 'getPdbxRsymValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rsym_value", ((P$.ReflnsShell$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rsym_value"));
});

Clazz.newMeth(C$, 'getPdbxChiSquared$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_chi_squared", ((P$.ReflnsShell$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_chi_squared"));
});

Clazz.newMeth(C$, 'getPdbxNetIOverSigmaIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_netI_over_sigmaI_all", ((P$.ReflnsShell$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_netI_over_sigmaI_all"));
});

Clazz.newMeth(C$, 'getPdbxNetIOverSigmaIObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_netI_over_sigmaI_obs", ((P$.ReflnsShell$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_netI_over_sigmaI_obs"));
});

Clazz.newMeth(C$, 'getPdbxRrimIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rrim_I_all", ((P$.ReflnsShell$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rrim_I_all"));
});

Clazz.newMeth(C$, 'getPdbxRpimIAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rpim_I_all", ((P$.ReflnsShell$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rpim_I_all"));
});

Clazz.newMeth(C$, 'getPdbxRejects$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_rejects", ((P$.ReflnsShell$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_rejects"));
});

Clazz.newMeth(C$, 'getPdbxOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ordinal", ((P$.ReflnsShell$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ordinal"));
});

Clazz.newMeth(C$, 'getPdbxDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_diffrn_id", ((P$.ReflnsShell$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_diffrn_id"));
});

Clazz.newMeth(C$, 'getPdbxCCHalf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_CC_half", ((P$.ReflnsShell$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_CC_half"));
});

Clazz.newMeth(C$, 'getPdbxRSplit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_split", ((P$.ReflnsShell$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_split"));
});

Clazz.newMeth(C$, 'getPdbxRedundancyReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_redundancy_reflns_obs", ((P$.ReflnsShell$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_redundancy_reflns_obs"));
});

Clazz.newMeth(C$, 'getPdbxNumberAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_anomalous", ((P$.ReflnsShell$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_anomalous"));
});

Clazz.newMeth(C$, 'getPdbxRrimIAllAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rrim_I_all_anomalous", ((P$.ReflnsShell$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rrim_I_all_anomalous"));
});

Clazz.newMeth(C$, 'getPdbxRpimIAllAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rpim_I_all_anomalous", ((P$.ReflnsShell$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rpim_I_all_anomalous"));
});

Clazz.newMeth(C$, 'getPdbxRmergeIAllAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_Rmerge_I_all_anomalous", ((P$.ReflnsShell$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsShell$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsShell$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_Rmerge_I_all_anomalous"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
