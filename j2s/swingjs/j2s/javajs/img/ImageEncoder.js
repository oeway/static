(function(){var P$=Clazz.newPackage("javajs.img"),I$=[[0,'Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageEncoder", null, null, 'javajs.api.GenericImageEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.width=-1;
this.height=-1;
this.quality=-1;
this.doClose=true;
}, 1);

C$.$fields$=[['Z',['logging','doClose'],'I',['width','height','quality'],'S',['date'],'O',['out','javajs.util.OC','pixels','int[]']]]

Clazz.newMeth(C$, ['createImage$S$javajs_util_OC$java_util_Map','createImage$'], function (type, out, params) {
this.out=out;
this.logging=($I$(1).TRUE === params.get$O("logging") );
this.width=(params.get$O("imageWidth")).intValue$();
this.height=(params.get$O("imageHeight")).intValue$();
this.pixels=params.get$O("imagePixels");
this.date=params.get$O("date");
var q=params.get$O("quality");
this.quality=(q == null  ? -1 : q.intValue$());
this.setParams$java_util_Map(params);
this.generate$();
this.close$();
return this.doClose;
});

Clazz.newMeth(C$, 'putString$S', function (s) {
var b=s.getBytes$();
this.out.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'putByte$I', function (b) {
this.out.writeByteAsInt$I(b);
});

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
