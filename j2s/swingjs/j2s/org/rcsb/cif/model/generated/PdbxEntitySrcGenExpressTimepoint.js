(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxEntitySrcGenExpressTimepoint$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpressTimepoint$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxEntitySrcGenExpressTimepoint$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpressTimepoint$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_id", ((P$.PdbxEntitySrcGenExpressTimepoint$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpressTimepoint$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("step_id"));
});

Clazz.newMeth(C$, 'getSerial$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("serial", ((P$.PdbxEntitySrcGenExpressTimepoint$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpressTimepoint$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("serial"));
});

Clazz.newMeth(C$, 'getOD$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("OD", ((P$.PdbxEntitySrcGenExpressTimepoint$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpressTimepoint$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("OD"));
});

Clazz.newMeth(C$, 'getTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("time", ((P$.PdbxEntitySrcGenExpressTimepoint$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntitySrcGenExpressTimepoint$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntitySrcGenExpressTimepoint$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("time"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:44 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
