(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmMapDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getExperimentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experiment_id", ((P$.EmMapDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("experiment_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmMapDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getMapType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("map_type", ((P$.EmMapDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("map_type"));
});

Clazz.newMeth(C$, 'getUploadFileName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("upload_file_name", ((P$.EmMapDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("upload_file_name"));
});

Clazz.newMeth(C$, 'getUploadFormat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("upload_format", ((P$.EmMapDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("upload_format"));
});

Clazz.newMeth(C$, 'getContourLevel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contour_level", ((P$.EmMapDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("contour_level"));
});

Clazz.newMeth(C$, 'getAnnotationDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("annotation_details", ((P$.EmMapDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("annotation_details"));
});

Clazz.newMeth(C$, 'getPixelSpacingX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_spacing_x", ((P$.EmMapDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_spacing_x"));
});

Clazz.newMeth(C$, 'getPixelSpacingY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_spacing_y", ((P$.EmMapDepositorInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_spacing_y"));
});

Clazz.newMeth(C$, 'getPixelSpacingZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_spacing_z", ((P$.EmMapDepositorInfo$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMapDepositorInfo$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMapDepositorInfo$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_spacing_z"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
