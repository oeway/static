(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmModelRepresentation", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.IhmModelRepresentation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getRepresentationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("representation_id", ((P$.IhmModelRepresentation$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("representation_id"));
});

Clazz.newMeth(C$, 'getSegmentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("segment_id", ((P$.IhmModelRepresentation$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("segment_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.IhmModelRepresentation$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getEntityDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_description", ((P$.IhmModelRepresentation$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entity_description"));
});

Clazz.newMeth(C$, 'getEntityAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_asym_id", ((P$.IhmModelRepresentation$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("entity_asym_id"));
});

Clazz.newMeth(C$, 'getSeqIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_begin", ((P$.IhmModelRepresentation$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_begin"));
});

Clazz.newMeth(C$, 'getSeqIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_end", ((P$.IhmModelRepresentation$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_end"));
});

Clazz.newMeth(C$, 'getModelObjectPrimitive$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_object_primitive", ((P$.IhmModelRepresentation$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("model_object_primitive"));
});

Clazz.newMeth(C$, 'getStartingModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("starting_model_id", ((P$.IhmModelRepresentation$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("starting_model_id"));
});

Clazz.newMeth(C$, 'getModelMode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_mode", ((P$.IhmModelRepresentation$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("model_mode"));
});

Clazz.newMeth(C$, 'getModelGranularity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_granularity", ((P$.IhmModelRepresentation$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("model_granularity"));
});

Clazz.newMeth(C$, 'getModelObjectCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_object_count", ((P$.IhmModelRepresentation$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmModelRepresentation$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmModelRepresentation$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("model_object_count"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
