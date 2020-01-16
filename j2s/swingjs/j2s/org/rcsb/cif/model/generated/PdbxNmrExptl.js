(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrExptl", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getExperimentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experiment_id", ((P$.PdbxNmrExptl$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptl$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptl$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("experiment_id"));
});

Clazz.newMeth(C$, 'getConditionsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conditions_id", ((P$.PdbxNmrExptl$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptl$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptl$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("conditions_id"));
});

Clazz.newMeth(C$, 'getSolutionId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solution_id", ((P$.PdbxNmrExptl$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptl$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptl$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("solution_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxNmrExptl$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptl$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptl$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getSpectrometerId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("spectrometer_id", ((P$.PdbxNmrExptl$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptl$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptl$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("spectrometer_id"));
});

Clazz.newMeth(C$, 'getSampleState$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_state", ((P$.PdbxNmrExptl$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrExptl$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrExptl$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sample_state"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
