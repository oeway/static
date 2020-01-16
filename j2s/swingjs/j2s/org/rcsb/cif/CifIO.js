(function(){var P$=Clazz.newPackage("org.rcsb.cif"),I$=[[0,'org.rcsb.cif.CifOptions','java.net.URL','java.nio.file.Files','java.io.BufferedInputStream',['org.rcsb.cif.CifOptions','.CifOptionsBuilder','.FileFormat'],'java.util.zip.GZIPInputStream','org.rcsb.cif.api.BinaryCifReader','org.rcsb.cif.text.TextCifReader','org.rcsb.cif.api.BinaryCifWriter','org.rcsb.cif.text.TextCifWriter','java.util.zip.GZIPOutputStream','java.io.ByteArrayOutputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CifIO");
C$.DEFAULT_OPTIONS=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.DEFAULT_OPTIONS=$I$(1).builder$().build$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'readById$S', function (pdbId) {
return C$.readById$S$org_rcsb_cif_CifOptions(pdbId, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'readById$S$org_rcsb_cif_CifOptions', function (pdbId, options) {
return C$.readFromURL$java_net_URL$org_rcsb_cif_CifOptions(Clazz.new_($I$(2,1).c$$S,[String.format$S$OA(options.getFetchUrl$(), [pdbId.toLowerCase$()])]), options);
}, 1);

Clazz.newMeth(C$, 'readFromURL$java_net_URL', function (url) {
return C$.readFromURL$java_net_URL$org_rcsb_cif_CifOptions(url, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'readFromURL$java_net_URL$org_rcsb_cif_CifOptions', function (url, options) {
return C$.readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions(url.openStream$(), options);
}, 1);

Clazz.newMeth(C$, 'readFromPath$java_nio_file_Path', function (path) {
return C$.readFromPath$java_nio_file_Path$org_rcsb_cif_CifOptions(path, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'readFromPath$java_nio_file_Path$org_rcsb_cif_CifOptions', function (path, options) {
return C$.readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions($I$(3).newInputStream$java_nio_file_Path$java_nio_file_OpenOptionA(path, []), options);
}, 1);

Clazz.newMeth(C$, 'readFromInputStream$java_io_InputStream', function (inputStream) {
return C$.readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions(inputStream, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions', function (inputStream, options) {
if (!(Clazz.instanceOf(inputStream, "java.io.BufferedInputStream")) && !(Clazz.instanceOf(inputStream, "java.io.ByteArrayInputStream")) ) {
inputStream=Clazz.new_($I$(4,1).c$$java_io_InputStream$I,[inputStream, 65536]);
}var fileFormat=options.getFileFormat$();
if (fileFormat == null ) {
return C$.readFromInputStreamByGuessingFileFormat$java_io_InputStream$org_rcsb_cif_CifOptions(inputStream, options);
} else {
return C$.readFromInputStreamWithSpecifiedFileFormat$java_io_InputStream$org_rcsb_cif_CifOptions$org_rcsb_cif_CifOptions_CifOptionsBuilder_FileFormat(inputStream, options, fileFormat);
}}, 1);

Clazz.newMeth(C$, 'readFromInputStreamWithSpecifiedFileFormat$java_io_InputStream$org_rcsb_cif_CifOptions$org_rcsb_cif_CifOptions_CifOptionsBuilder_FileFormat', function (inputStream, options, fileFormat) {
try {
if (fileFormat === $I$(5).BCIF_GZIPPED  || fileFormat === $I$(5).CIF_GZIPPED  ) {
inputStream=Clazz.new_($I$(6,1).c$$java_io_InputStream$I,[inputStream, 65536]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.util.zip.ZipException")){
inputStream.close$();
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$Exception,["Not in GZIP format", e]);
} else {
throw e;
}
}
if (fileFormat === $I$(5).BCIF_GZIPPED  || fileFormat === $I$(5).BCIF_PLAIN  ) {
return Clazz.new_($I$(7,1).c$$org_rcsb_cif_CifOptions,[options]).read$java_io_InputStream(inputStream);
} else {
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_CifOptions,[options]).read$java_io_InputStream(inputStream);
}}, 1);

Clazz.newMeth(C$, 'readFromInputStreamByGuessingFileFormat$java_io_InputStream$org_rcsb_cif_CifOptions', function (inputStream, options) {
var magicNumber=C$.readMagicNumber$java_io_InputStream(inputStream);
var gzipped=31 == magicNumber;
if (gzipped) {
return C$.readFromInputStream$java_io_InputStream$org_rcsb_cif_CifOptions(Clazz.new_($I$(6,1).c$$java_io_InputStream$I,[inputStream, 65536]), options);
}if (magicNumber == 131) {
return Clazz.new_($I$(7,1).c$$org_rcsb_cif_CifOptions,[options]).read$java_io_InputStream(inputStream);
} else if (magicNumber == 100) {
return Clazz.new_($I$(8,1).c$$org_rcsb_cif_CifOptions,[options]).read$java_io_InputStream(inputStream);
} else {
inputStream.close$();
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S,["unable to determine encoding - magic number was " + magicNumber + " - neither gzip, nor BinaryCIF, nor mmCIF" ]);
}}, 1);

Clazz.newMeth(C$, 'readMagicNumber$java_io_InputStream', function (inputStream) {
inputStream.mark$I(1);
var magicNumber=inputStream.read$() & 255;
inputStream.reset$();
return magicNumber;
}, 1);

Clazz.newMeth(C$, 'writeBinary$org_rcsb_cif_api_CifFile$java_nio_file_Path', function (cifFile, outputFile) {
C$.writeBinary$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions(cifFile, outputFile, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'writeBinary$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions', function (cifFile, outputFile, options) {
$I$(3).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(outputFile, C$.writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(cifFile, options), []);
}, 1);

Clazz.newMeth(C$, 'writeBinary$org_rcsb_cif_api_CifFile', function (cifFile) {
return C$.writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(cifFile, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions', function (cifFile, options) {
var raw=Clazz.new_($I$(9,1).c$$org_rcsb_cif_CifOptions,[options]).write$org_rcsb_cif_api_CifFile(cifFile);
return options.isGzip$() ? C$.compress$BA(raw) : raw;
}, 1);

Clazz.newMeth(C$, 'writeText$org_rcsb_cif_api_CifFile$java_nio_file_Path', function (cifFile, outputFile) {
C$.writeText$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions(cifFile, outputFile, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'writeText$org_rcsb_cif_api_CifFile$java_nio_file_Path$org_rcsb_cif_CifOptions', function (cifFile, outputFile, options) {
$I$(3).write$java_nio_file_Path$BA$java_nio_file_OpenOptionA(outputFile, C$.writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(cifFile, options), []);
}, 1);

Clazz.newMeth(C$, 'writeText$org_rcsb_cif_api_CifFile', function (cifFile) {
return C$.writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(cifFile, C$.DEFAULT_OPTIONS);
}, 1);

Clazz.newMeth(C$, 'writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions', function (cifFile, options) {
var raw=Clazz.new_($I$(10,1).c$$org_rcsb_cif_CifOptions,[options]).write$org_rcsb_cif_api_CifFile(cifFile);
return options.isGzip$() ? C$.compress$BA(raw) : raw;
}, 1);

Clazz.newMeth(C$, 'compress$BA', function (bytes) {
var output;
try {
var byteStream=Clazz.new_($I$(12,1).c$$I,[bytes.length]);
/*try*/ {
try {
var zipStream=Clazz.new_($I$(11,1).c$$java_io_OutputStream,[byteStream]);
/*try*/ {
zipStream.write$BA(bytes);
}
}finally{/*res*/
try{zipStream&&zipStream.close$&&zipStream.close$()}catch(_){}}
output=byteStream.toByteArray$();
}
}finally{/*res*/
try{byteStream&&byteStream.close$&&byteStream.close$()}catch(_){}}
return output;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:23 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
