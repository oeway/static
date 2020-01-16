(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.IhmGeometricObjectTransformation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getRotMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][1]", ((P$.IhmGeometricObjectTransformation$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][1]", ((P$.IhmGeometricObjectTransformation$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][1]", ((P$.IhmGeometricObjectTransformation$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][2]", ((P$.IhmGeometricObjectTransformation$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][2]", ((P$.IhmGeometricObjectTransformation$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][2]", ((P$.IhmGeometricObjectTransformation$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][3]", ((P$.IhmGeometricObjectTransformation$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getRotMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][3]", ((P$.IhmGeometricObjectTransformation$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getRotMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][3]", ((P$.IhmGeometricObjectTransformation$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getTrVector1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tr_vector[1]", ((P$.IhmGeometricObjectTransformation$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("tr_vector[1]"));
});

Clazz.newMeth(C$, 'getTrVector2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tr_vector[2]", ((P$.IhmGeometricObjectTransformation$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("tr_vector[2]"));
});

Clazz.newMeth(C$, 'getTrVector3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("tr_vector[3]", ((P$.IhmGeometricObjectTransformation$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectTransformation$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectTransformation$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("tr_vector[3]"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
