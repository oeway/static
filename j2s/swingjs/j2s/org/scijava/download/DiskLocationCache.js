(function(){var P$=Clazz.newPackage("org.scijava.download"),p$1={},I$=[[0,'java.io.File','org.scijava.io.location.FileLocation','org.scijava.util.DigestUtils','org.scijava.util.FileUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DiskLocationCache", null, null, 'org.scijava.download.LocationCache');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.baseDir=Clazz.new_($I$(1,1).c$$S,[System.getProperty$S("user.home") + $I$(1).separator + ".scijava" + $I$(1).separator + "cache" + $I$(1).separator ]);
}, 1);

C$.$fields$=[['Z',['cacheFileLocations'],'O',['baseDir','java.io.File']]]

Clazz.newMeth(C$, 'getBaseDirectory$', function () {
return this.baseDir;
});

Clazz.newMeth(C$, 'setBaseDirectory$java_io_File', function (baseDir) {
if (!baseDir.isDirectory$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a directory: " + baseDir]);
}this.baseDir=baseDir;
});

Clazz.newMeth(C$, 'isFileLocationCachingEnabled$', function () {
return this.cacheFileLocations;
});

Clazz.newMeth(C$, 'setFileLocationCachingEnabled$Z', function (enabled) {
this.cacheFileLocations=enabled;
});

Clazz.newMeth(C$, 'canCache$org_scijava_io_location_Location', function (source) {
if (Clazz.instanceOf(source, "org.scijava.io.location.FileLocation") && !this.isFileLocationCachingEnabled$() ) {
return false;
}return source.getURI$() != null ;
});

Clazz.newMeth(C$, 'cachedLocation$org_scijava_io_location_Location', function (source) {
if (!this.canCache$org_scijava_io_location_Location(source)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Uncacheable source: " + source]);
}return Clazz.new_($I$(2,1).c$$java_io_File,[p$1.cachedData$org_scijava_io_location_Location.apply(this, [source])]);
});

Clazz.newMeth(C$, 'loadChecksum$org_scijava_io_location_Location', function (source) {
var cachedChecksum=p$1.cachedChecksum$org_scijava_io_location_Location.apply(this, [source]);
if (!cachedChecksum.exists$()) return null;
return $I$(3).string$BA($I$(4).readFile$java_io_File(cachedChecksum));
});

Clazz.newMeth(C$, 'saveChecksum$org_scijava_io_location_Location$S', function (source, checksum) {
var cachedChecksum=p$1.cachedChecksum$org_scijava_io_location_Location.apply(this, [source]);
$I$(4).writeFile$java_io_File$BA(cachedChecksum, $I$(3).bytes$S(checksum));
});

Clazz.newMeth(C$, 'cachedData$org_scijava_io_location_Location', function (source) {
return p$1.cachedFile$org_scijava_io_location_Location$S.apply(this, [source, ".data"]);
}, p$1);

Clazz.newMeth(C$, 'cachedChecksum$org_scijava_io_location_Location', function (source) {
return p$1.cachedFile$org_scijava_io_location_Location$S.apply(this, [source, ".checksum"]);
}, p$1);

Clazz.newMeth(C$, 'cachedFile$org_scijava_io_location_Location$S', function (source, suffix) {
var hexCode=Integer.toHexString$I(source.hashCode$());
return Clazz.new_($I$(1,1).c$$java_io_File$S,[this.getBaseDirectory$(), hexCode + suffix]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
