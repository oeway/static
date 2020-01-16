(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmTomography", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAxis1AngleIncrement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis1_angle_increment", ((P$.EmTomography$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("axis1_angle_increment"));
});

Clazz.newMeth(C$, 'getAxis1MaxAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis1_max_angle", ((P$.EmTomography$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("axis1_max_angle"));
});

Clazz.newMeth(C$, 'getAxis1MinAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis1_min_angle", ((P$.EmTomography$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("axis1_min_angle"));
});

Clazz.newMeth(C$, 'getAxis2AngleIncrement$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis2_angle_increment", ((P$.EmTomography$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("axis2_angle_increment"));
});

Clazz.newMeth(C$, 'getAxis2MaxAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis2_max_angle", ((P$.EmTomography$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("axis2_max_angle"));
});

Clazz.newMeth(C$, 'getAxis2MinAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("axis2_min_angle", ((P$.EmTomography$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("axis2_min_angle"));
});

Clazz.newMeth(C$, 'getDualTiltAxisRotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dual_tilt_axis_rotation", ((P$.EmTomography$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("dual_tilt_axis_rotation"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmTomography$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImagingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("imaging_id", ((P$.EmTomography$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmTomography$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmTomography$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("imaging_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
