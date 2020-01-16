(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAngleGamma$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("angle_gamma", ((P$.Em2dCrystalEntity$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("angle_gamma"));
});

Clazz.newMeth(C$, 'getCSamplingLength$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("c_sampling_length", ((P$.Em2dCrystalEntity$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("c_sampling_length"));
});

Clazz.newMeth(C$, 'getImageProcessingId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("image_processing_id", ((P$.Em2dCrystalEntity$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("image_processing_id"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.Em2dCrystalEntity$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getEntityAssemblyId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entity_assembly_id", ((P$.Em2dCrystalEntity$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("entity_assembly_id"));
});

Clazz.newMeth(C$, 'getLengthA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_a", ((P$.Em2dCrystalEntity$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("length_a"));
});

Clazz.newMeth(C$, 'getLengthB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_b", ((P$.Em2dCrystalEntity$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("length_b"));
});

Clazz.newMeth(C$, 'getLengthC$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("length_c", ((P$.Em2dCrystalEntity$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("length_c"));
});

Clazz.newMeth(C$, 'getSpaceGroupNameH_M$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("space_group_name_H-M", ((P$.Em2dCrystalEntity$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "Em2dCrystalEntity$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Em2dCrystalEntity$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("space_group_name_H-M"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:36 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
