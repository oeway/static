(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Exptl", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAbsorptCoefficientMu$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("absorpt_coefficient_mu", ((P$.Exptl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("absorpt_coefficient_mu"));
});

Clazz.newMeth(C$, 'getAbsorptCorrectionTMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("absorpt_correction_T_max", ((P$.Exptl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("absorpt_correction_T_max"));
});

Clazz.newMeth(C$, 'getAbsorptCorrectionTMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("absorpt_correction_T_min", ((P$.Exptl$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("absorpt_correction_T_min"));
});

Clazz.newMeth(C$, 'getAbsorptCorrectionType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("absorpt_correction_type", ((P$.Exptl$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("absorpt_correction_type"));
});

Clazz.newMeth(C$, 'getAbsorptProcessDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("absorpt_process_details", ((P$.Exptl$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("absorpt_process_details"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Exptl$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCrystalsNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystals_number", ((P$.Exptl$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("crystals_number"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Exptl$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.Exptl$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getMethodDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method_details", ((P$.Exptl$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Exptl$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Exptl$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("method_details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
