(function(){var P$=Clazz.newPackage("org.scijava.menu"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "MenuService", null, null, 'org.scijava.service.SciJavaService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getMenu$', function () {
return this.getMenu$S("app");
});

Clazz.newMeth(C$, 'createMenus$org_scijava_menu_MenuCreator$TT', function (creator, menu) {
return this.createMenus$S$org_scijava_menu_MenuCreator$TT("app", creator, menu);
});

Clazz.newMeth(C$, 'createMenus$S$org_scijava_menu_MenuCreator$TT', function (menuRoot, creator, menu) {
creator.createMenus$(this.getMenu$S(menuRoot), menu);
return menu;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
