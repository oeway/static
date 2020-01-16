(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),I$=[[0,'java.util.ArrayList','org.rcsb.cif.Platform','StringBuilder','org.rcsb.cif.model.ValueKind','org.rcsb.cif.model.ModelFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Builder", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Builder, "ColumnBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.categoryName=null;
this.columnName=null;
this.mask=null;
this.values=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$java_util_List', function (categoryName, columnName, values) {
;C$.$init$.apply(this);
this.categoryName=categoryName;
this.columnName=columnName;
this.mask=Clazz.new_($I$(1,1));
this.values=values;
}, 1);

Clazz.newMeth(C$, 'getCategoryName$', function () {
return this.categoryName;
});

Clazz.newMeth(C$, 'getColumnName$', function () {
return this.columnName;
});

Clazz.newMeth(C$, 'getMask$', function () {
return this.mask;
});

Clazz.newMeth(C$, 'markNext$O$org_rcsb_cif_model_ValueKind', function (val, kind) {
this.values.add$TE(val);
this.mask.add$TE(kind);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Builder, "BlockBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.blockName=null;
this.categories=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (blockName) {
;C$.$init$.apply(this);
this.blockName=blockName;
this.categories=$I$(2).getMap$();
}, 1);

Clazz.newMeth(C$, 'getBlockName$', function () {
return this.blockName;
});

Clazz.newMeth(C$, 'getCategories$', function () {
return this.categories;
});

Clazz.newMeth(C$, 'addCategory$org_rcsb_cif_model_Category', function (category) {
this.categories.put$TK$TV(category.getCategoryName$(), category);
return this;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Builder, "CategoryBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.categoryName=null;
this.columns=null;
this.pendingDigests=null;
this.finishedDigests=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (categoryName) {
;C$.$init$.apply(this);
this.categoryName=categoryName;
this.columns=$I$(2).getMap$();
this.pendingDigests=Clazz.new_($I$(1,1));
this.finishedDigests=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getCategoryName$', function () {
return this.categoryName;
});

Clazz.newMeth(C$, 'getColumns$', function () {
return this.columns;
});

Clazz.newMeth(C$, 'addColumn$org_rcsb_cif_model_Column', function (column) {
this.columns.put$TK$TV(column.getColumnName$(), column);
return this;
});

Clazz.newMeth(C$, 'createColumnText$S$S$java_util_List$java_util_List$Class', function (categoryName, columnName, values, mask, hint) {
var length=values.size$();
var startToken=Clazz.array(Integer.TYPE, [length]);
var endToken=Clazz.array(Integer.TYPE, [length]);
var builder=Clazz.new_($I$(3,1));
for (var i=0; i < length; i++) {
startToken[i]=builder.length$();
var value=String.valueOf$O(values.get$I(i));
if (mask.get$I(i) === $I$(4).NOT_PRESENT ) {
value=".";
} else if (mask.get$I(i) === $I$(4).UNKNOWN ) {
value="?";
}builder.append$S(value);
endToken[i]=builder.length$();
}
return $I$(5).createColumnText$S$S$S$IA$IA$Class(categoryName, columnName, builder.toString(), startToken, endToken, hint);
}, 1);

Clazz.newMeth(C$, 'registerChild$org_rcsb_cif_model_Builder_ColumnBuilder', function (childColumnBuilder) {
this.pendingDigests.add$TE(childColumnBuilder);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
