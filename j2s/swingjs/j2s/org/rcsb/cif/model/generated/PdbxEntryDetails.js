(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntryDetails", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.PdbxEntryDetails$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntryDetails$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntryDetails$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getNonpolymerDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nonpolymer_details", ((P$.PdbxEntryDetails$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntryDetails$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntryDetails$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("nonpolymer_details"));
});

Clazz.newMeth(C$, 'getSequenceDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sequence_details", ((P$.PdbxEntryDetails$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntryDetails$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntryDetails$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("sequence_details"));
});

Clazz.newMeth(C$, 'getCompoundDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("compound_details", ((P$.PdbxEntryDetails$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntryDetails$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntryDetails$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("compound_details"));
});

Clazz.newMeth(C$, 'getSourceDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("source_details", ((P$.PdbxEntryDetails$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntryDetails$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntryDetails$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("source_details"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
