(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EmDepui", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getDepositorHoldInstructions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("depositor_hold_instructions", ((P$.EmDepui$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDepui$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDepui$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("depositor_hold_instructions"));
});

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.EmDepui$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDepui$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDepui$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getMacromoleculeDescription$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("macromolecule_description", ((P$.EmDepui$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDepui$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDepui$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("macromolecule_description"));
});

Clazz.newMeth(C$, 'getObsoleteInstructions$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("obsolete_instructions", ((P$.EmDepui$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDepui$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDepui$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("obsolete_instructions"));
});

Clazz.newMeth(C$, 'getSameAuthorsAsPdb$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("same_authors_as_pdb", ((P$.EmDepui$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDepui$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDepui$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("same_authors_as_pdb"));
});

Clazz.newMeth(C$, 'getSameTitleAsPdb$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("same_title_as_pdb", ((P$.EmDepui$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "EmDepui$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.EmDepui$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("same_title_as_pdb"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:37 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
