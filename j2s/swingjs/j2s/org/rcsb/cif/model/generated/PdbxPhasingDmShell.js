(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDResHigh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_high", ((P$.PdbxPhasingDmShell$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_high"));
});

Clazz.newMeth(C$, 'getDResLow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("d_res_low", ((P$.PdbxPhasingDmShell$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("d_res_low"));
});

Clazz.newMeth(C$, 'getFomAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom_acentric", ((P$.PdbxPhasingDmShell$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("fom_acentric"));
});

Clazz.newMeth(C$, 'getFomCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom_centric", ((P$.PdbxPhasingDmShell$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("fom_centric"));
});

Clazz.newMeth(C$, 'getFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom", ((P$.PdbxPhasingDmShell$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("fom"));
});

Clazz.newMeth(C$, 'getReflnsAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_acentric", ((P$.PdbxPhasingDmShell$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_acentric"));
});

Clazz.newMeth(C$, 'getReflnsCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_centric", ((P$.PdbxPhasingDmShell$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_centric"));
});

Clazz.newMeth(C$, 'getReflns$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns", ((P$.PdbxPhasingDmShell$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("reflns"));
});

Clazz.newMeth(C$, 'getDeltaPhiInitial$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_phi_initial", ((P$.PdbxPhasingDmShell$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("delta_phi_initial"));
});

Clazz.newMeth(C$, 'getDeltaPhiFinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_phi_final", ((P$.PdbxPhasingDmShell$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDmShell$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDmShell$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("delta_phi_final"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
