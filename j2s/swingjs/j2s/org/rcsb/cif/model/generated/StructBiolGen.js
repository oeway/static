(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructBiolGen", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.StructBiolGen$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getBiolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("biol_id", ((P$.StructBiolGen$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("biol_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructBiolGen$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getSymmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry", ((P$.StructBiolGen$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry"));
});

Clazz.newMeth(C$, 'getPdbxFullSymmetryOperation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_full_symmetry_operation", ((P$.StructBiolGen$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_full_symmetry_operation"));
});

Clazz.newMeth(C$, 'getPdbxPDBOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_order", ((P$.StructBiolGen$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_order"));
});

Clazz.newMeth(C$, 'getPdbxNewAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_new_asym_id", ((P$.StructBiolGen$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_new_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxNewPdbAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_new_pdb_asym_id", ((P$.StructBiolGen$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_new_pdb_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxColorRed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_color_red", ((P$.StructBiolGen$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_color_red"));
});

Clazz.newMeth(C$, 'getPdbxColorGreen$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_color_green", ((P$.StructBiolGen$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_color_green"));
});

Clazz.newMeth(C$, 'getPdbxColorBlue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_color_blue", ((P$.StructBiolGen$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_color_blue"));
});

Clazz.newMeth(C$, 'getPdbxAfterBeginResidueNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_after_begin_residue_no", ((P$.StructBiolGen$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_after_begin_residue_no"));
});

Clazz.newMeth(C$, 'getPdbxAfterEndResidueNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_after_end_residue_no", ((P$.StructBiolGen$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_after_end_residue_no"));
});

Clazz.newMeth(C$, 'getPdbxBeforeBeginResidueNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_before_begin_residue_no", ((P$.StructBiolGen$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_before_begin_residue_no"));
});

Clazz.newMeth(C$, 'getPdbxBeforeEndResidueNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_before_end_residue_no", ((P$.StructBiolGen$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolGen$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolGen$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_before_end_residue_no"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
