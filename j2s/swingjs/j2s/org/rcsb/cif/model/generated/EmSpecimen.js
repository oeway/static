(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmSpecimen", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getConcentration$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("concentration", ((P$.EmSpecimen$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("concentration"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.EmSpecimen$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEmbeddingApplied$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("embedding_applied", ((P$.EmSpecimen$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("embedding_applied"));
});

Clazz.newMeth(C$, 'getExperimentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("experiment_id", ((P$.EmSpecimen$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("experiment_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.EmSpecimen$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getShadowingApplied$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("shadowing_applied", ((P$.EmSpecimen$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("shadowing_applied"));
});

Clazz.newMeth(C$, 'getStainingApplied$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("staining_applied", ((P$.EmSpecimen$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("staining_applied"));
});

Clazz.newMeth(C$, 'getVitrificationApplied$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("vitrification_applied", ((P$.EmSpecimen$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmSpecimen$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmSpecimen$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("vitrification_applied"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:38 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
