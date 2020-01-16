(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDccDensity", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDCCVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("DCC_version", ((P$.PdbxDccDensity$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("DCC_version"));
});

Clazz.newMeth(C$, 'getPdbid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbid", ((P$.PdbxDccDensity$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pdbid"));
});

Clazz.newMeth(C$, 'getPdbtype$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbtype", ((P$.PdbxDccDensity$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pdbtype"));
});

Clazz.newMeth(C$, 'getUnitCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("unit_cell", ((P$.PdbxDccDensity$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("unit_cell"));
});

Clazz.newMeth(C$, 'getSpaceGroupNameH_M$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("space_group_name_H-M", ((P$.PdbxDccDensity$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("space_group_name_H-M"));
});

Clazz.newMeth(C$, 'getSpaceGroupPointless$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("space_group_pointless", ((P$.PdbxDccDensity$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("space_group_pointless"));
});

Clazz.newMeth(C$, 'getLsDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_d_res_high", ((P$.PdbxDccDensity$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ls_d_res_high"));
});

Clazz.newMeth(C$, 'getLsDResHighSf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_d_res_high_sf", ((P$.PdbxDccDensity$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ls_d_res_high_sf"));
});

Clazz.newMeth(C$, 'getLsDResLowSf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ls_d_res_low_sf", ((P$.PdbxDccDensity$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ls_d_res_low_sf"));
});

Clazz.newMeth(C$, 'getRValueRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_value_R_work", ((P$.PdbxDccDensity$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("R_value_R_work"));
});

Clazz.newMeth(C$, 'getRValueRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_value_R_free", ((P$.PdbxDccDensity$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("R_value_R_free"));
});

Clazz.newMeth(C$, 'getWorkingSetCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("working_set_count", ((P$.PdbxDccDensity$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("working_set_count"));
});

Clazz.newMeth(C$, 'getFreeSetCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("free_set_count", ((P$.PdbxDccDensity$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("free_set_count"));
});

Clazz.newMeth(C$, 'getOccupancyMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_min", ((P$.PdbxDccDensity$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_min"));
});

Clazz.newMeth(C$, 'getOccupancyMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_max", ((P$.PdbxDccDensity$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_max"));
});

Clazz.newMeth(C$, 'getOccupancyMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_mean", ((P$.PdbxDccDensity$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_mean"));
});

Clazz.newMeth(C$, 'getBisoMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_min", ((P$.PdbxDccDensity$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_min"));
});

Clazz.newMeth(C$, 'getBisoMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_max", ((P$.PdbxDccDensity$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_max"));
});

Clazz.newMeth(C$, 'getBisoMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Biso_mean", ((P$.PdbxDccDensity$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("Biso_mean"));
});

Clazz.newMeth(C$, 'getBWilson$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_wilson", ((P$.PdbxDccDensity$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("B_wilson"));
});

Clazz.newMeth(C$, 'getBWilsonScale$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_wilson_scale", ((P$.PdbxDccDensity$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("B_wilson_scale"));
});

Clazz.newMeth(C$, 'getMeanI2OverMeanISquare$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_I2_over_mean_I_square", ((P$.PdbxDccDensity$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("mean_I2_over_mean_I_square"));
});

Clazz.newMeth(C$, 'getMeanFSquareOverMeanF2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_F_square_over_mean_F2", ((P$.PdbxDccDensity$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("mean_F_square_over_mean_F2"));
});

Clazz.newMeth(C$, 'getMeanE21Abs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_E2_1_abs", ((P$.PdbxDccDensity$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("mean_E2_1_abs"));
});

Clazz.newMeth(C$, 'getPadilla_YeatesLMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Padilla-Yeates_L_mean", ((P$.PdbxDccDensity$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("Padilla-Yeates_L_mean"));
});

Clazz.newMeth(C$, 'getPadilla_YeatesL2Mean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Padilla-Yeates_L2_mean", ((P$.PdbxDccDensity$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("Padilla-Yeates_L2_mean"));
});

