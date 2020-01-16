(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[[0,'java.io.BufferedReader','java.io.InputStreamReader','java.util.stream.Collectors','java.util.ArrayList','org.rcsb.cif.text.TokenizerState','org.rcsb.cif.generic.TextFile','org.rcsb.cif.generic.BaseBlock','org.rcsb.cif.model.BaseCategory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TextCifReader", null, null, 'org.rcsb.cif.text.TextReader');

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

Clazz.newMeth(C$, 'read$java_io_InputStream', function (inputStream) {
var content=Clazz.new_($I$(1,1).c$$java_io_Reader,[Clazz.new_($I$(2,1).c$$java_io_InputStream,[inputStream])]).lines$().collect$java_util_stream_Collector($I$(3).joining$CharSequence("\n"));
inputStream.close$();
return this.readText$S(content);
});

Clazz.newMeth(C$, 'readText$S', function (data) {
if (data.isEmpty$()) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S,["Cannot parse empty file."]);
}var dataBlocks=Clazz.new_($I$(4,1));
Clazz.new_($I$(5,1).c$$org_rcsb_cif_text_TextReader$S,[this, data]).getDataBlocks$java_util_List(dataBlocks);
return Clazz.new_($I$(6,1).c$$java_util_List,[dataBlocks]);
});

Clazz.newMeth(C$, 'createBlock$java_util_Map$S', function (categories, header) {
return Clazz.new_($I$(7,1).c$$java_util_Map$S,[categories, header]);
});

Clazz.newMeth(C$, 'addBlock$org_rcsb_cif_model_Block$java_util_List$java_util_List', function (block, dataBlocks, saveFrames) {
(dataBlocks).add$TE(block);
(block).getSaveFrames$().addAll$java_util_Collection(saveFrames);
});

Clazz.newMeth(C$, 'createCategory$S$java_util_Map', function (name, columns) {
return Clazz.new_($I$(8,1).c$$S$java_util_Map,[name, columns]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
