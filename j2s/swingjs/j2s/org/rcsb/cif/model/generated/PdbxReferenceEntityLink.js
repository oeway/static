(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getLinkId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_id", ((P$.PdbxReferenceEntityLink$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("link_id"));
});

Clazz.newMeth(C$, 'getPrdId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("prd_id", ((P$.PdbxReferenceEntityLink$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("prd_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxReferenceEntityLink$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getRefEntityId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_entity_id_1", ((P$.PdbxReferenceEntityLink$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("ref_entity_id_1"));
});

Clazz.newMeth(C$, 'getRefEntityId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_entity_id_2", ((P$.PdbxReferenceEntityLink$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("ref_entity_id_2"));
});

Clazz.newMeth(C$, 'getEntitySeqNum1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_seq_num_1", ((P$.PdbxReferenceEntityLink$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("entity_seq_num_1"));
});

Clazz.newMeth(C$, 'getEntitySeqNum2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_seq_num_2", ((P$.PdbxReferenceEntityLink$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("entity_seq_num_2"));
});

Clazz.newMeth(C$, 'getCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_1", ((P$.PdbxReferenceEntityLink$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_1"));
});

Clazz.newMeth(C$, 'getCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_2", ((P$.PdbxReferenceEntityLink$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_1", ((P$.PdbxReferenceEntityLink$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_2", ((P$.PdbxReferenceEntityLink$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_2"));
});

Clazz.newMeth(C$, 'getValueOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_order", ((P$.PdbxReferenceEntityLink$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("value_order"));
});

Clazz.newMeth(C$, 'getComponent1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("component_1", ((P$.PdbxReferenceEntityLink$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("component_1"));
});

Clazz.newMeth(C$, 'getComponent2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("component_2", ((P$.PdbxReferenceEntityLink$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("component_2"));
});

Clazz.newMeth(C$, 'getNonpolyResNum1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nonpoly_res_num_1", ((P$.PdbxReferenceEntityLink$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda15.$init$, [this, null]))) : this.getBinaryColumn$S("nonpoly_res_num_1"));
});

Clazz.newMeth(C$, 'getNonpolyResNum2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("nonpoly_res_num_2", ((P$.PdbxReferenceEntityLink$lambda16||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda16.$init$, [this, null]))) : this.getBinaryColumn$S("nonpoly_res_num_2"));
});

Clazz.newMeth(C$, 'getLinkClass$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_class", ((P$.PdbxReferenceEntityLink$lambda17||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceEntityLink$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceEntityLink$lambda17.$init$, [this, null]))) : this.getBinaryColumn$S("link_class"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
