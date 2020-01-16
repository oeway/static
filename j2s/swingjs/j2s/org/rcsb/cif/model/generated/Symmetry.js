(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.generated"),I$=[[0,'org.rcsb.cif.model.StrColumn','org.rcsb.cif.model.IntColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Symmetry", null, 'org.rcsb.cif.model.BaseCategory');

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

Clazz.newMeth(C$, 'getEntryId$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("entry_id", ((P$.Symmetry$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Symmetry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Symmetry$lambda1.$init$, [this, null]))) : this.getBinaryColumn$S("entry_id"));
});

Clazz.newMeth(C$, 'getCellSetting$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("cell_setting", ((P$.Symmetry$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Symmetry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Symmetry$lambda2.$init$, [this, null]))) : this.getBinaryColumn$S("cell_setting"));
});

Clazz.newMeth(C$, 'getIntTablesNumber$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("Int_Tables_number", ((P$.Symmetry$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Symmetry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(2,1).c$$S,[t])});
})()
), Clazz.new_(P$.Symmetry$lambda3.$init$, [this, null]))) : this.getBinaryColumn$S("Int_Tables_number"));
});

Clazz.newMeth(C$, 'getSpaceGroupNameHall$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("space_group_name_Hall", ((P$.Symmetry$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Symmetry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Symmetry$lambda4.$init$, [this, null]))) : this.getBinaryColumn$S("space_group_name_Hall"));
});

Clazz.newMeth(C$, 'getSpaceGroupNameH_M$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("space_group_name_H-M", ((P$.Symmetry$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Symmetry$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Symmetry$lambda5.$init$, [this, null]))) : this.getBinaryColumn$S("space_group_name_H-M"));
});

Clazz.newMeth(C$, 'getPdbxFullSpaceGroupNameH_M$', function () {
return (this.isText ? this.textFields.computeIfAbsent$TK$java_util_function_Function("pdbx_full_space_group_name_H-M", ((P$.Symmetry$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "Symmetry$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.new_($I$(1,1).c$$S,[t])});
})()
), Clazz.new_(P$.Symmetry$lambda6.$init$, [this, null]))) : this.getBinaryColumn$S("pdbx_full_space_group_name_H-M"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
