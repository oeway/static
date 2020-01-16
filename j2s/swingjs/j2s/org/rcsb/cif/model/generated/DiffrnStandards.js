(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnStandards", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnStandards$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getDecay$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("decay_%", ((P$.DiffrnStandards$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("decay_%"));
});

Clazz.newMeth(C$, 'getIntervalCount$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("interval_count", ((P$.DiffrnStandards$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("interval_count"));
});

Clazz.newMeth(C$, 'getIntervalTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("interval_time", ((P$.DiffrnStandards$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("interval_time"));
});

Clazz.newMeth(C$, 'getNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number", ((P$.DiffrnStandards$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number"));
});

Clazz.newMeth(C$, 'getScaleSigma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scale_sigma", ((P$.DiffrnStandards$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("scale_sigma"));
});

Clazz.newMeth(C$, 'getScaleU$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scale_u", ((P$.DiffrnStandards$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnStandards$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnStandards$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("scale_u"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
