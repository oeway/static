(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxDomainRange", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getBegLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_alt_id", ((P$.PdbxDomainRange$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_alt_id"));
});

Clazz.newMeth(C$, 'getBegLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_asym_id", ((P$.PdbxDomainRange$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_asym_id"));
});

Clazz.newMeth(C$, 'getBegLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_comp_id", ((P$.PdbxDomainRange$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_comp_id"));
});

Clazz.newMeth(C$, 'getBegLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_seq_id", ((P$.PdbxDomainRange$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_seq_id"));
});

Clazz.newMeth(C$, 'getBegAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_asym_id", ((P$.PdbxDomainRange$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_asym_id"));
});

Clazz.newMeth(C$, 'getBegAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_comp_id", ((P$.PdbxDomainRange$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_comp_id"));
});

Clazz.newMeth(C$, 'getBegAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_seq_id", ((P$.PdbxDomainRange$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_seq_id"));
});

Clazz.newMeth(C$, 'getDomainId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("domain_id", ((P$.PdbxDomainRange$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("domain_id"));
});

Clazz.newMeth(C$, 'getEndLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_alt_id", ((P$.PdbxDomainRange$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_alt_id"));
});

Clazz.newMeth(C$, 'getEndLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_asym_id", ((P$.PdbxDomainRange$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_asym_id"));
});

Clazz.newMeth(C$, 'getEndLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_comp_id", ((P$.PdbxDomainRange$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_comp_id"));
});

Clazz.newMeth(C$, 'getEndLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_seq_id", ((P$.PdbxDomainRange$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_seq_id"));
});

Clazz.newMeth(C$, 'getEndAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_asym_id", ((P$.PdbxDomainRange$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_asym_id"));
});

Clazz.newMeth(C$, 'getEndAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_comp_id", ((P$.PdbxDomainRange$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_comp_id"));
});

Clazz.newMeth(C$, 'getEndAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_seq_id", ((P$.PdbxDomainRange$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxDomainRange$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxDomainRange$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_seq_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:44 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
