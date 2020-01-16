(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrForceConstants$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getExptlDistanceTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_distance_term", ((P$.PdbxNmrForceConstants$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_distance_term"));
});

Clazz.newMeth(C$, 'getExptlDistanceTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_distance_term_units", ((P$.PdbxNmrForceConstants$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_distance_term_units"));
});

Clazz.newMeth(C$, 'getExptlTorsionAnglesTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_torsion_angles_term", ((P$.PdbxNmrForceConstants$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_torsion_angles_term"));
});

Clazz.newMeth(C$, 'getExptlTorsionAnglesTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_torsion_angles_term_units", ((P$.PdbxNmrForceConstants$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_torsion_angles_term_units"));
});

Clazz.newMeth(C$, 'getExptlJCouplingTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_J_coupling_term", ((P$.PdbxNmrForceConstants$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_J_coupling_term"));
});

Clazz.newMeth(C$, 'getExptlJCouplingTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_J_coupling_term_units", ((P$.PdbxNmrForceConstants$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_J_coupling_term_units"));
});

Clazz.newMeth(C$, 'getExptl13CShiftTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_13C_shift_term", ((P$.PdbxNmrForceConstants$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_13C_shift_term"));
});

Clazz.newMeth(C$, 'getExptl13CShiftTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_13C_shift_term_units", ((P$.PdbxNmrForceConstants$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_13C_shift_term_units"));
});

Clazz.newMeth(C$, 'getExptl1HShiftTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_1H_shift_term", ((P$.PdbxNmrForceConstants$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_1H_shift_term"));
});

Clazz.newMeth(C$, 'getExptl1HShiftTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_1H_shift_term_units", ((P$.PdbxNmrForceConstants$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_1H_shift_term_units"));
});

Clazz.newMeth(C$, 'getExptlDipolarCouplingTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_dipolar_coupling_term", ((P$.PdbxNmrForceConstants$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_dipolar_coupling_term"));
});

Clazz.newMeth(C$, 'getExptlDipolarCouplingTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_dipolar_coupling_term_units", ((P$.PdbxNmrForceConstants$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_dipolar_coupling_term_units"));
});

Clazz.newMeth(C$, 'getExptlDIsotopeShiftTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_D_isotope_shift_term", ((P$.PdbxNmrForceConstants$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_D_isotope_shift_term"));
});

Clazz.newMeth(C$, 'getExptlDIsotopeShiftTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("exptl_D_isotope_shift_term_units", ((P$.PdbxNmrForceConstants$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("exptl_D_isotope_shift_term_units"));
});

Clazz.newMeth(C$, 'getCovalentGeomBondTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_geom_bond_term", ((P$.PdbxNmrForceConstants$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_geom_bond_term"));
});

Clazz.newMeth(C$, 'getCovalentGeomBondTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_geom_bond_term_units", ((P$.PdbxNmrForceConstants$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_geom_bond_term_units"));
});

Clazz.newMeth(C$, 'getCovalentGeomAnglesTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_geom_angles_term", ((P$.PdbxNmrForceConstants$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_geom_angles_term"));
});

Clazz.newMeth(C$, 'getCovalentGeomAnglesTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_geom_angles_term_units", ((P$.PdbxNmrForceConstants$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_geom_angles_term_units"));
});

Clazz.newMeth(C$, 'getCovalentGeomImpropersTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_geom_impropers_term", ((P$.PdbxNmrForceConstants$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_geom_impropers_term"));
});

Clazz.newMeth(C$, 'getCovalentGeomImpropersTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_geom_impropers_term_units", ((P$.PdbxNmrForceConstants$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_geom_impropers_term_units"));
});

Clazz.newMeth(C$, 'getNon_bondedInterVanDerWaalsTermType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_inter_van_der_Waals_term_type", ((P$.PdbxNmrForceConstants$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_inter_van_der_Waals_term_type"));
});

Clazz.newMeth(C$, 'getNon_bondedInterVanDerWaalsTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_inter_van_der_Waals_term", ((P$.PdbxNmrForceConstants$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_inter_van_der_Waals_term"));
});

Clazz.newMeth(C$, 'getNon_bondedInterVanDerWaalsTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_inter_van_der_Waals_term_units", ((P$.PdbxNmrForceConstants$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_inter_van_der_Waals_term_units"));
});

Clazz.newMeth(C$, 'getNon_bondedInterConfDbPotentialTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_inter_conf_db_potential_term", ((P$.PdbxNmrForceConstants$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_inter_conf_db_potential_term"));
});

Clazz.newMeth(C$, 'getNon_bondedInterRadiusOfGyrationTerm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_inter_radius_of_gyration_term", ((P$.PdbxNmrForceConstants$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_inter_radius_of_gyration_term"));
});

Clazz.newMeth(C$, 'getNon_bondedInterRadiusOfGyrationTermUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_inter_radius_of_gyration_term_units", ((P$.PdbxNmrForceConstants$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrForceConstants$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrForceConstants$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_inter_radius_of_gyration_term_units"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
