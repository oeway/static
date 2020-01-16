(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructMonNucl", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAlpha$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alpha", ((P$.StructMonNucl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("alpha"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.StructMonNucl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.StructMonNucl$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.StructMonNucl$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getBeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beta", ((P$.StructMonNucl$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("beta"));
});

Clazz.newMeth(C$, 'getChi1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chi1", ((P$.StructMonNucl$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("chi1"));
});

Clazz.newMeth(C$, 'getChi2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chi2", ((P$.StructMonNucl$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("chi2"));
});

Clazz.newMeth(C$, 'getDelta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta", ((P$.StructMonNucl$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("delta"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructMonNucl$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEpsilon$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("epsilon", ((P$.StructMonNucl$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("epsilon"));
});

Clazz.newMeth(C$, 'getGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gamma", ((P$.StructMonNucl$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("gamma"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.StructMonNucl$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.StructMonNucl$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.StructMonNucl$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.StructMonNucl$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getMeanBAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_B_all", ((P$.StructMonNucl$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("mean_B_all"));
});

Clazz.newMeth(C$, 'getMeanBBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_B_base", ((P$.StructMonNucl$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("mean_B_base"));
});

Clazz.newMeth(C$, 'getMeanBPhos$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_B_phos", ((P$.StructMonNucl$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("mean_B_phos"));
});

Clazz.newMeth(C$, 'getMeanBSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_B_sugar", ((P$.StructMonNucl$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("mean_B_sugar"));
});

Clazz.newMeth(C$, 'getNu0$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nu0", ((P$.StructMonNucl$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("nu0"));
});

Clazz.newMeth(C$, 'getNu1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nu1", ((P$.StructMonNucl$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("nu1"));
});

Clazz.newMeth(C$, 'getNu2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nu2", ((P$.StructMonNucl$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("nu2"));
});

Clazz.newMeth(C$, 'getNu3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nu3", ((P$.StructMonNucl$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("nu3"));
});

Clazz.newMeth(C$, 'getNu4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nu4", ((P$.StructMonNucl$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("nu4"));
});

Clazz.newMeth(C$, 'getP$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("P", ((P$.StructMonNucl$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("P"));
});

Clazz.newMeth(C$, 'getRSCCAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_all", ((P$.StructMonNucl$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_all"));
});

Clazz.newMeth(C$, 'getRSCCBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_base", ((P$.StructMonNucl$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_base"));
});

Clazz.newMeth(C$, 'getRSCCPhos$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_phos", ((P$.StructMonNucl$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_phos"));
});

Clazz.newMeth(C$, 'getRSCCSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSCC_sugar", ((P$.StructMonNucl$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("RSCC_sugar"));
});

Clazz.newMeth(C$, 'getRSRAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_all", ((P$.StructMonNucl$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_all"));
});

Clazz.newMeth(C$, 'getRSRBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_base", ((P$.StructMonNucl$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_base"));
});

Clazz.newMeth(C$, 'getRSRPhos$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_phos", ((P$.StructMonNucl$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_phos"));
});

Clazz.newMeth(C$, 'getRSRSugar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("RSR_sugar", ((P$.StructMonNucl$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("RSR_sugar"));
});

Clazz.newMeth(C$, 'getTau0$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tau0", ((P$.StructMonNucl$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("tau0"));
});

Clazz.newMeth(C$, 'getTau1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tau1", ((P$.StructMonNucl$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("tau1"));
});

Clazz.newMeth(C$, 'getTau2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tau2", ((P$.StructMonNucl$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("tau2"));
});

Clazz.newMeth(C$, 'getTau3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tau3", ((P$.StructMonNucl$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("tau3"));
});

Clazz.newMeth(C$, 'getTau4$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tau4", ((P$.StructMonNucl$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("tau4"));
});

Clazz.newMeth(C$, 'getTaum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("taum", ((P$.StructMonNucl$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("taum"));
});

Clazz.newMeth(C$, 'getZeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("zeta", ((P$.StructMonNucl$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructMonNucl$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructMonNucl$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("zeta"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
