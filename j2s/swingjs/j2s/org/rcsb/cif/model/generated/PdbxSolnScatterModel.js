(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getScatterId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scatter_id", ((P$.PdbxSolnScatterModel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("scatter_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxSolnScatterModel$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxSolnScatterModel$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.PdbxSolnScatterModel$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getSoftwareList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_list", ((P$.PdbxSolnScatterModel$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("software_list"));
});

Clazz.newMeth(C$, 'getSoftwareAuthorList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_author_list", ((P$.PdbxSolnScatterModel$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("software_author_list"));
});

Clazz.newMeth(C$, 'getEntryFittingList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_fitting_list", ((P$.PdbxSolnScatterModel$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("entry_fitting_list"));
});

Clazz.newMeth(C$, 'getNumConformersCalculated$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_conformers_calculated", ((P$.PdbxSolnScatterModel$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("num_conformers_calculated"));
});

Clazz.newMeth(C$, 'getNumConformersSubmitted$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_conformers_submitted", ((P$.PdbxSolnScatterModel$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("num_conformers_submitted"));
});

Clazz.newMeth(C$, 'getRepresentativeConformer$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("representative_conformer", ((P$.PdbxSolnScatterModel$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("representative_conformer"));
});

Clazz.newMeth(C$, 'getConformerSelectionCriteria$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conformer_selection_criteria", ((P$.PdbxSolnScatterModel$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSolnScatterModel$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSolnScatterModel$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("conformer_selection_criteria"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
