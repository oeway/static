(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCarbonShiftsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("carbon_shifts_flag", ((P$.PdbxNmrChemShiftReference$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("carbon_shifts_flag"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxNmrChemShiftReference$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrChemShiftReference$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxNmrChemShiftReference$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label", ((P$.PdbxNmrChemShiftReference$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("label"));
});

Clazz.newMeth(C$, 'getNitrogenShiftsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nitrogen_shifts_flag", ((P$.PdbxNmrChemShiftReference$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("nitrogen_shifts_flag"));
});

Clazz.newMeth(C$, 'getOtherShiftsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("other_shifts_flag", ((P$.PdbxNmrChemShiftReference$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("other_shifts_flag"));
});

Clazz.newMeth(C$, 'getPhosphorusShiftsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("phosphorus_shifts_flag", ((P$.PdbxNmrChemShiftReference$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("phosphorus_shifts_flag"));
});

Clazz.newMeth(C$, 'getProtonShiftsFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("proton_shifts_flag", ((P$.PdbxNmrChemShiftReference$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrChemShiftReference$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrChemShiftReference$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("proton_shifts_flag"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
