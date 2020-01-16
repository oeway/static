(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PdbxViewItem", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getItemName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("item_name", ((P$.PdbxViewItem$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxViewItem$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxViewItem$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("item_name"));
});

Clazz.newMeth(C$, 'getCategoryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("category_id", ((P$.PdbxViewItem$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxViewItem$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxViewItem$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("category_id"));
});

Clazz.newMeth(C$, 'getItemViewName$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("item_view_name", ((P$.PdbxViewItem$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxViewItem$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxViewItem$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("item_view_name"));
});

Clazz.newMeth(C$, 'getItemViewMandatoryCode$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("item_view_mandatory_code", ((P$.PdbxViewItem$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxViewItem$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxViewItem$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("item_view_mandatory_code"));
});

Clazz.newMeth(C$, 'getItemViewAllowAlternateValue$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("item_view_allow_alternate_value", ((P$.PdbxViewItem$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "PdbxViewItem$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.PdbxViewItem$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("item_view_allow_alternate_value"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:50 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
