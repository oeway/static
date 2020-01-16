(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_dataset_id", ((P$.PdbxDepuiStatusFlags$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("dep_dataset_id"));
});

Clazz.newMeth(C$, 'getPrimaryCitationStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("primary_citation_status", ((P$.PdbxDepuiStatusFlags$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("primary_citation_status"));
});

Clazz.newMeth(C$, 'getCorrespondingAuthorStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("corresponding_author_status", ((P$.PdbxDepuiStatusFlags$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("corresponding_author_status"));
});

Clazz.newMeth(C$, 'getReferenceCitationStatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reference_citation_status", ((P$.PdbxDepuiStatusFlags$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("reference_citation_status"));
});

Clazz.newMeth(C$, 'getIsGrantFunded$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("is_grant_funded", ((P$.PdbxDepuiStatusFlags$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("is_grant_funded"));
});

Clazz.newMeth(C$, 'getHasNcsData$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_ncs_data", ((P$.PdbxDepuiStatusFlags$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("has_ncs_data"));
});

Clazz.newMeth(C$, 'getPredictionTarget$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prediction_target", ((P$.PdbxDepuiStatusFlags$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("prediction_target"));
});

Clazz.newMeth(C$, 'getHasHelicalSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_helical_symmetry", ((P$.PdbxDepuiStatusFlags$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("has_helical_symmetry"));
});

Clazz.newMeth(C$, 'getHasPointSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_point_symmetry", ((P$.PdbxDepuiStatusFlags$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("has_point_symmetry"));
});

Clazz.newMeth(C$, 'getHasCyclicSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_cyclic_symmetry", ((P$.PdbxDepuiStatusFlags$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("has_cyclic_symmetry"));
});

Clazz.newMeth(C$, 'getHasAcceptedTermsAndConditions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_accepted_terms_and_conditions", ((P$.PdbxDepuiStatusFlags$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("has_accepted_terms_and_conditions"));
});

Clazz.newMeth(C$, 'getHasViewedValidationReport$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_viewed_validation_report", ((P$.PdbxDepuiStatusFlags$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("has_viewed_validation_report"));
});

Clazz.newMeth(C$, 'getValidatedModelFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("validated_model_file_name", ((P$.PdbxDepuiStatusFlags$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("validated_model_file_name"));
});

Clazz.newMeth(C$, 'getMergePriorModelFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("merge_prior_model_file_name", ((P$.PdbxDepuiStatusFlags$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("merge_prior_model_file_name"));
});

Clazz.newMeth(C$, 'getMergeReplaceModelFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("merge_replace_model_file_name", ((P$.PdbxDepuiStatusFlags$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("merge_replace_model_file_name"));
});

Clazz.newMeth(C$, 'getMergeOutputModelFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("merge_output_model_file_name", ((P$.PdbxDepuiStatusFlags$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("merge_output_model_file_name"));
});

Clazz.newMeth(C$, 'getIsLigandProcessingComplete$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("is_ligand_processing_complete", ((P$.PdbxDepuiStatusFlags$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("is_ligand_processing_complete"));
});

Clazz.newMeth(C$, 'getSampleXyzSequenceAlignmentsValid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_xyz_sequence_alignments_valid", ((P$.PdbxDepuiStatusFlags$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("sample_xyz_sequence_alignments_valid"));
});

Clazz.newMeth(C$, 'getHasSasData$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("has_sas_data", ((P$.PdbxDepuiStatusFlags$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("has_sas_data"));
});

Clazz.newMeth(C$, 'getIsSasDeposited$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("is_sas_deposited", ((P$.PdbxDepuiStatusFlags$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("is_sas_deposited"));
});

Clazz.newMeth(C$, 'getUseSasRefine$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("use_sas_refine", ((P$.PdbxDepuiStatusFlags$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("use_sas_refine"));
});

Clazz.newMeth(C$, 'getMergedFail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("merged_fail", ((P$.PdbxDepuiStatusFlags$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiStatusFlags$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiStatusFlags$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("merged_fail"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
