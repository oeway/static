(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEnsembleId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_id", ((P$.IhmEnsembleInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_id"));
});

Clazz.newMeth(C$, 'getEnsembleName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_name", ((P$.IhmEnsembleInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_name"));
});

Clazz.newMeth(C$, 'getPostProcessId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("post_process_id", ((P$.IhmEnsembleInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("post_process_id"));
});

Clazz.newMeth(C$, 'getModelGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_group_id", ((P$.IhmEnsembleInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("model_group_id"));
});

Clazz.newMeth(C$, 'getEnsembleClusteringMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_clustering_method", ((P$.IhmEnsembleInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_clustering_method"));
});

Clazz.newMeth(C$, 'getEnsembleClusteringFeature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_clustering_feature", ((P$.IhmEnsembleInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_clustering_feature"));
});

Clazz.newMeth(C$, 'getNumEnsembleModels$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_ensemble_models", ((P$.IhmEnsembleInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("num_ensemble_models"));
});

Clazz.newMeth(C$, 'getNumEnsembleModelsDeposited$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_ensemble_models_deposited", ((P$.IhmEnsembleInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("num_ensemble_models_deposited"));
});

Clazz.newMeth(C$, 'getEnsemblePrecisionValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_precision_value", ((P$.IhmEnsembleInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_precision_value"));
});

Clazz.newMeth(C$, 'getEnsembleFileId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ensemble_file_id", ((P$.IhmEnsembleInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmEnsembleInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmEnsembleInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ensemble_file_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
