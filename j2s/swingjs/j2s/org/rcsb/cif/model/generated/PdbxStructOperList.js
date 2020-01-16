(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructOperList", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxStructOperList$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxStructOperList$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.PdbxStructOperList$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getSymmetryOperation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_operation", ((P$.PdbxStructOperList$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_operation"));
});

Clazz.newMeth(C$, 'getMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[1][1]", ((P$.PdbxStructOperList$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[1][1]"));
});

Clazz.newMeth(C$, 'getMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[1][2]", ((P$.PdbxStructOperList$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[1][2]"));
});

Clazz.newMeth(C$, 'getMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[1][3]", ((P$.PdbxStructOperList$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[1][3]"));
});

Clazz.newMeth(C$, 'getMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[2][1]", ((P$.PdbxStructOperList$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[2][1]"));
});

Clazz.newMeth(C$, 'getMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[2][2]", ((P$.PdbxStructOperList$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[2][2]"));
});

Clazz.newMeth(C$, 'getMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[2][3]", ((P$.PdbxStructOperList$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[2][3]"));
});

Clazz.newMeth(C$, 'getMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[3][1]", ((P$.PdbxStructOperList$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[3][1]"));
});

Clazz.newMeth(C$, 'getMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[3][2]", ((P$.PdbxStructOperList$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[3][2]"));
});

Clazz.newMeth(C$, 'getMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("matrix[3][3]", ((P$.PdbxStructOperList$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("matrix[3][3]"));
});

Clazz.newMeth(C$, 'getVector1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector[1]", ((P$.PdbxStructOperList$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("vector[1]"));
});

Clazz.newMeth(C$, 'getVector2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector[2]", ((P$.PdbxStructOperList$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("vector[2]"));
});

Clazz.newMeth(C$, 'getVector3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vector[3]", ((P$.PdbxStructOperList$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructOperList$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructOperList$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("vector[3]"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
