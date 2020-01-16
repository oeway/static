(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructAsym", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructAsym$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.StructAsym$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructAsym$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPdbxModified$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_modified", ((P$.StructAsym$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_modified"));
});

Clazz.newMeth(C$, 'getPdbxBlankPDBChainidFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_blank_PDB_chainid_flag", ((P$.StructAsym$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_blank_PDB_chainid_flag"));
});

Clazz.newMeth(C$, 'getPdbxPDBId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_id", ((P$.StructAsym$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_id"));
});

Clazz.newMeth(C$, 'getPdbxAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_alt_id", ((P$.StructAsym$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_type", ((P$.StructAsym$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_type"));
});

Clazz.newMeth(C$, 'getPdbxOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_order", ((P$.StructAsym$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_order"));
});

Clazz.newMeth(C$, 'getPdbxFractionPerAsymUnit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_fraction_per_asym_unit", ((P$.StructAsym$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_fraction_per_asym_unit"));
});

Clazz.newMeth(C$, 'getPdbxMissingNumBeginOfChainNotInSeqres$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_missing_num_begin_of_chain_not_in_seqres", ((P$.StructAsym$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_missing_num_begin_of_chain_not_in_seqres"));
});

Clazz.newMeth(C$, 'getPdbxMissingNumEndOfChainNotInSeqres$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_missing_num_end_of_chain_not_in_seqres", ((P$.StructAsym$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_missing_num_end_of_chain_not_in_seqres"));
});

Clazz.newMeth(C$, 'getPdbxMissingNumBeginOfChainInSeqres$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_missing_num_begin_of_chain_in_seqres", ((P$.StructAsym$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructAsym$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructAsym$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_missing_num_begin_of_chain_in_seqres"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
