(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySequence", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prd_id", ((P$.PdbxReferenceEntitySequence$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySequence$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySequence$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("prd_id"));
});

Clazz.newMeth(C$, 'getRefEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_entity_id", ((P$.PdbxReferenceEntitySequence$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySequence$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySequence$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ref_entity_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxReferenceEntitySequence$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySequence$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySequence$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getNRPFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NRP_flag", ((P$.PdbxReferenceEntitySequence$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySequence$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySequence$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("NRP_flag"));
});

Clazz.newMeth(C$, 'getOneLetterCodes$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("one_letter_codes", ((P$.PdbxReferenceEntitySequence$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntitySequence$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntitySequence$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("one_letter_codes"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
