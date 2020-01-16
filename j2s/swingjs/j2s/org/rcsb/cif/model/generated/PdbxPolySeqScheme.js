(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.PdbxPolySeqScheme$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxPolySeqScheme$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id", ((P$.PdbxPolySeqScheme$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id"));
});

Clazz.newMeth(C$, 'getHetero$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("hetero", ((P$.PdbxPolySeqScheme$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("hetero"));
});

Clazz.newMeth(C$, 'getMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("mon_id", ((P$.PdbxPolySeqScheme$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("mon_id"));
});

Clazz.newMeth(C$, 'getPdbStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_strand_id", ((P$.PdbxPolySeqScheme$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_strand_id"));
});

Clazz.newMeth(C$, 'getNdbSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ndb_seq_num", ((P$.PdbxPolySeqScheme$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ndb_seq_num"));
});

Clazz.newMeth(C$, 'getPdbSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_seq_num", ((P$.PdbxPolySeqScheme$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_seq_num"));
});

Clazz.newMeth(C$, 'getAuthSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_seq_num", ((P$.PdbxPolySeqScheme$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("auth_seq_num"));
});

Clazz.newMeth(C$, 'getPdbMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_mon_id", ((P$.PdbxPolySeqScheme$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_mon_id"));
});

Clazz.newMeth(C$, 'getAuthMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("auth_mon_id", ((P$.PdbxPolySeqScheme$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("auth_mon_id"));
});

Clazz.newMeth(C$, 'getPdbInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_ins_code", ((P$.PdbxPolySeqScheme$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxPolySeqScheme$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxPolySeqScheme$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_ins_code"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:46 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
