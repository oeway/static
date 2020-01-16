(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Journal", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Journal$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCodenASTM$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coden_ASTM", ((P$.Journal$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("coden_ASTM"));
});

Clazz.newMeth(C$, 'getCodenCambridge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coden_Cambridge", ((P$.Journal$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("coden_Cambridge"));
});

Clazz.newMeth(C$, 'getCoeditorAddress$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_address", ((P$.Journal$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_address"));
});

Clazz.newMeth(C$, 'getCoeditorCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_code", ((P$.Journal$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_code"));
});

Clazz.newMeth(C$, 'getCoeditorEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_email", ((P$.Journal$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_email"));
});

Clazz.newMeth(C$, 'getCoeditorFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_fax", ((P$.Journal$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_fax"));
});

Clazz.newMeth(C$, 'getCoeditorName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_name", ((P$.Journal$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_name"));
});

Clazz.newMeth(C$, 'getCoeditorNotes$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_notes", ((P$.Journal$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_notes"));
});

Clazz.newMeth(C$, 'getCoeditorPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coeditor_phone", ((P$.Journal$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("coeditor_phone"));
});

Clazz.newMeth(C$, 'getDataValidationNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_validation_number", ((P$.Journal$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("data_validation_number"));
});

Clazz.newMeth(C$, 'getDateAccepted$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_accepted", ((P$.Journal$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("date_accepted"));
});

Clazz.newMeth(C$, 'getDateFromCoeditor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_from_coeditor", ((P$.Journal$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("date_from_coeditor"));
});

Clazz.newMeth(C$, 'getDateToCoeditor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_to_coeditor", ((P$.Journal$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("date_to_coeditor"));
});

Clazz.newMeth(C$, 'getDatePrintersFinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_printers_final", ((P$.Journal$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("date_printers_final"));
});

Clazz.newMeth(C$, 'getDatePrintersFirst$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_printers_first", ((P$.Journal$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("date_printers_first"));
});

Clazz.newMeth(C$, 'getDateProofsIn$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_proofs_in", ((P$.Journal$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("date_proofs_in"));
});

Clazz.newMeth(C$, 'getDateProofsOut$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_proofs_out", ((P$.Journal$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("date_proofs_out"));
});

Clazz.newMeth(C$, 'getDateRecdCopyright$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_recd_copyright", ((P$.Journal$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("date_recd_copyright"));
});

Clazz.newMeth(C$, 'getDateRecdElectronic$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_recd_electronic", ((P$.Journal$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("date_recd_electronic"));
});

Clazz.newMeth(C$, 'getDateRecdHardCopy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_recd_hard_copy", ((P$.Journal$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("date_recd_hard_copy"));
});

Clazz.newMeth(C$, 'getIssue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("issue", ((P$.Journal$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("issue"));
});

Clazz.newMeth(C$, 'getLanguage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("language", ((P$.Journal$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("language"));
});

Clazz.newMeth(C$, 'getNameFull$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_full", ((P$.Journal$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("name_full"));
});

Clazz.newMeth(C$, 'getPageFirst$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("page_first", ((P$.Journal$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("page_first"));
});

Clazz.newMeth(C$, 'getPageLast$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("page_last", ((P$.Journal$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("page_last"));
});

Clazz.newMeth(C$, 'getPaperCategory$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("paper_category", ((P$.Journal$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("paper_category"));
});

Clazz.newMeth(C$, 'getSupplPublNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("suppl_publ_number", ((P$.Journal$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("suppl_publ_number"));
});

Clazz.newMeth(C$, 'getSupplPublPages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("suppl_publ_pages", ((P$.Journal$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("suppl_publ_pages"));
});

Clazz.newMeth(C$, 'getTecheditorAddress$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_address", ((P$.Journal$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_address"));
});

Clazz.newMeth(C$, 'getTecheditorCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_code", ((P$.Journal$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_code"));
});

Clazz.newMeth(C$, 'getTecheditorEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_email", ((P$.Journal$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_email"));
});

Clazz.newMeth(C$, 'getTecheditorFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_fax", ((P$.Journal$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_fax"));
});

Clazz.newMeth(C$, 'getTecheditorName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_name", ((P$.Journal$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_name"));
});

Clazz.newMeth(C$, 'getTecheditorNotes$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_notes", ((P$.Journal$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_notes"));
});

Clazz.newMeth(C$, 'getTecheditorPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("techeditor_phone", ((P$.Journal$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("techeditor_phone"));
});

Clazz.newMeth(C$, 'getVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume", ((P$.Journal$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("volume"));
});

Clazz.newMeth(C$, 'getYear$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("year", ((P$.Journal$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "Journal$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Journal$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("year"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
