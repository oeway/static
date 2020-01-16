(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrComputing", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrComputing$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCollection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("collection", ((P$.PdbxNmrComputing$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("collection"));
});

Clazz.newMeth(C$, 'getCollectionVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("collection_version", ((P$.PdbxNmrComputing$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("collection_version"));
});

Clazz.newMeth(C$, 'getProcessing$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("processing", ((P$.PdbxNmrComputing$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("processing"));
});

Clazz.newMeth(C$, 'getProcessingVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("processing_version", ((P$.PdbxNmrComputing$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("processing_version"));
});

Clazz.newMeth(C$, 'getDataAnalysis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_analysis", ((P$.PdbxNmrComputing$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("data_analysis"));
});

Clazz.newMeth(C$, 'getDataAnalysisVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_analysis_version", ((P$.PdbxNmrComputing$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("data_analysis_version"));
});

Clazz.newMeth(C$, 'getStructureSolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("structure_solution", ((P$.PdbxNmrComputing$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("structure_solution"));
});

Clazz.newMeth(C$, 'getStructureSolutionVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("structure_solution_version", ((P$.PdbxNmrComputing$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("structure_solution_version"));
});

Clazz.newMeth(C$, 'getRefinement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement", ((P$.PdbxNmrComputing$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("refinement"));
});

Clazz.newMeth(C$, 'getRefinementVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_version", ((P$.PdbxNmrComputing$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_version"));
});

Clazz.newMeth(C$, 'getIterativeRelaxationMatrix$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("iterative_relaxation_matrix", ((P$.PdbxNmrComputing$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("iterative_relaxation_matrix"));
});

Clazz.newMeth(C$, 'getIterativeRelaxationMatrixVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("iterative_relaxation_matrix_version", ((P$.PdbxNmrComputing$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrComputing$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrComputing$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("iterative_relaxation_matrix_version"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
