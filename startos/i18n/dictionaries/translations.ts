import { LangDict } from './default'

export default {
  es_ES: {
    // main.ts
    1: 'Exportador JSON',
    2: 'El Exportador JSON está listo',
    3: 'El Exportador JSON no está accesible',
    4: 'Prometheus está listo',
    5: 'Prometheus no está accesible',
    6: 'Grafana está listo',
    7: 'Grafana no está accesible',

    // interfaces.ts
    100: 'Panel de Grafana',
    101: 'Interfaz web de Grafana OSS',
    102: 'Navegador de métricas en bruto de Prometheus',

    // actions/config.ts
    200: 'Direcciones IP de Bitaxe',
    201: 'Una entrada por minero, tal como aparece en su pantalla o en la lista de clientes de su router. Reserve cada dirección en el router: un minero cuya dirección cambia empieza un historial nuevo.',
    202: 'Versión de AxeOS (ESP-Miner)',
    203: 'Elige el panel y las métricas que corresponden al firmware de sus mineros. Cada minero muestra su versión de AxeOS en su propia página web. Cambiarlo reinicia el servicio.\n- >= 2.11.x: mineros con AxeOS 2.11 o posterior\n- <= 2.10.x: mineros con AxeOS 2.10 o anterior',
    204: 'Intervalo de scraping',
    205: 'Los intervalos más cortos registran más detalle y hacen crecer la base de datos más rápido.',
    206: 'Configurar Monitor de AxeOS',
    207: 'Elija los mineros que desea monitorear, la versión de AxeOS que ejecutan y con qué frecuencia leerlos.',
    208: 'Debe ser una dirección IPv4 válida (p. ej. 192.168.1.100)',
    209: 'Configuración guardada',
    210: 'El servicio se está reiniciando para cargar el panel de la versión de AxeOS seleccionada.',
    211: 'Inicie el servicio para comenzar a recopilar métricas.',

    // actions/reloadPrometheusConfig.ts
    300: 'Recargar configuración de Prometheus',
    301: 'Recargar la configuración de Prometheus.',
    302: 'Configuración de Prometheus',
    303: 'Prometheus recargó su configuración.',
    304: 'Prometheus no está en ejecución. La nueva configuración se usará la próxima vez que se inicie.',
    305: 'Prometheus rechazó la recarga y sigue ejecutando su configuración anterior. Revise los registros del servicio.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Nueva contraseña de administrador',
    401: 'La nueva contraseña para el usuario administrador de Grafana. Mínimo 4 caracteres.',
    402: 'La contraseña debe tener al menos 4 caracteres',
    403: 'Restablecer contraseña de administrador',
    404: 'Restablece la contraseña del usuario administrador de Grafana. Tiene efecto inmediato.',
    405: 'Esto sobrescribirá inmediatamente la contraseña actual del administrador de Grafana.',
    406: 'La contraseña del administrador de Grafana se ha restablecido correctamente.',
    407: 'Éxito',
    408: 'Usuario',
    409: 'Contraseña',

    // init/index.ts
    500: 'Añada la dirección IP de cada Bitaxe que quiera monitorear',
    501: 'Seleccione la versión de AxeOS (ESP-Miner) que ejecutan sus mineros',
    600: 'Credenciales de Grafana',
    601: 'Muestra el usuario administrador de Grafana y la última contraseña establecida por StartOS.',
    602: 'No hay ninguna contraseña de Grafana guardada. Ejecute Restablecer contraseña de administrador.',
    603: 'Inicie sesión en el panel de Grafana con estas credenciales. Si desde entonces cambió la contraseña en Grafana, esta ya no funciona; ejecute Restablecer contraseña de administrador para establecer una nueva.',
    604: 'Obtenga la contraseña de administrador de Grafana antes de iniciar sesión',
  },
  de_DE: {
    // main.ts
    1: 'JSON-Exporter',
    2: 'JSON-Exporter ist bereit',
    3: 'JSON-Exporter ist nicht erreichbar',
    4: 'Prometheus ist bereit',
    5: 'Prometheus ist nicht erreichbar',
    6: 'Grafana ist bereit',
    7: 'Grafana ist nicht erreichbar',

    // interfaces.ts
    100: 'Grafana-Dashboard',
    101: 'Grafana OSS Weboberfläche',
    102: 'Browser für Prometheus-Rohmetriken',

    // actions/config.ts
    200: 'Bitaxe-IP-Adressen',
    201: 'Ein Eintrag pro Miner, wie er auf seinem Display oder in der Client-Liste deines Routers angezeigt wird. Reserviere jede Adresse in deinem Router: Ein Miner, dessen Adresse sich ändert, beginnt einen neuen Verlauf.',
    202: 'AxeOS-Version (ESP-Miner)',
    203: 'Wählt das Dashboard und die Metriken, die zur Firmware deiner Miner passen. Jeder Miner zeigt seine AxeOS-Version auf seiner eigenen Weboberfläche. Eine Änderung startet den Dienst neu.\n- >= 2.11.x: Miner mit AxeOS 2.11 oder neuer\n- <= 2.10.x: Miner mit AxeOS 2.10 oder älter',
    204: 'Scrape-Intervall',
    205: 'Kürzere Intervalle erfassen mehr Details und lassen die Datenbank schneller wachsen.',
    206: 'AxeOS Monitor konfigurieren',
    207: 'Wähle die zu überwachenden Miner, ihre AxeOS-Version und wie oft sie abgefragt werden.',
    208: 'Muss eine gültige IPv4-Adresse sein (z. B. 192.168.1.100)',
    209: 'Konfiguration gespeichert',
    210: 'Der Dienst startet neu, um das Dashboard für die gewählte AxeOS-Version zu laden.',
    211: 'Starte den Dienst, um mit der Erfassung von Metriken zu beginnen.',

    // actions/reloadPrometheusConfig.ts
    300: 'Prometheus-Konfiguration neu laden',
    301: 'Die Prometheus-Konfiguration neu laden.',
    302: 'Prometheus-Konfiguration',
    303: 'Prometheus hat seine Konfiguration neu geladen.',
    304: 'Prometheus läuft nicht. Die neue Konfiguration wird beim nächsten Start verwendet.',
    305: 'Prometheus hat das Neuladen abgelehnt und läuft weiter mit der vorherigen Konfiguration. Prüfe die Dienstprotokolle.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Neues Administrator-Passwort',
    401: 'Das neue Passwort für den Grafana-Administrator. Mindestens 4 Zeichen.',
    402: 'Das Passwort muss mindestens 4 Zeichen lang sein',
    403: 'Administrator-Passwort zurücksetzen',
    404: 'Setzt das Passwort des Grafana-Administrators zurück. Wirkt sofort.',
    405: 'Dies überschreibt das aktuelle Grafana-Administrator-Passwort sofort.',
    406: 'Das Grafana-Administrator-Passwort wurde erfolgreich zurückgesetzt.',
    407: 'Erfolg',
    408: 'Benutzername',
    409: 'Passwort',

    // init/index.ts
    500: 'Füge die IP-Adresse jedes Bitaxe hinzu, den du überwachen möchtest',
    501: 'Wähle die AxeOS-Version (ESP-Miner), die deine Miner ausführen',
    600: 'Grafana-Zugangsdaten',
    601: 'Zeigt den Grafana-Administratornamen und das zuletzt von StartOS gesetzte Passwort.',
    602: 'Es ist kein Grafana-Passwort gespeichert. Führe Administrator-Passwort zurücksetzen aus.',
    603: 'Melde dich mit diesen Zugangsdaten beim Grafana-Dashboard an. Wenn du das Passwort seitdem in Grafana geändert hast, funktioniert dieses nicht mehr; führe Administrator-Passwort zurücksetzen aus, um ein neues zu setzen.',
    604: 'Hole dir das Grafana-Administratorpasswort, bevor du dich anmeldest',
  },
  pl_PL: {
    // main.ts
    1: 'Eksporter JSON',
    2: 'Eksporter JSON jest gotowy',
    3: 'Eksporter JSON jest nieosiągalny',
    4: 'Prometheus jest gotowy',
    5: 'Prometheus jest nieosiągalny',
    6: 'Grafana jest gotowa',
    7: 'Grafana jest nieosiągalna',

    // interfaces.ts
    100: 'Pulpit Grafany',
    101: 'Interfejs webowy Grafana OSS',
    102: 'Przeglądarka surowych metryk Prometheusa',

    // actions/config.ts
    200: 'Adresy IP koparek Bitaxe',
    201: 'Jeden wpis na koparkę, tak jak widnieje na jej ekranie lub na liście klientów routera. Zarezerwuj każdy adres w routerze: koparka, której adres się zmieni, zaczyna nową historię.',
    202: 'Wersja AxeOS (ESP-Miner)',
    203: 'Wybiera pulpit i metryki pasujące do oprogramowania Twoich koparek. Każda koparka pokazuje swoją wersję AxeOS na własnej stronie WWW. Zmiana tego ustawienia uruchamia usługę ponownie.\n- >= 2.11.x: koparki z AxeOS 2.11 lub nowszym\n- <= 2.10.x: koparki z AxeOS 2.10 lub starszym',
    204: 'Interwał zbierania metryk',
    205: 'Krótsze odstępy zapisują więcej szczegółów i szybciej powiększają bazę danych.',
    206: 'Skonfiguruj AxeOS Monitor',
    207: 'Wybierz koparki do monitorowania, wersję AxeOS, której używają, i jak często je odczytywać.',
    208: 'Musi być prawidłowym adresem IPv4 (np. 192.168.1.100)',
    209: 'Zapisano konfigurację',
    210: 'Usługa uruchamia się ponownie, aby wczytać pulpit dla wybranej wersji AxeOS.',
    211: 'Uruchom usługę, aby rozpocząć zbieranie metryk.',

    // actions/reloadPrometheusConfig.ts
    300: 'Przeładuj konfigurację Prometheusa',
    301: 'Przeładuj konfigurację Prometheusa.',
    302: 'Konfiguracja Prometheusa',
    303: 'Prometheus przeładował swoją konfigurację.',
    304: 'Prometheus nie jest uruchomiony. Nowa konfiguracja zostanie użyta przy następnym starcie.',
    305: 'Prometheus odrzucił przeładowanie i nadal działa na poprzedniej konfiguracji. Sprawdź dzienniki usługi.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Nowe hasło administratora',
    401: 'Nowe hasło dla administratora Grafany. Minimum 4 znaki.',
    402: 'Hasło musi mieć co najmniej 4 znaki',
    403: 'Zresetuj hasło administratora',
    404: 'Resetuje hasło administratora Grafany. Działa natychmiast.',
    405: 'Spowoduje to natychmiastowe nadpisanie obecnego hasła administratora Grafany.',
    406: 'Hasło administratora Grafany zostało pomyślnie zresetowane.',
    407: 'Sukces',
    408: 'Nazwa użytkownika',
    409: 'Hasło',

    // init/index.ts
    500: 'Dodaj adres IP każdej koparki Bitaxe, którą chcesz monitorować',
    501: 'Wybierz wersję AxeOS (ESP-Miner), której używają Twoje koparki',
    600: 'Dane logowania Grafany',
    601: 'Pokazuje nazwę administratora Grafany i hasło ostatnio ustawione przez StartOS.',
    602: 'Nie zapisano hasła Grafany. Uruchom Zresetuj hasło administratora.',
    603: 'Zaloguj się do pulpitu Grafany tymi danymi. Jeśli od tego czasu zmieniono hasło w Grafanie, to już nie działa; uruchom Zresetuj hasło administratora, aby ustawić nowe.',
    604: 'Pobierz hasło administratora Grafany przed zalogowaniem',
  },
  fr_FR: {
    // main.ts
    1: 'Exportateur JSON',
    2: "L'exportateur JSON est prêt",
    3: "L'exportateur JSON est injoignable",
    4: 'Prometheus est prêt',
    5: 'Prometheus est injoignable',
    6: 'Grafana est prêt',
    7: 'Grafana est injoignable',

    // interfaces.ts
    100: 'Tableau de bord Grafana',
    101: 'Interface web Grafana OSS',
    102: 'Navigateur de métriques brutes Prometheus',

    // actions/config.ts
    200: 'Adresses IP des Bitaxe',
    201: 'Une entrée par mineur, telle qu’affichée sur son écran ou dans la liste des clients de votre routeur. Réservez chaque adresse sur votre routeur : un mineur dont l’adresse change commence un nouvel historique.',
    202: 'Version AxeOS (ESP-Miner)',
    203: 'Choisit le tableau de bord et les métriques adaptés au firmware de vos mineurs. Chaque mineur affiche sa version d’AxeOS sur sa propre page web. Modifier ce réglage redémarre le service.\n- >= 2.11.x : mineurs sous AxeOS 2.11 ou plus récent\n- <= 2.10.x : mineurs sous AxeOS 2.10 ou plus ancien',
    204: 'Intervalle de collecte',
    205: 'Des intervalles plus courts enregistrent plus de détails et font grossir la base de données plus vite.',
    206: 'Configurer AxeOS Monitor',
    207: 'Choisissez les mineurs à surveiller, la version d’AxeOS qu’ils exécutent et la fréquence de leur lecture.',
    208: 'Doit être une adresse IPv4 valide (par ex. 192.168.1.100)',
    209: 'Configuration enregistrée',
    210: 'Le service redémarre pour charger le tableau de bord de la version AxeOS sélectionnée.',
    211: 'Démarrez le service pour commencer à collecter les métriques.',

    // actions/reloadPrometheusConfig.ts
    300: 'Recharger la configuration Prometheus',
    301: 'Recharger la configuration de Prometheus.',
    302: 'Configuration Prometheus',
    303: 'Prometheus a rechargé sa configuration.',
    304: "Prometheus n'est pas en cours d'exécution. La nouvelle configuration sera utilisée à son prochain démarrage.",
    305: 'Prometheus a refusé le rechargement et conserve sa configuration précédente. Consultez les journaux du service.',

    // actions/resetGrafanaAdminPassword.ts
    400: 'Nouveau mot de passe administrateur',
    401: "Le nouveau mot de passe de l'utilisateur administrateur Grafana. Minimum 4 caractères.",
    402: 'Le mot de passe doit comporter au moins 4 caractères',
    403: 'Réinitialiser le mot de passe administrateur',
    404: "Réinitialise le mot de passe de l'utilisateur administrateur Grafana. Prend effet immédiatement.",
    405: "Cela écrasera immédiatement le mot de passe actuel de l'administrateur Grafana.",
    406: 'Le mot de passe administrateur Grafana a été réinitialisé avec succès.',
    407: 'Succès',
    408: "Nom d'utilisateur",
    409: 'Mot de passe',

    // init/index.ts
    500: 'Ajoutez l’adresse IP de chaque Bitaxe que vous souhaitez surveiller',
    501: 'Sélectionnez la version AxeOS (ESP-Miner) utilisée par vos mineurs',
    600: 'Identifiants Grafana',
    601: 'Affiche le nom d’administrateur Grafana et le dernier mot de passe défini par StartOS.',
    602: 'Aucun mot de passe Grafana n’est enregistré. Lancez Réinitialiser le mot de passe administrateur.',
    603: 'Connectez-vous au tableau de bord Grafana avec ces identifiants. Si vous avez changé le mot de passe dans Grafana depuis, celui-ci ne fonctionne plus ; lancez Réinitialiser le mot de passe administrateur pour en définir un nouveau.',
    604: 'Récupérez le mot de passe administrateur Grafana avant de vous connecter',
  },
} satisfies Record<string, LangDict>
