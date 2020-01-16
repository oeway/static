(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.PdbxReflnsTwin$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.PdbxReflnsTwin$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getDomainId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("domain_id", ((P$.PdbxReflnsTwin$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("domain_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxReflnsTwin$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getOperator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("operator", ((P$.PdbxReflnsTwin$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("operator"));
});

Clazz.newMeth(C$, 'getFraction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fraction", ((P$.PdbxReflnsTwin$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("fraction"));
});

Clazz.newMeth(C$, 'getMeanI2OverMeanISquare$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_I2_over_mean_I_square", ((P$.PdbxReflnsTwin$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("mean_I2_over_mean_I_square"));
});

Clazz.newMeth(C$, 'getMeanFSquareOverMeanF2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mean_F_square_over_mean_F2", ((P$.PdbxReflnsTwin$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReflnsTwin$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReflnsTwin$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("mean_F_square_over_mean_F2"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
