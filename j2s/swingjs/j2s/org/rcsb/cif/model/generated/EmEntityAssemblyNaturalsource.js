(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell", ((P$.EmEntityAssemblyNaturalsource$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("cell"));
});

Clazz.newMeth(C$, 'getCellularLocation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cellular_location", ((P$.EmEntityAssemblyNaturalsource$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("cellular_location"));
});

Clazz.newMeth(C$, 'getEntityAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_assembly_id", ((P$.EmEntityAssemblyNaturalsource$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_assembly_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmEntityAssemblyNaturalsource$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getNcbiTaxId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ncbi_tax_id", ((P$.EmEntityAssemblyNaturalsource$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ncbi_tax_id"));
});

Clazz.newMeth(C$, 'getOrganism$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organism", ((P$.EmEntityAssemblyNaturalsource$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("organism"));
});

Clazz.newMeth(C$, 'getOrganelle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organelle", ((P$.EmEntityAssemblyNaturalsource$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("organelle"));
});

Clazz.newMeth(C$, 'getOrgan$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organ", ((P$.EmEntityAssemblyNaturalsource$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("organ"));
});

Clazz.newMeth(C$, 'getStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("strain", ((P$.EmEntityAssemblyNaturalsource$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("strain"));
});

Clazz.newMeth(C$, 'getTissue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tissue", ((P$.EmEntityAssemblyNaturalsource$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyNaturalsource$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyNaturalsource$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("tissue"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
