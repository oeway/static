(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPhasingDm", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxPhasingDm$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.PdbxPhasingDm$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getMaskType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mask_type", ((P$.PdbxPhasingDm$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("mask_type"));
});

Clazz.newMeth(C$, 'getFomAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom_acentric", ((P$.PdbxPhasingDm$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("fom_acentric"));
});

Clazz.newMeth(C$, 'getFomCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom_centric", ((P$.PdbxPhasingDm$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("fom_centric"));
});

Clazz.newMeth(C$, 'getFom$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fom", ((P$.PdbxPhasingDm$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("fom"));
});

Clazz.newMeth(C$, 'getReflnsAcentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_acentric", ((P$.PdbxPhasingDm$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_acentric"));
});

Clazz.newMeth(C$, 'getReflnsCentric$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_centric", ((P$.PdbxPhasingDm$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_centric"));
});

Clazz.newMeth(C$, 'getReflns$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns", ((P$.PdbxPhasingDm$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("reflns"));
});

Clazz.newMeth(C$, 'getDeltaPhiInitial$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_phi_initial", ((P$.PdbxPhasingDm$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("delta_phi_initial"));
});

Clazz.newMeth(C$, 'getDeltaPhiFinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("delta_phi_final", ((P$.PdbxPhasingDm$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPhasingDm$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPhasingDm$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("delta_phi_final"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
