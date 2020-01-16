(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructNcsOper", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("code", ((P$.StructNcsOper$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("code"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructNcsOper$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructNcsOper$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[1][1]", ((P$.StructNcsOper$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[1][1]"));
});

Clazz.newMeth(C$, 'getMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[1][2]", ((P$.StructNcsOper$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[1][2]"));
});

Clazz.newMeth(C$, 'getMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[1][3]", ((P$.StructNcsOper$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[1][3]"));
});

Clazz.newMeth(C$, 'getMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[2][1]", ((P$.StructNcsOper$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[2][1]"));
});

Clazz.newMeth(C$, 'getMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[2][2]", ((P$.StructNcsOper$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[2][2]"));
});

Clazz.newMeth(C$, 'getMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[2][3]", ((P$.StructNcsOper$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[2][3]"));
});

Clazz.newMeth(C$, 'getMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[3][1]", ((P$.StructNcsOper$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[3][1]"));
});

Clazz.newMeth(C$, 'getMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[3][2]", ((P$.StructNcsOper$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[3][2]"));
});

Clazz.newMeth(C$, 'getMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[3][3]", ((P$.StructNcsOper$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[3][3]"));
});

Clazz.newMeth(C$, 'getVector1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector[1]", ((P$.StructNcsOper$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("vector[1]"));
});

Clazz.newMeth(C$, 'getVector2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector[2]", ((P$.StructNcsOper$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("vector[2]"));
});

Clazz.newMeth(C$, 'getVector3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector[3]", ((P$.StructNcsOper$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsOper$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsOper$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("vector[3]"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
