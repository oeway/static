(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructBiolView", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getBiolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("biol_id", ((P$.StructBiolView$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("biol_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructBiolView$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructBiolView$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getRotMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][1]", ((P$.StructBiolView$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][2]", ((P$.StructBiolView$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][3]", ((P$.StructBiolView$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getRotMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][1]", ((P$.StructBiolView$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][2]", ((P$.StructBiolView$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][3]", ((P$.StructBiolView$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getRotMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][1]", ((P$.StructBiolView$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][2]", ((P$.StructBiolView$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][3]", ((P$.StructBiolView$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getPdbxVector1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_vector[1]", ((P$.StructBiolView$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_vector[1]"));
});

Clazz.newMeth(C$, 'getPdbxVector2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_vector[2]", ((P$.StructBiolView$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_vector[2]"));
});

Clazz.newMeth(C$, 'getPdbxVector3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_vector[3]", ((P$.StructBiolView$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructBiolView$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructBiolView$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_vector[3]"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
