(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingSet", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCellAngleAlpha$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_angle_alpha", ((P$.PhasingSet$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("cell_angle_alpha"));
});

Clazz.newMeth(C$, 'getCellAngleBeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_angle_beta", ((P$.PhasingSet$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("cell_angle_beta"));
});

Clazz.newMeth(C$, 'getCellAngleGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_angle_gamma", ((P$.PhasingSet$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("cell_angle_gamma"));
});

Clazz.newMeth(C$, 'getCellLengthA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_length_a", ((P$.PhasingSet$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("cell_length_a"));
});

Clazz.newMeth(C$, 'getCellLengthB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_length_b", ((P$.PhasingSet$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("cell_length_b"));
});

Clazz.newMeth(C$, 'getCellLengthC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_length_c", ((P$.PhasingSet$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("cell_length_c"));
});

Clazz.newMeth(C$, 'getDetectorSpecific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_specific", ((P$.PhasingSet$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("detector_specific"));
});

Clazz.newMeth(C$, 'getDetectorType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_type", ((P$.PhasingSet$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("detector_type"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PhasingSet$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getRadiationSourceSpecific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("radiation_source_specific", ((P$.PhasingSet$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("radiation_source_specific"));
});

Clazz.newMeth(C$, 'getRadiationWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("radiation_wavelength", ((P$.PhasingSet$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("radiation_wavelength"));
});

Clazz.newMeth(C$, 'getTemp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp", ((P$.PhasingSet$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("temp"));
});

Clazz.newMeth(C$, 'getPdbxTempDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_temp_details", ((P$.PhasingSet$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_temp_details"));
});

Clazz.newMeth(C$, 'getPdbxDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_high", ((P$.PhasingSet$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_high"));
});

Clazz.newMeth(C$, 'getPdbxDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_d_res_low", ((P$.PhasingSet$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingSet$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingSet$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_d_res_low"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
