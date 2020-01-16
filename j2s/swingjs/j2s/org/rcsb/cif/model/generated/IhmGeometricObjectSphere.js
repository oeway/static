(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmGeometricObjectSphere", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getObjectId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_id", ((P$.IhmGeometricObjectSphere$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectSphere$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectSphere$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("object_id"));
});

Clazz.newMeth(C$, 'getCenterId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("center_id", ((P$.IhmGeometricObjectSphere$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectSphere$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectSphere$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("center_id"));
});

Clazz.newMeth(C$, 'getTransformationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("transformation_id", ((P$.IhmGeometricObjectSphere$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectSphere$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectSphere$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("transformation_id"));
});

Clazz.newMeth(C$, 'getRadiusR$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("radius_r", ((P$.IhmGeometricObjectSphere$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectSphere$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectSphere$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("radius_r"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
