(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxRefineLsRestrNcs", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dom_id", ((P$.PdbxRefineLsRestrNcs$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineLsRestrNcs$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineLsRestrNcs$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("dom_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxRefineLsRestrNcs$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineLsRestrNcs$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineLsRestrNcs$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number", ((P$.PdbxRefineLsRestrNcs$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineLsRestrNcs$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineLsRestrNcs$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("number"));
});

Clazz.newMeth(C$, 'getRmsDev$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rms_dev", ((P$.PdbxRefineLsRestrNcs$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineLsRestrNcs$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineLsRestrNcs$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("rms_dev"));
});

Clazz.newMeth(C$, 'getWeight$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("weight", ((P$.PdbxRefineLsRestrNcs$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxRefineLsRestrNcs$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxRefineLsRestrNcs$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("weight"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
