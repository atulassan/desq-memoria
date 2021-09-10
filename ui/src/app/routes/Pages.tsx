import * as React from "react";
//import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
//import Home from '../components/pages/Home';
 import Hilfecenter from '../components/pages/Hilfecenter';
import Tickets from '../components/pages/Tickets';
import AddTicket from '../components/pages/AddTicket';
import EditTicket from '../components/pages/EditTicket';
import TicketsDetail from '../components/pages/TicketsDetail';
import TicketsContactInfo from '../components/pages/TicketsContactInfo';
import Kunden from '../components/pages/Kunden';
import KontakteDetail from '../components/pages/KontakteDetail';
import KontakteEdit from '../components/pages/KontakteEdit';
import Aktivitäten from '../components/pages/Aktivitäten';
import Anruf from '../components/pages/Anruf';
import Aufgabe from '../components/pages/Aufgabe';
import Ereignis from '../components/pages/Ereignis';
import Berichte from '../components/pages/Berichte';
import KanaleEmail from '../components/pages/KanaleEmail';
import Absenderadresse from '../components/pages/Absenderadresse';
import DkimAuthentication from '../components/pages/DkimAuthentication';
import WeitereKonfiguration from '../components/pages/WeitereKonfiguration';
import Rebrand from '../components/pages/Rebrand';
import Zugriffseinstellungen from '../components/pages/Zugriffseinstellungen';
import Languages from '../components/pages/Languages';
import HilfecenterAnpassung from '../components/pages/HilfecenterAnpassung';
import HilfecenterSAML from '../components/pages/HilfecenterSAML';
import SettingSeo from '../components/pages/SettingSeo';
import EMailVorlagen from '../components/pages/EMailVorlagen';
import Nutzer from '../components/pages/Nutzer';
import UserLabels from '../components/pages/UserLabels';
import UserGroups from '../components/pages/UserGroups';
import SalesIQ from '../components/pages/SalesIQ';
import PageSense from '../components/pages/PageSense';
import GoogleAnalytics from '../components/pages/GoogleAnalytics';
import ChatEinstellungen from '../components/pages/ChatEinstellungen';
import RückmeldungWidget from '../components/pages/RückmeldungWidget';
import ErweitertesWebformular from '../components/pages/ErweitertesWebformular';
import Unternehmen from '../components/pages/Unternehmen';
import Firmenlogo from '../components/pages/Firmenlogo';
import Domänenzuordnung from '../components/pages/Domänenzuordnung';
import PortalnamenAndern from '../components/pages/PortalnamenAndern';
import MultiBranding from '../components/pages/MultiBranding';
import Geschäftszeiten from '../components/pages/Geschäftszeiten';
import Jährliche from '../components/pages/Jährliche';
import Kundenzufriedenheit from '../components/pages/Kundenzufriedenheit';
import Produkte from '../components/pages/Produkte';
import Abteilungen from '../components/pages/Abteilungen';
import TicketStatus from '../components/pages/TicketStatus';
import Pagelayout from '../components/pages/Pagelayout';
import LayoutsRules from '../components/pages/LayoutsRules';
import ValidationRules from '../components/pages/ValidationRules';
import Felderliste from '../components/pages/Felderliste';
import Feldabhängigkeiten from '../components/pages/Feldabhängigkeiten';
import Feldberechtigungen from '../components/pages/Feldberechtigungen';
import Suchfelder from '../components/pages/Suchfelder';
import Zeiterfassung from '../components/pages/Zeiterfassung';
import ModuleOrganisieren from '../components/pages/ModuleOrganisieren';
import ModuleUmbenennen from '../components/pages/ModuleUmbenennen';
import EMailTemplates from '../components/pages/EMailTemplates';
import EMailVorlageBearbeiten from '../components/pages/EMailVorlageBearbeiten';
import TicketVorlage from '../components/pages/TicketVorlage';
import TicketVorlageBearbeiten from '../components/pages/TicketVorlageBearbeiten';
import GeneralSettingsTickets from '../components/pages/GeneralSettingsTickets';
import GeneralSettingsKontakte from '../components/pages/GeneralSettingsKontakte';
import MeineInformationen from '../components/pages/MeineInformationen';
import Voreinstellungen from '../components/pages/Voreinstellungen';
import Agenten from '../components/pages/Agenten';
import AgentendatenBearbeiten from '../components/pages/AgentendatenBearbeiten';
import Rollen from '../components/pages/Rollen';
import NeuRolle from '../components/pages/NeuRolle';
import RolleBearbeiten from '../components/pages/RolleBearbeiten';
import Profile from '../components/pages/Profile';
import NeuesProfil from '../components/pages/NeuesProfil';
import Kundendienstadministrator from '../components/pages/Kundendienstadministrator';
import Nebenagent from '../components/pages/Nebenagent';
import AgentSettings from '../components/pages/AgentSettings';
import NewbieAgent from '../components/pages/NewbieAgent';
import Supervisor from '../components/pages/Supervisor';
import SupportManager from '../components/pages/SupportManager';
import StandardBerechtigungen from '../components/pages/StandardBerechtigungen';
import StandardBerechtigungenBearbeiten from '../components/pages/StandardBerechtigungenBearbeiten';
import Importieren from '../components/pages/Importieren';
import DatenExportieren from '../components/pages/DatenExportieren';
import Papierkorb from '../components/pages/Papierkorb';
import API from '../components/pages/API';
import Webhook from '../components/pages/Webhook';
import AddKontakte from '../components/pages/AddKontakte';
import FormBuilder from '../components/pages/FormBuilder';  
import FormGenerator from '../components/pages/FormGenerator';
import FormGenerate from '../components/pages/FormGenerate';  
import AddKontaktePerson from '../components/pages/AddKontaktePerson'; 
import MProdukte from '../components/pages/MProdukte'; 
import Login from '../components/pages/Login';
import AddAusfuhrungsort from '../components/pages/AddAusfuhrungsort';
import AddWeitereAdressen from '../components/pages/AddWeitereAdressen';
import UpdateWeitereAdressen from '../components/pages/UpdateWeitereAdressen';
import UpdKontaktePerson from '../components/pages/UpdKontaktePerson';
import UpdAusfuhrungsort from '../components/pages/UpdAusfuhrungsort';
import NotFound from '../components/pages/NotFound';
import LoggedInRoute from "../routes/LoggedInRoute";
import LoggedOutRoute from "./LoggedOutRoute";
import Search from "../components/pages/Search";
// import LoggedOutRoute from "../routes/LoggedOutRoute";

