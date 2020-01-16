(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMADExpt", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDeltaDeltaPhi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_delta_phi", ((P$.PhasingMADExpt$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("delta_delta_phi"));
});

Clazz.newMeth(C$, 'getDeltaPhi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_phi", ((P$.PhasingMADExpt$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("delta_phi"));
});

Clazz.newMeth(C$, 'getDeltaPhiSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_phi_sigma", ((P$.PhasingMADExpt$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("delta_phi_sigma"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PhasingMADExpt$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getMeanFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_fom", ((P$.PhasingMADExpt$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("mean_fom"));
});

Clazz.newMeth(C$, 'getNumberClust$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_clust", ((P$.PhasingMADExpt$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number_clust"));
});

Clazz.newMeth(C$, 'getRNormalAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_normal_all", ((P$.PhasingMADExpt$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("R_normal_all"));
});

Clazz.newMeth(C$, 'getRNormalAnomScat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_normal_anom_scat", ((P$.PhasingMADExpt$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADExpt$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADExpt$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("R_normal_anom_scat"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
