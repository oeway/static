(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxEntitySrcSyn$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getOrganismScientific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organism_scientific", ((P$.PdbxEntitySrcSyn$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("organism_scientific"));
});

Clazz.newMeth(C$, 'getOrganismCommonName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organism_common_name", ((P$.PdbxEntitySrcSyn$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("organism_common_name"));
});

Clazz.newMeth(C$, 'getStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("strain", ((P$.PdbxEntitySrcSyn$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("strain"));
});

Clazz.newMeth(C$, 'getNcbiTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ncbi_taxonomy_id", ((P$.PdbxEntitySrcSyn$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ncbi_taxonomy_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxEntitySrcSyn$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getPdbxSrcId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_src_id", ((P$.PdbxEntitySrcSyn$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_src_id"));
});

Clazz.newMeth(C$, 'getPdbxAltSourceFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_alt_source_flag", ((P$.PdbxEntitySrcSyn$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_alt_source_flag"));
});

Clazz.newMeth(C$, 'getPdbxBegSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_beg_seq_num", ((P$.PdbxEntitySrcSyn$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_beg_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxEndSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_end_seq_num", ((P$.PdbxEntitySrcSyn$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcSyn$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcSyn$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_end_seq_num"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
