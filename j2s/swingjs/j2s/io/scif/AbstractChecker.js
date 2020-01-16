(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'io.scif.config.SCIFIOConfig','io.scif.util.FormatTools','org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractChecker", null, 'io.scif.AbstractHasFormat', 'io.scif.Checker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['handles','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return true;
});

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return true;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location', function (loc) {
return this.isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(loc, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (loc, config) {
var open=config.checkerIsOpen$();
if (!this.suffixSufficient$() && !open ) return false;
if (this.suffixNecessary$() || this.suffixSufficient$() ) {
var suffixMatch=$I$(2).checkSuffix$S$SA(loc.getName$(), this.getFormat$().getSuffixes$());
if (this.suffixNecessary$() && !suffixMatch ) return false;
if (suffixMatch && this.suffixSufficient$() ) return true;
}if (!open) return false;
try {
var handle=this.handles.readBuffer$org_scijava_io_location_Location(loc);
try {
if (handle == null ) return false;
return this.isFormat$org_scijava_io_handle_DataHandle(handle);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log$().debug$O$Throwable("", exc);
return false;
} else {
throw exc;
}
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
return false;
});

Clazz.newMeth(C$, 'checkHeader$BA', function (block) {
var loc=Clazz.new_($I$(3,1).c$$BA,[block]);
try {
var handle=this.handles.create$TD(loc);
try {
return this.isFormat$org_scijava_io_handle_DataHandle(handle);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().debug$O$Throwable("", e);
} else {
throw e;
}
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
return false;
});
C$.$getAnn$ = function(){ return [
[['handles','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
