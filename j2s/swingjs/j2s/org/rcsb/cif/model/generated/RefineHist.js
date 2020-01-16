(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RefineHist", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPdbxRefineId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.RefineHist$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getCycleId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cycle_id", ((P$.RefineHist$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("cycle_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.RefineHist$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.RefineHist$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.RefineHist$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getNumberAtomsSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_atoms_solvent", ((P$.RefineHist$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number_atoms_solvent"));
});

Clazz.newMeth(C$, 'getNumberAtomsTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_atoms_total", ((P$.RefineHist$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("number_atoms_total"));
});

Clazz.newMeth(C$, 'getNumberReflnsAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_all", ((P$.RefineHist$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_all"));
});

Clazz.newMeth(C$, 'getNumberReflnsObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_obs", ((P$.RefineHist$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_obs"));
});

Clazz.newMeth(C$, 'getNumberReflnsRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_R_free", ((P$.RefineHist$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_R_free"));
});

Clazz.newMeth(C$, 'getNumberReflnsRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_reflns_R_work", ((P$.RefineHist$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("number_reflns_R_work"));
});

Clazz.newMeth(C$, 'getRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all", ((P$.RefineHist$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all"));
});

Clazz.newMeth(C$, 'getRFactorObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_obs", ((P$.RefineHist$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_obs"));
});

Clazz.newMeth(C$, 'getRFactorRFree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_R_free", ((P$.RefineHist$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_R_free"));
});

Clazz.newMeth(C$, 'getRFactorRWork$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_R_work", ((P$.RefineHist$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_R_work"));
});

Clazz.newMeth(C$, 'getPdbxNumberResiduesTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_residues_total", ((P$.RefineHist$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_residues_total"));
});

Clazz.newMeth(C$, 'getPdbxBIsoMeanLigand$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_B_iso_mean_ligand", ((P$.RefineHist$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_B_iso_mean_ligand"));
});

Clazz.newMeth(C$, 'getPdbxBIsoMeanSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_B_iso_mean_solvent", ((P$.RefineHist$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_B_iso_mean_solvent"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsProtein$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_protein", ((P$.RefineHist$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_protein"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsNucleicAcid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_nucleic_acid", ((P$.RefineHist$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_nucleic_acid"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsLigand$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_ligand", ((P$.RefineHist$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_ligand"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsLipid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_lipid", ((P$.RefineHist$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_lipid"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsCarb$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_carb", ((P$.RefineHist$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_carb"));
});

Clazz.newMeth(C$, 'getPdbxPseudoAtomDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_pseudo_atom_details", ((P$.RefineHist$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_pseudo_atom_details"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_solvent", ((P$.RefineHist$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_solvent"));
});

Clazz.newMeth(C$, 'getPdbxNumberAtomsTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_atoms_total", ((P$.RefineHist$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineHist$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineHist$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_atoms_total"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
