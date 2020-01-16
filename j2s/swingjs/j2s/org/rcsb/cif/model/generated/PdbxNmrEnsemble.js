(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrEnsemble$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getConformersCalculatedTotalNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conformers_calculated_total_number", ((P$.PdbxNmrEnsemble$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("conformers_calculated_total_number"));
});

Clazz.newMeth(C$, 'getConformersSubmittedTotalNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conformers_submitted_total_number", ((P$.PdbxNmrEnsemble$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("conformers_submitted_total_number"));
});

Clazz.newMeth(C$, 'getConformerSelectionCriteria$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conformer_selection_criteria", ((P$.PdbxNmrEnsemble$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("conformer_selection_criteria"));
});

Clazz.newMeth(C$, 'getRepresentativeConformer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("representative_conformer", ((P$.PdbxNmrEnsemble$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("representative_conformer"));
});

Clazz.newMeth(C$, 'getAverageConstraintsPerResidue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("average_constraints_per_residue", ((P$.PdbxNmrEnsemble$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("average_constraints_per_residue"));
});

Clazz.newMeth(C$, 'getAverageConstraintViolationsPerResidue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("average_constraint_violations_per_residue", ((P$.PdbxNmrEnsemble$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("average_constraint_violations_per_residue"));
});

Clazz.newMeth(C$, 'getMaximumDistanceConstraintViolation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("maximum_distance_constraint_violation", ((P$.PdbxNmrEnsemble$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("maximum_distance_constraint_violation"));
});

Clazz.newMeth(C$, 'getAverageDistanceConstraintViolation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("average_distance_constraint_violation", ((P$.PdbxNmrEnsemble$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("average_distance_constraint_violation"));
});

Clazz.newMeth(C$, 'getMaximumUpperDistanceConstraintViolation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("maximum_upper_distance_constraint_violation", ((P$.PdbxNmrEnsemble$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("maximum_upper_distance_constraint_violation"));
});

Clazz.newMeth(C$, 'getMaximumLowerDistanceConstraintViolation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("maximum_lower_distance_constraint_violation", ((P$.PdbxNmrEnsemble$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("maximum_lower_distance_constraint_violation"));
});

Clazz.newMeth(C$, 'getDistanceConstraintViolationMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_constraint_violation_method", ((P$.PdbxNmrEnsemble$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("distance_constraint_violation_method"));
});

Clazz.newMeth(C$, 'getMaximumTorsionAngleConstraintViolation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("maximum_torsion_angle_constraint_violation", ((P$.PdbxNmrEnsemble$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("maximum_torsion_angle_constraint_violation"));
});

Clazz.newMeth(C$, 'getAverageTorsionAngleConstraintViolation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("average_torsion_angle_constraint_violation", ((P$.PdbxNmrEnsemble$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("average_torsion_angle_constraint_violation"));
});

Clazz.newMeth(C$, 'getTorsionAngleConstraintViolationMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("torsion_angle_constraint_violation_method", ((P$.PdbxNmrEnsemble$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsemble$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsemble$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("torsion_angle_constraint_violation_method"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
