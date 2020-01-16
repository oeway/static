(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnDetector", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.DiffrnDetector$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDetector$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("detector", ((P$.DiffrnDetector$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("detector"));
});

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnDetector$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.DiffrnDetector$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getAreaResolMean$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("area_resol_mean", ((P$.DiffrnDetector$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("area_resol_mean"));
});

Clazz.newMeth(C$, 'getDtime$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dtime", ((P$.DiffrnDetector$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("dtime"));
});

Clazz.newMeth(C$, 'getPdbxFramesTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_frames_total", ((P$.DiffrnDetector$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_frames_total"));
});

Clazz.newMeth(C$, 'getPdbxCollectionTimeTotal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_collection_time_total", ((P$.DiffrnDetector$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_collection_time_total"));
});

Clazz.newMeth(C$, 'getPdbxCollectionDate$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_collection_date", ((P$.DiffrnDetector$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_collection_date"));
});

Clazz.newMeth(C$, 'getPdbxFrequency$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_frequency", ((P$.DiffrnDetector$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnDetector$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnDetector$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_frequency"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
