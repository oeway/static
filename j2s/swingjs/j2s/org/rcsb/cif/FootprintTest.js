(function(){var P$=Clazz.newPackage("org.rcsb.cif"),p$1={},I$=[[0,'org.rcsb.cif.CifIO','org.rcsb.cif.TestHelper','java.util.LinkedHashMap','org.rcsb.cif.binary.codec.MessagePackCodec','java.io.ByteArrayInputStream','java.util.stream.Stream','java.util.stream.Collectors']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FootprintTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'printFootprint$', function () {
var bytes=$I$(1).writeBinary$org_rcsb_cif_api_CifFile($I$(1).readFromInputStream$java_io_InputStream($I$(2).getInputStream$S("source/200l_rcsb.cif")));
var writtenFootprint=p$1.getFootprint$BA.apply(this, [bytes]);
var ebiFootprint=p$1.getFootprint$BA.apply(this, [$I$(2).getBytes$S("source/200l_ebi.bcif")]);
var molstarFootprint=p$1.getFootprint$BA.apply(this, [$I$(2).getBytes$S("source/200l_molstar.bcif")]);
p$1.equals$java_util_Map$java_util_Map.apply(this, [ebiFootprint, writtenFootprint]);
p$1.equals$java_util_Map$java_util_Map.apply(this, [molstarFootprint, writtenFootprint]);
});

Clazz.newMeth(C$, 'getFootprint$BA', function (content) {
var footprint=Clazz.new_($I$(3,1));
var messagePackCodec=Clazz.new_($I$(4,1));
var file=messagePackCodec.decode$java_io_InputStream(Clazz.new_($I$(5,1).c$$BA,[content])).get$O("dataBlocks");
var firstBlock=file[0];
var categories=firstBlock.get$O("categories");
for (var cat, $cat = 0, $$cat = categories; $cat<$$cat.length&&((cat=($$cat[$cat])),1);$cat++) {
var category=cat;
var categoryName=category.get$O("name");
if (categoryName.startsWith$S("_coordinate") || categoryName.equals$O("_chem_comp_bond") ) {
continue;
}var columns=category.get$O("columns");
for (var col, $col = 0, $$col = columns; $col<$$col.length&&((col=($$col[$col])),1);$col++) {
var column=col;
var columnName=column.get$O("name");
var key=categoryName + "." + columnName ;
if (key.equals$O("_struct_sheet_range.symmetry") || key.equals$O("_symmetry.space_group_name_Hall") || key.equals$O("_atom_site.pdbe_label_seq_id")  ) {
continue;
}var data=column.get$O("data");
var enc=data.get$O("encoding");
var value=category.get$O("rowCount") + "," + enc.length + "," + $I$(6).of$TTA(enc).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.FootprintTest$lambda1*/(P$.FootprintTest$lambda1$||(P$.FootprintTest$lambda1$=(((P$.FootprintTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FootprintTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (e) { return ((e).get$O("kind"));});
})()
), Clazz.new_(P$.FootprintTest$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(7).toList$()) ;
footprint.put$TK$TV(key, value);
}
}
return footprint;
}, p$1);

Clazz.newMeth(C$, 'equals$java_util_Map$java_util_Map', function (expected, actual) {
for (var key, $key = expected.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (!actual.containsKey$O(key)) {
org.junit.Assert.fail$S("key " + key + " not present" );
}if (!expected.get$O(key).equals$O(actual.get$O(key))) {
System.out.println$S("mismatch in column " + key + "\n" + expected.get$O(key) + " vs " + actual.get$O(key) );
}}
}, p$1);
C$.__ANN__ = [[['M:printFootprint','void'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
