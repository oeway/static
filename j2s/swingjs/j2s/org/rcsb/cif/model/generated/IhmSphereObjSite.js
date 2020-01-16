(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IhmSphereObjSite", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getOrdinalId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ordinal_id", ((P$.IhmSphereObjSite$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("ordinal_id"));
});

Clazz.newMeth(C$, 'getEntityId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_id", ((P$.IhmSphereObjSite$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entity_id"));
});

Clazz.newMeth(C$, 'getSeqIdBegin$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_begin", ((P$.IhmSphereObjSite$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_begin"));
});

Clazz.newMeth(C$, 'getSeqIdEnd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("seq_id_end", ((P$.IhmSphereObjSite$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("seq_id_end"));
});

Clazz.newMeth(C$, 'getAsymId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("asym_id", ((P$.IhmSphereObjSite$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("asym_id"));
});

Clazz.newMeth(C$, 'getCartnX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_x", ((P$.IhmSphereObjSite$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_x"));
});

Clazz.newMeth(C$, 'getCartnY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_y", ((P$.IhmSphereObjSite$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_y"));
});

Clazz.newMeth(C$, 'getCartnZ$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Cartn_z", ((P$.IhmSphereObjSite$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("Cartn_z"));
});

Clazz.newMeth(C$, 'getObjectRadius$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("object_radius", ((P$.IhmSphereObjSite$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("object_radius"));
});

Clazz.newMeth(C$, 'getRmsf$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("rmsf", ((P$.IhmSphereObjSite$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda10.$init$, [this, null]))) : this.getBinaryColumn$S("rmsf"));
});

Clazz.newMeth(C$, 'getModelId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("model_id", ((P$.IhmSphereObjSite$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "IhmSphereObjSite$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.IhmSphereObjSite$lambda11.$init$, [this, null]))) : this.getBinaryColumn$S("model_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:41 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
