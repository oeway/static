(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDerId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("der_id", ((P$.PhasingMIRDerRefln$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("der_id"));
});

Clazz.newMeth(C$, 'getFCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_calc", ((P$.PhasingMIRDerRefln$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("F_calc"));
});

Clazz.newMeth(C$, 'getFCalcAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_calc_au", ((P$.PhasingMIRDerRefln$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("F_calc_au"));
});

Clazz.newMeth(C$, 'getFMeas$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas", ((P$.PhasingMIRDerRefln$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas"));
});

Clazz.newMeth(C$, 'getFMeasAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas_au", ((P$.PhasingMIRDerRefln$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas_au"));
});

Clazz.newMeth(C$, 'getFMeasSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas_sigma", ((P$.PhasingMIRDerRefln$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas_sigma"));
});

Clazz.newMeth(C$, 'getFMeasSigmaAu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("F_meas_sigma_au", ((P$.PhasingMIRDerRefln$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("F_meas_sigma_au"));
});

Clazz.newMeth(C$, 'getHLAIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("HL_A_iso", ((P$.PhasingMIRDerRefln$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("HL_A_iso"));
});

Clazz.newMeth(C$, 'getHLBIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("HL_B_iso", ((P$.PhasingMIRDerRefln$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("HL_B_iso"));
});

Clazz.newMeth(C$, 'getHLCIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("HL_C_iso", ((P$.PhasingMIRDerRefln$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("HL_C_iso"));
});

Clazz.newMeth(C$, 'getHLDIso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("HL_D_iso", ((P$.PhasingMIRDerRefln$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("HL_D_iso"));
});

Clazz.newMeth(C$, 'getIndexH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_h", ((P$.PhasingMIRDerRefln$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("index_h"));
});

Clazz.newMeth(C$, 'getIndexK$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_k", ((P$.PhasingMIRDerRefln$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("index_k"));
});

Clazz.newMeth(C$, 'getIndexL$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_l", ((P$.PhasingMIRDerRefln$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("index_l"));
});

Clazz.newMeth(C$, 'getPhaseCalc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_calc", ((P$.PhasingMIRDerRefln$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("phase_calc"));
});

Clazz.newMeth(C$, 'getSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("set_id", ((P$.PhasingMIRDerRefln$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMIRDerRefln$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMIRDerRefln$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("set_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
