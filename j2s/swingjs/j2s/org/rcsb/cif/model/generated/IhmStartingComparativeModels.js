(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.IhmStartingComparativeModels$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getStartingModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_id", ((P$.IhmStartingComparativeModels$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_id"));
});

Clazz.newMeth(C$, 'getStartingModelAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_auth_asym_id", ((P$.IhmStartingComparativeModels$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_auth_asym_id"));
});

Clazz.newMeth(C$, 'getStartingModelSeqIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_seq_id_begin", ((P$.IhmStartingComparativeModels$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_seq_id_begin"));
});

Clazz.newMeth(C$, 'getStartingModelSeqIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_seq_id_end", ((P$.IhmStartingComparativeModels$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_seq_id_end"));
});

Clazz.newMeth(C$, 'getTemplateAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("template_auth_asym_id", ((P$.IhmStartingComparativeModels$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("template_auth_asym_id"));
});

Clazz.newMeth(C$, 'getTemplateSeqIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("template_seq_id_begin", ((P$.IhmStartingComparativeModels$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("template_seq_id_begin"));
});

Clazz.newMeth(C$, 'getTemplateSeqIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("template_seq_id_end", ((P$.IhmStartingComparativeModels$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("template_seq_id_end"));
});

Clazz.newMeth(C$, 'getTemplateSequenceIdentity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("template_sequence_identity", ((P$.IhmStartingComparativeModels$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("template_sequence_identity"));
});

Clazz.newMeth(C$, 'getTemplateSequenceIdentityDenominator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("template_sequence_identity_denominator", ((P$.IhmStartingComparativeModels$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("template_sequence_identity_denominator"));
});

Clazz.newMeth(C$, 'getTemplateDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("template_dataset_list_id", ((P$.IhmStartingComparativeModels$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("template_dataset_list_id"));
});

Clazz.newMeth(C$, 'getAlignmentFileId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alignment_file_id", ((P$.IhmStartingComparativeModels$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingComparativeModels$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingComparativeModels$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("alignment_file_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
