(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDepDatasetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dep_dataset_id", ((P$.PdbxDepuiValidationStatusFlags$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("dep_dataset_id"));
});

Clazz.newMeth(C$, 'getResidualBFactorsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("residual_B_factors_flag", ((P$.PdbxDepuiValidationStatusFlags$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("residual_B_factors_flag"));
});

Clazz.newMeth(C$, 'getOccupancyOutliersLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_outliers_low", ((P$.PdbxDepuiValidationStatusFlags$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_outliers_low"));
});

Clazz.newMeth(C$, 'getOccupancyOutliersHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_outliers_high", ((P$.PdbxDepuiValidationStatusFlags$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_outliers_high"));
});

Clazz.newMeth(C$, 'getAdpOutliersLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("adp_outliers_low", ((P$.PdbxDepuiValidationStatusFlags$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("adp_outliers_low"));
});

Clazz.newMeth(C$, 'getSolventOutliers$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("solvent_outliers", ((P$.PdbxDepuiValidationStatusFlags$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("solvent_outliers"));
});

Clazz.newMeth(C$, 'getTlsNoAniso$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tls_no_aniso", ((P$.PdbxDepuiValidationStatusFlags$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("tls_no_aniso"));
});

Clazz.newMeth(C$, 'getAdpOutliersZero$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("adp_outliers_zero", ((P$.PdbxDepuiValidationStatusFlags$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepuiValidationStatusFlags$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepuiValidationStatusFlags$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("adp_outliers_zero"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
