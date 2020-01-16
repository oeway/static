(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructLink", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxStructLink$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type", ((P$.PdbxStructLink$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("type"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_alt_id", ((P$.PdbxStructLink$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_asym_id", ((P$.PdbxStructLink$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_atom_id", ((P$.PdbxStructLink$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_comp_id", ((P$.PdbxStructLink$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_seq_id", ((P$.PdbxStructLink$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr1LabelInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_label_ins_code", ((P$.PdbxStructLink$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_label_ins_code"));
});

Clazz.newMeth(C$, 'getPtnr1Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr1_symmetry", ((P$.PdbxStructLink$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr1_symmetry"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAltId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_alt_id", ((P$.PdbxStructLink$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_alt_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_asym_id", ((P$.PdbxStructLink$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_asym_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_atom_id", ((P$.PdbxStructLink$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_atom_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_comp_id", ((P$.PdbxStructLink$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_comp_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_seq_id", ((P$.PdbxStructLink$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_seq_id"));
});

Clazz.newMeth(C$, 'getPtnr2LabelInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_label_ins_code", ((P$.PdbxStructLink$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_label_ins_code"));
});

Clazz.newMeth(C$, 'getPtnr2Symmetry$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ptnr2_symmetry", ((P$.PdbxStructLink$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("ptnr2_symmetry"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxStructLink$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getPdbxDistValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_dist_value", ((P$.PdbxStructLink$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructLink$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructLink$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_dist_value"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
