(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxDataProcessingReflns$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingReflns$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getNumberAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_all", ((P$.PdbxDataProcessingReflns$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingReflns$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("number_all"));
});

Clazz.newMeth(C$, 'getNumberMarkedReject$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_marked_reject", ((P$.PdbxDataProcessingReflns$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingReflns$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("number_marked_reject"));
});

Clazz.newMeth(C$, 'getPercentMarkedReject$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_marked_reject", ((P$.PdbxDataProcessingReflns$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingReflns$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("percent_marked_reject"));
});

Clazz.newMeth(C$, 'getPercentRejected$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_rejected", ((P$.PdbxDataProcessingReflns$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingReflns$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("percent_rejected"));
});

Clazz.newMeth(C$, 'getRFactorAllLinear$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all_linear", ((P$.PdbxDataProcessingReflns$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingReflns$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingReflns$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all_linear"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
