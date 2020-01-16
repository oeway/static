(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmImageRecording", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAverageExposureTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("average_exposure_time", ((P$.EmImageRecording$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("average_exposure_time"));
});

Clazz.newMeth(C$, 'getAvgElectronDosePerImage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("avg_electron_dose_per_image", ((P$.EmImageRecording$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("avg_electron_dose_per_image"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmImageRecording$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDetectorMode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector_mode", ((P$.EmImageRecording$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("detector_mode"));
});

Clazz.newMeth(C$, 'getFilmOrDetectorModel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("film_or_detector_model", ((P$.EmImageRecording$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("film_or_detector_model"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmImageRecording$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImagingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("imaging_id", ((P$.EmImageRecording$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("imaging_id"));
});

Clazz.newMeth(C$, 'getNumDiffractionImages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_diffraction_images", ((P$.EmImageRecording$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("num_diffraction_images"));
});

Clazz.newMeth(C$, 'getNumGridsImaged$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_grids_imaged", ((P$.EmImageRecording$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("num_grids_imaged"));
});

Clazz.newMeth(C$, 'getNumRealImages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_real_images", ((P$.EmImageRecording$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageRecording$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageRecording$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("num_real_images"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
