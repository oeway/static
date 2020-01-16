(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructSiteView", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.StructSiteView$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.StructSiteView$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getRotMatrix11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][1]", ((P$.StructSiteView$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][2]", ((P$.StructSiteView$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[1][3]", ((P$.StructSiteView$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[1][3]"));
});

Clazz.newMeth(C$, 'getRotMatrix21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][1]", ((P$.StructSiteView$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][2]", ((P$.StructSiteView$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[2][3]", ((P$.StructSiteView$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[2][3]"));
});

Clazz.newMeth(C$, 'getRotMatrix31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][1]", ((P$.StructSiteView$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][1]"));
});

Clazz.newMeth(C$, 'getRotMatrix32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][2]", ((P$.StructSiteView$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][2]"));
});

Clazz.newMeth(C$, 'getRotMatrix33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rot_matrix[3][3]", ((P$.StructSiteView$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("rot_matrix[3][3]"));
});

Clazz.newMeth(C$, 'getSiteId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("site_id", ((P$.StructSiteView$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSiteView$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSiteView$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("site_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
