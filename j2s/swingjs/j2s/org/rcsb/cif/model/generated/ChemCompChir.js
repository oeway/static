(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChemCompChir", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getAtomId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_id", ((P$.ChemCompChir$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("atom_id"));
});

Clazz.newMeth(C$, 'getAtomConfig$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_config", ((P$.ChemCompChir$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_config"));
});

Clazz.newMeth(C$, 'getId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("id", ((P$.ChemCompChir$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("id"));
});

Clazz.newMeth(C$, 'getCompId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("comp_id", ((P$.ChemCompChir$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("comp_id"));
});

Clazz.newMeth(C$, 'getNumberAtomsAll$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_atoms_all", ((P$.ChemCompChir$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("number_atoms_all"));
});

Clazz.newMeth(C$, 'getNumberAtomsNh$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number_atoms_nh", ((P$.ChemCompChir$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number_atoms_nh"));
});

Clazz.newMeth(C$, 'getVolumeFlag$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume_flag", ((P$.ChemCompChir$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("volume_flag"));
});

Clazz.newMeth(C$, 'getVolumeThree$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume_three", ((P$.ChemCompChir$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda8.$init$, [this, null]))) : this.getBinaryColumn$S("volume_three"));
});

Clazz.newMeth(C$, 'getVolumeThreeEsd$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("volume_three_esd", ((P$.ChemCompChir$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemCompChir$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemCompChir$lambda9.$init$, [this, null]))) : this.getBinaryColumn$S("volume_three_esd"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
