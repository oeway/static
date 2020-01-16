(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmMap", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAnnotationDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("annotation_details", ((P$.EmMap$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("annotation_details"));
});

Clazz.newMeth(C$, 'getAxisOrderFast$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis_order_fast", ((P$.EmMap$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("axis_order_fast"));
});

Clazz.newMeth(C$, 'getAxisOrderMedium$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis_order_medium", ((P$.EmMap$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("axis_order_medium"));
});

Clazz.newMeth(C$, 'getAxisOrderSlow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis_order_slow", ((P$.EmMap$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("axis_order_slow"));
});

Clazz.newMeth(C$, 'getCellA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_a", ((P$.EmMap$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("cell_a"));
});

Clazz.newMeth(C$, 'getCellB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_b", ((P$.EmMap$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("cell_b"));
});

Clazz.newMeth(C$, 'getCellC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_c", ((P$.EmMap$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("cell_c"));
});

Clazz.newMeth(C$, 'getCellAlpha$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_alpha", ((P$.EmMap$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("cell_alpha"));
});

Clazz.newMeth(C$, 'getCellBeta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_beta", ((P$.EmMap$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("cell_beta"));
});

Clazz.newMeth(C$, 'getCellGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_gamma", ((P$.EmMap$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("cell_gamma"));
});

Clazz.newMeth(C$, 'getContourLevel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contour_level", ((P$.EmMap$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("contour_level"));
});

Clazz.newMeth(C$, 'getContourLevelSource$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("contour_level_source", ((P$.EmMap$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("contour_level_source"));
});

Clazz.newMeth(C$, 'getDataType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("data_type", ((P$.EmMap$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("data_type"));
});

Clazz.newMeth(C$, 'getDimensionsCol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dimensions_col", ((P$.EmMap$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("dimensions_col"));
});

Clazz.newMeth(C$, 'getDimensionsRow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dimensions_row", ((P$.EmMap$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("dimensions_row"));
});

Clazz.newMeth(C$, 'getDimensionsSec$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dimensions_sec", ((P$.EmMap$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("dimensions_sec"));
});

Clazz.newMeth(C$, 'getEndianType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("endian_type", ((P$.EmMap$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("endian_type"));
});

Clazz.newMeth(C$, 'getFile$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("file", ((P$.EmMap$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("file"));
});

Clazz.newMeth(C$, 'getFormat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("format", ((P$.EmMap$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("format"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmMap$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getPartition$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("partition", ((P$.EmMap$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("partition"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmMap$lambda22||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda22.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getLabel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("label", ((P$.EmMap$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda23.$init$, [this, null]))) : this.getBinaryColumn$S("label"));
});

Clazz.newMeth(C$, 'getLimitCol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_col", ((P$.EmMap$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda24.$init$, [this, null]))) : this.getBinaryColumn$S("limit_col"));
});

Clazz.newMeth(C$, 'getLimitRow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_row", ((P$.EmMap$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda25.$init$, [this, null]))) : this.getBinaryColumn$S("limit_row"));
});

Clazz.newMeth(C$, 'getLimitSec$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("limit_sec", ((P$.EmMap$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda26.$init$, [this, null]))) : this.getBinaryColumn$S("limit_sec"));
});

Clazz.newMeth(C$, 'getOriginCol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("origin_col", ((P$.EmMap$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda27.$init$, [this, null]))) : this.getBinaryColumn$S("origin_col"));
});

Clazz.newMeth(C$, 'getOriginRow$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("origin_row", ((P$.EmMap$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda28.$init$, [this, null]))) : this.getBinaryColumn$S("origin_row"));
});

Clazz.newMeth(C$, 'getOriginSec$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("origin_sec", ((P$.EmMap$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda29.$init$, [this, null]))) : this.getBinaryColumn$S("origin_sec"));
});

Clazz.newMeth(C$, 'getPixelSpacingX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_spacing_x", ((P$.EmMap$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda30.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_spacing_x"));
});

Clazz.newMeth(C$, 'getPixelSpacingY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_spacing_y", ((P$.EmMap$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda31.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_spacing_y"));
});

Clazz.newMeth(C$, 'getPixelSpacingZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_spacing_z", ((P$.EmMap$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda32.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_spacing_z"));
});

Clazz.newMeth(C$, 'getSizeKb$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("size_kb", ((P$.EmMap$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda33.$init$, [this, null]))) : this.getBinaryColumn$S("size_kb"));
});

Clazz.newMeth(C$, 'getSpacingX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("spacing_x", ((P$.EmMap$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda34.$init$, [this, null]))) : this.getBinaryColumn$S("spacing_x"));
});

Clazz.newMeth(C$, 'getSpacingY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("spacing_y", ((P$.EmMap$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda35.$init$, [this, null]))) : this.getBinaryColumn$S("spacing_y"));
});

Clazz.newMeth(C$, 'getSpacingZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("spacing_z", ((P$.EmMap$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda36.$init$, [this, null]))) : this.getBinaryColumn$S("spacing_z"));
});

Clazz.newMeth(C$, 'getStatisticsAverage$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("statistics_average", ((P$.EmMap$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda37.$init$, [this, null]))) : this.getBinaryColumn$S("statistics_average"));
});

Clazz.newMeth(C$, 'getStatisticsMaximum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("statistics_maximum", ((P$.EmMap$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda38.$init$, [this, null]))) : this.getBinaryColumn$S("statistics_maximum"));
});

Clazz.newMeth(C$, 'getStatisticsMinimum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("statistics_minimum", ((P$.EmMap$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda39.$init$, [this, null]))) : this.getBinaryColumn$S("statistics_minimum"));
});

Clazz.newMeth(C$, 'getStatisticsStd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("statistics_std", ((P$.EmMap$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda40.$init$, [this, null]))) : this.getBinaryColumn$S("statistics_std"));
});

Clazz.newMeth(C$, 'getSymmetrySpaceGroup$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("symmetry_space_group", ((P$.EmMap$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda41.$init$, [this, null]))) : this.getBinaryColumn$S("symmetry_space_group"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.EmMap$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmMap$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmMap$lambda42.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
