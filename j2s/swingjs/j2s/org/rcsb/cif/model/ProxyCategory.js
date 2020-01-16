(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),I$=[[0,'org.rcsb.cif.model.ModelFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProxyCategory", null, 'org.rcsb.cif.model.BaseCategory');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.realizedCategory=null;
this.isGeneric=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I$OA', function (name, rowCount, encodedFields) {
C$.c$$S$I$OA$Z.apply(this, [name, rowCount, encodedFields, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$OA$Z', function (name, rowCount, encodedColumns, isGeneric) {
;C$.superclazz.c$$S$I$OA.apply(this, [name, rowCount, encodedColumns]);C$.$init$.apply(this);
this.isGeneric=isGeneric;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
if (this.realizedCategory == null ) {
this.realizedCategory=$I$(1).createCategoryBinary$S$I$OA(this.getCategoryName$(), this.getRowCount$(), this.encodedColumns);
this.encodedColumns=null;
}return this.realizedCategory;
});

Clazz.newMeth(C$, 'getColumn$S', function (name) {
name=name.toLowerCase$();
return (this.isGeneric ? C$.superclazz.prototype.getColumn$S.apply(this, [name]) : this.get$().getColumn$S(name));
});

Clazz.newMeth(C$, 'getColumnNames$', function () {
return (this.isGeneric ? C$.superclazz.prototype.getColumnNames$.apply(this, []) : this.get$().getColumnNames$());
});

Clazz.newMeth(C$, 'isDefined$', function () {
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
