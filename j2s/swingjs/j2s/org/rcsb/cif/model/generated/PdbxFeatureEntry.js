(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry", null, 'org.rcsb.cif.model.BaseCategory');

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
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.PdbxFeatureEntry$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getFeatureName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_name", ((P$.PdbxFeatureEntry$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("feature_name"));
});

Clazz.newMeth(C$, 'getFeatureType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_type", ((P$.PdbxFeatureEntry$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("feature_type"));
});

Clazz.newMeth(C$, 'getFeature$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature", ((P$.PdbxFeatureEntry$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("feature"));
});

Clazz.newMeth(C$, 'getFeatureIdentifier$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_identifier", ((P$.PdbxFeatureEntry$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("feature_identifier"));
});

Clazz.newMeth(C$, 'getFeatureAssignedBy$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_assigned_by", ((P$.PdbxFeatureEntry$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("feature_assigned_by"));
});

Clazz.newMeth(C$, 'getFeatureCitationId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_citation_id", ((P$.PdbxFeatureEntry$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("feature_citation_id"));
});

Clazz.newMeth(C$, 'getFeatureSoftwareId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("feature_software_id", ((P$.PdbxFeatureEntry$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxFeatureEntry$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxFeatureEntry$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("feature_software_id"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:45 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
