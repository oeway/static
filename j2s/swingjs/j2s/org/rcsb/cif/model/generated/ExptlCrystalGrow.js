(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getApparatus$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("apparatus", ((P$.ExptlCrystalGrow$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("apparatus"));
});

Clazz.newMeth(C$, 'getAtmosphere$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atmosphere", ((P$.ExptlCrystalGrow$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atmosphere"));
});

Clazz.newMeth(C$, 'getCrystalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_id", ((P$.ExptlCrystalGrow$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.ExptlCrystalGrow$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.ExptlCrystalGrow$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getMethodRef$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method_ref", ((P$.ExptlCrystalGrow$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("method_ref"));
});

Clazz.newMeth(C$, 'getPH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pH", ((P$.ExptlCrystalGrow$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pH"));
});

Clazz.newMeth(C$, 'getPressure$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure", ((P$.ExptlCrystalGrow$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pressure"));
});

Clazz.newMeth(C$, 'getPressureEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure_esd", ((P$.ExptlCrystalGrow$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pressure_esd"));
});

Clazz.newMeth(C$, 'getSeeding$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seeding", ((P$.ExptlCrystalGrow$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("seeding"));
});

Clazz.newMeth(C$, 'getSeedingRef$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seeding_ref", ((P$.ExptlCrystalGrow$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("seeding_ref"));
});

Clazz.newMeth(C$, 'getTemp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp", ((P$.ExptlCrystalGrow$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("temp"));
});

Clazz.newMeth(C$, 'getTempDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp_details", ((P$.ExptlCrystalGrow$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("temp_details"));
});

Clazz.newMeth(C$, 'getTempEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp_esd", ((P$.ExptlCrystalGrow$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("temp_esd"));
});

Clazz.newMeth(C$, 'getTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("time", ((P$.ExptlCrystalGrow$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("time"));
});

Clazz.newMeth(C$, 'getPdbxDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_details", ((P$.ExptlCrystalGrow$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_details"));
});

Clazz.newMeth(C$, 'getPdbxPHRange$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_pH_range", ((P$.ExptlCrystalGrow$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "ExptlCrystalGrow$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ExptlCrystalGrow$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_pH_range"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
