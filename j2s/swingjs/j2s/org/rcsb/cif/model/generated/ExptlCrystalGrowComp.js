(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getConc$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("conc", ((P$.ExptlCrystalGrowComp$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("conc"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.ExptlCrystalGrowComp$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.ExptlCrystalGrowComp$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.ExptlCrystalGrowComp$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.ExptlCrystalGrowComp$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getSolId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sol_id", ((P$.ExptlCrystalGrowComp$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sol_id"));
});

Clazz.newMeth(C$, 'getVolume$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume", ((P$.ExptlCrystalGrowComp$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("volume"));
});

Clazz.newMeth(C$, 'getPdbxConcFinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_conc_final", ((P$.ExptlCrystalGrowComp$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_conc_final"));
});

Clazz.newMeth(C$, 'getPdbxBath$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_bath", ((P$.ExptlCrystalGrowComp$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_bath"));
});

Clazz.newMeth(C$, 'getPdbxSalt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_salt", ((P$.ExptlCrystalGrowComp$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_salt"));
});

Clazz.newMeth(C$, 'getPdbxSoakSalt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_soak_salt", ((P$.ExptlCrystalGrowComp$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_soak_salt"));
});

Clazz.newMeth(C$, 'getPdbxSoakSolv$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_soak_solv", ((P$.ExptlCrystalGrowComp$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_soak_solv"));
});

Clazz.newMeth(C$, 'getPdbxSolv$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_solv", ((P$.ExptlCrystalGrowComp$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrowComp$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrowComp$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_solv"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
