(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDepDatasetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_dataset_id", ((P$.PdbxDepuiEntryDetails$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("dep_dataset_id"));
});

Clazz.newMeth(C$, 'getWwpdbSiteId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wwpdb_site_id", ((P$.PdbxDepuiEntryDetails$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("wwpdb_site_id"));
});

Clazz.newMeth(C$, 'getExperimentalMethods$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experimental_methods", ((P$.PdbxDepuiEntryDetails$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("experimental_methods"));
});

Clazz.newMeth(C$, 'getRequestedAccessionTypes$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("requested_accession_types", ((P$.PdbxDepuiEntryDetails$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("requested_accession_types"));
});

Clazz.newMeth(C$, 'getValidatedContactEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("validated_contact_email", ((P$.PdbxDepuiEntryDetails$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("validated_contact_email"));
});

Clazz.newMeth(C$, 'getCountry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("country", ((P$.PdbxDepuiEntryDetails$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("country"));
});

Clazz.newMeth(C$, 'getStructuralGenomicsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("structural_genomics_flag", ((P$.PdbxDepuiEntryDetails$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("structural_genomics_flag"));
});

Clazz.newMeth(C$, 'getRelatedDatabaseName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("related_database_name", ((P$.PdbxDepuiEntryDetails$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("related_database_name"));
});

Clazz.newMeth(C$, 'getRelatedDatabaseCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("related_database_code", ((P$.PdbxDepuiEntryDetails$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("related_database_code"));
});

Clazz.newMeth(C$, 'getReplacePdbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replace_pdb_id", ((P$.PdbxDepuiEntryDetails$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiEntryDetails$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiEntryDetails$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("replace_pdb_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
