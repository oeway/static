(function(){var P$=Clazz.newPackage("io.scif.gui"),p$1={},I$=[[0,'javax.swing.filechooser.FileFilter','io.scif.gui.FormatFileFilter','javax.swing.JFileChooser','io.scif.gui.PreviewPane','Thread','javax.swing.SwingUtilities','io.scif.gui.ComboFileFilter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultGUIService", null, 'org.scijava.service.AbstractService', 'io.scif.gui.GUIService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ALL_TYPES="All supported file types";
}, 1);

C$.$fields$=[['S',['ALL_TYPES']]]

Clazz.newMeth(C$, 'buildFileFilters$java_util_Collection', function (formats) {
var filters=Clazz.array($I$(1), [formats.size$()]);
var i=0;
for (var f, $f = formats.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
filters[i++]=Clazz.new_($I$(2,1).c$$io_scif_Format,[f]);
}
return filters;
});

Clazz.newMeth(C$, 'buildFileChooser$java_util_Collection', function (formats) {
return this.buildFileChooser$java_util_Collection$Z(formats, true);
});

Clazz.newMeth(C$, 'buildFileChooser$java_util_Collection$Z', function (formats, preview) {
return this.buildFileChooser$javax_swing_filechooser_FileFilterA$Z(this.buildFileFilters$java_util_Collection(formats), preview);
});

Clazz.newMeth(C$, 'buildFileChooser$javax_swing_filechooser_FileFilterA', function (filters) {
return this.buildFileChooser$javax_swing_filechooser_FileFilterA$Z(filters, true);
});

Clazz.newMeth(C$, 'buildFileChooser$javax_swing_filechooser_FileFilterA$Z', function (filters, preview) {
var jfc=Clazz.array($I$(3), [1]);
var r=((P$.DefaultGUIService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultGUIService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var fc=Clazz.new_($I$(3,1).c$$S,[System.getProperty$S("user.dir")]);
var ff=p$1.sortFilters$javax_swing_filechooser_FileFilterA.apply(this.b$['io.scif.gui.DefaultGUIService'], [this.$finals$.filters]);
var combo=null;
if (ff.length > 0 && Clazz.instanceOf(ff[0], "io.scif.gui.ComboFileFilter") ) {
var cff=ff[0];
if ("All supported file types".equals$O(cff.getDescription$())) combo=cff;
}if (combo == null ) {
combo=p$1.makeComboFilter$javax_swing_filechooser_FileFilterA.apply(this.b$['io.scif.gui.DefaultGUIService'], [ff]);
if (combo != null ) fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(combo);
}for (var filter, $filter = 0, $$filter = ff; $filter<$$filter.length&&((filter=($$filter[$filter])),1);$filter++) fc.addChoosableFileFilter$javax_swing_filechooser_FileFilter(filter);

if (combo != null ) fc.setFileFilter$javax_swing_filechooser_FileFilter(combo);
if (this.$finals$.preview) Clazz.new_($I$(4,1).c$$org_scijava_Context$javax_swing_JFileChooser,[this.b$['org.scijava.service.AbstractService'].getContext$.apply(this.b$['org.scijava.service.AbstractService'], []), fc]);
this.$finals$.jfc[0]=fc;
});
})()
), Clazz.new_(P$.DefaultGUIService$1.$init$, [this, {jfc:jfc,filters:filters,preview:preview}]));
if ($I$(5).currentThread$().getName$().startsWith$S("AWT-EventQueue")) {
r.run$();
} else {
try {
$I$(6).invokeAndWait$Runnable(r);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var exc = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var exc = e$$;
{
return null;
}
} else {
throw e$$;
}
}
}return jfc[0];
});

Clazz.newMeth(C$, 'makeComboFilter$javax_swing_filechooser_FileFilterA', function (filters) {
return filters.length > 1 ? Clazz.new_($I$(7,1).c$$javax_swing_filechooser_FileFilterA$S,[filters, "All supported file types"]) : null;
}, p$1);

Clazz.newMeth(C$, 'sortFilters$javax_swing_filechooser_FileFilterA', function (filters) {
filters=$I$(7).sortFilters$javax_swing_filechooser_FileFilterA(filters);
p$1.shuffleAllTypesToFront$javax_swing_filechooser_FileFilterA.apply(this, [filters]);
return filters;
}, p$1);

Clazz.newMeth(C$, 'shuffleAllTypesToFront$javax_swing_filechooser_FileFilterA', function (filters) {
for (var i=0; i < filters.length; i++) {
if (Clazz.instanceOf(filters[i], "io.scif.gui.ComboFileFilter")) {
if ("All supported file types".equals$O(filters[i].getDescription$())) {
var f=filters[i];
for (var j=i; j >= 1; j--) filters[j]=filters[j - 1];

filters[0]=f;
break;
}}}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.gui.DefaultGUIService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
