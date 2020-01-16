(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EntitySrcNat", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCommonName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("common_name", ((P$.EntitySrcNat$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("common_name"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EntitySrcNat$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.EntitySrcNat$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getGenus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("genus", ((P$.EntitySrcNat$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("genus"));
});

Clazz.newMeth(C$, 'getSpecies$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("species", ((P$.EntitySrcNat$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("species"));
});

Clazz.newMeth(C$, 'getStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("strain", ((P$.EntitySrcNat$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("strain"));
});

Clazz.newMeth(C$, 'getTissue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tissue", ((P$.EntitySrcNat$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("tissue"));
});

Clazz.newMeth(C$, 'getTissueFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tissue_fraction", ((P$.EntitySrcNat$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("tissue_fraction"));
});

Clazz.newMeth(C$, 'getPdbxOrganismScientific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_organism_scientific", ((P$.EntitySrcNat$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_organism_scientific"));
});

Clazz.newMeth(C$, 'getPdbxSecretion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_secretion", ((P$.EntitySrcNat$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_secretion"));
});

Clazz.newMeth(C$, 'getPdbxFragment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fragment", ((P$.EntitySrcNat$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fragment"));
});

Clazz.newMeth(C$, 'getPdbxVariant$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_variant", ((P$.EntitySrcNat$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_variant"));
});

Clazz.newMeth(C$, 'getPdbxCellLine$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_cell_line", ((P$.EntitySrcNat$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_cell_line"));
});

Clazz.newMeth(C$, 'getPdbxAtcc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atcc", ((P$.EntitySrcNat$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atcc"));
});

Clazz.newMeth(C$, 'getPdbxCellularLocation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_cellular_location", ((P$.EntitySrcNat$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_cellular_location"));
});

Clazz.newMeth(C$, 'getPdbxOrgan$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_organ", ((P$.EntitySrcNat$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_organ"));
});

Clazz.newMeth(C$, 'getPdbxOrganelle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_organelle", ((P$.EntitySrcNat$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_organelle"));
});

Clazz.newMeth(C$, 'getPdbxCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_cell", ((P$.EntitySrcNat$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_cell"));
});

Clazz.newMeth(C$, 'getPdbxPlasmidName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_plasmid_name", ((P$.EntitySrcNat$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_plasmid_name"));
});

Clazz.newMeth(C$, 'getPdbxPlasmidDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_plasmid_details", ((P$.EntitySrcNat$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_plasmid_details"));
});

Clazz.newMeth(C$, 'getPdbxNcbiTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ncbi_taxonomy_id", ((P$.EntitySrcNat$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ncbi_taxonomy_id"));
});

Clazz.newMeth(C$, 'getPdbxSrcId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_src_id", ((P$.EntitySrcNat$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_src_id"));
});

Clazz.newMeth(C$, 'getPdbxAltSourceFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_alt_source_flag", ((P$.EntitySrcNat$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_alt_source_flag"));
});

Clazz.newMeth(C$, 'getPdbxBegSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_beg_seq_num", ((P$.EntitySrcNat$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_beg_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxEndSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_end_seq_num", ((P$.EntitySrcNat$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_end_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxCultureCollection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_culture_collection", ((P$.EntitySrcNat$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcNat$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcNat$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_culture_collection"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
