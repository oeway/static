(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Entity", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Entity$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getFormulaWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula_weight", ((P$.Entity$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("formula_weight"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.Entity$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getSrcMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("src_method", ((P$.Entity$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("src_method"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.Entity$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getPdbxDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_description", ((P$.Entity$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_description"));
});

Clazz.newMeth(C$, 'getPdbxNumberOfMolecules$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_number_of_molecules", ((P$.Entity$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_number_of_molecules"));
});

Clazz.newMeth(C$, 'getPdbxParentEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_parent_entity_id", ((P$.Entity$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_parent_entity_id"));
});

Clazz.newMeth(C$, 'getPdbxMutation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_mutation", ((P$.Entity$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_mutation"));
});

Clazz.newMeth(C$, 'getPdbxFragment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fragment", ((P$.Entity$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fragment"));
});

Clazz.newMeth(C$, 'getPdbxEc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ec", ((P$.Entity$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ec"));
});

Clazz.newMeth(C$, 'getPdbxModification$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_modification", ((P$.Entity$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_modification"));
});

Clazz.newMeth(C$, 'getPdbxFormulaWeightExptl$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_formula_weight_exptl", ((P$.Entity$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_formula_weight_exptl"));
});

Clazz.newMeth(C$, 'getPdbxFormulaWeightExptlMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_formula_weight_exptl_method", ((P$.Entity$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_formula_weight_exptl_method"));
});

Clazz.newMeth(C$, 'getPdbxTargetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_target_id", ((P$.Entity$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_target_id"));
});

Clazz.newMeth(C$, 'getPdbxEntitiesPerBiologicalUnit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_entities_per_biological_unit", ((P$.Entity$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Entity$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Entity$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_entities_per_biological_unit"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
