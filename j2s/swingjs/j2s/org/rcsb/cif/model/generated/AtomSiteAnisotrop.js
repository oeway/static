(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getB11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[1][1]", ((P$.AtomSiteAnisotrop$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("B[1][1]"));
});

Clazz.newMeth(C$, 'getB11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[1][1]_esd", ((P$.AtomSiteAnisotrop$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("B[1][1]_esd"));
});

Clazz.newMeth(C$, 'getB12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[1][2]", ((P$.AtomSiteAnisotrop$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("B[1][2]"));
});

Clazz.newMeth(C$, 'getB12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[1][2]_esd", ((P$.AtomSiteAnisotrop$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("B[1][2]_esd"));
});

Clazz.newMeth(C$, 'getB13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[1][3]", ((P$.AtomSiteAnisotrop$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("B[1][3]"));
});

Clazz.newMeth(C$, 'getB13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[1][3]_esd", ((P$.AtomSiteAnisotrop$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("B[1][3]_esd"));
});

Clazz.newMeth(C$, 'getB22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[2][2]", ((P$.AtomSiteAnisotrop$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("B[2][2]"));
});

Clazz.newMeth(C$, 'getB22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[2][2]_esd", ((P$.AtomSiteAnisotrop$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("B[2][2]_esd"));
});

Clazz.newMeth(C$, 'getB23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[2][3]", ((P$.AtomSiteAnisotrop$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("B[2][3]"));
});

Clazz.newMeth(C$, 'getB23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[2][3]_esd", ((P$.AtomSiteAnisotrop$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("B[2][3]_esd"));
});

Clazz.newMeth(C$, 'getB33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[3][3]", ((P$.AtomSiteAnisotrop$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("B[3][3]"));
});

Clazz.newMeth(C$, 'getB33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B[3][3]_esd", ((P$.AtomSiteAnisotrop$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("B[3][3]_esd"));
});

Clazz.newMeth(C$, 'getRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ratio", ((P$.AtomSiteAnisotrop$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("ratio"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.AtomSiteAnisotrop$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_symbol", ((P$.AtomSiteAnisotrop$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("type_symbol"));
});

Clazz.newMeth(C$, 'getU11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[1][1]", ((P$.AtomSiteAnisotrop$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("U[1][1]"));
});

Clazz.newMeth(C$, 'getU11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[1][1]_esd", ((P$.AtomSiteAnisotrop$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("U[1][1]_esd"));
});

Clazz.newMeth(C$, 'getU12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[1][2]", ((P$.AtomSiteAnisotrop$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("U[1][2]"));
});

Clazz.newMeth(C$, 'getU12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[1][2]_esd", ((P$.AtomSiteAnisotrop$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("U[1][2]_esd"));
});

Clazz.newMeth(C$, 'getU13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[1][3]", ((P$.AtomSiteAnisotrop$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("U[1][3]"));
});

Clazz.newMeth(C$, 'getU13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[1][3]_esd", ((P$.AtomSiteAnisotrop$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("U[1][3]_esd"));
});

Clazz.newMeth(C$, 'getU22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[2][2]", ((P$.AtomSiteAnisotrop$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("U[2][2]"));
});

Clazz.newMeth(C$, 'getU22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[2][2]_esd", ((P$.AtomSiteAnisotrop$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("U[2][2]_esd"));
});

Clazz.newMeth(C$, 'getU23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[2][3]", ((P$.AtomSiteAnisotrop$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("U[2][3]"));
});

Clazz.newMeth(C$, 'getU23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[2][3]_esd", ((P$.AtomSiteAnisotrop$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("U[2][3]_esd"));
});

Clazz.newMeth(C$, 'getU33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[3][3]", ((P$.AtomSiteAnisotrop$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("U[3][3]"));
});

Clazz.newMeth(C$, 'getU33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U[3][3]_esd", ((P$.AtomSiteAnisotrop$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("U[3][3]_esd"));
});

Clazz.newMeth(C$, 'getPdbxAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_seq_id", ((P$.AtomSiteAnisotrop$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_alt_id", ((P$.AtomSiteAnisotrop$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_asym_id", ((P$.AtomSiteAnisotrop$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_atom_id", ((P$.AtomSiteAnisotrop$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_comp_id", ((P$.AtomSiteAnisotrop$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_seq_id", ((P$.AtomSiteAnisotrop$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_seq_id"));
});

Clazz.newMeth(C$, 'getPdbxLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_alt_id", ((P$.AtomSiteAnisotrop$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_asym_id", ((P$.AtomSiteAnisotrop$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxLabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_atom_id", ((P$.AtomSiteAnisotrop$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_atom_id"));
});

Clazz.newMeth(C$, 'getPdbxLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_comp_id", ((P$.AtomSiteAnisotrop$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_ins_code", ((P$.AtomSiteAnisotrop$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPDBModelNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_model_num", ((P$.AtomSiteAnisotrop$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_model_num"));
});

Clazz.newMeth(C$, 'getPdbxNotInAsym$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_not_in_asym", ((P$.AtomSiteAnisotrop$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_not_in_asym"));
});

Clazz.newMeth(C$, 'getPdbxPDBResidueNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_residue_no", ((P$.AtomSiteAnisotrop$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_residue_no"));
});

Clazz.newMeth(C$, 'getPdbxPDBResidueName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_residue_name", ((P$.AtomSiteAnisotrop$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_residue_name"));
});

Clazz.newMeth(C$, 'getPdbxPDBStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_strand_id", ((P$.AtomSiteAnisotrop$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_strand_id"));
});

Clazz.newMeth(C$, 'getPdbxPDBAtomName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_atom_name", ((P$.AtomSiteAnisotrop$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_atom_name"));
});

Clazz.newMeth(C$, 'getPdbxAuthAtomName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_atom_name", ((P$.AtomSiteAnisotrop$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_atom_name"));
});

Clazz.newMeth(C$, 'getPdbxLabelInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_ins_code", ((P$.AtomSiteAnisotrop$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSiteAnisotrop$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSiteAnisotrop$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_ins_code"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
