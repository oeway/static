(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_id", ((P$.PdbxEntityPolyCompLinkList$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("link_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxEntityPolyCompLinkList$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.PdbxEntityPolyCompLinkList$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getEntityCompNum1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_comp_num_1", ((P$.PdbxEntityPolyCompLinkList$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("entity_comp_num_1"));
});

Clazz.newMeth(C$, 'getEntityCompNum2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_comp_num_2", ((P$.PdbxEntityPolyCompLinkList$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entity_comp_num_2"));
});

Clazz.newMeth(C$, 'getCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_1", ((P$.PdbxEntityPolyCompLinkList$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_1"));
});

Clazz.newMeth(C$, 'getCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_2", ((P$.PdbxEntityPolyCompLinkList$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_1", ((P$.PdbxEntityPolyCompLinkList$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_1"));
});

Clazz.newMeth(C$, 'getLeavingAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("leaving_atom_id_1", ((P$.PdbxEntityPolyCompLinkList$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("leaving_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomStereoConfig1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_stereo_config_1", ((P$.PdbxEntityPolyCompLinkList$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("atom_stereo_config_1"));
});

Clazz.newMeth(C$, 'getAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_2", ((P$.PdbxEntityPolyCompLinkList$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_2"));
});

Clazz.newMeth(C$, 'getLeavingAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("leaving_atom_id_2", ((P$.PdbxEntityPolyCompLinkList$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("leaving_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomStereoConfig2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_stereo_config_2", ((P$.PdbxEntityPolyCompLinkList$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_stereo_config_2"));
});

Clazz.newMeth(C$, 'getValueOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_order", ((P$.PdbxEntityPolyCompLinkList$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxEntityPolyCompLinkList$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxEntityPolyCompLinkList$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("value_order"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:44 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
