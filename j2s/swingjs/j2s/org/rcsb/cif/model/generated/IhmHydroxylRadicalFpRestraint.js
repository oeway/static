(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmHydroxylRadicalFpRestraint$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("group_id"));
});

Clazz.newMeth(C$, 'getEntityDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_description", ((P$.IhmHydroxylRadicalFpRestraint$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_description"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id"));
});

Clazz.newMeth(C$, 'getFpRate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fp_rate", ((P$.IhmHydroxylRadicalFpRestraint$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("fp_rate"));
});

Clazz.newMeth(C$, 'getFpRateError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fp_rate_error", ((P$.IhmHydroxylRadicalFpRestraint$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("fp_rate_error"));
});

Clazz.newMeth(C$, 'getLogPf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("log_pf", ((P$.IhmHydroxylRadicalFpRestraint$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("log_pf"));
});

Clazz.newMeth(C$, 'getLogPfError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("log_pf_error", ((P$.IhmHydroxylRadicalFpRestraint$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("log_pf_error"));
});

Clazz.newMeth(C$, 'getPredictedSasa$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("predicted_sasa", ((P$.IhmHydroxylRadicalFpRestraint$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("predicted_sasa"));
});

Clazz.newMeth(C$, 'getDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_list_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_list_id"));
});

Clazz.newMeth(C$, 'getSoftwareId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_id", ((P$.IhmHydroxylRadicalFpRestraint$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmHydroxylRadicalFpRestraint$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmHydroxylRadicalFpRestraint$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("software_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
