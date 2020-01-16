(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnRefln", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAngleChi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_chi", ((P$.DiffrnRefln$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("angle_chi"));
});

Clazz.newMeth(C$, 'getAngleKappa$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_kappa", ((P$.DiffrnRefln$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("angle_kappa"));
});

Clazz.newMeth(C$, 'getAngleOmega$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_omega", ((P$.DiffrnRefln$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("angle_omega"));
});

Clazz.newMeth(C$, 'getAnglePhi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_phi", ((P$.DiffrnRefln$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("angle_phi"));
});

Clazz.newMeth(C$, 'getAnglePsi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_psi", ((P$.DiffrnRefln$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("angle_psi"));
});

Clazz.newMeth(C$, 'getAngleTheta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_theta", ((P$.DiffrnRefln$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("angle_theta"));
});

Clazz.newMeth(C$, 'getAttenuatorCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("attenuator_code", ((P$.DiffrnRefln$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("attenuator_code"));
});

Clazz.newMeth(C$, 'getCountsBg1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("counts_bg_1", ((P$.DiffrnRefln$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("counts_bg_1"));
});

Clazz.newMeth(C$, 'getCountsBg2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("counts_bg_2", ((P$.DiffrnRefln$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("counts_bg_2"));
});

Clazz.newMeth(C$, 'getCountsNet$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("counts_net", ((P$.DiffrnRefln$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("counts_net"));
});

Clazz.newMeth(C$, 'getCountsPeak$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("counts_peak", ((P$.DiffrnRefln$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("counts_peak"));
});

Clazz.newMeth(C$, 'getCountsTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("counts_total", ((P$.DiffrnRefln$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("counts_total"));
});

Clazz.newMeth(C$, 'getDetectSlitHoriz$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detect_slit_horiz", ((P$.DiffrnRefln$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("detect_slit_horiz"));
});

Clazz.newMeth(C$, 'getDetectSlitVert$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detect_slit_vert", ((P$.DiffrnRefln$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("detect_slit_vert"));
});

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnRefln$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getElapsedTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("elapsed_time", ((P$.DiffrnRefln$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("elapsed_time"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.DiffrnRefln$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getIndexH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_h", ((P$.DiffrnRefln$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("index_h"));
});

Clazz.newMeth(C$, 'getIndexK$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_k", ((P$.DiffrnRefln$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("index_k"));
});

Clazz.newMeth(C$, 'getIndexL$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_l", ((P$.DiffrnRefln$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("index_l"));
});

Clazz.newMeth(C$, 'getIntensityNet$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("intensity_net", ((P$.DiffrnRefln$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("intensity_net"));
});

Clazz.newMeth(C$, 'getIntensitySigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("intensity_sigma", ((P$.DiffrnRefln$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("intensity_sigma"));
});

Clazz.newMeth(C$, 'getScaleGroupCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scale_group_code", ((P$.DiffrnRefln$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("scale_group_code"));
});

Clazz.newMeth(C$, 'getScanMode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scan_mode", ((P$.DiffrnRefln$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("scan_mode"));
});

Clazz.newMeth(C$, 'getScanModeBackgd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scan_mode_backgd", ((P$.DiffrnRefln$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("scan_mode_backgd"));
});

Clazz.newMeth(C$, 'getScanRate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scan_rate", ((P$.DiffrnRefln$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("scan_rate"));
});

Clazz.newMeth(C$, 'getScanTimeBackgd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scan_time_backgd", ((P$.DiffrnRefln$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("scan_time_backgd"));
});

Clazz.newMeth(C$, 'getScanWidth$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scan_width", ((P$.DiffrnRefln$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("scan_width"));
});

Clazz.newMeth(C$, 'getSintOverLambda$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sint_over_lambda", ((P$.DiffrnRefln$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("sint_over_lambda"));
});

Clazz.newMeth(C$, 'getStandardCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("standard_code", ((P$.DiffrnRefln$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("standard_code"));
});

Clazz.newMeth(C$, 'getWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength", ((P$.DiffrnRefln$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength"));
});

Clazz.newMeth(C$, 'getWavelengthId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength_id", ((P$.DiffrnRefln$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength_id"));
});

Clazz.newMeth(C$, 'getClassCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class_code", ((P$.DiffrnRefln$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("class_code"));
});

Clazz.newMeth(C$, 'getIntensityU$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("intensity_u", ((P$.DiffrnRefln$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRefln$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRefln$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("intensity_u"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
