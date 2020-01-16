(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmDiffractionStats", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmDiffractionStats$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getFourierSpaceCoverage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fourier_space_coverage", ((P$.EmDiffractionStats$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("fourier_space_coverage"));
});

Clazz.newMeth(C$, 'getHighResolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("high_resolution", ((P$.EmDiffractionStats$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("high_resolution"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmDiffractionStats$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_processing_id", ((P$.EmDiffractionStats$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("image_processing_id"));
});

Clazz.newMeth(C$, 'getNumIntensitiesMeasured$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_intensities_measured", ((P$.EmDiffractionStats$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("num_intensities_measured"));
});

Clazz.newMeth(C$, 'getNumStructureFactors$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_structure_factors", ((P$.EmDiffractionStats$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("num_structure_factors"));
});

Clazz.newMeth(C$, 'getOverallPhaseError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("overall_phase_error", ((P$.EmDiffractionStats$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("overall_phase_error"));
});

Clazz.newMeth(C$, 'getOverallPhaseResidual$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("overall_phase_residual", ((P$.EmDiffractionStats$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("overall_phase_residual"));
});

Clazz.newMeth(C$, 'getPhaseErrorRejectionCriteria$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_error_rejection_criteria", ((P$.EmDiffractionStats$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("phase_error_rejection_criteria"));
});

Clazz.newMeth(C$, 'getRMerge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("r_merge", ((P$.EmDiffractionStats$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("r_merge"));
});

Clazz.newMeth(C$, 'getRSym$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("r_sym", ((P$.EmDiffractionStats$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDiffractionStats$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDiffractionStats$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("r_sym"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
