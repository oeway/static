(function(){var P$=Clazz.newPackage("org.rcsb.cif"),p$1={},I$=[[0,'org.rcsb.cif.model.builder.CifBuilder','org.rcsb.cif.CifIO','java.io.ByteArrayInputStream','org.rcsb.cif.TestHelper','org.rcsb.cif.model.FloatColumn','java.util.stream.Stream','org.rcsb.cif.model.ValueKind','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntegrationTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testBehaviorForEmptyFiles$', function () {
var cifFile=Clazz.new_($I$(1,1)).enterBlock$S("test").enterAtomSite$().leaveCategory$().leaveBlock$().leaveFile$();
var bytes=$I$(2).writeBinary$org_rcsb_cif_api_CifFile(cifFile);
var read=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(3,1).c$$BA,[bytes]));
org.junit.Assert.assertEquals$J$J(0, read.getFirstBlock$().getCategoryNames$().size$());
});

Clazz.newMeth(C$, 'testVectorAndMatrixBehavior$', function () {
var textCifFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("cif/1acj.cif"));
p$1.testVectorAndMatrixBehavior$org_rcsb_cif_api_CifFile.apply(this, [textCifFile]);
var binaryCifFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("bcif/1acj.bcif"));
p$1.testVectorAndMatrixBehavior$org_rcsb_cif_api_CifFile.apply(this, [binaryCifFile]);
});

Clazz.newMeth(C$, 'testVectorAndMatrixBehavior$org_rcsb_cif_api_CifFile', function (cifFile) {
var atomSites=cifFile.getBlocks$().get$I(0).getAtomSites$();
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix11$()]);
org.junit.Assert.assertEquals$D$D$D(0.008795, atomSites.getFractTransfMatrix11$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix12$()]);
org.junit.Assert.assertEquals$D$D$D(0.005078, atomSites.getFractTransfMatrix12$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix13$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfMatrix13$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix21$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfMatrix21$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix22$()]);
org.junit.Assert.assertEquals$D$D$D(0.010156, atomSites.getFractTransfMatrix22$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix23$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfMatrix23$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix31$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfMatrix31$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix32$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfMatrix32$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfMatrix33$()]);
org.junit.Assert.assertEquals$D$D$D(0.007241, atomSites.getFractTransfMatrix33$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfVector1$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfVector1$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfVector2$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfVector2$().get$I(0), 0.001);
p$1.assertDefined$org_rcsb_cif_model_Column.apply(this, [atomSites.getFractTransfVector3$()]);
org.junit.Assert.assertEquals$D$D$D(0.0, atomSites.getFractTransfVector3$().get$I(0), 0.001);
}, p$1);

Clazz.newMeth(C$, 'assertDefined$org_rcsb_cif_model_Column', function (column) {
org.junit.Assert.assertNotNull$O(column);
org.junit.Assert.assertTrue$Z(column.isDefined$());
org.junit.Assert.assertTrue$Z(column.getRowCount$() > 0);
}, p$1);

Clazz.newMeth(C$, 'testUndefinedColumnBehavior$', function () {
var textCifFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("cif/0red.cif"));
p$1.testUndefinedColumnBehavior$org_rcsb_cif_api_CifFile.apply(this, [textCifFile]);
var binaryCifFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("bcif/0red.bcif"));
p$1.testUndefinedColumnBehavior$org_rcsb_cif_api_CifFile.apply(this, [binaryCifFile]);
});

Clazz.newMeth(C$, 'testUndefinedColumnBehavior$org_rcsb_cif_api_CifFile', function (cifFile) {
var block=cifFile.getFirstBlock$();
org.junit.Assert.assertNotNull$S$O("header is corrupted", block.getBlockHeader$());
org.junit.Assert.assertTrue$Z(block.getEntry$().isDefined$());
var entryId=block.getEntry$().getId$().get$I(0);
org.junit.Assert.assertEquals$O$O("0RED", entryId);
var atomSite=block.getAtomSite$();
org.junit.Assert.assertEquals$O$O("atom_site", atomSite.getCategoryName$());
org.junit.Assert.assertFalse$Z(atomSite.isDefined$());
org.junit.Assert.assertEquals$J$J(0, atomSite.getRowCount$());
var cartnX=atomSite.getCartnX$();
org.junit.Assert.assertEquals$O$O("Cartn_x", cartnX.getColumnName$());
org.junit.Assert.assertEquals$J$J(0, cartnX.getRowCount$());
org.junit.Assert.assertFalse$Z(cartnX.isDefined$());
}, p$1);

