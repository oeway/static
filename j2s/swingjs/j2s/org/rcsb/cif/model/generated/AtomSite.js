(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomSite", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAnisoB11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[1][1]", ((P$.AtomSite$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[1][1]"));
});

Clazz.newMeth(C$, 'getAnisoB11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[1][1]_esd", ((P$.AtomSite$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[1][1]_esd"));
});

Clazz.newMeth(C$, 'getAnisoB12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[1][2]", ((P$.AtomSite$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[1][2]"));
});

Clazz.newMeth(C$, 'getAnisoB12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[1][2]_esd", ((P$.AtomSite$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[1][2]_esd"));
});

Clazz.newMeth(C$, 'getAnisoB13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[1][3]", ((P$.AtomSite$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[1][3]"));
});

Clazz.newMeth(C$, 'getAnisoB13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[1][3]_esd", ((P$.AtomSite$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[1][3]_esd"));
});

Clazz.newMeth(C$, 'getAnisoB22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[2][2]", ((P$.AtomSite$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[2][2]"));
});

Clazz.newMeth(C$, 'getAnisoB22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[2][2]_esd", ((P$.AtomSite$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[2][2]_esd"));
});

Clazz.newMeth(C$, 'getAnisoB23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[2][3]", ((P$.AtomSite$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[2][3]"));
});

Clazz.newMeth(C$, 'getAnisoB23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[2][3]_esd", ((P$.AtomSite$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[2][3]_esd"));
});

Clazz.newMeth(C$, 'getAnisoB33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[3][3]", ((P$.AtomSite$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[3][3]"));
});

Clazz.newMeth(C$, 'getAnisoB33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_B[3][3]_esd", ((P$.AtomSite$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_B[3][3]_esd"));
});

Clazz.newMeth(C$, 'getAnisoRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_ratio", ((P$.AtomSite$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_ratio"));
});

Clazz.newMeth(C$, 'getAnisoU11$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[1][1]", ((P$.AtomSite$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[1][1]"));
});

Clazz.newMeth(C$, 'getAnisoU11Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[1][1]_esd", ((P$.AtomSite$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[1][1]_esd"));
});

Clazz.newMeth(C$, 'getAnisoU12$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[1][2]", ((P$.AtomSite$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[1][2]"));
});

Clazz.newMeth(C$, 'getAnisoU12Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[1][2]_esd", ((P$.AtomSite$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[1][2]_esd"));
});

Clazz.newMeth(C$, 'getAnisoU13$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[1][3]", ((P$.AtomSite$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[1][3]"));
});

Clazz.newMeth(C$, 'getAnisoU13Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[1][3]_esd", ((P$.AtomSite$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[1][3]_esd"));
});

Clazz.newMeth(C$, 'getAnisoU22$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[2][2]", ((P$.AtomSite$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[2][2]"));
});

Clazz.newMeth(C$, 'getAnisoU22Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[2][2]_esd", ((P$.AtomSite$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[2][2]_esd"));
});

Clazz.newMeth(C$, 'getAnisoU23$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[2][3]", ((P$.AtomSite$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[2][3]"));
});

Clazz.newMeth(C$, 'getAnisoU23Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[2][3]_esd", ((P$.AtomSite$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[2][3]_esd"));
});

Clazz.newMeth(C$, 'getAnisoU33$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[3][3]", ((P$.AtomSite$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[3][3]"));
});

Clazz.newMeth(C$, 'getAnisoU33Esd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("aniso_U[3][3]_esd", ((P$.AtomSite$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("aniso_U[3][3]_esd"));
});

Clazz.newMeth(C$, 'getAttachedHydrogens$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("attached_hydrogens", ((P$.AtomSite$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("attached_hydrogens"));
});

Clazz.newMeth(C$, 'getAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_asym_id", ((P$.AtomSite$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("auth_asym_id"));
});

Clazz.newMeth(C$, 'getAuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_atom_id", ((P$.AtomSite$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("auth_atom_id"));
});

