(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CellMeasurement", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.CellMeasurement$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getPressure$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure", ((P$.CellMeasurement$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pressure"));
});

Clazz.newMeth(C$, 'getPressureEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pressure_esd", ((P$.CellMeasurement$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pressure_esd"));
});

Clazz.newMeth(C$, 'getRadiation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("radiation", ((P$.CellMeasurement$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("radiation"));
});

Clazz.newMeth(C$, 'getReflnsUsed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("reflns_used", ((P$.CellMeasurement$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("reflns_used"));
});

Clazz.newMeth(C$, 'getTemp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp", ((P$.CellMeasurement$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("temp"));
});

Clazz.newMeth(C$, 'getTempEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp_esd", ((P$.CellMeasurement$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("temp_esd"));
});

Clazz.newMeth(C$, 'getThetaMax$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("theta_max", ((P$.CellMeasurement$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("theta_max"));
});

Clazz.newMeth(C$, 'getThetaMin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("theta_min", ((P$.CellMeasurement$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("theta_min"));
});

Clazz.newMeth(C$, 'getWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength", ((P$.CellMeasurement$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "CellMeasurement$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.CellMeasurement$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:34 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
