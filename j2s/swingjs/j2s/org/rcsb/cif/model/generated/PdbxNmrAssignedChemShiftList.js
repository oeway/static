(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getChemShift13CErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_13C_err", ((P$.PdbxNmrAssignedChemShiftList$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_13C_err"));
});

Clazz.newMeth(C$, 'getChemShift15NErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_15N_err", ((P$.PdbxNmrAssignedChemShiftList$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_15N_err"));
});

Clazz.newMeth(C$, 'getChemShift19FErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_19F_err", ((P$.PdbxNmrAssignedChemShiftList$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_19F_err"));
});

Clazz.newMeth(C$, 'getChemShift1HErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_1H_err", ((P$.PdbxNmrAssignedChemShiftList$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_1H_err"));
});

Clazz.newMeth(C$, 'getChemShift2HErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_2H_err", ((P$.PdbxNmrAssignedChemShiftList$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_2H_err"));
});

Clazz.newMeth(C$, 'getChemShift31PErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_31P_err", ((P$.PdbxNmrAssignedChemShiftList$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_31P_err"));
});

Clazz.newMeth(C$, 'getChemShiftReferenceId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chem_shift_reference_id", ((P$.PdbxNmrAssignedChemShiftList$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("chem_shift_reference_id"));
});

Clazz.newMeth(C$, 'getConditionsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conditions_id", ((P$.PdbxNmrAssignedChemShiftList$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("conditions_id"));
});

Clazz.newMeth(C$, 'getDataFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_file_name", ((P$.PdbxNmrAssignedChemShiftList$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("data_file_name"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxNmrAssignedChemShiftList$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrAssignedChemShiftList$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getErrorDerivationMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("error_derivation_method", ((P$.PdbxNmrAssignedChemShiftList$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("error_derivation_method"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxNmrAssignedChemShiftList$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label", ((P$.PdbxNmrAssignedChemShiftList$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("label"));
});

Clazz.newMeth(C$, 'getConditionsLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conditions_label", ((P$.PdbxNmrAssignedChemShiftList$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrAssignedChemShiftList$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrAssignedChemShiftList$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("conditions_label"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
