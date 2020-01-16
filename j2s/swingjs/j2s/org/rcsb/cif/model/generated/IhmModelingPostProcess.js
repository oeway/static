(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmModelingPostProcess$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getProtocolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protocol_id", ((P$.IhmModelingPostProcess$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("protocol_id"));
});

Clazz.newMeth(C$, 'getAnalysisId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("analysis_id", ((P$.IhmModelingPostProcess$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("analysis_id"));
});

Clazz.newMeth(C$, 'getStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_id", ((P$.IhmModelingPostProcess$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("step_id"));
});

Clazz.newMeth(C$, 'getStructAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("struct_assembly_id", ((P$.IhmModelingPostProcess$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("struct_assembly_id"));
});

Clazz.newMeth(C$, 'getDatasetGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_group_id", ((P$.IhmModelingPostProcess$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_group_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.IhmModelingPostProcess$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getFeature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature", ((P$.IhmModelingPostProcess$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("feature"));
});

Clazz.newMeth(C$, 'getFeatureName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_name", ((P$.IhmModelingPostProcess$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("feature_name"));
});

Clazz.newMeth(C$, 'getNumModelsBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_models_begin", ((P$.IhmModelingPostProcess$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("num_models_begin"));
});

Clazz.newMeth(C$, 'getNumModelsEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_models_end", ((P$.IhmModelingPostProcess$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("num_models_end"));
});

Clazz.newMeth(C$, 'getScriptFileId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("script_file_id", ((P$.IhmModelingPostProcess$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("script_file_id"));
});

Clazz.newMeth(C$, 'getSoftwareId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_id", ((P$.IhmModelingPostProcess$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingPostProcess$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingPostProcess$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("software_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
