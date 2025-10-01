"use client";
import {
  ShieldCheck,
  UserCircle,
  Lock,
  Cookie,
  CalendarClock,
  FileText,
  Fingerprint,
  Mail,
  History,
} from "lucide-react";
import NavLink from "@/app/home/components/NavLink";

export default function ConfidentialitePage() {
  return (
    <>
      <NavLink />
      <main className="max-w-4xl mx-auto px-6 py-10 text-black-800 min-h-screen">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-8">
          <header className="text-center">
            <h1 className="text-3xl font-bold text-green-700 mb-2">
              Politique de confidentialité
            </h1>
            <p className="text-sm text-gray-600">
              Dernière mise à jour : 30 septembre 2025
            </p>
          </header>

          <section>
            <h2 className="flex text-justify items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <UserCircle className="w-5 h-5" /> 1. Qui sommes-nous ?
            </h2>
            <div className="space-y-2 text-justify">
            <p>
              Motiv' Sport est une plateforme web conçue pour encourager la
              pratique sportive à travers des événements collaboratifs,
              accessibles à tous. Pensée comme un outil pédagogique dans le cadre
              de la validation RNCP 5 DWWM (Développeur Web et Web Mobile), elle
              met en avant l'inclusivité, la simplicité d'usage et le respect des
              données personnelles.
             </p>
              <p>
              Le projet repose sur une approche humaine et locale, valorisant
              l'engagement, la motivation et le lien social. Chaque fonctionnalité
              de la création d'événements à la messagerie intégrée a été
              développée avec soin pour offrir une expérience fluide, sécurisée et
              conforme aux standards du web moderne.
              </p>
              <p>
              Motiv' Sport est porté par Vidad, basé à Toulouse, Occitanie,
              France, dans une démarche de professionnalisation, de responsabilité
              numérique et d'amélioration continue.
            </p>
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <ShieldCheck className="w-5 h-5" /> 2. Données personnelles
              collectées
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Nom, prénom (si renseignés)</li>
              <li>Adresse e-mail</li>
              <li>Identifiant Firebase</li>
              <li>
                Données liées aux événements sportifs (création, participation)
              </li>
              <li>Messages échangés via la messagerie interne</li>
              <li>Statistiques d'activité (durée, distance, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <FileText className="w-5 h-5" /> 3. Finalité de la collecte
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Permettre l'inscription et la connexion sécurisée</li>
              <li>Afficher et gérer les événements sportifs</li>
              <li>Faciliter les échanges entre membres</li>
              <li>Suivre l'activité sportive de l'utilisateur</li>
              <li>Améliorer l'expérience utilisateur</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <ShieldCheck className="w-5 h-5" /> 4. Base légale du traitement
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Consentement explicite de l'utilisateur</li>
              <li>Intérêt légitime du fonctionnement du service</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <CalendarClock className="w-5 h-5" /> 5. Durée de conservation
            </h2>
            <p>
              Les données sont conservées tant que l'utilisateur est actif sur la
              plateforme, ou jusqu'à la demande de suppression de son compte.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <Lock className="w-5 h-5" /> 6. Sécurité des données
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Authentification sécurisée</li>
              <li>Accès restreint aux données</li>
              <li>Communication chiffrée (HTTPS)</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <Fingerprint className="w-5 h-5" /> 7. Droits des utilisateurs
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Droit d'accès à ses données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement ("droit à l'oubli")</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à :{" "}
              <strong>vidad31@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <Cookie className="w-5 h-5" /> 8. Cookies
            </h2>
            <p>
              Le site utilise uniquement des cookies techniques pour assurer le
              bon fonctionnement de l'interface et mémoriser les préférences
              utilisateur. Aucun cookie publicitaire ou de traçage n'est utilisé.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <Mail className="w-5 h-5" /> 9. Contact
            </h2>
            <p>
              Pour toute question relative à la protection des données :
              <br />
              Email : vidad31@gmail.com 
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-green-700 mb-2">
              <History className="w-5 h-5" />10. Mise à jour
            </h2>
            <p>
              Cette politique peut être modifiée à tout moment. Les utilisateurs
              seront informés en cas de changement significatif.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}