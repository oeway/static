(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getFeatureId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_id", ((P$.PdbxStructRefSeqFeature$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("feature_id"));
});

Clazz.newMeth(C$, 'getAlignId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("align_id", ((P$.PdbxStructRefSeqFeature$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("align_id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxStructRefSeqFeature$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxStructRefSeqFeature$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getPdbStrandId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdb_strand_id", ((P$.PdbxStructRefSeqFeature$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("pdb_strand_id"));
});

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.PdbxStructRefSeqFeature$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getBegAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_seq_id", ((P$.PdbxStructRefSeqFeature$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_seq_id"));
});

Clazz.newMeth(C$, 'getEndAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_seq_id", ((P$.PdbxStructRefSeqFeature$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_seq_id"));
});

Clazz.newMeth(C$, 'getBegSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_seq_num", ((P$.PdbxStructRefSeqFeature$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("beg_seq_num"));
});

Clazz.newMeth(C$, 'getEndSeqNum$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_seq_num", ((P$.PdbxStructRefSeqFeature$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("end_seq_num"));
});

Clazz.newMeth(C$, 'getBegAuthMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_mon_id", ((P$.PdbxStructRefSeqFeature$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_mon_id"));
});

Clazz.newMeth(C$, 'getEndAuthMonId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_mon_id", ((P$.PdbxStructRefSeqFeature$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_mon_id"));
});

Clazz.newMeth(C$, 'getBegPdbInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_pdb_ins_code", ((P$.PdbxStructRefSeqFeature$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("beg_pdb_ins_code"));
});

Clazz.newMeth(C$, 'getEndPdbInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_pdb_ins_code", ((P$.PdbxStructRefSeqFeature$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructRefSeqFeature$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructRefSeqFeature$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("end_pdb_ins_code"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
