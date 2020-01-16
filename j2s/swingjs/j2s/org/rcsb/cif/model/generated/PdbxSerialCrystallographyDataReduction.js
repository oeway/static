(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.PdbxSerialCrystallographyDataReduction$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getFramesTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("frames_total", ((P$.PdbxSerialCrystallographyDataReduction$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("frames_total"));
});

Clazz.newMeth(C$, 'getXfelPulseEvents$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("xfel_pulse_events", ((P$.PdbxSerialCrystallographyDataReduction$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("xfel_pulse_events"));
});

Clazz.newMeth(C$, 'getFrameHits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("frame_hits", ((P$.PdbxSerialCrystallographyDataReduction$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("frame_hits"));
});

Clazz.newMeth(C$, 'getCrystalHits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_hits", ((P$.PdbxSerialCrystallographyDataReduction$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_hits"));
});

Clazz.newMeth(C$, 'getDropletHits$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("droplet_hits", ((P$.PdbxSerialCrystallographyDataReduction$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("droplet_hits"));
});

Clazz.newMeth(C$, 'getFramesFailedIndex$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("frames_failed_index", ((P$.PdbxSerialCrystallographyDataReduction$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("frames_failed_index"));
});

Clazz.newMeth(C$, 'getFramesIndexed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("frames_indexed", ((P$.PdbxSerialCrystallographyDataReduction$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("frames_indexed"));
});

Clazz.newMeth(C$, 'getLatticesIndexed$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("lattices_indexed", ((P$.PdbxSerialCrystallographyDataReduction$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("lattices_indexed"));
});

Clazz.newMeth(C$, 'getXfelRunNumbers$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("xfel_run_numbers", ((P$.PdbxSerialCrystallographyDataReduction$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographyDataReduction$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographyDataReduction$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("xfel_run_numbers"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
