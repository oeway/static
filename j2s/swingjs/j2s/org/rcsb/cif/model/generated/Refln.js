(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Refln", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getACalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("A_calc", ((P$.Refln$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("A_calc"));
});

Clazz.newMeth(C$, 'getACalcAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("A_calc_au", ((P$.Refln$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("A_calc_au"));
});

Clazz.newMeth(C$, 'getAMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("A_meas", ((P$.Refln$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("A_meas"));
});

Clazz.newMeth(C$, 'getAMeasAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("A_meas_au", ((P$.Refln$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("A_meas_au"));
});

Clazz.newMeth(C$, 'getBCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_calc", ((P$.Refln$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("B_calc"));
});

Clazz.newMeth(C$, 'getBCalcAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_calc_au", ((P$.Refln$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("B_calc_au"));
});

Clazz.newMeth(C$, 'getBMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_meas", ((P$.Refln$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("B_meas"));
});

Clazz.newMeth(C$, 'getBMeasAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_meas_au", ((P$.Refln$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("B_meas_au"));
});

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.Refln$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getFCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_calc", ((P$.Refln$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("F_calc"));
});

Clazz.newMeth(C$, 'getFCalcAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_calc_au", ((P$.Refln$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("F_calc_au"));
});

Clazz.newMeth(C$, 'getFMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas", ((P$.Refln$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas"));
});

Clazz.newMeth(C$, 'getFMeasAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas_au", ((P$.Refln$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas_au"));
});

Clazz.newMeth(C$, 'getFMeasSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas_sigma", ((P$.Refln$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas_sigma"));
});

Clazz.newMeth(C$, 'getFMeasSigmaAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas_sigma_au", ((P$.Refln$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas_sigma_au"));
});

Clazz.newMeth(C$, 'getFSquaredCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_squared_calc", ((P$.Refln$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("F_squared_calc"));
});

Clazz.newMeth(C$, 'getFSquaredMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_squared_meas", ((P$.Refln$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("F_squared_meas"));
});

Clazz.newMeth(C$, 'getFSquaredSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_squared_sigma", ((P$.Refln$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("F_squared_sigma"));
});

Clazz.newMeth(C$, 'getFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom", ((P$.Refln$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("fom"));
});

Clazz.newMeth(C$, 'getIndexH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_h", ((P$.Refln$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("index_h"));
});

Clazz.newMeth(C$, 'getIndexK$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_k", ((P$.Refln$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("index_k"));
});

Clazz.newMeth(C$, 'getIndexL$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_l", ((P$.Refln$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("index_l"));
});

Clazz.newMeth(C$, 'getIntensityCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("intensity_calc", ((P$.Refln$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("intensity_calc"));
});

Clazz.newMeth(C$, 'getIntensityMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("intensity_meas", ((P$.Refln$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("intensity_meas"));
});

Clazz.newMeth(C$, 'getIntensitySigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("intensity_sigma", ((P$.Refln$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("intensity_sigma"));
});

Clazz.newMeth(C$, 'getStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status", ((P$.Refln$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("status"));
});

Clazz.newMeth(C$, 'getPhaseCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_calc", ((P$.Refln$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("phase_calc"));
});

Clazz.newMeth(C$, 'getPhaseMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_meas", ((P$.Refln$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("phase_meas"));
});

Clazz.newMeth(C$, 'getRefinementStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_status", ((P$.Refln$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_status"));
});

Clazz.newMeth(C$, 'getScaleGroupCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scale_group_code", ((P$.Refln$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("scale_group_code"));
});

Clazz.newMeth(C$, 'getSintOverLambda$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sint_over_lambda", ((P$.Refln$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("sint_over_lambda"));
});

Clazz.newMeth(C$, 'getSymmetryEpsilon$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_epsilon", ((P$.Refln$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_epsilon"));
});

Clazz.newMeth(C$, 'getSymmetryMultiplicity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_multiplicity", ((P$.Refln$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_multiplicity"));
});

Clazz.newMeth(C$, 'getWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength", ((P$.Refln$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength"));
});

Clazz.newMeth(C$, 'getWavelengthId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength_id", ((P$.Refln$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength_id"));
});

Clazz.newMeth(C$, 'getClassCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class_code", ((P$.Refln$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("class_code"));
});

Clazz.newMeth(C$, 'getDSpacing$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_spacing", ((P$.Refln$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("d_spacing"));
});

Clazz.newMeth(C$, 'getIncludeStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("include_status", ((P$.Refln$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("include_status"));
});

Clazz.newMeth(C$, 'getMeanPathLengthTbar$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_path_length_tbar", ((P$.Refln$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("mean_path_length_tbar"));
});

Clazz.newMeth(C$, 'getPdbxFCalcPartSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_F_calc_part_solvent", ((P$.Refln$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_F_calc_part_solvent"));
});

