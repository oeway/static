(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.RefineLsRestrNcs$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getDomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dom_id", ((P$.RefineLsRestrNcs$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("dom_id"));
});

Clazz.newMeth(C$, 'getNcsModelDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ncs_model_details", ((P$.RefineLsRestrNcs$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ncs_model_details"));
});

Clazz.newMeth(C$, 'getRmsDevBIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_dev_B_iso", ((P$.RefineLsRestrNcs$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("rms_dev_B_iso"));
});

Clazz.newMeth(C$, 'getRmsDevPosition$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_dev_position", ((P$.RefineLsRestrNcs$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("rms_dev_position"));
});

Clazz.newMeth(C$, 'getWeightBIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight_B_iso", ((P$.RefineLsRestrNcs$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("weight_B_iso"));
});

Clazz.newMeth(C$, 'getWeightPosition$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight_position", ((P$.RefineLsRestrNcs$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("weight_position"));
});

Clazz.newMeth(C$, 'getPdbxOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ordinal", ((P$.RefineLsRestrNcs$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ordinal"));
});

Clazz.newMeth(C$, 'getPdbxType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_type", ((P$.RefineLsRestrNcs$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_type"));
});

Clazz.newMeth(C$, 'getPdbxAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_asym_id", ((P$.RefineLsRestrNcs$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_asym_id", ((P$.RefineLsRestrNcs$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number", ((P$.RefineLsRestrNcs$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number"));
});

Clazz.newMeth(C$, 'getPdbxRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_rms", ((P$.RefineLsRestrNcs$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_rms"));
});

Clazz.newMeth(C$, 'getPdbxWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_weight", ((P$.RefineLsRestrNcs$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_weight"));
});

Clazz.newMeth(C$, 'getPdbxEnsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ens_id", ((P$.RefineLsRestrNcs$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestrNcs$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestrNcs$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ens_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
