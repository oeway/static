(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),p$1={},I$=[[0,'org.rcsb.cif.binary.codec.Codec','java.util.LinkedHashMap','java.util.Map','org.rcsb.cif.binary.BinaryEncoder','org.rcsb.cif.Platform','java.util.ArrayList','org.rcsb.cif.model.ModelFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BinaryCifWriter");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.options=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_rcsb_cif_CifOptions', function (options) {
;C$.$init$.apply(this);
this.options=options;
}, 1);

Clazz.newMeth(C$, 'write$org_rcsb_cif_generic_CifFile', function (cifFile) {
var file=p$1.encodeFile$org_rcsb_cif_generic_CifFile.apply(this, [cifFile]);
return $I$(1).MESSAGE_PACK_CODEC.encode$java_util_Map(file);
});

Clazz.newMeth(C$, 'encodeFile$org_rcsb_cif_generic_CifFile', function (cifFile) {
var file=Clazz.new_($I$(2,1));
file.put$TK$TV("encoder", this.options.getEncoder$());
file.put$TK$TV("version", "0.3.0");
var blocks=Clazz.array($I$(3), [cifFile.getBlocks$().size$()]);
var blockCount=0;
file.put$TK$TV("dataBlocks", blocks);
var encoder=Clazz.new_($I$(4,1).c$$org_rcsb_cif_CifOptions,[this.options]);
for (var cifBlock, $cifBlock = cifFile.getBlocks$().iterator$(); $cifBlock.hasNext$()&&((cifBlock=($cifBlock.next$())),1);) {
var block=blocks[blockCount++]=$I$(5).getMap$();
var blockHeader=cifBlock.getBlockHeader$();
var header=(blockHeader != null  ? blockHeader.replaceAll$S$S("[ \n\t]", "").toUpperCase$() : "UNKNOWN");
block.put$TK$TV("header", header);
var categories=Clazz.new_($I$(6,1));
for (var categoryName, $categoryName = cifBlock.getCategoryNames$().iterator$(); $categoryName.hasNext$()&&((categoryName=($categoryName.next$())),1);) {
if (!this.options.filterCategory$S(categoryName)) {
continue;
}var cifCategory=cifBlock.getCategory$S(categoryName);
var rowCount=cifCategory.getRowCount$();
if (rowCount == 0) {
continue;
}$I$(7).ensureModelPropertiesLoaded$S(categoryName);
var columns=Clazz.new_($I$(6,1));
var category=$I$(5).getMap$();
category.put$TK$TV("name", "_" + categoryName);
category.put$TK$TV("rowCount", new Integer(rowCount));
for (var columnName, $columnName = cifCategory.getColumnNamesEncoded$().iterator$(); $columnName.hasNext$()&&((columnName=($columnName.next$())),1);) {
if (this.options.filterColumn$S$S(categoryName, columnName)) {
columns.add$TE(encoder.encodeColumn$S$org_rcsb_cif_model_Column(categoryName, cifCategory.getColumn$S(columnName)));
}}
category.put$TK$TV("columns", columns.toArray$());
categories.add$TE(cifCategory);
}
block.put$TK$TV("categories", categories.toArray$());
}
return file;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:28 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
