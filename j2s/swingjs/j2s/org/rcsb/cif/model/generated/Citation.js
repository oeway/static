(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Citation", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAbstract$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("abstract", ((P$.Citation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("abstract"));
});

Clazz.newMeth(C$, 'getAbstractIdCAS$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("abstract_id_CAS", ((P$.Citation$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("abstract_id_CAS"));
});

Clazz.newMeth(C$, 'getBookIdISBN$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("book_id_ISBN", ((P$.Citation$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("book_id_ISBN"));
});

Clazz.newMeth(C$, 'getBookPublisher$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("book_publisher", ((P$.Citation$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("book_publisher"));
});

Clazz.newMeth(C$, 'getBookPublisherCity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("book_publisher_city", ((P$.Citation$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("book_publisher_city"));
});

Clazz.newMeth(C$, 'getBookTitle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("book_title", ((P$.Citation$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("book_title"));
});

Clazz.newMeth(C$, 'getCoordinateLinkage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("coordinate_linkage", ((P$.Citation$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("coordinate_linkage"));
});

Clazz.newMeth(C$, 'getCountry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("country", ((P$.Citation$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("country"));
});

Clazz.newMeth(C$, 'getDatabaseIdMedline$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_id_Medline", ((P$.Citation$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("database_id_Medline"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Citation$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.Citation$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getJournalAbbrev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_abbrev", ((P$.Citation$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("journal_abbrev"));
});

Clazz.newMeth(C$, 'getJournalIdASTM$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_id_ASTM", ((P$.Citation$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("journal_id_ASTM"));
});

Clazz.newMeth(C$, 'getJournalIdCSD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_id_CSD", ((P$.Citation$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("journal_id_CSD"));
});

Clazz.newMeth(C$, 'getJournalIdISSN$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_id_ISSN", ((P$.Citation$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("journal_id_ISSN"));
});

Clazz.newMeth(C$, 'getJournalFull$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_full", ((P$.Citation$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("journal_full"));
});

Clazz.newMeth(C$, 'getJournalIssue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_issue", ((P$.Citation$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("journal_issue"));
});

Clazz.newMeth(C$, 'getJournalVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_volume", ((P$.Citation$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("journal_volume"));
});

Clazz.newMeth(C$, 'getLanguage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("language", ((P$.Citation$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("language"));
});

Clazz.newMeth(C$, 'getPageFirst$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("page_first", ((P$.Citation$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("page_first"));
});

Clazz.newMeth(C$, 'getPageLast$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("page_last", ((P$.Citation$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("page_last"));
});

Clazz.newMeth(C$, 'getTitle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("title", ((P$.Citation$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("title"));
});

Clazz.newMeth(C$, 'getYear$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("year", ((P$.Citation$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("year"));
});

Clazz.newMeth(C$, 'getDatabaseIdCSD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("database_id_CSD", ((P$.Citation$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("database_id_CSD"));
});

Clazz.newMeth(C$, 'getPdbxDatabaseIdDOI$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_database_id_DOI", ((P$.Citation$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_database_id_DOI"));
});

Clazz.newMeth(C$, 'getPdbxDatabaseIdPubMed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_database_id_PubMed", ((P$.Citation$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_database_id_PubMed"));
});

Clazz.newMeth(C$, 'getUnpublishedFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("unpublished_flag", ((P$.Citation$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Citation$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Citation$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("unpublished_flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
