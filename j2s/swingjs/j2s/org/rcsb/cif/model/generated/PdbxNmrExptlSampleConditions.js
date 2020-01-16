(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getConditionsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conditions_id", ((P$.PdbxNmrExptlSampleConditions$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("conditions_id"));
});

Clazz.newMeth(C$, 'getTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature", ((P$.PdbxNmrExptlSampleConditions$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("temperature"));
});

Clazz.newMeth(C$, 'getPressureUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure_units", ((P$.PdbxNmrExptlSampleConditions$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pressure_units"));
});

Clazz.newMeth(C$, 'getPressure$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure", ((P$.PdbxNmrExptlSampleConditions$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("pressure"));
});

Clazz.newMeth(C$, 'getPH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pH", ((P$.PdbxNmrExptlSampleConditions$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pH"));
});

Clazz.newMeth(C$, 'getIonicStrength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ionic_strength", ((P$.PdbxNmrExptlSampleConditions$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ionic_strength"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxNmrExptlSampleConditions$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getIonicStrengthErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ionic_strength_err", ((P$.PdbxNmrExptlSampleConditions$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ionic_strength_err"));
});

Clazz.newMeth(C$, 'getIonicStrengthUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ionic_strength_units", ((P$.PdbxNmrExptlSampleConditions$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ionic_strength_units"));
});

Clazz.newMeth(C$, 'getLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label", ((P$.PdbxNmrExptlSampleConditions$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("label"));
});

Clazz.newMeth(C$, 'getPHErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pH_err", ((P$.PdbxNmrExptlSampleConditions$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pH_err"));
});

Clazz.newMeth(C$, 'getPHUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pH_units", ((P$.PdbxNmrExptlSampleConditions$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pH_units"));
});

Clazz.newMeth(C$, 'getPressureErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure_err", ((P$.PdbxNmrExptlSampleConditions$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pressure_err"));
});

Clazz.newMeth(C$, 'getTemperatureErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_err", ((P$.PdbxNmrExptlSampleConditions$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_err"));
});

Clazz.newMeth(C$, 'getTemperatureUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_units", ((P$.PdbxNmrExptlSampleConditions$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptlSampleConditions$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptlSampleConditions$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_units"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
