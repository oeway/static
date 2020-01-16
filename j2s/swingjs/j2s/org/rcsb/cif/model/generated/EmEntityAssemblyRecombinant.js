(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell", ((P$.EmEntityAssemblyRecombinant$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("cell"));
});

Clazz.newMeth(C$, 'getEntityAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_assembly_id", ((P$.EmEntityAssemblyRecombinant$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_assembly_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmEntityAssemblyRecombinant$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getNcbiTaxId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ncbi_tax_id", ((P$.EmEntityAssemblyRecombinant$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ncbi_tax_id"));
});

Clazz.newMeth(C$, 'getOrganism$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organism", ((P$.EmEntityAssemblyRecombinant$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("organism"));
});

Clazz.newMeth(C$, 'getPlasmid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("plasmid", ((P$.EmEntityAssemblyRecombinant$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("plasmid"));
});

Clazz.newMeth(C$, 'getStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("strain", ((P$.EmEntityAssemblyRecombinant$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEntityAssemblyRecombinant$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEntityAssemblyRecombinant$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("strain"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
