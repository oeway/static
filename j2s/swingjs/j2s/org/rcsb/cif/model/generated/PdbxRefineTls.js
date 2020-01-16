(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxRefineTls", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxRefineTls$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPdbxRefineId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_id", ((P$.PdbxRefineTls$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxRefineTls$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.PdbxRefineTls$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getOriginX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("origin_x", ((P$.PdbxRefineTls$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("origin_x"));
});

Clazz.newMeth(C$, 'getOriginY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("origin_y", ((P$.PdbxRefineTls$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("origin_y"));
});

Clazz.newMeth(C$, 'getOriginZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("origin_z", ((P$.PdbxRefineTls$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("origin_z"));
});

Clazz.newMeth(C$, 'getT11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[1][1]", ((P$.PdbxRefineTls$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("T[1][1]"));
});

Clazz.newMeth(C$, 'getT11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[1][1]_esd", ((P$.PdbxRefineTls$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("T[1][1]_esd"));
});

Clazz.newMeth(C$, 'getT12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[1][2]", ((P$.PdbxRefineTls$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("T[1][2]"));
});

Clazz.newMeth(C$, 'getT12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[1][2]_esd", ((P$.PdbxRefineTls$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("T[1][2]_esd"));
});

Clazz.newMeth(C$, 'getT13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[1][3]", ((P$.PdbxRefineTls$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("T[1][3]"));
});

Clazz.newMeth(C$, 'getT13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[1][3]_esd", ((P$.PdbxRefineTls$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("T[1][3]_esd"));
});

Clazz.newMeth(C$, 'getT22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[2][2]", ((P$.PdbxRefineTls$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("T[2][2]"));
});

Clazz.newMeth(C$, 'getT22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[2][2]_esd", ((P$.PdbxRefineTls$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("T[2][2]_esd"));
});

Clazz.newMeth(C$, 'getT23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[2][3]", ((P$.PdbxRefineTls$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("T[2][3]"));
});

Clazz.newMeth(C$, 'getT23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[2][3]_esd", ((P$.PdbxRefineTls$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("T[2][3]_esd"));
});

Clazz.newMeth(C$, 'getT33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[3][3]", ((P$.PdbxRefineTls$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("T[3][3]"));
});

Clazz.newMeth(C$, 'getT33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("T[3][3]_esd", ((P$.PdbxRefineTls$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("T[3][3]_esd"));
});

Clazz.newMeth(C$, 'getL11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[1][1]", ((P$.PdbxRefineTls$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("L[1][1]"));
});

Clazz.newMeth(C$, 'getL11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[1][1]_esd", ((P$.PdbxRefineTls$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("L[1][1]_esd"));
});

Clazz.newMeth(C$, 'getL12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[1][2]", ((P$.PdbxRefineTls$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("L[1][2]"));
});

Clazz.newMeth(C$, 'getL12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[1][2]_esd", ((P$.PdbxRefineTls$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("L[1][2]_esd"));
});

Clazz.newMeth(C$, 'getL13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[1][3]", ((P$.PdbxRefineTls$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("L[1][3]"));
});

Clazz.newMeth(C$, 'getL13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[1][3]_esd", ((P$.PdbxRefineTls$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("L[1][3]_esd"));
});

Clazz.newMeth(C$, 'getL22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[2][2]", ((P$.PdbxRefineTls$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("L[2][2]"));
});

Clazz.newMeth(C$, 'getL22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[2][2]_esd", ((P$.PdbxRefineTls$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("L[2][2]_esd"));
});

Clazz.newMeth(C$, 'getL23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[2][3]", ((P$.PdbxRefineTls$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("L[2][3]"));
});

Clazz.newMeth(C$, 'getL23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[2][3]_esd", ((P$.PdbxRefineTls$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("L[2][3]_esd"));
});

Clazz.newMeth(C$, 'getL33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[3][3]", ((P$.PdbxRefineTls$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("L[3][3]"));
});

Clazz.newMeth(C$, 'getL33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("L[3][3]_esd", ((P$.PdbxRefineTls$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("L[3][3]_esd"));
});

Clazz.newMeth(C$, 'getS11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[1][1]", ((P$.PdbxRefineTls$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("S[1][1]"));
});

Clazz.newMeth(C$, 'getS11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[1][1]_esd", ((P$.PdbxRefineTls$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("S[1][1]_esd"));
});

Clazz.newMeth(C$, 'getS12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[1][2]", ((P$.PdbxRefineTls$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("S[1][2]"));
});

Clazz.newMeth(C$, 'getS12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[1][2]_esd", ((P$.PdbxRefineTls$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("S[1][2]_esd"));
});

Clazz.newMeth(C$, 'getS13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[1][3]", ((P$.PdbxRefineTls$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("S[1][3]"));
});

Clazz.newMeth(C$, 'getS13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[1][3]_esd", ((P$.PdbxRefineTls$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("S[1][3]_esd"));
});

Clazz.newMeth(C$, 'getS21$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[2][1]", ((P$.PdbxRefineTls$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("S[2][1]"));
});

Clazz.newMeth(C$, 'getS21Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[2][1]_esd", ((P$.PdbxRefineTls$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("S[2][1]_esd"));
});

Clazz.newMeth(C$, 'getS22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[2][2]", ((P$.PdbxRefineTls$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("S[2][2]"));
});

Clazz.newMeth(C$, 'getS22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[2][2]_esd", ((P$.PdbxRefineTls$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("S[2][2]_esd"));
});

Clazz.newMeth(C$, 'getS23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[2][3]", ((P$.PdbxRefineTls$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("S[2][3]"));
});

Clazz.newMeth(C$, 'getS23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[2][3]_esd", ((P$.PdbxRefineTls$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("S[2][3]_esd"));
});

Clazz.newMeth(C$, 'getS31$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[3][1]", ((P$.PdbxRefineTls$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("S[3][1]"));
});

Clazz.newMeth(C$, 'getS31Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[3][1]_esd", ((P$.PdbxRefineTls$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("S[3][1]_esd"));
});

Clazz.newMeth(C$, 'getS32$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[3][2]", ((P$.PdbxRefineTls$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("S[3][2]"));
});

Clazz.newMeth(C$, 'getS32Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[3][2]_esd", ((P$.PdbxRefineTls$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("S[3][2]_esd"));
});

Clazz.newMeth(C$, 'getS33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[3][3]", ((P$.PdbxRefineTls$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("S[3][3]"));
});

Clazz.newMeth(C$, 'getS33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("S[3][3]_esd", ((P$.PdbxRefineTls$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineTls$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineTls$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("S[3][3]_esd"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
