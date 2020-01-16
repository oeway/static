(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChemComp", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getFormula$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula", ((P$.ChemComp$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("formula"));
});

Clazz.newMeth(C$, 'getFormulaWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula_weight", ((P$.ChemComp$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("formula_weight"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.ChemComp$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getModelDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_details", ((P$.ChemComp$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("model_details"));
});

Clazz.newMeth(C$, 'getModelErf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_erf", ((P$.ChemComp$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("model_erf"));
});

Clazz.newMeth(C$, 'getModelSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_source", ((P$.ChemComp$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("model_source"));
});

Clazz.newMeth(C$, 'getMonNstdClass$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_nstd_class", ((P$.ChemComp$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("mon_nstd_class"));
});

Clazz.newMeth(C$, 'getMonNstdDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_nstd_details", ((P$.ChemComp$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("mon_nstd_details"));
});

Clazz.newMeth(C$, 'getMonNstdFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_nstd_flag", ((P$.ChemComp$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("mon_nstd_flag"));
});

Clazz.newMeth(C$, 'getMonNstdParent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_nstd_parent", ((P$.ChemComp$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("mon_nstd_parent"));
});

Clazz.newMeth(C$, 'getMonNstdParentCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_nstd_parent_comp_id", ((P$.ChemComp$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("mon_nstd_parent_comp_id"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.ChemComp$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getNumberAtomsAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_atoms_all", ((P$.ChemComp$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("number_atoms_all"));
});

Clazz.newMeth(C$, 'getNumberAtomsNh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_atoms_nh", ((P$.ChemComp$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("number_atoms_nh"));
});

Clazz.newMeth(C$, 'getOneLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("one_letter_code", ((P$.ChemComp$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("one_letter_code"));
});

Clazz.newMeth(C$, 'getThreeLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("three_letter_code", ((P$.ChemComp$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("three_letter_code"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.ChemComp$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getPdbxSynonyms$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_synonyms", ((P$.ChemComp$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_synonyms"));
});

Clazz.newMeth(C$, 'getPdbxModificationDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_modification_details", ((P$.ChemComp$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_modification_details"));
});

Clazz.newMeth(C$, 'getPdbxComponentNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_component_no", ((P$.ChemComp$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_component_no"));
});

Clazz.newMeth(C$, 'getPdbxType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_type", ((P$.ChemComp$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_type"));
});

Clazz.newMeth(C$, 'getPdbxAmbiguousFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ambiguous_flag", ((P$.ChemComp$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ambiguous_flag"));
});

Clazz.newMeth(C$, 'getPdbxReplacedBy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_replaced_by", ((P$.ChemComp$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_replaced_by"));
});

Clazz.newMeth(C$, 'getPdbxReplaces$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_replaces", ((P$.ChemComp$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_replaces"));
});

Clazz.newMeth(C$, 'getPdbxFormalCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_formal_charge", ((P$.ChemComp$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_formal_charge"));
});

Clazz.newMeth(C$, 'getPdbxSubcomponentList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_subcomponent_list", ((P$.ChemComp$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_subcomponent_list"));
});

Clazz.newMeth(C$, 'getPdbxModelCoordinatesDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_model_coordinates_details", ((P$.ChemComp$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_model_coordinates_details"));
});

Clazz.newMeth(C$, 'getPdbxModelCoordinatesDbCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_model_coordinates_db_code", ((P$.ChemComp$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_model_coordinates_db_code"));
});

Clazz.newMeth(C$, 'getPdbxIdealCoordinatesDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ideal_coordinates_details", ((P$.ChemComp$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ideal_coordinates_details"));
});

Clazz.newMeth(C$, 'getPdbxIdealCoordinatesMissingFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ideal_coordinates_missing_flag", ((P$.ChemComp$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ideal_coordinates_missing_flag"));
});

Clazz.newMeth(C$, 'getPdbxModelCoordinatesMissingFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_model_coordinates_missing_flag", ((P$.ChemComp$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_model_coordinates_missing_flag"));
});

Clazz.newMeth(C$, 'getPdbxInitialDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_initial_date", ((P$.ChemComp$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_initial_date"));
});

Clazz.newMeth(C$, 'getPdbxModifiedDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_modified_date", ((P$.ChemComp$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_modified_date"));
});

Clazz.newMeth(C$, 'getPdbxReleaseStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_release_status", ((P$.ChemComp$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_release_status"));
});

Clazz.newMeth(C$, 'getPdbxProcessingSite$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_processing_site", ((P$.ChemComp$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_processing_site"));
});

Clazz.newMeth(C$, 'getPdbxNumberSubcomponents$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_subcomponents", ((P$.ChemComp$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_subcomponents"));
});

Clazz.newMeth(C$, 'getPdbxClass1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_class_1", ((P$.ChemComp$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_class_1"));
});

Clazz.newMeth(C$, 'getPdbxClass2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_class_2", ((P$.ChemComp$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_class_2"));
});

Clazz.newMeth(C$, 'getPdbxCompType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_comp_type", ((P$.ChemComp$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_comp_type"));
});

Clazz.newMeth(C$, 'getPdbxReservedName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_reserved_name", ((P$.ChemComp$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_reserved_name"));
});

Clazz.newMeth(C$, 'getPdbxStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_status", ((P$.ChemComp$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_status"));
});

Clazz.newMeth(C$, 'getPdbxTypeModified$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_type_modified", ((P$.ChemComp$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_type_modified"));
});

Clazz.newMeth(C$, 'getPdbxCasnum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_casnum", ((P$.ChemComp$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_casnum"));
});

Clazz.newMeth(C$, 'getPdbxSmiles$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_smiles", ((P$.ChemComp$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_smiles"));
});

Clazz.newMeth(C$, 'getPdbxNscnum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_nscnum", ((P$.ChemComp$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemComp$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemComp$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_nscnum"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
