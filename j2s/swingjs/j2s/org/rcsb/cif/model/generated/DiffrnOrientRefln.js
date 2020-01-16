(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAngleChi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_chi", ((P$.DiffrnOrientRefln$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("angle_chi"));
});

Clazz.newMeth(C$, 'getAngleKappa$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_kappa", ((P$.DiffrnOrientRefln$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("angle_kappa"));
});

Clazz.newMeth(C$, 'getAngleOmega$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_omega", ((P$.DiffrnOrientRefln$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("angle_omega"));
});

Clazz.newMeth(C$, 'getAnglePhi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_phi", ((P$.DiffrnOrientRefln$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("angle_phi"));
});

Clazz.newMeth(C$, 'getAnglePsi$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_psi", ((P$.DiffrnOrientRefln$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("angle_psi"));
});

Clazz.newMeth(C$, 'getAngleTheta$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_theta", ((P$.DiffrnOrientRefln$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("angle_theta"));
});

Clazz.newMeth(C$, 'getDiffrnId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("diffrn_id", ((P$.DiffrnOrientRefln$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("diffrn_id"));
});

Clazz.newMeth(C$, 'getIndexH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_h", ((P$.DiffrnOrientRefln$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("index_h"));
});

Clazz.newMeth(C$, 'getIndexK$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_k", ((P$.DiffrnOrientRefln$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("index_k"));
});

Clazz.newMeth(C$, 'getIndexL$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("index_l", ((P$.DiffrnOrientRefln$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "DiffrnOrientRefln$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.DiffrnOrientRefln$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("index_l"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
