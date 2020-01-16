(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmCrystalFormation", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAtmosphere$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atmosphere", ((P$.EmCrystalFormation$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atmosphere"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmCrystalFormation$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmCrystalFormation$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getInstrument$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("instrument", ((P$.EmCrystalFormation$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("instrument"));
});

Clazz.newMeth(C$, 'getLipidMixture$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("lipid_mixture", ((P$.EmCrystalFormation$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("lipid_mixture"));
});

Clazz.newMeth(C$, 'getLipidProteinRatio$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("lipid_protein_ratio", ((P$.EmCrystalFormation$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("lipid_protein_ratio"));
});

Clazz.newMeth(C$, 'getSpecimenId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("specimen_id", ((P$.EmCrystalFormation$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("specimen_id"));
});

Clazz.newMeth(C$, 'getTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature", ((P$.EmCrystalFormation$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("temperature"));
});

Clazz.newMeth(C$, 'getTime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("time", ((P$.EmCrystalFormation$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("time"));
});

Clazz.newMeth(C$, 'getTimeUnit$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("time_unit", ((P$.EmCrystalFormation$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmCrystalFormation$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmCrystalFormation$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("time_unit"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
