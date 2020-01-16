(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.IntColumn','org.rcsb.cif.model.FloatColumn','org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ChemicalConnAtom", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("charge", ((P$.ChemicalConnAtom$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("charge"));
});

Clazz.newMeth(C$, 'getDisplayX$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("display_x", ((P$.ChemicalConnAtom$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("display_x"));
});

Clazz.newMeth(C$, 'getDisplayY$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("display_y", ((P$.ChemicalConnAtom$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("display_y"));
});

Clazz.newMeth(C$, 'getNCA$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NCA", ((P$.ChemicalConnAtom$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("NCA"));
});

Clazz.newMeth(C$, 'getNH$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("NH", ((P$.ChemicalConnAtom$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("NH"));
});

Clazz.newMeth(C$, 'getNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("number", ((P$.ChemicalConnAtom$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("number"));
});

Clazz.newMeth(C$, 'getTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_symbol", ((P$.ChemicalConnAtom$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "ChemicalConnAtom$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(3,1).c$$S,[t])});
})()
), Clazz.new_(P$.ChemicalConnAtom$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("type_symbol"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:35 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
