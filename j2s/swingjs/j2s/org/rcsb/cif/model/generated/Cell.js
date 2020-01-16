(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Cell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAngleAlpha$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_alpha", ((P$.Cell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("angle_alpha"));
});

Clazz.newMeth(C$, 'getAngleAlphaEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_alpha_esd", ((P$.Cell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("angle_alpha_esd"));
});

Clazz.newMeth(C$, 'getAngleBeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_beta", ((P$.Cell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("angle_beta"));
});

Clazz.newMeth(C$, 'getAngleBetaEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_beta_esd", ((P$.Cell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("angle_beta_esd"));
});

Clazz.newMeth(C$, 'getAngleGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_gamma", ((P$.Cell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("angle_gamma"));
});

Clazz.newMeth(C$, 'getAngleGammaEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_gamma_esd", ((P$.Cell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("angle_gamma_esd"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Cell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Cell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getFormulaUnitsZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula_units_Z", ((P$.Cell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("formula_units_Z"));
});

Clazz.newMeth(C$, 'getLengthA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_a", ((P$.Cell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("length_a"));
});

Clazz.newMeth(C$, 'getLengthAEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_a_esd", ((P$.Cell$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("length_a_esd"));
});

Clazz.newMeth(C$, 'getLengthB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_b", ((P$.Cell$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("length_b"));
});

Clazz.newMeth(C$, 'getLengthBEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_b_esd", ((P$.Cell$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("length_b_esd"));
});

Clazz.newMeth(C$, 'getLengthC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_c", ((P$.Cell$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("length_c"));
});

Clazz.newMeth(C$, 'getLengthCEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_c_esd", ((P$.Cell$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("length_c_esd"));
});

Clazz.newMeth(C$, 'getVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume", ((P$.Cell$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("volume"));
});

Clazz.newMeth(C$, 'getVolumeEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume_esd", ((P$.Cell$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("volume_esd"));
});

Clazz.newMeth(C$, 'getZPDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Z_PDB", ((P$.Cell$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("Z_PDB"));
});

Clazz.newMeth(C$, 'getReciprocalAngleAlpha$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_angle_alpha", ((P$.Cell$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_angle_alpha"));
});

Clazz.newMeth(C$, 'getReciprocalAngleBeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_angle_beta", ((P$.Cell$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_angle_beta"));
});

Clazz.newMeth(C$, 'getReciprocalAngleGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_angle_gamma", ((P$.Cell$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_angle_gamma"));
});

Clazz.newMeth(C$, 'getReciprocalAngleAlphaEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_angle_alpha_esd", ((P$.Cell$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_angle_alpha_esd"));
});

Clazz.newMeth(C$, 'getReciprocalAngleBetaEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_angle_beta_esd", ((P$.Cell$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_angle_beta_esd"));
});

Clazz.newMeth(C$, 'getReciprocalAngleGammaEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_angle_gamma_esd", ((P$.Cell$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_angle_gamma_esd"));
});

Clazz.newMeth(C$, 'getReciprocalLengthA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_length_a", ((P$.Cell$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_length_a"));
});

Clazz.newMeth(C$, 'getReciprocalLengthB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_length_b", ((P$.Cell$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_length_b"));
});

Clazz.newMeth(C$, 'getReciprocalLengthC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_length_c", ((P$.Cell$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_length_c"));
});

Clazz.newMeth(C$, 'getReciprocalLengthAEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_length_a_esd", ((P$.Cell$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_length_a_esd"));
});

Clazz.newMeth(C$, 'getReciprocalLengthBEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_length_b_esd", ((P$.Cell$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_length_b_esd"));
});

Clazz.newMeth(C$, 'getReciprocalLengthCEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reciprocal_length_c_esd", ((P$.Cell$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("reciprocal_length_c_esd"));
});

Clazz.newMeth(C$, 'getPdbxUniqueAxis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_unique_axis", ((P$.Cell$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "Cell$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Cell$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_unique_axis"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
