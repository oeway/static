(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxNmrSpectralDim$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAtomType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_type", ((P$.PdbxNmrSpectralDim$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_type"));
});

Clazz.newMeth(C$, 'getAtomIsotopeNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_isotope_number", ((P$.PdbxNmrSpectralDim$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_isotope_number"));
});

Clazz.newMeth(C$, 'getSpectralRegion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("spectral_region", ((P$.PdbxNmrSpectralDim$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("spectral_region"));
});

Clazz.newMeth(C$, 'getMagnetizationLinkageId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("magnetization_linkage_id", ((P$.PdbxNmrSpectralDim$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("magnetization_linkage_id"));
});

Clazz.newMeth(C$, 'getSweepWidth$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sweep_width", ((P$.PdbxNmrSpectralDim$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sweep_width"));
});

Clazz.newMeth(C$, 'getEncodingCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("encoding_code", ((P$.PdbxNmrSpectralDim$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("encoding_code"));
});

Clazz.newMeth(C$, 'getEncodedSourceDimensionId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("encoded_source_dimension_id", ((P$.PdbxNmrSpectralDim$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("encoded_source_dimension_id"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrSpectralDim$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getSpectralPeakListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("spectral_peak_list_id", ((P$.PdbxNmrSpectralDim$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("spectral_peak_list_id"));
});

Clazz.newMeth(C$, 'getSweepWidthUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sweep_width_units", ((P$.PdbxNmrSpectralDim$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("sweep_width_units"));
});

Clazz.newMeth(C$, 'getCenterFrequencyOffset$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("center_frequency_offset", ((P$.PdbxNmrSpectralDim$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("center_frequency_offset"));
});

Clazz.newMeth(C$, 'getUnderSamplingType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("under_sampling_type", ((P$.PdbxNmrSpectralDim$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralDim$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralDim$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("under_sampling_type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
