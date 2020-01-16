(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getStartingModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_id", ((P$.IhmStartingModelDetails$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.IhmStartingModelDetails$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getEntityDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_description", ((P$.IhmStartingModelDetails$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_description"));
});

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.IhmStartingModelDetails$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getSeqIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_begin", ((P$.IhmStartingModelDetails$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_begin"));
});

Clazz.newMeth(C$, 'getSeqIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_end", ((P$.IhmStartingModelDetails$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_end"));
});

Clazz.newMeth(C$, 'getStartingModelSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_source", ((P$.IhmStartingModelDetails$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_source"));
});

Clazz.newMeth(C$, 'getStartingModelAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_auth_asym_id", ((P$.IhmStartingModelDetails$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_auth_asym_id"));
});

Clazz.newMeth(C$, 'getStartingModelSequenceOffset$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_sequence_offset", ((P$.IhmStartingModelDetails$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_sequence_offset"));
});

Clazz.newMeth(C$, 'getDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_list_id", ((P$.IhmStartingModelDetails$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmStartingModelDetails$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmStartingModelDetails$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_list_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
