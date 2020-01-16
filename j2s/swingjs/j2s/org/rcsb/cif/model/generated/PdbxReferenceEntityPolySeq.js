(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getPrdId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prd_id", ((P$.PdbxReferenceEntityPolySeq$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("prd_id"));
});

Clazz.newMeth(C$, 'getRefEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_entity_id", ((P$.PdbxReferenceEntityPolySeq$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ref_entity_id"));
});

Clazz.newMeth(C$, 'getMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_id", ((P$.PdbxReferenceEntityPolySeq$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("mon_id"));
});

Clazz.newMeth(C$, 'getParentMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("parent_mon_id", ((P$.PdbxReferenceEntityPolySeq$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("parent_mon_id"));
});

Clazz.newMeth(C$, 'getNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("num", ((P$.PdbxReferenceEntityPolySeq$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("num"));
});

Clazz.newMeth(C$, 'getObserved$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("observed", ((P$.PdbxReferenceEntityPolySeq$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("observed"));
});

Clazz.newMeth(C$, 'getHetero$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hetero", ((P$.PdbxReferenceEntityPolySeq$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityPolySeq$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityPolySeq$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("hetero"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2