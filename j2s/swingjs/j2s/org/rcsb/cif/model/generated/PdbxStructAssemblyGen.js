(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGen", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntityInstId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_inst_id", ((P$.PdbxStructAssemblyGen$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGen$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGen$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entity_inst_id"));
});

Clazz.newMeth(C$, 'getAsymIdList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id_list", ((P$.PdbxStructAssemblyGen$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGen$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGen$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id_list"));
});

Clazz.newMeth(C$, 'getAuthAsymIdList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id_list", ((P$.PdbxStructAssemblyGen$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGen$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGen$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id_list"));
});

Clazz.newMeth(C$, 'getAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("assembly_id", ((P$.PdbxStructAssemblyGen$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGen$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGen$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("assembly_id"));
});

Clazz.newMeth(C$, 'getOperExpression$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("oper_expression", ((P$.PdbxStructAssemblyGen$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructAssemblyGen$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructAssemblyGen$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("oper_expression"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
