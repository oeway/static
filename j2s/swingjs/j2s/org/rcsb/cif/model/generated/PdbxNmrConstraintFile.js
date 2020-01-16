(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getConstraintFilename$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("constraint_filename", ((P$.PdbxNmrConstraintFile$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("constraint_filename"));
});

Clazz.newMeth(C$, 'getConstraintNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("constraint_number", ((P$.PdbxNmrConstraintFile$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("constraint_number"));
});

Clazz.newMeth(C$, 'getConstraintSubtype$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("constraint_subtype", ((P$.PdbxNmrConstraintFile$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("constraint_subtype"));
});

Clazz.newMeth(C$, 'getConstraintType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("constraint_type", ((P$.PdbxNmrConstraintFile$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("constraint_type"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxNmrConstraintFile$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxNmrConstraintFile$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getSoftwareName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_name", ((P$.PdbxNmrConstraintFile$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("software_name"));
});

Clazz.newMeth(C$, 'getSoftwareOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("software_ordinal", ((P$.PdbxNmrConstraintFile$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxNmrConstraintFile$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxNmrConstraintFile$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("software_ordinal"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
