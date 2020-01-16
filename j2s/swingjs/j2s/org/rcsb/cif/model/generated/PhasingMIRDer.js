(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMIRDer", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PhasingMIRDer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PhasingMIRDer$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getDerSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("der_set_id", ((P$.PhasingMIRDer$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("der_set_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PhasingMIRDer$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PhasingMIRDer$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getNativeSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("native_set_id", ((P$.PhasingMIRDer$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("native_set_id"));
});

Clazz.newMeth(C$, 'getNumberOfSites$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_of_sites", ((P$.PhasingMIRDer$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("number_of_sites"));
});

Clazz.newMeth(C$, 'getPowerAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power_acentric", ((P$.PhasingMIRDer$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("power_acentric"));
});

Clazz.newMeth(C$, 'getPowerCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power_centric", ((P$.PhasingMIRDer$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("power_centric"));
});

Clazz.newMeth(C$, 'getRCullisAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis_acentric", ((P$.PhasingMIRDer$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis_acentric"));
});

Clazz.newMeth(C$, 'getRCullisAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis_anomalous", ((P$.PhasingMIRDer$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis_anomalous"));
});

Clazz.newMeth(C$, 'getRCullisCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis_centric", ((P$.PhasingMIRDer$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis_centric"));
});

Clazz.newMeth(C$, 'getReflnsAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_acentric", ((P$.PhasingMIRDer$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_acentric"));
});

Clazz.newMeth(C$, 'getReflnsAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_anomalous", ((P$.PhasingMIRDer$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_anomalous"));
});

Clazz.newMeth(C$, 'getReflnsCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_centric", ((P$.PhasingMIRDer$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_centric"));
});

Clazz.newMeth(C$, 'getReflnsCriteria$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_criteria", ((P$.PhasingMIRDer$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_criteria"));
});

Clazz.newMeth(C$, 'getPdbxRKrautCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut_centric", ((P$.PhasingMIRDer$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut_centric"));
});

Clazz.newMeth(C$, 'getPdbxRKrautAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut_acentric", ((P$.PhasingMIRDer$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut_acentric"));
});

Clazz.newMeth(C$, 'getPdbxRKraut$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut", ((P$.PhasingMIRDer$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut"));
});

Clazz.newMeth(C$, 'getPdbxLocCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc_centric", ((P$.PhasingMIRDer$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc_centric"));
});

Clazz.newMeth(C$, 'getPdbxLocAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc_acentric", ((P$.PhasingMIRDer$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc_acentric"));
});

Clazz.newMeth(C$, 'getPdbxLoc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc", ((P$.PhasingMIRDer$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc"));
});

Clazz.newMeth(C$, 'getPdbxFomCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fom_centric", ((P$.PhasingMIRDer$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fom_centric"));
});

Clazz.newMeth(C$, 'getPdbxFomAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fom_acentric", ((P$.PhasingMIRDer$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fom_acentric"));
});

Clazz.newMeth(C$, 'getPdbxFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fom", ((P$.PhasingMIRDer$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fom"));
});

Clazz.newMeth(C$, 'getPdbxPower$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_power", ((P$.PhasingMIRDer$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_power"));
});

Clazz.newMeth(C$, 'getPdbxRCullis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_cullis", ((P$.PhasingMIRDer$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_cullis"));
});

Clazz.newMeth(C$, 'getPdbxReflns$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_reflns", ((P$.PhasingMIRDer$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDer$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDer$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_reflns"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
