(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmVitrification", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmVitrification$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmVitrification$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getSamplePreparationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sample_preparation_id", ((P$.EmVitrification$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("sample_preparation_id"));
});

Clazz.newMeth(C$, 'getSpecimenId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("specimen_id", ((P$.EmVitrification$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("specimen_id"));
});

Clazz.newMeth(C$, 'getCryogenName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cryogen_name", ((P$.EmVitrification$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("cryogen_name"));
});

Clazz.newMeth(C$, 'getHumidity$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("humidity", ((P$.EmVitrification$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("humidity"));
});

Clazz.newMeth(C$, 'getTemp$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temp", ((P$.EmVitrification$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("temp"));
});

Clazz.newMeth(C$, 'getChamberTemperature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("chamber_temperature", ((P$.EmVitrification$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("chamber_temperature"));
});

Clazz.newMeth(C$, 'getInstrument$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("instrument", ((P$.EmVitrification$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("instrument"));
});

Clazz.newMeth(C$, 'getMethod$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("method", ((P$.EmVitrification$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("method"));
});

Clazz.newMeth(C$, 'getTimeResolvedState$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("time_resolved_state", ((P$.EmVitrification$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("time_resolved_state"));
});

Clazz.newMeth(C$, 'getCitationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("citation_id", ((P$.EmVitrification$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("citation_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmVitrification$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmVitrification$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmVitrification$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