Clazz.newMeth(C$, 'getAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_comp_id", ((P$.AtomSite$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("auth_comp_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.AtomSite$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getBEquivGeomMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_equiv_geom_mean", ((P$.AtomSite$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("B_equiv_geom_mean"));
});

Clazz.newMeth(C$, 'getBEquivGeomMeanEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_equiv_geom_mean_esd", ((P$.AtomSite$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("B_equiv_geom_mean_esd"));
});

Clazz.newMeth(C$, 'getBIsoOrEquiv$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_iso_or_equiv", ((P$.AtomSite$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("B_iso_or_equiv"));
});

Clazz.newMeth(C$, 'getBIsoOrEquivEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B_iso_or_equiv_esd", ((P$.AtomSite$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("B_iso_or_equiv_esd"));
});

Clazz.newMeth(C$, 'getCalcAttachedAtom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("calc_attached_atom", ((P$.AtomSite$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("calc_attached_atom"));
});

Clazz.newMeth(C$, 'getCalcFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("calc_flag", ((P$.AtomSite$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("calc_flag"));
});

Clazz.newMeth(C$, 'getCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_x", ((P$.AtomSite$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_x"));
});

Clazz.newMeth(C$, 'getCartnXEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_x_esd", ((P$.AtomSite$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_x_esd"));
});

Clazz.newMeth(C$, 'getCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_y", ((P$.AtomSite$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_y"));
});

Clazz.newMeth(C$, 'getCartnYEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_y_esd", ((P$.AtomSite$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_y_esd"));
});

Clazz.newMeth(C$, 'getCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_z", ((P$.AtomSite$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_z"));
});

Clazz.newMeth(C$, 'getCartnZEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_z_esd", ((P$.AtomSite$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_z_esd"));
});

Clazz.newMeth(C$, 'getChemicalConnNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chemical_conn_number", ((P$.AtomSite$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda43.$init$, [this, null]))) : this.getBinaryColumn$S("chemical_conn_number"));
});

Clazz.newMeth(C$, 'getConstraints$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("constraints", ((P$.AtomSite$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda44.$init$, [this, null]))) : this.getBinaryColumn$S("constraints"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.AtomSite$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda45.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDisorderAssembly$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("disorder_assembly", ((P$.AtomSite$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda46.$init$, [this, null]))) : this.getBinaryColumn$S("disorder_assembly"));
});

Clazz.newMeth(C$, 'getDisorderGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("disorder_group", ((P$.AtomSite$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda47.$init$, [this, null]))) : this.getBinaryColumn$S("disorder_group"));
});

Clazz.newMeth(C$, 'getFootnoteId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("footnote_id", ((P$.AtomSite$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda48.$init$, [this, null]))) : this.getBinaryColumn$S("footnote_id"));
});

Clazz.newMeth(C$, 'getFractX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_x", ((P$.AtomSite$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda49.$init$, [this, null]))) : this.getBinaryColumn$S("fract_x"));
});

Clazz.newMeth(C$, 'getFractXEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_x_esd", ((P$.AtomSite$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda50.$init$, [this, null]))) : this.getBinaryColumn$S("fract_x_esd"));
});

Clazz.newMeth(C$, 'getFractY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_y", ((P$.AtomSite$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda51.$init$, [this, null]))) : this.getBinaryColumn$S("fract_y"));
});

Clazz.newMeth(C$, 'getFractYEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_y_esd", ((P$.AtomSite$lambda52||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda52.$init$, [this, null]))) : this.getBinaryColumn$S("fract_y_esd"));
});

Clazz.newMeth(C$, 'getFractZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_z", ((P$.AtomSite$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda53.$init$, [this, null]))) : this.getBinaryColumn$S("fract_z"));
});

Clazz.newMeth(C$, 'getFractZEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fract_z_esd", ((P$.AtomSite$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda54.$init$, [this, null]))) : this.getBinaryColumn$S("fract_z_esd"));
});

