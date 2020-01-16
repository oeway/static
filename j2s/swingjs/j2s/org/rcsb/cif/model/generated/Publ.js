(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Publ", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Publ$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getContactAuthor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author", ((P$.Publ$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author"));
});

Clazz.newMeth(C$, 'getContactAuthorAddress$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author_address", ((P$.Publ$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author_address"));
});

Clazz.newMeth(C$, 'getContactAuthorEmail$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author_email", ((P$.Publ$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author_email"));
});

Clazz.newMeth(C$, 'getContactAuthorFax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author_fax", ((P$.Publ$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author_fax"));
});

Clazz.newMeth(C$, 'getContactAuthorName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author_name", ((P$.Publ$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author_name"));
});

Clazz.newMeth(C$, 'getContactAuthorPhone$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_author_phone", ((P$.Publ$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("contact_author_phone"));
});

Clazz.newMeth(C$, 'getContactLetter$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contact_letter", ((P$.Publ$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("contact_letter"));
});

Clazz.newMeth(C$, 'getManuscriptCreation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("manuscript_creation", ((P$.Publ$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("manuscript_creation"));
});

Clazz.newMeth(C$, 'getManuscriptProcessed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("manuscript_processed", ((P$.Publ$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("manuscript_processed"));
});

Clazz.newMeth(C$, 'getManuscriptText$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("manuscript_text", ((P$.Publ$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("manuscript_text"));
});

Clazz.newMeth(C$, 'getRequestedCategory$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("requested_category", ((P$.Publ$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("requested_category"));
});

Clazz.newMeth(C$, 'getRequestedCoeditorName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("requested_coeditor_name", ((P$.Publ$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("requested_coeditor_name"));
});

Clazz.newMeth(C$, 'getRequestedJournal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("requested_journal", ((P$.Publ$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("requested_journal"));
});

Clazz.newMeth(C$, 'getSectionAbstract$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_abstract", ((P$.Publ$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("section_abstract"));
});

Clazz.newMeth(C$, 'getSectionAcknowledgements$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_acknowledgements", ((P$.Publ$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("section_acknowledgements"));
});

Clazz.newMeth(C$, 'getSectionComment$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_comment", ((P$.Publ$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("section_comment"));
});

Clazz.newMeth(C$, 'getSectionDiscussion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_discussion", ((P$.Publ$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("section_discussion"));
});

Clazz.newMeth(C$, 'getSectionExperimental$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_experimental", ((P$.Publ$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("section_experimental"));
});

Clazz.newMeth(C$, 'getSectionExptlPrep$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_exptl_prep", ((P$.Publ$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("section_exptl_prep"));
});

Clazz.newMeth(C$, 'getSectionExptlRefinement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_exptl_refinement", ((P$.Publ$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("section_exptl_refinement"));
});

Clazz.newMeth(C$, 'getSectionExptlSolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_exptl_solution", ((P$.Publ$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("section_exptl_solution"));
});

Clazz.newMeth(C$, 'getSectionFigureCaptions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_figure_captions", ((P$.Publ$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("section_figure_captions"));
});

Clazz.newMeth(C$, 'getSectionIntroduction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_introduction", ((P$.Publ$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("section_introduction"));
});

Clazz.newMeth(C$, 'getSectionReferences$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_references", ((P$.Publ$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("section_references"));
});

Clazz.newMeth(C$, 'getSectionSynopsis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_synopsis", ((P$.Publ$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("section_synopsis"));
});

Clazz.newMeth(C$, 'getSectionTableLegends$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_table_legends", ((P$.Publ$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("section_table_legends"));
});

Clazz.newMeth(C$, 'getSectionTitle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_title", ((P$.Publ$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("section_title"));
});

Clazz.newMeth(C$, 'getSectionTitleFootnote$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("section_title_footnote", ((P$.Publ$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "Publ$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Publ$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("section_title_footnote"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
