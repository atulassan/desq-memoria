import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/Home';
import Hilfecenter from './components/pages/Hilfecenter';
import Tickets from './components/pages/Tickets';
import AddTicket from './components/pages/AddTicket';
import EditTicket from './components/pages/EditTicket';
import TicketsDetail from './components/pages/TicketsDetail';
import TicketsContactInfo from './components/pages/TicketsContactInfo';
import Kunden from './components/pages/Kunden';
import KontakteDetail from './components/pages/KontakteDetail';
import KontakteEdit from './components/pages/KontakteEdit';
import Aktivitäten from './components/pages/Aktivitäten';
import Anruf from './components/pages/Anruf';
import Aufgabe from './components/pages/Aufgabe';
import Ereignis from './components/pages/Ereignis';
import Berichte from './components/pages/Berichte';
import KanaleEmail from './components/pages/KanaleEmail';
import Absenderadresse from './components/pages/Absenderadresse';
import DkimAuthentication from './components/pages/DkimAuthentication';
import WeitereKonfiguration from './components/pages/WeitereKonfiguration';
import Rebrand from './components/pages/Rebrand';
import Zugriffseinstellungen from './components/pages/Zugriffseinstellungen';
import Languages from './components/pages/Languages';
import HilfecenterAnpassung from './components/pages/HilfecenterAnpassung';
import HilfecenterSAML from './components/pages/HilfecenterSAML';
import SettingSeo from './components/pages/SettingSeo';
import EMailVorlagen from './components/pages/EMailVorlagen';
import Nutzer from './components/pages/Nutzer';
import UserLabels from './components/pages/UserLabels';
import UserGroups from './components/pages/UserGroups';
import SalesIQ from './components/pages/SalesIQ';
import PageSense from './components/pages/PageSense';
import GoogleAnalytics from './components/pages/GoogleAnalytics';
import ChatEinstellungen from './components/pages/ChatEinstellungen';
import RückmeldungWidget from './components/pages/RückmeldungWidget';
import ErweitertesWebformular from './components/pages/ErweitertesWebformular';
import Unternehmen from './components/pages/Unternehmen';
import Firmenlogo from './components/pages/Firmenlogo';
import Domänenzuordnung from './components/pages/Domänenzuordnung';
import PortalnamenAndern from './components/pages/PortalnamenAndern';
import MultiBranding from './components/pages/MultiBranding';
import Geschäftszeiten from './components/pages/Geschäftszeiten';
import Jährliche from './components/pages/Jährliche';
import Kundenzufriedenheit from './components/pages/Kundenzufriedenheit';
import Produkte from './components/pages/Produkte';
import Abteilungen from './components/pages/Abteilungen';
import TicketStatus from './components/pages/TicketStatus';
import Pagelayout from './components/pages/Pagelayout';
import LayoutsRules from './components/pages/LayoutsRules';
import ValidationRules from './components/pages/ValidationRules';
import Felderliste from './components/pages/Felderliste';
import Feldabhängigkeiten from './components/pages/Feldabhängigkeiten';
import Feldberechtigungen from './components/pages/Feldberechtigungen';
import Suchfelder from './components/pages/Suchfelder';
import Zeiterfassung from './components/pages/Zeiterfassung';
import ModuleOrganisieren from './components/pages/ModuleOrganisieren';
import ModuleUmbenennen from './components/pages/ModuleUmbenennen';
import EMailTemplates from './components/pages/EMailTemplates';
import EMailVorlageBearbeiten from './components/pages/EMailVorlageBearbeiten';
import TicketVorlage from './components/pages/TicketVorlage';
import TicketVorlageBearbeiten from './components/pages/TicketVorlageBearbeiten';
import GeneralSettingsTickets from './components/pages/GeneralSettingsTickets';
import GeneralSettingsKontakte from './components/pages/GeneralSettingsKontakte';
import MeineInformationen from './components/pages/MeineInformationen';
import Voreinstellungen from './components/pages/Voreinstellungen';
import Agenten from './components/pages/Agenten';
import AgentendatenBearbeiten from './components/pages/AgentendatenBearbeiten';
import Rollen from './components/pages/Rollen';
import NeuRolle from './components/pages/NeuRolle';
import RolleBearbeiten from './components/pages/RolleBearbeiten';
import Profile from './components/pages/Profile';
import NeuesProfil from './components/pages/NeuesProfil';
import Kundendienstadministrator from './components/pages/Kundendienstadministrator';
import Nebenagent from './components/pages/Nebenagent';
import AgentSettings from './components/pages/AgentSettings';
import NewbieAgent from './components/pages/NewbieAgent';
import Supervisor from './components/pages/Supervisor';
import SupportManager from './components/pages/SupportManager';
import StandardBerechtigungen from './components/pages/StandardBerechtigungen';
import StandardBerechtigungenBearbeiten from './components/pages/StandardBerechtigungenBearbeiten';
import Importieren from './components/pages/Importieren';
import DatenExportieren from './components/pages/DatenExportieren';
import Papierkorb from './components/pages/Papierkorb';
import API from './components/pages/API';
import Webhook from './components/pages/Webhook';
import AddKontakte from './components/pages/AddKontakte';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/tickets' component={Tickets} />
              <Route path='/add-ticket' component={AddTicket} />
              <Route path='/edit-ticket' component={EditTicket} />
              <Route path='/tickets-detail' component={TicketsDetail} />
              <Route path='/tickets-contact-info' component={TicketsContactInfo} />
              <Route path='/hilfecenter' component={Hilfecenter} />
              <Route path='/kunden' component={Kunden} />
              <Route path='/kontakte-detail' component={KontakteDetail} />
              <Route path='/kontakte-edit' component={KontakteEdit} />
              <Route path='/aktivitäten' component={Aktivitäten} />
              <Route path='/anruf' component={Anruf} />
              <Route path='/aufgabe' component={Aufgabe} />
              <Route path='/ereignis' component={Ereignis} />
              <Route path='/berichte' component={Berichte} />
              <Route path='/kanale-e-mail' component={KanaleEmail} />
              <Route path='/absenderadresse' component={Absenderadresse} />
              <Route path='/dkim-authentication' component={DkimAuthentication} />
              <Route path='/weitere-konfiguration' component={WeitereKonfiguration} />
              <Route path='/rebrand' component={Rebrand} />
              <Route path='/zugriffseinstellungen' component={Zugriffseinstellungen} />
              <Route path='/languages' component={Languages} />
              <Route path='/hilfecenter-anpassung' component={HilfecenterAnpassung} />
              <Route path='/hilfecenter-saml' component={HilfecenterSAML} />
              <Route path='/setting-seo' component={SettingSeo} />
              <Route path='/e-mail-vorlagen' component={EMailVorlagen} />
              <Route path='/nutzer' component={Nutzer} />
              <Route path='/user-labels' component={UserLabels} />
              <Route path='/user-groups' component={UserGroups} />
              <Route path='/google-analytics' component={GoogleAnalytics} />
              <Route path='/sales-iq' component={SalesIQ} />
              <Route path='/page-sense' component={PageSense} />
              <Route path='/chat-einstellungen' component={ChatEinstellungen} />
              <Route path='/rückmeldung-widget' component={RückmeldungWidget} />
              <Route path='/erweitertes-webformular' component={ErweitertesWebformular} />
              <Route path='/unternehmen' component={Unternehmen} />
              <Route path='/firmenlogo' component={Firmenlogo} />
              <Route path='/domänenzuordnung' component={Domänenzuordnung} />
              <Route path='/portalname' component={PortalnamenAndern} />
              <Route path='/multi-branding' component={MultiBranding} />
              <Route path='/geschäftszeiten' component={Geschäftszeiten} />
              <Route path='/jährliche' component={Jährliche} />
              <Route path='/kundenzufriedenheit' component={Kundenzufriedenheit} />
              <Route path='/produkte' component={Produkte} />
              <Route path='/abteilungen' component={Abteilungen} />
              <Route path='/ticket-status' component={TicketStatus} />
              <Route path='/pagelayout' component={Pagelayout} />
              <Route path='/layout-rules' component={LayoutsRules} />
              <Route path='/validation-rules' component={ValidationRules} />
              <Route path='/felderliste' component={Felderliste} />
              <Route path='/feldabhängigkeiten' component={Feldabhängigkeiten} />
              <Route path='/feldberechtigungen' component={Feldberechtigungen} />
              <Route path='/suchfelder' component={Suchfelder} />
              <Route path='/zeiterfassung' component={Zeiterfassung} />
              <Route path='/module-organisieren' component={ModuleOrganisieren} />
              <Route path='/module-umbenennen' component={ModuleUmbenennen} />
              <Route path='/emailtemplates' component={EMailTemplates} />
              <Route path='/e-mail-vorlagen-bearbeiten' component={EMailVorlageBearbeiten} />
              <Route path='/ticketvorlagen' component={TicketVorlage} />
              <Route path='/ticket-vorlage-bearbeiten' component={TicketVorlageBearbeiten} />
              <Route path='/tickets-gereral-settings' component={GeneralSettingsTickets} />
              <Route path='/kontakte-gereral-settings' component={GeneralSettingsKontakte} />
              <Route path='/meine-informationen' component={MeineInformationen} />
              <Route path='/voreinstellungen' component={Voreinstellungen} />	
              <Route path='/agenten' component={Agenten} />
              <Route path='/agentendaten-bearbeiten' component={AgentendatenBearbeiten} />
              <Route path='/berechtigungen-rollen' component={Rollen} />
              <Route path='/neu-rolle' component={NeuRolle} />
              <Route path='/edit-rolle' component={RolleBearbeiten} />
              <Route path='/berechtigungen-profile' component={Profile} />
              <Route path='/Neues-Profil' component={NeuesProfil} />
              <Route path='/kundendienstadministrator' component={Kundendienstadministrator} />
              <Route path='/nebenagent' component={Nebenagent} />
              <Route path='/agent-settings' component={AgentSettings} />
              <Route path='/newbie-agent' component={NewbieAgent} />
              <Route path='/supervisor' component={Supervisor} />
              <Route path='/support-manager' component={SupportManager} />
              <Route path='/berechtigungen-datenfreigabe' component={StandardBerechtigungen} />
              <Route path='/datenfreigabe-bearbeiten' component={StandardBerechtigungenBearbeiten} />
              <Route path='/importieren' component={Importieren} />
              <Route path='/exportieren' component={DatenExportieren} />
              <Route path='/papierkorb' component={Papierkorb} />
              <Route path='/api' component={API} />
              <Route path='/webhooks' component={Webhook} />
              <Route path='/add-kontakte' component={AddKontakte} />


          </Switch>
      </Router>
  );
}

export default App;
