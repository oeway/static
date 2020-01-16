(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxDataProcessingDetector$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.PdbxDataProcessingDetector$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getWavelength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("wavelength", ((P$.PdbxDataProcessingDetector$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("wavelength"));
});

Clazz.newMeth(C$, 'getPolarization$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("polarization", ((P$.PdbxDataProcessingDetector$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("polarization"));
});

Clazz.newMeth(C$, 'getBeamPositionX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beam_position_x", ((P$.PdbxDataProcessingDetector$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("beam_position_x"));
});

Clazz.newMeth(C$, 'getBeamPositionY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beam_position_y", ((P$.PdbxDataProcessingDetector$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("beam_position_y"));
});

Clazz.newMeth(C$, 'getCassetteRotX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cassette_rot_x", ((P$.PdbxDataProcessingDetector$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("cassette_rot_x"));
});

Clazz.newMeth(C$, 'getCassetteRotY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cassette_rot_y", ((P$.PdbxDataProcessingDetector$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("cassette_rot_y"));
});

Clazz.newMeth(C$, 'getCassetteRotZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cassette_rot_z", ((P$.PdbxDataProcessingDetector$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("cassette_rot_z"));
});

Clazz.newMeth(C$, 'getScaleY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scale_y", ((P$.PdbxDataProcessingDetector$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("scale_y"));
});

Clazz.newMeth(C$, 'getSkew$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("skew", ((P$.PdbxDataProcessingDetector$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("skew"));
});

Clazz.newMeth(C$, 'getCrossfireX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_x", ((P$.PdbxDataProcessingDetector$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_x"));
});

Clazz.newMeth(C$, 'getCrossfireY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_y", ((P$.PdbxDataProcessingDetector$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_y"));
});

Clazz.newMeth(C$, 'getCrossfireXy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crossfire_xy", ((P$.PdbxDataProcessingDetector$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("crossfire_xy"));
});

Clazz.newMeth(C$, 'getDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date", ((P$.PdbxDataProcessingDetector$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("date"));
});

Clazz.newMeth(C$, 'getExperimentor$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experimentor", ((P$.PdbxDataProcessingDetector$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("experimentor"));
});

Clazz.newMeth(C$, 'getCrystalDataId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("crystal_data_id", ((P$.PdbxDataProcessingDetector$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("crystal_data_id"));
});

Clazz.newMeth(C$, 'getProcessingPath$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("processing_path", ((P$.PdbxDataProcessingDetector$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("processing_path"));
});

Clazz.newMeth(C$, 'getProcessingFiles$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("processing_files", ((P$.PdbxDataProcessingDetector$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDataProcessingDetector$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDataProcessingDetector$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("processing_files"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
