(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmEulerAngleAssignment$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmEulerAngleAssignment$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_processing_id", ((P$.EmEulerAngleAssignment$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("image_processing_id"));
});

Clazz.newMeth(C$, 'getOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("order", ((P$.EmEulerAngleAssignment$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("order"));
});

Clazz.newMeth(C$, 'getProjMatchingAngularSampling$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("proj_matching_angular_sampling", ((P$.EmEulerAngleAssignment$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("proj_matching_angular_sampling"));
});

Clazz.newMeth(C$, 'getProjMatchingMeritFunction$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("proj_matching_merit_function", ((P$.EmEulerAngleAssignment$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("proj_matching_merit_function"));
});

Clazz.newMeth(C$, 'getProjMatchingNumProjections$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("proj_matching_num_projections", ((P$.EmEulerAngleAssignment$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("proj_matching_num_projections"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.EmEulerAngleAssignment$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmEulerAngleAssignment$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmEulerAngleAssignment$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
