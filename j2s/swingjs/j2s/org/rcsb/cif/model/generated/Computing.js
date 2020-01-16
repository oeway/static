(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Computing", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Computing$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCellRefinement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_refinement", ((P$.Computing$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("cell_refinement"));
});

Clazz.newMeth(C$, 'getDataCollection$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_collection", ((P$.Computing$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("data_collection"));
});

Clazz.newMeth(C$, 'getDataReduction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_reduction", ((P$.Computing$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("data_reduction"));
});

Clazz.newMeth(C$, 'getMolecularGraphics$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("molecular_graphics", ((P$.Computing$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("molecular_graphics"));
});

Clazz.newMeth(C$, 'getPublicationMaterial$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("publication_material", ((P$.Computing$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("publication_material"));
});

Clazz.newMeth(C$, 'getStructureRefinement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("structure_refinement", ((P$.Computing$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("structure_refinement"));
});

Clazz.newMeth(C$, 'getStructureSolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("structure_solution", ((P$.Computing$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("structure_solution"));
});

Clazz.newMeth(C$, 'getPdbxStructureRefinementMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_structure_refinement_method", ((P$.Computing$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_structure_refinement_method"));
});

Clazz.newMeth(C$, 'getPdbxDataReductionIi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_data_reduction_ii", ((P$.Computing$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_data_reduction_ii"));
});

Clazz.newMeth(C$, 'getPdbxDataReductionDs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_data_reduction_ds", ((P$.Computing$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Computing$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Computing$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_data_reduction_ds"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
