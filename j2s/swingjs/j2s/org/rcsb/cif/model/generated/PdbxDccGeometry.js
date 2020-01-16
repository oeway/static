(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDccGeometry", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPdbid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbid", ((P$.PdbxDccGeometry$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("pdbid"));
});

Clazz.newMeth(C$, 'getRamachandranOutlierPercent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ramachandran_outlier_percent", ((P$.PdbxDccGeometry$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("Ramachandran_outlier_percent"));
});

Clazz.newMeth(C$, 'getRamachandranOutlierNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ramachandran_outlier_number", ((P$.PdbxDccGeometry$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("Ramachandran_outlier_number"));
});

Clazz.newMeth(C$, 'getRamachandranAllowedPercent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ramachandran_allowed_percent", ((P$.PdbxDccGeometry$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("Ramachandran_allowed_percent"));
});

Clazz.newMeth(C$, 'getRamachandranAllowedNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ramachandran_allowed_number", ((P$.PdbxDccGeometry$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("Ramachandran_allowed_number"));
});

Clazz.newMeth(C$, 'getRamachandranFavoredPercent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ramachandran_favored_percent", ((P$.PdbxDccGeometry$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("Ramachandran_favored_percent"));
});

Clazz.newMeth(C$, 'getRamachandranFavoredNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ramachandran_favored_number", ((P$.PdbxDccGeometry$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("Ramachandran_favored_number"));
});

Clazz.newMeth(C$, 'getRotamerOutliersPercent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rotamer_outliers_percent", ((P$.PdbxDccGeometry$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("rotamer_outliers_percent"));
});

Clazz.newMeth(C$, 'getRotamerOutliersNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rotamer_outliers_number", ((P$.PdbxDccGeometry$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("rotamer_outliers_number"));
});

Clazz.newMeth(C$, 'getCbetaDeviations$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cbeta_deviations", ((P$.PdbxDccGeometry$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("cbeta_deviations"));
});

Clazz.newMeth(C$, 'getAllAtomClashscore$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("all_atom_clashscore", ((P$.PdbxDccGeometry$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("all_atom_clashscore"));
});

Clazz.newMeth(C$, 'getOverallScore$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("overall_score", ((P$.PdbxDccGeometry$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("overall_score"));
});

Clazz.newMeth(C$, 'getBondOverallRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_overall_rms", ((P$.PdbxDccGeometry$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("bond_overall_rms"));
});

Clazz.newMeth(C$, 'getBondOverallMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_overall_max", ((P$.PdbxDccGeometry$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("bond_overall_max"));
});

Clazz.newMeth(C$, 'getBondLigandRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_ligand_rms", ((P$.PdbxDccGeometry$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("bond_ligand_rms"));
});

Clazz.newMeth(C$, 'getBondLigandMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_ligand_max", ((P$.PdbxDccGeometry$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("bond_ligand_max"));
});

Clazz.newMeth(C$, 'getAngleOverallRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_overall_rms", ((P$.PdbxDccGeometry$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("angle_overall_rms"));
});

Clazz.newMeth(C$, 'getAngleOverallMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_overall_max", ((P$.PdbxDccGeometry$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("angle_overall_max"));
});

Clazz.newMeth(C$, 'getAngleLigandRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_ligand_rms", ((P$.PdbxDccGeometry$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("angle_ligand_rms"));
});

Clazz.newMeth(C$, 'getAngleLigandMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_ligand_max", ((P$.PdbxDccGeometry$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("angle_ligand_max"));
});

Clazz.newMeth(C$, 'getDihedralOverallRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dihedral_overall_rms", ((P$.PdbxDccGeometry$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("dihedral_overall_rms"));
});

Clazz.newMeth(C$, 'getDihedralOverallMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dihedral_overall_max", ((P$.PdbxDccGeometry$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("dihedral_overall_max"));
});

Clazz.newMeth(C$, 'getChiralityOverallRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chirality_overall_rms", ((P$.PdbxDccGeometry$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("chirality_overall_rms"));
});

Clazz.newMeth(C$, 'getChiralityOverallMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chirality_overall_max", ((P$.PdbxDccGeometry$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("chirality_overall_max"));
});

Clazz.newMeth(C$, 'getPlanarityOverallRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("planarity_overall_rms", ((P$.PdbxDccGeometry$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("planarity_overall_rms"));
});

Clazz.newMeth(C$, 'getPlanarityOverallMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("planarity_overall_max", ((P$.PdbxDccGeometry$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("planarity_overall_max"));
});

Clazz.newMeth(C$, 'getNon_bondedRms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("non-bonded_rms", ((P$.PdbxDccGeometry$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDccGeometry$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDccGeometry$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("non-bonded_rms"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