// import CommonRoute from "../routes/LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      {/* <LoggedOutRoute path="/" exact={true} component={Landing} />

      <LoggedOutRoute path="/about" exact={true} component={About} /> */}
      <LoggedInRoute path="/search" exact={true} component={Search}/>
      <LoggedInRoute path="/" exact={true} component={Tickets} />
      <LoggedInRoute path="/hilfecenter" exact={true} component={Hilfecenter} />
      <LoggedInRoute path="/tickets" exact={true} component={Tickets} />
      <LoggedInRoute path="/add-ticket" exact={true} component={AddTicket} />
      <LoggedInRoute path="/edit-ticket/:id" exact={true} component={EditTicket} />
      <LoggedInRoute path="/tickets-detail/:id" exact={true} component={TicketsDetail} />
      <LoggedInRoute path="/tickets-contact-info" exact={true} component={TicketsContactInfo} />
      <LoggedInRoute path="/kunden" exact={true} component={Kunden} />
      <LoggedInRoute path="/kontakte-detail/:id" exact={true} component={KontakteDetail} />
      <LoggedInRoute path="/kontakte-edit/:id" exact={true} component={KontakteEdit} />
      <LoggedInRoute path="/aktivitäten" exact={true} component={Aktivitäten} />
      <LoggedInRoute path="/anruf" exact={true} component={Anruf} />
      <LoggedInRoute path="/aufgabe" exact={true} component={Aufgabe} />
      <LoggedInRoute path="/ereignis" exact={true} component={Ereignis} />
      <LoggedInRoute path="/berichte" exact={true} component={Berichte} />
      <LoggedInRoute path="/kanale-e-mail" exact={true} component={KanaleEmail} />
      <LoggedInRoute path="/absenderadresse" exact={true} component={Absenderadresse} />
      <LoggedInRoute path="/dkim-authentication" exact={true} component={DkimAuthentication} />
      <LoggedInRoute path="/weitere-konfiguration" exact={true} component={WeitereKonfiguration} />
      <LoggedInRoute path="/rebrand" exact={true} component={Rebrand} />
      <LoggedInRoute path="/zugriffseinstellungen" exact={true} component={Zugriffseinstellungen} />
      <LoggedInRoute path="/languages" exact={true} component={Languages} />
      <LoggedInRoute path="/hilfecenter-anpassung" exact={true} component={HilfecenterAnpassung} />
      <LoggedInRoute path="/hilfecenter-saml" exact={true} component={HilfecenterSAML} />
      <LoggedInRoute path="/setting-seo" exact={true} component={SettingSeo} />
      <LoggedInRoute path="/e-mail-vorlagen" exact={true} component={EMailVorlagen} />
      <LoggedInRoute path="/nutzer" exact={true} component={Nutzer} />
      <LoggedInRoute path="/user-labels" exact={true} component={UserLabels} />
      <LoggedInRoute path="/user-groups" exact={true} component={UserGroups} />
      <LoggedInRoute path="/google-analytics" exact={true} component={GoogleAnalytics} />
      <LoggedInRoute path="/sales-iq" exact={true} component={SalesIQ} />
      <LoggedInRoute path="/page-sense" exact={true} component={PageSense} />
      <LoggedInRoute path="/chat-einstellungen" exact={true} component={ChatEinstellungen} />
      <LoggedInRoute path="/rückmeldung-widget" exact={true} component={RückmeldungWidget} />
      <LoggedInRoute path="/erweitertes-webformular" exact={true} component={ErweitertesWebformular} />
      <LoggedInRoute path="/unternehmen" exact={true} component={Unternehmen} />
      <LoggedInRoute path="/firmenlogo" exact={true} component={Firmenlogo} />
      <LoggedInRoute path="/domänenzuordnung" exact={true} component={Domänenzuordnung} />
      <LoggedInRoute path="/portalname" exact={true} component={PortalnamenAndern} />
      <LoggedInRoute path="/multi-branding" exact={true} component={MultiBranding} />
      <LoggedInRoute path="/geschäftszeiten" exact={true} component={Geschäftszeiten} />
      <LoggedInRoute path="/jährliche" exact={true} component={Jährliche} />
      <LoggedInRoute path="/kundenzufriedenheit" exact={true} component={Kundenzufriedenheit} />
      <LoggedInRoute path="/produkte" exact={true} component={Produkte} />
      <LoggedInRoute path="/abteilungen" exact={true} component={Abteilungen} />
      <LoggedInRoute path="/ticket-status" exact={true} component={TicketStatus} />
      <LoggedInRoute path="/pagelayout" exact={true} component={Pagelayout} />
      <LoggedInRoute path="/layout-rules" exact={true} component={LayoutsRules} />
      <LoggedInRoute path="/validation-rules" exact={true} component={ValidationRules} />
      <LoggedInRoute path="/felderliste" exact={true} component={Felderliste} />
      <LoggedInRoute path="/feldabhängigkeiten" exact={true} component={Feldabhängigkeiten} />
      <LoggedInRoute path="/feldberechtigungen" exact={true} component={Feldberechtigungen} />
      <LoggedInRoute path="/suchfelder" exact={true} component={Suchfelder} />
      <LoggedInRoute path="/zeiterfassung" exact={true} component={Zeiterfassung} />
      <LoggedInRoute path="/module-organisieren" exact={true} component={ModuleOrganisieren} />
      <LoggedInRoute path="/module-umbenennen" exact={true} component={ModuleUmbenennen} />
      <LoggedInRoute path="/emailtemplates" exact={true} component={EMailTemplates} />
      <LoggedInRoute path="/e-mail-vorlagen-bearbeiten" exact={true} component={EMailVorlageBearbeiten} />
      <LoggedInRoute path="/ticketvorlagen" exact={true} component={TicketVorlage} />
      <LoggedInRoute path="/ticket-vorlage-bearbeiten" exact={true} component={TicketVorlageBearbeiten} />
      <LoggedInRoute path="/tickets-gereral-settings" exact={true} component={GeneralSettingsTickets} />
      <LoggedInRoute path="/kontakte-gereral-settings" exact={true} component={GeneralSettingsKontakte} />
      <LoggedInRoute path="/meine-informationen" exact={true} component={MeineInformationen} />
      <LoggedInRoute path="/voreinstellungen" exact={true} component={Voreinstellungen} />	
      <LoggedInRoute path="/agenten" exact={true} component={Agenten} />
      <LoggedInRoute path="/agentendaten-bearbeiten" exact={true} component={AgentendatenBearbeiten} />
      <LoggedInRoute path="/berechtigungen-rollen" exact={true} component={Rollen} />
      <LoggedInRoute path="/neu-rolle" exact={true} component={NeuRolle} />
      <LoggedInRoute path="/edit-rolle" exact={true} component={RolleBearbeiten} />
      <LoggedInRoute path="/berechtigungen-profile" exact={true} component={Profile} />
      <LoggedInRoute path="/Neues-Profil" exact={true} component={NeuesProfil} />
      <LoggedInRoute path="/kundendienstadministrator" exact={true} component={Kundendienstadministrator} />
      <LoggedInRoute path="/nebenagent" exact={true} component={Nebenagent} />
      <LoggedInRoute path="/agent-settings" exact={true} component={AgentSettings} />
      <LoggedInRoute path="/newbie-agent" exact={true} component={NewbieAgent} />
      <LoggedInRoute path="/supervisor" exact={true} component={Supervisor} />
      <LoggedInRoute path="/support-manager" exact={true} component={SupportManager} />
      <LoggedInRoute path="/berechtigungen-datenfreigabe" exact={true} component={StandardBerechtigungen} />
      <LoggedInRoute path="/datenfreigabe-bearbeiten" exact={true} component={StandardBerechtigungenBearbeiten} />
      <LoggedInRoute path="/importieren" exact={true} component={Importieren} />
      <LoggedInRoute path="/exportieren" exact={true} component={DatenExportieren} />
      <LoggedInRoute path="/papierkorb" exact={true} component={Papierkorb} />
      <LoggedInRoute path="/api" exact={true} component={API} />
      <LoggedInRoute path="/webhook" exact={true} component={Webhook} />
      <LoggedInRoute path="/addkontakte" exact={true} component={AddKontakte} />
      <LoggedInRoute path="/formbuilder" exact={true} component={FormBuilder} />
      <LoggedInRoute path="/formgenerator" exact={true} component={FormGenerator} />
      <LoggedInRoute path="/formgenerate/:slug" exact={true} component={FormGenerate} />
      <LoggedInRoute path="/addKontaktePerson" exact={true} component={AddKontaktePerson} />
      <LoggedInRoute path="/MProdukte" exact={true} component={MProdukte} />
      <LoggedInRoute path="/AddAusfuhrungsort" exact={true} component={AddAusfuhrungsort} />
      <LoggedInRoute path="/AddWeitereAdressen" exact={true} component={AddWeitereAdressen} />
      <LoggedInRoute path="/updateweitereadressen/:id" exact={true} component={UpdateWeitereAdressen} />
      <LoggedInRoute path="/UpdKontaktePerson/:id" exact={true} component={UpdKontaktePerson} />
      <LoggedInRoute path="/UpdAusfuhrungsort/:id" exact={true} component={UpdAusfuhrungsort} />
      { /*<LoggedInRoute path="/NotFound" exact={true} component={NotFound} />*/ }
      <LoggedOutRoute path="/login" exact={true} component={Login} />
     
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
