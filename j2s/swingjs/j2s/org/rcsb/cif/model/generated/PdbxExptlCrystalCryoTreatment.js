(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalCryoTreatment", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.PdbxExptlCrystalCryoTreatment$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalCryoTreatment$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalCryoTreatment$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getFinalSolutionDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("final_solution_details", ((P$.PdbxExptlCrystalCryoTreatment$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalCryoTreatment$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalCryoTreatment$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("final_solution_details"));
});

Clazz.newMeth(C$, 'getSoakingDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("soaking_details", ((P$.PdbxExptlCrystalCryoTreatment$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalCryoTreatment$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalCryoTreatment$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("soaking_details"));
});

Clazz.newMeth(C$, 'getCoolingDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cooling_details", ((P$.PdbxExptlCrystalCryoTreatment$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalCryoTreatment$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalCryoTreatment$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("cooling_details"));
});

Clazz.newMeth(C$, 'getAnnealingDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("annealing_details", ((P$.PdbxExptlCrystalCryoTreatment$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxExptlCrystalCryoTreatment$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxExptlCrystalCryoTreatment$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("annealing_details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
