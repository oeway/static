(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmImageScans", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmImageScans$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmImageScans$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getNumberDigitalImages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_digital_images", ((P$.EmImageScans$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("number_digital_images"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmImageScans$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getScannerModel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("scanner_model", ((P$.EmImageScans$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("scanner_model"));
});

Clazz.newMeth(C$, 'getSamplingSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sampling_size", ((P$.EmImageScans$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("sampling_size"));
});

Clazz.newMeth(C$, 'getOdRange$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("od_range", ((P$.EmImageScans$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("od_range"));
});

Clazz.newMeth(C$, 'getQuantBitSize$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("quant_bit_size", ((P$.EmImageScans$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("quant_bit_size"));
});

Clazz.newMeth(C$, 'getCitationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("citation_id", ((P$.EmImageScans$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("citation_id"));
});

Clazz.newMeth(C$, 'getDimensionHeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dimension_height", ((P$.EmImageScans$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("dimension_height"));
});

Clazz.newMeth(C$, 'getDimensionWidth$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dimension_width", ((P$.EmImageScans$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("dimension_width"));
});

Clazz.newMeth(C$, 'getFramesPerImage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("frames_per_image", ((P$.EmImageScans$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("frames_per_image"));
});

Clazz.newMeth(C$, 'getImageRecordingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_recording_id", ((P$.EmImageScans$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("image_recording_id"));
});

Clazz.newMeth(C$, 'getUsedFramesPerImage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("used_frames_per_image", ((P$.EmImageScans$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmImageScans$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmImageScans$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("used_frames_per_image"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
