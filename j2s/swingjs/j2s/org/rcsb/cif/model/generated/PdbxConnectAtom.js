(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxConnectAtom", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getResName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("res_name", ((P$.PdbxConnectAtom$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("res_name"));
});

Clazz.newMeth(C$, 'getAtomName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("atom_name", ((P$.PdbxConnectAtom$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("atom_name"));
});

Clazz.newMeth(C$, 'getConnectTo$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("connect_to", ((P$.PdbxConnectAtom$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("connect_to"));
});

Clazz.newMeth(C$, 'getTypeSymbol$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("type_symbol", ((P$.PdbxConnectAtom$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("type_symbol"));
});

Clazz.newMeth(C$, 'getCharge$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("charge", ((P$.PdbxConnectAtom$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("charge"));
});

Clazz.newMeth(C$, 'getBondType$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("bond_type", ((P$.PdbxConnectAtom$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("bond_type"));
});

Clazz.newMeth(C$, 'getAlignPos$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("align_pos", ((P$.PdbxConnectAtom$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxConnectAtom$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxConnectAtom$lambda7.$init$, [this, null]))) : this.getBinaryColumn$S("align_pos"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:42 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
