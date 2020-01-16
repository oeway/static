(function(){var P$=Clazz.newPackage("org.scijava"),I$=[[0,'org.scijava.util.StringMaker','org.scijava.MenuPath']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractUIDetails", null, 'org.scijava.AbstractBasicDetails', 'org.scijava.UIDetails');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.menuRoot="app";
this.priority=0.0;
this.enabled=true;
this.visible=true;
}, 1);

C$.$fields$=[['Z',['selectable','selected','enabled','visible'],'D',['priority'],'S',['menuRoot','iconPath','selectionGroup'],'O',['menuPath','org.scijava.MenuPath']]]

Clazz.newMeth(C$, 'toString', function () {
var sm=Clazz.new_($I$(1,1));
sm.append$S(C$.superclazz.prototype.toString.apply(this, []));
sm.append$S$O("menu", this.menuPath == null  ? null : this.menuPath.getMenuString$());
sm.append$S$O("iconPath", this.iconPath);
sm.append$S$O$O("priority", new Double(this.priority), new Integer(2147483647));
if (this.selectable) {
sm.append$S$O("selectionGroup", this.selectionGroup);
sm.append$S$O("selected", new Boolean(this.selected));
}sm.append$S$O("enabled", new Boolean(this.enabled));
return sm.toString();
});

Clazz.newMeth(C$, 'getMenuPath$', function () {
return this.menuPath;
});

Clazz.newMeth(C$, 'getMenuRoot$', function () {
return this.menuRoot;
});

Clazz.newMeth(C$, 'getIconPath$', function () {
return this.iconPath;
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.enabled;
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.visible;
});

Clazz.newMeth(C$, 'isSelectable$', function () {
return this.selectable;
});

Clazz.newMeth(C$, 'getSelectionGroup$', function () {
return this.selectionGroup;
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'setMenuPath$org_scijava_MenuPath', function (menuPath) {
if (menuPath == null ) {
this.menuPath=Clazz.new_($I$(2,1));
} else {
this.menuPath=menuPath;
}});

Clazz.newMeth(C$, 'setMenuRoot$S', function (menuRoot) {
this.menuRoot=menuRoot;
});

Clazz.newMeth(C$, 'setIconPath$S', function (iconPath) {
this.iconPath=iconPath;
});

Clazz.newMeth(C$, 'setEnabled$Z', function (enabled) {
this.enabled=enabled;
});

Clazz.newMeth(C$, 'setVisible$Z', function (visible) {
this.visible=visible;
});

Clazz.newMeth(C$, 'setSelectable$Z', function (selectable) {
this.selectable=selectable;
});

Clazz.newMeth(C$, 'setSelectionGroup$S', function (selectionGroup) {
this.selectionGroup=selectionGroup;
});

Clazz.newMeth(C$, 'setSelected$Z', function (selected) {
this.selected=selected;
});

Clazz.newMeth(C$, 'getPriority$', function () {
return this.priority;
});

Clazz.newMeth(C$, 'setPriority$D', function (priority) {
this.priority=priority;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
