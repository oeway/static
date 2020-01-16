(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractHasFormat", null, 'io.scif.AbstractSCIFIOPlugin', 'io.scif.HasFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$formatService','io.scif.services.FormatService']]]

Clazz.newMeth(C$, 'getFormat$', function () {
return this.$formatService.getFormatFromComponent$Class(this.getClass$());
});

Clazz.newMeth(C$, 'getFormatName$', function () {
var format=this.getFormat$();
if (format == null ) return "Format for this metadata could not be determined.";
return format.getFormatName$();
});

Clazz.newMeth(C$, 'asBrowsableLocation$org_scijava_io_location_Location', function (loc) {
if (Clazz.instanceOf(loc, "org.scijava.io.location.BrowsableLocation")) {
return loc;
}throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["The format: '" + this.getFormatName$() + "' requires a browsable Location!" ]);
});

Clazz.newMeth(C$, 'asBrowsableLocation$org_scijava_io_handle_DataHandle', function (handle) {
return this.asBrowsableLocation$org_scijava_io_location_Location(handle.get$());
});
C$.$getAnn$ = function(){ return [
[['$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
