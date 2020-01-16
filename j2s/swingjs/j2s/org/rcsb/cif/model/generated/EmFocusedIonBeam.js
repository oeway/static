(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCurrent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("current", ((P$.EmFocusedIonBeam$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("current"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmFocusedIonBeam$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDoseRate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dose_rate", ((P$.EmFocusedIonBeam$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("dose_rate"));
});

Clazz.newMeth(C$, 'getDuration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("duration", ((P$.EmFocusedIonBeam$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("duration"));
});

Clazz.newMeth(C$, 'getEmTomographySpecimenId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("em_tomography_specimen_id", ((P$.EmFocusedIonBeam$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("em_tomography_specimen_id"));
});

Clazz.newMeth(C$, 'getFinalThickness$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("final_thickness", ((P$.EmFocusedIonBeam$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("final_thickness"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmFocusedIonBeam$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getInitialThickness$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("initial_thickness", ((P$.EmFocusedIonBeam$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("initial_thickness"));
});

Clazz.newMeth(C$, 'getInstrument$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("instrument", ((P$.EmFocusedIonBeam$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("instrument"));
});

Clazz.newMeth(C$, 'getIon$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ion", ((P$.EmFocusedIonBeam$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ion"));
});

Clazz.newMeth(C$, 'getTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature", ((P$.EmFocusedIonBeam$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("temperature"));
});

Clazz.newMeth(C$, 'getVoltage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("voltage", ((P$.EmFocusedIonBeam$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmFocusedIonBeam$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmFocusedIonBeam$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("voltage"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
