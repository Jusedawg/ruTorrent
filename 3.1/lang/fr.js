/*
 * WebUI - The WEB interface for uTorrent - http://www.utorrent.com
 * NO COPYCATS of language update
 * 
 * == BEGIN LICENSE ==
 * 
 * Licensed under the terms of any of the following licenses at your
 * choice:
 * 
 *  - GNU General Public License Version 2 or later (the "GPL")
 *    http://www.gnu.org/licenses/gpl.html
 * 
 *  - GNU Lesser General Public License Version 2.1 or later (the "LGPL")
 *    http://www.gnu.org/licenses/lgpl.html
 * 
 *  - Mozilla Public License Version 1.1 or later (the "MPL")
 *    http://www.mozilla.org/MPL/MPL-1.1.html
 * 
 * == END LICENSE ==
 * 
 * File Name: fr.js
 * 	French language file.
 * 
 * File Author:
 * 	  Platoon21 (charlesprost@gmail.com) and Zempashi
 *    Nicobubulle (nicobubulle@gmail.com) for ruTorrent
 */
 
 var theUILang =
 {
 //all used
 kbs				: "ko/s",
 
 
 //Settings window
 
 General			: "G\u00e9n\u00e9ral",
 Downloads			: "T\u00e9l\u00e9chargement",
 Connection			: "Connexion",
 BitTorrent			: "BitTorrent",
 Queueing			: "File d'attente",
 Scheduler			: "Planificateur",
 Advanced			: "Avanc\u00e9",
 Disk_Cache			: "Cache disque",
 Enable_Web_Interface : "Activer le plugin WebUI",
 Authent			: "Authentification",
 Username			: "Identifiant",
 Password			: "Mot de passe",
 Enable_Guest_acc	: "Autoriser le compte Invit\u00e9 avec comme identifiant",
 Connectivity		: "Connectivit\u00e9",
 Alt_list_port		: "Port d'\u00e9coute alternatif (port BitTorrent par d\u00e9faut)",
 Rest_access		: "Acc\u00e8s restreint aux adresses IPs suivantes : (les s\u00e9parer avec une virgule)",
 User_Interface		: "Interface",
 Confirm_del_torr	: "Confirmer la suppression des torrents",
 Update_GUI_every	: "V\u00e9rification auto. des mises \u00e0 jour",
 ms					: "ms",
 Alt_list_bckgnd	: "Couleurs altern\u00e9es pour le fond de liste",
 Show_speed			: "O\u00f9 afficher la barre de progression?",
 Don_t				: "Nulle part",
 In_status_bar		: "Dans la barre d'\u00e9tat",
 In_title_bar		: "Dans la barre de titre",
 Show_cat_start		: "Afficher les cat\u00e9gories au d\u00e9marrage",
 Show_det_start		: "Afficher les d\u00e9tails au d\u00e9marrage",
 Restor_def			: "R\u00e9tablir par d\u00e9faut",
 When_add_torrent	: "Quand des torrents sont ajout\u00e9s",
 Dnt_start_down_auto: "Afficher une demande de confirmation",
 Other_sett			: "Autres options",
 Append_ut_incompl	: "Rajouter l'extension .!ut aux fichiers incomplets",
 Prealloc_all_files	: "Pr\u00e9-allouer tous les fichiers",
 Prev_stnd_w_act_con: "Emp\u00eacher la fermeture si des torrents sont en cours d'utilisation",
 Listening_Port		: "Port d'\u00e9coute",
 Port_f_incom_conns	: "Port utilis\u00e9 pour les connexions entrantes",
 Random_Port		: "Port al\u00e9atoire",
 Rnd_port_torr_start: "S\u00e9lection al\u00e9atoire du port \u00e0 chaque fois que rTorrent d\u00e9marre",
 En_UPnP_mapp		: "Activer le mappage de port UPnP",
 Add_torr_mustdie_f	: "Ajouter rTorrent aux exceptions du Pare-feu de XP (SP2 ou ult\u00e9rieur)",
 Proxy_Server		: "Serveur proxy",
 Type				: "Type",
 none				: "(aucun)",
 Proxy				: "Proxy",
 Port				: "Port",
 Use_proxy_4_p2p_con: "Utiliser un serveur proxy pour les connexions en P2P",
 Bandwidth_Limiting : "Limitation de la bande passante",
 Global_max_upl		: "Taux maximum en \u00e9mission",
 unlimited			: "illimit\u00e9",
 Alt_down_r_downl	: "Taux d'\u00e9mission alternatif sans t\u00e9l\u00e9chargement",
 Glob_max_downl		: "Taux maximum en r\u00e9ception",
 Num_of_conn		: "Nombre de connexions",
 Glob_max_conn		: "Nombre maximum global de connexions",
 Max_conn_peer_torr	: "Nombre maximum de clients par torrent",
 Num_upl_slots		: "Nombre de slots d'\u00e9mission par torrent",
 Extra_ulslots		: "Ajouter des slots d'\u00e9mission lorsque le taux d'\u00e9mission est < 90%",
 Add_bittor_featrs	: "Fonctions BitTorrent suppl\u00e9mentaires",
 En_DHT_ntw			: "Activer le support r\u00e9seau des DHT",
 Ask_scrape			: "Infos de Scrape par le Tracker",
 En_DHT_new_torrs	: "Activer DHT pour les nouveaux torrents",
 Peer_exch			: "Activer l'\u00e9change de client",
 Ip_report_track	: "IP/Nom d'h\u00f4te \u00e0 rapporter au Tracker",
 Protocol_enc		: "Protocole d'encryptage",
 Outgoing			: "Sortant",
 Disabled			: "D\u00e9sactiv\u00e9",
 Enabled			: "Activ\u00e9",
 Forced				: "Forc\u00e9",
 All_inc_legacy_conn: "Autoriser les connexions entrantes h\u00e9rit\u00e9es",
 Queue_sett			: "Options de la file d'attente",
 Max_n_act_torrs	: "Nombre maximum de torrents actifs (\u00e9mission et r\u00e9ception)",
 Max_num_act_downl	: "Nombre maximum de t\u00e9l\u00e9chargements actifs",
 Seed_while			: "Param\u00e8tres de partage [Valeurs par d\u00e9faut]",
 Ratio_is			: "Par ratio",
 or_time_is			: " % ou en temps",
 Ignore				: "(Ignor\u00e9)",
 nin_min			: "90 minutes",
 two_h				: "2 heures",
 three_h			: "3 heures",
 four_h				: "4 heures",
 five_h				: "5 heures",
 six_h				: "6 heures",
 seven_h			: "7 heures",
 eight_h			: "8 heures",
 nine_h				: "9 heures",
 ten_h				: "10 heures",
 twelve_h			: "12 heures",
 sixteen_h			: "16 heures",
 twenty_h			: "20 heures",
 tw_four_h			: "24 heures",
 thirty_h			: "30 heures",
 thirty_six_h		: "36 heures",
 forty_eight_h		: "48 heures",
 sixty_h			: "60 heures",
 sev_two_h			: "72 heures",
 nin_six_h			: "96 heures",
 Seed_prior			: "Donner la priorit\u00e9 aux t\u00e2ches de partage",
 When_torr_reach	: "D\u00e9finition des limites de partage",
 Limit_upl_rate		: "Limiter l'\u00e9mission \u00e0 ... [0 = stop]",
 En_shedul			: "Activer le planificateur",
 Shed_sett			: "Options du planificateur",
 Lim_upl_rate		: "Taux d'\u00e9mission limit\u00e9",
 Lim_dow_rate		: "Taux de r\u00e9ception limit\u00e9",
 Dis_DHT_when_t_off	: "D\u00e9sactiver les DHT \u00e0 l'arr\u00eat",
 Disc_cahe			: "Cache disque",
 Disc_cahe_bla_bla	: "Le cache disque est n\u00e9cessaire pour acc\u00e9der fr\u00e9quemment aux donn\u00e9es en m\u00e9moire afin de r\u00e9duire le nombre de lectures et d'\u00e9critures sur le disque dur. Vous pouvez modifier son comportement en modifiant les quelques param\u00e8tres ci-dessous.",
 Overwr_d_cahe_au	: "D\u00e9finir manuellement la taille du cache",
 MB					: "Mo",
 Red_mem_usage		: "R\u00e9duire l'usage de la m\u00e9moire lorsque le cache n'est pas n\u00e9cessaire",
 Adv_cache_sett		: "Param\u00e8tres avanc\u00e9s du cache",
 En_cach_disc		: "Activer le cache disque en \u00e9criture",
 Wr_out_ever_2_min	: "Ecriture des blocs intacts toutes les deux minutes",
 Wr_immed			: "Ecriture imm\u00e9diate des pi\u00e8ces termin\u00e9es",
 En_cah_disc_read	: "Activer le cache disque en lecture",
 Turn_off_w_read	: "D\u00e9sactiver le cache en lecture si le taux d'\u00e9mission est faible",
 Rem_old_from_cahe	: "Supprimer les anciens blocs du cache",
 Increase_autom_cach: "Augmenter automatiquement la taille du cache si celui-ci devient insuffisant",
 Advanced			: "Avanc\u00e9es",
 Advanced_label		: "Options avanc\u00e9es [Attention : \u00e0 modifier avec pr\u00e9caution !]",
 Cancel				: "Annuler",
 uTorrent_settings	: "Options de rTorrent",
 
// Fen\u00eatre principale
 Doesnt_support		: "ruTorrent ne supporte pas votre navigateur.",
 Name				: "Nom",
 Status				: "Statut",
 Size				: "Taille",
 Done				: "Re\u00e7u",
 Downloaded			: "T\u00e9l\u00e9charg\u00e9",
 Uploaded			: "Envoy\u00e9",
 Ratio				: "Ratio",
 DL					: "R\u00e9ception",
 UL					: "Emission",
 ETA				: "Temps estim\u00e9",
 Label				: "Etiquette",
 Peers				: "Clients",
 Seeds				: "Sources",
 Avail				: "Disponibilit\u00e9",
 Remaining			: "Restant",
 Priority			: "Priorit\u00e9",
 Download			: "T\u00e9l\u00e9charger",
 Upload				: "Envoyer",
 Not_torrent_file	: "Le fichier doit \u00eatre un torrent",
 Pausing			: "Pause",
 Seeding			: "Envoi",
 Downloading		: "T\u00e9l\u00e9chargement",
 Checking			: "V\u00e9rification",
 Error				: "Erreur",
 Queued				: "Mis dans la file",
 Finished			: "Termin\u00e9",
 Stopped			: "Arr\u00eat\u00e9",
 Request_timed_out	: "La requ\u00eate vers rTorrent a \u00e9chou\u00e9.",
 
 Force_Start		: "Forcer le d\u00e9marrage",
 Start				: "D\u00e9marrer",
 Pause				: "Pause",
 Stop				: "Arr\u00eater",
 Force_recheck		: "Forcer la rev\u00e9rification",
 New_label			: "Nouvelle \u00e9tiquette...",
 Remove_label		: "Supprimer l'\u00e9tiquette",
 Labels				: "Etiquettes",
 Remove				: "Effacer",
 Delete_data		: "Supprimer les donn\u00e9es",
 Remove_and			: "Effacer et ",
 Details			: "D\u00e9tails...",
 Properties			: "Propri\u00e9t\u00e9s...",
 of					: "de", 		//this two creates line 
 connected			: "connect\u00e9(s)",	//  XX of YY connected
 High_priority		: "Haute",
 Normal_priority	: "Moyenne",
 Low_priority		: "Basse",
 Dont_download		: "Ne pas t\u00e9l\u00e9charger",
 Shure_restore_UI	: "Etes-vous s\u00fbr de vouloir restaurer l'interface utilisateur?",
 Reloading			: "Rechargement...",
 Filename			: "Nom",
 Date_				: "Date",
 Files				: "Fichiers",
 Logger				: "Journal",
 
 s					: "s",    // part of "KB/s"
 bytes				: "octets",
 KB					: "Ko",
 MB					: "Mo",
 GB					: "Go",
 TB					: "To",
 PB					: "Po",
 
 // main WND s
 Loading			: "Chargement...",
 Torrent_file		: "Fichier torrent",
 Torrent_URL		: "URL du torrent",
 Cookies			: "Cookies",
 RSS_Downloader		: "Gestionnaire RSS",
 Torrent_properties	: "Propri\u00e9t\u00e9s du torrent",
 Trackers			: "Trackers",
 Max_down_rate		: "Taux maximum de r\u00e9ception",
 Max_upl_rate		: "Taux maximum d'\u00e9mission",
 Bandwidth_sett		: "Param\u00e8tres de la bande passante",
 Number_ul_slots	: "Nombre de slots d'envoi",
 Override_default	: "R\u00e9tablir les r\u00e9glages par d\u00e9faut",
 Initial_seed		: "Envoi initial",
 Enable_DHT			: "Activer les DHT",
 Peer_ex			: "Echange P2P",
 About				: "A propos de",
 Enter_label_prom	: "Entrer la nouvelle \u00e9tiquette pour les torrents s\u00e9lectionn\u00e9s",
 Remove_torrents	: "Effacer le(s) torrent(s)",
 Rem_torrents_prompt: "Voulez-vous vraiment effacer le(s) torrent(s) s\u00e9lectionn\u00e9(s) ?",
 All				: "Tous",
 Active				: "Actif",
 Inactive			: "Inactif",
 No_label			: "Sans \u00e9tiquette",
 Transfer			: "Transfert",
 Time_el			: "Temps \u00e9coul\u00e9",
 restants			: "Restant",
 Share_ratio		: "Ratio",
 Down_speed			: "Vitesse de r\u00e9ception",
 Down_limit			: "Limite de r\u00e9ception",
 Ul_speed			: "Vitesse d'\u00e9mission",
 Ul_limit			: "Limite d'\u00e9mission",
 Wasted				: "Rejet\u00e9",
 Tracker			: "Tracker",
 Track_URL			: "URL du tracker",
 Track_status		: "Statut",
 Update_in			: "Actualisation",
 DHT_status			: "Statut des DHT",
 Save_as			: "R\u00e9pertoire",
 Tot_size			: "Taille",
 Created_on			: "Date",
 Comment			: "Infos",
 
 
 //Boutons
 add_button			: "Ajouter",
 add_url			: "Ajouter",
 ok				: "   OK   ",
 Cancel				: " Annuler ",
 no				: "   Non   ",
 
 mnu_add			: "Ajouter un torrent",
 mnu_remove			: "Supprimer",
 mnu_start			: "D\u00e9marrer",
 mnu_pause			: "Suspendre",
 mnu_stop			: "Arr\u00eater",
 mnu_rss			: "Gestionnaire RSS",
 mnu_settings			: "Pr\u00e9f\u00e9rences",
 mnu_search			: "Rechercher",
 mnu_lang			: "Langue",
 
 //Autres variables ajout\u00e9es par spide
 torrent_add			: "Ajouter un torrent", /*Caption of torrent add box*/
 time_w				: "sm ", /*pour x semaines*/
 time_d				: "j ", /*pour x jours restants*/
 time_h				: "h ", /*pour x heures restants*/
 time_m				: "m ", /*pour x minutes restants*/
 time_s				: "s ", /*pour x secondes restants*/
 
 //Novik's addition
 Base_directory    		: "R\u00e9pertoire",
 Number_Peers_min		: "Nombre minimum de clients",
 Number_Peers_max		: "Nombre maximum de clients",
 Tracker_Numwant		: "Nombre souhait\u00e9 de clients",
 Number_Peers_For_Seeds_min	: "Nombre minimum de sources",
 Number_Peers_For_Seeds_max	: "Nombre maximum de sources",
 Enable_port_open		: "Ouvrir le port d'\u00e9coute",
 dht_port			: "Utiliser le port UDP pour DHT",
 Ather_Limiting			: "Autres limitations",
 Number_dl_slots		: "Nombre de slots de t\u00e9l\u00e9chargement",
 Glob_max_memory		: "Utilisation maximale de la m\u00e9moire",
 Glob_max_files			: "Nombre maximum de fichiers ouverts",
 Glob_max_http			: "Nombre maximum de connexions HTTP ouvertes",
 Glob_max_sockets		: "Nombre maximum de sockets ouverts",
 Ather_sett			: "Autre",
 Directory_For_Dl		: "R\u00e9pertoire par d\u00e9faut pour les t\u00e9l\u00e9chargements",
 Check_hash			: "V\u00e9rifier le Hash apr\u00e8s le t\u00e9l\u00e9chargement",
 Hash				: "Hash",
 IsOpen				: "Ouvert",
 DisableTracker			: "D\u00e9sactiv\u00e9",
 EnableTracker			: "Activ\u00e9",
 ClientVersion			: "Client",
 Flags				: "Flags",
 ReqTimeout			: "La requ\u00eate a \u00e9chou\u00e9",
 GetTrackerMessage		: "Message re\u00e7u du tracker",
 Help				: "Aide",
 PHPDoesnt_enabled		: "Votre serveur web ne supporte pas PHP. Corriger \u00e7a et r\u00e9essayer.",
 Speed				: "Vitesse",
 Dont_add_tname			: "Ne pas ajouter le nom du torrent au r\u00e9pertoire", 
 Free_Disk_Space		: "Espace disponible",
 badXMLRPCVersion		: "rTorrent est compil\u00e9 avec une version incorrecte de la librairie xmlrpc-c, sans le support i8. La version doit \u00eatre >= 1.11. Certaines fonctionnalit\u00e9s ne seront pas disponibles.",
 badLinkTorTorrent		: "Lien incorrect avec rTorrent. Verifier qu'il est bien en cours d'ex\u00e9cution. Verifier la configuration de $scgi_port et de $scgi_host dans config.php et scgi_port dans le fichier de configuration de rTorrent.",
 badUploadsPath			: "Le serveur Web ne peut pas acc\u00e9der au dossier torrents en Lecture/Ecriture/Execution. Vous ne pouvez pas ajouter de torrent via ruTorrent.",
 badSettingsPath		: "Le serveur Web ne peut pas acc\u00e9der au dossier de configuration en Lecture/Ecriture/Execution. ruTorrent ne peut pas enregistrer votre configuration.",
 mnu_help			: "A propos",
 badUploadsPath2		: "rTorrent ne peut pas acc\u00e9der au dossier torrents en Lecture/Ecriture. Vous ne pouvez pas ajouter de torrents via ruTorrent.",
 View				: "Voir",
 AsList				: "En liste",
 AsTree				: "En arbre",
 Group				: "Groupe",
 SuperSeed			: "Super-seed",
 badTestPath			: "rTorrent ne peut pas acc\u00e9der au fichier ./test.sh en Lecture/Ecriture. ruTorrent ne fonctionnera pas.",
 badSettingsPath2		: "rTorrent ne peut pas acc\u00e9der au dossier de configuration en Lecture/Ecriture. ruTorrent ne fonctionnera pas.",
 scrapeDownloaded		: "T\u00e9l\u00e9charg\u00e9",
 Total				: "Total",
 PCRENotFound			: "Le module PCRE de PHP n'est pas install\u00e9. ruTorrent ne fonctionnera pas.",
 addTorrentSuccess		: "Torrent ajout\u00e9 \u00e0 rTorrent avec succ\u00e8s.",
 addTorrentFailed		: "Erreur: le torrent n'a pas pu \u00eatre ajout\u00e9 \u00e0 rTorrent.",
 pnlState			: "Etat",
 newLabel			: "Nouvelle \u00e9tiquette",
 enterLabel			: "Ajouter une \u00e9tiquette",
 UIEffects			: "Activer les effets de l'UI",
 Plugins			: "Plugins",
 plgName			: "Nom",
 plgStatus			: "Etat",
 plgLoaded			: "Charg\u00e9",
 plgDisabled			: "Desactiv\u00e9",
 plgVersion			: "Version",
 plgAuthor			: "Auteur",
 plgDescr			: "Description",
 mnu_go				: "Aller",
 pluginCantStart		: "Le plugin ne peut pas d\u00e9marrer pour une raison inconnue.",
 doFastResume			: "D\u00e9marrage rapide",
 innerSearch			: "Torrents locaux",
 removeTeg			: "Retirer tag",
 errMustBeInSomeHost		: "ruTorrent et rTorrent doivent \u00eatre install\u00e9s sur le m\u00eame serveur. Le plugin ne fonctionnera pas.",
 warnMustBeInSomeHost		: "ruTorrent et rTorrent doivent \u00eatre install\u00e9s sur le m\u00eame serveur. Certaines fonctionnalit\u00e9s ne seront pas disponibles.",
 plgShutdown			: "D\u00e9sactiver",
 limit				: "Limite",
 speedList			: "Menu de la liste des vitesses (s\u00e9par\u00e9 par des virgules)",
 ClearButton			: "Vider",
 dontShowTimeouts		: "Ignorer les messages d'\u00e9chec",
 fullTableRender		: "Rendu complet de la liste des torrents",
 showScrollTables		: "Afficher la liste des torrents pendant le d\u00e9filement",
 idNotFound			: "rTorrent ne peut pas acc\u00e9der au programme 'id'. Certaines fonctionnalit\u00e9s ne seront pas disponibles.",
 gzipNotFound			: "Le serveur web n'a pas acc\u00e8s au programme 'gzip'. ruTorrent ne fonctionnera pas.",
 cantObtainUser         	: "ruTorrent ne d\u00e9tecte pas l'uid ou l'utilisateur de rtorrent. Certaines fonctionnalit\u00e9s ne seront pas disponibles.",
 retryOnErrorTitle		: "If rtorrent is not available try again after",
 retryOnErrorList		: { 0: "Don't try again", 30: "30 sec", 60: "1 min", 120: "2 min", 300: "5 min", 900: "15 min" }
};