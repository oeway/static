(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getRangeId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_id_1", ((P$.PdbxStructSheetHbond$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("range_id_1"));
});

Clazz.newMeth(C$, 'getRangeId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_id_2", ((P$.PdbxStructSheetHbond$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("range_id_2"));
});

Clazz.newMeth(C$, 'getSheetId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("sheet_id", ((P$.PdbxStructSheetHbond$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("sheet_id"));
});

Clazz.newMeth(C$, 'getRange1LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_label_atom_id", ((P$.PdbxStructSheetHbond$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_label_atom_id"));
});

Clazz.newMeth(C$, 'getRange1LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_label_seq_id", ((P$.PdbxStructSheetHbond$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_label_seq_id"));
});

Clazz.newMeth(C$, 'getRange1LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_label_comp_id", ((P$.PdbxStructSheetHbond$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_label_comp_id"));
});

Clazz.newMeth(C$, 'getRange1LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_label_asym_id", ((P$.PdbxStructSheetHbond$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_label_asym_id"));
});

Clazz.newMeth(C$, 'getRange1AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_auth_atom_id", ((P$.PdbxStructSheetHbond$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_auth_atom_id"));
});

Clazz.newMeth(C$, 'getRange1AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_auth_seq_id", ((P$.PdbxStructSheetHbond$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_auth_seq_id"));
});

Clazz.newMeth(C$, 'getRange1AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_auth_comp_id", ((P$.PdbxStructSheetHbond$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_auth_comp_id"));
});

Clazz.newMeth(C$, 'getRange1AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_auth_asym_id", ((P$.PdbxStructSheetHbond$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_auth_asym_id"));
});

Clazz.newMeth(C$, 'getRange1PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_1_PDB_ins_code", ((P$.PdbxStructSheetHbond$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("range_1_PDB_ins_code"));
});

Clazz.newMeth(C$, 'getRange2LabelAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_label_atom_id", ((P$.PdbxStructSheetHbond$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_label_atom_id"));
});

Clazz.newMeth(C$, 'getRange2LabelSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_label_seq_id", ((P$.PdbxStructSheetHbond$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_label_seq_id"));
});

Clazz.newMeth(C$, 'getRange2LabelCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_label_comp_id", ((P$.PdbxStructSheetHbond$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_label_comp_id"));
});

Clazz.newMeth(C$, 'getRange2LabelAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_label_asym_id", ((P$.PdbxStructSheetHbond$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_label_asym_id"));
});

Clazz.newMeth(C$, 'getRange2AuthAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_auth_atom_id", ((P$.PdbxStructSheetHbond$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_auth_atom_id"));
});

Clazz.newMeth(C$, 'getRange2AuthSeqId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_auth_seq_id", ((P$.PdbxStructSheetHbond$lambda18||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda18.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_auth_seq_id"));
});

Clazz.newMeth(C$, 'getRange2AuthCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_auth_comp_id", ((P$.PdbxStructSheetHbond$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda19.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_auth_comp_id"));
});

Clazz.newMeth(C$, 'getRange2AuthAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_auth_asym_id", ((P$.PdbxStructSheetHbond$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda20.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_auth_asym_id"));
});

Clazz.newMeth(C$, 'getRange2PDBInsCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("range_2_PDB_ins_code", ((P$.PdbxStructSheetHbond$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxStructSheetHbond$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxStructSheetHbond$lambda21.$init$, [this, null]))) : this.getBinaryColumn$S("range_2_PDB_ins_code"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:49 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
