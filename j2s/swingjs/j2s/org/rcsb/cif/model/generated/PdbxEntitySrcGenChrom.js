(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxEntitySrcGenChrom$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxEntitySrcGenChrom$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_id", ((P$.PdbxEntitySrcGenChrom$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("step_id"));
});

Clazz.newMeth(C$, 'getNextStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_step_id", ((P$.PdbxEntitySrcGenChrom$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("next_step_id"));
});

Clazz.newMeth(C$, 'getEndConstructId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_construct_id", ((P$.PdbxEntitySrcGenChrom$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("end_construct_id"));
});

Clazz.newMeth(C$, 'getRobotId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("robot_id", ((P$.PdbxEntitySrcGenChrom$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("robot_id"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.PdbxEntitySrcGenChrom$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getColumnType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("column_type", ((P$.PdbxEntitySrcGenChrom$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("column_type"));
});

Clazz.newMeth(C$, 'getColumnVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("column_volume", ((P$.PdbxEntitySrcGenChrom$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("column_volume"));
});

Clazz.newMeth(C$, 'getColumnTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("column_temperature", ((P$.PdbxEntitySrcGenChrom$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("column_temperature"));
});

Clazz.newMeth(C$, 'getEquilibrationBufferId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("equilibration_buffer_id", ((P$.PdbxEntitySrcGenChrom$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("equilibration_buffer_id"));
});

Clazz.newMeth(C$, 'getFlowRate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("flow_rate", ((P$.PdbxEntitySrcGenChrom$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("flow_rate"));
});

Clazz.newMeth(C$, 'getElutionBufferId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("elution_buffer_id", ((P$.PdbxEntitySrcGenChrom$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("elution_buffer_id"));
});

Clazz.newMeth(C$, 'getElutionProtocol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("elution_protocol", ((P$.PdbxEntitySrcGenChrom$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("elution_protocol"));
});

Clazz.newMeth(C$, 'getSamplePrepDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_prep_details", ((P$.PdbxEntitySrcGenChrom$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("sample_prep_details"));
});

Clazz.newMeth(C$, 'getSampleVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_volume", ((P$.PdbxEntitySrcGenChrom$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("sample_volume"));
});

Clazz.newMeth(C$, 'getSampleConcentration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_concentration", ((P$.PdbxEntitySrcGenChrom$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("sample_concentration"));
});

Clazz.newMeth(C$, 'getSampleConcMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_conc_method", ((P$.PdbxEntitySrcGenChrom$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("sample_conc_method"));
});

Clazz.newMeth(C$, 'getVolumePooledFractions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume_pooled_fractions", ((P$.PdbxEntitySrcGenChrom$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("volume_pooled_fractions"));
});

Clazz.newMeth(C$, 'getYieldPooledFractions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("yield_pooled_fractions", ((P$.PdbxEntitySrcGenChrom$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("yield_pooled_fractions"));
});

Clazz.newMeth(C$, 'getYieldMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("yield_method", ((P$.PdbxEntitySrcGenChrom$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("yield_method"));
});

Clazz.newMeth(C$, 'getPostTreatment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("post_treatment", ((P$.PdbxEntitySrcGenChrom$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenChrom$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenChrom$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("post_treatment"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:44 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
