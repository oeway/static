(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmModelingProtocol", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.IhmModelingProtocol$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getProtocolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protocol_id", ((P$.IhmModelingProtocol$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("protocol_id"));
});

Clazz.newMeth(C$, 'getStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_id", ((P$.IhmModelingProtocol$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("step_id"));
});

Clazz.newMeth(C$, 'getStructAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("struct_assembly_id", ((P$.IhmModelingProtocol$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("struct_assembly_id"));
});

Clazz.newMeth(C$, 'getDatasetGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_group_id", ((P$.IhmModelingProtocol$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_group_id"));
});

Clazz.newMeth(C$, 'getStructAssemblyDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("struct_assembly_description", ((P$.IhmModelingProtocol$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("struct_assembly_description"));
});

Clazz.newMeth(C$, 'getProtocolName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protocol_name", ((P$.IhmModelingProtocol$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("protocol_name"));
});

Clazz.newMeth(C$, 'getStepName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_name", ((P$.IhmModelingProtocol$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("step_name"));
});

Clazz.newMeth(C$, 'getStepMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_method", ((P$.IhmModelingProtocol$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("step_method"));
});

Clazz.newMeth(C$, 'getNumModelsBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_models_begin", ((P$.IhmModelingProtocol$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("num_models_begin"));
});

Clazz.newMeth(C$, 'getNumModelsEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_models_end", ((P$.IhmModelingProtocol$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("num_models_end"));
});

Clazz.newMeth(C$, 'getMultiScaleFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("multi_scale_flag", ((P$.IhmModelingProtocol$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("multi_scale_flag"));
});

Clazz.newMeth(C$, 'getMultiStateFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("multi_state_flag", ((P$.IhmModelingProtocol$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("multi_state_flag"));
});

Clazz.newMeth(C$, 'getOrderedFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordered_flag", ((P$.IhmModelingProtocol$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("ordered_flag"));
});

Clazz.newMeth(C$, 'getEnsembleFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_flag", ((P$.IhmModelingProtocol$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_flag"));
});

Clazz.newMeth(C$, 'getScriptFileId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("script_file_id", ((P$.IhmModelingProtocol$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("script_file_id"));
});

Clazz.newMeth(C$, 'getSoftwareId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_id", ((P$.IhmModelingProtocol$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelingProtocol$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelingProtocol$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("software_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
