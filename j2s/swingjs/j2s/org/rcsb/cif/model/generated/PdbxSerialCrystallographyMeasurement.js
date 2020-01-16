(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.PdbxSerialCrystallographyMeasurement$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getPulseEnergy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pulse_energy", ((P$.PdbxSerialCrystallographyMeasurement$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("pulse_energy"));
});

Clazz.newMeth(C$, 'getPulseDuration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pulse_duration", ((P$.PdbxSerialCrystallographyMeasurement$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("pulse_duration"));
});

Clazz.newMeth(C$, 'getXfelPulseRepetitionRate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("xfel_pulse_repetition_rate", ((P$.PdbxSerialCrystallographyMeasurement$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("xfel_pulse_repetition_rate"));
});

Clazz.newMeth(C$, 'getPulsePhotonEnergy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pulse_photon_energy", ((P$.PdbxSerialCrystallographyMeasurement$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pulse_photon_energy"));
});

Clazz.newMeth(C$, 'getPhotonsPerPulse$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("photons_per_pulse", ((P$.PdbxSerialCrystallographyMeasurement$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("photons_per_pulse"));
});

Clazz.newMeth(C$, 'getSourceSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_size", ((P$.PdbxSerialCrystallographyMeasurement$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("source_size"));
});

Clazz.newMeth(C$, 'getSourceDistance$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_distance", ((P$.PdbxSerialCrystallographyMeasurement$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("source_distance"));
});

Clazz.newMeth(C$, 'getFocalSpotSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("focal_spot_size", ((P$.PdbxSerialCrystallographyMeasurement$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("focal_spot_size"));
});

Clazz.newMeth(C$, 'getCollimation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("collimation", ((P$.PdbxSerialCrystallographyMeasurement$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("collimation"));
});

Clazz.newMeth(C$, 'getCollectionTimeTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("collection_time_total", ((P$.PdbxSerialCrystallographyMeasurement$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyMeasurement$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyMeasurement$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("collection_time_total"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
