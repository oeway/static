(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmAssembly", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmAssembly$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmAssembly$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.EmAssembly$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getAggregationState$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aggregation_state", ((P$.EmAssembly$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("aggregation_state"));
});

Clazz.newMeth(C$, 'getComposition$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("composition", ((P$.EmAssembly$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("composition"));
});

Clazz.newMeth(C$, 'getNumComponents$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num_components", ((P$.EmAssembly$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("num_components"));
});

Clazz.newMeth(C$, 'getMolWtExp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mol_wt_exp", ((P$.EmAssembly$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("mol_wt_exp"));
});

Clazz.newMeth(C$, 'getMolWtTheo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mol_wt_theo", ((P$.EmAssembly$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("mol_wt_theo"));
});

Clazz.newMeth(C$, 'getMolWtMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mol_wt_method", ((P$.EmAssembly$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("mol_wt_method"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmAssembly$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmAssembly$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmAssembly$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
