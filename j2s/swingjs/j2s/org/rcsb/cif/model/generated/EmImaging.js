(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmImaging", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmImaging$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmImaging$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAstigmatism$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("astigmatism", ((P$.EmImaging$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("astigmatism"));
});

Clazz.newMeth(C$, 'getElectronBeamTiltParams$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("electron_beam_tilt_params", ((P$.EmImaging$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("electron_beam_tilt_params"));
});

Clazz.newMeth(C$, 'getResidualTilt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("residual_tilt", ((P$.EmImaging$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("residual_tilt"));
});

Clazz.newMeth(C$, 'getSampleSupportId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_support_id", ((P$.EmImaging$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sample_support_id"));
});

Clazz.newMeth(C$, 'getDetectorId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_id", ((P$.EmImaging$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("detector_id"));
});

Clazz.newMeth(C$, 'getScansId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scans_id", ((P$.EmImaging$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("scans_id"));
});

Clazz.newMeth(C$, 'getMicroscopeId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("microscope_id", ((P$.EmImaging$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("microscope_id"));
});

Clazz.newMeth(C$, 'getMicroscopeModel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("microscope_model", ((P$.EmImaging$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("microscope_model"));
});

Clazz.newMeth(C$, 'getSpecimenHolderType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("specimen_holder_type", ((P$.EmImaging$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("specimen_holder_type"));
});

Clazz.newMeth(C$, 'getSpecimenHolderModel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("specimen_holder_model", ((P$.EmImaging$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("specimen_holder_model"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmImaging$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.EmImaging$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getAcceleratingVoltage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("accelerating_voltage", ((P$.EmImaging$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("accelerating_voltage"));
});

Clazz.newMeth(C$, 'getIlluminationMode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("illumination_mode", ((P$.EmImaging$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("illumination_mode"));
});

Clazz.newMeth(C$, 'getMode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mode", ((P$.EmImaging$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("mode"));
});

Clazz.newMeth(C$, 'getNominalCs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nominal_cs", ((P$.EmImaging$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("nominal_cs"));
});

Clazz.newMeth(C$, 'getNominalDefocusMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nominal_defocus_min", ((P$.EmImaging$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("nominal_defocus_min"));
});

Clazz.newMeth(C$, 'getNominalDefocusMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nominal_defocus_max", ((P$.EmImaging$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("nominal_defocus_max"));
});

Clazz.newMeth(C$, 'getCalibratedDefocusMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("calibrated_defocus_min", ((P$.EmImaging$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("calibrated_defocus_min"));
});

Clazz.newMeth(C$, 'getCalibratedDefocusMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("calibrated_defocus_max", ((P$.EmImaging$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("calibrated_defocus_max"));
});

Clazz.newMeth(C$, 'getTiltAngleMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tilt_angle_min", ((P$.EmImaging$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("tilt_angle_min"));
});

Clazz.newMeth(C$, 'getTiltAngleMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tilt_angle_max", ((P$.EmImaging$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("tilt_angle_max"));
});

Clazz.newMeth(C$, 'getNominalMagnification$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nominal_magnification", ((P$.EmImaging$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("nominal_magnification"));
});

Clazz.newMeth(C$, 'getCalibratedMagnification$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("calibrated_magnification", ((P$.EmImaging$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("calibrated_magnification"));
});

Clazz.newMeth(C$, 'getElectronSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("electron_source", ((P$.EmImaging$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("electron_source"));
});

Clazz.newMeth(C$, 'getElectronDose$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("electron_dose", ((P$.EmImaging$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("electron_dose"));
});

Clazz.newMeth(C$, 'getEnergyFilter$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("energy_filter", ((P$.EmImaging$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("energy_filter"));
});

Clazz.newMeth(C$, 'getEnergyWindow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("energy_window", ((P$.EmImaging$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("energy_window"));
});

Clazz.newMeth(C$, 'getCitationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("citation_id", ((P$.EmImaging$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("citation_id"));
});

Clazz.newMeth(C$, 'getTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature", ((P$.EmImaging$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("temperature"));
});

Clazz.newMeth(C$, 'getDetectorDistance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_distance", ((P$.EmImaging$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("detector_distance"));
});

Clazz.newMeth(C$, 'getRecordingTemperatureMinimum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recording_temperature_minimum", ((P$.EmImaging$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("recording_temperature_minimum"));
});

Clazz.newMeth(C$, 'getRecordingTemperatureMaximum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recording_temperature_maximum", ((P$.EmImaging$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("recording_temperature_maximum"));
});

Clazz.newMeth(C$, 'getAlignmentProcedure$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alignment_procedure", ((P$.EmImaging$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("alignment_procedure"));
});

Clazz.newMeth(C$, 'getC2ApertureDiameter$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c2_aperture_diameter", ((P$.EmImaging$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("c2_aperture_diameter"));
});

Clazz.newMeth(C$, 'getSpecimenId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("specimen_id", ((P$.EmImaging$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("specimen_id"));
});

Clazz.newMeth(C$, 'getCryogen$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cryogen", ((P$.EmImaging$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImaging$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImaging$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("cryogen"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
