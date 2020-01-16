(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChemCompAngle", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_1", ((P$.ChemCompAngle$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_2", ((P$.ChemCompAngle$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomId3$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_3", ((P$.ChemCompAngle$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_3"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.ChemCompAngle$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getValueAngle$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_angle", ((P$.ChemCompAngle$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("value_angle"));
});

Clazz.newMeth(C$, 'getValueAngleEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_angle_esd", ((P$.ChemCompAngle$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("value_angle_esd"));
});

Clazz.newMeth(C$, 'getValueDist$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_dist", ((P$.ChemCompAngle$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("value_dist"));
});

Clazz.newMeth(C$, 'getValueDistEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_dist_esd", ((P$.ChemCompAngle$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompAngle$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompAngle$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("value_dist_esd"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
