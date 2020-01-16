(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMIRShell", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PhasingMIRShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PhasingMIRShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getFOM$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("FOM", ((P$.PhasingMIRShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("FOM"));
});

Clazz.newMeth(C$, 'getFOMAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("FOM_acentric", ((P$.PhasingMIRShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("FOM_acentric"));
});

Clazz.newMeth(C$, 'getFOMCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("FOM_centric", ((P$.PhasingMIRShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("FOM_centric"));
});

Clazz.newMeth(C$, 'getLoc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("loc", ((P$.PhasingMIRShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("loc"));
});

Clazz.newMeth(C$, 'getMeanPhase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_phase", ((P$.PhasingMIRShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("mean_phase"));
});

Clazz.newMeth(C$, 'getPower$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power", ((P$.PhasingMIRShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("power"));
});

Clazz.newMeth(C$, 'getRCullis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis", ((P$.PhasingMIRShell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis"));
});

Clazz.newMeth(C$, 'getRKraut$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_kraut", ((P$.PhasingMIRShell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("R_kraut"));
});

Clazz.newMeth(C$, 'getReflns$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns", ((P$.PhasingMIRShell$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("reflns"));
});

Clazz.newMeth(C$, 'getReflnsAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_acentric", ((P$.PhasingMIRShell$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_acentric"));
});

Clazz.newMeth(C$, 'getReflnsAnomalous$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_anomalous", ((P$.PhasingMIRShell$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_anomalous"));
});

Clazz.newMeth(C$, 'getReflnsCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_centric", ((P$.PhasingMIRShell$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_centric"));
});

Clazz.newMeth(C$, 'getPdbxLocCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc_centric", ((P$.PhasingMIRShell$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc_centric"));
});

Clazz.newMeth(C$, 'getPdbxLocAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_loc_acentric", ((P$.PhasingMIRShell$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_loc_acentric"));
});

Clazz.newMeth(C$, 'getPdbxPowerCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_power_centric", ((P$.PhasingMIRShell$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_power_centric"));
});

Clazz.newMeth(C$, 'getPdbxPowerAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_power_acentric", ((P$.PhasingMIRShell$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_power_acentric"));
});

Clazz.newMeth(C$, 'getPdbxRKrautCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut_centric", ((P$.PhasingMIRShell$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut_centric"));
});

Clazz.newMeth(C$, 'getPdbxRKrautAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_kraut_acentric", ((P$.PhasingMIRShell$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_kraut_acentric"));
});

Clazz.newMeth(C$, 'getPdbxRCullisCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_cullis_centric", ((P$.PhasingMIRShell$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_cullis_centric"));
});

Clazz.newMeth(C$, 'getPdbxRCullisAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_R_cullis_acentric", ((P$.PhasingMIRShell$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRShell$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRShell$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_R_cullis_acentric"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
