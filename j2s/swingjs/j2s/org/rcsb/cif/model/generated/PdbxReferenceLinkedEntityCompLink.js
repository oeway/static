(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getLinkedEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("linked_entity_id", ((P$.PdbxReferenceLinkedEntityCompLink$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("linked_entity_id"));
});

Clazz.newMeth(C$, 'getLinkId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_id", ((P$.PdbxReferenceLinkedEntityCompLink$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("link_id"));
});

Clazz.newMeth(C$, 'getListId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("list_id_1", ((P$.PdbxReferenceLinkedEntityCompLink$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("list_id_1"));
});

Clazz.newMeth(C$, 'getListId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("list_id_2", ((P$.PdbxReferenceLinkedEntityCompLink$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("list_id_2"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxReferenceLinkedEntityCompLink$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getCompId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_1", ((P$.PdbxReferenceLinkedEntityCompLink$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_1"));
});

Clazz.newMeth(C$, 'getCompId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id_2", ((P$.PdbxReferenceLinkedEntityCompLink$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id_2"));
});

Clazz.newMeth(C$, 'getAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_1", ((P$.PdbxReferenceLinkedEntityCompLink$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id_2", ((P$.PdbxReferenceLinkedEntityCompLink$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id_2"));
});

Clazz.newMeth(C$, 'getLeavingAtomId1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("leaving_atom_id_1", ((P$.PdbxReferenceLinkedEntityCompLink$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("leaving_atom_id_1"));
});

Clazz.newMeth(C$, 'getAtomStereoConfig1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_stereo_config_1", ((P$.PdbxReferenceLinkedEntityCompLink$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("atom_stereo_config_1"));
});

Clazz.newMeth(C$, 'getLeavingAtomId2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("leaving_atom_id_2", ((P$.PdbxReferenceLinkedEntityCompLink$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda12.$init$, [this, null]))) : this.getBinaryColumn$S("leaving_atom_id_2"));
});

Clazz.newMeth(C$, 'getAtomStereoConfig2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_stereo_config_2", ((P$.PdbxReferenceLinkedEntityCompLink$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda13.$init$, [this, null]))) : this.getBinaryColumn$S("atom_stereo_config_2"));
});

Clazz.newMeth(C$, 'getValueOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_order", ((P$.PdbxReferenceLinkedEntityCompLink$lambda14||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityCompLink$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityCompLink$lambda14.$init$, [this, null]))) : this.getBinaryColumn$S("value_order"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
