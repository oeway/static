(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ValenceParam", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAtom1$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_1", ((P$.ValenceParam$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atom_1"));
});

Clazz.newMeth(C$, 'getAtom1Valence$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_1_valence", ((P$.ValenceParam$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_1_valence"));
});

Clazz.newMeth(C$, 'getAtom2$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_2", ((P$.ValenceParam$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("atom_2"));
});

Clazz.newMeth(C$, 'getAtom2Valence$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_2_valence", ((P$.ValenceParam$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("atom_2_valence"));
});

Clazz.newMeth(C$, 'getB$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("B", ((P$.ValenceParam$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("B"));
});

Clazz.newMeth(C$, 'getDetails$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("details", ((P$.ValenceParam$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("details"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.ValenceParam$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getRefId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("ref_id", ((P$.ValenceParam$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("ref_id"));
});

Clazz.newMeth(C$, 'getRo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Ro", ((P$.ValenceParam$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ValenceParam$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ValenceParam$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("Ro"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
