(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getSrcId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("src_id", ((P$.PdbxEntitySrcGenDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("src_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxEntitySrcGenDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getSeqType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_type", ((P$.PdbxEntitySrcGenDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("seq_type"));
});

Clazz.newMeth(C$, 'getBegSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_seq_num", ((P$.PdbxEntitySrcGenDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("beg_seq_num"));
});

Clazz.newMeth(C$, 'getEndSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_seq_num", ((P$.PdbxEntitySrcGenDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("end_seq_num"));
});

Clazz.newMeth(C$, 'getGeneSrcGene$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_gene", ((P$.PdbxEntitySrcGenDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_gene"));
});

Clazz.newMeth(C$, 'getGeneSrcScientificName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_scientific_name", ((P$.PdbxEntitySrcGenDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_scientific_name"));
});

Clazz.newMeth(C$, 'getHostOrgGene$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_gene", ((P$.PdbxEntitySrcGenDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_gene"));
});

Clazz.newMeth(C$, 'getHostOrgScientificName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_scientific_name", ((P$.PdbxEntitySrcGenDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_scientific_name"));
});

Clazz.newMeth(C$, 'getHostOrgStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_strain", ((P$.PdbxEntitySrcGenDepositorInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_strain"));
});

Clazz.newMeth(C$, 'getGeneSrcNcbiTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("gene_src_ncbi_taxonomy_id", ((P$.PdbxEntitySrcGenDepositorInfo$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("gene_src_ncbi_taxonomy_id"));
});

Clazz.newMeth(C$, 'getHostOrgNcbiTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_ncbi_taxonomy_id", ((P$.PdbxEntitySrcGenDepositorInfo$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_ncbi_taxonomy_id"));
});

Clazz.newMeth(C$, 'getHostOrgVectorType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("host_org_vector_type", ((P$.PdbxEntitySrcGenDepositorInfo$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("host_org_vector_type"));
});

Clazz.newMeth(C$, 'getPlasmidName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("plasmid_name", ((P$.PdbxEntitySrcGenDepositorInfo$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenDepositorInfo$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenDepositorInfo$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("plasmid_name"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:44 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