Clazz.newMeth(C$, 'getGroupPDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("group_PDB", ((P$.AtomSite$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda55.$init$, [this, null]))) : this.getBinaryColumn$S("group_PDB"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.AtomSite$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda56.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_alt_id", ((P$.AtomSite$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda57.$init$, [this, null]))) : this.getBinaryColumn$S("label_alt_id"));
});

Clazz.newMeth(C$, 'getLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_asym_id", ((P$.AtomSite$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda58.$init$, [this, null]))) : this.getBinaryColumn$S("label_asym_id"));
});

Clazz.newMeth(C$, 'getLabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_atom_id", ((P$.AtomSite$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda59.$init$, [this, null]))) : this.getBinaryColumn$S("label_atom_id"));
});

Clazz.newMeth(C$, 'getLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_comp_id", ((P$.AtomSite$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda60.$init$, [this, null]))) : this.getBinaryColumn$S("label_comp_id"));
});

Clazz.newMeth(C$, 'getLabelEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_entity_id", ((P$.AtomSite$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda61.$init$, [this, null]))) : this.getBinaryColumn$S("label_entity_id"));
});

Clazz.newMeth(C$, 'getLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label_seq_id", ((P$.AtomSite$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda62.$init$, [this, null]))) : this.getBinaryColumn$S("label_seq_id"));
});

Clazz.newMeth(C$, 'getOccupancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy", ((P$.AtomSite$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda63.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy"));
});

Clazz.newMeth(C$, 'getOccupancyEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("occupancy_esd", ((P$.AtomSite$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda64.$init$, [this, null]))) : this.getBinaryColumn$S("occupancy_esd"));
});

Clazz.newMeth(C$, 'getRestraints$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("restraints", ((P$.AtomSite$lambda65||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda65.$init$, [this, null]))) : this.getBinaryColumn$S("restraints"));
});

Clazz.newMeth(C$, 'getSymmetryMultiplicity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_multiplicity", ((P$.AtomSite$lambda66||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda66.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_multiplicity"));
});

Clazz.newMeth(C$, 'getThermalDisplaceType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("thermal_displace_type", ((P$.AtomSite$lambda67||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda67.$init$, [this, null]))) : this.getBinaryColumn$S("thermal_displace_type"));
});

Clazz.newMeth(C$, 'getTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_symbol", ((P$.AtomSite$lambda68||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda68.$init$, [this, null]))) : this.getBinaryColumn$S("type_symbol"));
});

Clazz.newMeth(C$, 'getUEquivGeomMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_equiv_geom_mean", ((P$.AtomSite$lambda69||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda69.$init$, [this, null]))) : this.getBinaryColumn$S("U_equiv_geom_mean"));
});

Clazz.newMeth(C$, 'getUEquivGeomMeanEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_equiv_geom_mean_esd", ((P$.AtomSite$lambda70||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda70.$init$, [this, null]))) : this.getBinaryColumn$S("U_equiv_geom_mean_esd"));
});

Clazz.newMeth(C$, 'getUIsoOrEquiv$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_iso_or_equiv", ((P$.AtomSite$lambda71||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda71", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda71.$init$, [this, null]))) : this.getBinaryColumn$S("U_iso_or_equiv"));
});

Clazz.newMeth(C$, 'getUIsoOrEquivEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("U_iso_or_equiv_esd", ((P$.AtomSite$lambda72||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda72", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda72.$init$, [this, null]))) : this.getBinaryColumn$S("U_iso_or_equiv_esd"));
});

Clazz.newMeth(C$, 'getWyckoffSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Wyckoff_symbol", ((P$.AtomSite$lambda73||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda73", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda73.$init$, [this, null]))) : this.getBinaryColumn$S("Wyckoff_symbol"));
});

Clazz.newMeth(C$, 'getAdpType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("adp_type", ((P$.AtomSite$lambda74||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda74", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda74.$init$, [this, null]))) : this.getBinaryColumn$S("adp_type"));
});

Clazz.newMeth(C$, 'getRefinementFlags$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_flags", ((P$.AtomSite$lambda75||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda75", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda75.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_flags"));
});

