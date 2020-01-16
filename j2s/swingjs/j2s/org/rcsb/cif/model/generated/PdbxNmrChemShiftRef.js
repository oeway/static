(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAtomGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_group", ((P$.PdbxNmrChemShiftRef$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atom_group"));
});

Clazz.newMeth(C$, 'getAtomIsotopeNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_isotope_number", ((P$.PdbxNmrChemShiftRef$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_isotope_number"));
});

Clazz.newMeth(C$, 'getAtomType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_type", ((P$.PdbxNmrChemShiftRef$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_type"));
});

Clazz.newMeth(C$, 'getChemShiftReferenceId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_reference_id", ((P$.PdbxNmrChemShiftRef$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_reference_id"));
});

Clazz.newMeth(C$, 'getChemShiftUnits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_units", ((P$.PdbxNmrChemShiftRef$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_units"));
});

Clazz.newMeth(C$, 'getChemShiftVal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_val", ((P$.PdbxNmrChemShiftRef$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_val"));
});

Clazz.newMeth(C$, 'getCorrectionVal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("correction_val", ((P$.PdbxNmrChemShiftRef$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("correction_val"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrChemShiftRef$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getExternalRefAxis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("external_ref_axis", ((P$.PdbxNmrChemShiftRef$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("external_ref_axis"));
});

Clazz.newMeth(C$, 'getExternalRefLoc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("external_ref_loc", ((P$.PdbxNmrChemShiftRef$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("external_ref_loc"));
});

Clazz.newMeth(C$, 'getExternalRefSampleGeometry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("external_ref_sample_geometry", ((P$.PdbxNmrChemShiftRef$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("external_ref_sample_geometry"));
});

Clazz.newMeth(C$, 'getIndirectShiftRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("indirect_shift_ratio", ((P$.PdbxNmrChemShiftRef$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("indirect_shift_ratio"));
});

Clazz.newMeth(C$, 'getMolCommonName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mol_common_name", ((P$.PdbxNmrChemShiftRef$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("mol_common_name"));
});

Clazz.newMeth(C$, 'getRank$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rank", ((P$.PdbxNmrChemShiftRef$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("rank"));
});

Clazz.newMeth(C$, 'getRefCorrectionType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_correction_type", ((P$.PdbxNmrChemShiftRef$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ref_correction_type"));
});

Clazz.newMeth(C$, 'getRefMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_method", ((P$.PdbxNmrChemShiftRef$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("ref_method"));
});

Clazz.newMeth(C$, 'getRefType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_type", ((P$.PdbxNmrChemShiftRef$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("ref_type"));
});

Clazz.newMeth(C$, 'getSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solvent", ((P$.PdbxNmrChemShiftRef$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftRef$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftRef$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("solvent"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
