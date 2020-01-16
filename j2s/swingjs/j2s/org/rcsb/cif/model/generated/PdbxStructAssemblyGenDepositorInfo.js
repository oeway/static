(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getAsymIdList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id_list", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id_list"));
});

Clazz.newMeth(C$, 'getAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("assembly_id", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("assembly_id"));
});

Clazz.newMeth(C$, 'getOperExpression$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oper_expression", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("oper_expression"));
});

Clazz.newMeth(C$, 'getFullMatrices$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("full_matrices", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("full_matrices"));
});

Clazz.newMeth(C$, 'getSymmetryOperation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_operation", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_operation"));
});

Clazz.newMeth(C$, 'getAtUnitMatrix$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("at_unit_matrix", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("at_unit_matrix"));
});

Clazz.newMeth(C$, 'getChainIdList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chain_id_list", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("chain_id_list"));
});

Clazz.newMeth(C$, 'getAllChains$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("all_chains", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("all_chains"));
});

Clazz.newMeth(C$, 'getHelicalRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("helical_rotation", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("helical_rotation"));
});

Clazz.newMeth(C$, 'getHelicalRise$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("helical_rise", ((P$.PdbxStructAssemblyGenDepositorInfo$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGenDepositorInfo$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGenDepositorInfo$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("helical_rise"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
