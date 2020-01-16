(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getStatusCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status_code", ((P$.PdbxDatabaseStatus$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("status_code"));
});

Clazz.newMeth(C$, 'getAuthorReleaseStatusCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("author_release_status_code", ((P$.PdbxDatabaseStatus$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("author_release_status_code"));
});

Clazz.newMeth(C$, 'getStatusCodeSf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status_code_sf", ((P$.PdbxDatabaseStatus$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("status_code_sf"));
});

Clazz.newMeth(C$, 'getStatusCodeMr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status_code_mr", ((P$.PdbxDatabaseStatus$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("status_code_mr"));
});

Clazz.newMeth(C$, 'getDepReleaseCodeCoordinates$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_release_code_coordinates", ((P$.PdbxDatabaseStatus$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("dep_release_code_coordinates"));
});

Clazz.newMeth(C$, 'getDepReleaseCodeSequence$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_release_code_sequence", ((P$.PdbxDatabaseStatus$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("dep_release_code_sequence"));
});

Clazz.newMeth(C$, 'getDepReleaseCodeStructFact$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_release_code_struct_fact", ((P$.PdbxDatabaseStatus$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("dep_release_code_struct_fact"));
});

Clazz.newMeth(C$, 'getDepReleaseCodeNmrConstraints$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_release_code_nmr_constraints", ((P$.PdbxDatabaseStatus$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("dep_release_code_nmr_constraints"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxDatabaseStatus$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getRecvdDepositForm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_deposit_form", ((P$.PdbxDatabaseStatus$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_deposit_form"));
});

Clazz.newMeth(C$, 'getDateDepositionForm$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_deposition_form", ((P$.PdbxDatabaseStatus$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("date_deposition_form"));
});

Clazz.newMeth(C$, 'getDateBeginDeposition$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_begin_deposition", ((P$.PdbxDatabaseStatus$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("date_begin_deposition"));
});

Clazz.newMeth(C$, 'getDateBeginProcessing$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_begin_processing", ((P$.PdbxDatabaseStatus$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("date_begin_processing"));
});

Clazz.newMeth(C$, 'getDateEndProcessing$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_end_processing", ((P$.PdbxDatabaseStatus$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("date_end_processing"));
});

Clazz.newMeth(C$, 'getDateBeginReleasePreparation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_begin_release_preparation", ((P$.PdbxDatabaseStatus$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("date_begin_release_preparation"));
});

Clazz.newMeth(C$, 'getDateAuthorReleaseRequest$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_author_release_request", ((P$.PdbxDatabaseStatus$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("date_author_release_request"));
});

Clazz.newMeth(C$, 'getRecvdCoordinates$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_coordinates", ((P$.PdbxDatabaseStatus$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_coordinates"));
});

Clazz.newMeth(C$, 'getDateCoordinates$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_coordinates", ((P$.PdbxDatabaseStatus$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("date_coordinates"));
});

Clazz.newMeth(C$, 'getRecvdStructFact$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_struct_fact", ((P$.PdbxDatabaseStatus$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_struct_fact"));
});

Clazz.newMeth(C$, 'getDateStructFact$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_struct_fact", ((P$.PdbxDatabaseStatus$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("date_struct_fact"));
});

Clazz.newMeth(C$, 'getRecvdNmrConstraints$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_nmr_constraints", ((P$.PdbxDatabaseStatus$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_nmr_constraints"));
});

Clazz.newMeth(C$, 'getDateNmrConstraints$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_nmr_constraints", ((P$.PdbxDatabaseStatus$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("date_nmr_constraints"));
});

Clazz.newMeth(C$, 'getRecvdInternalApproval$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_internal_approval", ((P$.PdbxDatabaseStatus$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_internal_approval"));
});

Clazz.newMeth(C$, 'getRecvdManuscript$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_manuscript", ((P$.PdbxDatabaseStatus$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_manuscript"));
});

Clazz.newMeth(C$, 'getDateManuscript$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_manuscript", ((P$.PdbxDatabaseStatus$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("date_manuscript"));
});

Clazz.newMeth(C$, 'getNameDepositor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_depositor", ((P$.PdbxDatabaseStatus$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("name_depositor"));
});

Clazz.newMeth(C$, 'getRecvdAuthorApproval$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_author_approval", ((P$.PdbxDatabaseStatus$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_author_approval"));
});

Clazz.newMeth(C$, 'getAuthorApprovalType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("author_approval_type", ((P$.PdbxDatabaseStatus$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("author_approval_type"));
});

Clazz.newMeth(C$, 'getDateAuthorApproval$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_author_approval", ((P$.PdbxDatabaseStatus$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("date_author_approval"));
});

Clazz.newMeth(C$, 'getRecvdInitialDepositionDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_initial_deposition_date", ((P$.PdbxDatabaseStatus$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_initial_deposition_date"));
});

Clazz.newMeth(C$, 'getDateSubmitted$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_submitted", ((P$.PdbxDatabaseStatus$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("date_submitted"));
});

Clazz.newMeth(C$, 'getRcsbAnnotator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rcsb_annotator", ((P$.PdbxDatabaseStatus$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("rcsb_annotator"));
});

Clazz.newMeth(C$, 'getDateOfSfRelease$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_of_sf_release", ((P$.PdbxDatabaseStatus$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("date_of_sf_release"));
});

Clazz.newMeth(C$, 'getDateOfMrRelease$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_of_mr_release", ((P$.PdbxDatabaseStatus$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("date_of_mr_release"));
});

