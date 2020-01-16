(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RefineLsRestr", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPdbxRefineId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.RefineLsRestr$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getCriterion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("criterion", ((P$.RefineLsRestr$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("criterion"));
});

Clazz.newMeth(C$, 'getDevIdeal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dev_ideal", ((P$.RefineLsRestr$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("dev_ideal"));
});

Clazz.newMeth(C$, 'getDevIdealTarget$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dev_ideal_target", ((P$.RefineLsRestr$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("dev_ideal_target"));
});

Clazz.newMeth(C$, 'getNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number", ((P$.RefineLsRestr$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number"));
});

Clazz.newMeth(C$, 'getRejects$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rejects", ((P$.RefineLsRestr$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("rejects"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.RefineLsRestr$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight", ((P$.RefineLsRestr$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("weight"));
});

Clazz.newMeth(C$, 'getPdbxRestraintFunction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_restraint_function", ((P$.RefineLsRestr$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsRestr$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsRestr$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_restraint_function"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
