(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnRadiation", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCollimation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("collimation", ((P$.DiffrnRadiation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("collimation"));
});

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnRadiation$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getFilterEdge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("filter_edge", ((P$.DiffrnRadiation$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("filter_edge"));
});

Clazz.newMeth(C$, 'getInhomogeneity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("inhomogeneity", ((P$.DiffrnRadiation$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("inhomogeneity"));
});

Clazz.newMeth(C$, 'getMonochromator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("monochromator", ((P$.DiffrnRadiation$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("monochromator"));
});

Clazz.newMeth(C$, 'getPolarisnNorm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("polarisn_norm", ((P$.DiffrnRadiation$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("polarisn_norm"));
});

Clazz.newMeth(C$, 'getPolarisnRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("polarisn_ratio", ((P$.DiffrnRadiation$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("polarisn_ratio"));
});

Clazz.newMeth(C$, 'getProbe$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("probe", ((P$.DiffrnRadiation$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("probe"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.DiffrnRadiation$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getXraySymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("xray_symbol", ((P$.DiffrnRadiation$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("xray_symbol"));
});

Clazz.newMeth(C$, 'getWavelengthId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength_id", ((P$.DiffrnRadiation$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength_id"));
});

Clazz.newMeth(C$, 'getPdbxMonochromaticOrLaueML$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_monochromatic_or_laue_m_l", ((P$.DiffrnRadiation$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_monochromatic_or_laue_m_l"));
});

Clazz.newMeth(C$, 'getPdbxWavelengthList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_wavelength_list", ((P$.DiffrnRadiation$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_wavelength_list"));
});

Clazz.newMeth(C$, 'getPdbxWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_wavelength", ((P$.DiffrnRadiation$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_wavelength"));
});

Clazz.newMeth(C$, 'getPdbxDiffrnProtocol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_diffrn_protocol", ((P$.DiffrnRadiation$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_diffrn_protocol"));
});

Clazz.newMeth(C$, 'getPdbxAnalyzer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_analyzer", ((P$.DiffrnRadiation$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_analyzer"));
});

Clazz.newMeth(C$, 'getPdbxScatteringType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_scattering_type", ((P$.DiffrnRadiation$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnRadiation$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnRadiation$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_scattering_type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
