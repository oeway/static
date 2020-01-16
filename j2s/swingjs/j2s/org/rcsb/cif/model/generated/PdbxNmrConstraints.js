(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrConstraints$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getNOEConstraintsTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_constraints_total", ((P$.PdbxNmrConstraints$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_constraints_total"));
});

Clazz.newMeth(C$, 'getNOEIntraresidueTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_intraresidue_total_count", ((P$.PdbxNmrConstraints$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_intraresidue_total_count"));
});

Clazz.newMeth(C$, 'getNOEInterentityTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_interentity_total_count", ((P$.PdbxNmrConstraints$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_interentity_total_count"));
});

Clazz.newMeth(C$, 'getNOESequentialTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_sequential_total_count", ((P$.PdbxNmrConstraints$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_sequential_total_count"));
});

Clazz.newMeth(C$, 'getNOEMediumRangeTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_medium_range_total_count", ((P$.PdbxNmrConstraints$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_medium_range_total_count"));
});

Clazz.newMeth(C$, 'getNOELongRangeTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_long_range_total_count", ((P$.PdbxNmrConstraints$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_long_range_total_count"));
});

Clazz.newMeth(C$, 'getProteinPhiAngleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protein_phi_angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("protein_phi_angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getProteinPsiAngleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protein_psi_angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("protein_psi_angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getProteinChiAngleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protein_chi_angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("protein_chi_angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getProteinOtherAngleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("protein_other_angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("protein_other_angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNOEInterprotonDistanceEvaluation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_interproton_distance_evaluation", ((P$.PdbxNmrConstraints$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_interproton_distance_evaluation"));
});

Clazz.newMeth(C$, 'getNOEPseudoatomCorrections$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_pseudoatom_corrections", ((P$.PdbxNmrConstraints$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_pseudoatom_corrections"));
});

Clazz.newMeth(C$, 'getNOEMotionalAveragingCorrection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NOE_motional_averaging_correction", ((P$.PdbxNmrConstraints$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("NOE_motional_averaging_correction"));
});

Clazz.newMeth(C$, 'getHydrogenBondConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hydrogen_bond_constraints_total_count", ((P$.PdbxNmrConstraints$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("hydrogen_bond_constraints_total_count"));
});

Clazz.newMeth(C$, 'getDisulfideBondConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("disulfide_bond_constraints_total_count", ((P$.PdbxNmrConstraints$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("disulfide_bond_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNAAlpha_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_alpha-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("NA_alpha-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNABeta_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_beta-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("NA_beta-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNAGamma_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_gamma-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("NA_gamma-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNADelta_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_delta-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("NA_delta-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNAEpsilon_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_epsilon-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("NA_epsilon-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNAChi_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_chi-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("NA_chi-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNAOther_angleConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_other-angle_constraints_total_count", ((P$.PdbxNmrConstraints$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("NA_other-angle_constraints_total_count"));
});

Clazz.newMeth(C$, 'getNASugarPuckerConstraintsTotalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NA_sugar_pucker_constraints_total_count", ((P$.PdbxNmrConstraints$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraints$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraints$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("NA_sugar_pucker_constraints_total_count"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
