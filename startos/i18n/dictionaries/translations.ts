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
    200: 'Dirección(es) IP de AxeOS',
    201: 'Dirección(es) IP de la(s) instancia(s) de AxeOS a monitorear. Una dirección IP por línea.',
    202: 'Versión de AxeOS (ESP-Miner)',
    203: 'La versión de AxeOS (ESP-Miner) que está ejecutando.',
    204: 'Intervalo de scraping',
    205: 'Frecuencia de scraping de métricas. El valor predeterminado es 15 segundos.',
    206: 'Configurar Monitor de AxeOS',
    207: 'Configurar ajustes del Monitor de AxeOS',

    // actions/reloadPrometheusConfig.ts
    300: 'Recargar configuración de Prometheus',
    301: 'Recargar la configuración de Prometheus.',
    302: 'Éxito',
    303: 'Configuración de Prometheus recargada exitosamente.',
    304: 'Prometheus no está ejecutándose, no se realizó ninguna acción.',
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
    200: 'AxeOS-IP-Adresse(n)',
    201: 'IP-Adresse(n) der zu überwachenden AxeOS-Instanz(en). Eine IP-Adresse pro Zeile.',
    202: 'AxeOS (ESP-Miner) Version',
    203: 'Die Version von AxeOS (ESP-Miner), die Sie ausführen.',
    204: 'Scrape-Intervall',
    205: 'Wie oft Metriken gesammelt werden sollen. Standard sind 15 Sekunden.',
    206: 'AxeOS Monitor konfigurieren',
    207: 'AxeOS Monitor-Einstellungen konfigurieren',

    // actions/reloadPrometheusConfig.ts
    300: 'Prometheus-Konfiguration neu laden',
    301: 'Die Prometheus-Konfiguration neu laden.',
    302: 'Erfolg',
    303: 'Prometheus-Konfiguration erfolgreich neu geladen.',
    304: 'Prometheus läuft nicht, keine Aktion durchgeführt.',
  },
  pl_PL: {
    // main.ts
    1: 'Eksporter JSON',
    2: 'Eksporter JSON jest gotowy',
    3: 'Eksporter JSON jest niedostępny',
    4: 'Prometheus jest gotowy',
    5: 'Prometheus jest niedostępny',
    6: 'Grafana jest gotowa',
    7: 'Grafana jest niedostępna',

    // interfaces.ts
    100: 'Panel Grafana',
    101: 'Interfejs webowy Grafana OSS',
    102: 'Przeglądarka surowych metryk Prometheus',

    // actions/config.ts
    200: 'Adres(y) IP AxeOS',
    201: 'Adres(y) IP instancji AxeOS do monitorowania. Jeden adres IP na linię.',
    202: 'Wersja AxeOS (ESP-Miner)',
    203: 'Wersja AxeOS (ESP-Miner), którą uruchamiasz.',
    204: 'Interwał zbierania',
    205: 'Jak często zbierać metryki. Domyślnie 15 sekund.',
    206: 'Konfiguruj Monitor AxeOS',
    207: 'Konfiguruj ustawienia Monitora AxeOS',

    // actions/reloadPrometheusConfig.ts
    300: 'Przeładuj konfigurację Prometheus',
    301: 'Przeładuj konfigurację Prometheus.',
    302: 'Sukces',
    303: 'Konfiguracja Prometheus przeładowana pomyślnie.',
    304: 'Prometheus nie jest uruchomiony, nie podjęto żadnych działań.',
  },
  fr_FR: {
    // main.ts
    1: 'Exportateur JSON',
    2: "L'exportateur JSON est prêt",
    3: "L'exportateur JSON est inaccessible",
    4: 'Prometheus est prêt',
    5: 'Prometheus est inaccessible',
    6: 'Grafana est prêt',
    7: 'Grafana est inaccessible',

    // interfaces.ts
    100: 'Tableau de bord Grafana',
    101: 'Interface Web Grafana OSS',
    102: 'Navigateur de métriques brutes Prometheus',

    // actions/config.ts
    200: 'Adresse(s) IP AxeOS',
    201: "Adresse(s) IP de l'(des) instance(s) AxeOS à surveiller. Une adresse IP par ligne.",
    202: 'Version AxeOS (ESP-Miner)',
    203: "La version d'AxeOS (ESP-Miner) que vous utilisez.",
    204: 'Intervalle de collecte',
    205: 'Fréquence de collecte des métriques. Par défaut : 15 secondes.',
    206: 'Configurer le moniteur AxeOS',
    207: 'Configurer les paramètres du moniteur AxeOS',

    // actions/reloadPrometheusConfig.ts
    300: 'Recharger la configuration Prometheus',
    301: 'Recharger la configuration Prometheus.',
    302: 'Succès',
    303: 'Configuration Prometheus rechargée avec succès.',
    304: "Prometheus n'est pas en cours d'exécution, aucune action effectuée.",
  },
} satisfies Record<string, LangDict>