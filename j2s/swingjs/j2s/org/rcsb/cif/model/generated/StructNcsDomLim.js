(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StructNcsDomLim", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_alt_id", ((P$.StructNcsDomLim$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_alt_id"));
});

Clazz.newMeth(C$, 'getBegLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_asym_id", ((P$.StructNcsDomLim$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_asym_id"));
});

Clazz.newMeth(C$, 'getBegLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_comp_id", ((P$.StructNcsDomLim$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_comp_id"));
});

Clazz.newMeth(C$, 'getBegLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_label_seq_id", ((P$.StructNcsDomLim$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("beg_label_seq_id"));
});

Clazz.newMeth(C$, 'getBegAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_asym_id", ((P$.StructNcsDomLim$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_asym_id"));
});

Clazz.newMeth(C$, 'getBegAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_comp_id", ((P$.StructNcsDomLim$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_comp_id"));
});

Clazz.newMeth(C$, 'getBegAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("beg_auth_seq_id", ((P$.StructNcsDomLim$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("beg_auth_seq_id"));
});

Clazz.newMeth(C$, 'getDomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("dom_id", ((P$.StructNcsDomLim$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("dom_id"));
});

Clazz.newMeth(C$, 'getEndLabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_alt_id", ((P$.StructNcsDomLim$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_alt_id"));
});

Clazz.newMeth(C$, 'getEndLabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_asym_id", ((P$.StructNcsDomLim$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_asym_id"));
});

Clazz.newMeth(C$, 'getEndLabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_comp_id", ((P$.StructNcsDomLim$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_comp_id"));
});

Clazz.newMeth(C$, 'getEndLabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_label_seq_id", ((P$.StructNcsDomLim$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("end_label_seq_id"));
});

Clazz.newMeth(C$, 'getEndAuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_asym_id", ((P$.StructNcsDomLim$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_asym_id"));
});

Clazz.newMeth(C$, 'getEndAuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_comp_id", ((P$.StructNcsDomLim$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_comp_id"));
});

Clazz.newMeth(C$, 'getEndAuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("end_auth_seq_id", ((P$.StructNcsDomLim$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("end_auth_seq_id"));
});

Clazz.newMeth(C$, 'getSelectionDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("selection_details", ((P$.StructNcsDomLim$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("selection_details"));
});

Clazz.newMeth(C$, 'getPdbxComponentId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_component_id", ((P$.StructNcsDomLim$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_component_id"));
});

Clazz.newMeth(C$, 'getPdbxRefineCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_refine_code", ((P$.StructNcsDomLim$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_refine_code"));
});

Clazz.newMeth(C$, 'getPdbxEnsId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_ens_id", ((P$.StructNcsDomLim$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "StructNcsDomLim$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.StructNcsDomLim$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_ens_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:52 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
