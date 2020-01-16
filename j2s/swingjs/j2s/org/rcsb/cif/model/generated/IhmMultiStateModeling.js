(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.IhmMultiStateModeling$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getStateId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("state_id", ((P$.IhmMultiStateModeling$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("state_id"));
});

Clazz.newMeth(C$, 'getStateGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("state_group_id", ((P$.IhmMultiStateModeling$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("state_group_id"));
});

Clazz.newMeth(C$, 'getPopulationFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("population_fraction", ((P$.IhmMultiStateModeling$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("population_fraction"));
});

Clazz.newMeth(C$, 'getPopulationFractionSd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("population_fraction_sd", ((P$.IhmMultiStateModeling$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("population_fraction_sd"));
});

Clazz.newMeth(C$, 'getStateType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("state_type", ((P$.IhmMultiStateModeling$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("state_type"));
});

Clazz.newMeth(C$, 'getStateName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("state_name", ((P$.IhmMultiStateModeling$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("state_name"));
});

Clazz.newMeth(C$, 'getModelGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_group_id", ((P$.IhmMultiStateModeling$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("model_group_id"));
});

Clazz.newMeth(C$, 'getExperimentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experiment_type", ((P$.IhmMultiStateModeling$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("experiment_type"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.IhmMultiStateModeling$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmMultiStateModeling$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmMultiStateModeling$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
