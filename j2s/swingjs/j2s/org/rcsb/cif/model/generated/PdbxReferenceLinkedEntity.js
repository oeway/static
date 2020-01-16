(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxReferenceLinkedEntity$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getClazz$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("class", ((P$.PdbxReferenceLinkedEntity$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("class"));
});

Clazz.newMeth(C$, 'getName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("name", ((P$.PdbxReferenceLinkedEntity$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("name"));
});

Clazz.newMeth(C$, 'getTaxonomyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("taxonomy_id", ((P$.PdbxReferenceLinkedEntity$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("taxonomy_id"));
});

Clazz.newMeth(C$, 'getTaxonomyClass$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("taxonomy_class", ((P$.PdbxReferenceLinkedEntity$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("taxonomy_class"));
});

Clazz.newMeth(C$, 'getLinkToEntityType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_to_entity_type", ((P$.PdbxReferenceLinkedEntity$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("link_to_entity_type"));
});

Clazz.newMeth(C$, 'getLinkToCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_to_comp_id", ((P$.PdbxReferenceLinkedEntity$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("link_to_comp_id"));
});

Clazz.newMeth(C$, 'getLinkFromEntityType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("link_from_entity_type", ((P$.PdbxReferenceLinkedEntity$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxReferenceLinkedEntity$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxReferenceLinkedEntity$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("link_from_entity_type"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:47 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
