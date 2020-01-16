(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmDerivedDistanceRestraint$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_id", ((P$.IhmDerivedDistanceRestraint$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("group_id"));
});

Clazz.newMeth(C$, 'getFeatureId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_id_1", ((P$.IhmDerivedDistanceRestraint$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("feature_id_1"));
});

Clazz.newMeth(C$, 'getFeatureId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_id_2", ((P$.IhmDerivedDistanceRestraint$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("feature_id_2"));
});

Clazz.newMeth(C$, 'getGroupConditionality$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_conditionality", ((P$.IhmDerivedDistanceRestraint$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("group_conditionality"));
});

Clazz.newMeth(C$, 'getRandomExclusionFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("random_exclusion_fraction", ((P$.IhmDerivedDistanceRestraint$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("random_exclusion_fraction"));
});

Clazz.newMeth(C$, 'getDistanceLowerLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_lower_limit", ((P$.IhmDerivedDistanceRestraint$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("distance_lower_limit"));
});

Clazz.newMeth(C$, 'getDistanceUpperLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_upper_limit", ((P$.IhmDerivedDistanceRestraint$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("distance_upper_limit"));
});

Clazz.newMeth(C$, 'getDistanceLowerLimitEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_lower_limit_esd", ((P$.IhmDerivedDistanceRestraint$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("distance_lower_limit_esd"));
});

Clazz.newMeth(C$, 'getDistanceUpperLimitEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_upper_limit_esd", ((P$.IhmDerivedDistanceRestraint$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("distance_upper_limit_esd"));
});

Clazz.newMeth(C$, 'getProbability$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("probability", ((P$.IhmDerivedDistanceRestraint$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("probability"));
});

Clazz.newMeth(C$, 'getRestraintType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("restraint_type", ((P$.IhmDerivedDistanceRestraint$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("restraint_type"));
});

Clazz.newMeth(C$, 'getDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_list_id", ((P$.IhmDerivedDistanceRestraint$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmDerivedDistanceRestraint$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmDerivedDistanceRestraint$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_list_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
