(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnSource", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("current", ((P$.DiffrnSource$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("current"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.DiffrnSource$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnSource$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getPower$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("power", ((P$.DiffrnSource$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("power"));
});

Clazz.newMeth(C$, 'getSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("size", ((P$.DiffrnSource$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("size"));
});

Clazz.newMeth(C$, 'getSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source", ((P$.DiffrnSource$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("source"));
});

Clazz.newMeth(C$, 'getTarget$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("target", ((P$.DiffrnSource$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("target"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.DiffrnSource$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getVoltage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("voltage", ((P$.DiffrnSource$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("voltage"));
});

Clazz.newMeth(C$, 'getTake_offAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("take-off_angle", ((P$.DiffrnSource$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("take-off_angle"));
});

Clazz.newMeth(C$, 'getPdbxWavelengthList$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_wavelength_list", ((P$.DiffrnSource$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_wavelength_list"));
});

Clazz.newMeth(C$, 'getPdbxWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_wavelength", ((P$.DiffrnSource$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_wavelength"));
});

Clazz.newMeth(C$, 'getPdbxSynchrotronBeamline$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_synchrotron_beamline", ((P$.DiffrnSource$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_synchrotron_beamline"));
});

Clazz.newMeth(C$, 'getPdbxSynchrotronSite$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_synchrotron_site", ((P$.DiffrnSource$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_synchrotron_site"));
});

Clazz.newMeth(C$, 'getPdbxSynchrotronYN$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_synchrotron_y_n", ((P$.DiffrnSource$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_synchrotron_y_n"));
});

Clazz.newMeth(C$, 'getPdbxSourceSpecificBeamline$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_source_specific_beamline", ((P$.DiffrnSource$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnSource$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnSource$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_source_specific_beamline"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