Clazz.newMeth(C$, 'getPadilla_YeatesL2MeanPointless$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Padilla-Yeates_L2_mean_pointless", ((P$.PdbxDccDensity$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("Padilla-Yeates_L2_mean_pointless"));
});

Clazz.newMeth(C$, 'getZScoreLTest$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Z_score_L_test", ((P$.PdbxDccDensity$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("Z_score_L_test"));
});

Clazz.newMeth(C$, 'getTwinType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_type", ((P$.PdbxDccDensity$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("twin_type"));
});

Clazz.newMeth(C$, 'getTwinOperatorXtriage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_operator_xtriage", ((P$.PdbxDccDensity$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("twin_operator_xtriage"));
});

Clazz.newMeth(C$, 'getTwinFractionXtriage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_fraction_xtriage", ((P$.PdbxDccDensity$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("twin_fraction_xtriage"));
});

Clazz.newMeth(C$, 'getTwinRfactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_Rfactor", ((P$.PdbxDccDensity$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("twin_Rfactor"));
});

Clazz.newMeth(C$, 'getIOverSigIResh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("I_over_sigI_resh", ((P$.PdbxDccDensity$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("I_over_sigI_resh"));
});

Clazz.newMeth(C$, 'getIOverSigIDiff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("I_over_sigI_diff", ((P$.PdbxDccDensity$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("I_over_sigI_diff"));
});

Clazz.newMeth(C$, 'getIOverSigIMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("I_over_sigI_mean", ((P$.PdbxDccDensity$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("I_over_sigI_mean"));
});

Clazz.newMeth(C$, 'getIceRing$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ice_ring", ((P$.PdbxDccDensity$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("ice_ring"));
});

Clazz.newMeth(C$, 'getAnisotropy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("anisotropy", ((P$.PdbxDccDensity$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("anisotropy"));
});

Clazz.newMeth(C$, 'getZ_score$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Z-score", ((P$.PdbxDccDensity$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("Z-score"));
});

Clazz.newMeth(C$, 'getProbPeakValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prob_peak_value", ((P$.PdbxDccDensity$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("prob_peak_value"));
});

Clazz.newMeth(C$, 'getTranslationalPseudoSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("translational_pseudo_symmetry", ((P$.PdbxDccDensity$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("translational_pseudo_symmetry"));
});

Clazz.newMeth(C$, 'getWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength", ((P$.PdbxDccDensity$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength"));
});

Clazz.newMeth(C$, 'getBSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_solvent", ((P$.PdbxDccDensity$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("B_solvent"));
});

Clazz.newMeth(C$, 'getKSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("K_solvent", ((P$.PdbxDccDensity$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("K_solvent"));
});

Clazz.newMeth(C$, 'getTLSRefinementReported$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("TLS_refinement_reported", ((P$.PdbxDccDensity$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("TLS_refinement_reported"));
});

Clazz.newMeth(C$, 'getPartialBValueCorrectionAttempted$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("partial_B_value_correction_attempted", ((P$.PdbxDccDensity$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("partial_B_value_correction_attempted"));
});

Clazz.newMeth(C$, 'getPartialBValueCorrectionSuccess$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("partial_B_value_correction_success", ((P$.PdbxDccDensity$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("partial_B_value_correction_success"));
});

Clazz.newMeth(C$, 'getReflectionStatusArchived$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflection_status_archived", ((P$.PdbxDccDensity$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("reflection_status_archived"));
});

Clazz.newMeth(C$, 'getReflectionStatusUsed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflection_status_used", ((P$.PdbxDccDensity$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("reflection_status_used"));
});

Clazz.newMeth(C$, 'getIsoBValueType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("iso_B_value_type", ((P$.PdbxDccDensity$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("iso_B_value_type"));
});

Clazz.newMeth(C$, 'getReflnsTwin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_twin", ((P$.PdbxDccDensity$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_twin"));
});

Clazz.newMeth(C$, 'getTwinByXtriage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_by_xtriage", ((P$.PdbxDccDensity$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("twin_by_xtriage"));
});

Clazz.newMeth(C$, 'getTwinOperator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_operator", ((P$.PdbxDccDensity$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("twin_operator"));
});

