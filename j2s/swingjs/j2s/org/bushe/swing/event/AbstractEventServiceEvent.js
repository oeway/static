(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'org.bushe.swing.event.PublicationStatus']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractEventServiceEvent", null, null, ['org.bushe.swing.event.EventServiceEvent', 'org.bushe.swing.event.PublicationStatusTracker']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.source=null;
this.stateLock= Clazz.new_();
this.publicationStatus=$I$(1).Unpublished;
}, 1);

C$.$fields$=[['O',['source','java.lang.Object','+stateLock','publicationStatus','org.bushe.swing.event.PublicationStatus']]]

Clazz.newMeth(C$, 'c$$O', function (source) {
;C$.$init$.apply(this);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getPublicationStatus$', function () {
{
return this.publicationStatus;
}});

Clazz.newMeth(C$, 'setPublicationStatus$org_bushe_swing_event_PublicationStatus', function (status) {
{
this.publicationStatus=status;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
