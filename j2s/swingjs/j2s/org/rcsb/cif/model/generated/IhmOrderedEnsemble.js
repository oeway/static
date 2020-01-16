(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getProcessId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("process_id", ((P$.IhmOrderedEnsemble$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("process_id"));
});

Clazz.newMeth(C$, 'getProcessDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("process_description", ((P$.IhmOrderedEnsemble$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("process_description"));
});

Clazz.newMeth(C$, 'getEdgeId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("edge_id", ((P$.IhmOrderedEnsemble$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("edge_id"));
});

Clazz.newMeth(C$, 'getEdgeDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("edge_description", ((P$.IhmOrderedEnsemble$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("edge_description"));
});

Clazz.newMeth(C$, 'getStepId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_id", ((P$.IhmOrderedEnsemble$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("step_id"));
});

Clazz.newMeth(C$, 'getStepDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("step_description", ((P$.IhmOrderedEnsemble$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("step_description"));
});

Clazz.newMeth(C$, 'getOrderedBy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordered_by", ((P$.IhmOrderedEnsemble$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ordered_by"));
});

Clazz.newMeth(C$, 'getModelGroupIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_group_id_begin", ((P$.IhmOrderedEnsemble$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("model_group_id_begin"));
});

Clazz.newMeth(C$, 'getModelGroupIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_group_id_end", ((P$.IhmOrderedEnsemble$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmOrderedEnsemble$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmOrderedEnsemble$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("model_group_id_end"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
