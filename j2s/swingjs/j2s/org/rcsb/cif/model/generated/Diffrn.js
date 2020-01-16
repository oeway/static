(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Diffrn", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAmbientEnvironment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_environment", ((P$.Diffrn$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_environment"));
});

Clazz.newMeth(C$, 'getAmbientTemp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_temp", ((P$.Diffrn$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_temp"));
});

Clazz.newMeth(C$, 'getAmbientTempDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_temp_details", ((P$.Diffrn$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_temp_details"));
});

Clazz.newMeth(C$, 'getAmbientTempEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_temp_esd", ((P$.Diffrn$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_temp_esd"));
});

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.Diffrn$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getCrystalSupport$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_support", ((P$.Diffrn$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_support"));
});

Clazz.newMeth(C$, 'getCrystalTreatment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_treatment", ((P$.Diffrn$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_treatment"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Diffrn$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.Diffrn$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAmbientPressure$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_pressure", ((P$.Diffrn$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_pressure"));
});

Clazz.newMeth(C$, 'getAmbientPressureEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_pressure_esd", ((P$.Diffrn$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_pressure_esd"));
});

Clazz.newMeth(C$, 'getAmbientPressureGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_pressure_gt", ((P$.Diffrn$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_pressure_gt"));
});

Clazz.newMeth(C$, 'getAmbientPressureLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_pressure_lt", ((P$.Diffrn$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_pressure_lt"));
});

Clazz.newMeth(C$, 'getAmbientTempGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_temp_gt", ((P$.Diffrn$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_temp_gt"));
});

Clazz.newMeth(C$, 'getAmbientTempLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ambient_temp_lt", ((P$.Diffrn$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ambient_temp_lt"));
});

Clazz.newMeth(C$, 'getPdbxSerialCrystalExperiment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_serial_crystal_experiment", ((P$.Diffrn$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Diffrn$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Diffrn$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_serial_crystal_experiment"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
