(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Em3dReconstruction", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Em3dReconstruction$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.Em3dReconstruction$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.Em3dReconstruction$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getAlgorithm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("algorithm", ((P$.Em3dReconstruction$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("algorithm"));
});

Clazz.newMeth(C$, 'getCitationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("citation_id", ((P$.Em3dReconstruction$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("citation_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Em3dReconstruction$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getResolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("resolution", ((P$.Em3dReconstruction$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("resolution"));
});

Clazz.newMeth(C$, 'getResolutionMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("resolution_method", ((P$.Em3dReconstruction$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("resolution_method"));
});

Clazz.newMeth(C$, 'getMagnificationCalibration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("magnification_calibration", ((P$.Em3dReconstruction$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("magnification_calibration"));
});

Clazz.newMeth(C$, 'getCtfCorrectionMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ctf_correction_method", ((P$.Em3dReconstruction$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ctf_correction_method"));
});

Clazz.newMeth(C$, 'getNominalPixelSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nominal_pixel_size", ((P$.Em3dReconstruction$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("nominal_pixel_size"));
});

Clazz.newMeth(C$, 'getActualPixelSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("actual_pixel_size", ((P$.Em3dReconstruction$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("actual_pixel_size"));
});

Clazz.newMeth(C$, 'getNumParticles$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_particles", ((P$.Em3dReconstruction$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("num_particles"));
});

Clazz.newMeth(C$, 'getEulerAnglesDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("euler_angles_details", ((P$.Em3dReconstruction$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("euler_angles_details"));
});

Clazz.newMeth(C$, 'getNumClassAverages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_class_averages", ((P$.Em3dReconstruction$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("num_class_averages"));
});

Clazz.newMeth(C$, 'getSoftware$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software", ((P$.Em3dReconstruction$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("software"));
});

Clazz.newMeth(C$, 'getFscType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fsc_type", ((P$.Em3dReconstruction$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("fsc_type"));
});

Clazz.newMeth(C$, 'getRefinementType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_type", ((P$.Em3dReconstruction$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_type"));
});

Clazz.newMeth(C$, 'getImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_processing_id", ((P$.Em3dReconstruction$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("image_processing_id"));
});

Clazz.newMeth(C$, 'getSymmetryType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_type", ((P$.Em3dReconstruction$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em3dReconstruction$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em3dReconstruction$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
