(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinal$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxDepositionMessageFileReference$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getDepositionDataSetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("deposition_data_set_id", ((P$.PdbxDepositionMessageFileReference$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("deposition_data_set_id"));
});

Clazz.newMeth(C$, 'getMessageId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("message_id", ((P$.PdbxDepositionMessageFileReference$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("message_id"));
});

Clazz.newMeth(C$, 'getContentType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("content_type", ((P$.PdbxDepositionMessageFileReference$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("content_type"));
});

Clazz.newMeth(C$, 'getContentFormat$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("content_format", ((P$.PdbxDepositionMessageFileReference$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("content_format"));
});

Clazz.newMeth(C$, 'getPartitionNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("partition_number", ((P$.PdbxDepositionMessageFileReference$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("partition_number"));
});

Clazz.newMeth(C$, 'getVersionId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("version_id", ((P$.PdbxDepositionMessageFileReference$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("version_id"));
});

Clazz.newMeth(C$, 'getStorageType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("storage_type", ((P$.PdbxDepositionMessageFileReference$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDepositionMessageFileReference$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDepositionMessageFileReference$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("storage_type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:43 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
