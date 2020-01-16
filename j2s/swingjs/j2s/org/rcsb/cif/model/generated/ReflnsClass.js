(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReflnsClass", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code", ((P$.ReflnsClass$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("code"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.ReflnsClass$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.ReflnsClass$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.ReflnsClass$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getNumberGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_gt", ((P$.ReflnsClass$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number_gt"));
});

Clazz.newMeth(C$, 'getNumberTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_total", ((P$.ReflnsClass$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number_total"));
});

Clazz.newMeth(C$, 'getRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_all", ((P$.ReflnsClass$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_all"));
});

Clazz.newMeth(C$, 'getRFactorGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_factor_gt", ((P$.ReflnsClass$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("R_factor_gt"));
});

Clazz.newMeth(C$, 'getRFsqdFactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_Fsqd_factor", ((P$.ReflnsClass$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("R_Fsqd_factor"));
});

Clazz.newMeth(C$, 'getRIFactor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_I_factor", ((P$.ReflnsClass$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("R_I_factor"));
});

Clazz.newMeth(C$, 'getWRFactorAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wR_factor_all", ((P$.ReflnsClass$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReflnsClass$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ReflnsClass$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("wR_factor_all"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:51 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
