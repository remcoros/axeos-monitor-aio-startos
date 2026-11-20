import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.0.0:10',
  releaseNotes: {
    en_US:
      'Requires StartOS 0.4.2 or later. New installs get a generated Grafana admin password in place of admin/admin, shown by the Grafana Credentials action. This update leaves an existing password as it is: if you still sign in with admin/admin, run Reset Admin Password now.',
    es_ES:
      'Requiere StartOS 0.4.2 o posterior. Las instalaciones nuevas reciben una contraseña de administrador de Grafana generada en lugar de admin/admin, que muestra la acción Credenciales de Grafana. Esta actualización no cambia una contraseña existente: si todavía inicia sesión con admin/admin, ejecute ahora Restablecer contraseña de administrador.',
    de_DE:
      'Erfordert StartOS 0.4.2 oder neuer. Neue Installationen erhalten statt admin/admin ein generiertes Grafana-Administratorpasswort, das die Aktion Grafana-Zugangsdaten anzeigt. Dieses Update lässt ein bestehendes Passwort unverändert: Wenn du dich noch mit admin/admin anmeldest, führe jetzt Administrator-Passwort zurücksetzen aus.',
    pl_PL:
      'Wymaga StartOS 0.4.2 lub nowszego. Nowe instalacje otrzymują wygenerowane hasło administratora Grafany zamiast admin/admin, wyświetlane przez akcję Dane logowania Grafany. Ta aktualizacja nie zmienia istniejącego hasła: jeśli nadal logujesz się jako admin/admin, uruchom teraz Zresetuj hasło administratora.',
    fr_FR:
      'Nécessite StartOS 0.4.2 ou une version ultérieure. Les nouvelles installations reçoivent un mot de passe administrateur Grafana généré à la place d’admin/admin, affiché par l’action Identifiants Grafana. Cette mise à jour ne modifie pas un mot de passe existant : si vous vous connectez encore avec admin/admin, lancez maintenant Réinitialiser le mot de passe administrateur.',
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
