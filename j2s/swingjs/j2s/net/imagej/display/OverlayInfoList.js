(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'java.util.LinkedList','net.imagej.display.OverlayInfo','java.util.Collections','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OverlayInfoList");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['list','java.util.LinkedList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.list=Clazz.new_(1,{E:"net.imagej.display.OverlayInfo"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getOverlayInfoCount$', function () {
return this.list.size$();
});

Clazz.newMeth(C$, 'getOverlayInfo$I', function (i) {
return this.list.get$I(i);
});

Clazz.newMeth(C$, 'addOverlayInfo$I$net_imagej_display_OverlayInfo', function (i, info) {
if (this.findIndex$net_imagej_display_OverlayInfo(info) >= 0) return false;
this.list.add$I$TE(i, info);
return true;
});

Clazz.newMeth(C$, 'addOverlayInfo$net_imagej_display_OverlayInfo', function (info) {
var last=this.list.size$();
return this.addOverlayInfo$I$net_imagej_display_OverlayInfo(last, info);
});

Clazz.newMeth(C$, 'addOverlay$I$net_imagej_overlay_Overlay', function (i, overlay) {
if (this.findIndex$net_imagej_overlay_Overlay(overlay) >= 0) return false;
var info=Clazz.new_($I$(2,1).c$$net_imagej_overlay_Overlay,[overlay]);
return this.addOverlayInfo$I$net_imagej_display_OverlayInfo(i, info);
});

Clazz.newMeth(C$, 'addOverlay$net_imagej_overlay_Overlay', function (overlay) {
var last=this.list.size$();
return this.addOverlay$I$net_imagej_overlay_Overlay(last, overlay);
});

Clazz.newMeth(C$, 'replaceOverlayInfo$I$net_imagej_display_OverlayInfo', function (i, info) {
if (this.deleteOverlayInfo$I(i)) return this.addOverlayInfo$I$net_imagej_display_OverlayInfo(i, info);
return false;
});

Clazz.newMeth(C$, 'replaceOverlay$I$net_imagej_overlay_Overlay', function (i, overlay) {
var info=Clazz.new_($I$(2,1).c$$net_imagej_overlay_Overlay,[overlay]);
return this.replaceOverlayInfo$I$net_imagej_display_OverlayInfo(i, info);
});

Clazz.newMeth(C$, 'deleteOverlayInfo$I', function (i) {
var info=this.list.remove$I(i);
if (info == null ) return false;
return true;
});

Clazz.newMeth(C$, 'deleteOverlayInfo$net_imagej_display_OverlayInfo', function (info) {
var index=this.findIndex$net_imagej_display_OverlayInfo(info);
if (index < 0) return false;
return this.deleteOverlayInfo$I(index);
});

Clazz.newMeth(C$, 'deleteOverlay$net_imagej_overlay_Overlay', function (overlay) {
var index=this.findIndex$net_imagej_overlay_Overlay(overlay);
if (index < 0) return false;
return this.deleteOverlayInfo$I(index);
});

Clazz.newMeth(C$, 'deleteAll$', function () {
var num=this.list.size$();
for (var i=0; i < num; i++) this.deleteOverlayInfo$I(0);

});

Clazz.newMeth(C$, 'findIndex$net_imagej_display_OverlayInfo', function (info) {
for (var i=0; i < this.list.size$(); i++) if (info === this.list.get$I(i) ) return i;

return -1;
});

Clazz.newMeth(C$, 'findIndex$net_imagej_overlay_Overlay', function (overlay) {
for (var i=0; i < this.list.size$(); i++) if (overlay === this.list.get$I(i).getOverlay$() ) return i;

return -1;
});

Clazz.newMeth(C$, 'sort$', function () {
$I$(3).sort$java_util_List$java_util_Comparator(this.list, ((P$.OverlayInfoList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "OverlayInfoList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$net_imagej_display_OverlayInfo$net_imagej_display_OverlayInfo','compare$','compare$TT$TT'], function (arg0, arg1) {
return arg0.toString().compareTo$S(arg1.toString());
});
})()
), Clazz.new_(P$.OverlayInfoList$1.$init$, [this, null])));
});

Clazz.newMeth(C$, 'selectedIndices$', function () {
var selCount=0;
for (var i=0; i < this.getOverlayInfoCount$(); i++) {
if (this.getOverlayInfo$I(i).isSelected$()) selCount++;
}
var selectedIndices=Clazz.array(Integer.TYPE, [selCount]);
var index=0;
for (var i=0; i < this.getOverlayInfoCount$(); i++) {
if (this.getOverlayInfo$I(i).isSelected$()) selectedIndices[index++]=i;
}
return selectedIndices;
});

Clazz.newMeth(C$, 'deselectAll$', function () {
for (var i=0; i < this.getOverlayInfoCount$(); i++) {
this.getOverlayInfo$I(i).setSelected$Z(false);
}
});

Clazz.newMeth(C$, 'selectedOverlays$', function () {
var overlays=Clazz.new_(1,{E:"net.imagej.overlay.Overlay"},$I$(4,1));
for (var i=0; i < this.getOverlayInfoCount$(); i++) {
var info=this.getOverlayInfo$I(i);
if (info.isSelected$()) overlays.add$TE(info.getOverlay$());
}
return overlays;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
