(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getSampleHolding$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_holding", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("sample_holding"));
});

Clazz.newMeth(C$, 'getSupportBase$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("support_base", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("support_base"));
});

Clazz.newMeth(C$, 'getSampleUnitSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_unit_size", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("sample_unit_size"));
});

Clazz.newMeth(C$, 'getCrystalsPerUnit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystals_per_unit", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("crystals_per_unit"));
});

Clazz.newMeth(C$, 'getSampleSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_solvent", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("sample_solvent"));
});

Clazz.newMeth(C$, 'getSampleDehydrationPrevention$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_dehydration_prevention", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("sample_dehydration_prevention"));
});

Clazz.newMeth(C$, 'getMotionControl$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("motion_control", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("motion_control"));
});

Clazz.newMeth(C$, 'getVelocityHorizontal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("velocity_horizontal", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("velocity_horizontal"));
});

Clazz.newMeth(C$, 'getVelocityVertical$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("velocity_vertical", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("velocity_vertical"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryFixedTarget$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
