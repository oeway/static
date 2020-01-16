(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxChemCompInstanceDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.PdbxChemCompInstanceDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.PdbxChemCompInstanceDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("PDB_ins_code", ((P$.PdbxChemCompInstanceDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("PDB_ins_code"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.PdbxChemCompInstanceDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxChemCompInstanceDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getInPolymerFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("in_polymer_flag", ((P$.PdbxChemCompInstanceDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("in_polymer_flag"));
});

Clazz.newMeth(C$, 'getAuthorProvidedFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("author_provided_flag", ((P$.PdbxChemCompInstanceDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("author_provided_flag"));
});

Clazz.newMeth(C$, 'getFormula$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("formula", ((P$.PdbxChemCompInstanceDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxChemCompInstanceDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxChemCompInstanceDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("formula"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
