(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("linked_entity_id", ((P$.PdbxReferenceLinkedEntityLink$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("linked_entity_id"));
});

Clazz.newMeth(C$, 'getLinkId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_id", ((P$.PdbxReferenceLinkedEntityLink$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("link_id"));
});

Clazz.newMeth(C$, 'getFromListId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("from_list_id", ((P$.PdbxReferenceLinkedEntityLink$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("from_list_id"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.PdbxReferenceLinkedEntityLink$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getToCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("to_comp_id", ((P$.PdbxReferenceLinkedEntityLink$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("to_comp_id"));
});

Clazz.newMeth(C$, 'getFromCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("from_comp_id", ((P$.PdbxReferenceLinkedEntityLink$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("from_comp_id"));
});

Clazz.newMeth(C$, 'getToAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("to_atom_id", ((P$.PdbxReferenceLinkedEntityLink$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("to_atom_id"));
});

Clazz.newMeth(C$, 'getFromAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("from_atom_id", ((P$.PdbxReferenceLinkedEntityLink$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("from_atom_id"));
});

Clazz.newMeth(C$, 'getFromLeavingAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("from_leaving_atom_id", ((P$.PdbxReferenceLinkedEntityLink$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("from_leaving_atom_id"));
});

Clazz.newMeth(C$, 'getFromAtomStereoConfig$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("from_atom_stereo_config", ((P$.PdbxReferenceLinkedEntityLink$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("from_atom_stereo_config"));
});

Clazz.newMeth(C$, 'getValueOrder$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("value_order", ((P$.PdbxReferenceLinkedEntityLink$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntityLink$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntityLink$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("value_order"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