Clazz.newMeth(C$, 'getPdbxPhaseCalcPartSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_phase_calc_part_solvent", ((P$.Refln$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_phase_calc_part_solvent"));
});

Clazz.newMeth(C$, 'getPdbxFCalcWithSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_F_calc_with_solvent", ((P$.Refln$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_F_calc_with_solvent"));
});

Clazz.newMeth(C$, 'getPdbxPhaseCalcWithSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_phase_calc_with_solvent", ((P$.Refln$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_phase_calc_with_solvent"));
});

Clazz.newMeth(C$, 'getPdbxAnomDifference$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_anom_difference", ((P$.Refln$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_anom_difference"));
});

Clazz.newMeth(C$, 'getPdbxAnomDifferenceSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_anom_difference_sigma", ((P$.Refln$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_anom_difference_sigma"));
});

Clazz.newMeth(C$, 'getPdbxIPlus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_I_plus", ((P$.Refln$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_I_plus"));
});

Clazz.newMeth(C$, 'getPdbxIMinus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_I_minus", ((P$.Refln$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_I_minus"));
});

Clazz.newMeth(C$, 'getPdbxFPlus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_F_plus", ((P$.Refln$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_F_plus"));
});

Clazz.newMeth(C$, 'getPdbxFMinus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_F_minus", ((P$.Refln$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_F_minus"));
});

Clazz.newMeth(C$, 'getPdbxIPlusSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_I_plus_sigma", ((P$.Refln$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_I_plus_sigma"));
});

Clazz.newMeth(C$, 'getPdbxIMinusSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_I_minus_sigma", ((P$.Refln$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_I_minus_sigma"));
});

Clazz.newMeth(C$, 'getPdbxFMinusSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_F_minus_sigma", ((P$.Refln$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_F_minus_sigma"));
});

Clazz.newMeth(C$, 'getPdbxFPlusSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_F_plus_sigma", ((P$.Refln$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_F_plus_sigma"));
});

Clazz.newMeth(C$, 'getPdbxHLAIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_HL_A_iso", ((P$.Refln$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_HL_A_iso"));
});

Clazz.newMeth(C$, 'getPdbxHLBIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_HL_B_iso", ((P$.Refln$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_HL_B_iso"));
});

Clazz.newMeth(C$, 'getPdbxHLCIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_HL_C_iso", ((P$.Refln$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_HL_C_iso"));
});

Clazz.newMeth(C$, 'getPdbxHLDIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_HL_D_iso", ((P$.Refln$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda57.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_HL_D_iso"));
});

Clazz.newMeth(C$, 'getPdbxFiberLayer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fiber_layer", ((P$.Refln$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda58.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fiber_layer"));
});

Clazz.newMeth(C$, 'getPdbxFiberCoordinate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fiber_coordinate", ((P$.Refln$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda59.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fiber_coordinate"));
});

Clazz.newMeth(C$, 'getPdbxFiberFMeasAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fiber_F_meas_au", ((P$.Refln$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda60.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fiber_F_meas_au"));
});

Clazz.newMeth(C$, 'getPdbxFWT$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_FWT", ((P$.Refln$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda61.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_FWT"));
});

Clazz.newMeth(C$, 'getPdbxPHWT$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PHWT", ((P$.Refln$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda62.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PHWT"));
});

Clazz.newMeth(C$, 'getPdbxDELFWT$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_DELFWT", ((P$.Refln$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda63.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_DELFWT"));
});

Clazz.newMeth(C$, 'getPdbxDELPHWT$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_DELPHWT", ((P$.Refln$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda64.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_DELPHWT"));
});

Clazz.newMeth(C$, 'getPdbxDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_diffrn_id", ((P$.Refln$lambda65||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda65.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_diffrn_id"));
});

Clazz.newMeth(C$, 'getPdbxRFreeFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_r_free_flag", ((P$.Refln$lambda66||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda66.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_r_free_flag"));
});

Clazz.newMeth(C$, 'getPdbxAnomalousDiff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_anomalous_diff", ((P$.Refln$lambda67||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda67.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_anomalous_diff"));
});

Clazz.newMeth(C$, 'getPdbxAnomalousDiffSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_anomalous_diff_sigma", ((P$.Refln$lambda68||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda68.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_anomalous_diff_sigma"));
});

Clazz.newMeth(C$, 'getPdbxPhaseCycle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_phase_cycle", ((P$.Refln$lambda69||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda69.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_phase_cycle"));
});

Clazz.newMeth(C$, 'getPdbxCosPhaseCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_cos_phase_calc", ((P$.Refln$lambda70||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda70.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_cos_phase_calc"));
});

Clazz.newMeth(C$, 'getPdbxSinPhaseCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_sin_phase_calc", ((P$.Refln$lambda71||
(function(){/*m*/var C$=Clazz.newClass(P$, "Refln$lambda71", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Refln$lambda71.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_sin_phase_calc"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
