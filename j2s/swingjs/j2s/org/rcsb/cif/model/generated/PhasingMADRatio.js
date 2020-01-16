(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMADRatio", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PhasingMADRatio$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PhasingMADRatio$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getExptId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("expt_id", ((P$.PhasingMADRatio$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("expt_id"));
});

Clazz.newMeth(C$, 'getClustId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("clust_id", ((P$.PhasingMADRatio$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("clust_id"));
});

Clazz.newMeth(C$, 'getRatioOneWl$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ratio_one_wl", ((P$.PhasingMADRatio$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ratio_one_wl"));
});

Clazz.newMeth(C$, 'getRatioOneWlCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ratio_one_wl_centric", ((P$.PhasingMADRatio$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ratio_one_wl_centric"));
});

Clazz.newMeth(C$, 'getRatioTwoWl$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ratio_two_wl", ((P$.PhasingMADRatio$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ratio_two_wl"));
});

Clazz.newMeth(C$, 'getWavelength1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength_1", ((P$.PhasingMADRatio$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength_1"));
});

Clazz.newMeth(C$, 'getWavelength2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength_2", ((P$.PhasingMADRatio$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADRatio$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADRatio$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength_2"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
