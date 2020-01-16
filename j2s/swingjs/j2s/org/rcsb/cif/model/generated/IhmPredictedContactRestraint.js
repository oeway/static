(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmPredictedContactRestraint$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_id", ((P$.IhmPredictedContactRestraint$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("group_id"));
});

Clazz.newMeth(C$, 'getEntityDescription1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_description_1", ((P$.IhmPredictedContactRestraint$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_description_1"));
});

Clazz.newMeth(C$, 'getEntityDescription2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_description_2", ((P$.IhmPredictedContactRestraint$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("entity_description_2"));
});

Clazz.newMeth(C$, 'getEntityId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id_1", ((P$.IhmPredictedContactRestraint$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id_1"));
});

Clazz.newMeth(C$, 'getEntityId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id_2", ((P$.IhmPredictedContactRestraint$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id_2"));
});

Clazz.newMeth(C$, 'getAsymId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id_1", ((P$.IhmPredictedContactRestraint$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id_1"));
});

Clazz.newMeth(C$, 'getAsymId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id_2", ((P$.IhmPredictedContactRestraint$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id_2"));
});

Clazz.newMeth(C$, 'getCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_1", ((P$.IhmPredictedContactRestraint$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_1"));
});

Clazz.newMeth(C$, 'getCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_2", ((P$.IhmPredictedContactRestraint$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_2"));
});

Clazz.newMeth(C$, 'getSeqId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_1", ((P$.IhmPredictedContactRestraint$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_1"));
});

Clazz.newMeth(C$, 'getSeqId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_2", ((P$.IhmPredictedContactRestraint$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_2"));
});

Clazz.newMeth(C$, 'getAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_1", ((P$.IhmPredictedContactRestraint$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_2", ((P$.IhmPredictedContactRestraint$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_2"));
});

Clazz.newMeth(C$, 'getDistanceLowerLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_lower_limit", ((P$.IhmPredictedContactRestraint$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("distance_lower_limit"));
});

Clazz.newMeth(C$, 'getDistanceUpperLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_upper_limit", ((P$.IhmPredictedContactRestraint$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("distance_upper_limit"));
});

Clazz.newMeth(C$, 'getProbability$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("probability", ((P$.IhmPredictedContactRestraint$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("probability"));
});

Clazz.newMeth(C$, 'getRestraintType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("restraint_type", ((P$.IhmPredictedContactRestraint$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("restraint_type"));
});

Clazz.newMeth(C$, 'getModelGranularity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_granularity", ((P$.IhmPredictedContactRestraint$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("model_granularity"));
});

Clazz.newMeth(C$, 'getDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_list_id", ((P$.IhmPredictedContactRestraint$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_list_id"));
});

Clazz.newMeth(C$, 'getSoftwareId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_id", ((P$.IhmPredictedContactRestraint$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmPredictedContactRestraint$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmPredictedContactRestraint$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("software_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
