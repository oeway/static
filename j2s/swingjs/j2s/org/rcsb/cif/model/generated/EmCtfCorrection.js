(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmCtfCorrection", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAmplitudeCorrection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("amplitude_correction", ((P$.EmCtfCorrection$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("amplitude_correction"));
});

Clazz.newMeth(C$, 'getAmplitudeCorrectionFactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("amplitude_correction_factor", ((P$.EmCtfCorrection$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("amplitude_correction_factor"));
});

Clazz.newMeth(C$, 'getAmplitudeCorrectionSpace$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("amplitude_correction_space", ((P$.EmCtfCorrection$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("amplitude_correction_space"));
});

Clazz.newMeth(C$, 'getCorrectionOperation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correction_operation", ((P$.EmCtfCorrection$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("correction_operation"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmCtfCorrection$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEmImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("em_image_processing_id", ((P$.EmCtfCorrection$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("em_image_processing_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmCtfCorrection$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPhaseReversal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_reversal", ((P$.EmCtfCorrection$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("phase_reversal"));
});

Clazz.newMeth(C$, 'getPhaseReversalAnisotropic$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_reversal_anisotropic", ((P$.EmCtfCorrection$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("phase_reversal_anisotropic"));
});

Clazz.newMeth(C$, 'getPhaseReversalCorrectionSpace$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phase_reversal_correction_space", ((P$.EmCtfCorrection$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("phase_reversal_correction_space"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.EmCtfCorrection$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCtfCorrection$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCtfCorrection$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
