(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[[0,'java.util.ArrayList','org.rcsb.cif.model.ValueKind',['org.rcsb.cif.model.Builder','.CategoryBuilder'],'org.rcsb.cif.model.StrColumn']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StrColumnBuilder", null, ['org.rcsb.cif.model.Builder','.ColumnBuilder'], 'org.rcsb.cif.generic.ColumnBuilder');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$S$S$TP'], function (categoryName, columnName, parent) {
;C$.superclazz.c$$S$S$java_util_List.apply(this, [categoryName, columnName, Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.parent=parent;
if (parent != null ) {
this.parent.registerChild$org_rcsb_cif_model_Builder_ColumnBuilder(this);
}}, 1);

Clazz.newMeth(C$, 'getValues$', function () {
return this.values;
});

Clazz.newMeth(C$, 'markNextNotPresent$', function () {
this.markNext$O$org_rcsb_cif_model_ValueKind(".", $I$(2).NOT_PRESENT);
return this;
});

Clazz.newMeth(C$, 'markNextUnknown$', function () {
this.markNext$O$org_rcsb_cif_model_ValueKind("?", $I$(2).UNKNOWN);
return this;
});

Clazz.newMeth(C$, 'build$', function () {
return $I$(3).createColumnText$S$S$java_util_List$java_util_List$Class(this.getCategoryName$(), this.getColumnName$(), this.values, this.mask, Clazz.getClass($I$(4)));
});

Clazz.newMeth(C$, 'leaveColumn$', function () {
if (this.parent == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot leave column with undefined parent category"]);
}return this.parent.digest$org_rcsb_cif_generic_StrColumnBuilder(this);
});

Clazz.newMeth(C$, 'add$SA', function (value) {
for (var s, $s = 0, $$s = value; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (".".equals$O(s)) {
this.markNextNotPresent$();
} else if ("?".equals$O(s)) {
this.markNextUnknown$();
} else {
this.values.add$TE(s);
this.mask.add$TE($I$(2).PRESENT);
}}
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
