(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMAD", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PhasingMAD$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PhasingMAD$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.PhasingMAD$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getPdbxDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_low", ((P$.PhasingMAD$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_low"));
});

Clazz.newMeth(C$, 'getPdbxDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_high", ((P$.PhasingMAD$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_high"));
});

Clazz.newMeth(C$, 'getPdbxReflnsAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_reflns_acentric", ((P$.PhasingMAD$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_reflns_acentric"));
});

Clazz.newMeth(C$, 'getPdbxReflnsCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_reflns_centric", ((P$.PhasingMAD$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_reflns_centric"));
});

Clazz.newMeth(C$, 'getPdbxReflns$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_reflns", ((P$.PhasingMAD$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_reflns"));
});

Clazz.newMeth(C$, 'getPdbxFomAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fom_acentric", ((P$.PhasingMAD$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fom_acentric"));
});

Clazz.newMeth(C$, 'getPdbxFomCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fom_centric", ((P$.PhasingMAD$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fom_centric"));
});

Clazz.newMeth(C$, 'getPdbxFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fom", ((P$.PhasingMAD$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fom"));
});

Clazz.newMeth(C$, 'getPdbxRCullisCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_cullis_centric", ((P$.PhasingMAD$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_cullis_centric"));
});

Clazz.newMeth(C$, 'getPdbxRCullisAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_cullis_acentric", ((P$.PhasingMAD$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_cullis_acentric"));
});

Clazz.newMeth(C$, 'getPdbxRCullis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_cullis", ((P$.PhasingMAD$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_cullis"));
});

Clazz.newMeth(C$, 'getPdbxRKrautCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut_centric", ((P$.PhasingMAD$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut_centric"));
});

Clazz.newMeth(C$, 'getPdbxRKrautAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut_acentric", ((P$.PhasingMAD$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut_acentric"));
});

Clazz.newMeth(C$, 'getPdbxRKraut$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut", ((P$.PhasingMAD$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut"));
});

Clazz.newMeth(C$, 'getPdbxLocCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc_centric", ((P$.PhasingMAD$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc_centric"));
});

Clazz.newMeth(C$, 'getPdbxLocAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc_acentric", ((P$.PhasingMAD$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc_acentric"));
});

Clazz.newMeth(C$, 'getPdbxLoc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc", ((P$.PhasingMAD$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc"));
});

Clazz.newMeth(C$, 'getPdbxPowerCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_power_centric", ((P$.PhasingMAD$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_power_centric"));
});

Clazz.newMeth(C$, 'getPdbxPowerAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_power_acentric", ((P$.PhasingMAD$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_power_acentric"));
});

Clazz.newMeth(C$, 'getPdbxPower$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_power", ((P$.PhasingMAD$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_power"));
});

Clazz.newMeth(C$, 'getPdbxNumberDataSets$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_data_sets", ((P$.PhasingMAD$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_data_sets"));
});

Clazz.newMeth(C$, 'getPdbxAnomScatMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_anom_scat_method", ((P$.PhasingMAD$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMAD$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMAD$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_anom_scat_method"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
