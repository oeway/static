(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("description", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("description"));
});

Clazz.newMeth(C$, 'getInjectorDiameter$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("injector_diameter", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("injector_diameter"));
});

Clazz.newMeth(C$, 'getInjectorTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("injector_temperature", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("injector_temperature"));
});

Clazz.newMeth(C$, 'getInjectorPressure$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("injector_pressure", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("injector_pressure"));
});

Clazz.newMeth(C$, 'getFlowRate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("flow_rate", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("flow_rate"));
});

Clazz.newMeth(C$, 'getCarrierSolvent$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("carrier_solvent", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("carrier_solvent"));
});

Clazz.newMeth(C$, 'getCrystalConcentration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_concentration", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_concentration"));
});

Clazz.newMeth(C$, 'getPreparation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("preparation", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("preparation"));
});

Clazz.newMeth(C$, 'getPowerBy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power_by", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("power_by"));
});

Clazz.newMeth(C$, 'getInjectorNozzle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("injector_nozzle", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("injector_nozzle"));
});

Clazz.newMeth(C$, 'getJetDiameter$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("jet_diameter", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("jet_diameter"));
});

Clazz.newMeth(C$, 'getFilterSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("filter_size", ((P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxSerialCrystallographySampleDeliveryInjection$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxSerialCrystallographySampleDeliveryInjection$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("filter_size"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:48 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
