(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPrdId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prd_id", ((P$.PdbxReferenceEntitySrcNat$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("prd_id"));
});

Clazz.newMeth(C$, 'getRefEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_entity_id", ((P$.PdbxReferenceEntitySrcNat$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ref_entity_id"));
});

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxReferenceEntitySrcNat$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getOrganismScientific$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("organism_scientific", ((P$.PdbxReferenceEntitySrcNat$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("organism_scientific"));
});

Clazz.newMeth(C$, 'getStrain$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("strain", ((P$.PdbxReferenceEntitySrcNat$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("strain"));
});

Clazz.newMeth(C$, 'getTaxid$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("taxid", ((P$.PdbxReferenceEntitySrcNat$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("taxid"));
});

Clazz.newMeth(C$, 'getAtcc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atcc", ((P$.PdbxReferenceEntitySrcNat$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("atcc"));
});

Clazz.newMeth(C$, 'getDbCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_code", ((P$.PdbxReferenceEntitySrcNat$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("db_code"));
});

Clazz.newMeth(C$, 'getDbName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_name", ((P$.PdbxReferenceEntitySrcNat$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("db_name"));
});

Clazz.newMeth(C$, 'getSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source", ((P$.PdbxReferenceEntitySrcNat$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("source"));
});

Clazz.newMeth(C$, 'getSourceId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_id", ((P$.PdbxReferenceEntitySrcNat$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySrcNat$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySrcNat$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("source_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
