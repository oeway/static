(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxPostProcessStatus$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPostProcessStatus$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCycleId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cycle_id", ((P$.PdbxPostProcessStatus$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPostProcessStatus$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("cycle_id"));
});

Clazz.newMeth(C$, 'getDateBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_begin", ((P$.PdbxPostProcessStatus$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPostProcessStatus$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("date_begin"));
});

Clazz.newMeth(C$, 'getDateEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("date_end", ((P$.PdbxPostProcessStatus$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPostProcessStatus$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("date_end"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxPostProcessStatus$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPostProcessStatus$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getAnnotator$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("annotator", ((P$.PdbxPostProcessStatus$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPostProcessStatus$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPostProcessStatus$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("annotator"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2