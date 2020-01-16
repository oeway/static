(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PdbxPhasingMADShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PdbxPhasingMADShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getReflnsAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_acentric", ((P$.PdbxPhasingMADShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_acentric"));
});

Clazz.newMeth(C$, 'getReflnsCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_centric", ((P$.PdbxPhasingMADShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_centric"));
});

Clazz.newMeth(C$, 'getReflns$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns", ((P$.PdbxPhasingMADShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("reflns"));
});

Clazz.newMeth(C$, 'getFomAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom_acentric", ((P$.PdbxPhasingMADShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("fom_acentric"));
});

Clazz.newMeth(C$, 'getFomCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom_centric", ((P$.PdbxPhasingMADShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("fom_centric"));
});

Clazz.newMeth(C$, 'getFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom", ((P$.PdbxPhasingMADShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("fom"));
});

Clazz.newMeth(C$, 'getRCullisCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis_centric", ((P$.PdbxPhasingMADShell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis_centric"));
});

Clazz.newMeth(C$, 'getRCullisAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis_acentric", ((P$.PdbxPhasingMADShell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis_acentric"));
});

Clazz.newMeth(C$, 'getRCullis$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_cullis", ((P$.PdbxPhasingMADShell$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("R_cullis"));
});

Clazz.newMeth(C$, 'getRKrautCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_kraut_centric", ((P$.PdbxPhasingMADShell$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("R_kraut_centric"));
});

Clazz.newMeth(C$, 'getRKrautAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_kraut_acentric", ((P$.PdbxPhasingMADShell$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("R_kraut_acentric"));
});

Clazz.newMeth(C$, 'getRKraut$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("R_kraut", ((P$.PdbxPhasingMADShell$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("R_kraut"));
});

Clazz.newMeth(C$, 'getLocCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("loc_centric", ((P$.PdbxPhasingMADShell$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("loc_centric"));
});

Clazz.newMeth(C$, 'getLocAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("loc_acentric", ((P$.PdbxPhasingMADShell$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("loc_acentric"));
});

Clazz.newMeth(C$, 'getLoc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("loc", ((P$.PdbxPhasingMADShell$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("loc"));
});

Clazz.newMeth(C$, 'getPowerCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power_centric", ((P$.PdbxPhasingMADShell$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("power_centric"));
});

Clazz.newMeth(C$, 'getPowerAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power_acentric", ((P$.PdbxPhasingMADShell$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("power_acentric"));
});

Clazz.newMeth(C$, 'getPower$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power", ((P$.PdbxPhasingMADShell$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingMADShell$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingMADShell$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("power"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
