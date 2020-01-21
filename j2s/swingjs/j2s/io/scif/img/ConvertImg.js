(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'org.scijava.Context','io.scif.config.SCIFIOConfig',['io.scif.config.SCIFIOConfig','.ImgMode'],'io.scif.img.ImgOpener','org.scijava.io.location.FileLocation','io.scif.img.ImgSaver','java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ConvertImg");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.j2sHeadless=true;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['Z',['j2sHeadless']]]

Clazz.newMeth(C$, 'readImageFromUrl', function (name, url) {
return new Promise(function (resolve, reject) {
    // Simulate a call to Dropbox or other service that can
    // return an image as an ArrayBuffer.
    var xhr = new XMLHttpRequest();
    // Use JSFiddle logo as a sample image to avoid complicating
    // this example with cross-domain issues.
    xhr.open( "GET", url, true );

    // Ask for the result as an ArrayBuffer.
    xhr.responseType = "arraybuffer";

    xhr.onload = function( e ) {
    try{
        // Obtain a blob: URL for the image data.
        var arrayBufferView = new Int8Array( this.response );
        var img = io.scif.img.ConvertImg.readImage(name, arrayBufferView);
        resolve(img)
    }
    catch(e){
        reject(e)
    }
    }
    xhr.onerror = reject;
    xhr.send();
})

}, 1);

Clazz.newMeth(C$, 'readImage', function (name, fileBytes) {
var byte_loation = Clazz.new_(Clazz.load("org.scijava.io.location.BytesLocation").c$$S$BA, [name, fileBytes]);
var c=Clazz.new_($I$(1,1).c$$I,[3]);
var config=Clazz.new_($I$(2,1)).imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(3).ARRAY]);
var imageOpener=Clazz.new_($I$(4,1).c$$org_scijava_Context,[c]);
var imgs=imageOpener.openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(byte_loation, config);
c.dispose$();
return imgs;
}, 1);

Clazz.newMeth(C$, 'convertImg$java_io_File', function (file) {
var c=Clazz.new_($I$(1,1).c$$I,[3]);
var config=Clazz.new_($I$(2,1)).imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(3).ARRAY]);
System.out.println$S("reading " + file);
var cl=Clazz.getClass($I$(4));
var file_location = Clazz.new_($I$(5,1).c$$S,[file.getAbsolutePath$()]);
var img=Clazz.new_($I$(4,1).c$$org_scijava_Context,[c]).openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(file_location, config).get$I(0);
c.dispose$();
System.out.println$S("context disposed");
return img;
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
var file=Clazz.new_($I$(7,1).c$$S,["data/benchmark_v1_2018_x64y64z5c2s1t1.ics"]);
System.out.println$S("reading " + file.getAbsolutePath$());
C$.convertImg$java_io_File(file);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