Clazz.newMeth(C$, 'testNumberFormat$', function () {
var text=Clazz.array(String, -1, ["1.0", "2", "-1.567891234567"]);
var data=String.join$CharSequence$CharSequenceA("", text);
var start=Clazz.array(Integer.TYPE, -1, [0, 3, 4]);
var end=Clazz.array(Integer.TYPE, -1, [3, 4, data.length$()]);
var cartnX=Clazz.new_($I$(5,1).c$$S$I$S$IA$IA,["Cartn_x", text.length, data, start, end]);
var cartnY=Clazz.new_($I$(5,1).c$$S$I$S$IA$IA,["Cartn_y", text.length, data, start, end]);
var cartnZ=Clazz.new_($I$(5,1).c$$S$I$S$IA$IA,["Cartn_z", text.length, data, start, end]);
$I$(6).of$TTA([cartnX, cartnY, cartnZ]).forEach$java_util_function_Consumer(/*addLambdaReuse org.rcsb.cif.IntegrationTest$lambda1*/(P$.IntegrationTest$lambda1$||(P$.IntegrationTest$lambda1$=(((P$.IntegrationTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntegrationTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (coordColumn) {
org.junit.Assert.assertEquals$O$O("1.000", coordColumn.getStringData$I(0));
org.junit.Assert.assertEquals$O$O("2.000", coordColumn.getStringData$I(1));
org.junit.Assert.assertEquals$O$O("-1.568", coordColumn.getStringData$I(2));
});
})()
), Clazz.new_(P$.IntegrationTest$lambda1.$init$, [this, null]))))));
var occupancy=Clazz.new_($I$(5,1).c$$S$I$S$IA$IA,["occupancy", text.length, data, start, end]);
org.junit.Assert.assertEquals$O$O("1.00", occupancy.getStringData$I(0));
org.junit.Assert.assertEquals$O$O("2.00", occupancy.getStringData$I(1));
org.junit.Assert.assertEquals$O$O("-1.57", occupancy.getStringData$I(2));
var bIsoOrEquiv=Clazz.new_($I$(5,1).c$$S$I$S$IA$IA,["iso", text.length, data, start, end]);
org.junit.Assert.assertEquals$O$O("1", bIsoOrEquiv.getStringData$I(0));
org.junit.Assert.assertEquals$O$O("2", bIsoOrEquiv.getStringData$I(1));
org.junit.Assert.assertEquals$O$O("-1.567891", bIsoOrEquiv.getStringData$I(2));
});

Clazz.newMeth(C$, 'testUnknownFeatureText$', function () {
var inputStream=$I$(4).getInputStream$S("cif/1acj.cif");
var text=$I$(2).readFromInputStream$java_io_InputStream(inputStream);
var cell=text.getBlocks$().get$I(0).getCell$();
var pdbxUniqueAxis=cell.getPdbxUniqueAxis$();
org.junit.Assert.assertEquals$O$O($I$(7).UNKNOWN, pdbxUniqueAxis.getValueKind$I(0));
org.junit.Assert.assertEquals$O$O("", pdbxUniqueAxis.get$I(0));
});

Clazz.newMeth(C$, 'testNotPresentFeatureText$', function () {
var inputStream=$I$(4).getInputStream$S("cif/1acj.cif");
var text=$I$(2).readFromInputStream$java_io_InputStream(inputStream);
var labelAltId=text.getFirstBlock$().getAtomSite$().getLabelAltId$();
org.junit.Assert.assertEquals$O$O($I$(7).NOT_PRESENT, labelAltId.getValueKind$I(0));
org.junit.Assert.assertEquals$O$O("", labelAltId.get$I(0));
});

Clazz.newMeth(C$, 'testUnknownFeatureBinary$', function () {
var inputStream=$I$(4).getInputStream$S("bcif/1acj.bcif");
var text=$I$(2).readFromInputStream$java_io_InputStream(inputStream);
var cell=text.getFirstBlock$().getCell$();
var pdbxUniqueAxis=cell.getPdbxUniqueAxis$();
org.junit.Assert.assertEquals$O$O($I$(7).UNKNOWN, pdbxUniqueAxis.getValueKind$I(0));
org.junit.Assert.assertEquals$O$O("", pdbxUniqueAxis.get$I(0));
});

