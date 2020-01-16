(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmSoftware", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCategory$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("category", ((P$.EmSoftware$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("category"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmSoftware$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmSoftware$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_processing_id", ((P$.EmSoftware$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("image_processing_id"));
});

Clazz.newMeth(C$, 'getFittingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("fitting_id", ((P$.EmSoftware$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("fitting_id"));
});

Clazz.newMeth(C$, 'getImagingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("imaging_id", ((P$.EmSoftware$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("imaging_id"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.EmSoftware$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getVersion$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("version", ((P$.EmSoftware$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSoftware$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSoftware$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("version"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