Clazz.newMeth(C$, 'getDateOfPDBRelease$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_of_PDB_release", ((P$.PdbxDatabaseStatus$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("date_of_PDB_release"));
});

Clazz.newMeth(C$, 'getDateHoldCoordinates$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_hold_coordinates", ((P$.PdbxDatabaseStatus$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("date_hold_coordinates"));
});

Clazz.newMeth(C$, 'getDateHoldStructFact$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_hold_struct_fact", ((P$.PdbxDatabaseStatus$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("date_hold_struct_fact"));
});

Clazz.newMeth(C$, 'getDateHoldNmrConstraints$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_hold_nmr_constraints", ((P$.PdbxDatabaseStatus$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("date_hold_nmr_constraints"));
});

Clazz.newMeth(C$, 'getHoldForPublication$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hold_for_publication", ((P$.PdbxDatabaseStatus$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("hold_for_publication"));
});

Clazz.newMeth(C$, 'getSGEntry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("SG_entry", ((P$.PdbxDatabaseStatus$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("SG_entry"));
});

Clazz.newMeth(C$, 'getPdbDateOfAuthorApproval$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_date_of_author_approval", ((P$.PdbxDatabaseStatus$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_date_of_author_approval"));
});

Clazz.newMeth(C$, 'getDepositSite$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("deposit_site", ((P$.PdbxDatabaseStatus$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("deposit_site"));
});

Clazz.newMeth(C$, 'getProcessSite$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("process_site", ((P$.PdbxDatabaseStatus$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("process_site"));
});

Clazz.newMeth(C$, 'getDepReleaseCodeChemicalShifts$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_release_code_chemical_shifts", ((P$.PdbxDatabaseStatus$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("dep_release_code_chemical_shifts"));
});

Clazz.newMeth(C$, 'getRecvdChemicalShifts$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("recvd_chemical_shifts", ((P$.PdbxDatabaseStatus$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("recvd_chemical_shifts"));
});

Clazz.newMeth(C$, 'getDateChemicalShifts$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_chemical_shifts", ((P$.PdbxDatabaseStatus$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("date_chemical_shifts"));
});

Clazz.newMeth(C$, 'getDateHoldChemicalShifts$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_hold_chemical_shifts", ((P$.PdbxDatabaseStatus$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("date_hold_chemical_shifts"));
});

Clazz.newMeth(C$, 'getStatusCodeCs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status_code_cs", ((P$.PdbxDatabaseStatus$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("status_code_cs"));
});

Clazz.newMeth(C$, 'getDateOfCsRelease$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_of_cs_release", ((P$.PdbxDatabaseStatus$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("date_of_cs_release"));
});

Clazz.newMeth(C$, 'getMethodsDevelopmentCategory$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("methods_development_category", ((P$.PdbxDatabaseStatus$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("methods_development_category"));
});

Clazz.newMeth(C$, 'getPdbFormatCompatible$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_format_compatible", ((P$.PdbxDatabaseStatus$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_format_compatible"));
});

Clazz.newMeth(C$, 'getAuthReqRelDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_req_rel_date", ((P$.PdbxDatabaseStatus$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("auth_req_rel_date"));
});

Clazz.newMeth(C$, 'getNdbTid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ndb_tid", ((P$.PdbxDatabaseStatus$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("ndb_tid"));
});

Clazz.newMeth(C$, 'getStatusCoordinatesInNDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("status_coordinates_in_NDB", ((P$.PdbxDatabaseStatus$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("status_coordinates_in_NDB"));
});

Clazz.newMeth(C$, 'getDateRevised$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_revised", ((P$.PdbxDatabaseStatus$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("date_revised"));
});

Clazz.newMeth(C$, 'getReplacedEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("replaced_entry_id", ((P$.PdbxDatabaseStatus$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("replaced_entry_id"));
});

Clazz.newMeth(C$, 'getRevisionId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("revision_id", ((P$.PdbxDatabaseStatus$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda57.$init$, [this, null]))) : this.getBinaryColumn$S("revision_id"));
});

Clazz.newMeth(C$, 'getRevisionDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("revision_description", ((P$.PdbxDatabaseStatus$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda58.$init$, [this, null]))) : this.getBinaryColumn$S("revision_description"));
});

Clazz.newMeth(C$, 'getPdbxAnnotator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_annotator", ((P$.PdbxDatabaseStatus$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda59.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_annotator"));
});

Clazz.newMeth(C$, 'getDateOfNDBRelease$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_of_NDB_release", ((P$.PdbxDatabaseStatus$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda60.$init$, [this, null]))) : this.getBinaryColumn$S("date_of_NDB_release"));
});

Clazz.newMeth(C$, 'getDateReleasedToPDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_released_to_PDB", ((P$.PdbxDatabaseStatus$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda61.$init$, [this, null]))) : this.getBinaryColumn$S("date_released_to_PDB"));
});

Clazz.newMeth(C$, 'getSkipPDBREMARK500$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("skip_PDB_REMARK_500", ((P$.PdbxDatabaseStatus$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda62.$init$, [this, null]))) : this.getBinaryColumn$S("skip_PDB_REMARK_500"));
});

Clazz.newMeth(C$, 'getSkipPDBREMARK$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("skip_PDB_REMARK", ((P$.PdbxDatabaseStatus$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda63.$init$, [this, null]))) : this.getBinaryColumn$S("skip_PDB_REMARK"));
});

Clazz.newMeth(C$, 'getTitleSuppression$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("title_suppression", ((P$.PdbxDatabaseStatus$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDatabaseStatus$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDatabaseStatus$lambda64.$init$, [this, null]))) : this.getBinaryColumn$S("title_suppression"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
