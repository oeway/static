(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhasingMADSet", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getClustId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("clust_id", ((P$.PhasingMADSet$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("clust_id"));
});

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PhasingMADSet$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PhasingMADSet$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getExptId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("expt_id", ((P$.PhasingMADSet$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("expt_id"));
});

Clazz.newMeth(C$, 'getFDoublePrime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("f_double_prime", ((P$.PhasingMADSet$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("f_double_prime"));
});

Clazz.newMeth(C$, 'getFPrime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("f_prime", ((P$.PhasingMADSet$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("f_prime"));
});

Clazz.newMeth(C$, 'getSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("set_id", ((P$.PhasingMADSet$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("set_id"));
});

Clazz.newMeth(C$, 'getWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength", ((P$.PhasingMADSet$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength"));
});

Clazz.newMeth(C$, 'getWavelengthDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength_details", ((P$.PhasingMADSet$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength_details"));
});

Clazz.newMeth(C$, 'getPdbxAtomType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_atom_type", ((P$.PhasingMADSet$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_atom_type"));
});

Clazz.newMeth(C$, 'getPdbxFPrimeRefined$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_f_prime_refined", ((P$.PhasingMADSet$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_f_prime_refined"));
});

Clazz.newMeth(C$, 'getPdbxFDoublePrimeRefined$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_f_double_prime_refined", ((P$.PhasingMADSet$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PhasingMADSet$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PhasingMADSet$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_f_double_prime_refined"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
