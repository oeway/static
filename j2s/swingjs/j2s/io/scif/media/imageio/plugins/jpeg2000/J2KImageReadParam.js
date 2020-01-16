(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.jpeg2000"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "J2KImageReadParam", null, 'javax.imageio.ImageReadParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decodingRate=1.7976931348623157E308;
this.resolution=-1;
}, 1);

C$.$fields$=[['D',['decodingRate'],'I',['resolution']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setDecodingRate$D', function (rate) {
this.decodingRate=rate;
});

Clazz.newMeth(C$, 'getDecodingRate$', function () {
return this.decodingRate;
});

Clazz.newMeth(C$, 'setResolution$I', function (resolution) {
this.resolution=Math.max(resolution, -1);
});

Clazz.newMeth(C$, 'getResolution$', function () {
return this.resolution;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
