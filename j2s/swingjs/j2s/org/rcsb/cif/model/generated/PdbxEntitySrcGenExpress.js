(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxEntitySrcGenExpress$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxEntitySrcGenExpress$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_id", ((P$.PdbxEntitySrcGenExpress$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("step_id"));
});

Clazz.newMeth(C$, 'getNextStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("next_step_id", ((P$.PdbxEntitySrcGenExpress$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("next_step_id"));
});

Clazz.newMeth(C$, 'getEndConstructId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_construct_id", ((P$.PdbxEntitySrcGenExpress$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("end_construct_id"));
});

Clazz.newMeth(C$, 'getRobotId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("robot_id", ((P$.PdbxEntitySrcGenExpress$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("robot_id"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.PdbxEntitySrcGenExpress$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getPromoterType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("promoter_type", ((P$.PdbxEntitySrcGenExpress$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("promoter_type"));
});

Clazz.newMeth(C$, 'getPlasmidId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("plasmid_id", ((P$.PdbxEntitySrcGenExpress$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("plasmid_id"));
});

Clazz.newMeth(C$, 'getVectorType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector_type", ((P$.PdbxEntitySrcGenExpress$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("vector_type"));
});

Clazz.newMeth(C$, 'getNTerminalSeqTag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("N_terminal_seq_tag", ((P$.PdbxEntitySrcGenExpress$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("N_terminal_seq_tag"));
});

Clazz.newMeth(C$, 'getCTerminalSeqTag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("C_terminal_seq_tag", ((P$.PdbxEntitySrcGenExpress$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("C_terminal_seq_tag"));
});

Clazz.newMeth(C$, 'getHostOrgScientificName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_scientific_name", ((P$.PdbxEntitySrcGenExpress$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_scientific_name"));
});

Clazz.newMeth(C$, 'getHostOrgCommonName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_common_name", ((P$.PdbxEntitySrcGenExpress$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_common_name"));
});

Clazz.newMeth(C$, 'getHostOrgVariant$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_variant", ((P$.PdbxEntitySrcGenExpress$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_variant"));
});

Clazz.newMeth(C$, 'getHostOrgStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_strain", ((P$.PdbxEntitySrcGenExpress$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_strain"));
});

Clazz.newMeth(C$, 'getHostOrgTissue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_tissue", ((P$.PdbxEntitySrcGenExpress$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_tissue"));
});

Clazz.newMeth(C$, 'getHostOrgCultureCollection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_culture_collection", ((P$.PdbxEntitySrcGenExpress$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_culture_collection"));
});

Clazz.newMeth(C$, 'getHostOrgCellLine$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_cell_line", ((P$.PdbxEntitySrcGenExpress$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_cell_line"));
});

Clazz.newMeth(C$, 'getHostOrgTaxId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_tax_id", ((P$.PdbxEntitySrcGenExpress$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_tax_id"));
});

Clazz.newMeth(C$, 'getHostOrgDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_details", ((P$.PdbxEntitySrcGenExpress$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_details"));
});

Clazz.newMeth(C$, 'getCultureBaseMedia$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("culture_base_media", ((P$.PdbxEntitySrcGenExpress$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("culture_base_media"));
});

Clazz.newMeth(C$, 'getCultureAdditives$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("culture_additives", ((P$.PdbxEntitySrcGenExpress$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("culture_additives"));
});

Clazz.newMeth(C$, 'getCultureVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("culture_volume", ((P$.PdbxEntitySrcGenExpress$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("culture_volume"));
});

Clazz.newMeth(C$, 'getCultureTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("culture_time", ((P$.PdbxEntitySrcGenExpress$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("culture_time"));
});

Clazz.newMeth(C$, 'getCultureTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("culture_temperature", ((P$.PdbxEntitySrcGenExpress$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("culture_temperature"));
});

Clazz.newMeth(C$, 'getInducer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("inducer", ((P$.PdbxEntitySrcGenExpress$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("inducer"));
});

Clazz.newMeth(C$, 'getInducerConcentration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("inducer_concentration", ((P$.PdbxEntitySrcGenExpress$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("inducer_concentration"));
});

Clazz.newMeth(C$, 'getInductionDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("induction_details", ((P$.PdbxEntitySrcGenExpress$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("induction_details"));
});

Clazz.newMeth(C$, 'getMultiplicityOfInfection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("multiplicity_of_infection", ((P$.PdbxEntitySrcGenExpress$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("multiplicity_of_infection"));
});

Clazz.newMeth(C$, 'getInductionTimepoint$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("induction_timepoint", ((P$.PdbxEntitySrcGenExpress$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("induction_timepoint"));
});

Clazz.newMeth(C$, 'getInductionTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("induction_temperature", ((P$.PdbxEntitySrcGenExpress$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("induction_temperature"));
});

Clazz.newMeth(C$, 'getHarvestingDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("harvesting_details", ((P$.PdbxEntitySrcGenExpress$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("harvesting_details"));
});

Clazz.newMeth(C$, 'getStorageDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("storage_details", ((P$.PdbxEntitySrcGenExpress$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("storage_details"));
});

Clazz.newMeth(C$, 'getSummary$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("summary", ((P$.PdbxEntitySrcGenExpress$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpress$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpress$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("summary"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:44 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
