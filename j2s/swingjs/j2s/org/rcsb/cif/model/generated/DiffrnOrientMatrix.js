(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnOrientMatrix$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.DiffrnOrientMatrix$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getUB11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[1][1]", ((P$.DiffrnOrientMatrix$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("UB[1][1]"));
});

Clazz.newMeth(C$, 'getUB12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[1][2]", ((P$.DiffrnOrientMatrix$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("UB[1][2]"));
});

Clazz.newMeth(C$, 'getUB13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[1][3]", ((P$.DiffrnOrientMatrix$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("UB[1][3]"));
});

Clazz.newMeth(C$, 'getUB21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[2][1]", ((P$.DiffrnOrientMatrix$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("UB[2][1]"));
});

Clazz.newMeth(C$, 'getUB22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[2][2]", ((P$.DiffrnOrientMatrix$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("UB[2][2]"));
});

Clazz.newMeth(C$, 'getUB23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[2][3]", ((P$.DiffrnOrientMatrix$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("UB[2][3]"));
});

Clazz.newMeth(C$, 'getUB31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[3][1]", ((P$.DiffrnOrientMatrix$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("UB[3][1]"));
});

Clazz.newMeth(C$, 'getUB32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[3][2]", ((P$.DiffrnOrientMatrix$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("UB[3][2]"));
});

Clazz.newMeth(C$, 'getUB33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("UB[3][3]", ((P$.DiffrnOrientMatrix$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientMatrix$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientMatrix$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("UB[3][3]"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2