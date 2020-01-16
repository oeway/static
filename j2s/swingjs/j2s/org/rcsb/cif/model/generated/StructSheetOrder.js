(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructSheetOrder", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOffset$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("offset", ((P$.StructSheetOrder$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSheetOrder$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSheetOrder$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("offset"));
});

Clazz.newMeth(C$, 'getRangeId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_id_1", ((P$.StructSheetOrder$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSheetOrder$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSheetOrder$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("range_id_1"));
});

Clazz.newMeth(C$, 'getRangeId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_id_2", ((P$.StructSheetOrder$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSheetOrder$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSheetOrder$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("range_id_2"));
});

Clazz.newMeth(C$, 'getSense$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sense", ((P$.StructSheetOrder$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSheetOrder$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSheetOrder$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("sense"));
});

Clazz.newMeth(C$, 'getSheetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sheet_id", ((P$.StructSheetOrder$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructSheetOrder$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructSheetOrder$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("sheet_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
