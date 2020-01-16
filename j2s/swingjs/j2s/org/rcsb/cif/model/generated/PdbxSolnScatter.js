(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSolnScatter", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxSolnScatter$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxSolnScatter$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxSolnScatter$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getSourceBeamline$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_beamline", ((P$.PdbxSolnScatter$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("source_beamline"));
});

Clazz.newMeth(C$, 'getSourceBeamlineInstrument$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_beamline_instrument", ((P$.PdbxSolnScatter$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("source_beamline_instrument"));
});

Clazz.newMeth(C$, 'getDetectorType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_type", ((P$.PdbxSolnScatter$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("detector_type"));
});

Clazz.newMeth(C$, 'getDetectorSpecific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_specific", ((P$.PdbxSolnScatter$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("detector_specific"));
});

Clazz.newMeth(C$, 'getSourceType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_type", ((P$.PdbxSolnScatter$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("source_type"));
});

Clazz.newMeth(C$, 'getSourceClass$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_class", ((P$.PdbxSolnScatter$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("source_class"));
});

Clazz.newMeth(C$, 'getNumTimeFrames$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_time_frames", ((P$.PdbxSolnScatter$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("num_time_frames"));
});

Clazz.newMeth(C$, 'getSamplePH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_pH", ((P$.PdbxSolnScatter$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("sample_pH"));
});

Clazz.newMeth(C$, 'getTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature", ((P$.PdbxSolnScatter$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("temperature"));
});

Clazz.newMeth(C$, 'getConcentrationRange$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("concentration_range", ((P$.PdbxSolnScatter$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("concentration_range"));
});

Clazz.newMeth(C$, 'getBufferName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("buffer_name", ((P$.PdbxSolnScatter$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("buffer_name"));
});

Clazz.newMeth(C$, 'getMeanGuinerRadius$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_guiner_radius", ((P$.PdbxSolnScatter$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("mean_guiner_radius"));
});

Clazz.newMeth(C$, 'getMeanGuinerRadiusEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_guiner_radius_esd", ((P$.PdbxSolnScatter$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("mean_guiner_radius_esd"));
});

Clazz.newMeth(C$, 'getMinMeanCrossSectionalRadiiGyration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("min_mean_cross_sectional_radii_gyration", ((P$.PdbxSolnScatter$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("min_mean_cross_sectional_radii_gyration"));
});

Clazz.newMeth(C$, 'getMinMeanCrossSectionalRadiiGyrationEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("min_mean_cross_sectional_radii_gyration_esd", ((P$.PdbxSolnScatter$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("min_mean_cross_sectional_radii_gyration_esd"));
});

Clazz.newMeth(C$, 'getMaxMeanCrossSectionalRadiiGyration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("max_mean_cross_sectional_radii_gyration", ((P$.PdbxSolnScatter$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("max_mean_cross_sectional_radii_gyration"));
});

Clazz.newMeth(C$, 'getMaxMeanCrossSectionalRadiiGyrationEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("max_mean_cross_sectional_radii_gyration_esd", ((P$.PdbxSolnScatter$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("max_mean_cross_sectional_radii_gyration_esd"));
});

Clazz.newMeth(C$, 'getProteinLength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protein_length", ((P$.PdbxSolnScatter$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("protein_length"));
});

Clazz.newMeth(C$, 'getDataReductionSoftwareList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_reduction_software_list", ((P$.PdbxSolnScatter$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("data_reduction_software_list"));
});

Clazz.newMeth(C$, 'getDataAnalysisSoftwareList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_analysis_software_list", ((P$.PdbxSolnScatter$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatter$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatter$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("data_analysis_software_list"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
