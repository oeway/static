(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.Ihm2demClassAverageRestraint$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getDatasetListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dataset_list_id", ((P$.Ihm2demClassAverageRestraint$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("dataset_list_id"));
});

Clazz.newMeth(C$, 'getNumberRawMicrographs$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_raw_micrographs", ((P$.Ihm2demClassAverageRestraint$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("number_raw_micrographs"));
});

Clazz.newMeth(C$, 'getPixelSizeWidth$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_size_width", ((P$.Ihm2demClassAverageRestraint$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_size_width"));
});

Clazz.newMeth(C$, 'getPixelSizeHeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pixel_size_height", ((P$.Ihm2demClassAverageRestraint$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pixel_size_height"));
});

Clazz.newMeth(C$, 'getImageResolution$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_resolution", ((P$.Ihm2demClassAverageRestraint$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("image_resolution"));
});

Clazz.newMeth(C$, 'getImageSegmentFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_segment_flag", ((P$.Ihm2demClassAverageRestraint$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("image_segment_flag"));
});

Clazz.newMeth(C$, 'getNumberOfProjections$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_of_projections", ((P$.Ihm2demClassAverageRestraint$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("number_of_projections"));
});

Clazz.newMeth(C$, 'getStructAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("struct_assembly_id", ((P$.Ihm2demClassAverageRestraint$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("struct_assembly_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.Ihm2demClassAverageRestraint$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Ihm2demClassAverageRestraint$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.Ihm2demClassAverageRestraint$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:39 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
