(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EntitySrcGen", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.EntitySrcGen$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getGeneSrcCommonName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_common_name", ((P$.EntitySrcGen$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_common_name"));
});

Clazz.newMeth(C$, 'getGeneSrcDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_details", ((P$.EntitySrcGen$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_details"));
});

Clazz.newMeth(C$, 'getGeneSrcGenus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_genus", ((P$.EntitySrcGen$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_genus"));
});

Clazz.newMeth(C$, 'getGeneSrcSpecies$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_species", ((P$.EntitySrcGen$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_species"));
});

Clazz.newMeth(C$, 'getGeneSrcStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_strain", ((P$.EntitySrcGen$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_strain"));
});

Clazz.newMeth(C$, 'getGeneSrcTissue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_tissue", ((P$.EntitySrcGen$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_tissue"));
});

Clazz.newMeth(C$, 'getGeneSrcTissueFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_tissue_fraction", ((P$.EntitySrcGen$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_tissue_fraction"));
});

Clazz.newMeth(C$, 'getHostOrgGenus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_genus", ((P$.EntitySrcGen$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_genus"));
});

Clazz.newMeth(C$, 'getHostOrgSpecies$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_species", ((P$.EntitySrcGen$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_species"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcFragment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_fragment", ((P$.EntitySrcGen$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_fragment"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcGene$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_gene", ((P$.EntitySrcGen$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_gene"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcScientificName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_scientific_name", ((P$.EntitySrcGen$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_scientific_name"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcVariant$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_variant", ((P$.EntitySrcGen$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_variant"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcCellLine$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_cell_line", ((P$.EntitySrcGen$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_cell_line"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcAtcc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_atcc", ((P$.EntitySrcGen$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_atcc"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcOrgan$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_organ", ((P$.EntitySrcGen$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_organ"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcOrganelle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_organelle", ((P$.EntitySrcGen$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_organelle"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcPlasmid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_plasmid", ((P$.EntitySrcGen$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_plasmid"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcPlasmidName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_plasmid_name", ((P$.EntitySrcGen$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_plasmid_name"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_cell", ((P$.EntitySrcGen$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_cell"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcCellularLocation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_cellular_location", ((P$.EntitySrcGen$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_cellular_location"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgGene$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_gene", ((P$.EntitySrcGen$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_gene"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgOrgan$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_organ", ((P$.EntitySrcGen$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_organ"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgOrganelle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_organelle", ((P$.EntitySrcGen$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_organelle"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgCellularLocation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_cellular_location", ((P$.EntitySrcGen$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_cellular_location"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_strain", ((P$.EntitySrcGen$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_strain"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgTissueFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_tissue_fraction", ((P$.EntitySrcGen$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_tissue_fraction"));
});

Clazz.newMeth(C$, 'getPdbxDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_description", ((P$.EntitySrcGen$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_description"));
});

Clazz.newMeth(C$, 'getHostOrgCommonName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_common_name", ((P$.EntitySrcGen$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_common_name"));
});

Clazz.newMeth(C$, 'getHostOrgDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_details", ((P$.EntitySrcGen$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_details"));
});

Clazz.newMeth(C$, 'getHostOrgStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_strain", ((P$.EntitySrcGen$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_strain"));
});

Clazz.newMeth(C$, 'getPlasmidDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("plasmid_details", ((P$.EntitySrcGen$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("plasmid_details"));
});

Clazz.newMeth(C$, 'getPlasmidName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("plasmid_name", ((P$.EntitySrcGen$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("plasmid_name"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgVariant$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_variant", ((P$.EntitySrcGen$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_variant"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgCellLine$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_cell_line", ((P$.EntitySrcGen$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_cell_line"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgAtcc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_atcc", ((P$.EntitySrcGen$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_atcc"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgCultureCollection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_culture_collection", ((P$.EntitySrcGen$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_culture_collection"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_cell", ((P$.EntitySrcGen$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_cell"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgScientificName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_scientific_name", ((P$.EntitySrcGen$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_scientific_name"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgTissue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_tissue", ((P$.EntitySrcGen$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_tissue"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgVector$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_vector", ((P$.EntitySrcGen$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_vector"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgVectorType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_vector_type", ((P$.EntitySrcGen$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_vector_type"));
});

Clazz.newMeth(C$, 'getExpressionSystemId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("expression_system_id", ((P$.EntitySrcGen$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("expression_system_id"));
});

Clazz.newMeth(C$, 'getGeneSrcDevStage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_dev_stage", ((P$.EntitySrcGen$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_dev_stage"));
});

Clazz.newMeth(C$, 'getStartConstructId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("start_construct_id", ((P$.EntitySrcGen$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("start_construct_id"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcNcbiTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_ncbi_taxonomy_id", ((P$.EntitySrcGen$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_ncbi_taxonomy_id"));
});

Clazz.newMeth(C$, 'getPdbxHostOrgNcbiTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_host_org_ncbi_taxonomy_id", ((P$.EntitySrcGen$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_host_org_ncbi_taxonomy_id"));
});

Clazz.newMeth(C$, 'getPdbxSrcId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_src_id", ((P$.EntitySrcGen$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_src_id"));
});

Clazz.newMeth(C$, 'getPdbxAltSourceFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_alt_source_flag", ((P$.EntitySrcGen$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_alt_source_flag"));
});

Clazz.newMeth(C$, 'getPdbxSeqType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_seq_type", ((P$.EntitySrcGen$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_seq_type"));
});

Clazz.newMeth(C$, 'getPdbxBegSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_beg_seq_num", ((P$.EntitySrcGen$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_beg_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxEndSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_end_seq_num", ((P$.EntitySrcGen$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_end_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxGeneSrcCultureCollection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_gene_src_culture_collection", ((P$.EntitySrcGen$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "EntitySrcGen$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EntitySrcGen$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_gene_src_culture_collection"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
