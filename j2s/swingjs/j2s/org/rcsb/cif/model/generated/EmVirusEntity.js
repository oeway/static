(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmVirusEntity", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmVirusEntity$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getVirusHostCategory$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("virus_host_category", ((P$.EmVirusEntity$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("virus_host_category"));
});

Clazz.newMeth(C$, 'getVirusHostSpecies$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("virus_host_species", ((P$.EmVirusEntity$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("virus_host_species"));
});

Clazz.newMeth(C$, 'getVirusHostGrowthCell$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("virus_host_growth_cell", ((P$.EmVirusEntity$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("virus_host_growth_cell"));
});

Clazz.newMeth(C$, 'getVirusType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("virus_type", ((P$.EmVirusEntity$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("virus_type"));
});

Clazz.newMeth(C$, 'getVirusIsolate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("virus_isolate", ((P$.EmVirusEntity$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("virus_isolate"));
});

Clazz.newMeth(C$, 'getIctvdbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ictvdb_id", ((P$.EmVirusEntity$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ictvdb_id"));
});

Clazz.newMeth(C$, 'getEntityAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_assembly_id", ((P$.EmVirusEntity$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("entity_assembly_id"));
});

Clazz.newMeth(C$, 'getEnveloped$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("enveloped", ((P$.EmVirusEntity$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("enveloped"));
});

Clazz.newMeth(C$, 'getEmpty$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("empty", ((P$.EmVirusEntity$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("empty"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmVirusEntity$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVirusEntity$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVirusEntity$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