Clazz.newMeth(C$, 'getTwinFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("twin_fraction", ((P$.PdbxDccDensity$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("twin_fraction"));
});

Clazz.newMeth(C$, 'getTlsGroupNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tls_group_number", ((P$.PdbxDccDensity$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("tls_group_number"));
});

Clazz.newMeth(C$, 'getNcsGroupNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ncs_group_number", ((P$.PdbxDccDensity$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("ncs_group_number"));
});

Clazz.newMeth(C$, 'getMtrixNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mtrix_number", ((P$.PdbxDccDensity$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("mtrix_number"));
});

Clazz.newMeth(C$, 'getMatthewCoeff$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Matthew_coeff", ((P$.PdbxDccDensity$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda57.$init$, [this, null]))) : this.getBinaryColumn$S("Matthew_coeff"));
});

Clazz.newMeth(C$, 'getSolventContent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solvent_content", ((P$.PdbxDccDensity$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda58.$init$, [this, null]))) : this.getBinaryColumn$S("solvent_content"));
});

Clazz.newMeth(C$, 'getCruickshankDpiXyz$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cruickshank_dpi_xyz", ((P$.PdbxDccDensity$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda59.$init$, [this, null]))) : this.getBinaryColumn$S("Cruickshank_dpi_xyz"));
});

Clazz.newMeth(C$, 'getDpiFreeR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dpi_free_R", ((P$.PdbxDccDensity$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda60.$init$, [this, null]))) : this.getBinaryColumn$S("dpi_free_R"));
});

Clazz.newMeth(C$, 'getFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom", ((P$.PdbxDccDensity$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda61.$init$, [this, null]))) : this.getBinaryColumn$S("fom"));
});

Clazz.newMeth(C$, 'getCorrelationOverall$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correlation_overall", ((P$.PdbxDccDensity$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda62.$init$, [this, null]))) : this.getBinaryColumn$S("correlation_overall"));
});

Clazz.newMeth(C$, 'getRealSpaceROverall$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("real_space_R_overall", ((P$.PdbxDccDensity$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda63.$init$, [this, null]))) : this.getBinaryColumn$S("real_space_R_overall"));
});

Clazz.newMeth(C$, 'getMFo_DFc_3sigmaPositive$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mFo-DFc-3sigma_positive", ((P$.PdbxDccDensity$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda64.$init$, [this, null]))) : this.getBinaryColumn$S("mFo-DFc-3sigma_positive"));
});

Clazz.newMeth(C$, 'getMFo_DFc_6sigmaPositive$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mFo-DFc-6sigma_positive", ((P$.PdbxDccDensity$lambda65||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda65.$init$, [this, null]))) : this.getBinaryColumn$S("mFo-DFc-6sigma_positive"));
});

Clazz.newMeth(C$, 'getMFo_DFc_3sigmaNegative$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mFo-DFc-3sigma_negative", ((P$.PdbxDccDensity$lambda66||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda66.$init$, [this, null]))) : this.getBinaryColumn$S("mFo-DFc-3sigma_negative"));
});

Clazz.newMeth(C$, 'getMFo_DFc_6sigmaNegative$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mFo-DFc-6sigma_negative", ((P$.PdbxDccDensity$lambda67||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda67.$init$, [this, null]))) : this.getBinaryColumn$S("mFo-DFc-6sigma_negative"));
});

Clazz.newMeth(C$, 'getBmean_Bwilson$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Bmean-Bwilson", ((P$.PdbxDccDensity$lambda68||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda68.$init$, [this, null]))) : this.getBinaryColumn$S("Bmean-Bwilson"));
});

Clazz.newMeth(C$, 'getRfree_Rwork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rfree-Rwork", ((P$.PdbxDccDensity$lambda69||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda69.$init$, [this, null]))) : this.getBinaryColumn$S("Rfree-Rwork"));
});

Clazz.newMeth(C$, 'getError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("error", ((P$.PdbxDccDensity$lambda70||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccDensity$lambda70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccDensity$lambda70.$init$, [this, null]))) : this.getBinaryColumn$S("error"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
