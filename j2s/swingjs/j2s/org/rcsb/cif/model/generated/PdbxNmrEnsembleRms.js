(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrEnsembleRms$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getResidueRangeBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("residue_range_begin", ((P$.PdbxNmrEnsembleRms$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("residue_range_begin"));
});

Clazz.newMeth(C$, 'getChainRangeBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chain_range_begin", ((P$.PdbxNmrEnsembleRms$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("chain_range_begin"));
});

Clazz.newMeth(C$, 'getResidueRangeEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("residue_range_end", ((P$.PdbxNmrEnsembleRms$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("residue_range_end"));
});

Clazz.newMeth(C$, 'getChainRangeEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chain_range_end", ((P$.PdbxNmrEnsembleRms$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("chain_range_end"));
});

Clazz.newMeth(C$, 'getAtomType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_type", ((P$.PdbxNmrEnsembleRms$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("atom_type"));
});

Clazz.newMeth(C$, 'getDistanceRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_rms_dev", ((P$.PdbxNmrEnsembleRms$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("distance_rms_dev"));
});

Clazz.newMeth(C$, 'getDistanceRmsDevError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("distance_rms_dev_error", ((P$.PdbxNmrEnsembleRms$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("distance_rms_dev_error"));
});

Clazz.newMeth(C$, 'getCovalentBondRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_bond_rms_dev", ((P$.PdbxNmrEnsembleRms$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_bond_rms_dev"));
});

Clazz.newMeth(C$, 'getCovalentBondRmsDevError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("covalent_bond_rms_dev_error", ((P$.PdbxNmrEnsembleRms$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("covalent_bond_rms_dev_error"));
});

Clazz.newMeth(C$, 'getBondAngleRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_angle_rms_dev", ((P$.PdbxNmrEnsembleRms$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("bond_angle_rms_dev"));
});

Clazz.newMeth(C$, 'getBondAngleRmsDevError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_angle_rms_dev_error", ((P$.PdbxNmrEnsembleRms$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("bond_angle_rms_dev_error"));
});

Clazz.newMeth(C$, 'getImproperTorsionAngleRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("improper_torsion_angle_rms_dev", ((P$.PdbxNmrEnsembleRms$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("improper_torsion_angle_rms_dev"));
});

Clazz.newMeth(C$, 'getImproperTorsionAngleRmsDevError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("improper_torsion_angle_rms_dev_error", ((P$.PdbxNmrEnsembleRms$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("improper_torsion_angle_rms_dev_error"));
});

Clazz.newMeth(C$, 'getPeptidePlanarityRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("peptide_planarity_rms_dev", ((P$.PdbxNmrEnsembleRms$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("peptide_planarity_rms_dev"));
});

Clazz.newMeth(C$, 'getPeptidePlanarityRmsDevError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("peptide_planarity_rms_dev_error", ((P$.PdbxNmrEnsembleRms$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("peptide_planarity_rms_dev_error"));
});

Clazz.newMeth(C$, 'getDihedralAnglesRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dihedral_angles_rms_dev", ((P$.PdbxNmrEnsembleRms$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("dihedral_angles_rms_dev"));
});

Clazz.newMeth(C$, 'getDihedralAnglesRmsDevError$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dihedral_angles_rms_dev_error", ((P$.PdbxNmrEnsembleRms$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("dihedral_angles_rms_dev_error"));
});

Clazz.newMeth(C$, 'getCoordAverageRmsdMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coord_average_rmsd_method", ((P$.PdbxNmrEnsembleRms$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrEnsembleRms$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrEnsembleRms$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("coord_average_rmsd_method"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
