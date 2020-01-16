(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Database", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Database$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getJournalASTM$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_ASTM", ((P$.Database$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("journal_ASTM"));
});

Clazz.newMeth(C$, 'getJournalCSD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("journal_CSD", ((P$.Database$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("journal_CSD"));
});

Clazz.newMeth(C$, 'getCSDHistory$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("CSD_history", ((P$.Database$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("CSD_history"));
});

Clazz.newMeth(C$, 'getCodeCAS$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_CAS", ((P$.Database$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("code_CAS"));
});

Clazz.newMeth(C$, 'getCodeCSD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_CSD", ((P$.Database$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("code_CSD"));
});

Clazz.newMeth(C$, 'getCodeICSD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_ICSD", ((P$.Database$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("code_ICSD"));
});

Clazz.newMeth(C$, 'getCodeMDF$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_MDF", ((P$.Database$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("code_MDF"));
});

Clazz.newMeth(C$, 'getCodeNBS$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_NBS", ((P$.Database$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("code_NBS"));
});

Clazz.newMeth(C$, 'getCodePDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_PDB", ((P$.Database$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("code_PDB"));
});

Clazz.newMeth(C$, 'getCodePDF$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_PDF", ((P$.Database$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("code_PDF"));
});

Clazz.newMeth(C$, 'getCodeDepnumCcdcFiz$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_depnum_ccdc_fiz", ((P$.Database$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("code_depnum_ccdc_fiz"));
});

Clazz.newMeth(C$, 'getCodeDepnumCcdcJournal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_depnum_ccdc_journal", ((P$.Database$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("code_depnum_ccdc_journal"));
});

Clazz.newMeth(C$, 'getCodeDepnumCcdcArchive$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code_depnum_ccdc_archive", ((P$.Database$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("code_depnum_ccdc_archive"));
});

Clazz.newMeth(C$, 'getPdbxCodeNDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_code_NDB", ((P$.Database$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_code_NDB"));
});

Clazz.newMeth(C$, 'getPdbxCodePDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_code_PDB", ((P$.Database$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_code_PDB"));
});

Clazz.newMeth(C$, 'getPdbxRelatedCodesPDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_related_codes_PDB", ((P$.Database$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Database$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Database$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_related_codes_PDB"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
