(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.PdbxDiffrnReflnsShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PdbxDiffrnReflnsShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PdbxDiffrnReflnsShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getPercentPossibleObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("percent_possible_obs", ((P$.PdbxDiffrnReflnsShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("percent_possible_obs"));
});

Clazz.newMeth(C$, 'getRmergeIObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rmerge_I_obs", ((P$.PdbxDiffrnReflnsShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("Rmerge_I_obs"));
});

Clazz.newMeth(C$, 'getRsymValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Rsym_value", ((P$.PdbxDiffrnReflnsShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("Rsym_value"));
});

Clazz.newMeth(C$, 'getChiSquared$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chi_squared", ((P$.PdbxDiffrnReflnsShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("chi_squared"));
});

Clazz.newMeth(C$, 'getRedundancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("redundancy", ((P$.PdbxDiffrnReflnsShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("redundancy"));
});

Clazz.newMeth(C$, 'getRejects$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rejects", ((P$.PdbxDiffrnReflnsShell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("rejects"));
});

Clazz.newMeth(C$, 'getNumberObs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_obs", ((P$.PdbxDiffrnReflnsShell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDiffrnReflnsShell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDiffrnReflnsShell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("number_obs"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
