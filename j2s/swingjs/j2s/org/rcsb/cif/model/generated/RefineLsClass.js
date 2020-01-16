(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RefineLsClass", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code", ((P$.RefineLsClass$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("code"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.RefineLsClass$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.RefineLsClass$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getRFactorGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_gt", ((P$.RefineLsClass$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_gt"));
});

Clazz.newMeth(C$, 'getRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all", ((P$.RefineLsClass$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all"));
});

Clazz.newMeth(C$, 'getRFsqdFactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_Fsqd_factor", ((P$.RefineLsClass$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("R_Fsqd_factor"));
});

Clazz.newMeth(C$, 'getRIFactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_I_factor", ((P$.RefineLsClass$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("R_I_factor"));
});

Clazz.newMeth(C$, 'getWRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wR_factor_all", ((P$.RefineLsClass$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "RefineLsClass$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.RefineLsClass$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("wR_factor_all"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
