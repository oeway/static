(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal"));
});

Clazz.newMeth(C$, 'getRefId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_id", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("ref_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getDbMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_mon_id", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("db_mon_id"));
});

Clazz.newMeth(C$, 'getDbSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_seq_id", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("db_seq_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getAuthMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_mon_id", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("auth_mon_id"));
});

Clazz.newMeth(C$, 'getAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_id", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_id"));
});

Clazz.newMeth(C$, 'getDbAccession$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_accession", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("db_accession"));
});

Clazz.newMeth(C$, 'getDbCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_code", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("db_code"));
});

Clazz.newMeth(C$, 'getDbName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_name", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("db_name"));
});

Clazz.newMeth(C$, 'getAnnotation$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("annotation", ((P$.PdbxStructRefSeqDifDepositorInfo$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDifDepositorInfo$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDifDepositorInfo$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("annotation"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