Clazz.newMeth(C$, 'testNotPresentFeatureBinary$', function () {
var inputStream=$I$(4).getInputStream$S("bcif/1acj.bcif");
var text=$I$(2).readFromInputStream$java_io_InputStream(inputStream);
var labelAltId=text.getFirstBlock$().getAtomSite$().getLabelAltId$();
org.junit.Assert.assertEquals$O$O($I$(7).NOT_PRESENT, labelAltId.getValueKind$I(0));
org.junit.Assert.assertEquals$O$O("", labelAltId.get$I(0));
});

Clazz.newMeth(C$, 'roundTripViaBinary$', function () {
for (var id, $id = $I$(4).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.roundTripViaBinary$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'roundTripViaBinary$S', function (testCase) {
var originalContent= String.instantialize($I$(4).getBytes$S("snapshot/" + testCase + ".cif" ));
var originalFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("snapshot/" + testCase + ".cif" ));
var bcifBytes=$I$(2).writeBinary$org_rcsb_cif_api_CifFile(originalFile);
var bcifFile=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(3,1).c$$BA,[bcifBytes]));
var copyBytes=$I$(2).writeText$org_rcsb_cif_api_CifFile(bcifFile);
var copyContent= String.instantialize(copyBytes);
P$.TestHelper.assertEqualsLoosely$S$S(originalContent, copyContent);
}, p$1);

Clazz.newMeth(C$, 'roundTripViaText$', function () {
var match=0;
for (var id, $id = $I$(4).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
if (p$1.roundTripViaText$S.apply(this, [id])) {
match++;
}}
org.junit.Assert.assertTrue$S$Z("unexpected differences in files", match >= 3);
});

Clazz.newMeth(C$, 'roundTripViaText$S', function (testCase) {
var original=$I$(4).getBytes$S("snapshot/" + testCase + ".bcif" );
var originalFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("snapshot/" + testCase + ".bcif" ));
var cifBytes=$I$(2).writeText$org_rcsb_cif_api_CifFile(originalFile);
var cifFile=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(3,1).c$$BA,[cifBytes]));
var output=$I$(2).writeBinary$org_rcsb_cif_api_CifFile(cifFile);
return $I$(8).equals$BA$BA(original, output);
}, p$1);

Clazz.newMeth(C$, 'readCifWriteBcif$', function () {
var match=0;
for (var id, $id = $I$(4).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
if (p$1.readCifWriteBcif$S.apply(this, [id])) {
match++;
}}
org.junit.Assert.assertTrue$S$Z("unexpected differences in files", match >= 3);
});

Clazz.newMeth(C$, 'readCifWriteBcif$S', function (testCase) {
var original=$I$(4).getBytes$S("snapshot/" + testCase + ".bcif" );
var originalFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("snapshot/" + testCase + ".cif" ));
var output=$I$(2).writeBinary$org_rcsb_cif_api_CifFile(originalFile);
return $I$(8).equals$BA$BA(original, output);
}, p$1);

Clazz.newMeth(C$, 'readBcifWriteCif$', function () {
for (var id, $id = $I$(4).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.readBcifWriteCif$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'readBcifWriteCif$S', function (testCase) {
var originalContent= String.instantialize($I$(4).getBytes$S("snapshot/" + testCase + ".cif" ));
var originalFile=$I$(2).readFromInputStream$java_io_InputStream($I$(4).getInputStream$S("snapshot/" + testCase + ".bcif" ));
var copyContent= String.instantialize($I$(2).writeText$org_rcsb_cif_api_CifFile(originalFile));
org.junit.Assert.assertEquals$O$O(originalContent, copyContent);
}, p$1);
C$.__ANN__ = [[['M:testBehaviorForEmptyFiles','void'],['@Test']],
  [['M:testVectorAndMatrixBehavior','.'],['@Test']],
  [['M:testUndefinedColumnBehavior','.'],['@Test']],
  [['M:testNumberFormat','.'],['@Test']],
  [['M:testUnknownFeatureText','.'],['@Test']],
  [['M:testNotPresentFeatureText','.'],['@Test']],
  [['M:testUnknownFeatureBinary','.'],['@Test']],
  [['M:testNotPresentFeatureBinary','.'],['@Test']],
  [['M:roundTripViaBinary','.'],['@Test']],
  [['M:roundTripViaText','.'],['@Test']],
  [['M:readCifWriteBcif','.'],['@Test']],
  [['M:readBcifWriteCif','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
