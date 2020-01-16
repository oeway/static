(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxNmrSystematicChemShiftOffset$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getAtomType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_type", ((P$.PdbxNmrSystematicChemShiftOffset$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_type"));
});

Clazz.newMeth(C$, 'getAtomIsotopeNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_isotope_number", ((P$.PdbxNmrSystematicChemShiftOffset$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_isotope_number"));
});

Clazz.newMeth(C$, 'getVal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("val", ((P$.PdbxNmrSystematicChemShiftOffset$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("val"));
});

Clazz.newMeth(C$, 'getValErr$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("val_err", ((P$.PdbxNmrSystematicChemShiftOffset$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("val_err"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrSystematicChemShiftOffset$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getAssignedChemShiftListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("assigned_chem_shift_list_id", ((P$.PdbxNmrSystematicChemShiftOffset$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("assigned_chem_shift_list_id"));
});

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxNmrSystematicChemShiftOffset$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrSystematicChemShiftOffset$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrSystematicChemShiftOffset$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
