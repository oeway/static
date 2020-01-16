(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmEntityAssembly", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmEntityAssembly$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("assembly_id", ((P$.EmEntityAssembly$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("assembly_id"));
});

Clazz.newMeth(C$, 'getParentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("parent_id", ((P$.EmEntityAssembly$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("parent_id"));
});

Clazz.newMeth(C$, 'getSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source", ((P$.EmEntityAssembly$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("source"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.EmEntityAssembly$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.EmEntityAssembly$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmEntityAssembly$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getGoId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("go_id", ((P$.EmEntityAssembly$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("go_id"));
});

Clazz.newMeth(C$, 'getIprId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ipr_id", ((P$.EmEntityAssembly$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ipr_id"));
});

Clazz.newMeth(C$, 'getSynonym$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("synonym", ((P$.EmEntityAssembly$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("synonym"));
});

Clazz.newMeth(C$, 'getNumberOfCopies$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_of_copies", ((P$.EmEntityAssembly$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("number_of_copies"));
});

Clazz.newMeth(C$, 'getOligomericDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oligomeric_details", ((P$.EmEntityAssembly$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("oligomeric_details"));
});

Clazz.newMeth(C$, 'getEntityIdList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id_list", ((P$.EmEntityAssembly$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id_list"));
});

Clazz.newMeth(C$, 'getEbiOrganismScientific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_organism_scientific", ((P$.EmEntityAssembly$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_organism_scientific"));
});

Clazz.newMeth(C$, 'getEbiOrganismCommon$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_organism_common", ((P$.EmEntityAssembly$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_organism_common"));
});

Clazz.newMeth(C$, 'getEbiStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_strain", ((P$.EmEntityAssembly$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_strain"));
});

Clazz.newMeth(C$, 'getEbiTissue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_tissue", ((P$.EmEntityAssembly$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_tissue"));
});

Clazz.newMeth(C$, 'getEbiCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_cell", ((P$.EmEntityAssembly$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_cell"));
});

Clazz.newMeth(C$, 'getEbiOrganelle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_organelle", ((P$.EmEntityAssembly$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_organelle"));
});

Clazz.newMeth(C$, 'getEbiCellularLocation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_cellular_location", ((P$.EmEntityAssembly$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_cellular_location"));
});

Clazz.newMeth(C$, 'getEbiEngineered$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_engineered", ((P$.EmEntityAssembly$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_engineered"));
});

Clazz.newMeth(C$, 'getEbiExpressionSystem$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_expression_system", ((P$.EmEntityAssembly$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_expression_system"));
});

Clazz.newMeth(C$, 'getEbiExpressionSystemPlasmid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ebi_expression_system_plasmid", ((P$.EmEntityAssembly$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("ebi_expression_system_plasmid"));
});

Clazz.newMeth(C$, 'getMutantFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mutant_flag", ((P$.EmEntityAssembly$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssembly$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssembly$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("mutant_flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
