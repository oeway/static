(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmStartModel", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmStartModel$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEmdbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("emdb_id", ((P$.EmStartModel$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("emdb_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmStartModel$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_processing_id", ((P$.EmStartModel$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("image_processing_id"));
});

Clazz.newMeth(C$, 'getInsilicoModel$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("insilico_model", ((P$.EmStartModel$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("insilico_model"));
});

Clazz.newMeth(C$, 'getOrthogonalTiltAngle1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("orthogonal_tilt_angle1", ((P$.EmStartModel$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("orthogonal_tilt_angle1"));
});

Clazz.newMeth(C$, 'getOrthogonalTiltAngle2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("orthogonal_tilt_angle2", ((P$.EmStartModel$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("orthogonal_tilt_angle2"));
});

Clazz.newMeth(C$, 'getOrthogonalTiltNumImages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("orthogonal_tilt_num_images", ((P$.EmStartModel$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("orthogonal_tilt_num_images"));
});

Clazz.newMeth(C$, 'getOther$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("other", ((P$.EmStartModel$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("other"));
});

Clazz.newMeth(C$, 'getPdbId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_id", ((P$.EmStartModel$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_id"));
});

Clazz.newMeth(C$, 'getRandomConicalTiltAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("random_conical_tilt_angle", ((P$.EmStartModel$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("random_conical_tilt_angle"));
});

Clazz.newMeth(C$, 'getRandomConicalTiltNumImages$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("random_conical_tilt_num_images", ((P$.EmStartModel$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("random_conical_tilt_num_images"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.EmStartModel$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmStartModel$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmStartModel$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
