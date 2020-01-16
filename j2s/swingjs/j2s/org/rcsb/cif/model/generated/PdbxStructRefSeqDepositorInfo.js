(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getRefId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_id", ((P$.PdbxStructRefSeqDepositorInfo$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ref_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxStructRefSeqDepositorInfo$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getDbAlignBeg$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_align_beg", ((P$.PdbxStructRefSeqDepositorInfo$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("db_align_beg"));
});

Clazz.newMeth(C$, 'getDbAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_align_end", ((P$.PdbxStructRefSeqDepositorInfo$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("db_align_end"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxStructRefSeqDepositorInfo$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getDbAccession$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_accession", ((P$.PdbxStructRefSeqDepositorInfo$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("db_accession"));
});

Clazz.newMeth(C$, 'getDbCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_code", ((P$.PdbxStructRefSeqDepositorInfo$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("db_code"));
});

Clazz.newMeth(C$, 'getDbName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_name", ((P$.PdbxStructRefSeqDepositorInfo$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("db_name"));
});

Clazz.newMeth(C$, 'getDbSeqOneLetterCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("db_seq_one_letter_code", ((P$.PdbxStructRefSeqDepositorInfo$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("db_seq_one_letter_code"));
});

Clazz.newMeth(C$, 'getSeqAlignBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_align_begin", ((P$.PdbxStructRefSeqDepositorInfo$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("seq_align_begin"));
});

Clazz.newMeth(C$, 'getSeqAlignEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_align_end", ((P$.PdbxStructRefSeqDepositorInfo$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqDepositorInfo$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqDepositorInfo$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("seq_align_end"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
