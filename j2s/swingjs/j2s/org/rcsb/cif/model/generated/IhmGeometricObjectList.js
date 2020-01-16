(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmGeometricObjectList", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_id", ((P$.IhmGeometricObjectList$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectList$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("object_id"));
});

Clazz.newMeth(C$, 'getObjectType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_type", ((P$.IhmGeometricObjectList$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectList$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("object_type"));
});

Clazz.newMeth(C$, 'getObjectName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_name", ((P$.IhmGeometricObjectList$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectList$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectList$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("object_name"));
});

Clazz.newMeth(C$, 'getObjectDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_description", ((P$.IhmGeometricObjectList$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectList$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectList$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("object_description"));
});

Clazz.newMeth(C$, 'getOtherDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("other_details", ((P$.IhmGeometricObjectList$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmGeometricObjectList$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmGeometricObjectList$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("other_details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:40 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
