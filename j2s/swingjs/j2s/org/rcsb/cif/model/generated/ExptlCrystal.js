(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExptlCrystal", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getColour$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("colour", ((P$.ExptlCrystal$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("colour"));
});

Clazz.newMeth(C$, 'getDensityDiffrn$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_diffrn", ((P$.ExptlCrystal$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("density_diffrn"));
});

Clazz.newMeth(C$, 'getDensityMatthews$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_Matthews", ((P$.ExptlCrystal$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("density_Matthews"));
});

Clazz.newMeth(C$, 'getDensityMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_method", ((P$.ExptlCrystal$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("density_method"));
});

Clazz.newMeth(C$, 'getDensityPercentSol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_percent_sol", ((P$.ExptlCrystal$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("density_percent_sol"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.ExptlCrystal$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getF000$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_000", ((P$.ExptlCrystal$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("F_000"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.ExptlCrystal$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPreparation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("preparation", ((P$.ExptlCrystal$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("preparation"));
});

Clazz.newMeth(C$, 'getSizeMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("size_max", ((P$.ExptlCrystal$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("size_max"));
});

Clazz.newMeth(C$, 'getSizeMid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("size_mid", ((P$.ExptlCrystal$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("size_mid"));
});

Clazz.newMeth(C$, 'getSizeMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("size_min", ((P$.ExptlCrystal$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("size_min"));
});

Clazz.newMeth(C$, 'getSizeRad$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("size_rad", ((P$.ExptlCrystal$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("size_rad"));
});

Clazz.newMeth(C$, 'getColourLustre$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("colour_lustre", ((P$.ExptlCrystal$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("colour_lustre"));
});

Clazz.newMeth(C$, 'getColourModifier$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("colour_modifier", ((P$.ExptlCrystal$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("colour_modifier"));
});

Clazz.newMeth(C$, 'getColourPrimary$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("colour_primary", ((P$.ExptlCrystal$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("colour_primary"));
});

Clazz.newMeth(C$, 'getDensityMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas", ((P$.ExptlCrystal$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas"));
});

Clazz.newMeth(C$, 'getDensityMeasEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_esd", ((P$.ExptlCrystal$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_esd"));
});

Clazz.newMeth(C$, 'getDensityMeasGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_gt", ((P$.ExptlCrystal$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_gt"));
});

Clazz.newMeth(C$, 'getDensityMeasLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_lt", ((P$.ExptlCrystal$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_lt"));
});

Clazz.newMeth(C$, 'getDensityMeasTemp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_temp", ((P$.ExptlCrystal$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_temp"));
});

Clazz.newMeth(C$, 'getDensityMeasTempEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_temp_esd", ((P$.ExptlCrystal$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_temp_esd"));
});

Clazz.newMeth(C$, 'getDensityMeasTempGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_temp_gt", ((P$.ExptlCrystal$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_temp_gt"));
});

Clazz.newMeth(C$, 'getDensityMeasTempLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("density_meas_temp_lt", ((P$.ExptlCrystal$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("density_meas_temp_lt"));
});

Clazz.newMeth(C$, 'getPdbxCrystalImageUrl$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_image_url", ((P$.ExptlCrystal$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_image_url"));
});

Clazz.newMeth(C$, 'getPdbxCrystalImageFormat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_image_format", ((P$.ExptlCrystal$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_image_format"));
});

Clazz.newMeth(C$, 'getPdbxMosaicity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_mosaicity", ((P$.ExptlCrystal$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_mosaicity"));
});

Clazz.newMeth(C$, 'getPdbxMosaicityEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_mosaicity_esd", ((P$.ExptlCrystal$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_mosaicity_esd"));
});

Clazz.newMeth(C$, 'getPdbxCrystalImage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_image", ((P$.ExptlCrystal$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_image"));
});

Clazz.newMeth(C$, 'getPdbxX_rayImage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_x-ray_image", ((P$.ExptlCrystal$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_x-ray_image"));
});

Clazz.newMeth(C$, 'getPdbxX_rayImageType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_x-ray_image_type", ((P$.ExptlCrystal$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_x-ray_image_type"));
});

Clazz.newMeth(C$, 'getPdbxCrystalDiffrnLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_diffrn_limit", ((P$.ExptlCrystal$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_diffrn_limit"));
});

Clazz.newMeth(C$, 'getPdbxCrystalDiffrnLifetime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_diffrn_lifetime", ((P$.ExptlCrystal$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_diffrn_lifetime"));
});

Clazz.newMeth(C$, 'getPdbxCrystalDirection1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_direction_1", ((P$.ExptlCrystal$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_direction_1"));
});

Clazz.newMeth(C$, 'getPdbxCrystalDirection2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_direction_2", ((P$.ExptlCrystal$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_direction_2"));
});

Clazz.newMeth(C$, 'getPdbxCrystalDirection3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_crystal_direction_3", ((P$.ExptlCrystal$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystal$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystal$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_crystal_direction_3"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
