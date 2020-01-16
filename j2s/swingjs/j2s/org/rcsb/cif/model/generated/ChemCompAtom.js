(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChemCompAtom", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAltAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("alt_atom_id", ((P$.ChemCompAtom$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("alt_atom_id"));
});

Clazz.newMeth(C$, 'getAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id", ((P$.ChemCompAtom$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id"));
});

Clazz.newMeth(C$, 'getCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("charge", ((P$.ChemCompAtom$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("charge"));
});

Clazz.newMeth(C$, 'getModelCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_Cartn_x", ((P$.ChemCompAtom$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("model_Cartn_x"));
});

Clazz.newMeth(C$, 'getModelCartnXEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_Cartn_x_esd", ((P$.ChemCompAtom$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("model_Cartn_x_esd"));
});

Clazz.newMeth(C$, 'getModelCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_Cartn_y", ((P$.ChemCompAtom$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("model_Cartn_y"));
});

Clazz.newMeth(C$, 'getModelCartnYEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_Cartn_y_esd", ((P$.ChemCompAtom$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("model_Cartn_y_esd"));
});

Clazz.newMeth(C$, 'getModelCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_Cartn_z", ((P$.ChemCompAtom$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("model_Cartn_z"));
});

Clazz.newMeth(C$, 'getModelCartnZEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_Cartn_z_esd", ((P$.ChemCompAtom$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("model_Cartn_z_esd"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.ChemCompAtom$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getPartialCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("partial_charge", ((P$.ChemCompAtom$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("partial_charge"));
});

Clazz.newMeth(C$, 'getSubstructCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("substruct_code", ((P$.ChemCompAtom$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("substruct_code"));
});

Clazz.newMeth(C$, 'getTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_symbol", ((P$.ChemCompAtom$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("type_symbol"));
});

Clazz.newMeth(C$, 'getPdbxAlign$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_align", ((P$.ChemCompAtom$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_align"));
});

Clazz.newMeth(C$, 'getPdbxOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ordinal", ((P$.ChemCompAtom$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ordinal"));
});

Clazz.newMeth(C$, 'getPdbxComponentAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_component_atom_id", ((P$.ChemCompAtom$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_component_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxComponentCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_component_comp_id", ((P$.ChemCompAtom$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_component_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxAltAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_alt_atom_id", ((P$.ChemCompAtom$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_alt_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxAltCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_alt_comp_id", ((P$.ChemCompAtom$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_alt_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxModelCartnXIdeal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_model_Cartn_x_ideal", ((P$.ChemCompAtom$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_model_Cartn_x_ideal"));
});

Clazz.newMeth(C$, 'getPdbxModelCartnYIdeal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_model_Cartn_y_ideal", ((P$.ChemCompAtom$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_model_Cartn_y_ideal"));
});

Clazz.newMeth(C$, 'getPdbxModelCartnZIdeal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_model_Cartn_z_ideal", ((P$.ChemCompAtom$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_model_Cartn_z_ideal"));
});

Clazz.newMeth(C$, 'getPdbxStereoConfig$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_stereo_config", ((P$.ChemCompAtom$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_stereo_config"));
});

Clazz.newMeth(C$, 'getPdbxAromaticFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_aromatic_flag", ((P$.ChemCompAtom$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_aromatic_flag"));
});

Clazz.newMeth(C$, 'getPdbxLeavingAtomFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_leaving_atom_flag", ((P$.ChemCompAtom$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_leaving_atom_flag"));
});

Clazz.newMeth(C$, 'getPdbxResidueNumbering$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_residue_numbering", ((P$.ChemCompAtom$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_residue_numbering"));
});

Clazz.newMeth(C$, 'getPdbxPolymerType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_polymer_type", ((P$.ChemCompAtom$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_polymer_type"));
});

Clazz.newMeth(C$, 'getPdbxRefId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ref_id", ((P$.ChemCompAtom$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ref_id"));
});

Clazz.newMeth(C$, 'getPdbxComponentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_component_id", ((P$.ChemCompAtom$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_component_id"));
});

Clazz.newMeth(C$, 'getPdbxComponentEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_component_entity_id", ((P$.ChemCompAtom$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAtom$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAtom$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_component_entity_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