Clazz.newMeth(C$, 'getRefinementFlagsAdp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_flags_adp", ((P$.AtomSite$lambda76||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda76", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda76.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_flags_adp"));
});

Clazz.newMeth(C$, 'getRefinementFlagsOccupancy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_flags_occupancy", ((P$.AtomSite$lambda77||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda77", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda77.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_flags_occupancy"));
});

Clazz.newMeth(C$, 'getRefinementFlagsPosn$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("refinement_flags_posn", ((P$.AtomSite$lambda78||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda78", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda78.$init$, [this, null]))) : this.getBinaryColumn$S("refinement_flags_posn"));
});

Clazz.newMeth(C$, 'getPdbxAuthAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_alt_id", ((P$.AtomSite$lambda79||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda79", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda79.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_alt_id"));
});

Clazz.newMeth(C$, 'getPdbxPDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_ins_code", ((P$.AtomSite$lambda80||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda80", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda80.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getPdbxPDBModelNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_model_num", ((P$.AtomSite$lambda81||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda81", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda81.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_model_num"));
});

Clazz.newMeth(C$, 'getPdbxPDBResidueNo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_residue_no", ((P$.AtomSite$lambda82||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda82", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda82.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_residue_no"));
});

Clazz.newMeth(C$, 'getPdbxPDBResidueName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_residue_name", ((P$.AtomSite$lambda83||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda83", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda83.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_residue_name"));
});

Clazz.newMeth(C$, 'getPdbxPDBStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_strand_id", ((P$.AtomSite$lambda84||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda84", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda84.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_strand_id"));
});

Clazz.newMeth(C$, 'getPdbxPDBAtomName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_PDB_atom_name", ((P$.AtomSite$lambda85||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda85", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda85.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_PDB_atom_name"));
});

Clazz.newMeth(C$, 'getPdbxAuthAtomName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_atom_name", ((P$.AtomSite$lambda86||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda86", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda86.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_atom_name"));
});

Clazz.newMeth(C$, 'getPdbxFormalCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_formal_charge", ((P$.AtomSite$lambda87||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda87", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda87.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_formal_charge"));
});

Clazz.newMeth(C$, 'getPdbxAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_comp_id", ((P$.AtomSite$lambda88||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda88", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda88.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_comp_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_asym_id", ((P$.AtomSite$lambda89||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda89", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda89.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_asym_id"));
});

Clazz.newMeth(C$, 'getPdbxAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_auth_seq_id", ((P$.AtomSite$lambda90||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda90", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda90.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_auth_seq_id"));
});

Clazz.newMeth(C$, 'getPdbxTlsGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_tls_group_id", ((P$.AtomSite$lambda91||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda91", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda91.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_tls_group_id"));
});

Clazz.newMeth(C$, 'getPdbxNcsDomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ncs_dom_id", ((P$.AtomSite$lambda92||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda92", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda92.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ncs_dom_id"));
});

Clazz.newMeth(C$, 'getPdbxStructGroupId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_struct_group_id", ((P$.AtomSite$lambda93||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda93", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda93.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_struct_group_id"));
});

Clazz.newMeth(C$, 'getPdbxGroupNDB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_group_NDB", ((P$.AtomSite$lambda94||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda94", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda94.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_group_NDB"));
});

Clazz.newMeth(C$, 'getPdbxAtomGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_group", ((P$.AtomSite$lambda95||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda95", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda95.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_group"));
});

Clazz.newMeth(C$, 'getPdbxLabelSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_label_seq_num", ((P$.AtomSite$lambda96||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda96", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda96.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_label_seq_num"));
});

Clazz.newMeth(C$, 'getPdbxNotInAsym$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_not_in_asym", ((P$.AtomSite$lambda97||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda97", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda97.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_not_in_asym"));
});

Clazz.newMeth(C$, 'getIhmModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ihm_model_id", ((P$.AtomSite$lambda98||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomSite$lambda98", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.AtomSite$lambda98.$init$, [this, null]))) : this.getBinaryColumn$S("ihm_model_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
