(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Chemical", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Chemical$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCompoundSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("compound_source", ((P$.Chemical$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("compound_source"));
});

Clazz.newMeth(C$, 'getMeltingPoint$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("melting_point", ((P$.Chemical$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("melting_point"));
});

Clazz.newMeth(C$, 'getNameCommon$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_common", ((P$.Chemical$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("name_common"));
});

Clazz.newMeth(C$, 'getNameMineral$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_mineral", ((P$.Chemical$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("name_mineral"));
});

Clazz.newMeth(C$, 'getNameStructureType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_structure_type", ((P$.Chemical$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("name_structure_type"));
});

Clazz.newMeth(C$, 'getNameSystematic$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name_systematic", ((P$.Chemical$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("name_systematic"));
});

Clazz.newMeth(C$, 'getAbsoluteConfiguration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("absolute_configuration", ((P$.Chemical$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("absolute_configuration"));
});

Clazz.newMeth(C$, 'getMeltingPointGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("melting_point_gt", ((P$.Chemical$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("melting_point_gt"));
});

Clazz.newMeth(C$, 'getMeltingPointLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("melting_point_lt", ((P$.Chemical$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("melting_point_lt"));
});

Clazz.newMeth(C$, 'getOpticalRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("optical_rotation", ((P$.Chemical$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("optical_rotation"));
});

Clazz.newMeth(C$, 'getPropertiesBiological$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("properties_biological", ((P$.Chemical$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("properties_biological"));
});

Clazz.newMeth(C$, 'getPropertiesPhysical$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("properties_physical", ((P$.Chemical$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("properties_physical"));
});

Clazz.newMeth(C$, 'getTemperatureDecomposition$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_decomposition", ((P$.Chemical$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_decomposition"));
});

Clazz.newMeth(C$, 'getTemperatureDecompositionEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_decomposition_esd", ((P$.Chemical$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_decomposition_esd"));
});

Clazz.newMeth(C$, 'getTemperatureDecompositionGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_decomposition_gt", ((P$.Chemical$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_decomposition_gt"));
});

Clazz.newMeth(C$, 'getTemperatureDecompositionLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_decomposition_lt", ((P$.Chemical$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_decomposition_lt"));
});

Clazz.newMeth(C$, 'getTemperatureSublimation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_sublimation", ((P$.Chemical$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_sublimation"));
});

Clazz.newMeth(C$, 'getTemperatureSublimationEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_sublimation_esd", ((P$.Chemical$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_sublimation_esd"));
});

Clazz.newMeth(C$, 'getTemperatureSublimationGt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_sublimation_gt", ((P$.Chemical$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_sublimation_gt"));
});

Clazz.newMeth(C$, 'getTemperatureSublimationLt$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("temperature_sublimation_lt", ((P$.Chemical$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Chemical$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Chemical$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("temperature_sublimation_lt"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
