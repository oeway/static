(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrSpectralPeakList$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxNmrSpectralPeakList$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getDataFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_file_name", ((P$.PdbxNmrSpectralPeakList$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("data_file_name"));
});

Clazz.newMeth(C$, 'getSolutionId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solution_id", ((P$.PdbxNmrSpectralPeakList$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("solution_id"));
});

Clazz.newMeth(C$, 'getConditionsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conditions_id", ((P$.PdbxNmrSpectralPeakList$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("conditions_id"));
});

Clazz.newMeth(C$, 'getExperimentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experiment_id", ((P$.PdbxNmrSpectralPeakList$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("experiment_id"));
});

Clazz.newMeth(C$, 'getNumberOfSpectralDimensions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_of_spectral_dimensions", ((P$.PdbxNmrSpectralPeakList$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("number_of_spectral_dimensions"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxNmrSpectralPeakList$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getTextDataFormat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("text_data_format", ((P$.PdbxNmrSpectralPeakList$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("text_data_format"));
});

Clazz.newMeth(C$, 'getLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label", ((P$.PdbxNmrSpectralPeakList$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("label"));
});

Clazz.newMeth(C$, 'getConditionsLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conditions_label", ((P$.PdbxNmrSpectralPeakList$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSpectralPeakList$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSpectralPeakList$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("conditions_label"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
