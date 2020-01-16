(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmGeometricObjectDistanceRestraint$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getObjectId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_id", ((P$.IhmGeometricObjectDistanceRestraint$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("object_id"));
});

Clazz.newMeth(C$, 'getFeatureId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_id", ((P$.IhmGeometricObjectDistanceRestraint$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("feature_id"));
});

Clazz.newMeth(C$, 'getObjectCharacteristic$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_characteristic", ((P$.IhmGeometricObjectDistanceRestraint$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("object_characteristic"));
});

Clazz.newMeth(C$, 'getRestraintType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("restraint_type", ((P$.IhmGeometricObjectDistanceRestraint$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("restraint_type"));
});

Clazz.newMeth(C$, 'getHarmonicForceConstant$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("harmonic_force_constant", ((P$.IhmGeometricObjectDistanceRestraint$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("harmonic_force_constant"));
});

Clazz.newMeth(C$, 'getGroupConditionality$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_conditionality", ((P$.IhmGeometricObjectDistanceRestraint$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("group_conditionality"));
});

Clazz.newMeth(C$, 'getDistanceLowerLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_lower_limit", ((P$.IhmGeometricObjectDistanceRestraint$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("distance_lower_limit"));
});

Clazz.newMeth(C$, 'getDistanceUpperLimit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_upper_limit", ((P$.IhmGeometricObjectDistanceRestraint$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("distance_upper_limit"));
});

Clazz.newMeth(C$, 'getDistanceLowerLimitEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_lower_limit_esd", ((P$.IhmGeometricObjectDistanceRestraint$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("distance_lower_limit_esd"));
});

Clazz.newMeth(C$, 'getDistanceUpperLimitEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_upper_limit_esd", ((P$.IhmGeometricObjectDistanceRestraint$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("distance_upper_limit_esd"));
});

Clazz.newMeth(C$, 'getDistanceProbability$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_probability", ((P$.IhmGeometricObjectDistanceRestraint$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("distance_probability"));
});

Clazz.newMeth(C$, 'getDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_list_id", ((P$.IhmGeometricObjectDistanceRestraint$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_list_id"));
});

Clazz.newMeth(C$, 'getOtherDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("other_details", ((P$.IhmGeometricObjectDistanceRestraint$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectDistanceRestraint$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectDistanceRestraint$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("other_details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
